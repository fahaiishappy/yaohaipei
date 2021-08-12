<?php
namespace app\admin\controller;
use think\Request;

//主页管理
class Index extends Common
{
	//主面板
    public function index()
    {
        // dump(encryption('yao2533656', 4562));
        return $this->fetch();
    }

    //内容页
	public function console()
	{

        return $this->fetch();
    }

}