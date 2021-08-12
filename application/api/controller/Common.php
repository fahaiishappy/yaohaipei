<?php
namespace app\api\controller;

use think\Controller;
use think\Request;

/**
 * 公用控制器
 */
class Common extends Controller
{
	protected $request;
	/**
	 *  公用构造函数
	 */
	public function __construct() {
        header("Access-Control-Allow-Origin: *");
        parent::__construct();
		$this->request = Request::instance();
    }

    protected function app_json($data = []) {
        return json([
            'error'   => 0,
            'message' => 'success',
            'data'    => $data
        ]);
    }

    protected function app_error($msg = '', $code = 1) {
        return json([
            'error'   => $code,
            'message' => !empty($msg) ? $msg : '系统错误',
        ]);
    }
}
