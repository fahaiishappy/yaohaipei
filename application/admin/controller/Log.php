<?php
namespace app\admin\controller;
use Exception;
use think\Request;
use think\Db;

//日志管理
class Log extends Common 
{

    //操作日志列表
    public function index()
    {
        $header = $this->request->header();
        if (isset($header['ajax'])) {
            $searchinfo = Request::instance()->param();
        	$_page   = isset($searchinfo['page']) ? intval($searchinfo['page']) : 1;
            $_size   = isset($searchinfo['limit']) ? intval($searchinfo['limit']) : config('pagesize');
            $_offset = ($_page - 1) * $_size;
            $_count  = db('log')->count();
            $_list   = db('log')->limit($_offset . ',' . $_size)->order('id desc')->select();
            return json([
                'code'  => 0,
                'count' => $_count,
                'data'  => $_list,
                'msg'   => ''
            ]);
        }
        return $this->fetch();
    }
}