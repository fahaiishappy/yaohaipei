<?php
namespace app\admin\model;
use think\Model;

//文章模型
class Article extends Model 
{

    //添加/修改
    public function modify($result) 
    {
        if (isset($result['id'])) {
            $res = $this->validate([
                'sort'        => 'require|number',
                'title'    => 'require',
                'content'    => 'require',
            ],[
                'sort.require'        => '排序必须填写',
                'sort.number'         => '排序必须为数字',
                'title.require'    => '文章标题必须填写',
                'content.require'    => '文章内容必须填写',
            ])->save($result,['id' => $result['id']]);
            if(false === $res){
                return $this->getError();
            }
            return $res;
        }
        $res = $this->validate([
                'sort'        => 'require|number',
                'title'    => 'require',
                'content'    => 'require',
            ],[
                'sort.require'        => '排序必须填写',
                'sort.number'         => '排序必须为数字',
                'title.require'    => '文章标题必须填写',
                'content.require'    => '文章内容必须填写',
            ])->save($result);
        if(false === $res){
            return $this->getError();
        }
        $id = $this->id;
        return $id;
    }

    //更新文章状态
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

    //更新推荐
    public function recommend($data) 
    {
        $sort = $this->save($data, $data['id']);
        return $sort;
    }

    //删除文章
    public function del($id) 
    {
        $del = $this->destroy($id,false);
        return $del;
    }

}
