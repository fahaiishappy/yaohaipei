<?php
namespace app\admin\controller;
use app\common\controller\Base;

//公用控制器
class Common extends Base
{
	protected $manager;
	//公用构造函数
	public function __construct() {
		parent::__construct();
		$this->manager = session('manager');
	}
}
