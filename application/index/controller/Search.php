<?php
namespace app\index\controller;
use think\db;

//首页
class Search extends Common
{
    public function index()
    {
        $data   = input('get.');
        $where['a.title'] = ["like", "%" . trim($data['search']) . "%"];
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
            'nav'           => 0,
            'page'          => $page,
            'searchName'    => trim($data['search']),
            'articleCount'  => $articleCount,
            'articleList'   => $articleList,
        ]);
        return $this->fetch();
    }
}