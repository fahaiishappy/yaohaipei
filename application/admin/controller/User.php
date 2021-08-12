<?php
namespace app\admin\controller;
use think\Request;
use think\db;

// 用户管理
class User extends Common 
{

    // 用户列表
    public function index()
    {
        $header = $this->request->header();
        if (isset($header['ajax'])) {
            $_map = [
                'type' => ['in', [0, 3, 4, 5]]
            ];
            if(UID != config('user_admin')){
                $_map['id'] = ['neq', 1];
            }
            $searchinfo = Request::instance()->param();
            if(isset($searchinfo['search_username']) && $searchinfo['search_username'] !== ''){
                $_map['username'] = ["like", "%".trim($searchinfo['search_username'])."%"];
                $this->assign('search_username', $searchinfo['search_username']);
            }
            if(isset($searchinfo['search_truename']) && $searchinfo['search_truename'] !== ''){
                $_map['truename'] = ["like", "%".trim($searchinfo['search_truename'])."%"];
                $this->assign('search_truename', $searchinfo['search_truename']);
            }
            if(isset($searchinfo['search_status']) && $searchinfo['search_status'] !== ''){
                $_map['status'] = ["=", intval($searchinfo['search_status'])];
                $this->assign('search_status', $searchinfo['search_status']);
            }
            $_page   = isset($searchinfo['page']) ? intval($searchinfo['page']) : 1;
            $_size   = isset($searchinfo['limit']) ? intval($searchinfo['limit']) : config('pagesize');
            $_offset = ($_page - 1) * $_size;
            $_count  = model('User')->where($_map)->count();
            $_list = model('User')->limit($_offset . ',' . $_size)->where($_map)->select();
            return json([
                'code'  => 0,
                'count' => $_count,
                'data'  => $_list,
                'msg'   => ''
            ]);
        }
        return $this->fetch();
    }

    // 添加用户
    public function add()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $data['createtime'] = time();
            $result = model('User')->modify($data);
            if(!(is_numeric($result))){
                return json([
                    'code' => 0,
                    'msg' => $result,
                ]);
            }else{
                action_log($result);
                return json([
                    'code' => 200,
                    'msg'  => '添加成功',
                    'data' => $result,
                ]);
            }
        }
    	echo $this->fetch();
    }

    // 修改用户
    public function edit()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $data['updatetime'] = time();
            $result = model('User')->modify($data);
            if(!(is_numeric($result))){
                return json([
                    'code' => 0,
                    'msg' => $result,
                ]);
            }else{
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '修改成功',
                    'data' => $data['id'],
                ]);
            }
        }
        $id = input('id', 0);
        if(empty($id)){
            $this->error('数据不存在或已删除');
        }
        $_info = model('User')->get_one($id);
        $this->assign('info', $_info);
        echo $this->fetch();
    }
    
    // 删除用户
    public function del()
    {
        if($this->request->isPost()){
            $id = input('id', 0);
            $result = model('User')->del($id);
            if(!(is_numeric($result))){
                $msg['msg']  = $result;
                return json([
                    'code' => 0,
                    'msg'  => '删除用户失败'
                ]);
            }else{
                action_log($id);
                return json([
                    'code' => 200,
                    'msg'  => '删除用户成功',
                ]);
            }
        }
    }

    // 批量删除用户
    public function delAll()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $ids = implode(',',$data['id']);
            $result = model('User')->delAll($ids);
            if(!(is_numeric($result))){
                $msg['msg']  = $result;
                return json([
                    'code' => 0,
                    'msg'  => '删除用户失败'
                ]);
            }else{
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '删除用户成功',
                ]);
            }
        }
    }
    

    // 用户分配角色
    public function auth()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $result = model('User')->updateGroup($data);
            if(!(is_numeric($result))){
                return json([
                    'code' => 0,
                    'msg' => $result,
                ]);
            }else{
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '修改成功',
                    'data' => $data['id'],
                ]);
            }
        }
        $id = input('id', 0);
        if(empty($id)){
            $this->error('数据不存在或已删除');
        }
        $_info = model('Role')->select();
        $_auth = model('User')->get_one($id);
        $this->assign([
            'id'   => $id,
            'info' => $_info,
            'auth' => $_auth,
        ]);
        echo $this->fetch();
    }


    // 更新个人资料
    public function profile()
    {
        if($this->request->isPost()){
            $msg = [
                'code' => 0,
                'msg'  => '修改失败',
            ];
            $data   = input('post.');
            $result = model('User')->modify($data);
            if(!(is_numeric($result))){
                $msg['msg']  = $result;
                return json($msg);
            }else{
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '修改成功',
                    'data' => $data['id'],
                ]);
            }
            return json($msg);
        }
        $id = input('id', 0);
        if(empty($id)){
            $this->error('数据不存在或已删除');
        }
        $_info = model('User')->get_one($id);
        $this->assign('info', $_info);
        echo $this->fetch();
    }

    // 更新人员状态
    public function change_status()
    {
        if($this->request->isPost()){
            $data       = input('post.');
            if($data['status'] == 0){
                $data['status'] = 1;
            }else{
                $data['status'] = 0;
            }
            $result  = model('user')->status($data);
            if(!(is_numeric($result))){
                return json([
                    'code' => 200,
                    'msg' => $result,
                ]);
            }else{
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '修改状态成功',
                    'data' => $result,
                ]);
            }
        }
        exit();
    }
}