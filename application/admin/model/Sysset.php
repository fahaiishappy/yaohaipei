<?php
namespace app\admin\model;
use think\Model;

//系统配置模型
class Sysset extends Model 
{
    //添加/修改
    public function modify($result) 
    {
        if (isset($result['id'])) {
            $res = $this->validate([
                'name'        => 'require',
                'logo'        => 'require',
                'banner'      => 'require',
                'contact'     => 'require',
                'description' => 'require',
                'about'       => 'require',
            ],[
                'name.require'        => '名称必须填写',
                'logo.require'        => '小程序二维码必须填写',
                'banner.require'      => '背景图必须填写',
                'contact.require'     => '联系方式必须填写',
                'description.require' => '简介必须填写',
                'about.require'       => '关于我们必须填写',
            ])->save($result,['id' => $result['id']]);
            if(false === $res){
                return $this->getError();
            }
            return $res;
        }
        $res = $this->validate([
            'name' => 'require',
        ],[
            'name.require' => '名称必须填写',
        ])->save($result);
        if(false === $res){
            return $this->getError();
        }
        $affected = $this->id;
        return $affected;
    }

}
