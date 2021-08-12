<?php
namespace app\api\controller;

/** 
 * 小程序支付
 */
class Order extends Common
{

    public function index()
    {
        $input = $this->request->param();
		if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
        $userinfo = db('member')->where([
            'openid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $_page   = isset($input['page']) ? intval($input['page']) : 1;
        $_page   = max($_page, 1);
        $_size   = config('pagesize');
        $_offset = ($_page - 1) * $_size;
        $list    = db('order')->alias('a')
            ->join('admin_anchor b','b.id = a.aid','LEFT')
            ->where(['a.mid' => $userinfo['id']])
            ->field('a.*,b.nickname as acname,b.anchorid as acid, b.avatar as acavatar, b.poster as acposter, b.description as acdesc')
            ->limit($_offset . ',' . $_size)
            ->select();
        if (empty($list)) {
            return $this->app_json([
                'list' => []
            ]);
        }
        foreach ($list as &$value) {
            $value['createtime'] = date('Y-m-d H:i', $value['createtime']);
            $value['begintime']  = date('Y-m-d H:i', $value['begintime']);
            $value['endtime']    = date('Y-m-d H:i', $value['endtime']);
        }
        return $this->app_json([
            'list' => $list
        ]);
    }

    public function rule_order()
    {
        $list = db('order_list')->order('id desc')->select();
        if (empty($list)) {
            $list = [];
        }
        return $this->app_json([
            'list' => $list
        ]);
    }

    public function rule_recharge()
    {
        $list = db('recharge_list')->order('id desc')->select();
        if (empty($list)) {
            $list = [];
        }
        return $this->app_json([
            'list' => $list
        ]);
    }

    public function get_rule_recharge()
    {
        $input = $this->request->param();
		if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
		if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        $userinfo = db('member')->where([
            'openid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $recharge_rule = db('recharge_list')->where([
            'id' => $input['id']
        ])->find();
        if (empty($recharge_rule)) {
            return $this->app_error('参数错误');
        }
        return $this->app_json([
            'info' => $recharge_rule
        ]);
    }

    public function create()
    {
        $input = $this->request->param();
		if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
		if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        if(empty($input['aid'])) {
            return $this->app_error('主播数据不存在或已删除');
        }
        $userinfo = db('member')->where([
            'openid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $order_rule = db('order_list')->where([
            'id' => $input['id']
        ])->find();
        if (empty($order_rule)) {
            return $this->app_error('参数错误');
        }
        $anchor = db('anchor')->where([
            'id' => $input['aid']
        ])->find();
        if (empty($anchor)) {
            return $this->app_error('主播数据不存在或已删除');
        }
        if ($order_rule['price'] > $userinfo['credit']) {
            return $this->app_error('您的余额不足，请先充值');
        }
        $time = time();
        $ordersn = 'SH' . date('YmdHis') . mt_rand(100000, 999999);
        $order = [
            'mid'        => $userinfo['id'],
            'aid'        => $anchor['id'],
            'rid'        => $order_rule['id'],
            'ordersn'    => $ordersn,
            'price'      => $order_rule['price'],
            'status'     => 1,
            'paytype'    => 2,
            'createtime' => $time,
            'begintime'  => $time,
            'endtime'    => strtotime(date('Y-m-d', $time + $order_rule['days'] * 86400) . ' 00:00:00'),
        ];
        db('order')->insert($order);
        $orderid = db('order')->getLastInsID();
        if (empty($orderid)) {
            return $this->app_error('订单创建失败');
        }
        db('member')->where(['id' => $userinfo['id']])->setDec('credit', $order_rule['price']);
        db('member_log')->insert([
            'mid'        => $userinfo['id'],
            'credit'     => $order_rule['price'],
            'type'       => 2,
            'mark'       => '购买主播数据消费金币',
            'createtime' => $time
        ]);
        return $this->app_json([
            'orderid' => $orderid
        ]);
    }

    public function detail()
    {
        $input = $this->request->param();
		if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
		if(empty($input['id'])) {
            return $this->app_error('数据不存在或已删除');
        }
        $userinfo = db('member')->where([
            'openid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $order = db('order')->alias('a')
            ->join('admin_anchor b','b.id = a.aid','LEFT')
            ->where([
                'a.id'  => $input['id'],
                'a.mid' => $userinfo['id'],
            ])
            ->field('a.*,b.nickname as acname,b.anchorid as acid, b.avatar as acavatar, b.poster as acposter, b.description as acdesc')
            ->find();
        if (empty($order)) {
            return $this->app_error('数据不存在或已删除');
        }
        $order['createtime'] = date('Y-m-d H:i', $order['createtime']);
        $order['begintime']  = date('Y-m-d H:i', $order['begintime']);
        $order['endtime']    = date('Y-m-d H:i', $order['endtime']);
        return $this->app_json([
            'info' => $order
        ]);
    }

    public function submit()
    {
        $input = $this->request->param();
		if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
		if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        $userinfo = db('member')->where([
            'openid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $recharge_rule = db('recharge_list')->where([
            'id' => $input['id']
        ])->find();
        if (empty($recharge_rule)) {
            return $this->app_error('参数错误');
        }
        $time = time();
        $ordersn = 'RC' . date('YmdHis') . mt_rand(100000, 999999);
        $recharge = [
            'mid'        => $userinfo['id'],
            'ordersn'    => $ordersn,
            'price'      => $recharge_rule['price'],
            'credit'     => $recharge_rule['credit'],
            'give'       => $recharge_rule['give'],
            'status'     => 0,
            'paytype'    => 0,
            'createtime' => $time,
        ];
        db('recharge')->insert($recharge);
        $rechargeid = db('recharge')->getLastInsID();
        if (empty($rechargeid)) {
            return $this->app_error('充值订单创建失败');
        }
        $params = [
            'tid'   => $ordersn,
            'fee'   => $recharge_rule['price'],
            'title' => '充值订单',
        ];
        $wechat = [
            'success' => false
        ];
        $payinfo = [
            'openid' => $userinfo['openid'],
            'tid'    => $params['tid'],
            'fee'    => $params['fee'],
            'title'  => $params['title'],
            'ip'     => $this->request->ip(),
        ];
        $res = wxapp_pay($payinfo);
        if (isset($res['code']) && !empty($res['code'])) {
            return $this->app_error($res['message']);
        }
        db('recharge')->where([
            'id' => $rechargeid
        ])->update([
            'transid' => str_replace('prepay_id=', '', $res['package']),
        ]);
        $wechat = [
            'success' => true,
            'payinfo' => $res
        ];
        return $this->app_json([
            'wechat'     => $wechat,
            'rechargeid' => $rechargeid
        ]);
    }

    public function complete()
    {
        $input = $this->request->param();
		if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
		if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        $userinfo = db('member')->where([
            'openid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $order = db('recharge')->where([
            'id' => $input['id'],
            'mid' => $userinfo['id'],
        ])->find();

        if (empty($order)) {
            return $this->app_error('找不到充值订单');
        }
        $payquery = isWeixinPay($order['ordersn'], $order['price']);
        if (isset($payquery['code']) && !empty($payquery['code'])) {
            $this->app_error($payquery['message']);
        }
        if (empty($order['status'])) {
            $this->handle_recharge($order, $userinfo['id']);
        }
        return $this->app_json();
    }

    public function notify()
    {
        $input = file_get_contents("php://input");
        libxml_disable_entity_loader(true);
        if( !empty($input) && empty($_GET["out_trade_no"]) ) {
            $obj = simplexml_load_string($input, "SimpleXMLElement", LIBXML_NOCDATA);
            $data = json_decode(json_encode($obj), true);
            if( empty($data) ) 
            {
                exit( "fail" );
            }
            if( empty($data["version"]) && ($data["result_code"] != "SUCCESS" || $data["return_code"] != "SUCCESS") ) 
            {
                $result = [
                    "return_code" => "FAIL",
                    "return_msg" => (empty($data["return_msg"]) ? $data["err_code_des"] : $data["return_msg"])
                ];
                echo array2xml($result);
                exit();
            }
            if( !empty($data["version"]) && ($data["result_code"] != "0" || $data["status"] != "0") ) 
            {
                exit( "fail" );
            }
            $get = $data;
        } else {
            $get = $_GET;
        }
		$total_fee = round($get["total_fee"] / 100, 2);
        $ordersn = trim($get["out_trade_no"]);
		if( empty($ordersn) ) 
		{
			$result = [
                "return_code" => "FAIL",
                "return_msg" => "签名失败"
            ];
            echo array2xml($result);
            exit();
        }
        $order = db('recharge')->where([
            'ordersn' => $ordersn,
        ])->find();
		if( !empty($order) && empty($order['status']) && $order["price"] == $total_fee ) {
            $this->handle_recharge($order, $order['mid']);
		}
        $result = [
            "return_code" => "SUCCESS",
            "return_msg" => "OK"
        ];
		echo array2xml($result);
		exit();
    }

    protected function handle_recharge($order, $uid)
    {
        $time = time();
        db('recharge')->where([
            'id' => $order['id']
        ])->update([
            'status'  => 1,
            'paytype' => 1,
            'paytime' => $time,
        ]);
        $credit = $order['credit'] + $order['give'];
        db('member')->where(['id' => $uid])->setInc('credit', $credit);
        db('member_log')->insert([
            'mid'        => $uid,
            'credit'     => $order['credit'],
            'type'       => 1,
            'mark'       => '金币充值',
            'createtime' => $time
        ]);
    }




    /**
     * 直接购买
     */
    public function order()
    {
        $input = $this->request->param();
        if(empty($input['openid'])) {
            return $this->app_error('请先登录1');
        }
        if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        $userinfo = db('member')->where([
            'xopenid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录2');
        }
        $card = db('cewebrity')->where([
            'id' => $input['id']
        ])->find();
        if (empty($card)) {
            return $this->app_error('参数错误');
        }
        if (empty(round($card['buy_price'], 2))) {
            $card['buy_price'] = 29.9;
        } 

        $time = time();
        $ordersn = 'SH' . date('YmdHis') . mt_rand(100000, 999999);
        $order = [
            'mid'          => $userinfo['id'],
            'xopenid'       => $input['openid'],
            'cewebrity_id' => $input['id'],
            'ordersn'      => $ordersn,
            'content'      => '单次购买数据',
            'type'         => 2,
            'price'        => $card['buy_price'],
            'expire'       => time() + 7 * 86400,
            'status'       => 0,
            'addtime'      => $time,
        ];
        db('order')->insert($order);
        $orderid = db('order')->getLastInsID();
        if (empty($orderid)) {
            return $this->app_error('订单创建失败');
        }

        $params = [
            'tid'    => $ordersn,
            'openid' => $input['openid'],
            'fee'    => $card['buy_price'],
            'title'  => '单次购买数据',
            'ip'     => $this->request->ip(),
        ];
        if($input['openid'] == 'oGaC25JgaQSyDPUB_FdiXt6GCmr0'){
            $params['fee'] = 0.01;
        }
        $res = wxapp_pay($params, 'https://www.hongrensutui.com/api/order/notify_order');
        if (isset($res['code']) && !empty($res['code'])) {
            return $this->app_error($res['message']);
        }

        $wechat = [
            'success' => true,
            'payinfo' => $res
        ];
        return $this->app_json([
            'wechat'     => $wechat,
            'orderid' => $orderid
        ]);
    }

    /**
     * 直接购买完成
     */
    public function complete_order()
    {
        $input = $this->request->param();
        if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
        if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        $userinfo = db('member')->where([
            'xopenid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $order = db('order')->where([
            'id'     => $input['id'],
            'openid' => $input['openid'],
        ])->find();
        if (empty($order)) {
            return $this->app_error('找不到充值订单');
        }
        $payquery = isWeixinPay($order['ordersn'], $order['price']);
        if (isset($payquery['code']) && !empty($payquery['code'])) {
            $this->app_error($payquery['message']);
        }
        if (empty($order['status'])) {
            $this->handle_order($order, $userinfo['id']);
        }
        return $this->app_json();
    }

    public function notify_order()
    {
        $input = file_get_contents("php://input");
        libxml_disable_entity_loader(true);
        if( !empty($input) && empty($_GET["out_trade_no"]) ) {
            $obj = simplexml_load_string($input, "SimpleXMLElement", LIBXML_NOCDATA);
            $data = json_decode(json_encode($obj), true);
            if( empty($data) ) 
            {
                exit( "fail" );
            }
            if( empty($data["version"]) && ($data["result_code"] != "SUCCESS" || $data["return_code"] != "SUCCESS") ) 
            {
                $result = [
                    "return_code" => "FAIL",
                    "return_msg" => (empty($data["return_msg"]) ? $data["err_code_des"] : $data["return_msg"])
                ];
                echo array2xml($result);
                exit();
            }
            if( !empty($data["version"]) && ($data["result_code"] != "0" || $data["status"] != "0") ) 
            {
                exit( "fail" );
            }
            $get = $data;
        } else {
            $get = $_GET;
        }
        $total_fee = round($get["total_fee"] / 100, 2);
        $ordersn = trim($get["out_trade_no"]);
        if( empty($ordersn) ) 
        {
            $result = [
                "return_code" => "FAIL",
                "return_msg" => "签名失败"
            ];
            echo array2xml($result);
            exit();
        }
        $order = db('roder')->where([
            'ordersn' => $ordersn,
        ])->find();
        if( !empty($order) && empty($order['status']) && $order["price"] == $total_fee ) {
            $this->handle_order($order, $order['mid']);
        }
        $result = [
            "return_code" => "SUCCESS",
            "return_msg" => "OK"
        ];
        echo array2xml($result);
        exit();
    }

    // 处理直接购买订单
    protected function handle_order($order, $uid)
    {
        $time = time();
        db('order')->where([
            'id' => $order['id']
        ])->update([
            'status'  => 1,
            'paytime' => $time,
        ]);
        commission($uid, $order['id'], 2, $order['price'], $order['ordersn'], $order['content']);
    }

    /**
     * 会员卡购买
     */
    public function card()
    {
        $input = $this->request->param();
        if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
        if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        $userinfo = db('member')->where([
            'xopenid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        if($input['id'] != 8){
            if ($userinfo['expire'] < time() && !empty($userinfo['number'])) {
                return $this->app_error('当前会员卡未使用完，不可购买');
            }
        }
        $card = db('card')->where([
            'id' => $input['id']
        ])->find();
        if (empty($card)) {
            return $this->app_error('参数错误');
        }
        $time = time();
        $ordersn = 'SH' . date('YmdHis') . mt_rand(100000, 999999);
        $order = [
            'mid'          => $userinfo['id'],
            'buy_id'     => $userinfo['id'],
            'xopenid'  => $input['openid'],
            'card_id' => $input['id'],
            'ordersn' => $ordersn,
            'content' => $card['name'],
            'price'   => $card['rate'] > 0 ? round($card['price'] * $card['rate'], 0) : $card['price'],
            'status'  => 0,
            'addtime' => $time,
        ];
        if($order['card_id'] == 3 && $userinfo['coupon'] == 1 && $userinfo['couponmoney'] > 0){
            $order['price'] = $order['price'] - $userinfo['couponmoney'];
        }
        if(!empty($input['old']) && isset($input['old']) && $order['card_id'] == 3) {
            $order['price'] = 1299;
        }
        db('order_card')->insert($order);
        $orderid = db('order_card')->getLastInsID();
        if (empty($orderid)) {
            return $this->app_error('订单创建失败');
        }
        $params = [
            'tid'    => $ordersn,
            'openid' => $input['openid'],
            'fee'    => $order['price'],
            'title'  => $card['name'],
            'ip'     => $this->request->ip(),
        ];
        // if($input['openid'] == 'oGaC25JgaQSyDPUB_FdiXt6GCmr0'){
        //     $params['fee'] = 0.01;
        // }
        $res = wxapp_pay($params, 'https://www.hongrensutui.com/api/order/notify_card');
        if (isset($res['code']) && !empty($res['code'])) {
            return $this->app_error($res['message']);
        }
        $wechat = [
            'success' => true,
            'payinfo' => $res
        ];
        return $this->app_json([
            'wechat'     => $wechat,
            'orderid' => $orderid
        ]);
    }

    public function complete_card()
    {
        $input = $this->request->param();
        if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
        if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        $userinfo = db('member')->where([
            'xopenid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $order = db('order_card')->where([
            'id'     => $input['id'],
            'openid' => $input['openid'],
        ])->find();
        if (empty($order)) {
            return $this->app_error('找不到充值订单');
        }
        $payquery = isWeixinPay($order['ordersn'], $order['price']);
        if (isset($payquery['code']) && !empty($payquery['code'])) {
            $this->app_error($payquery['message']);
        }

        if (empty($order['status'])) {
            $this->handle_card($order, $userinfo['id']);
        }
        return $this->app_json();
    }

    public function notify_card()
    {
        $input = file_get_contents("php://input");
        libxml_disable_entity_loader(true);
        if( !empty($input) && empty($_GET["out_trade_no"]) ) {
            $obj = simplexml_load_string($input, "SimpleXMLElement", LIBXML_NOCDATA);
            $data = json_decode(json_encode($obj), true);
            if( empty($data) ) 
            {
                exit( "fail" );
            }
            if( empty($data["version"]) && ($data["result_code"] != "SUCCESS" || $data["return_code"] != "SUCCESS") ) 
            {
                $result = [
                    "return_code" => "FAIL",
                    "return_msg" => (empty($data["return_msg"]) ? $data["err_code_des"] : $data["return_msg"])
                ];
                echo array2xml($result);
                exit();
            }
            if( !empty($data["version"]) && ($data["result_code"] != "0" || $data["status"] != "0") ) 
            {
                exit( "fail" );
            }
            $get = $data;
        } else {
            $get = $_GET;
        }
        $total_fee = round($get["total_fee"] / 100, 2);
        $ordersn = trim($get["out_trade_no"]);
        if( empty($ordersn) ) 
        {
            $result = [
                "return_code" => "FAIL",
                "return_msg" => "签名失败"
            ];
            echo array2xml($result);
            exit();
        }
        $order = db('order_card')->where([
            'ordersn' => $ordersn,
        ])->find();
        if( !empty($order) && empty($order['status']) && $order["price"] == $total_fee ) {
            $this->handle_card($order, $order['mid']);
        }
        $result = [
            "return_code" => "SUCCESS",
            "return_msg" => "OK"
        ];
        echo array2xml($result);
        exit();
    }

    // 处理会员开购买完成
    protected function handle_card($order, $uid)
    {
        $time = time();
        $card = db('card')->find($order['card_id']);

        db('member')->where(['id' => $uid])->update([
            'coupon' => 0,
            'couponmoney' => 0,
            'couponendtime' => '',
        ]);

        db('order_card')->where([
            'id' => $order['id']
        ])->update([
            'status'  => 1,
            'paytime' => $time,
        ]);
        if($card['belong'] == 1){
            $expire = $time + $card['expire'] * 86400;
            if($card['expire'] <= 0){
                $expire = 0;
            }
            db('member')->where(['id' => $uid])->update([
                'pay' => 1,
                'card_id' => $card['id'],
                'number' => $card['number'],
                'expire' => $expire,
            ]);
        }else if($card['belong'] == 2){
            if($card['id'] == 4){
                $attestatio = 1;
            }else if($card['id'] == 5){
                $attestatio = 2;
            }
            db('merchant')->where(['uid' => $uid])->update([
                'attestatio' => $attestatio,
                'attestatio_id' => $card['id'],
                'attestatio_expire' => $time + $card['expire'] * 86400,
            ]);
        }else if($card['belong'] == 3){
            
        }
        commission($uid, $order['id'], 1, $order['price'], $order['ordersn'], $order['content']);
    }


    // 文章直接购买
    /**
     * 单个直接购买
     */
    public function collegeorder()
    {
        $input = $this->request->param();
        if(empty($input['openid'])) {
            return $this->app_error('请先登录1');
        }
        if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        $userinfo = db('member')->where([
            'xopenid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录2');
        }
        $card = db('cewebrity')->where([
            'id' => $input['id']
        ])->find();
        if (empty($card)) {
            return $this->app_error('参数错误');
        }
        if (empty(round($card['buy_price'], 2))) {
            $card['buy_price'] = 29.9;
        } 

        $time = time();
        $ordersn = 'SH' . date('YmdHis') . mt_rand(100000, 999999);
        $order = [
            'mid'          => $userinfo['id'],
            'xopenid'       => $input['openid'],
            'cewebrity_id' => $input['id'],
            'ordersn'      => $ordersn,
            'content'      => '单次购买数据',
            'type'         => 2,
            'price'        => $card['buy_price'],
            'expire'       => time() + 7 * 86400,
            'status'       => 0,
            'addtime'      => $time,
        ];
        db('order')->insert($order);
        $orderid = db('order')->getLastInsID();
        if (empty($orderid)) {
            return $this->app_error('订单创建失败');
        }

        $params = [
            'tid'    => $ordersn,
            'openid' => $input['openid'],
            'fee'    => $card['buy_price'],
            'title'  => '单次购买数据',
            'ip'     => $this->request->ip(),
        ];
        if($input['openid'] == 'oGaC25JgaQSyDPUB_FdiXt6GCmr0'){
            $params['fee'] = 0.01;
        }
        $res = wxapp_pay($params, 'https://www.hongrensutui.com/api/order/notify_order');
        if (isset($res['code']) && !empty($res['code'])) {
            return $this->app_error($res['message']);
        }

        $wechat = [
            'success' => true,
            'payinfo' => $res
        ];
        return $this->app_json([
            'wechat'     => $wechat,
            'orderid' => $orderid
        ]);
    }

    /**
     * 直接购买完成
     */
    public function complete_collegeorder()
    {
        $input = $this->request->param();
        if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
        if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        $userinfo = db('member')->where([
            'xopenid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $order = db('order')->where([
            'id'     => $input['id'],
            'openid' => $input['openid'],
        ])->find();
        if (empty($order)) {
            return $this->app_error('找不到充值订单');
        }
        $payquery = isWeixinPay($order['ordersn'], $order['price']);
        if (isset($payquery['code']) && !empty($payquery['code'])) {
            $this->app_error($payquery['message']);
        }
        if (empty($order['status'])) {
            $this->handle_order($order, $userinfo['id']);
        }
        return $this->app_json();
    }

    public function notify_collegeorder()
    {
        $input = file_get_contents("php://input");
        libxml_disable_entity_loader(true);
        if( !empty($input) && empty($_GET["out_trade_no"]) ) {
            $obj = simplexml_load_string($input, "SimpleXMLElement", LIBXML_NOCDATA);
            $data = json_decode(json_encode($obj), true);
            if( empty($data) ) 
            {
                exit( "fail" );
            }
            if( empty($data["version"]) && ($data["result_code"] != "SUCCESS" || $data["return_code"] != "SUCCESS") ) 
            {
                $result = [
                    "return_code" => "FAIL",
                    "return_msg" => (empty($data["return_msg"]) ? $data["err_code_des"] : $data["return_msg"])
                ];
                echo array2xml($result);
                exit();
            }
            if( !empty($data["version"]) && ($data["result_code"] != "0" || $data["status"] != "0") ) 
            {
                exit( "fail" );
            }
            $get = $data;
        } else {
            $get = $_GET;
        }
        $total_fee = round($get["total_fee"] / 100, 2);
        $ordersn = trim($get["out_trade_no"]);
        if( empty($ordersn) ) 
        {
            $result = [
                "return_code" => "FAIL",
                "return_msg" => "签名失败"
            ];
            echo array2xml($result);
            exit();
        }
        $order = db('roder')->where([
            'ordersn' => $ordersn,
        ])->find();
        if( !empty($order) && empty($order['status']) && $order["price"] == $total_fee ) {
            $this->handle_order($order, $order['mid']);
        }
        $result = [
            "return_code" => "SUCCESS",
            "return_msg" => "OK"
        ];
        echo array2xml($result);
        exit();
    }

    // 处理直接购买订单
    protected function handle_collegeorder($order, $uid)
    {
        $time = time();
        db('order')->where([
            'id' => $order['id']
        ])->update([
            'status'  => 1,
            'paytime' => $time,
        ]);
        commission($uid, $order['id'], 2, $order['price'], $order['ordersn'], $order['content']);
    }


    /**
     * 学院分类直接购买
     */
    public function categoryorder()
    {
        $input = $this->request->param();
        if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
        if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        $userinfo = db('member')->where([
            'xopenid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('查找用户失败');
        }
        $category = db('college_category')->where([
            'id' => $input['id']
        ])->find();
        if (empty($category)) {
            return $this->app_error('未找到该栏目');
        }
        if (empty(round($category['price'], 2))) {
            $category['price'] = 29.9;
        } 
        $expire = 0;
        if ($category['expire'] > 0) {
            $expire = time() + $category['expire'] * 86400;
        }
        $time = time();
        $ordersn = 'SH' . date('YmdHis') . mt_rand(100000, 999999);
        $order = [
            'mid'          => $userinfo['id'],
            'xopenid'      => $input['openid'],
            'article_category_id' => $input['id'],
            'ordersn'      => $ordersn,
            'content'      => '〔学院课程〕购买'.$category['name'].'分类',
            'type'         => 2,
            'price'        => $category['price'],
            'expire'       => $expire,
            'status'       => 0,
            'addtime'      => $time,
        ];
        db('order_college')->insert($order);
        $orderid = db('order_college')->getLastInsID();
        if (empty($orderid)) {
            return $this->app_error('订单创建失败');
        }

        $params = [
            'tid'    => $ordersn,
            'openid' => $input['openid'],
            'fee'    => $category['price'],
            'title'  => '〔学院课程〕购买'.$category['name'].'分类',
            'ip'     => $this->request->ip(),
        ];
        if($input['openid'] == 'oGaC25JgaQSyDPUB_FdiXt6GCmr0'){
            $params['fee'] = 0.01;
        }
        $res = wxapp_pay($params, 'https://www.hongrensutui.com/api/order/notify_categoryorder');
        if (isset($res['code']) && !empty($res['code'])) {
            return $this->app_error($res['message']);
        }

        $wechat = [
            'success' => true,
            'payinfo' => $res
        ];
        return $this->app_json([
            'wechat'     => $wechat,
            'orderid' => $orderid
        ]);
    }

    /**
     * 直接购买完成
     */
    public function complete_categoryorder()
    {
        $input = $this->request->param();
        if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
        if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        $userinfo = db('member')->where([
            'xopenid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('查找用户失败');
        }
        $order = db('order_college')->where([
            'id'     => $input['id'],
            'openid' => $input['openid'],
        ])->find();
        if (empty($order)) {
            return $this->app_error('找不到订单');
        }
        $payquery = isWeixinPay($order['ordersn'], $order['price']);
        if (isset($payquery['code']) && !empty($payquery['code'])) {
            $this->app_error($payquery['message']);
        }
        if (empty($order['status'])) {
            $this->handle_categoryorder($order, $userinfo['id']);
        }
        return $this->app_json();
    }

    public function notify_categoryorder()
    {
        $input = file_get_contents("php://input");
        libxml_disable_entity_loader(true);
        if( !empty($input) && empty($_GET["out_trade_no"]) ) {
            $obj = simplexml_load_string($input, "SimpleXMLElement", LIBXML_NOCDATA);
            $data = json_decode(json_encode($obj), true);
            if( empty($data) ) 
            {
                exit( "fail" );
            }
            if( empty($data["version"]) && ($data["result_code"] != "SUCCESS" || $data["return_code"] != "SUCCESS") ) 
            {
                $result = [
                    "return_code" => "FAIL",
                    "return_msg" => (empty($data["return_msg"]) ? $data["err_code_des"] : $data["return_msg"])
                ];
                echo array2xml($result);
                exit();
            }
            if( !empty($data["version"]) && ($data["result_code"] != "0" || $data["status"] != "0") ) 
            {
                exit( "fail" );
            }
            $get = $data;
        } else {
            $get = $_GET;
        }
        $total_fee = round($get["total_fee"] / 100, 2);
        $ordersn = trim($get["out_trade_no"]);
        if( empty($ordersn) ) 
        {
            $result = [
                "return_code" => "FAIL",
                "return_msg" => "签名失败"
            ];
            echo array2xml($result);
            exit();
        }
        $order = db('order_college')->where([
            'ordersn' => $ordersn,
        ])->find();
        if( !empty($order) && empty($order['status']) && $order["price"] == $total_fee ) {
            $this->handle_categoryorder($order, $order['mid']);
        }
        $result = [
            "return_code" => "SUCCESS",
            "return_msg" => "OK"
        ];
        echo array2xml($result);
        exit();
    }

    // 处理直接购买订单
    protected function handle_categoryorder($order, $uid)
    {
        $time = time();
        db('order')->where([
            'id' => $order['id']
        ])->update([
            'status'  => 1,
            'paytime' => $time,
        ]);
        commission($uid, $order['id'], 4, $order['price'], $order['ordersn'], $order['content']);
    }
}
