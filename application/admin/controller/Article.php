<?php
namespace app\admin\controller;
use think\Request;
use think\Db;

// 文章管理
class Article extends Common
{
    //文章列表
    public function index()
    {
        $header = $this->request->header();
        if (isset($header['ajax'])) {
            $where = [];
            $searchinfo = Request::instance()->param();
            if (isset($searchinfo['search_title']) && $searchinfo['search_title'] !== '') {
                $where['a.title'] = ["like", "%" . trim($searchinfo['search_title']) . "%"];
                $this->assign('search_title', $searchinfo['search_title']);
            }
            if (isset($searchinfo['search_status']) && $searchinfo['search_status'] !== '') {
                $where['a.status'] = ["=", intval($searchinfo['search_status'])];
                $this->assign('search_status', $searchinfo['search_status']);
            }
            if (isset($searchinfo['search_pid']) && $searchinfo['search_pid'] !== '') {
                $where['a.pid'] = ["=", intval($searchinfo['search_pid'])];
                $this->assign('search_pid', $searchinfo['search_pid']);
            }

            $_page   = isset($searchinfo['page']) ? intval($searchinfo['page']) : 1;
            $_size   = isset($searchinfo['limit']) ? intval($searchinfo['limit']) : config('pagesize');
            $_offset = ($_page - 1) * $_size;

            $_count  = model('Article')
                       ->alias('a')
                       ->join('Classify b','a.pid = b.id')
                       ->where($where)
                       ->count();

            $_list   = model('Article')
                       ->alias('a')
                       ->join('Classify b','a.pid = b.id')
                       ->where($where)
                       ->limit($_offset . ',' . $_size)
                       ->order('a.id desc')
                       ->field('a.*, b.name')
                       ->select();

            return json([
                'code'  => 0,
                'count' => $_count,
                'data'  => $_list,
                'msg'   => ''
            ]);
        }
        $cate = model('Classify')->order('id asc')->select();
        $arr = $this->tree($cate);
        $this->assign([
            'cate'    => $arr,
        ]);
        return $this->fetch();
    }
    
    //添加文章
    public function add()
    {
        $cate = model('Classify')->order('id asc')->select();
        $arr = $this->tree($cate);
        $lable = model('Classify')->where('pid = '.$cate[0]['id'])->order('id asc')->select();
        $this->assign([
            'cate'    => $arr,
            'lable'    => $lable
        ]);

        if ($this->request->isPost()) {
            $data     = input('post.');
            if(!empty($data['lable'])){
                $data['lable'] = implode(',',$data['lable']);
            }
            $data['createtime'] = time();
            $result = model('Article')->modify($data);
            if (!(is_numeric($result))) {
                // 删除文章图片
                if(!empty($data['img'])){
                    deletePicture($data['img']);
                }
                // 删除文章附件
                if(!empty($data['file'])){
                    deletePicture($data['file']);
                }
                return json([
                    'code' => 0,
                    'msg'  => '添加失败',
                    'data'  => $result,
                ]);
            } else {
                $college_id = model('Article')->getLastInsID();
                action_log($college_id);
                return json([
                    'code' => 200,
                    'msg'  => '添加成功',
                    'data'  => $result,
                ]);
            }
        }
        echo $this->fetch();
    }
    
    //修改文章
    public function edit()
    {
        $id = input('id', 0);
        $cate = model('Classify')->order('id asc')->select();
        $arr = $this->tree($cate);
        $articleinfo = model('Article')->where(['id' => $id])->find();
        if(empty($articleinfo)){
            $this->error('数据不存在或已删除');
        }
        $articleinfo['lable'] = explode(',',$articleinfo['lable']);
        $lable = model('Classify')->where('pid = '.$cate[0]['id'])->order('id asc')->select();
        $this->assign([
            'cate'    => $arr,
            'info'    => $articleinfo,
            'lable'    => $lable
        ]);

        if ($this->request->isPost()) {
            $data     = input('post.');
            if(!empty($data['lable'])){
                $data['lable'] = implode(',',$data['lable']);
            }
            // dump($data);
            // exit;
            $data['updatetime'] = time();
            $result = model('Article')->modify($data);
            $newimg = explode('/',$data['img']);
            $oldimg = explode('/',$articleinfo['img']);
            $newfile = explode('/',$data['file']);
            $oldfile = explode('/',$articleinfo['file']);
            if (!(is_numeric($result))) {
                // 删除文章封面
                if(!empty($data['img']) && !empty($articleinfo['img'])){
                    if($newimg[3] != $oldimg[3]){
                        deletePicture($data['img']);
                    }
                }
                // 删除文章文件
                if(!empty($data['file']) && !empty($articleinfo['file'])){
                    if($newfile[3] != $oldfile[3]){
                        deletePicture($data['file']);
                    }
                }
                return json([
                    'code' => 0,
                    'msg'  => '修改失败',
                    'data'  => $result,
                ]);
            } else {
                // 删除文章封面
                if(!empty($data['img']) && !empty($articleinfo['img'])){
                    if($newimg[3] != $oldimg[3]){
                        deletePicture($articleinfo['img']);
                    }
                }
                // 删除文章文件
                if(!empty($data['file']) && !empty($articleinfo['file'])){
                    if($newfile[3] != $oldfile[3]){
                        deletePicture($articleinfo['file']);
                    }
                }
                action_log($id);
                return json([
                    'code' => 200,
                    'msg'  => '修改成功',
                    'data'  => $result,
                ]);
            }
        }
        echo $this->fetch();
    }

    // 修改排序
    public function sort()
    {
        if ($this->request->isPost()) {
            $data   = input('post.');
            $result     = model('Article')->sort($data);
            if (!(is_numeric($result))) {
                $msg['msg']  = $result;
                return json([
                    'code' => 0,
                    'msg'  => '修改失败',
                ]);
            } else {
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '修改成功',
                ]);
            }
        }
    }

    // 更新文章状态
    public function status()
    {
        if($this->request->isPost()){
            $data       = input('post.');
            if($data['status'] == 0){
                $data['status'] = 1;
            }else{
                $data['status'] = 0;
            }
            $result  = model('Article')->status($data);
            if(!(is_numeric($result))){
                return json([
                    'code' => 200,
                    'msg'  => '修改状态失败',
                    'data' => $result,
                ]);
            }else{
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '修改状态成功',
                    'data' => $result,
                ]);
            }
        }
        exit();
    }

    // 更新文章推荐
    public function recommend()
    {
        if($this->request->isPost()){
            $data       = input('post.');
            if($data['recommend'] == 0){
                $data['recommend'] = 1;
            }else{
                $data['recommend'] = 0;
            }
            $result  = model('Article')->recommend($data);
            if(!(is_numeric($result))){
                return json([
                    'code' => 200,
                    'msg'  => '修改状态失败',
                    'data' => $result,
                ]);
            }else{
                action_log($data['id']);
                return json([
                    'code' => 200,
                    'msg'  => '修改状态成功',
                    'data' => $result,
                ]);
            }
        }
        exit();
    }
    
    //删除文章
    public function del()
    {
        if ($this->request->isPost()) {
            $id = input('id', 0);
            $info = model('Article')->find($id);
            // 删除文章内容中图片
            $src = getSrc($info['content']);
            if(!empty($src)){
                foreach ($src as $key => $value) {
                    deletePicture($value);
                }
            }
            // 删除文章图片
            if(!empty($info['img'])){
                deletePicture($info['img']);
            }
            // 删除文章附件
            if(!empty($info['file'])){
                deletePicture($info['file']);
            }
            // 删除图片/附件表记录
            $result = model('Picture')->where([
                'pid' => $id,
            ])->whereOr([
                'file'=>'articleimg',
                'file'=>'articlefile',
            ])->delete();
            Db::startTrans();
            try{
                $result = model('Article')->del($id);
                if(!\is_numeric($result)) {
                    throw new Exception($result, 1);
                }
                // 提交事务
                Db::commit();
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
                $msg['msg'] = $e->getMessage();
                return json([
                    'code' => 0,
                    'msg'  => '删除失败'
                ]);
            }
            action_log($id);
            return json([
                'code' => 200,
                'msg'  => '删除成功',
                'data' => $id,
            ]);
        }
        exit();
    }
    
    //处理分类
    public function tree($list)
    {
        $arr = tree($list);
        array_walk($arr, function(&$v, &$k, $parentid) {
            if ($v['level'] == 1) {
                $v['pre'] = '&nbsp;&nbsp; ├─ &nbsp;&nbsp;';
            } elseif ($v['level'] > 1) {
                $v['pre'] = str_repeat('&nbsp;&nbsp; │ &nbsp;&nbsp;', $v['level'] - 1) . '&nbsp;&nbsp; ├─ &nbsp;&nbsp;';
            } else {
                $v['pre'] = '';
            }
        }, 0);

        return $arr;
    }
}
