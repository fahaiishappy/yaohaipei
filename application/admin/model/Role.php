<?php
namespace app\admin\model;
use think\Model;

//角色模型
class Role extends Model 
{
    protected $table = 'admin_auth_group';
    // 添加/修改
    public function modify($result) 
    {
        if (isset($result['id'])) {
            unset($result['type']);
            $res  = $this->validate([
                'title' => 'require|max:100',
            ],[
                'title.require' => '权限名称必须填写',
                'title.max'     => '权限名称1至100个字符之间',
            ])->save($result,['id' => $result['id']]);
            if(false === $res){
                return $this->getError();
            }
            return $res;
        }
        $res  = $this->validate([
                'title' => 'require|max:100',
            ],[
                'title.require' => '权限名称必须填写',
                'title.max'     => '权限名称1至100个字符之间',
            ])->save($result);
        if(false === $res){
            return $this->getError();
        }
        $affected = $this->id;
        return $affected;
    }

    // 更新状态
    public function status($data) 
    {
        $data['status'] = $data['status'] == 1 ? 0 : 1;
        $affected = $this->save($data, $data['id']);
        return $affected;
    }

    // 删除角色
    public function del($id) 
    {
        $affected = $this->where(['id' => $id])->delete();
        return $affected;
    }

    // 分配权限
    public function updateRule($roledata) 
    {
        $post['id']    = $roledata['id'];
        $post['rules'] = !empty($roledata['rules']) ? $roledata['rules'] : '';
        $affected      = $this->save($post, ['id' => $post['id']]);
        if (false === $affected)
            return $this->getError();
        return $affected;
    }
}
