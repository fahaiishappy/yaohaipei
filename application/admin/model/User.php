<?php
namespace app\admin\model;
use think\Model;

// 用户模型
class User extends Model 
{

    private $_table_asscess = 'auth_group_access'; // 授权表
    private $_gid           = ''; //权限数据
    protected $table = 'admin_user';
    protected $pk = 'id';
    protected $_auth        = null;

    protected static function init() {
        User::event('before_insert', function ($user) {
            $user->gid      = createGuid();
            $user->salt     = mt_rand(1000, 9999);
            $user->password = encryption($user->password, $user->salt);
        });
        User::event('before_update', function ($user) {
            if (isset($user->password) && $user->password == '!@douwen') {
                unset($user->salt);
                unset($user->password);
            } elseif (isset($user->password) && !empty($user->password)) {
                $user->salt     = mt_rand(1000, 9999);
                $user->password = encryption($user->password, $user->salt);
            } else {
                unset($user->salt);
                unset($user->password);
            }
        });
    }

    // 获取单条用户记录数据
    public function get_one($id) {
        $_data          = $this->find($id);
        $_map['uid']    = $id;
        $_data['group'] = db($this->_table_asscess)->where($_map)->column('group_id');
        return $_data;
    }

    // 查询该用户所拥有的角色
    private function auth_get($uid) {
        if (!$this->_auth) {
            $this->_auth = new \app\admin\libs\Auth();
        }
        return $this->_auth->getGroups($uid);
    }

    // 添加/修改用户
    public function modify($result) {
        if (isset($result['id'])) {
            $res = $this->validate([
                'username' => 'require|unique:user|max:20',
                'password' => 'require|/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/',
            ],[
                'username.require' => '账号用户名必须填写',
                'username.unique'  => '账号用户名已存在',
                'username.max'     => '账号用户名1至20个字符之间',
                'password.require' => '密码必须填写',
                'password'         => '密码必须由6-16个英文字母、数字、特殊符号组成！',
            ])->save($result,['id' => $result['id']]);
            if(false === $res){
                return $this->getError();
            }
            return $res;
        }
        $res = $this->validate([
                'username' => 'require|unique:user|max:20',
                'password' => 'require|/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/',
            ],[
                'username.require' => '账号用户名必须填写',
                'username.unique'  => '账号用户名已存在',
                'username.max'     => '账号用户名1至20个字符之间',
                'password.require' => '密码必须填写',
                'password'         => '密码必须由6-16个英文字母、数字、特殊符号组成！',
            ])->save($result);
        if(false === $res){
            return $this->getError();
        }
        $affected = $this->id;
        return $affected;
    }

    // 更新用户状态
    public function status($status) {
        $data['id']     = $status['id'];
        $data['status'] = $status['status'];
        $affected = $this->save($data, $data['id']);
        return $affected;
    }

    // 删除用户
    public function del($id) {
        $affected = $this->destroy($id,false);
        return $affected;
    }

    // 批量删除用户
    public function delAll($ids) {
        $affected = $this->destroy($ids,false);
        return $affected;
    }
    
    // 用户赋予角色
    public function updateGroup($result) {
        $this->_gid = isset($result['gid']) ? $result['gid'] : 0;
        $uid = $result['id'];
        $_map['uid'] = $uid;
        db($this->_table_asscess)->where($_map)->delete();
        if ($this->_gid)
            $_data = array_chunk($this->_gid, 1);
        else
            $_data = [];
        if (!empty($_data))
            array_walk($_data, function(&$v, &$k, $uid) {
                $v['uid'] = $uid;
                $v['group_id'] = $v[0];
                unset($v[0]);
            }, $uid);
        if(!empty($_data)){
            $res = db($this->_table_asscess)->insertAll($_data);
        }else{
            $res = 1;
        }
        //刷新权限
        if (!$this->_auth) {
            $this->_auth = new \app\admin\libs\Auth();
        }
        $this->_auth->getAuthList($uid, 0);
        return $res;
    }

}
