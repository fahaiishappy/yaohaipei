<?php
namespace app\index\controller;
use think\Controller;
use think\Request;
use think\Db;

//公用控制器
class Common extends Controller
{
	protected $request;
    
	//公用构造函数
	public function __construct() {
		parent::__construct();
		$menu = db('Classify')->where(['pid' => 0])->order('id asc')->select();
        $lables = db('Classify')->where(['pid' => ['>',0]])->order('id desc')->select();
        $recommend = db('Article')->where('recommend > 0')->limit(10)->order('id desc')->field('id, title')->select();
        $this->assign([
            'menu' => $menu,
            'lables' => $lables,
            'recommend' => $recommend
        ]);
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
