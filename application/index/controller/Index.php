<?php
namespace app\index\controller;
use think\db;

//首页
class Index extends Common
{
    public function index()
    {
        $data   = input('get.');

        $page   = isset($data['page']) ? intval($data['page']) : 1;
        $size   = config('pagesize');
        $offset = ($page - 1) * $size;

        $articleCount = db('Article')
                ->alias('a')
                ->join('Classify b','a.pid = b.id')
                ->count();

        $articleList  = db('Article')
                ->alias('a')
                ->join('Classify b','a.pid = b.id')
                ->limit($offset . ',' . $size)
                ->order('a.id desc')
                ->field('a.id, a.title, a.lable, a.img, a.views, a.createtime, a.author, a.content, b.name as classifyName')
                ->select();
        $banner   = db('Banner')->where("page = 'index'")->order('sort asc,id desc')->select();
        $this->assign([
            'banner'        => $banner,
            'nav'           => 0,
            'page'          => $page,
            'articleCount'  => $articleCount,
            'articleList'   => $articleList,
        ]);
        return $this->fetch();
    }
}