<?php
namespace app\api\controller;
/**
 * Class WechatController
 *
 * @package \\${NAMESPACE}
 */
class WechatController extends Common
{
    private $_token = "onepie";
    private $appid = 'wx91104fc1e784a6a7';
    private $secrect = '7aa5c394f1995627e0876536929f5b77';
    private $accessToken = '';

    static $qrcode_url = "https://api.weixin.qq.com/cgi-bin/qrcode/create?";
    static $token_url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&";
    static $qrcode_get_url = "https://mp.weixin.qq.com/cgi-bin/showqrcode?";

    public function indexAction()
    {
        $fqid = rand(1000000, 99999999);
        $ACCESS_TOKEN = $this->getToken($this->appid, $this->secrect);
        $url = $this->getQrcodeurl($ACCESS_TOKEN, $fqid, 2);
        file_put_contents(LOG_PATH . '/wx.log', $fqid, FILE_APPEND);
        $img_url = $this->DownLoadQr($url, 'qrcode');
        $this->setData('qrcode_url', $img_url);
        $this->setView('index');
    }

    /**
     * 获取关注二维码ticket
     * @param     $ACCESS_TOKEN
     * @param     $fqid
     * @param int $type
     *
     * @return bool|string
     */
    protected function qrcodeurl($ACCESS_TOKEN, $fqid, $type = 2)
    {
        $url = self::$qrcode_url . 'access_token=' . $ACCESS_TOKEN;
        if ($type == 1) {
            //生成永久二维码
            $qrcode = '{"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_str": ' . $fqid . '}}}';
        } else {
            //生成临时二维码
            $qrcode = '{"expire_seconds": 604800, "action_name": "QR_STR_SCENE", "action_info": {"scene": {"scene_str": ' . $fqid . '}}}';
        }
        $result = http_post_data($url, $qrcode);
        $oo = json_decode($result[1]);
        if (empty($oo->ticket)) {
            return false;
        }
        if (!$oo->ticket) {
            $this->ErrorLogger('getQrcodeurl falied. Error Info: getQrcodeurl get failed');
            exit();
        }
        $url = self::$qrcode_get_url . 'ticket=' . $oo->ticket . '';
        echo $oo->ticket;
        return $url;
    }

    /**
     * 保存二维码到服务器
     * 可直接进行展示不进行存储，看业务需求
     *
     * @param $url
     * @param $filestring
     *
     * @return bool|string
     */
    protected function DownLoadQr($url, $filestring)
    {
        if ($url == "") {
            return false;
        }
        $filename = $filestring . rand(0, 99999999999) . '.jpg';
        ob_start();
        readfile($url);
        $img = ob_get_contents();
        ob_end_clean();
        /*if (!file_exists('/public/qrcode/' . $filename)) {
            touch('/public/qrcode/' . $filename);
        }*/
        $file = PUBLIC_PATH . 'qrcode/' . $filename;
        $fp2 = fopen($file, "a");
        if (fwrite($fp2, $img) === false) {
            $this->ErrorLogger('dolwload image falied. Error Info: 无法写入图片');
            exit();
        }
        fclose($fp2);
        return '/public/qrcode/' . $filename;
    }

    /**
     * @param $appid
     * @param $appsecret
     *
     * @return mixed
     * 获取token
     */
    protected function getToken($appid, $appsecret)
    {
        $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" . $appid . "&secret=" . $appsecret;
        $token = request_get($url);
        $token = json_decode(stripslashes($token));
        $arr = json_decode(json_encode($token), true);
        $access_token = $arr['access_token'];
        return $access_token;
    }


    public function serviceAction()
    {
        $this->showPage = false;
        $echoStr = @$_GET["echostr"];
        if (!isset($echoStr)) {
            $this->responseMsg();
        } else {
            $this->valid();
        }
    }

    public function valid()
    {
        $nonce = $_GET['nonce'];
        $token = $this->_token;
        $timestamp = $_GET['timestamp'];
        $echostr = $_GET['echostr'];
        $signature = $_GET['signature'];
        //形成数组，然后按字典序排序
        $array = array($nonce, $timestamp, $token);
        sort($array);
        //拼接成字符串,sha1加密 ，然后与signature进行校验
        $str = sha1(implode($array));
        if ($str == $signature) {
            echo $echostr;
            exit;
        }
    }

    /**
     * 微信事件推送接收方法
     */
    public function responseMsg()
    {
        $postStr = isset($GLOBALS['HTTP_RAW_POST_DATA']) ? $GLOBALS['HTTP_RAW_POST_DATA'] : file_get_contents("php://input");
        if (!empty($postStr)) {
            $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
            // 微信消息类型
            $RX_TYPE = trim($postObj->MsgType);
            switch ($RX_TYPE) {
                case "text":
                    // 文本消息
                    $resultStr = $this->handleText($postObj);
                    break;
                case "event":
                    // 事件推送
                    $resultStr = $this->handleEvent($postObj);
                    break;
                default:
                    $resultStr = "Unknow msg type: " . $RX_TYPE;
                    break;
            }
            echo $resultStr;
        } else {
            echo "";
            exit;
        }
    }


    /**
     * 微信文本消息
     * @param $postObj
     */
    public function handleText($postObj)
    {
        $fromUsername = $postObj->FromUserName;
        $toUsername = $postObj->ToUserName;
        $keyword = trim($postObj->Content);
        $time = time();
        $textTpl = "<xml>
                    <ToUserName><![CDATA[%s]]></ToUserName>
                    <FromUserName><![CDATA[%s]]></FromUserName>
                    <CreateTime>%s</CreateTime>
                    <MsgType><![CDATA[%s]]></MsgType>
                    <Content><![CDATA[%s]]></Content>
                    <FuncFlag>0</FuncFlag>
                    </xml>";
        if (!empty($keyword)) {
            $msgType = "text";
            $contentStr = "欢迎您关注";
            $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
            echo $resultStr;
        } else {
            echo "lalala";
        }
    }

    /**
     * 获取时间消息并解析相应参数
     * 提供数据简单推送(自动回复)
     * @param $object
     *
     * @return string
     */
    public function handleEvent($object)
    {
        $contentStr = "";
        switch ($object->Event) {
            case "subscribe":
                $contentStr = "感谢您关注【测试账号】";
                $openid = (string)$object->FromUserName; //数据类型转换为字符串,mmp这个问题找了好久
                $refer_id = explode('_', $object->EventKey); //$object->EventKey返回的是qrsence_123这种类型
                $this->createuserinfo($openid, $refer_id[1]);//获取用户信息
                break;
            case "SCAN":
                $contentStr = "您已关注过，谢谢！";
                $openid = (string)$object->FromUserName; //数据类型转换为字符串,mmp这个问题找了好久
                $refer_id = explode('_', $object->EventKey); //$object->EventKey返回的是qrsence_123这种类型
                $this->createuserinfo($openid, $refer_id[0]);//获取用户信息
                break;
        }
        $resultStr = $this->responseText($object, $contentStr);
        return $resultStr;
    }

    /**
     * 消息回复模板
     * @param     $object
     * @param     $content
     * @param int $flag
     *
     * @return string
     */
    public function responseText($object, $content, $flag = 0)
    {
        $textTpl = "<xml>
                    <ToUserName><![CDATA[%s]]></ToUserName>
                    <FromUserName><![CDATA[%s]]></FromUserName>
                    <CreateTime>%s</CreateTime>
                    <MsgType><![CDATA[text]]></MsgType>
                    <Content><![CDATA[%s]]></Content>
                    <FuncFlag>%d</FuncFlag>
                    </xml>";
        $resultStr = sprintf($textTpl, $object->FromUserName, $object->ToUserName, time(), $content, $flag);
        return $resultStr;
    }

    /**
     * 获取用户详细信息
     * @param $openid
     * @param $refer_id
     */
    public function createuserinfo($openid, $refer_id)
    {
        $url = "https://api.weixin.qq.com/cgi-bin/user/info?access_token=" . $this->getToken($this->appid, $this->secrect) . "&openid=" . $openid;
        $user = request_get($url);
        $user = json_decode($user, true);
        $users = array(
            'openid' => $openid,
            'nickname' => $user['nickname'],
            'avatar' => $user['headimgurl'],
            'sex' => $user['sex'],
            'unionid' => $user['unionid'],
            'status' => 1,
            'reg_time' => $user['subscribe_time'],//关注公众号的时间
            'bind_user' => $refer_id
        );
        $user_str = date('Y-m-d H:i:s') . "\t";
        foreach ($users as $key => $value) {
            $user_str .= $key . '=' . $value . "\t";
        }
        $user_str .= "\n";
        file_put_contents(LOG_PATH . "wx.log", $user_str, FILE_APPEND);
    }

}