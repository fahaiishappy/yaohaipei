<?php
namespace app\api\controller;
use think\Controller;
use think\Config;
use think\Request;
use think\Session;
use think\Db;
use think\log;
use think\Cache;
use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;
class Api extends Common{

    protected $appid = 'wx91104fc1e784a6a7';
    protected $appsecret = '7aa5c394f1995627e0876536929f5b77';
    protected $request;

    public function __construct()
    {
        $this->request = Request::instance();
        header("Access-Control-Allow-Origin: *");
    }

    /**
     * 获取JS-SDK调用权限
     */
    public function share()
    {
        $url = $this->request->post('url');
        if (!$url) {
            $url = 'https://www.hongrensutui.com/';
        }
        // 获取accesstoken
        $accessToken = get_access_token_gzh();
        // 获取jsapi_ticket
        $jsapiTicket = $this->_getJsapiTicket($accessToken['access_token']);
        if (isset($jsapiTicket['code'])) {
            return json($jsapiTicket);
        }
        // -------- 生成签名 --------
        $time = time();
        $wxConf = [
            'jsapi_ticket' => $jsapiTicket,
            'noncestr' => md5($time . '!@#$%^&*()_+'),
            'timestamp' => $time,
            'url' => $url,
        ];
        $string1 = sprintf('jsapi_ticket=%s&noncestr=%s&timestamp=%s&url=%s', $wxConf['jsapi_ticket'], $wxConf['noncestr'], $wxConf['timestamp'], $wxConf['url']);
        // 计算签名
        $wxConf['signature'] = sha1($string1);
        $wxConf['appid'] = $this->appid;
        return json($wxConf);
    }

    /**
     * 获取JS证明
     */
    private function _getJsapiTicket($accessToken)
    {
        // 获取js_ticket
        $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=" . $accessToken . "&type=jsapi";
        $jsTicket = file_get_contents($url);
        $jsTicket = json_decode($jsTicket);
        if (isset($jsTicket->errmsg) && $jsTicket->errmsg != 'ok')
        {
            return [
                'code' => $jsTicket->errcode,
                'msg'  => $jsTicket->errmsg
            ];
        }
        // 保存至缓存
        $ticket = $jsTicket->ticket;
        return $ticket;
    }

    /**
     * 获取短信验证码
     */
    public function verify_code()
    {
        $input = $this->request->param();
        if (!$this->request->isPost()) {
            exit();
        }
        $receiver = trim($input['receiver']);
        if (empty($receiver)) {
            return $this->app_error('请输入手机号');
        }
        db('yzcode')->where('createtime < ' . (time() - 1800))->delete();
        $data = db('yzcode')->where([
            'receiver' => $receiver
        ])->field(
            'receiver,verifycode,total,createtime'
        )->find();
        $code = randStr(6, 'NUMBER');
        if(!empty($data)){
            if($data['total'] >= 10) {
                $this->app_error('请勿频繁获取验证码');
            }
            db('yzcode')->where([
                'receiver' => $receiver
            ])->update([
                'verifycode' => $code,
                'total'      => $data['total'] + 1,
                'createtime' => time()
            ]);
        } else {
            db('yzcode')->insert([
                'receiver'   => $receiver,
                'verifycode' => $code,
                'total'      => 1,
                'createtime' => time(),
            ]);
        }
        AlibabaCloud::accessKeyClient('LTAI4GCTXnKeHsB2xaBmB7FT', 'hVHHO7HUre9IcyG5p6RqUMFg1HvWct')
            ->regionId('cn-hangzhou')
            ->asDefaultClient();
        try {
            $result = AlibabaCloud::rpc()
                ->product('Dysmsapi')
                // ->scheme('https') // https | http
                ->version('2017-05-25')
                ->action('SendSms')
                ->method('POST')
                ->host('dysmsapi.aliyuncs.com')
                ->options([
                    'query' => [
                    'RegionId'      => "cn-hangzhou",
                    'PhoneNumbers'  => $receiver,
                    'SignName'      => "玩转科技",
                    'TemplateCode'  => "SMS_190910325",
                    'TemplateParam' => json_encode(["code" => $code]),
                    ],
                ])
                ->request();
            $res = $result->toArray();
        } catch (ClientException $e) {
            return $this->app_error('短信发送失败');
        } catch (ServerException $e) {
            return $this->app_error('短信发送失败');
        }
        if ($res['Code'] == 'OK') {
            return $this->app_json([
                'Code' => $code
            ]);
        }else{
            return $this->app_json([
                'Code' => 0
            ]);
        }
        return $this->app_error('短信发送失败');
    }

    /**
     * 获取微信授权CODE
     */
    public function login()
    {
        $code = $this->request->get('code');
        $backurl = urldecode($this->request->get('backurl'));
        if (\strpos($backurl, '?id') !== false) {
            $backurl .= '&code=' . $code;
        } else if (\strpos($backurl, '?invite') !== false) {
            $backurl .= '&code=' . $code;
        } else if (\strpos($backurl, '?from') !== false) {
            $backurl .= '?code=' . $code;
        } else if (\strpos($backurl, '?') !== false) {
            $backurl .= '&code=' . $code;
        } else {
            $backurl .= '?code=' . $code;
        }
        if ($code) {
            $this->redirect($backurl, 302);
        } else {
            exit('缺少code!');
        }
    }

    /**
     * 获取微信登录
     */
    public function user()
    {
        $input = $this->request->param();
        // dump($input);exit();
        // 获取CODE
        $code = trim($input["code"]);

        $invite = intval($input["invite"] ?? 0);
        if(empty($code)) {
            return $this->app_error('缺少code参数');
        }

        // 根据code获取token;
        // platform = 1；H5
        if(empty($input['platform'])){
            $token = get_access_token_code_gzh($code);
            $openidname = 'openid';
            $openid = $token['openid'];
            $unionid = $token['unionid'];
            $userinfo = get_userinfo_h5($token['access_token'],$openid);

            $nickname = $userinfo['nickname'];
            $avatar = $userinfo['headimgurl'];
            $gender = $userinfo['sex'];
        }else{
            if($input['platform'] == 1){
                $token = get_access_token_code_gzh($code);
                $openidname = 'openid';
                $openid = $token['openid'];
                $unionid = $token['unionid'];
                $userinfo = get_userinfo_h5($token['access_token'],$openid);

                $nickname = $userinfo['nickname'];
                $avatar = $userinfo['headimgurl'];
                $gender = $userinfo['sex'];
            }
            // platform = 2；小程序
            if($input['platform'] == 2){
                $token = get_openid($code);
                $openidname = 'xopenid';
                $openid = $token['openid'];
                $unionid = $token['unionid'];
                $userinfo = $input["userInfo"];
                if(empty($userinfo)) {
                    return $this->app_error('缺少用户信息');
                }
                $nickname = $userinfo['nickName'];
                $avatar = $userinfo['avatarUrl'];
                $gender = $userinfo['gender'];
            }
        }
        
        
        $_info = db('member')->where(['unionid'=>$unionid])->find();
        $time = time();

        if($_info){
            $update = [
                'id'         => $_info['id'],
                $openidname         => $openid,
                'nickname'   => $nickname,
                'avatar'     => $avatar,
                'gender'     => $gender,
                'province'   => $userinfo['province'],
                'city'       => $userinfo['city'],
                'area'       => isset($userinfo['area']) ? $userinfo['area'] : '',
                'updatetime' => $time,
            ];
            db('member')->update($update); 
            $member  = $this->updatemember($_info['id']);
        }else{
            $user_id = '';
            if($invite){
                $user_id = db('member')->where('id ='.$invite)->find(); 
                if(empty($user_id['user_id'])){
                    $user_id = db('member')->where('id ='.$user_id['invite'])->find();
                }
            }
            $return = [
                $openidname         => $openid,
                'invite'            => $invite,
                'user_user_id'      => isset($user_id['user_id']) ? $user_id['user_id'] : 1063,
                'settled_user_id'   => isset($user_id['user_id']) ? $user_id['user_id'] : 1063,
                'member_user_id'    => isset($user_id['user_id']) ? $user_id['user_id'] : 1063,
                'unionid'           => isset($unionid) ? $unionid : '',
                'nickname'          => $nickname,
                'avatar'            => $avatar,
                'gender'            => $gender,
                'province'          => $userinfo['province'],
                'city'              => $userinfo['city'],
                'area'              => isset($userinfo['area']) ? $userinfo['area'] : '',
                'createtime'        => $time,
            ];
            db('member')->insert($return);
            $uid = db('member')->getLastInsID();
            $member  = $this->updatemember($uid);
        }
        return $this->app_json([
            'info' => $member,
            'time' => date('m.d',time()),
        ]);
    }

    // 刷新用户信息
    public function userinfo()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data["id"]) && !empty($data['id'])){
                $member  = $this->updatemember($data["id"]);
                return $this->app_json([
                    'info' => $member,
                    'time' => date('m.d',time()),
                ]);
            }
        }
    }

    public function updatemember($id)
    {
        $member  = db('member')->where('id = '.$id)->find();
        if($member['expire'] > 0){
            $member['expire'] = date("Y-m-d",$member['expire']);
        }
        if($member){
        	if($member['bind_id']){
        		$bindmember = db('member')->where('id = '.$member['bind_id'])->find();
        		$member["type"] = $bindmember["type"];
        		$member['card_id'] = $bindmember["card_id"];
        		$merchant  = db('merchant')->where('mid = '.$bindmember["id"])->find();
        		$cewebrity  = db('cewebrity')->where('mid = '.$bindmember["id"])->find();
        	}else{
        		$merchant  = db('merchant')->where('mid = '.$member["id"])->find();
        		$cewebrity  = db('cewebrity')->where('mid = '.$member["id"])->find();
        	}
    		if($member["type"] == 1){
                $member['company'] = $merchant['company'];
                $member['examine'] = $merchant['examine'];
                if(!$member['examine']){$member['examine'] = 0;}
            }else if($member["type"] == 2){
                $member['examine'] = $cewebrity['examine'];
                if(!$member['examine']){$member['examine'] = 0;}
            }else{
                $member['examine'] = 0;
            }
        }
        return $member;
    }

    public function pageindex()
    {
        $num = 0;
        $subscribe = 3;
        $celebrityBanner = [];
        $merchantBanner = [];
        if($this->request->isPost()){
            $data   = input('post.');

            //检测是否关注
            if(isset($data['openid']) && !empty($data['openid'])){
                $follow = $this->follow($data['openid']);
                if(!empty($follow['subscribe'])){
                    $subscribe = $follow['subscribe'];
                }
            } 

            //检测是否有新消息
            if(isset($data['userid']) && !empty($data['userid'])){
                $totaldocking = $this->totaldocking($data['userid']);
                if(!empty($totaldocking['num'])){
                    $num = $totaldocking['num'];
                }
            }

            //首页找网红->Banner
            if(isset($data['celebrityBanner']) && !empty($data['celebrityBanner'])){
                $celebrityBanner = $this->getBanner($data['celebrityBanner']);
            }

            //首页找商家->Banner
            if(isset($data['merchantBanner']) && !empty($data['merchantBanner'])){
                $merchantBanner = $this->getBanner($data['merchantBanner']);
            }
        }

        // 首页找商家->精选商家
        $recmerchant    =   db('merchant')->where([
                                'show' => ['=', 1],
                                'logo' => ['<>', ''],
                            ])
                            ->field('id,logo,title,category,platform,createtime')
                            ->find();

        if($recmerchant){
            $recmerchant['category'] = db('realm')->where(['id' => ['in', $recmerchant['category']]])->column("name");
            $recmerchant['platform'] = db('classify')->where(['id' => ['in', $recmerchant['platform']]])->column("name");
            $recmerchant['createtime'] = date('Y-m-d',$recmerchant['createtime']);
        }

        // 首页找找网红->导航按钮
        $specialcelebritylist   =   db('special')->where([
                                        'page' => 'celebrity-item',
                                        'status' => 1
                                    ])
                                    ->field('link,id,name,buttonimg,linkid,supplylist,sharecontent,sharetitle,banner')
                                    ->order('sort asc,id desc')
                                    ->select();

        // 首页找找商家->导航按钮
        $specialmerchantlist    =   db('special')->where([
                                        'page' => 'merchant-item',
                                        'status' => 1
                                    ])
                                    ->field('link,id,name,buttonimg,linkid,supplylist,sharecontent,sharetitle,banner')
                                    ->order('sort asc,id desc')
                                    ->select();

        return $this->app_json([
            'specialcelebritylist' => $specialcelebritylist,
            'specialmerchantlist' => $specialmerchantlist,
            'num' => $num,
            'subscribe' => $subscribe,
            'recmerchant' => $recmerchant,
            'message' => $this->message(),// 获取轮播消息
            'celebrityBanner' => $celebrityBanner,
            'merchantBanner' => $merchantBanner,
        ]);
    }

    public function pageabout()
    {
        $card = '';
        $pageDetails = '';
        if($this->request->isPost()){
            $data   = input('post.');

            if(isset($data["cardid"]) && !empty($data['cardid'])){
                $card = db('card')->where(['id' => $data['cardid']])->find();
                $card = $card['price']*$card['rate'];
            }

            if(isset($data['id']) && !empty($data['id'])){
                $pageDetails = db('onepage')->where(['id' => $data['id']])->field('id,content,img,title,author,hits,sharecontent,sharetitle,addtime')->find();
            }
        }

        return $this->app_json([
            'config' => db('h5config')->field('service,servicetip')->find(),
            'pageDetails' => $pageDetails,
            'card' => $card
        ]);
    }

    public function pageaboutrz()
    {
        $pageDetailsDy = db('onepage')->where(['id' => 33])->field('id,content,img,title,author,hits,sharecontent,sharetitle,addtime')->find();
        $pageDetailsKs = db('onepage')->where(['id' => 39])->field('id,content,img,title,author,hits,sharecontent,sharetitle,addtime')->find();

        return $this->app_json([
            'config' => db('h5config')->field('service,servicetip')->find(),
            'pageDetailsDy' => $pageDetailsDy,
            'pageDetailsKs' => $pageDetailsKs
        ]);
    }

    public function pagecewebritylist()
    {
        return $this->app_json([
            'getRealm' => $this->getRealm(''),
        ]);
    }

    public function pagecewebritydetails()
    {
        $onecewebrity = '';
        if($this->request->isPost()){
            $data   = input('post.');

            if(isset($data["id"]) && !empty($data['id'])){
                $onecewebrity = $this->onecewebrity($data["id"],$data["realmid"],$data["userid"]);
            }
        }
        
        return $this->app_json([
            'config' => db('h5config')->field('service,servicetip')->find(),
            'message' => $this->message(),// 获取轮播消息
            'onecewebrity' => $onecewebrity
        ]);
    }


    // 获取红人列表
    public function totalcewebrity()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $whereOr = [];
            if(isset($data['realmpid']) && !empty($data['realmpid'])){
            	$realmpid = $data['realmpid'];
                $whereOr = "find_in_set($realmpid,category)";
            }else{
                $data['realmid'] = '';
            }
            if(isset($data['type']) && !empty($data['type']) && $data['type'] != 0){
                $where['pay_type'] = ["=", $data['type']];
            }
            if(isset($data['fans']) && !empty($data['fans']) && $data['fans'] != '99'){
                if($data['fans'] === 10){
                    $where['fans'] = ['between', [0, 10]];
                }
                if($data['fans'] === 100){
                    $where['fans'] = ['between', [10, 100]];
                }
                if($data['fans'] === 500){
                    $where['fans'] = ['between', [100, 500]];
                }
                if($data['fans'] === 1000){
                    $where['fans'] = ['between', [500, 1000]];
                }
                if($data['fans'] === 1001){
                    $where['fans'] = ['between', [1000, 100000]];
                }
            }
            if(isset($data['platform']) && !empty($data['platform'])){
                $where['platform'] = array('eq',$data['platform']);
            }
            if(isset($data['pay_type']) && !empty($data['pay_type'])){
                $where['pay_type'] = array('eq',$data['pay_type']);
            }
            if(isset($data['search']) && !empty($data['search'])){
                $where['nickname'] = ["like", "%".trim($data['search'])."%"];
            }
            $where['status'] = array('eq',1);
            $where['examine'] = array('eq',2);
            $collect = [];
            $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
            $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
            $_offset = ($pagenum - 1) * $pagesize;
            $_list = db('cewebrity')
                    ->where($where)
                    ->where($whereOr)
                    ->limit($_offset . ',' . $pagesize)
                    ->order('sort desc,id desc')
                    ->field('id,avatar,nickname,platform,fans,category,cooperation,purpose,pay_type')
                    ->select();

            foreach ($_list as $k => $v){
                $_list[$k]['category'] = db('realm')->where(['id' => ['in', $_list[$k]['category']]])->column("name");
                $_list[$k]['cooperation'] = db('classify')->where(['id' => ['in', $_list[$k]['cooperation']]])->column("name");
                $_list[$k]['purpose'] = db('member')->where(['id' => ['in', $_list[$k]['purpose']]])->limit(8)->column("avatar");
            }
            return $this->app_json([
                'list' => $_list,
                'realmid' => $data['realmid'],
                'pagenum' => $pagenum
            ]);
        }
    }

    // 红人速配
    public function matecewebrity()
    {
        if($this->request->isPost()){
            $data   = input('post.');
             $whereOr = [];
            if(isset($data['sex']) && !empty($data['sex'])){
                $where['sex'] = ["=", $data['sex']];
            }
            if(isset($data['categorypid']) && !empty($data['categorypid'])){
                $category = explode(',',$data['categorypid']);
                foreach ($category as $k => $v){
                    $realmpid = $category[$k];
                    $whereOr = "find_in_set($realmpid,category)";
                }
            }else{
                $data['categoryid'] = '';
            }
            if(isset($data['fans']) && !empty($data['fans'])){
                if($data['fans'] === 10 || $data['fans'] === '10'){
                    $where['fans'] = ['between', [0, 10]];
                }
                if($data['fans'] === 100 || $data['fans'] === '100'){
                    $where['fans'] = ['between', [10, 100]];
                }
                if($data['fans'] === 500 || $data['fans'] === '500'){
                    $where['fans'] = ['between', [100, 500]];
                }
                if($data['fans'] === 1000 || $data['fans'] === '1000'){
                    $where['fans'] = ['between', [500, 1000]];
                }
                if($data['fans'] === 1001 || $data['fans'] === '1001'){
                    $where['fans'] = ['between', [1000, 100000]];
                }
            }
            if(isset($data['platform']) && !empty($data['platform']) && $data['platform'] != '不限'){
                $where['platform'] = ["=", $data['platform']];
            }
            $where['status'] = array('eq',1);
            $where['examine'] = array('eq',2);
            $collect = [];
            $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
            $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
            $_offset = ($pagenum - 1) * $pagesize;
            $_list = db('cewebrity')->where($where)->where($whereOr)->limit($_offset . ',' . $pagesize)->order('sort desc,id desc')->select();
           if(isset($data['userid']) && !empty($data['userid'])){
                if(isset($data['mobile']) && !empty($data['mobile'])){
                    db('member')->where('id = '.$data['userid'])->update([
                        'mobile'        => $data['mobile']
                    ]);
                }
                foreach ($_list as $k => $v){
                    $_list[$k]['category'] = db('realm')->where(['id' => ['in', $_list[$k]['category']]])->column("name");
                    $_list[$k]['cooperation'] = db('classify')->where(['id' => ['in', $_list[$k]['cooperation']]])->column("name");

                    $_list[$k]['platform'] = explode(',',$_list[$k]['platform']);
                    $_list[$k]['purpose'] = db('member')->where([
                                                'id' => ['in', $_list[$k]['purpose']],
                                            ])->limit(8)->column("avatar");
                    if (in_array($_list[$k]['id'], $collect)){
                        $_list[$k]['show'] = true;
                    }else{
                        $_list[$k]['show'] = false;
                    }
                }
            }else{
                foreach ($_list as $k => $v){
                    $_list[$k]['category'] = db('realm')->where(['id' => ['in', $_list[$k]['category']]])->column("name");
                    $_list[$k]['cooperation'] = db('classify')->where(['id' => ['in', $_list[$k]['cooperation']]])->column("name");

                    $_list[$k]['platform'] = explode(',',$_list[$k]['platform']);
                    $_list[$k]['purpose'] = db('member')->where([
                                                'id' => ['in', $_list[$k]['purpose']],
                                            ])->limit(8)->column("avatar");
                }
            }
            return $this->app_json([
                'list' => $_list,
                'realmid' => $data['categoryid'],
                'pagenum' => $pagenum
            ]);
        }  
    }

    // 获取红人详情
    public function onecewebrity($id,$realmid,$userid)
    {

        $_list = db('cewebrity')->where('id = '.$id)->find();
        if(isset($realmid) && !empty($realmid)){
            $realm = explode(',',$realmid);
            $realmid = array_rand($realm,1);
            $realmname = $_list['category'].','.$realm[$realmid];
            $_list['category'] = db('realm')->where(['id' => ['in', $realmname]])->column("name");
        }else{
            $_list['category'] = db('realm')->where(['id' => ['in', $_list['category']]])->column("name");
        }
        
        $_list['cooperation'] = db('classify')->where(['id' => ['in', $_list['cooperation']]])->column("name");

        $_list['platform'] = explode(',',$_list['platform']);
    
        $_list['purpose'] = db('member')->where([
                'id' => ['in', $_list['purpose']],
            ])->limit(25)->column("avatar");

        if(isset($userid) && !empty($userid)){
            $userInfo = db('member')->where('id = '.$userid)->find();
            $collect = explode(',',$userInfo['collect']);
            if (in_array($_list['id'], $collect)){
                $_list['show'] = true;
            }else{
                $_list['show'] = false;
            }
        }
        return $_list;

    }

    // 获取商家详情
    public function onemerchant()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $_list = db('merchant')->where('id = '.$data['id'])->find();
            $_list['category'] = db('realm')->where(['id' => ['in', $_list['category']]])->column("name");
            $_list['platform'] = db('classify')->where(['id' => ['in', $_list['platform']]])->column("name");

            $_list['purpose'] = db('member')->where([
                    'id' => ['in', $_list['purpose']],
                ])->limit(25)->column("avatar");
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    // 获取商品列表
    public function getgoods()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['mid']) && !empty($data['mid'])){
                $_list = db('goods')->where(['mid' => $data['mid']])->order('sort desc,id desc')->select();
                foreach ($_list as $k => $v){
                    $_list[$k]['category'] = explode(',',$_list[$k]['category']);
                    $_list[$k]['platform'] = explode(',',$_list[$k]['platform']);
                }
                return $this->app_json([
                    'list' => $_list
                ]);
            }
        }
    }

    // 获取案例
    public function getcase()
    {
        $where['status'] = array('eq',1);
        $where['images'] = array('neq','');
        $_list = db('cases')->where($where)->order('sort desc')->select();
        return $this->app_json([
            'list' => $_list
        ]);
    }
    
    // 获取案例
    public function getcases()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['type']) && !empty($data['type'])){
                $where['status'] = array('eq',1);
                $where['images'] = array('neq','');
                $where['type'] = array('eq',$data['type']);
                $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
                $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
                $_offset = ($pagenum - 1) * $pagesize;
                $_list = db('cases')->where($where)->limit($_offset . ',' . $pagesize)->order('sort desc')->select();
                return $this->app_json([
                    'list' => $_list
                ]);
            }
        }
    }

    // 获取商家列表
    public function merchantlist()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $where['status'] = array('eq',1);
            $where['logo'] = array('neq','');
            $where['examine'] = array('eq',2);
            if(isset($data['tag']) && !empty($data['tag'])){
                $tag = explode(',',$data['tag']);
                $where['tag'] = ['in',$tag];
            }
            if(isset($data['supplylist']) && !empty($data['supplylist'])){
                $supplylist = explode(',',$data['supplylist']);
                $where['id'] = ['in',$supplylist];
            }
            if(isset($data['search']) && !empty($data['search'])){
                $where['title'] = ["=", trim($data['search'])];
            }
            
            $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
            $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
            $_offset = ($pagenum - 1) * $pagesize;
            $_list = db('merchant')->where($where)->limit($_offset . ',' . $pagesize)->order('sort desc,id desc')->select();
            foreach ($_list as $k => $v){
                $_list[$k]['category'] = db('realm')->where(['id' => ['in', $_list[$k]['category']]])->column("name");
                $_list[$k]['platform'] = db('classify')->where(['id' => ['in', $_list[$k]['platform']]])->column("name");
            }
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    // 获取商品详情
    public function goodsedit()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['id']) && !empty($data['id'])){
                $_list = db('goods')
                    ->where([
                        'id' => $data['id']
                    ])
                    ->find();
                return $this->app_json([
                    'info' => $_list
                ]);
            }
        }
    }

    // 删除商品
    public function goodsdel()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['id']) && !empty($data['id'])){
                $_list = db('goods')
                    ->where([
                        'id' => $data['id']
                    ])
                    ->delete();
                if($_list){
                    return $this->app_json([
                        'msg' => '删除成功'
                    ]);
                }else{
                    return $this->app_json([
                        'msg' => '删除失败'
                    ]);
                }
                
            }
        }
    }

    // 获取发布红人列表
    public function Releaselist()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['mid']) && !empty($data['mid'])){
                $_list = db('cewebrity')
                    ->where([
                        'mid' => $data['mid']
                    ])
                    ->order('sort desc,createtime desc')
                    ->select();
                return $this->app_json([
                    'info' => $_list
                ]);
            }
        }
    }

    // 获取发布红人详情
    public function Releasedetails()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $_list = db('cewebrity')->where('id = '.$data['id'])->find();
            $category = db('realm')->where(['id' => ['in', $_list['category']]])->column("name");
            $_list['realmdata'] = implode(',',$category);
            $cooperation = db('classify')->where(['id' => ['in', $_list['cooperation']]])->column("name");
            $_list['cooperationdata'] = implode(',',$cooperation);
            $_list['code'] = explode(',',$_list['code']);
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    // 删除发布红人
    public function cewebritydel()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['id']) && !empty($data['id'])){
                $_list = db('cewebrity')
                    ->where([
                        'id' => $data['id']
                    ])
                    ->delete();
                if($_list){
                    return $this->app_json([
                        'msg' => '删除成功'
                    ]);
                }else{
                    return $this->app_json([
                        'msg' => '删除失败'
                    ]);
                }
                
            }
        }
    }

    // 获取新闻列表
    public function totalNews()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $where['status'] = array('eq',1);
            if(isset($data['type']) && !empty($data['type'])){
                $where['type'] = array('eq',$data['type']); 
            }
            $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
            $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
            $_offset = ($pagenum - 1) * $pagesize;
            $_list = db('news')
                ->where($where)
                ->limit($_offset . ',' . $pagesize)
                ->order('addtime desc')
                ->select();
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    // 获取新闻详情
    public function newsDetails()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['id']) && !empty($data['id'])){
                $where['id'] = array('eq',$data['id']);
                $_list = db('news')->where($where)->find();
                $_list['fabulous'] = round($_list['hits'] * 0.473);
                return $this->app_json([
                    'list' => $_list
                ]);
            }
        }
    }

    // 获取单页详情
    public function pageDetails()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['id']) && !empty($data['id'])){
                $where['id'] = array('eq',$data['id']);
                $_list = db('onepage')->where($where)->find();
                $_list['fabulous'] = round($_list['hits'] * 0.473);
                return $this->app_json([
                    'list' => $_list
                ]);
            }
        }
    }

    // 获取用户收藏红人列表
    public function totalcollect()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['userid']) && !empty($data['userid'])){
                $_list = '';
                $where['status'] = array('eq',1);
                $where['id'] = array('eq',$data['userid']);
                $userInfo = db('member')->where('id = '.$data['userid'])->find();
                $collectwhere['id'] =array('in',$userInfo['collect']);
                $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
                $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
                $_offset = ($pagenum - 1) * $pagesize;
                $collectInfo = db('cewebrity')->order('sort desc,id desc')->limit($_offset . ',' . $pagesize)->where($collectwhere)->select();
                foreach ($collectInfo as $k => $v){
                    $collectInfo[$k]['cooperation'] = db('classify')->where(['id' => ['in', $collectInfo[$k]['cooperation']]])->column("name");
                    $collectInfo[$k]['show'] = true;
                }
                return $this->app_json([
                    'list' => $collectInfo
                ]);
            }
        }
    }

    public function totaldocking($userid)
    {

        $cewebrityIdList = db('chat')->where('mid = '.$userid)->group("cewebrityid")->column("cewebrityid");
        $cewebrityIdList = implode(',',$cewebrityIdList);

        $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
        $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
        $_offset = ($pagenum - 1) * $pagesize;
        $where['a.cewebrityid'] = ['in',$cewebrityIdList];
        $where['a.mid'] = ['=',$userid];

        $dialTable = db('chat')
                ->alias('a')
                ->join('member b','a.mid = b.id','LEFT')
                ->join('cewebrity c', 'a.cewebrityid = c.id','LEFT')
                ->order('createtime desc')
                ->where($where)
                ->limit(1000000000)
                ->field('
                        a.*,
                        c.category,
                        c.fans,
                        b.nickname as membernickname,
                        b.avatar as memberavatar,
                        c.nickname as cewebritynickname,
                        c.avatar as cewebrityavatar
                    ')
                ->buildSql();

        $_list = db('*')->table($dialTable)
            ->alias('a')
            ->order('createtime desc')
            ->limit($_offset . ',' . $pagesize)
            ->group('mid,cewebrityid')
            ->select();

        $num = 0;
        foreach ($_list as $k => $v){
            $_list[$k]['category'] = db('classify')->where(['id' => ['in', $_list[$k]['category']]])->column("name");
            if($_list[$k]['belong'] == 2 && $_list[$k]['state'] == 0){
                $num++;
            }
        }
        $arr = [
            'list' => $_list,
            'num' => $num
        ];
        return $arr;
    }

    public function dockingnumber()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['userid']) && !empty($data['userid'])){

                $cewebrityIdList = db('chat')->where('mid = '.$data['userid'])->group("cewebrityid")->column("cewebrityid");
                $cewebrityIdList = implode(',',$cewebrityIdList);

                $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
                $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
                $_offset = ($pagenum - 1) * $pagesize;
                $where['a.cewebrityid'] = ['in',$cewebrityIdList];
                $where['a.mid'] = ['=',$data['userid']];

                $dialTable = db('chat')
                        ->alias('a')
                        ->join('member b','a.mid = b.id','LEFT')
                        ->join('cewebrity c', 'a.cewebrityid = c.id','LEFT')
                        ->order('createtime desc')
                        ->where($where)
                        ->limit(1000000000)
                        ->field('
                                a.*,
                                c.category,
                                c.fans,
                                b.nickname as membernickname,
                                b.avatar as memberavatar,
                                c.nickname as cewebritynickname,
                                c.avatar as cewebrityavatar
                            ')
                        ->buildSql();

                $count = db('*')->table($dialTable)
                    ->alias('a')
                    ->order('createtime desc')
                    ->limit($_offset . ',' . $pagesize)
                    ->group('mid,cewebrityid')
                    ->count('cewebrityid');

                $_list = db('*')->table($dialTable)
                    ->alias('a')
                    ->order('createtime desc')
                    ->limit($_offset . ',' . $pagesize)
                    ->group('mid,cewebrityid')
                    ->column('cewebrityid');
                
                if(!($count > 2)){
                    return $this->app_json([
                        'code' => 200,
                    ]);
                }else{
                    if(in_array($data['cewebrityid'], $_list)){
                        return $this->app_json([
                            'code' => 200,
                        ]);
                    }else{
                        return $this->app_json([
                            'code' => 0,
                        ]);
                    }
                }
                
            }
        }
    }

    // 用户点击收藏
    public function collect()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $where['id'] = array('eq',$data['id']);
            $_list = db('member')->where($where)->find();
            if($_list['collect']){
                $_list['collect'] = explode(',',$_list['collect']);
            }else{
                $_list['collect'] = [];
            }
            if (in_array($data['collectid'], $_list['collect'])){
                foreach ($_list['collect'] as $key=>$value){
                    if ($value == $data['collectid']){
                        unset($_list['collect'][$key]);
                    }
                }
                if($_list['collect']){
                    $_list['collect'] = implode(',',$_list['collect']);
                }else{
                    $_list['collect'] = '';
                }
                $res = db('member')->update([
                    'id'        => $data['id'],
                    'collect'  => $_list['collect'],
                ]);
                if($res){
                    return $this->app_json([
                        'list' => "取消收藏成功"
                    ]);
                }else{
                    return $this->app_json([
                        'list' => "取消收藏失败"
                    ]);
                }
            }else{
                array_push($_list['collect'],$data['collectid']);
                $_list['collect'] = implode(',',$_list['collect']);
                $res = db('member')->update([
                            'id'        => $data['id'],
                            'collect'  => $_list['collect'],
                        ]);
                if($res){
                    return $this->app_json([
                        'list' => "收藏成功"
                    ]);
                }else{
                    return $this->app_json([
                        'list' => "收藏失败"
                    ]);
                }
            }
        }
    }

    // 获取会员
    public function member()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $where['status'] = array('eq',1);
            if(isset($data['id']) && !empty($data['id'])){
                $where['id'] = array('eq',$data['id']);
            }
            if(isset($data['belong']) && !empty($data['belong'])){
                $where['belong'] = array('eq',$data['belong']);
            }
            $_list = db('card')->where($where)->order('level asc')->select();
            foreach ($_list as $key=>$value){
                if($_list[$key]['content']){
                    $_list[$key]['content'] = explode(',',$_list[$key]['content']);
                }else{
                    $_list[$key]['content'] = '';
                }
               if($_list[$key]['rate'] > 0){
                    $_list[$key]['discountedprice'] = $_list[$key]['rate']*$_list[$key]['price'];
                    $_list[$key]['rate'] = round($_list[$key]['rate']*10,0);
               }else{
                    $_list[$key]['discountedprice'] = '';
               }
            } 
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    // 获取商家分类
    public function merchantcategory()
    {
        // 商家分类
        $wherecategory['status'] = array('eq',1);
        $wherecategory['class'] = array('eq',1);
        $wherecategory['type'] = array('eq',1);
        $category   = db('classify')->where($wherecategory)->order('id desc')->select();
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['category']) && !empty($data['category'])){
                $data['category'] = explode(',',$data['category']);
                foreach ($category as $key=>$value){
                    if (in_array($category[$key]['name'], $data['category'])){
                        $category[$key]['checked'] = true;
                    }else{
                        $category[$key]['checked'] = false;
                    }
                }
            }else{
                foreach ($category as $key=>$value){
                    $category[$key]['checked'] = false;
                }
            }
        }else{
            foreach ($category as $key=>$value){
                $category[$key]['checked'] = false;
            }
        }
        return $this->app_json([
            'list' => $category
        ]);
    }

    // 获取商家平台
    public function merchantplatform()
    {
        // 商家平台
        $whereplatform['status'] = array('eq',1);
        $whereplatform['class'] = array('eq',3);
        $whereplatform['type'] = array('eq',1);
        $platform   = db('classify')->where($whereplatform)->order('id desc')->select();
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['platform']) && !empty($data['platform'])){
                $data['platform'] = explode(',',$data['platform']);
                foreach ($platform as $key=>$value){
                    if (in_array($platform[$key]['id'], $data['platform'])){
                        $platform[$key]['checked'] = true;
                    }else{
                        $platform[$key]['checked'] = false;
                    }
                }
            }else{
                foreach ($platform as $key=>$value){
                    $platform[$key]['checked'] = false;
                }
            }
        }else{
            foreach ($platform as $key=>$value){
                $platform[$key]['checked'] = false;
            }
        }
        return $this->app_json([
            'list' => $platform
        ]);
    }

    // 获取红人分类
    public function cewebritycategory()
    {
        $where['status'] = array('eq',1);
        $where['class'] = array('eq',1);
        $where['type'] = array('eq',0);
        $category   = db('classify')->where($where)->order('id desc')->select();
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['category']) && !empty($data['category'])){
                $data['category'] = explode(',',$data['category']);
                foreach ($category as $key=>$value){
                    if (in_array($category[$key]['name'], $data['category'])){
                        $category[$key]['checked'] = true;
                    }else{
                        $category[$key]['checked'] = false;
                    }
                }
            }else{
                foreach ($category as $key=>$value){
                    $category[$key]['checked'] = false;
                }
            }
        }else{
            foreach ($category as $key=>$value){
                $category[$key]['checked'] = false;
            }
        }
        return $this->app_json([
            'list' => $category
        ]);
    }

    // 获取红人标签
    public function cewebritytag()
    {
        $where['status'] = array('eq',1);
        $where['class'] = array('eq',2);
        $where['type'] = array('eq',0);
        $label   = db('classify')->where($where)->order('id desc')->select();
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['tag']) && !empty($data['tag'])){
                $data['tag'] = explode(',',$data['tag']);
                foreach ($label as $key=>$value){
                    if (in_array($label[$key]['name'], $data['tag'])){
                        $label[$key]['checked'] = true;
                    }else{
                        $label[$key]['checked'] = false;
                    }
                }
            }else{
                foreach ($label as $key=>$value){
                    $label[$key]['checked'] = false;
                }
            }
        }else{
            foreach ($label as $key=>$value){
                $label[$key]['checked'] = false;
            }
        }
        return $this->app_json([
            'list' => $label
        ]);
    }

    // 获取红人平台
    public function cewebrityplatform()
    {
        $where['status'] = array('eq',1);
        $where['class'] = array('eq',3);
        $where['type'] = array('eq',0);
        $platform   = db('classify')->where($where)->order('id desc')->select();
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['platform']) && !empty($data['platform'])){
                $data['platform'] = explode(',',$data['platform']);
                foreach ($platform as $key=>$value){
                    if (in_array($platform[$key]['name'], $data['platform'])){
                        $platform[$key]['checked'] = true;
                    }else{
                        $platform[$key]['checked'] = false;
                    }
                }
            }else{
                foreach ($platform as $key=>$value){
                    $platform[$key]['checked'] = false;
                }
            }
        }else{
            foreach ($platform as $key=>$value){
                $platform[$key]['checked'] = false;
            }
        }
        return $this->app_json([
            'list' => $platform
        ]);
    }

    // 获取红人合作形式
    public function cewebritycooperation()
    {
        $where['status'] = array('eq',1);
        $where['class'] = array('eq',4);
        $where['type'] = array('eq',0);
        $cooperation   = db('classify')->where($where)->order('id desc')->select();
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['cooperation']) && !empty($data['cooperation'])){
                $data['cooperation'] = explode(',',$data['cooperation']);
                foreach ($cooperation as $key=>$value){
                    if (in_array($cooperation[$key]['id'], $data['cooperation'])){
                        $cooperation[$key]['checked'] = true;
                    }else{
                        $cooperation[$key]['checked'] = false;
                    }
                }
            }else{
                foreach ($cooperation as $key=>$value){
                    $cooperation[$key]['checked'] = false;
                }
            }
        }else{
            foreach ($cooperation as $key=>$value){
                $cooperation[$key]['checked'] = false;
            }
        }
        return $this->app_json([
            'list' => $cooperation
        ]);
    }

    // 红人认证
    public function Cewebrityadd()
    {
        if($this->request->isPost()){
            $cewebrity = '';
            $data   = input('post.');
            $data["examine"] = 1;
            if(empty($data["mid"])){
                return $this->app_error([
                    'info' => '请登录后操作'
                ]);
            }
            if(isset($data['id']) && !empty($data['id'])){
                $cewebrity   = db('cewebrity')->where('id = '.$data["id"])->find();
            }
            
            if($cewebrity){
                $data["id"] = $cewebrity["id"];
                $data["updatetime"] = time();
                $resupdate = db('cewebrity')->update($data);
                $memberdata['id'] = $data["mid"];
                $memberdata['type'] = 2;
                $memberup = db('member')->update($memberdata);
                if($resupdate){
                    return $this->app_json([
                        'info' => "修改成功，待审核"
                    ]);
                }else{
                    return $this->app_error([
                        'info' => "修改失败"
                    ]);
                }
            }else{
                if(isset($data['douyin_number']) && !empty($data['douyin_number'])){
                    $douyin_number = $data["douyin_number"];
                    $douyin = db('cewebrity')->where("douyin_number = '$douyin_number'")->find();
                    if($douyin){
                        return $this->app_error([
                            'info' => "当前抖音号红人已入驻，请勿重复提交"
                        ]);
                    }
                }
                if(isset($data['kuaishou_number']) && !empty($data['kuaishou_number'])){
                    $kuaishou_number = $data["kuaishou_number"];
                    $kuaishou = db('cewebrity')->where("kuaishou_number = '$kuaishou_number'")->find();
                    if($kuaishou){
                        return $this->app_error([
                            'info' => "当前快手红人号已入驻，请勿重复提交"
                        ]);
                    }
                }

                $memberid = db('member')->where([
                    'avatar' => ['neq', ''],
                    'nickname' => ['neq', ''],
                ])->column("id");
                $purpose = [];
                $num = mt_rand(2,5);
                for($i=0;$i<$num;$i++){
                    $purpose[$i] = $memberid[array_rand($memberid,1)];
                }
                $data["purpose"] = implode(',',$purpose);
                $data['people'] = mt_rand(2, 5);

                $data["createtime"] = time();
                $resinsert = db('cewebrity')->insert($data);
                $memberdata['id'] = $data["mid"];
                $memberdata['type'] = 2;
                $memberup = db('member')->update($memberdata);
                if($resinsert){
                    return $this->app_json([
                        'info' => "入驻成功，待审核"
                    ]);
                }else{
                    return $this->app_error([
                        'info' => "入驻失败"
                    ]);
                }
            }
        }
        
    }
    
    // 商家认证
    public function Merchantadd()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $data["examine"] = 1;
            if(isset($data['mid']) && !empty($data['mid'])){
                $merchant   = db('merchant')->where('mid = '.$data["mid"])->find();
            }else{
                return $this->app_json([
                    'info' => '请登录后操作'
                ]);
            }
            if($merchant){
                $data["id"] = $merchant["id"];
                $data["updatetime"] = time();
                $resupdate = db('merchant')->update($data);
                $userdata['id'] = $data["mid"];
                $userdata['type'] = 1;
                $userdata['examine'] = 1;
                db('member')->update($userdata);
                if($resupdate){
                    $msg = "修改成功，待审核";
                }else{
                    $msg = "修改失败";
                }
            }else{
            	$company   = db('merchant')->where(['company' => $data["company"]])->find();
	            if($company){
	                return $this->app_json([
	                    'info' => '该公司已入驻平台'
	                ]);
	            }
                $data["createtime"] = time();
                $memberid = db('member')->where([
                    'avatar' => ['neq', ''],
                    'nickname' => ['neq', ''],
                ])->column("id");
                $purpose = [];
                $num = mt_rand(2,5);
                for($i=0;$i<$num;$i++){
                    $purpose[$i] = $memberid[array_rand($memberid,1)];
                }
                $data["purpose"] = implode(',',$purpose);
                $data['people'] = mt_rand(2, 5);

                $resinsert = db('merchant')->insert($data);
                $userdata['id'] = $data["mid"];
                $userdata['type'] = 1;
                $userdata['examine'] = 1;
                db('member')->update($userdata);
                if($resinsert){
                    $msg = "入驻成功，待审核";
                }else{
                    $msg = "入驻失败";
                }
            }
        }
        return $this->app_json([
            'info' => $msg
        ]);
    }

    // 添加商品
    public function goodsadd()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(empty($data["mid"])){
                return $this->app_json([
                    'info' => '请登录后操作'
                ]);
            }
            if(isset($data["id"]) && !empty($data['id'])){
                $data["updatetime"] = time();
                $resupdate = db('goods')->update($data);
                if($resupdate){
                    return $this->app_json([
                        'info' => "修改成功"
                    ]);
                }else{
                    return $this->app_json([
                        'info' => "修改失败"
                    ]);
                }
            }else{
                $data["createtime"] = time();
                $resinsert = db('goods')->insert($data);
                if($resinsert){
                    return $this->app_json([
                        'info' => "发布成功"
                    ]);
                }else{
                    return $this->app_json([
                        'info' => "发布失败"
                    ]);
                }
            }
        }
    }

    // 获取认证用户信息
    public function attesj()
    {
        $rest = '';
        if($this->request->isPost()){
            $data   = input('post.');
            if($data["id"]){
                $rest  = db('merchant')->where('mid = '.$data["id"])->find();
                if($rest){
                    $category = db('realm')->where(['id' => ['in', $rest['category']]])->column("name");
                    $rest['realmdata'] = implode(',',$category);
                    $platform = db('classify')->where(['id' => ['in', $rest['platform']]])->column("name");
                    $rest['platformdata'] = implode(',',$platform);
                    $rest['code'] = explode(',',$rest['code']);
                    return $this->app_json([
                        'info' => $rest
                    ]);
                }else{
                    return $this->app_json([
                        'info' => $rest
                    ]);

                }
            }else{
                return $this->app_json([
                    'info' => $rest
                ]);
            }
        }
    }

    //登录
    public function sign()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $rest  = db('user')->where('mobile = '.$data["mobile"])->find();
            if($rest){
                if($data['code']){
                    $yzcode = db('yzcode')->where('mobile = '.$data["mobile"])->find();
                    if($yzcode && $yzcode['verifycode'] == $data['code']){
                        return $this->app_json([
                            'info' => $rest
                        ]);
                    }else{
                        $msg = [
                            'code'  => -1,
                            'msg'   =>"验证码已失效"
                        ];
                        return $this->app_json([
                            'info' => $msg
                        ]);
                    }
                }else{
                    if($rest['password'] == encryption($data["password"],$rest['salt'])){
                        return $this->app_json([
                            'info' => $rest
                        ]);
                    }else{
                        $msg = [
                            'code'  => -1,
                            'msg'   =>"密码错误"
                        ];
                        return $this->app_json([
                            'info' => $msg
                        ]);
                    }
                }
            }else{
                $msg = [
                    'code'  => -1,
                    'msg'   =>"未找到该账号"
                ];
                return $this->app_json([
                    'info' => $msg
                ]);
            }
        }
        
    }
    // 注册
    public function register()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $yzcode = db('yzcode')->where('verifycode = '.$data["code"])->find();
            if($yzcode){
                $gid = createGuid();
                $salt = mt_rand(1000, 9999);
                $data['password'] = encryption($data["password"],$salt);
                $user = db('user')->where('mobile = '.$data["mobile"])->find();
                if($user){
                    $msg = [
                        'code'  => -1,
                        'msg'   =>"账号已存在！"
                    ];
                    return $this->app_json([
                        'info' => $msg
                    ]);
                }
                $rest = db('user')->insert([
                    'mobile'  => $data["mobile"],
                    'password'  => $data["password"],
                    'status'  => 1,
                    'nickname' => $data["mobile"],
                    'gid'       => $gid,
                    'salt'      => $salt,
                    'createtime' => time(),
                ]);
                if($rest){
                    $userinfo = db('user')->where('mobile = '.$data["mobile"])->find();
                    return $this->app_json([
                        'info' => $userinfo
                    ]); 
                }else{
                   $msg = [
                        'code'  => -1,
                        'msg'   =>"注册失败"
                    ];
                    return $this->app_json([
                        'info' => $msg
                    ]); 
                }
            }else{
                $msg = [
                    'code'  => -1,
                    'msg'   =>"验证码已失效"
                ];
                return $this->app_json([
                    'info' => $msg
                ]);
            }
        }
    }

    // 重置密码
    public function reset()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $yzcode = db('yzcode')->where('verifycode = '.$data["code"])->find();
            if($yzcode){
                $user = db('user')->where('mobile = '.$data["mobile"])->find();
                if($user){
                    $rest = db('user')->where([
                        'mobile' => $data["mobile"]
                    ])->update([
                        'password' => encryption($data["password"],$user['salt']),
                        'updatetime' => time()
                    ]);
                    if($rest){
                        return $this->app_json([
                            'info' => $user
                        ]); 
                    }else{
                       $msg = [
                            'code'  => -1,
                            'msg'   =>"密码修改失败"
                        ];
                        return $this->app_json([
                            'info' => $msg
                        ]); 
                    }
                }else{
                    $msg = [
                        'code'  => -1,
                        'msg'   =>"该账号不存在"
                    ];
                    return $this->app_json([
                        'info' => $msg
                    ]);
                }
            }else{
                $msg = [
                    'code'  => -1,
                    'msg'   =>"验证码已失效"
                ];
                return $this->app_json([
                    'info' => $msg
                ]);
            }
        }
    }

    // 获取一条随机网红
    public function randomcelebrity()
    {
        $userinfo = db('user')->where([
            'type' => 2,
            'avatar' => ['neq', ''],
        ])->orderRaw('rand()')->find();
        if (!empty($userinfo)) {
            $a        = array("分钟"=>"a");
            $timename = array_rand($a, 1);
            $time     = mt_rand(1, 60);
            $userinfo['timename'] = $timename;
            $userinfo['time']     = $time;
        }
        return $this->app_json([
            'info' => $userinfo
        ]);
    }

    // 获取一条随机商家
    public function randommember()
    {
        $_count  = db('merchant')->count();
        $id = mt_rand(1, $_count);
        $merchant = db('merchant')->where('id = '.$id)->find();
        if(empty($merchant)){
            $merchant = db('merchant')->where('id = 5')->find();
        }
        return $this->app_json([
            'info' => $merchant
        ]);
    }

    // 获取随机几条网红数据
    public function getCewebrityyxhz()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $userinfo = db('cewebrity')->where([
                'avatar' => ['neq', ''],
            ])->orderRaw('rand()')->limit($data['people'])->select();

            return $this->app_json([
                'info' => $userinfo
            ]);
        }
    }

    //获取单个card费用
    public function getCade()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data["id"]) && !empty($data['id'])){
                $where['id'] = array('eq',$data["id"]);
                $card = db('card')->where($where)->find();
                return $this->app_json([
                    'info' => $card['price']*$card['rate']
                ]);
            }
        }
    }

    //判断用户是否购买
    public function lookup()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $where['openid'] = array('eq',$data['openid']);
            $where['cewebrity_id'] = array('eq',$data['cewebrityid']);
            $where['status'] = array('eq',1);
            
            $wherex['openid'] = array('eq',$data['xopenid']);
            $wherex['cewebrity_id'] = array('eq',$data['cewebrityid']);
            $wherex['status'] = array('eq',1);
             
            $order = db('order')->where($where)->find();
            $orderx = db('order')->where($wherex)->find();
            if($order){
                if($order['expire'] < time()){
                    return $this->app_json([
                        'info' => [
                            'code' => 0,
                            'msg'  => '购买已超时，需重新购买',
                        ]
                    ]);
                }else{
                    if($order['type'] == 1){
                        $msg = '您是会员，有效期内看过该红人信息，查看成功';
                    }else{
                        $msg = '您7日内购买过该红人信息，查看成功';
                    }
                    return $this->app_json([
                        'info' => [
                            'code' => 1,
                            'msg'  => $msg,
                        ]
                    ]);
                }
            }else{
                if($orderx){
                    if($orderx['expire'] < time()){
                        return $this->app_json([
                            'info' => [
                                'code' => 0,
                                'msg'  => '购买已超时，需重新购买',
                            ]
                        ]);
                    }else{
                        if($orderx['type'] == 1){
                            $msg = '您是会员，有效期内看过该红人信息，查看成功';
                        }else{
                            $msg = '您7日内购买过该红人信息，查看成功';
                        }
                        return $this->app_json([
                            'info' => [
                                'code' => 1,
                                'msg'  => $msg,
                            ]
                        ]);
                    }
                }else{
                    $member = db('member')->where(['openid' => $data['openid']])->find();
                    if($member){
                        if($member['expire'] < time()){
                            db('member')->update([
                                'id' => $member['id'],
                                'number' => 0
                            ]);
                            return $this->app_json([
                                'info' => [
                                    'code' => 0,
                                    'msg'  => '会员已过期，需重新购买',
                                ]
                            ]);
                        }else{
                            if($member['number'] == 0){
                                return $this->app_json([
                                    'info' => [
                                        'code' => 0,
                                        'msg'  => '查看条数不足，需重新购买',
                                    ]
                                ]);
                            }else{
                                db('member')->update([
                                    'id' => $member['id'],
                                    'number' => $member['number'] - 1,
                                ]);
                                db('order')->insert([
                                    'mid' => $member['id'],
                                    'openid' => $data['openid'],
                                    'cewebrity_id' => $data['cewebrityid'],
                                    'ordersn' => 'SH' . date('YmdHis') . mt_rand(100000, 999999),
                                    'expire' => $member['expire'],
                                    'addtime' => time(),
                                    'type' => 1,
                                    'status' => 1,
                                ]);
                                return $this->app_json([
                                    'info' => [
                                        'code' => 1,
                                        'msg'  => '您是会员可直接查看该红人信息，剩余查看次数'.($member['number'] - 1),
                                    ]
                                ]);
                            }
                        }
                    }else{
                        $memberx = db('member')->where(['xopenid' => $data['xopenid']])->find();
                        if($memberx){
                            if($memberx['expire'] < time()){
                                db('member')->update([
                                    'id' => $memberx['id'],
                                    'number' => 0
                                ]);
                                return $this->app_json([
                                    'info' => [
                                        'code' => 0,
                                        'msg'  => '会员已过期，需重新购买',
                                    ]
                                ]);
                            }else{
                                if($memberx['number'] == 0){
                                    return $this->app_json([
                                        'info' => [
                                            'code' => 0,
                                            'msg'  => '查看条数不足，需重新购买',
                                        ]
                                    ]);
                                }else{
                                    db('member')->update([
                                        'id' => $memberx['id'],
                                        'number' => $memberx['number'] - 1,
                                    ]);
                                    db('order')->insert([
                                        'mid' => $memberx['id'],
                                        'openid' => $data['openid'],
                                        'cewebrity_id' => $data['cewebrityid'],
                                        'ordersn' => 'SH' . date('YmdHis') . mt_rand(100000, 999999),
                                        'expire' => $memberx['expire'],
                                        'addtime' => time(),
                                        'type' => 1,
                                        'status' => 1,
                                    ]);
                                    return $this->app_json([
                                        'info' => [
                                            'code' => 1,
                                            'msg'  => '您是会员可直接查看该红人信息，剩余查看次数'.($memberx['number'] - 1),
                                        ]
                                    ]);
                                }
                            }
                        }else{
                            return $this->app_json([
                                'info' => [
                                    'code' => 0,
                                    'msg'  => '您还不是会员，需购买会员',
                                ]
                            ]);
                        }
                    }
                }
            }
        }
    }

    //获取信息购买记录
    public function purchase()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            // $data['openid'] = 'oLYhAt68Ev2l-Ep3lc4k99eWw5Qk';
            // $orderg = Db::query("SELECT openid,ordersn,price,`addtime`, 1 AS `type`, card_id, 0 AS cewebrity_id FROM `admin_order_card` WHERE `status` = 1  AND `openid` = '".$data['openid']."' UNION ALL SELECT openid,ordersn,price,`addtime`,2 AS `type`, 0 AS card_id,cewebrity_id FROM `admin_order` WHERE `status` = 1  AND `openid` = '".$data['openid']."' AND `type` = 2 ORDER BY `addtime` DESC");
            // $orderx = Db::query("SELECT openid,ordersn,price,`addtime`, 1 AS `type`, card_id, 0 AS cewebrity_id FROM `admin_order_card` WHERE `status` = 1  AND `openid` = '".$data['xopenid']."' UNION ALL SELECT openid,ordersn,price,`addtime`,2 AS `type`, 0 AS card_id,cewebrity_id FROM `admin_order` WHERE `status` = 1  AND `openid` = '".$data['xopenid']."' AND `type` = 2 ORDER BY `addtime` DESC");
            // $order = array_merge($orderg,$orderx);
            // array_multisort(array_column($order, 'addtime'),SORT_ASC,$data);
            // dump($order);exit();
            // if(!empty($order['cewebrity_id'])){
            //     $member = db('member')->where('openid = '.$order['openid'])->find();

            // }
            $order = db('consume_log')->where('mid = '.$data['id'])->order('addtime desc')->select();
            return $this->app_json([
                'info' => $order
            ]);
        }
    }
    
    //获取查看记录
    public function getsee()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $info = [];
            $memberwhere['openid'] = $data['openid'];
            $memberwhereor['xopenid'] = $data['xopenid'];
            $member = db('member')->where($memberwhere)->whereOr($memberwhereor)->find();
            if(empty($member)){
                return $this->app_json([
                    'info' => '请登录后操作'
                ]);
            }
            $where['openid'] = $member['openid'];
            $where['status'] = ["eq", "1"];
            $whereor['openid'] = $member['xopenid'];
            $whereor['status'] = ["eq", "1"];
            $orderg = db('order') ->where($where)->order('id desc')->select();
            $orderx = db('order') ->where($whereor)->order('id desc')->select();
            $order = array_merge($orderg,$orderx);
            if($member['collect']){
                $member['collect'] = explode(',',$member['collect']);
            }else{
                $member['collect'] = [];
            }
            foreach ($order as $key=>$value){
                $_list = db('cewebrity')->where('id = '.$order[$key]['cewebrity_id'])->find();
                if($_list){
                    $_list['cooperation'] = explode(',',$_list['cooperation']);
                    if(in_array($_list['id'], $member['collect'])){
                        $_list['show'] = true;
                    }else{
                        $_list['show'] = false;
                    }
                    if($order[$key]['status'] == 1){
                        array_push($info,$_list);
                    }
                }
            }
            return $this->app_json([
                'info' => $info
            ]);
        }
    }

    //搜索
    public function search()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['name']) && $data['name'] !== ''){
                $where['nickname'] = ["like", "%".trim($data['name'])."%"];
            }
            $where['status'] = array('eq',1);
            $where['avatar'] = array('neq','');
            $where['tag'] = array('neq','');
            $where['cooperation'] = array('neq','');
            $collect = [];
            $_list = db('cewebrity')->where($where)->order('id desc')->select();

            if(isset($data['userid']) && !empty($data['userid'])){
                $userInfo = db('member')->where('id = '.$data['userid'])->find();
                $collect = explode(',',$userInfo['collect']);
                foreach ($_list as $k => $v){
                    $_list[$k]['tag'] = explode(',',$_list[$k]['tag']);
                    $_list[$k]['cooperation'] = explode(',',$_list[$k]['cooperation']);
                    if (in_array($_list[$k]['id'], $collect)){
                        $_list[$k]['show'] = true;
                    }else{
                        $_list[$k]['show'] = false;
                    }
                }
            }else{
                foreach ($_list as $k => $v){
                    $_list[$k]['tag'] = explode(',',$_list[$k]['tag']);
                    $_list[$k]['cooperation'] = explode(',',$_list[$k]['cooperation']);
                }
            }
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    //提示信息
    public function message()
    {
        $merchant = db('merchant')->where([
            'status' => 1,
            'examine' => 2
        ])->column("title");

        $celebrity = db('cewebrity')->where([
            'status' => 1,
            'examine' => 2
        ])->column("nickname");
        
        $a = array("分钟"=>"a");

        for($i=0;$i<50;$i++){
            // 随机时间
            $data = mt_rand(1, 7);
            //随机网红商家
            $merchantid = array_rand($merchant,1);
            $celebrityid = array_rand($celebrity,1);
            $list[] = [
                'time' => time() - $data * 86400,
                'minute' => mt_rand(1, 5),
                'timename' => array_rand($a, 1),
                'merchant' => $merchant[$merchantid],
                'celebrity' => $celebrity[$celebrityid],
            ];
        }

        return $list;
        // return $this->app_json([
        //     'list' => $list,
        // ]);
    }

    //随机时间
    public function randtime()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            return $this->app_json([
                'time' => time() - $data['livebroadcast'] * 86400,
            ]);
        }
    }
   
    //服务器时间
    public function servertime()
    {
        return $this->app_json([
            'time' => time()
        ]);
    }

    //获取会员卡name
    public function card_name()
    {
        if($this->request->isPost()){
            $data = input('post.');
            if(isset($data['id']) && !empty($data['id'])){
                $card = db('card')->where('id = '.$data['id'])->find();
                return $this->app_json([
                    'card' => $card
                ]);
            }
        }
    }


    public function getQRcode($uid = 0)
    {
        if (empty($uid)) {
            $uid = intval(input('uid', 0));
        }
        if ($uid < 1) {
            return $this->app_error('请先登录!');
        }
        $path = ROOT_PATH.'public/uploads/qrcode/' . $uid . '.png';
        if (file_exists($path)) {
            return $this->app_json([
                'qrcode' => 'http://cdn.hongrensutui.com/uploads/qrcode/' . $uid .'.png?v=' . time()
            ]);
        }
        $url = 'https://www.hongrensutui.com/h5/#/?invite=' . $uid;
        createQRcode($path, $url);
        return $this->app_json([
            'qrcode' => 'http://cdn.hongrensutui.com/uploads/qrcode/' . $uid .'.png?v=' . time()
        ]);
    }

    public function getQRcoderz($uid = 0)
    {
        if (empty($uid)) {
            $uid = intval(input('uid', 0));
        }
        if ($uid < 1) {
            return $this->app_error('请先登录!');
        }
        $path = ROOT_PATH.'public/uploads/qrcode/' . $uid . 'rz.png';
        if (file_exists($path)) {
            return $this->app_json([
                'qrcode' => 'http://cdn.hongrensutui.com/uploads/qrcode/' . $uid .'rz.png?v=' . time()
            ]);
        }
        $url = 'https://www.hongrensutui.com/h5/#/pages/about/aboutrz?invite=' . $uid;
        createQRcode($path, $url);
        return $this->app_json([
            'qrcode' => 'http://cdn.hongrensutui.com/uploads/qrcode/' . $uid .'rz.png?v=' . time()
        ]);
    }

    public function getWxappCode($uid = 0)
    {
        if (empty($uid)) {
            $uid = intval(input('uid', 0));
        }
        if ($uid < 1) {
            return $this->app_error('请先登录!');
        }
        $path = ROOT_PATH.'public/uploads/wxcode/' . $uid . '.png';
        if (file_exists($path)) {
            return $this->app_json([
                'qrcode' => 'http://cdn.hongrensutui.com/uploads/wxcode/' . $uid .'.png?v=' . time()
            ]);
        }
        CreateWxappCode(
            "invite:{$uid}",
            'pages/index/index',
            $path
        );
        return $this->app_json([
            'qrcode' => 'http://cdn.hongrensutui.com/uploads/wxcode/' . $uid .'.png?v=' . time()
        ]);
    }

    public function getWxappCoderz($uid = 0)
    {
        if (empty($uid)) {
            $uid = intval(input('uid', 0));
        }
        if ($uid < 1) {
            return $this->app_error('请先登录!');
        }
        $path = ROOT_PATH.'public/uploads/wxcode/' . $uid . 'rz.png';
        if (file_exists($path)) {
            return $this->app_json([
                'qrcode' => 'http://cdn.hongrensutui.com/uploads/wxcode/' . $uid .'rz.png?v=' . time()
            ]);
        }
        CreateWxappCode(
            "invite:{$uid}",
            'pages/about/aboutrz',
            $path
        );
        return $this->app_json([
            'qrcode' => 'http://cdn.hongrensutui.com/uploads/wxcode/' . $uid .'rz.png?v=' . time()
        ]);
    }

    // 好物列表
    public function goodsalllist()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $where['examine'] = array('eq',2);
            $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
            $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
            $_offset = ($pagenum - 1) * $pagesize;
            $list = db('goods')->limit($_offset . ',' . $pagesize)->where($where)->order('sort desc,id desc')->select();
            foreach ($list as $k => $v){
                $list[$k]['platform'] = explode(',',$list[$k]['platform']);
                $list[$k]['category'] = explode(',',$list[$k]['category']);
            }
            return $this->app_json([
                'code' => 200,
                'info' => $list
            ]);
        }
    }

    public function supplylistsj()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['mid']) && !empty($data['mid'])){
                $list = db('supply')->where(['mid' => $data['mid']])->select();
                foreach ($list as $k => $v){
                    $list[$k]['platform'] = explode(',',$list[$k]['platform']);
                    $list[$k]['category'] = db('realm')->where(['id' => ['in', $list[$k]['category']]])->column("name");
                    $list[$k]['nowprice'] = floatval($list[$k]['nowprice']);
                }
                return $this->app_json([
                    'code' => 200,
                    'info' => $list
                ]);
            }
        }
    }

    public function supplysjadd()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $data['examine'] = 1;
            if(isset($data['mid']) && !empty($data['mid'])){
                $merchant = db('merchant')->where(['mid' => $data['mid']])->find();
                $data['company'] = $merchant['company'];
            }else{
                return $this->app_json([
                    'code' => 0,
                    'info' => '发布商家不存在'
                ]);
            }
            if(isset($data['id']) && !empty($data['id'])){
                $data['updatetime'] = time();
                $data['endtime'] = strtotime($data['endtime']);
                $data['examine'] = 1;
                $data['updatet'] = 1;
                $supply = db('supply')->where([
                    'id' => $data['id'],
                ])->update($data);
                if($supply){
                    return $this->app_json([
                        'code' => 200,
                        'info' => '修改成功,待审核'
                    ]);
                }else{
                    return $this->app_json([
                        'code' => 0,
                        'info' => '修改失败'
                    ]);
                }
             }else{
                $memberid = db('member')->where([
                    'avatar' => ['neq', ''],
                    'nickname' => ['neq', ''],
                ])->column("id");
                $purpose = [];
                $num = mt_rand(2,5);
                for($i=0;$i<$num;$i++){
                    $purpose[$i] = $memberid[array_rand($memberid,1)];
                }
                $data["purpose"] = implode(',',$purpose);
                $data['people'] = mt_rand(2, 5);

                $data['createtime'] = time();
                $data['endtime'] = strtotime($data['endtime']);
                $data['examine'] = 1;
                $supply = db('supply')->insert($data);
                if($supply){
                    return $this->app_json([
                        'code' => 200,
                        'info' => '发布成功,待审核'
                    ]);
                }else{
                    return $this->app_json([
                        'code' => 0,
                        'info' => '发布失败'
                    ]);
                }
             }
        }
    }

    // 获取供销平台
    public function supplyplatform()
    {
        $where['status'] = array('eq',1);
        $where['class'] = array('eq',3);
        $where['type'] = array('eq',0);
        $platform = db('classify')->where($where)->order('id desc')->select();
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['platform']) && !empty($data['platform'])){
                $data['platform'] = explode(',',$data['platform']);
                foreach ($platform as $key=>$value){
                    if (in_array($platform[$key]['name'], $data['platform'])){
                        $platform[$key]['checked'] = true;
                    }else{
                        $platform[$key]['checked'] = false;
                    }
                }
            }else{
                foreach ($platform as $key=>$value){
                    $platform[$key]['checked'] = false;
                }
            }
        }else{
            foreach ($platform as $key=>$value){
                $platform[$key]['checked'] = false;
            }
        }
        return $this->app_json([
            'list' => $platform
        ]);
    }

    // 抖音带货列表
    public function supplylist()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $where['type'] = array('eq',1);
            $where['examine'] = array('eq',2);
            if(isset($data['platform']) && !empty($data['platform'])){
                $where['platform'] = ["like", "%".$data['platform']."%"];
            }
            $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
            $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
            $_offset = ($pagenum - 1) * $pagesize;
            $_list = db('supply')
                ->limit($_offset . ',' . $pagesize)
                ->where($where)
                ->order('sort desc,id desc')
                ->select();
            foreach ($_list as $k => $v){
                $_list[$k]['category'] = db('realm')->where(['id' => ['in', $_list[$k]['category']]])->column("name");
                $_list[$k]['platform'] = explode(',',$_list[$k]['platform']);
                $_list[$k]['nowprice'] = floatval($_list[$k]['nowprice']);
            }
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    // 快手带货列表
    public function supplycewebrity()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $where['type'] = array('eq',1);
            $where['examine'] = array('eq',2);
            $where['platform'] = ["like", "%快手%"];
            $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
            $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
            $_offset = ($pagenum - 1) * $pagesize;
            $_list = db('supply')
                ->limit($_offset . ',' . $pagesize)
                ->where($where)
                ->order('sort desc,id desc')
                ->select();
            foreach ($_list as $k => $v){
                $_list[$k]['category'] = explode(',',$_list[$k]['category']);
                $_list[$k]['platform'] = explode(',',$_list[$k]['platform']);
            }
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    // 获取供需详情
    public function supplyedit()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $info = db('supply')->where('id = '.$data['id'])->find();
            if($info){
                $category = db('realm')->where(['id' => ['in', $info['category']]])->column("name");
                $info['realmdata'] = implode(',',$category);
                $info['endtime'] = date('Y-m-d',$info['endtime']);
                $info['detailimg'] = explode(',',$info['detailimg']);
            }
            return $this->app_json([
                'info' => $info
            ]);
        }
    }
    // 删除供需
    public function supplydel()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['id']) && !empty($data['id'])){
                $_list = db('supply')
                    ->where([
                        'id' => $data['id']
                    ])
                    ->delete();
                if($_list){
                    return $this->app_json([
                        'msg' => '删除成功'
                    ]);
                }else{
                    return $this->app_json([
                        'msg' => '删除失败'
                    ]);
                }
                
            }
        }
    }

    // 获取供需详情
    public function supplydetails()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $info = db('supply')->where('id = '.$data['id'])->find();
            $info['category'] = db('realm')->where(['id' => ['in', $info['category']]])->column("name");
            $info['platform'] = explode(',',$info['platform']);
            $info['nowprice'] = floatval($info['nowprice']);
            $info['purpose'] = db('member')->where([
                    'id' => ['in', $info['purpose']],
                ])->limit(25)->column("avatar");
            
            if(strpos($info['details'],'img')){
                $info['see'] = true;
            }
            if($info['detailimg']){
                $info['detailimg'] = explode(',',$info['detailimg']);
                $info['see'] = true;
            }
            return $this->app_json([
                'info' => $info
            ]);
        }
    }

    // 获取红人学院文章分类
    public function collegeclassify()
    {
        $where['pid'] = array('eq',0);
        $where['status'] = array('eq',1);
        $_list = db('college_category')->where($where)->order('sort desc,pid desc')->select();
        if (!empty($_list)) {
            foreach ($_list as &$value) {
                $value['list'] = db('college_category')
                    ->where([
                        'pid'      => ['=', $value['id']],
                    ])
                    ->order('sort desc,id desc')
                    ->select();
            }
        }
        return $this->app_json([
            'list' => $_list,
        ]);
    }

    // 获取红人学院文章分类
    public function collegeclassify2()
    {
        $where['pid'] = array('eq',0);
        $where['status'] = array('eq',1);
        $where['id'] = array('neq',16);
        $_list = db('college_category')->where($where)->order('sort desc,pid desc')->select();
        if (!empty($_list)) {
            foreach ($_list as &$value) {
                $value['list'] = db('college_category')
                    ->where([
                        'pid'      => ['=', $value['id']],
                    ])
                    ->order('sort desc,id desc')
                    ->select();
            }
        }
        return $this->app_json([
            'list' => $_list,
        ]);
    }

    //获取红人学院文章列表
    public function collegelist()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['mid']) && !empty($data['mid'])){
                $member = db('member')->where('id = '.$data['mid'])->find();
                $where['a.id'] = array('eq',$data['id']);
                $where['c.status'] = array('eq',1);
                $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
                $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
                $_offset = ($pagenum - 1) * $pagesize;
                $_list =    db('college_category')
                            ->alias('a')
                            ->join('college_category b', 'b.pid = a.id', 'LEFT')
                            ->join('college_article c', 'c.pid = b.id', 'LEFT')
                            ->where($where)
                            ->limit($_offset . ',' . $pagesize)
                            ->order('sort desc,id desc')
                            ->field('c.*, b.name as category')
                            ->select();
                if (!empty($_list)) {
                    foreach ($_list as &$value) {
                        $value['article_card_id'] = $member['article_card_id'];
                        $value['card_id'] = $member['card_id'];
                        $value['articlefree'] = db('order_college')
                            ->where([
                                'mid'         => ['=', $data['mid']],
                                'article_id'  => ['=', $value['id']],
                                'status'      => ['=', 1],
                            ])
                            ->find();
                        $value['categoryfree'] = db('order_college')
                            ->where([
                                'mid'         => ['=', $data['mid']],
                                'article_category_id'  => ['=', $value['pid']],
                                'status'   => ['=', 1],
                            ])
                            ->find();
                    }
                }
            }else{
                $where['a.id'] = array('eq',$data['id']);
                $where['c.status'] = array('eq',1);
                $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
                $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
                $_offset = ($pagenum - 1) * $pagesize;
                $_list =    db('college_category')
                            ->alias('a')
                            ->join('college_category b', 'b.pid = a.id', 'LEFT')
                            ->join('college_article c', 'c.pid = b.id', 'LEFT')
                            ->where($where)
                            ->limit($_offset . ',' . $pagesize)
                            ->order('sort desc,id desc')
                            ->field('c.*, b.name as category')
                            ->select();
            }
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    // 获取红人学院文章详情
    public function collegeDetails()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $member = db('member')->where('id = '.$data['mid'])->find();
            if(isset($data['id']) && !empty($data['id'])){
                $where['a.id'] = array('eq',$data['id']);
                $_info = db('college_article')
                    ->alias('a')
                    ->join('college_category b', 'a.pid = b.id', 'LEFT')
                    ->where($where)
                    ->field('a.*, b.name as category, b.price as category_price')
                    ->find();
                
                if (!empty($_info)) {
                        $_info['addtime'] =  date('Y-m-j',$_info['addtime']);
                        $_info['fabulous'] = round($_info['views'] * 0.473);
                        $_info['type'] = explode(',',$_info['type']);
                        $_info['article_card_id'] = $member['article_card_id'];
                        $_info['articlefree'] = db('order_college')
                            ->where([
                                'mid'         => ['=', $data['mid']],
                                'article_id'  => ['=', $_info['id']],
                                'status'      => ['=', 1],
                            ])
                            ->find();
                        $_info['categoryfree'] = db('order_college')
                            ->where([
                                'mid'         => ['=', $data['mid']],
                                'article_category_id'  => ['=', $_info['pid']],
                                'status'   => ['=', 1],
                            ])
                            ->find();
                }
                return $this->app_json([
                    'info' => $_info
                ]);
            }
        }
    }

    //获取首页公开课
    public function getvideo()
    {
        $_list = db('college_category')->where('pid = 16') ->order('sort desc,pid desc')->select();
        if (!empty($_list)) {
            foreach ($_list as &$value) {
                $value['video'] = db('college_article')
                    ->where([
                        'pid'      => ['=', $value['id']],
                    ])
                    ->order('sort desc,id desc')
                    ->select();
            }
        }
        return $this->app_json([
            'info' => $_list
        ]);
    }

    //获取红人学院课程
    public function getvideo2()
    {
        $_list = db('college_category')->where('pid = 16')->order('sort desc,pid desc')->select();
        if (!empty($_list)) {
            foreach ($_list as &$value) {
                $value['video'] = db('college_article')
                    ->where([
                        'pid'      => ['=', $value['id']],
                    ])
                    ->order('sort desc,id desc')
                    ->limit(3)
                    ->select();
            }
        }
        return $this->app_json([
            'info' => $_list
        ]);
    }
    
    //获取红人学院分类列表
    public function videolist()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            if(isset($data['id']) && !empty($data['id'])){
                $member = db('member')->where('id = '.$data['mid'])->find();
                $where['a.pid'] = array('eq',$data['id']);
                $where['a.status'] = array('eq',1);
                $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
                $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
                $_offset = ($pagenum - 1) * $pagesize;
                $_category = db('college_article')
                    ->alias('a')
                    ->join('college_category b', 'a.pid = b.id', 'LEFT')
                    ->where($where)
                    ->field('b.*')
                    ->find();
                $_count = db('college_article')
                    ->alias('a')
                    ->join('college_category b', 'a.pid = b.id', 'LEFT')
                    ->where($where)
                    ->field('a.*, b.name as category, b.img as categoryimg')
                    ->count();
                $_list = db('college_article')
                    ->alias('a')
                    ->join('college_category b', 'a.pid = b.id', 'LEFT')
                    ->where($where)
                    ->limit($_offset . ',' . $pagesize)
                    ->order('sort desc,id desc')
                    ->field('a.*, b.name as category, b.img as categoryimg')
                    ->select();
                if (!empty($_list)) {
                    foreach ($_list as &$value) {
                        $value['article_card_id'] = $member['article_card_id'];
                        $value['articlefree'] = db('order_college')
                            ->where([
                                'mid'         => ['=', $data['mid']],
                                'article_id'  => ['=', $value['id']],
                                'status'      => ['=', 1],
                            ])
                            ->find();
                        $value['categoryfree'] = db('order_college')
                            ->where([
                                'mid'         => ['=', $data['mid']],
                                'article_category_id'  => ['=', $value['pid']],
                                'status'   => ['=', 1],
                            ])
                            ->find();
                    }
                }
                return $this->app_json([
                    'count' => $_count,
                    'category' => $_category,
                    'info' => $_list
                ]);
            }
        }
    }

    // 分享列表
    public function sharelist()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $where['status'] = array('eq',1);
            $where['category'] = array('eq',$data['category']);
            $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
            $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
            $_offset = ($pagenum - 1) * $pagesize;
            $_list = db('share')
                ->limit($_offset . ',' . $pagesize)
                ->where($where)
                ->order('sort desc,id desc')
                ->select();
            foreach ($_list as $key => $value) {
                $_list[$key]['img'] = explode(',', $value['img']);
            }
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    // 商家认证
    public function complain()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $data["createtime"] = time();
            $resinsert = db('complain')->insert($data);
            if($resinsert){
                $msg = "投诉成功";
            }else{
                $msg = "投诉失败";
            }
        }
        return $this->app_json([
            'info' => $msg
        ]);
    }

    // 公开课开关
    public function course()
    {
        return $this->app_json([
            'course' => 0
        ]);
    }

    public function h5index()
    {
        $banner = db('banner')->where('status = 1')->order('sort asc')->select();
        $selected = db('cewebrity')->where([
            'status' => ['=', 1],
            'pay_type' => ['=', 2],
            'examine' => ['=', 2],
            'avatar' => ['neq', ''],
            'recommend' => ['=', 1],
        ])->order('sort desc,id desc')->limit(8)->select();

        $hot = db('cewebrity')->where([
            'status' => ['=', 1],
            'examine' => ['=', 2],
            'avatar' => ['neq', ''],
            'recommend' => ['=', 2],
        ])->order('sort asc,id asc')->limit(8)->select();

        $news = db('news')->where([
            'status' => ['=', 1],
            'type' => ['=', 2],
        ])->limit(8)->order('addtime desc')->select();

        $merchant = db('merchant')->where([
            'status' => ['=', 1],
            'attestatio' => ['=', 2],
            'logo' => ['neq', ''],
        ])->limit(8)->order('sort desc,id desc')->select();

        $merchantcount = db('merchant')->count();
        $cewebritycount = db('cewebrity')->count();

        $merchantcount = $merchantcount*63;
        $cewebritycount = $cewebritycount*53;

        foreach ($merchant as $k => $v){
            $merchant[$k]['category'] = db('realm')->where(['id' => ['in', $merchant[$k]['category']]])->column("name");
            $merchant[$k]['platform'] = db('classify')->where(['id' => ['in', $merchant[$k]['platform']]])->column("name");
            if (in_array('京东', $merchant[$k]['platform'])){
                $merchant[$k]['jingdong'] = true;
            }else{
                $merchant[$k]['jingdong'] = false;
            }
            if (in_array('淘宝', $merchant[$k]['platform'])){
                $merchant[$k]['taobao'] = true;
            }else{
                $merchant[$k]['taobao'] = false;
            }
            if (in_array('拼多多', $merchant[$k]['platform'])){
                $merchant[$k]['pinduoduo'] = true;
            }else{
                $merchant[$k]['pinduoduo'] = false;
            }
        }

        $recmerchant = db('merchant')->where([
            'show' => ['=', 1],
            'logo' => ['<>', ''],
        ])->find();
        if($recmerchant){
            $recmerchant['category'] = db('realm')->where(['id' => ['in', $recmerchant['category']]])->column("name");
            $recmerchant['platform'] = db('classify')->where(['id' => ['in', $recmerchant['platform']]])->column("name");
        }
       
        return $this->app_json([
            'banner' => $banner,
            'selected' => $selected,
            'cewebritycount' => $cewebritycount,
            'merchantcount' => $merchantcount,
            'hot' => $hot,
            'news' => $news,
            'merchant' => $merchant,
            'recmerchant' => $recmerchant,
        ]);
    }

    // 获取领域
    public function getRealm($realm)
    {
        $table  =   db('realm')->where([
                        'status' => 1,
                        'pid' => 0
                    ])
                    ->order('id asc')
                    ->select();

        $_list  =   db('realm')->where([
                        'status' => 1,
                    ])
                    ->order('id asc')
                    ->select();

        if(isset($realm) && !empty($realm)){
            $realm = explode(',',$realm);
            foreach ($_list as $key=>$value){
                if (in_array($_list[$key]['id'], $realm)){
                    $_list[$key]['checked'] = true;
                }else{
                    $_list[$key]['checked'] = false;
                }
            }
        }else{
            foreach ($_list as $key=>$value){
                $_list[$key]['checked'] = false;
            }
        }
        $arr = [
            'table' => $table,
            'list' => $_list
        ];
        return $arr;
    }

    // 获取banner 
    public function getBanner($page)
    {
        $where = [];
        if(isset($page) && !empty($page)){
            $where['page'] = ['=',$page];
        }
        $_list  =   db('banner')
                    ->where('status = 1')
                    ->order('sort asc')
                    ->where($where)
                    ->field('page,position,img,link,title')
                    ->select();
        return $_list;
    }

    // 获取领域
    public function h5config()
    {
        return $_list = db('h5config')->find();
    }

    // 红人，商家，供求查看人数变化
    public function purpose()
    {
        $cewebrity   = db('cewebrity')->where([
                            'status' => 1,
                            'examine' => 2,
                        ])->select();
        $merchant   = db('merchant')->where([
                            'status' => 1,
                            'examine' => 2,
                        ])->select();
        $supply   = db('supply')->where([
                            'status' => 1,
                            'examine' => 2,
                        ])->select();

        $memberid = db('member')->where([
                'avatar' => ['neq', ''],
                'nickname' => ['neq', ''],
            ])->column("id");

        foreach ($cewebrity as $k => $v){
            $purpose =  explode(',',$cewebrity[$k]['purpose']);
            if(count($purpose) < 40){
                $num = mt_rand(5,10);
                $purpose =  implode(',',$purpose);
                for($i=0;$i<$num;$i++){
                    $purpose = $purpose.','.$memberid[array_rand($memberid,1)];
                }
                $purpose =  explode(',',$purpose);
            }
            $purpose = array_unique($purpose);
            if($cewebrity[$k]['people'] < 5783){
                $people = $cewebrity[$k]['people']+mt_rand(3,5);
            }else{
                $people = $cewebrity[$k]['people']+mt_rand(0,2);
            }
            db('cewebrity')->where([
                'id' => $cewebrity[$k]['id']
            ])->update([
                'purpose' => implode(',',$purpose),
                'people'   => $people,
            ]);
        }

        foreach ($merchant as $k => $v){
            $purpose =  explode(',',$merchant[$k]['purpose']);
            if(count($purpose) < 40){
                $num = mt_rand(5,10);
                $purpose =  implode(',',$purpose);
                for($i=0;$i<$num;$i++){
                    $purpose = $purpose.','.$memberid[array_rand($memberid,1)];
                }
                $purpose =  explode(',',$purpose);
            }
            $purpose = array_unique($purpose);
            if($merchant[$k]['people'] < 5783){
                $people = $merchant[$k]['people']+mt_rand(3,5);
            }else{
                $people = $merchant[$k]['people']+mt_rand(0,2);
            }
            db('merchant')->where([
                'id' => $merchant[$k]['id']
            ])->update([
                'purpose' => implode(',',$purpose),
                'people'   => $people,
            ]);
        }

        foreach ($supply as $k => $v){
            $purpose =  explode(',',$supply[$k]['purpose']);
            if(count($purpose) < 40){
                $num = mt_rand(5,10);
                $purpose =  implode(',',$purpose);
                for($i=0;$i<$num;$i++){
                    $purpose = $purpose.','.$memberid[array_rand($memberid,1)];
                }
                $purpose =  explode(',',$purpose);
            }
            $purpose = array_unique($purpose);
            if($supply[$k]['people'] < 5783){
                $people = $supply[$k]['people']+mt_rand(3,5);
            }else{
                $people = $supply[$k]['people']+mt_rand(0,2);
            }
            db('supply')->where([
                'id' => $supply[$k]['id']
            ])->update([
                'purpose' => implode(',',$purpose),
                'people'   => $people,
            ]);
        }
    }

    // 资讯，学院查看人数变化
    public function articlehits()
    {
        $news   = db('news')->select();
        $article   = db('college_article')->select();

        foreach ($news as $k => $v){
            if($news[$k]['hits'] < 220000){
                $hits = $news[$k]['hits']+mt_rand(1000,2000);
            }else{
                $hits = $news[$k]['hits']+mt_rand(100,200);
            }
            db('news')->where([
                'id' => $news[$k]['id']
            ])->update([
                'hits'   => $hits,
            ]);
        }

        foreach ($article as $k => $v){
            if($article[$k]['views'] < 220000){
                $views = $article[$k]['views']+mt_rand(1000,2000);
            }else{
                $views = $article[$k]['views']+mt_rand(100,200);
            }
            db('college_article')->where([
                'id' => $article[$k]['id']
            ])->update([
                'views'   => $views,
            ]);
        }
    }

    // 
    public function follow($openid)
    { 
        $accessToken = get_access_token_gzh();
        $url="https://api.weixin.qq.com/cgi-bin/user/info?access_token=".$accessToken['access_token']."&openid=".$openid."&lang=zh_CN";
        $res=https_request($url);//请求开始
        $res=json_decode($res,true);
        return $res;
    }

    // 留言列表
    public function liuyan()
    { 
        if($this->request->isPost()){
            $data   = input('post.');
            $list = db('message')->where([
                'status' => ['=', 1],
                'supplyid' => ['=', $data['supplyid']],
            ])->order('id desc')->select();
            return $this->app_json([
                'list' => $list
            ]);
        }
    }
    
    // 添加留言
    public function getliuyan()
    { 
        if($this->request->isPost()){
            $data   = input('post.');
            $data['status']  =  0;
            $data['createtime']  =  time();
            $res = db('message')->insert($data);
            if($res){
                return $this->app_json([
                    'info' => "留言成功"
                ]);
            }else{
                return $this->app_error([
                    'info' => "留言失败"
                ]);
            }
        }
    }

    // 排行榜
    public function ranking()
    { 
        if($this->request->isPost()){
            $data   = input('post.');
            $where = [];
            if(isset($data['time']) && !empty($data['time'])){
                $where['time'] = ["=", $data['time']];
            }
            if(isset($data['type']) && !empty($data['type'])){
                $where['type'] = ["=", $data['type']];
            }else{
                $where['type'] = ["=", 2];
            }
            $_list   = db('ranking')
                       ->where($where)
                       ->order('id desc')
                       ->find();
            $_list['data'] = json_decode($_list['data'],true);
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    // 获取专题按钮
    public function special()
    { 
        if($this->request->isPost()){
            $data   = input('post.');
            $where = [];
            $where['status'] = ["=", 1];
            if(isset($data['page']) && !empty($data['page'])){
                $where['page'] = ["=", $data['page']];
            }
            
            $_list   = db('special')->where($where)->order('sort asc,id desc')->select();

            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    // 获取专题
    public function specialdetails()
    { 
        if($this->request->isPost()){
            $data   = input('post.');
            $where = [];
            if(isset($data['id']) && !empty($data['id'])){
                $where['id'] = ["=", $data['id']];
            }
            
            $_list   = db('special')->where($where)->find();

            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    public function speciallist()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $where['type'] = array('eq',1);
            $where['examine'] = array('eq',2);

            if(isset($data['supplylist']) && !empty($data['supplylist'])){
                $supplylist = explode(',',$data['supplylist']);
                $where['id'] = ['in',$supplylist];
            }
            $pagenum   = isset($data['pagenum']) ? intval($data['pagenum']) : 1;
            $pagesize   = isset($data['pagesize']) ? intval($data['pagesize']) : 10;
            $_offset = ($pagenum - 1) * $pagesize;
            $_list = db('supply')
                ->limit($_offset . ',' . $pagesize)
                ->where($where)
                ->order('sort desc,id desc')
                ->select();
            foreach ($_list as $k => $v){
                $_list[$k]['category'] = db('realm')->where(['id' => ['in', $_list[$k]['category']]])->column("name");
                $_list[$k]['platform'] = explode(',',$_list[$k]['platform']);
                $_list[$k]['nowprice'] = floatval($_list[$k]['nowprice']);
            }
            return $this->app_json([
                'list' => $_list
            ]);
        }
    }

    public function getchatlist()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            // dump($data);
            if(isset($data['cewebrityid']) && !empty($data['cewebrityid'])){
                $num = 0;
                $list = db('chat')->where([
                    'cewebrityid' => $data['cewebrityid'],
                    'mid' => $data['mid'],
                    'type' => $data['type'],
                ])->order('createtime asc')->select();
                $cewebrity = db('cewebrity')->where(['id' => $data['cewebrityid']])->find();
                $cewebrity['category'] = db('realm')->where(['id' => ['in', $cewebrity['category']]])->column("name");

                if($data['judge'] == 2){
                    foreach ($list as $k => $v){
                        db('chat')->where([
                            'id' => $list[$k]['id'],
                            'cewebrityid' => $data['cewebrityid']
                        ])->update([
                            'state' => 1,
                        ]);
                    }
                }
                if($data['judge'] == 1){
                    foreach ($list as $k => $v){
                        if($list[$k]['belong'] == 2 && $list[$k]['state'] == 0){
                            $num++;
                        }
                    }
                }
                $member = db('member')->where(['id' => $data['mid']])->find();
                if($list){
                    return $this->app_json([
                        'code' => 200,
                        'data' => $list,
                        'cewebrity' => $cewebrity,
                        'chatauth' => $member['chatauth'],
                        'num' => $num,
                    ]);
                }else{
                    return $this->app_json([
                        'code' => 0,
                        'msg'  => '聊天信息获取失败！',
                    ]);
                }
            }
        }
    }
    
    // 发送聊天接口
    public function getchat()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            // dump($data);
            if(isset($data['chat']) && !empty($data['chat'])){
                $member = db('member')->where(['id' => $data['mid']])->find();
                if($member['chatauth'] == 0){
                    return $this->app_json([
                        'code' => 200,
                        'chatauth' => $member['chatauth'],
                    ]);
                }else{
                   $_info = db('chat')->insert([
                        'cewebrityid' => $data['cewebrityid'],
                        'mid' => $data['mid'],
                        'type' => $data['type'],
                        'belong' => 1,
                        'state' => 0,
                        'content' => $data['chat'],
                        'createtime' => time(),
                    ]);
                    if($_info){
                        $list = db('chat')->where([
                            'cewebrityid' => $data['cewebrityid'],
                            'mid' => $data['mid'],
                            'type' => $data['type'],
                        ])->order('createtime asc')->select();
                        return $this->app_json([
                            'code' => 200,
                            'data' => $list,
                            'chatauth' => 1,
                        ]);
                    }else{
                        return $this->app_json([
                            'code' => 0,
                            'msg'  => '发送失败，请联系客服！',
                        ]);
                    } 
                }
                
            }
        }
    }

    public function calculator()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $_info = db('calculator')->insert([
                    'mid' => isset($data['id']) ? $data['id'] : '',
                    'categoryname' => $data['categoryname'],
                    'mode' => $data['index1'],
                    'peak' => $data['index2'],
                    'fans' => $data['fans'],
                    'price' => $data['price'],
                    'orders' => $data['orders'],
                    'volume' => $data['volume'],
                ]);
            if($_info){
                return $this->app_json([
                    'code' => 200,
                    'msg'  => '保存成功',
                ]);
            }else{
                return $this->app_json([
                    'code' => 0,
                    'msg'  => '保存失败',
                ]);
            } 
        }
    }

    public function updatesort()
    {
        $_list = db('supply')->select();
        
        foreach ($_list as $k => $v){
            $return = [
                'id'        => $_list[$k]['id'],
                'sort'     => 0,
            ];
            dump($return);
            db('supply')->update($return);
        }
    }

    public function updateinvite()
    {
        $_list = db('member')->select();
        
        foreach ($_list as $k => $v){
            if($_list[$k]['invite'] == 0){
                $return = [
                    'id'        => $_list[$k]['id'],
                    'invite'     => 2379,
                ];
                dump($return);
                db('member')->update($return);
            }
            
        }
    }

    public function ceshi()
    {
        // $ymd = [];
        // $md = [];
        // for($i=29;$i>=0;$i--){
        //     $timemd = date('m-d',strtotime('-'.$i.' day'));
        //     $timeymd = date('Y-m-d',strtotime('-'.$i.' day'));
        //     array_push($md,$timemd);
        //     array_push($ymd,$timeymd);
        // }

        // // 会员
        // $member = [];
        // foreach ($ymd as $k => $v){
        //     $member[$k] =  db('member')
        //             ->where([
        //                 'status' => 1,
        //                 'createtime' => ["between", [strtotime(trim($v). ' 00:00:00'), strtotime(trim($v) . ' 23:59:59')]]
        //             ])
        //             ->count();
        // }

        // // 入驻
        // $merchant = [];
        // foreach ($ymd as $k => $v){
        //     $merchant[$k] =  db('merchant')
        //             ->where([
        //                 'status' => 1,
        //                 'createtime' => ["between", [strtotime(trim($v). ' 00:00:00'), strtotime(trim($v) . ' 23:59:59')]]
        //             ])
        //             ->count();
        // }

        // // 订单
        // $order_card = [];
        // foreach ($ymd as $k => $v){
        //     $order_card[$k] =  db('order_card')
        //             ->where([
        //                 'status' => 1,
        //                 'paytime' => ["between", [strtotime(trim($v). ' 00:00:00'), strtotime(trim($v) . ' 23:59:59')]]
        //             ])
        //             ->count();
        // }

        
        // dump($member);
        // dump($merchant);
        // dump($order_card);
        // exit();
        // $resclear = \think\Cache::clear();
        // dump($resclear);
        // $resclear2 = \think\Cache::clear('access_token_xcx');
        // $resget = \think\Cache::get('access_token_gzh');
        // dump($resget);
        // $resget2 = \think\Cache::get('access_token_xcx');
        // $accessToken = get_access_token_gzh();
        // dump($accessToken);exit();
        // $url="https://api.weixin.qq.com/cgi-bin/user/info?access_token=".$accessToken['access_token']."&openid=oLYhAt68Ev2l-Ep3lc4k99eWw5Qk&lang=zh_CN";
        // $res=https_request($url);//请求开始
        // $res=json_decode($res,true);
        dump(Session::get());

    }
}