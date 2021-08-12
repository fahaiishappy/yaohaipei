<?php
namespace app\admin\controller;
use think\Request;
use think\Db;

//分类管理
class Classify extends Common
{
	//分类列表
	public function index()
	{
	    $header = $this->request->header();
	    if (isset($header['ajax'])) {
	        $where = [];
	        $searchinfo = Request::instance()->param();
	        if (isset($searchinfo['search_name']) && $searchinfo['search_name'] !== '') {
	            $where['a.name'] = ["like", "%" . trim($searchinfo['search_name']) . "%"];
	            $this->assign('search_name', $searchinfo['search_name']);
	        }
            if (isset($searchinfo['search_status']) && $searchinfo['search_status'] !== '') {
                $where['a.status'] = $searchinfo['search_status'];
                $this->assign('search_status', $searchinfo['search_status']);
            }
	        $count  = model('Classify')
                        ->alias('a')
                        ->join('Classify b','a.pid = b.id', 'LEFT')
                        ->where($where)
                        ->count();

	        $list   = model('Classify')
                        ->alias('a')
                        ->join('Classify b','a.pid = b.id', 'LEFT')
	                    ->where($where)
	                    ->order('a.sort asc, a.id desc')
                        ->field('a.*, b.name as pname')
	                    ->select();

            if (!(isset($searchinfo['search_name']) && $searchinfo['search_name'] !== '')) {
                $arr = $this->tree($list);
            }else{
                $arr = $list;
            }        
            
	        return json([
	            'code'  => 0,
	            'count' => $count,
	            'data'  => $arr,
	            'msg'   => ''
	        ]);
	    }
	    return $this->fetch();
	}
	
	//添加分类
	public function add()
	{
        $id     = input('id', 0);
        $label  = input('label', 0);
	    if ($this->request->isPost()) {
	        $data     = input('post.');
            $data['createtime'] = time();
	        $result = model('Classify')->modify($data);
	        if (!(is_numeric($result))) {
	            return json([
                    'code' => 0,
                    'msg'  => '添加失败',
                    'data' => $result,
                ]);
	        } else {
	            $id = db('Classify')->getLastInsID();
	            action_log($id);
	            return json([
	                'code' => 200,
	                'msg'  => '添加成功',
                    'data' => $result,
	            ]);
	        }
	    }
        
	    $cate = model('Classify')->order('sort asc, id desc')->select();
	    $arr = $this->tree($cate);
	    $this->assign([
            'id' => $id,
            'label' => $label,
	        'cate' => $arr,
	    ]);
	    echo $this->fetch();
	}
	
	//修改分类
	public function edit()
	{
	    $id = input('id', 0);
        $label  = input('label', 0);
        // dump($label);
        // exit;
	    if ($this->request->isPost()) {
	        $data   = input('post.');
            $data['updatetime'] = time();
	        $result = model('Classify')->modify($data);
	        if (!(is_numeric($result))) {
	            return json([
                    'code' => 0,
                    'msg'  => '修改失败',
                    'data'  => $result,
                ]);
	        } else {
	            action_log($data['id']);
	            return json([
	                'code' => 200,
	                'msg'  => '修改成功',
                    'data'  => $result,
	            ]);
	        }
	    }
	    $info = model('Classify')->find($id);
	    if (empty($info)) {
	        $this->error('数据不存在或已删除');
	    }
	    $cate = model('Classify')->order('sort asc, id desc')->select();
	    $arr = $this->tree($cate);

	    $this->assign([
	        'cate'    => $arr,
            'label'   => $label,
	        'info'    => $info
	    ]);

	    echo $this->fetch();
	}

    //更新分类排序
    public function sort()
    {
        if($this->request->isPost()){
            $data       = input('post.');
            $result     = model('Classify')->sort($data);
            if(!(is_numeric($result))){
                return json([
                    'code' => 0,
                    'msg' => '修改失败',
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

    // 更新分类状态
    public function status()
    {
        if($this->request->isPost()){
            $data       = input('post.');
            if($data['status'] == 0){
                $data['status'] = 1;
            }else{
                $data['status'] = 0;
            }
            $result  = model('Classify')->status($data);
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
	
	// 删除分类
    public function del()
    {
        if($this->request->isPost()){
            $id = input('id', 0);
            Db::startTrans();
            try{
                $pid  = model('Classify')->where('pid = '.$id)->field('id')->select();
                foreach ($pid as $key => $value) {
                    $deleteArt = model('Article')->where('pid = '.$value['id'])->delete();
                    if(!\is_numeric($deleteArt)) {
                        throw new Exception($deleteArt, 1);
                    }
                    $deleteCla = model('Classify')->del($value['id']);
                    if(!\is_numeric($deleteCla)) {
                        throw new Exception($deleteCla, 1);
                    }
                }
                //删除菜单
                $result = model('Classify')->del($id);
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
                    'msg'  => '删除分类失败'
                ]);
            }
            action_log($id);
            return json([
                'code' => 200,
                'msg'  => '删除分类成功',
            ]);
        }
    }

    //处理分类
    public function tree($list)
    {
        $arr = tree($list);
        array_walk($arr, function(&$v, &$k, $parentid) {
            if ($v['level'] == 1) {
                $v['pre'] = '&nbsp;&nbsp; ├─ &nbsp;&nbsp;<i class="layui-icon layui-icon-note" style="font-size:10px"></i>';
            } elseif ($v['level'] > 1) {
                $v['pre'] = str_repeat('&nbsp;&nbsp; │ &nbsp;&nbsp;', $v['level'] - 1) . '&nbsp;&nbsp; ├─ &nbsp;&nbsp;';
            } else {
                $v['pre'] = '';
            }
        }, 0);
        return $arr;
    }
}
