<?php
namespace app\admin\model;
use think\Model;

//菜单模型
class Menu extends Model 
{
    protected $table = 'admin_auth_rule';
    //列表数据获取
    public function get_all($_map = array()) 
    {
        return $this->where($_map)
                    ->order('sort ASC')
                    ->column('id,name,title,type,status,condition,pid,sort,isbtn,icon');
    }

    //添加/修改
    public function modify($result) 
    {
        if (isset($result['id'])) {
            unset($result['type']);
            $res  = $this->validate([
                'name'  => 'require|max:80|unique:auth_rule',
                'title' => 'require|max:20',
                'sort'  => 'number',
            ],[
                'name.require'  => '菜单地址必须填写',
                'name.max'      => '菜单地址1至80个字符之间',
                'name.unique'   => '菜单地址已存在',
                'title.require' => '菜单名称必须填写',
                'title.max'     => '菜单名称1至20个字符之间',
                'sort'          => '排序值必需为数字',
            ])->save($result,['id' => $result['id']]);
            if(false === $res){
                return $this->getError();
            }
            return $res;
        }
        $res  = $this->validate([
            'name'  => 'require|max:80|unique:auth_rule',
            'title' => 'require|max:20',
            'sort'  => 'number',
        ],[
            'name.require'  => '菜单地址必须填写',
            'name.max'      => '菜单地址1至80个字符之间',
            'name.unique'   => '菜单地址已存在',
            'title.require' => '菜单名称必须填写',
            'title.max'     => '菜单名称1至20个字符之间',
            'sort'          => '排序值必需为数字',
        ])->save($result);
        if(false === $res){
            return $this->getError();
        }
        $affected       = $this->id;
        $result['sort'] = !empty($result['sort']) ? $result['sort'] : $affected;
        $result['type'] = !empty($result['type']) ? $result['type'] : $affected;
        $result['id']   = $affected;
        $res            = $this->save($result);
        return $affected;
    }

    //获取分级
    public function subGet($_map, $pid = 0) 
    {
        $_arr = $this->get_all($_map);
        $_arr = tree($_arr);
        array_walk($_arr, function(&$v, &$k, $parentid) {
            if ($v['level'] == 1) {
                $v['pre']     = '&nbsp;&nbsp;├─ &nbsp;';
            } elseif ($v['level'] > 1) {
                $v['pre']     = str_repeat('&nbsp;&nbsp;│&nbsp;&nbsp;', $v['level'] - 1) . '&nbsp;├─ &nbsp;';
            } else {
                $v['pre']     = '';
            }
            if ($v['isbtn'] == 1) {
                $v['title']   = '<button type="button" class="btn btn-info btn-sm">' . $v['title'] . '</button>';
            }
        }, $pid);
        return $_arr;
    }

    //更新排序
    public function sort($data) 
    {
        $affected = $this->save($data, $data['id']);
        return $affected;
    }

    //更新状态
    public function status($status) 
    {
        $data['id']     = $status['id'];
        $data['status'] = $status['attr'];
        $affected = $this->save($data, $data['id']);
        return $affected;
    }

    //删除菜单
    public function del($id) 
    {
        $affected = $this->destroy($id,false);
        return $affected;
    }
}
