<?php
namespace app\admin\controller;

// 角色管理
class Role extends Common 
{

    // 角色列表
    public function index()
    {
        $header = $this->request->header();
        if (isset($header['ajax'])) {
            $_list = model('Role')->select();
            return json([
                'code'  => 0,
                'count' => 0,
                'data'  => $_list,
                'msg'   => ''
            ]);
        }
        return $this->fetch();
    }

    // 添加角色
    public function add()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $result = model('Role')->modify($data);
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

    // 修改角色
    public function edit()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $result = model('Role')->modify($data);
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
        $_info = model('Role')->find($id);
        $this->assign([
            'info' => $_info,
        ]);
        echo $this->fetch();
    }

    // 角色授权
    public function auth()
    {
        if($this->request->isPost()){
            $data['id'] = input('id', 0);
            $post = input('post.');

            $type = isset($post["eleTree-node"]) ? $post["eleTree-node"] : array();
            $data['rules'] = implode(',',$type);

            if(empty($data['id'])){
                return json([
                    'code' => 0,
                    'msg' => '数据不存在或已删除',
                ]);
            }
            
            $result = model('Role')->updateRule($data);
            
            if(!(is_numeric($result))){
                return json([
                    'code' => 0,
                    'msg' => $result,
                ]);
            }else{
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '权限设置成功',
                    'data' => $data['id'],
                ]);
            }
        }
        $id = input('id', 0);
        if(empty($id)){
            $this->error('数据不存在或已删除');
        }
        $roleingo = model('Role')->find($id);
        $_map['type'] = ['egt',1];
        $_data = model('Menu')->subGet($_map);
        $authlist = [];

        foreach ($_data as $key => $value) {
            $authlist[$key]['id']   = $value['id'];
            $authlist[$key]['pid']  = $value['pid'];
            $authlist[$key]['label'] = strip_tags($value['title']);
            $authlist[$key]['field'] = '';
            $authlist[$key]['spread'] = true;
            if(in_array($value['id'], explode(',', $roleingo['rules']))){
                $authlist[$key]['checked'] = true;
            }
        }
        
        $authtree = $this->tree($authlist);
        $this->assign('authtree', json_encode($authtree));
        echo $this->fetch();
    }

    // 权限列表
    public function tree($cate,$pid=0)
    {
        $arr = array();
        foreach ($cate as $key => $v) {
            if ($v['pid'] == $pid) {
                $v['children'] =  $this->tree($cate,$v['id']);
                $arr[] = $v;
            }
        }
        return $arr;
    }

    // 删除角色
    public function del()
    {
        if($this->request->isPost()){
            $id = input('id', 0);
            //解除所有关联此角色的用户
            $result = db('auth_group_access')->where('group_id = '.$id)->delete();

            $result = model('Role')->del($id);
            if(!(is_numeric($result))){
                $msg['msg']  = $result;
                return json([
                    'code' => 0,
                    'msg'  => '删除角色失败'
                ]);
            }else{
                action_log($id);
                return json([
                    'code' => 200,
                    'msg'  => '删除角色成功',
                ]);
            }
        }
    }

    // 更新角色状态
    public function change_status()
    {
        if($this->request->isPost()){
            $msg = [
                'code' => 0,
                'msg'  => '修改失败',
            ];
            $data       = input('post.');
            $result     = model('Role')->status($data);
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
        exit();
    }
}