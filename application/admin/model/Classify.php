<?php
namespace app\admin\model;
use think\Model;

//分类模型
class Classify extends Model 
{

    //添加/修改
    public function modify($result) 
    {
        if (isset($result['id'])) {
            $res = $this->validate([
                'sort'        => 'require|number',
                'name'    => 'require',
            ],[
                'sort.require'        => '排序必须填写',
                'sort.number'         => '排序必须为数字',
                'name.require'         => '分类名称必须填写',
            ])->save($result,['id' => $result['id']]);
            if(false === $res){
                return $this->getError();
            }
            return $res;
        }
        $res = $this->validate([
                'sort'        => 'require|number',
                'name'    => 'require',
            ],[
                'sort.require'        => '排序必须填写',
                'sort.number'         => '排序必须为数字',
                'name.require'         => '分类名称必须填写',
            ])->save($result);
        if(false === $res){
            return $this->getError();
        }
        $id = $this->id;
        return $id;
    }

    //更新分类状态
    public function status($data) 
    {
        $status = $this->save($data, $data['id']);
        return $status;
    }

    //更新排序
    public function sort($data) 
    {
        $sort = $this->save($data, $data['id']);
        return $sort;
    }

    //删除分类
    public function del($id) 
    {
        $del = $this->destroy($id,false);
        return $del;
    }

}
