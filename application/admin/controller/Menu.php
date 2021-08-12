<?php
namespace app\admin\controller;
use think\Request;
use think\Db;

//菜单管理
class Menu extends Common 
{

    //菜单列表
    public function index()
    {
        $header = $this->request->header();
        if (isset($header['ajax'])) {
            $_map['type'] = array('egt',1);
            $_count  = db('Classify')->count();
            $_list   = model('Menu')->subGet($_map);
            foreach ($_list as &$value) {
                $value['title'] = str_replace('"', "'", $value['title']);
            }
            return json([
                'code'  => 0,
                'count' => $_count,
                'data'  => $_list,
                'msg'   => ''
            ]);
        }
    	return $this->fetch();
    }

    //添加菜单
    public function add()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $result = model('Menu')->modify($data);
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
        $parentid     = input('pid', 0);
        $_map['type'] = input('type', 1);
        $_authList    = model('Menu')->subGet($_map, $parentid);
        $this->assign([
            'authList' => $_authList,
            'pid'      => $parentid,
            'type'     => $_map['type'],
        ]);
    	echo $this->fetch();
    }

    //修改菜单
    public function edit()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $result = model('Menu')->modify($data);
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
        $_info        = model('Menu')->find($id);
        $_map['type'] = input('type', 1);
        $_authList    = model('Menu')->subGet($_map);
        $this->assign([
            'info'     => $_info,
            'authList' => $_authList,
            'type'     => $_map['type'],
        ]);
        echo $this->fetch();
    }

    //更新菜单状态
    public function change_status()
    {
        if($this->request->isPost()){
            $msg = [
                'code' => 0,
                'msg'  => '修改失败',
            ];
            $data       = input('post.');
            $data['id'] = input('id', 0);
            $result     = model('Menu')->status($data);
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
        exit();
    }

    //更新菜单排序
    public function csort()
    {
        if($this->request->isPost()){
            $msg = [
                'code' => 0,
                'msg'  => '修改失败',
            ];
            $data       = input('post.');
            $result     = model('Menu')->sort($data);
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
        exit();
    }

    // 删除菜单
    public function del()
    {
        if($this->request->isPost()){
            $id = input('id', 0);
            Db::startTrans();
            try{
                $group = db('auth_group')->select();
                foreach ($group as $key => $value) {
                    $rules = explode(',',$value['rules']);
                    foreach ($rules as $k => $v) {
                        if($v == $id){
                            unset($rules[$k]);
                        }
                    }
                    $data['rules'] = implode(',',$rules);
                    $res = db('auth_group')->where(['id' => $value['id']])->update($data);
                    if(!\is_numeric($res)) {
                        throw new Exception($res, 1);
                    }
                }
                //删除菜单
                $result = model('Menu')->del($id);
                if(!\is_numeric($result)) {
                    throw new Exception($result, 1);
                }
                // 提交事务
                Db::commit();
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
                $msg['msg'] = $e->getMessage();
                return json([
                    'code' => 0,
                    'msg'  => '删除菜单失败'
                ]);
            }
            action_log($id);
            return json([
                'code' => 200,
                'msg'  => '删除菜单成功',
            ]);
        }
    }
}