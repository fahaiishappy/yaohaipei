<?php
namespace app\index\controller;
use think\db;

//首页
class Detail extends Common
{
    public function index()
    {
        $id = input('id', 0);
        $info = db('Article')
                ->alias('a')
                ->join('Classify b','a.pid = b.id')
                ->where(['a.id' => $id])
                ->field('a.*, b.name as classifyName')
                ->find();
        if(empty($info)){
            $this->error('参数错误');
        }
        // dump($info);
        $this->assign([
            'nav'   => 0,
            'info'   => $info
        ]);
        return $this->fetch();
    }
}