<?php
namespace app\admin\controller;
use think\Controller;
use think\Request;

//登录管理
class Login extends Controller
{
    protected $request;

    public function __construct()
    {
        parent::__construct();
        $this->request = Request::instance();
    }

	//登录
    public function login()
    {
    	if ($this->request->isPost()) {
            $post     = input('post.');
            $username = $post['username'];
            $password = $post['password'];
	        if (mb_strlen($username) > 20 || mb_strlen($password) > 16) {
                return json([
                    'code' => 0,
                    'msg'  => '账号或密码错误',
                ]);
	        }
			$_map['username'] = $username;
            $_manager         = db('user')->where($_map)->find();
            if (!$_manager) {
                return json([
                    'code' => 0,
                    'msg'  => '该账号不存在',
                ]);
            }
            if ($_manager['status'] == 0) {
                return json([
                    'code' => 0,
                    'msg'  => '该账号已被禁用',
                ]);
            }
	        if (encryption($password, $_manager['salt']) === $_manager['password']) {
		        unset($_manager['password']);
		        unset($_manager['salt']);
		        unset($_manager['status']);
		        session('manager', $_manager);
		        session('logintime', time());
                cookie('manager', $_manager,3600*2);
		        action_log(0, true, '登录', 'admin/login/login');
                return json([
                    'code' => 200,
                    'msg'  => '登录成功',
                ]);
	        }
            return json([
                    'code' => 0,
                    'msg'  => '账号密码错误',
                ]);
	        exit();
	    }
        if (session('?manager')) {
            $this->redirect('admin/index/index');
        }
        $this->assign([
            'title' => '登录'
        ]);
    	return $this->fetch('login');
    }

    //退出登录
    public function logout($encry = '')
    {
        if(session('manager')){
            action_log(0, true, '退出登录', 'admin/login/logout');
        }
        session(null);
        $this->redirect('admin/login/login');
    }
}