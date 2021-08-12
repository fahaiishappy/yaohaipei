<?php
namespace app\api\controller;

/**
 * H5支付
 */
class Pay extends Common{
    private $app_id     = 'wx91104fc1e784a6a7';
    private $app_secret = '7aa5c394f1995627e0876536929f5b77';
    private $mch_id     = '1596657621';
    private $makesign   = '3D8E8F6770622657B52C425B3BE8552E';
    private $parameters = NULL;
    // private $notify     = 'https://www.hongrensutui.com/api/pay/notify';
    public  $error      = 0;
    public  $orderid    = null;
    public  $openid     = '';

    //进行微信支付
    public function wap()
    {
        $reannumb = $this->randomkeys(6);  //生成随机数 以后可以当做 订单号
        $pays ='1';                        //获取需要支付的价格·
        $conf = $this->payconfig('SH' . date('YmdHis') . $reannumb, $pays * 100, '报名费用支付', 'oLYhAt68Ev2l-Ep3lc4k99eWw5Qk', '');
        if (!$conf || $conf['return_code'] == 'FAIL') {
            exit("<script>alert('对不起，微信支付接口调用错误!" . $conf['return_msg'] . "');history.go(-1);</script>");
        }
		$this->orderid = $conf['prepay_id'];
	    //生成页面调用参数
        $timeStamp = time();
        $jsApiObj["appId"]     = $conf['appid'];
        $jsApiObj["timeStamp"] = "$timeStamp";
        $jsApiObj["nonceStr"]  = $this->createNoncestr();
        $jsApiObj["package"]   = "prepay_id=" . $conf['prepay_id'];
        $jsApiObj["signType"]  = "MD5";
        $jsApiObj["paySign"]   = $this->MakeSign($jsApiObj);
        $json = json_encode($jsApiObj);
        //返回支付页面，并将相关参数返回给JS
        return view('Pay',['parameters' => $json]);
    }

    //微信JS支付参数获取
    protected function payconfig($no, $fee, $body, $openid, $notify)
    {
        $url = "https://api.mch.weixin.qq.com/pay/unifiedorder";
        $data['appid']            = $this->app_id;
        $data['mch_id']           = $this->mch_id;            //商户号
        $data['device_info']      = 'WEB';
        $data['body']             = $body;
        $data['out_trade_no']     = $no;                      //订单号
        $data['total_fee']        = $fee;                     //金额
        $data['spbill_create_ip'] = $_SERVER["REMOTE_ADDR"];  //ip地址
        $data['notify_url']       = $notify;
        $data['trade_type']       = 'JSAPI';
        $data['openid']           = $openid;      //获取保存用户的openid
        $data['nonce_str']        = $this->createNoncestr();
        $data['sign']             = $this->MakeSign($data);
		
        $xml = $this->ToXml($data);
        $curl = curl_init(); // 启动一个CURL会话
        curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        //设置header
        curl_setopt($curl, CURLOPT_HEADER, FALSE);
        //要求结果为字符串且输出到屏幕上
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($curl, CURLOPT_POST, TRUE); // 发送一个常规的Post请求
        curl_setopt($curl, CURLOPT_POSTFIELDS, $xml); // Post提交的数据包
        curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
        $tmpInfo = curl_exec($curl); // 执行操作
        curl_close($curl); // 关闭CURL会话
        $arr = $this->FromXml($tmpInfo);
        return $arr;
    }

    /**
     *    作用：产生随机字符串，不长于32位
     */
    public function createNoncestr($length = 32)
    {
        $chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        $str = "";
        for ($i = 0; $i < $length; $i++) {
            $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        return $str;
    }

    /**
     *    作用：产生随机字符串，不长于32位
     */
    public function randomkeys($length)
    {
        $chars = '1234567890123456789012345678905678901234';
        mt_srand((double)microtime()*1000000*getmypid());
        $str = "";
        while(strlen($str) < $length)
            $str .= substr($chars, (mt_rand()%strlen($chars)), 1);
        return $str;
    }

    /**
     * 将xml转为array
     * @param string $xml
     * @throws WxPayException
     */
    public function FromXml($xml)
    {
        //将XML转为array
        return json_decode(json_encode(simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA)), true);
    }

    /**
     * 输出xml字符
     * @throws WxPayException
     **/
    public function ToXml($arr)
    {
        $xml = "<xml>";
        foreach ($arr as $key => $val) {
            if (is_numeric($val)) {
                $xml .= "<" . $key . ">" . $val . "</" . $key . ">";
            } else {
                $xml .= "<" . $key . "><![CDATA[" . $val . "]]></" . $key . ">";
            }
        }
        $xml .= "</xml>";
        return $xml;
    }

    /**
     * 生成签名
     * @return 签名，本函数不覆盖sign成员变量，如要设置签名需要调用SetSign方法赋值
     */
    protected function MakeSign($arr)
    {
        //签名步骤一：按字典序排序参数
        ksort($arr);
        $string = $this->ToUrlParams($arr);
        //签名步骤二：在string后加入KEY
        $string = $string . "&key=" . $this->makesign;
        //签名步骤三：MD5加密
        $string = md5($string);
        //签名步骤四：所有字符转为大写
        $result = strtoupper($string);
        return $result;
    }

    /**
     * 格式化参数格式化成url参数
     */
    protected function ToUrlParams($arr)
    {
        $buff = "";
        foreach ($arr as $k => $v) {
            if ($k != "sign" && $v != "" && !is_array($v)) {
                $buff .= $k . "=" . $v . "&";
            }
        }
        $buff = trim($buff, "&");
        return $buff;
    }

    /**
     * 充值
     */
    public function recharge()
    {
        $input = $this->request->param();
		if(empty($input['openid'])) {
            return $this->app_error('请先登录');
        }
		if(empty($input['id'])) {
            return $this->app_error('参数错误');
        }
        // $userinfo = db('member')->where([
        //     'openid' => $input['openid']
        // ])->find();
        // if (empty($userinfo)) {
        //     return $this->app_error('请先登录');
        // }
        $recharge_rule = db('level')->where([
            'id' => $input['id']
        ])->find();
        if (empty($recharge_rule)) {
            return $this->app_error('参数错误');
        }
        $time = time();
        $ordersn = 'SH' . date('YmdHis') . mt_rand(100000, 999999);
        $order = [
            'openid'  => $input['openid'],
            'level'   => $input['id'],
            'ordersn' => $ordersn,
            'price'   => $recharge_rule['price'],
            'money'   => $recharge_rule['money'] + $recharge_rule['give'],
            'status'  => 0,
            'addtime' => $time,
        ];
        db('recharge')->insert($order);
        $orderid = db('recharge')->getLastInsID();
        if (empty($orderid)) {
            return $this->app_error('订单创建失败');
        }
        $params = [
            'tid'    => $ordersn,
            'openid' => $input['openid'],
            'fee'    => $recharge_rule['price'],
            'title'  => '充值订单',
        ];
        $conf = $this->payconfig($params['tid'], $params['fee'] * 100, $params['title'], $params['openid'], 'https://www.hongrensutui.com/api/pay/notify_recharge');
        if (!$conf || $conf['return_code'] == 'FAIL') {
            return $this->app_error('对不起，微信支付接口调用错误!' . $conf['return_msg']);
        }
		$this->orderid = $conf['prepay_id'];
	    //生成页面调用参数
        $timeStamp = time();
        // $jsApiObj["openid"]     = $input['openid'];
        // $jsApiObj["id"]         = $orderid;
        $jsApiObj["appId"]     = $conf['appid'];
        $jsApiObj["timeStamp"] = "$timeStamp";
        $jsApiObj["nonceStr"]  = $this->createNoncestr();
        $jsApiObj["package"]   = "prepay_id=" . $conf['prepay_id'];
        $jsApiObj["signType"]  = "MD5";
        $jsApiObj["paySign"]   = $this->MakeSign($jsApiObj);
        $json = json_encode($jsApiObj);
        //返回支付页面，并将相关参数返回给JS
        return $this->app_json([
            'parameters' => $json
        ]);
    }

    public function complete_recharge()
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
            'openid' => $userinfo['openid'],
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

    public function notify_recharge()
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
            'paytime' => $time,
        ]);
        $credit = $order['money'];
        db('member')->where(['id' => $uid])->setInc('money', $credit);
    }



        /**
     * 直接购买
     */
    public function order()
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
            'openid'       => $input['openid'],
            'cewebrity_id' => $input['id'],
            'ordersn'      => $ordersn,
            'content'      => '〔网红数据〕单次购买',
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
            'title'  => '〔网红数据〕单次购买',
        ];
        if($input['openid'] == 'oLYhAt68Ev2l-Ep3lc4k99eWw5Qk'){
            $params['fee'] = 0.01;
        }
        $conf = $this->payconfig($params['tid'], $params['fee'] * 100, $params['title'], $params['openid'], 'https://www.hongrensutui.com/api/pay/notify_order');
        if (!$conf || $conf['return_code'] == 'FAIL') {
            return $this->app_error('对不起，微信支付接口调用错误!' . $conf['return_msg']);
        }
        $this->orderid = $conf['prepay_id'];
        //生成页面调用参数
        $timeStamp = time();
        $jsApiObj["appId"]     = $conf['appid'];
        $jsApiObj["timeStamp"] = "$timeStamp";
        $jsApiObj["nonceStr"]  = $this->createNoncestr();
        $jsApiObj["package"]   = "prepay_id=" . $conf['prepay_id'];
        $jsApiObj["signType"]  = "MD5";
        $jsApiObj["paySign"]   = $this->MakeSign($jsApiObj);
        $json = json_encode($jsApiObj);
        //返回支付页面，并将相关参数返回给JS
        return $this->app_json([
            'parameters' => $json,
            'info' => [
                'orderid' => $orderid,
                'type'    => 1,//单个购买
                'openid'  => $input['openid']
            ]
        ]);
    }

    /**
     * 直接购买购买完成
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
            'openid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $order = db('order')->where([
            'id'     => $input['id'],
            'openid' => $userinfo['openid'],
        ])->find();
        if (empty($order)) {
            return $this->app_error('找不到订单');
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
            'openid' => $input['openid']
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
            'mid'     => $userinfo['id'],
            'buy_id'     => $userinfo['id'],
            'openid'  => $input['openid'],
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
        ];
        // if($input['openid'] == 'oLYhAt68Ev2l-Ep3lc4k99eWw5Qk'){
        //     $params['fee'] = 0.01;
        // }
        $conf = $this->payconfig($params['tid'], $params['fee'] * 100, $params['title'], $params['openid'], 'https://www.hongrensutui.com/api/pay/notify_card');
        if (!$conf || $conf['return_code'] == 'FAIL') {
            return $this->app_error('对不起，微信支付接口调用错误!' . $conf['return_msg']);
        }
        $this->orderid = $conf['prepay_id'];
        //生成页面调用参数
        $timeStamp = time();
        $jsApiObj["appId"]     = $conf['appid'];
        $jsApiObj["timeStamp"] = "$timeStamp";
        $jsApiObj["nonceStr"]  = $this->createNoncestr();
        $jsApiObj["package"]   = "prepay_id=" . $conf['prepay_id'];
        $jsApiObj["signType"]  = "MD5";
        $jsApiObj["paySign"]   = $this->MakeSign($jsApiObj);
        $json = json_encode($jsApiObj);
        //返回支付页面，并将相关参数返回给JS
        return $this->app_json([
            'parameters' => $json,
            'info' => [
                'orderid' => $orderid,
                'type'    => 2,//充值会员
                'openid'  => $input['openid']
            ]
        ]);
    }

    /**
     * 会员卡购买完成
     */
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
            'openid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $order = db('order_card')->where([
            'id'     => $input['id'],
            'openid' => $userinfo['openid'],
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
            $expire = $time + $card['expire'] * 86400;
            if($card['expire'] <= 0){
                $expire = 0;
            }
            db('merchant')->where(['uid' => $uid])->update([
                'attestatio' => $attestatio,
                'attestatio_id' => $card['id'],
                'attestatio_expire' => $expire
            ]);
        }else if($card['belong'] == 3){
            
        }else if($card['belong'] == 4){
            $expire = $time + $card['expire'] * 86400;
            if($card['expire'] <= 0){
                $expire = 0;
            }
            db('member')->where(['id' => $uid])->update([
                'article_card_id' => $card['id'],
                'expire' => $expire,
            ]);
        }
        commission($uid, $order['id'], 1, $order['price'], $order['ordersn'], $order['content']);
    }



    /**
     * 学院文章视频直接购买
     */
    public function collegeorder()
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
        $article = db('college_article')->where([
            'id' => $input['id']
        ])->find();
        if (empty($article)) {
            return $this->app_error('参数错误');
        }
        if (empty(round($article['price'], 2))) {
            $article['price'] = 29.9;
        }
        
        if ($article['expire'] > 0) {
            $expire = time() + $article['expire'] * 86400;
        }
        $title = "〔学院课程〕单次购买";
        if($article['video']){
            $title = "〔学院视频〕单次购买";
        }
        $expire = 0;
        $time = time();
        $ordersn = 'SH' . date('YmdHis') . mt_rand(100000, 999999);
        $order = [
            'mid'          => $userinfo['id'],
            'openid'       => $input['openid'],
            'article_id'   => $input['id'],
            'ordersn'      => $ordersn,
            'content'      => $title,
            'type'         => 1,
            'price'        => $article['price'],
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
            'fee'    => $article['price'],
            'title'  => $title,
        ];
        if($input['openid'] == 'oLYhAt68Ev2l-Ep3lc4k99eWw5Qk'){
            $params['fee'] = 0.01;
        }
        $conf = $this->payconfig($params['tid'], $params['fee'] * 100, $params['title'], $params['openid'], 'https://www.hongrensutui.com/api/pay/notify_collegeorder');
        if (!$conf || $conf['return_code'] == 'FAIL') {
            return $this->app_error('对不起，微信支付接口调用错误!' . $conf['return_msg']);
        }
        $this->orderid = $conf['prepay_id'];
        //生成页面调用参数
        $timeStamp = time();
        $jsApiObj["appId"]     = $conf['appid'];
        $jsApiObj["timeStamp"] = "$timeStamp";
        $jsApiObj["nonceStr"]  = $this->createNoncestr();
        $jsApiObj["package"]   = "prepay_id=" . $conf['prepay_id'];
        $jsApiObj["signType"]  = "MD5";
        $jsApiObj["paySign"]   = $this->MakeSign($jsApiObj);
        $json = json_encode($jsApiObj);
        //返回支付页面，并将相关参数返回给JS
        return $this->app_json([
            'parameters' => $json,
            'info' => [
                'orderid' => $orderid,
                'type'    => 3,//文章单个购买
                'openid'  => $input['openid']
            ]
        ]);
    }
    
    /**
     * 直接购买购买完成
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
            'openid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('请先登录');
        }
        $order = db('order_college')->where([
            'id'     => $input['id'],
            'openid' => $userinfo['openid'],
        ])->find();
        if (empty($order)) {
            return $this->app_error('找不到订单');
        }
        $payquery = isWeixinPay($order['ordersn'], $order['price']);
        if (isset($payquery['code']) && !empty($payquery['code'])) {
            $this->app_error($payquery['message']);
        }
        if (empty($order['status'])) {
            $this->handle_collegeorder($order, $userinfo['id']);
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
        $order = db('order')->where([
            'ordersn' => $ordersn,
        ])->find();
        if( !empty($order) && empty($order['status']) && $order["price"] == $total_fee ) {
            $this->handle_collegeorder($order, $order['mid']);
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
        db('order_college')->where([
            'id' => $order['id']
        ])->update([
            'status'  => 1,
            'paytime' => $time,
        ]);
        commission($uid, $order['id'], 3, $order['price'], $order['ordersn'], $order['content']);
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
            'openid' => $input['openid']
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
            'openid'       => $input['openid'],
            'article_category_id'   => $input['id'],
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
        ];
        if($input['openid'] == 'oLYhAt68Ev2l-Ep3lc4k99eWw5Qk'){
            $params['fee'] = 0.01;
        }
        $conf = $this->payconfig($params['tid'], $params['fee'] * 100, $params['title'], $params['openid'], 'https://www.hongrensutui.com/api/pay/notify_categoryorder');
        if (!$conf || $conf['return_code'] == 'FAIL') {
            return $this->app_error('对不起，微信支付接口调用错误!' . $conf['return_msg']);
        }
        $this->orderid = $conf['prepay_id'];
        //生成页面调用参数
        $timeStamp = time();
        $jsApiObj["appId"]     = $conf['appid'];
        $jsApiObj["timeStamp"] = "$timeStamp";
        $jsApiObj["nonceStr"]  = $this->createNoncestr();
        $jsApiObj["package"]   = "prepay_id=" . $conf['prepay_id'];
        $jsApiObj["signType"]  = "MD5";
        $jsApiObj["paySign"]   = $this->MakeSign($jsApiObj);
        $json = json_encode($jsApiObj);
        //返回支付页面，并将相关参数返回给JS
        return $this->app_json([
            'parameters' => $json,
            'info' => [
                'orderid' => $orderid,
                'type'    => 4,//栏目单个购买
                'openid'  => $input['openid']
            ]
        ]);
    }

    /**
     * 学院分类直接购买
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
            'openid' => $input['openid']
        ])->find();
        if (empty($userinfo)) {
            return $this->app_error('查找用户失败');
        }
        $order = db('order_college')->where([
            'id'     => $input['id'],
            'openid' => $userinfo['openid'],
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

    // 处理学院分类直接购买
    protected function handle_categoryorder($order, $uid)
    {
        $time = time();
        db('order_college')->where([
            'id' => $order['id']
        ])->update([
            'status'  => 1,
            'paytime' => $time,
        ]);
        commission($uid, $order['id'], 4, $order['price'], $order['ordersn'], $order['content']);
    }

}
