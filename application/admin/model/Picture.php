<?php
namespace app\admin\model;
use think\Model;

//附件模型
class Picture extends Model 
{
    //添加/修改
    public function modify($result) 
    {
        if (isset($result['id'])) {

            $res = $this->save($result,['id' => $result['id']]);
            if(false === $res){
                return $this->getError();
            }
            return $res;
        }
        $res = $this->insert($result);
        if($res === false){
            return $this->getError();
        }
        return $res;
    }

    //删除记录
    public function del($id) 
    {
        $del = $this->destroy($id,false);
        return $del;
    }

}
