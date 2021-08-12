<?php
namespace app\common\controller;
use think\Controller;
use think\Config;
use think\Request;
use think\Response;

/**
 * 公用控制器父类
 */
class Base extends Controller
{
    protected $request;
    /**
     *  初始化权限校验
     */
    public function __construct()
    {
        parent::__construct();
        $this->request = Request::instance();
        $Action_Url    = getActionUrl();
        $user_admin    = Config::get('user_admin');
        define('UID', checkLogin());
        if (!UID) {
            if ($this->request->isAjax()) {
                $this->return_json();
            }
            if (\strpos($Action_Url, 'admin') !== \false) {
                // $this->error('请登陆后操作', url('admin/login/login'), 2);
                $this->redirect('admin/login/login', 302);
            }
            // $this->error('请登陆后操作', url('admin/login/login'), 2);
            $this->redirect('admin/login/login', 302);
        }
        // 权限检测
        $auth     = new \app\admin\libs\Auth();
        // 权限白名单
        $_authArr = [
            'admin/login/login',
            'admin/index/index',
            'admin/index/welcome',
            'admin/login/login',
            'admin/index/index',
            'admin/index/welcome',
            'admin/index/console',
        ];
        if (!$auth->check($Action_Url, UID, 0, 'url', 'or') && !in_array($Action_Url, $_authArr) && UID != $user_admin) {
            if ($this->request->isAjax()) {
                return json(['code' => -1,'msg' => '对不起,您没有操作权限']);
            }
            $this->error('对不起,您没有操作权限');
        }
        $_authList     = session('_authList');
        $_authCategory = session('_authCategory');
        $_authGroup    = session('_authGroup');
        $_managerinfo  = session('manager');
        $catposData    = getCatpos($_authList, $Action_Url);
        $_title        = $_catpos = $catposData['catpos'];
        $_active       = $catposData['active'];
        $assign        = [
            'userid'       => UID,
            'authList'     => $_authList,
            'authCategory' => $_authCategory,
            'authGroup'    => $_authGroup,
            'manager'      => $_managerinfo,
            'title'        => $_title,
            'catpos'       => $_catpos,
            'active'       => $_active,
        ];
        // 权限组、权限菜单、登录用户信息
        $this->assign($assign);
    }

    private function return_json() {
        echo json_encode(['code' => -2,'msg' => '请登陆后操作']);
        exit;
    }
}