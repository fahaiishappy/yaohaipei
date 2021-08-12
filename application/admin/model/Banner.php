<?php
namespace app\admin\model;
use think\Model;

//banner模型
class Banner extends Model 
{
    //添加/修改
    public function modify($result)
    {
        if (isset($result['id'])) {
            $res = $this->validate([
                'sort'        => 'require|number',
                'img'    => 'require',
                'page'    => 'require',
            ],[
                'sort.require'        => '排序必须填写',
                'sort.number'         => '排序必须为数字',
                'img.require'    => '图片必须上传',
                'page.require'    => '所属页面必须填写',
            ])->save($result,['id' => $result['id']]);
            if(false === $res){
                return $this->getError();
            }
            return $res;
        }
        $res = $this->validate([
                'sort'        => 'require|number',
                'img'    => 'require',
                'page'    => 'require',
            ],[
                'sort.require'        => '排序必须填写',
                'sort.number'         => '排序必须为数字',
                'img.require'    => '图片必须上传',
                'page.require'    => '所属页面必须填写',
            ])->save($result);
        if($res === false){
            return $this->getError();
        }
        $id = $this->id;
        return $id;
    }

    //更新banner状态
    public function status($data) 
    {
        $status = $this->save($data, $data['id']);
        return $status;
    }

    //删除banner
    public function del($id) 
    {
        $del = $this->destroy($id,false);
        return $del;
    }

}
