<?php
namespace app\admin\controller;
use think\Request;

// banner管理
class Banner extends Common 
{ 

    //banner列表
    public function index()
    {
        $header = $this->request->header();
        if (isset($header['ajax'])) {
            $where = [];
            $searchinfo = Request::instance()->param();
            if(isset($searchinfo['search_title']) && $searchinfo['search_title'] !== ''){
                $where['title'] = ["like", "%".trim($searchinfo['search_title'])."%"];
                $this->assign('search_title', $searchinfo['search_title']);
            }
            if(isset($searchinfo['search_status']) && $searchinfo['search_status'] !== ''){
                $where['status'] = ["=", intval($searchinfo['search_status'])];
                $this->assign('search_status', $searchinfo['search_status']);
            }
            $_page   = isset($searchinfo['page']) ? intval($searchinfo['page']) : 1;
            $_size   = isset($searchinfo['limit']) ? intval($searchinfo['limit']) : config('pagesize');
            $_offset = ($_page - 1) * $_size;

            $_count  = model('Banner')->where($where)->count();

            $_list   = model('Banner')
                       ->where($where)
                       ->limit($_offset . ',' . $_size)
                       ->order('sort desc,id desc')
                       ->select();

            return json([
                'code'  => 0,
                'count' => $_count,
                'data'  => $_list,
                'msg'   => ''
            ]);
        }
        return $this->fetch();
    }

    //添加banner
    public function add()
    {
        if($this->request->isPost()){
            $data   = input('post.');
            $data['createtime'] = time();
            $result = model('Banner')->modify($data);
            if(!(is_numeric($result))){
                // 删除banner图片
                deletePicture($data['img']);
                return json([
                    'code' => 0,
                    'msg'  => '添加失败',
                    'data' => $result,
                ]);
            }else{
                action_log($result);
                return json([
                    'code' => 200,
                    'msg'  => '添加成功',
                    'data' => $result,
                ]);
            }
        }
        echo $this->fetch();
    }

    //修改banner
    public function edit()
    {
        $id = input('id', 0);
        if(empty($id)){
            $this->error('数据不存在或已删除');
        }
        $_info = model('Banner')->find($id);
        $this->assign(['info' => $_info]);

        if($this->request->isPost()){
            $data   = input('post.');
            $data['updatetime'] = time();
            $newimg = explode('/',$data['img']);
            $oldimg = explode('/',$_info['img']);
            $result = model('Banner')->modify($data);
            if(!(is_numeric($result))){
                // 删除banner图片
                if($newimg[3] != $oldimg[3]){
                    deletePicture($data['img']);
                }
                return json([
                    'code' => 0,
                    'msg'  => '修改失败',
                    'data' => $result,
                ]);
            }else{
                if($newimg[3] != $oldimg[3]){
                    deletePicture($_info['img']);
                }
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '修改成功',
                    'data' => $result,
                ]);
            }
        }
        
        echo $this->fetch();
    }

    //更新banner状态
    public function change_status()
    {
        if($this->request->isPost()){
            $data       = input('post.');
            $result     = model('Banner')->status($data);
            if(!(is_numeric($result))){
                return json([
                    'code' => 0,
                    'msg'  => '修改失败',
                    'data' => $result,
                ]);
            }else{
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '修改成功',
                    'data' => $result,
                ]);
            }
        }
        exit();
    }

    //删除banner
    public function del()
    {
        if($this->request->isPost()){
            $data = input('post.');
            // 删除banner图片
            deletePicture($data['img']);

            $result = model('Banner')->del($data['id']);
            if(!(is_numeric($result))){
                return json([
                    'code' => 0,
                    'msg'  => '删除失败',
                    'data' => $result,
                ]);
            }else{
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '删除成功',
                    'data' => $result,
                ]);
            }
        }
        exit();
    }

}