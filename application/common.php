<?php
/**
 *  重新排序数组，并按一维、二维拆分等级
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-03
 * @param     array      $arr
 * @param     integer    $pid   父级id
 * @param     integer    $level 赋值等级
 * @return    array
 */
function tree($arr, $pid = 0, $level = 0) {
    static $tree = array();
    foreach ($arr as $k => $v) {
        if ($v['pid'] == $pid) {
            $v['level'] = $level;
            $tree[]     = $v;
            tree($arr, $v['id'], $level + 1);
        }
    }
    return $tree;
}

/**
 *  数组拆分父栏目与子栏目
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-03
 * @param     array      $arr     一级数组
 * @param     integer    $pid     父级id
 * @param     string     $primary 表的主键值，上一级id
 * @return    array
 */
function getTree($arr, $pid = 0, $primary = 'id') {
    if (is_array($arr)) {
        $child = getChild($arr, $pid);
        if (empty($child)) {
            return null;
        }
        foreach ($child as $key => $value) {
            $current_child = getTree($arr, $value[$primary]);
            if ($current_child != null) {
                $child[$key]['children'] = $current_child;
            } else {
                $child[$key]['children'] = [];
            }
        }
    }
    return $child;
}

/**
 *  根据pid获取子栏目，返回子栏目数组集合
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-03
 * @param     array      $arr
 * @param     integer    $pid 父级id
 * @return    array
 */
function getChild($arr, $pid = 0) {
    if (is_array($arr)) {
        $child = array();
        foreach ($arr as $key => $value) {
            if ($value['pid'] == $pid) {
                $child[$key] = $value;
            }
        }
        return $child;
    }
    return $arr;
}

/**
 *  递归处理权限菜单，删除按钮类型，保留菜单类型
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-03
 * @param     array     &$menuData 权限菜单数据
 * @return    array
 */
function getCategory(&$menuData) {
    if (is_array($menuData) && !empty($menuData)) {
        foreach ($menuData as $key => $value) {
            if ($value['isbtn'] == 1) {
                unset($menuData[$key]);
            }
            if (isset($value['children']) && is_array($value['children'])
                                          && !empty($value['children'])){
                getCategory($menuData[$key]['children']);
            }
        }
    }
    return $menuData;
}

/**
 *  获取面包屑与选中主菜单
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-20
 * @param     array      $arr     权限菜单集合
 * @param     string     $pos     当前操作地址
 * @param     integer    $pid     父级菜单ID
 * @param     array      &$active 选中的上级菜单
 * @return    string              面包屑
 */
function getCatpos($arr, $pos, $pid = 0, &$active = []) {
    $catpos = '';
    if (is_array($arr)) {
        if(!$pid){
            foreach ($arr as $key => $value) {
                if ($value['name'] == $pos) {
                    $active = $value;
                    $catpos = $value['title'];
                    if(!empty($active['pid'])){
                        getCatpos($arr, $pos, $active['pid'], $active);
                    }
                }
            }
        }else{
            $active = $arr[$pid] ?? [];
            if(!empty($active['pid'])){
                getCatpos($arr, $pos, $active['pid'], $active);
            }
        }
    }
    return ['catpos' => $catpos, 'active' => $active];
}

/**
 *  获取当前URL
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-03
 * @param     bool       $true
 * @return    string
 */
function getActionUrl($true = false){
    $request = \think\Request::instance();
    $action_url = strtolower($request->module().'/'.$request->controller().'/'.$request->action());
    if ($true) {
        return url($action_url);
    }else{
        return $action_url;
    }
}

function isChildren($need, $arr){
    if(empty($need) || empty($arr) || !is_array($arr)){
        return false;
    }
    foreach ($arr as $key => $value) {
        if($need == $value['name']){
            return true;
        }
        if(isset($value['children'])){
            foreach ($value['children'] as $k => $v) {
                if($need == $v['name']){
                    return true;
                }
            }
        }
    }
    return false;
}

/**
 *  检测用户是否登录
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-03
 * @return    integer     0-未登录，大于0-当前登录用户ID
 */
function checkLogin()
{
    $now = time();
    if(!empty(cookie('manager'))){
        session('manager',cookie('manager'));
    }else{
        session('manager', null);
        // return 0;
    }
    // $logintime = session('logintime');
    // if ($now - $logintime > 7200) {
    //     //清空session
    //     session('manager', null);
    //     return 0;
    // }
    // session('logintime', time());
    $user = session('manager');
    if (empty($user)) {
        return 0;
    } else {
        addEncry($user['id']);
        return $user['id'];
    }
}

/**
 *  延长登录时间相关使用的密钥
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-03
 * @param     string     $uid
 */
function addEncry($uid)
{
    $_manager                  = session('manager');
    $_manager['_authList']     = session('_authList');
    $_manager['_authCategory'] = session('_authCategory');
    return $_manager;
}

/**
 *  用户密码加密
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-03
 * @param     string      $password 用户原始密码
 * @param     integer     $salt     盐值，4位随机数字
 * @return    string                加密后密码
 */
function encryption($password, $salt) {
    $result = sha1(md5($password) . $salt);
    return $result;
}

/**
 *  分页函数
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-03
 * @param     integer     $count    总页数
 * @param     integer     $pagesize 分页大小
 * @param     array       $map      页面url参数
 * @return    string                处理后html文本内容
 */
function getPage($count, $pagesize, $map = array())
{
    //如果不传pagesize 获取配置文件
    $pagesize = empty($pagesize) ? config('pagesize') : $pagesize;
    $Page     = new \app\common\libs\Page($count, $pagesize, $map);   // 实例化分页类，传入总记录数和每页显示的记录数
    $Page->setConfig('header', '<div class="page-total-text">共<span>%TOTAL_ROW%</span>条记录，每页<span>%LIST_ROW%</span>条，当前显示第 <span>%NOW_PAGE%</span> 页/共 <span>%TOTAL_PAGE%</span> 页</div><ul class="pagination">');
    $Page->setConfig('prev', '<i class="fe fe-chevron-left"></i>');
    $Page->setConfig('next', '<i class="fe fe-chevron-right"></i>');
    $Page->setConfig('theme', '%HEADER% %FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END%');
    //转换post参数
    /*array_walk($map, function (&$v, $k) {
        $v = urlencode($v);
    });
    $Page->parameter = array_merge($Page->parameter, $map);*/
    $show            = $Page->show();
    return $show;
}

/**
 *  生成唯一guid
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-03
 * @return    string
 */
function createGuid() {
    $charid = strtoupper(md5(uniqid(mt_rand(), true)));
    $hyphen = chr(45); // "-"
    $uuid = // "{"chr(123)
            substr($charid, 0, 8) . $hyphen
          . substr($charid, 8, 4) . $hyphen
          . substr($charid, 12, 4) . $hyphen
          . substr($charid, 16, 4) . $hyphen
          . substr($charid, 20, 12); // "}"chr(125)
    return $uuid;
}

/**
 * 生成随机数
 * @param string  $len
 * @param string  $format
 * @return string
 */
function randStr($len = 6, $format = 'ALL') { 
    switch($format) {
        case 'ALL':
            $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-@#~';
            break;
        case 'CHAR':
            $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            break;
        case 'NUMBER':
            $chars = '0123456789';
            break;
        default :
            $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-@#~';
            break;
    }
    mt_srand((double)microtime()*1000000*getmypid());
    $str      = "";
    while(strlen($str) < $len)
        $str .= substr($chars, (mt_rand()%strlen($chars)), 1);
    return $str;
}

/**
 *  远程cdn地址转换
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-31
 * @param     [type]     $src [description]
 * @return    [type]          [description]
 */
function tomedia($src){
    if (empty($src)) {
        return '';
    }
    if (strpos($src, 'http://') !== false || strpos($src, 'https://') !== false || substr($src, 0, 2) == '//') {
        return $src;
    } else {
        return 'https://www.hongrensutui.com' . $src;
    }
}

/**
 *  时间格式化
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-31
 * @param     [type]     $seconds 时间，单位 s
 * @param     [type]     $format  格式，all-时分秒，h-时，i-分，s-秒
 * @param     [type]     $suffix  是否追加单位，默认true
 * @return    [type]              时间，单位 h
 */
function formatTime($seconds, $format = "all", $suffix = true){
    if(intval($seconds) < 60){
        $t = '00';
        $h = '00';
        $s = sprintf("%02d",intval($seconds%60));
    }
    if(intval($seconds) >=60){
        $h = sprintf("%02d",intval($seconds/60));
        $s = sprintf("%02d",intval($seconds%60));
        if($s == 60){
            $s = sprintf("%02d",0);
            ++$h;
        }
        $t = "00";
        if($h == 60){
            $h = sprintf("%02d",0);
            ++$t;
        }
        if($t){
            $t = sprintf("%02d",$t);
        }
    }
    if(intval($seconds) >= 60*60){
        $t = sprintf("%02d",intval($seconds/3600));
        $h = sprintf("%02d",intval($seconds/60)-$t*60);
        $s = sprintf("%02d",intval($seconds%60));
        if($s == 60){
            $s = sprintf("%02d",0);
            ++$h;
        }
        if($h == 60){
            $h = sprintf("%02d",0);
            ++$t;
        }
        if($t){
            $t = sprintf("%02d",$t);
        }
    }
    switch ($format) {
        case 'h':
            if($suffix){
                $tt      = $t."时";
                $default = '00时';
            }else{
                $tt      = $t;
                $default = 0;
            }
            break;
        case 'i':
            if($suffix){
                $tt      = $h."分";
                $default = '00分';
            }else{
                $tt      = $h;
                $default = 0;
            }
            break;
        case 's':
            if($suffix){
                $tt      = $s."秒";
                $default = '00秒';
            }else{
                $tt      = $s;
                $default = 0;
            }
            break;
        case 'hi':
            if($suffix){
                $tt      = $t."时".$h."分";
                $default = '00时00分';
            }else{
                $tt      = $t.":".$h;
                $default = 0;
            }
            break;
        case 'is':
            if($suffix){
                $tt      = $h."分".$s."秒";
                $default = '00分00秒';
            }else{
                $tt      = $h.":".$s;
                $default = 0;
            }
            break;
        default:
            if($suffix){
                $tt      = $t."时".$h."分".$s."秒";
                $default = '00时00分00秒';
            }else{
                $tt      = $t.":".$h.":".$s;
                $default = 0;
            }
            break;
    }
    return $seconds > 0 ? $tt: $default;
}

/**
 *  数字格式化
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-31
 * @param     [type]     $number 数字
 * @return    [type]             数字
 */
function formatNumber($number){
    if($number < 10000){
        return round($number);
    }else{
        return round($number / 10000, 2) . '万';
    }
}

/**
 *  手机号格式化
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-08-31
 * @param     [type]     $mobile 手机号
 * @return    [type]             手机号
 */
function formatMobile($mobile){
    if(empty($mobile) || !$mobile || UID == config('user_admin')){
        return $mobile;
    }else{
        return preg_replace('/(1[0-9]{1}[0-9])[0-9]{4}([0-9]{4})/i','$1****$2',$mobile);
    }
}

/**
 *  计算加入天数
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-09-04
 * @param     [type]     $date 加入时间
 * @return    [type]           天数
 */
function diffDays($date){
    if(empty($date)){
        return '1';
    }
    $a_dt  = getdate(time());
    $b_dt  = getdate($date);
    $a_new = mktime(12, 0, 0, $a_dt['mon'], $a_dt['mday'], $a_dt['year']);
    $b_new = mktime(12, 0, 0, $b_dt['mon'], $b_dt['mday'], $b_dt['year']);
    $res   = round(abs($a_new-$b_new)/86400) > 0 ? round(abs($a_new-$b_new)/86400) : 1;
    return $res;
}

/**
 * 字符串截取，支持中文和其他编码
 *
 * @param string $str     需要转换的字符串
 * @param string $start   开始位置
 * @param string $length  截取长度
 * @param string $suffix  截断字符串后缀
 * @param string $charset 编码格式
 * @return string
 */
function msubstr($str, $start = 0, $length, $suffix = true, $charset = "utf-8") {
    if (function_exists("mb_substr")) {
        if (mb_strlen($str, 'UTF-8') >= $length) {
            $buff = '...';
        }
        if($suffix)
            return mb_substr($str, $start, $length, $charset) . $buff;
        else
            return mb_substr($str, $start, $length, $charset);
    } elseif (function_exists('iconv_substr')) {
        if (mb_strlen($str, 'UTF-8') >= $length) {
            $buff = '...';
        }
        if($suffix)
            return iconv_substr($str, $start, $length, $charset) . $buff;
        else
            return iconv_substr($str, $start, $length, $charset);
    }
    $re['utf-8']  = "/[\x01-\x7f]|[\xc2-\xdf][\x80-\xbf]|[\xe0-\xef][\x80-\xbf]{2}|[\xf0-\xff][\x80-\xbf]{3}/";
    $re['gb2312'] = "/[\x01-\x7f]|[\xb0-\xf7][\xa0-\xfe]/";
    $re['gbk']    = "/[\x01-\x7f]|[\x81-\xfe][\x40-\xfe]/";
    $re['big5']   = "/[\x01-\x7f]|[\x81-\xfe]([\x40-\x7e]|\xa1-\xfe])/";
    preg_match_all($re[$charset], $str, $match);
    $slice        = join("", array_slice($match[0], $start, $length));
    if (mb_strlen($str, 'UTF-8') <= $length) {
        $buff     = '';
    }
    if($suffix)
        return $slice . $buff;
    else
        return $slice;
}

/**
 *  数组键值转换
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-12-01
 * @param     [type]     $array    数组
 * @param     [type]     $key_name 转换的键名
 * @param     [type]     $key_name 转换的键值
 * @return    [type]               array
 */
function convertArrayKey($array, $key_name, $val_name = ''){
    if(!$key_name)
        return $array;
    $result = array();
    foreach($array as $key => $val){
        if(!empty($val_name)){
            $result[$val[$key_name]] = $val[$val_name];
        }else{
            $result[$val[$key_name]] = $val;
        }
    }
    return $result;
}

/**
 *  写入日志
 * @version   1.0.0
 * @license   zhi6.com
 * @copyright zhi6.com
 * @Author    zhangzj
 * @DateTime  2018-09-12
 * @param     integer    $status 状态：0-操作失败，1-操作成功
 * @param     [type]     $info   操作说明
 * @param     [type]     $url    操作URL
 * @return    [type]
 */
function action_log($key = 0, $status = true, $info = null, $url = null){
    $request = \think\Request::instance();
    $data['key']          = $key;
    $data['url']          = $url ? $url : getActionUrl();
    $data['operator']     = session('manager')['id'];
    $data['operatorname'] = session('manager')['username'];
    $data['addtime']      = time();
    $data['ip']           = $request->ip();
    $node                 = db('auth_rule')->where(array('name'=>$data['url']))->find();
    if($status){
        $data['status']   = 1;
    }else{
        $data['status']   = 0;
    }
    if($info){
        $data['description'] = $info;
    }else{
        $data['description'] = isset($node['title']) ? $node['title'] : '';
    }
    db('log')->insert($data);
}

function strip_emoji($nickname) {
	$clean_text = "";
    $regexEmoticons = '/[\x{1F600}-\x{1F64F}]/u';
	$clean_text = preg_replace($regexEmoticons, '', $nickname);
    $regexSymbols = '/[\x{1F300}-\x{1F5FF}]/u';
	$clean_text = preg_replace($regexSymbols, '', $clean_text);
    $regexTransport = '/[\x{1F680}-\x{1F6FF}]/u';
	$clean_text = preg_replace($regexTransport, '', $clean_text);
    $regexMisc = '/[\x{2600}-\x{26FF}]/u';
	$clean_text = preg_replace($regexMisc, '', $clean_text);
    $regexDingbats = '/[\x{2700}-\x{27BF}]/u';
    $clean_text = preg_replace($regexDingbats, '', $clean_text);
    $regexDingbats = '/[\x{10000}-\x{10FFFF}]/u';
    $clean_text = preg_replace($regexDingbats, '', $clean_text);

	$clean_text = str_replace("'",'',$clean_text);
	$clean_text = str_replace('"','',$clean_text);
	$clean_text = str_replace('“','',$clean_text);
	$clean_text = str_replace('゛','',$clean_text);
	$search = array(" ","　","\n","\r","\t");
	$replace = array("","","","","");
	return str_replace($search, $replace, $clean_text);
}

function random($length, $numeric = FALSE) {
	$seed = base_convert(md5(microtime() . $_SERVER['DOCUMENT_ROOT']), 16, $numeric ? 10 : 35);
	$seed = $numeric ? (str_replace('0', '', $seed) . '012340567890') : ($seed . 'zZ' . strtoupper($seed));
	if ($numeric) {
		$hash = '';
	} else {
		$hash = chr(rand(1, 26) + rand(0, 1) * 32 + 64);
		$length--;
	}
	$max = strlen($seed) - 1;
	for ($i = 0; $i < $length; $i++) {
		$hash .= $seed{mt_rand(0, $max)};
	}
	return $hash;
}

function array2xml($arr, $level = 1) {
	$s = $level == 1 ? "<xml>" : '';
	foreach ($arr as $tagname => $value) {
		if (is_numeric($tagname)) {
			$tagname = $value['TagName'];
			unset($value['TagName']);
		}
		if (!is_array($value)) {
			$s .= "<{$tagname}>" . (!is_numeric($value) ? '<![CDATA[' : '') . $value . (!is_numeric($value) ? ']]>' : '') . "</{$tagname}>";
		} else {
			$s .= "<{$tagname}>" . array2xml($value, $level + 1) . "</{$tagname}>";
		}
	}
	$s = preg_replace("/([\x01-\x08\x0b-\x0c\x0e-\x1f])+/", ' ', $s);
	return $level == 1 ? $s . "</xml>" : $s;
}

/**
 * 根据appid与appsecret获取accesstoken(公众号)
 *
 * @param  $parameters
 */
function get_access_token_gzh()
{
    $res = \think\Cache::get('access_token_gzh');
    if (empty($res)) {
        $appid = config('gzhappid');
        $appsecret = config('gzhappsecret');
        $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' . $appid . '&secret=' . $appsecret;  
        $res = https_request($url);
        if (strpos($res, 'errcode') === false) {
            \think\Cache::set('access_token_gzh', $res, 7000);
        }
    }
    return json_decode($res, true);
}

/**
 * 根据access_token获取登录二维码(公众号)
 *
 * @param  $parameters
 */
function showqrcode()
{
    $qrcode = \think\Cache::get('showqrcode');
    if (empty($qrcode)) {
        $accessToken = get_access_token_gzh();

        $url = "https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=" .$accessToken['access_token'] . "";
        $qrcodedata = '{"expire_seconds": 1800, "action_name": "QR_SCENE", "action_info": {"scene": {"scene_id": 123}}}';
        $qrcode = https_request($url, $qrcodedata);
        if (strpos($qrcode, 'errcode') === false) {
            \think\Cache::set('showqrcode', $qrcode, 1800);
        }
    }
    return json_decode($qrcode, true);
}

/**
 * 根据appid与appsecret获取accesstoken(小程序)
 *
 * @param  $parameters
 */
function get_access_token_xcx()
{
    $res = \think\Cache::get('access_token_xcx');
    if (empty($res)) {
        $appid = config('xcxappid');
        $appsecret = config('xcxappsecret');
        $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' . $appid . '&secret=' . $appsecret;  
        $res = https_request($url);
        if (strpos($res, 'errcode') === false) {
            \think\Cache::set('access_token_xcx', $res, 7000);
        }
    }

    return json_decode($res, true);
}

/**
 * 根据code获取用户信息(公众号)
 *
 * @param  $parameters
 */
function get_access_token_code_gzh($code)
{
    $appid = config('gzhappid');
    $appsecret = config('gzhappsecret');
    $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?grant_type=authorization_code&appid=' . $appid . '&secret=' . $appsecret . '&code=' . $code;
    $res = https_request($url);
    return json_decode($res, true);
}
/**
 * 根据code获取用户信息(小程序)
 *
 * @param  $parameters
 */
function get_access_token_code_xcx($code)
{
    $appid = config('xcxappid');
    $appsecret = config('xcxappsecret');
    $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?grant_type=authorization_code&appid=' . $appid . '&secret=' . $appsecret . '&code=' . $code;
    $res = https_request($url);
    return json_decode($res, true);
}

/**
 * 根据refresh_token刷新access_token
 *
 * @param  $parameters
 */
function get_refresh_token_h5($refresh_token)
{
    $appid = config('gzhappid');
    $appsecret = config('gzhappsecret');
    $url = 'https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=' . $appid . '&grant_type=refresh_token&refresh_token=' . $refresh_token;
    $res = https_request($url);
    return json_decode($res, true);
}


/**
 * 根据code获取oppenid
 *
 * @param  $code
 */
function get_openid($code)
{
    $appid = config('xcxappid');
    $appsecret = config('xcxappsecret');
    $url = "https://api.weixin.qq.com/sns/jscode2session?appid=" . $appid . "&secret=" . $appsecret . "&js_code=" . $code . "&grant_type=authorization_code";
    $res = https_request($url);
    return json_decode($res, true);
}

/**
 * 根据access_token以及oppenid获取用户信息
 *
 * @param  $access_token
 * @param  $oppenid
 */
function get_userinfo_h5($access_token, $oppenid)
{
    $url = 'https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$oppenid.'&lang=zh_CN';  
    $res = https_request($url);
    return json_decode($res, true);
}

/**
 * 根据access_token以及oppenid获取用户信息
 *
 * @param  $access_token
 * @param  $oppenid
 */
function get_userinfo($access_token, $oppenid)
{
    $url = 'https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$oppenid;  
    $res = https_request($url);
    return json_decode($res, true);
}

/**
  * 小程序微信支付
  * @param $params
  * @param int $type
  * @return array
*/
function wxapp_pay($params, $notify = '')
{
    $appid     = config('xcxappid');
    $mchid     = config('mchid');
    $apisecret = config('apisecret');
    $package   = [
        'appid'            => $appid,
        'mch_id'           => $mchid,
        'nonce_str'        => random(32),
        'openid'           => $params['openid'],
        'body'             => $params['title'],
        'out_trade_no'     => $params['tid'],
        'total_fee'        => $params['fee'] * 100,
        'spbill_create_ip' => $params['ip'],
        'notify_url'       => $notify,
        'trade_type'       => 'JSAPI',
    ];
    ksort($package, SORT_STRING);
    $string1 = "";
    foreach( $package as $key => $v ) {
        if( empty($v) ) {
            continue;
        }
        $string1 .= (string) $key . "=" . $v . "&";
    }
    $string1 .= "key=" . $apisecret;
    $package["sign"] = strtoupper(md5($string1));
    $dat = array2xml($package);
    $response = https_request("https://api.mch.weixin.qq.com/pay/unifiedorder", $dat);
    libxml_disable_entity_loader(true);
    $xml = @simplexml_load_string($response, "SimpleXMLElement", LIBXML_NOCDATA);
    if( strval($xml->return_code) == "FAIL" ) {
        return [
            'code' => 1,
            'message' => strval($xml->return_msg)
        ];
    }
    if( strval($xml->result_code) == "FAIL" ) {
        return [
            'code' => 1,
            'message' => strval($xml->err_code) . ": " . strval($xml->err_code_des)
        ];
    }
    $prepayid          = $xml->prepay_id;
    $wOpt["appId"]     = $appid;
    $wOpt["timeStamp"] = time() . "";
    $wOpt["nonceStr"]  = random(32);
    $wOpt["package"]   = "prepay_id=" . $prepayid;
    $wOpt["signType"]  = "MD5";
    ksort($wOpt, SORT_STRING);
    $string = "";
    foreach( $wOpt as $key => $v ) 
    {
        $string .= (string) $key . "=" . $v . "&";
    }
    $string .= "key=" . $apisecret;
    $wOpt["paySign"] = strtoupper(md5($string));
    unset($wOpt["appId"]);
    return $wOpt;
}

function isWeixinPay($out_trade_no, $money = 0) 
{
    $appid     = config('appid');
    $mchid     = config('mchid');
    $apisecret = config('apisecret');
    $pars = [
        'appid'        => $appid,
        'mch_id'       => $mchid,
        'nonce_str'    => random(32),
        'out_trade_no' => $out_trade_no,
    ];
    ksort($pars, SORT_STRING);
    $string1 = "";
    foreach( $pars as $k => $v ) 
    {
        $string1 .= (string) $k . "=" . $v . "&";
    }
    $string1 .= "key=" . $apisecret;
    $pars["sign"] = strtoupper(md5($string1));
    $xml = array2xml($pars);
    $resp = https_request("https://api.mch.weixin.qq.com/pay/orderquery", $xml);
    $xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" . $resp;
    $dom = new DOMDocument();
    if( $dom->loadXML($xml) ) {
        $xpath = new DOMXPath($dom);
        $code = $xpath->evaluate("string(//xml/return_code)");
        $ret = $xpath->evaluate("string(//xml/result_code)");
        $trade_state = $xpath->evaluate("string(//xml/trade_state)");
        if( strtolower($code) == "success" && strtolower($ret) == "success" && strtolower($trade_state) == "success" ) 
        {
            $total_fee = intval($xpath->evaluate("string(//xml/total_fee)")) / 100;
            if( $total_fee != $money ) 
            {
                return [
                    'code' => 1,
                    'message' => '金额出错'
                ];
            }
            return true;
        }
        if( $xpath->evaluate("string(//xml/return_msg)") == $xpath->evaluate("string(//xml/err_code_des)") ) 
        {
            $error = $xpath->evaluate("string(//xml/return_msg)");
        }
        else 
        {
            $error = $xpath->evaluate("string(//xml/return_msg)") . " | " . $xpath->evaluate("string(//xml/err_code_des)");
        }
        return [
            'code' => 1,
            'message' => $error
        ];
    }
    return [
        'code' => 1,
        'message' => '未知错误'
    ];
}

/**
 * https请求
 * @param  $url  请求网址
 */
function https_request($url , $data = null)
{
    // dump($data);exit();
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    if (!empty($data)){ 
        curl_setopt($curl, CURLOPT_POST, 1);
        // curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    }
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
}

/**
 * 数据导出到excel(csv文件)
 * @param $fileName
 * @param array $tileArray
 * @param array $dataArray
 */
function export_excel($fileName, $tileArray = [], $dataArray = [])
{
    ini_set('memory_limit', '512M');
    ini_set('max_execution_time', 0);
    ob_end_clean();
    ob_start();
    header("Content-Type: text/csv");
    header("Content-Disposition:filename=" . $fileName);
    $fp = fopen('php://output', 'w');
    fwrite($fp, chr(0xEF) . chr(0xBB) . chr(0xBF));// 转码 防止乱码(比如微信昵称)
    fputcsv($fp, $tileArray);
    $index = 0;
    foreach ($dataArray as $item) {
        if ($index == 1000) {
            $index = 0;
            ob_flush();
            flush();
        }
        $index++;
        fputcsv($fp, $item);
    }
    ob_flush();
    flush();
    ob_end_clean();
}

// 分销佣金结算
function commission($member_id, $order_id, $order_type, $order_price, $order_sn, $remark) {
    db('consume_log')->insert([
        'mid' => $member_id,
        'content' => $remark,
        'orderid' => $order_id,
        'ordersn' => $order_sn,
        'price' => $order_price,
        'paytime' => time(),
        'addtime' => time(),
    ]);
    $rate = db('setting')->find(1);
    $first_rate = $rate['first_commission'];
    $second_rate = $rate['second_commission'];
    $member = db('member')->find($member_id);
    $commission = [];
    if (!empty($member['invite'])) {
        $first_member = db('member')->find($member['invite']);
        if (!empty($first_member['company_id'])) {
            $company = db('company')->find($first_member['company_id']);
            $first_rate = !empty($company['first_rate']) ? $company['first_rate'] : $first_rate;
        }
        $commission = [
            'member_id'       => $member_id,
            'order_id'        => $order_id,
            'order_type'      => $order_type,
            'order_price'     => $order_price,
            'first_member_id' => $first_member['id'],
            'first_money'     => round($order_price * $first_rate, 2),
            'addtime'         => time()
        ];
        $second_member = db('member')->find($first_member['invite']);
    } else {
        $second_member = null;
    }
    if (!empty($second_member)) {
        if (!empty($second_member['company_id'])) {
            $company = db('company')->find($second_member['company_id']);
            $second_rate = !empty($company['second_rate']) ? $company['second_rate'] : $second_rate;
        }
        $commission['second_member_id'] = $second_member['id'];
        $commission['second_money']     = round($order_price * $second_rate, 2);
    }
    if (!empty($commission)) {
        db('commission_detail')->insert($commission);
    }
}

// 生成二维码
function createQRcode($save_path, $content, $enable_logo = true, $logo = '', $enable_label = true, $label = '红人速推'){
    $logo   = $logo ? $logo : ROOT_PATH.'public/static/qr_logo.png';
    $label   = $label ? $label : '红人速推';
    $qrCode = new \Endroid\QrCode\QrCode($content);
    $qrCode->setWriterByName('png');
    //设置前景色
    $qrCode->setForegroundColor(['r' => 0, 'g' => 0, 'b' =>0, 'a' => 0]);
    //设置背景色
    $qrCode->setBackgroundColor(['r' => 255, 'g' => 255, 'b' => 255, 'a' => 10]);
    //设置二维码大小
    $qrCode->setSize(430);
    $qrCode->setMargin(20);
    //添加logo
    if ($enable_logo) {
        $qrCode->setLogoPath($logo);
        $qrCode->setLogoSize(96, 96);
    }
    //添加标题
    if ($enable_label) {
        // $qrCode->setLabel($label);
        // $qrCode->setLabelFontSize(14);
    }
    //生成二维码
    $qrCode->writeFile($save_path);
    return true;
}

function CreateWxappCode($scene, $page, $save_path)
{
    // 微信接口url
    $access_token = get_access_token()['access_token'];
    $url = "https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token={$access_token}";
    // 构建请求
    $data = [
        'scene' => $scene,
        'width' => 256,
        'page' => $page,
    ];
    // 返回结果
    $result = wxcode_post($url, json_encode($data, JSON_UNESCAPED_UNICODE));
    if (!strpos($result, 'errcode')) {
        file_put_contents($save_path, $result);
    }
    return true;
}

function wxcode_post($url, $data = [], $useCert = false, $sslCert = [])
{
    $header = [
        'Content-type: application/json;'
    ];
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_POST, TRUE);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    if ($useCert == true) {
        // 设置证书：cert 与 key 分别属于两个.pem文件
        curl_setopt($curl, CURLOPT_SSLCERTTYPE, 'PEM');
        curl_setopt($curl, CURLOPT_SSLCERT, $sslCert['certPem']);
        curl_setopt($curl, CURLOPT_SSLKEYTYPE, 'PEM');
        curl_setopt($curl, CURLOPT_SSLKEY, $sslCert['keyPem']);
    }
    $result = curl_exec($curl);
    curl_close($curl);
    return $result;
}

 //用户数据处理
function updatemember($id)
{
    if($id){
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
    }else{
        return null;
    }
}

 //删除指定图片
function deletePicture($url)
{
    if(isset($url) && $url !== ''){
        $img = explode('/',$url);    
        $dir=ROOT_PATH . 'public' . DS . 'uploads/'.$img[2].'/'.$img[3];  
        if(file_exists($dir)){
            $data = unlink($dir);
        }else{
            $data = 0;
        }
        return $data;
    }
}

 //获取字符串中所有src路径
function getSrc($str)
{
    if(isset($str) && $str !== ''){
        $reg = '/(?<=(src="))[^"]*?(?=")/';
        $matches = array();
        $data = array();
        preg_match_all($reg, $str, $matches);
        return $matches[0];
    }
}

//打印函数封装
if (! function_exists ( 'dump' ))
{
    function dump($var, $exit = true) {
        echo '<pre>';
        print_r (json_decode(json_encode($var)));
        echo '</pre>';
        if ($exit) {
            die ();
        }
    }
}

//模板方法
//模板标签处理
function TemplateLable($list){
    $where=array();
    $lable='';
    $where['id'] = array('in',$list);
    $info = db('Classify')->where($where)->select();
    if(!empty($info)){
        foreach ($info as $key => $value){
            if($key < 3){
                $lable = $lable . '<a href="/category/'.$value['id'].'.html" class="TemplateLable" style="background:'.$value['background'].'">' . $value['name'] . '</a>';
            }
        }
    }
    return $lable;
}
//模板内容处理
function TemplateLableNum($id){
    $where = "find_in_set($id,lable)";
    $count = db('Article')->where($where)->count();
    return $count;
}

