<?php
namespace app\admin\controller;
use think\Request;

//系统配置管理
class Sysset extends Common 
{

    //系统配置列表
    public function index()
    {
        $_info = db('setting')->find(1);
        $this->assign([
            'info' => $_info,
        ]);
    	return $this->fetch();
    }

    //修改系统配置
    public function edit()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $data['updatetime'] = time();
            $result = db('setting')->where(['id'=>$data['id']])->update($data);
            if(!(is_numeric($result))){
                 return json([
                    'code' => 0,
                    'msg'  => $result,
                ]);
            }else{
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '修改成功',
                ]);
            }
        }
        exit();
    }
}