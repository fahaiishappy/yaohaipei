<?php
namespace app\index\controller;
use think\db;

//首页
class Category extends Common
{
    public function index()
    {
        $id = input('id', 0);
        $data   = input('get.');
        $classify =  db('classify')->where(['id' => $id])->find();
        $where = [];
        if(!empty($classify)){
            if($classify['pid'] == 0){
                $where['a.pid'] = $id;
            }else{
                $where = "find_in_set($id,a.lable)";
            }
        }else{
            $this->error('参数错误');
        }
        $page   = isset($data['page']) ? intval($data['page']) : 1;
        $size   = config('pagesize');
        $offset = ($page - 1) * $size;

        $articleCount = db('Article')
                ->alias('a')
                ->join('Classify b','a.pid = b.id')
                ->where($where)
                ->count();

        $articleList  = db('Article')
                ->alias('a')
                ->join('Classify b','a.pid = b.id')
                ->where($where)
                ->limit($offset . ',' . $size)
                ->order('a.id desc')
                ->field('a.id, a.title, a.lable, a.img, a.views, a.createtime, a.author, a.content, b.name as classifyName')
                ->select();
        $this->assign([
            'nav'           => $classify['pid'] == 0 ? $classify['id'] : $classify['pid'],
            'page'          => $page,
            'articleCount'  => $articleCount,
            'articleList'   => $articleList,
        ]);
        return $this->fetch();
    }
}