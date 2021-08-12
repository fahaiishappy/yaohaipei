<?php
namespace app\api\controller;
use think\Controller;
use think\Config;
use think\Request;
use think\Session;
use think\Db;
use think\log;
use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;
class Ceshi extends Common{

    protected $appid = 'wx91104fc1e784a6a7';
    protected $appsecret = '7aa5c394f1995627e0876536929f5b77';
    protected $request;

    public function __construct()
    {
        $this->request = Request::instance();
        header("Access-Control-Allow-Origin: *");
    }

    // 微信登录
    public function user()
    {
        $input = $this->request->param();
        // 获取CODE
        $code = trim($input["code"]);
        $invite = intval($input["invite"] ?? 0);
        if(empty($code)) {
            return $this->app_error('缺少code参数');
        }
        // 根据code获取refresh_token
        $token = get_access_token_h5($code);
        $access_token = $token['access_token'];
        $openid = $token['openid'];
        $unionid = $token['unionid'];
        // 根据openid，access_token获取用户信息
        $userinfo = get_userinfo_h5($access_token,$openid);
        
        $_info = db('member')->where(['unionid'=>$unionid])->whereOr(['openid'=>$openid])->find();
        $time = time();
        if($_info){
             $update = [
                'id'         => $_info['id'],
                'openid'     => $openid,
                'unionid'    => isset($unionid) ? $unionid : '',
                'nickname'   => $userinfo['nickname'],
                'avatar'     => $userinfo['headimgurl'],
                'gender'     => $userinfo['sex'],
                'province'   => $userinfo['province'],
                'city'       => $userinfo['city'],
                'area'       => isset($userinfo['area']) ? $userinfo['area'] : '',
                'status'     => 1,
                'updatetime' => $time,
            ];
            db('member')->update($update); 
            $member  = $this->updatemember($_info['id']);
        }else{
            $return = [
                'openid'     => $openid,
                'invite'     => $invite,
                'unionid'    => isset($unionid) ? $unionid : '',
                'nickname'   => $userinfo['nickname'],
                'avatar'     => $userinfo['headimgurl'],
                'gender'     => $userinfo['sex'],
                'province'   => $userinfo['province'],
                'city'       => $userinfo['city'],
                'area'       => isset($userinfo['area']) ? $userinfo['area'] : '',
                'status'     => 1,
                'createtime' => $time,
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

    // 小程序登录
    public function userx()
    {
        $input = $this->request->param();
        // 获取CODE
        $code = trim($input["code"]);
        $invite = intval($input["invite"] ?? 0);
        $userinfo = $input["userInfo"];
        if(empty($code)) {
            return $this->app_error('缺少code参数');
        }
        if(empty($userinfo)) {
            return $this->app_error('缺少用户信息');
        }
        // 根据code获取refresh_token
        $token = get_access_token($code);
        $session_key = get_openid($code);
        $access_token = $token['access_token'];
        $openid = $session_key['openid'];
        $unionid = $session_key['unionid']; 

        $_info = db('member')->where(['unionid'=>$unionid])->whereOr(['xopenid'=>$openid])->find();
        $time = time();
        if($_info){
            $update = [
                'id'         => $_info['id'],
                'xopenid'    => $openid,
                'unionid'    => isset($unionid) ? $unionid : '',
                'nickname'   => $userinfo['nickName'],
                'avatar'     => $userinfo['avatarUrl'],
                'gender'     => $userinfo['gender'],
                'province'   => $userinfo['province'],
                'city'       => $userinfo['city'],
                'area'       => isset($userinfo['area']) ? $userinfo['area'] : '',
                'status'     => 1,
                'updatetime' => $time,
            ];
            db('member')->update($update);
            $member  = $this->updatemember($_info['id']);
        }else{
            $return = [
                'xopenid'    => $openid,
                'invite'     => $invite,
                'unionid'    => isset($unionid) ? $unionid : '',
                'nickname'   => $userinfo['nickName'],
                'avatar'     => $userinfo['avatarUrl'],
                'gender'     => $userinfo['gender'],
                'province'   => $userinfo['province'],
                'city'       => $userinfo['city'],
                'area'       => isset($userinfo['area']) ? $userinfo['area'] : '',
                'status'     => 1,
                'createtime' => $time,
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

    public function updatemember($id){
        $member  = db('member')
            ->alias('a')
            ->join('user b', 'b.member_id = a.id', 'LEFT')
            ->where('a.id = '.$id)
            ->field('a.*, b.company_id, b.company_dept_id')
            ->find();
        if($member){
            if($member["type"] == 1){
                $merchant  = db('merchant')->where('mid = '.$member["id"])->find();
                $member['examine'] = $merchant['examine'];
                if(!$member['examine']){$member['examine'] = 0;}
                $member['attestatio'] = $merchant['attestatio'];
                if(!$member['attestatio']){$member['attestatio'] = 0;}
            }else if($member["type"] == 2){
                $cewebrity  = db('cewebrity')->where('mid = '.$member["id"])->find();
                $member['examine'] = $cewebrity['examine'];
                if(!$member['examine']){$member['examine'] = 0;}
            }else{
                $member['examine'] = 0;
                $member['attestatio'] =0;
            }
            if($member['couponendtime']){
                if ($member['couponendtime'] < time()) {
                   db('member')->where(['id' => $id])->update([
                        'coupon' => 0,
                        'couponmoney' => 0,
                        'couponendtime' => '',
                    ]);
                }else{
                    $member['couponstartTime'] = time()+1;
                    // $member['couponstartTime'] = date('Y-m-dTH:i:s',time()+1);
                    // $member['couponendtime'] = date('Y-m-dTH:i:s',$member['couponendtime']);
                }
            }
        }
        return $member;
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


    public function ceshi()
    {

        $member = db('member')->where([
                    'card_id' => ['=', 0]
                ])->select();
        foreach ($member as $k => $v){
            db('member')->update([
                    'id'         => $member[$k]['id'],
                    'coupon'     => 1,
                ]);
        }
    }
}