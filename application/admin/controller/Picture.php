<?php
namespace app\admin\controller;
use think\Request;

// 图片/文件管理
class Picture extends Common 
{ 

    //banner图片
    public function banner()
    {
        $header = $this->request->header();
        if (isset($header['ajax'])) {
            $where['a.file'] = 'banner';
            $search = Request::instance()->param();
            if (isset($search['search_pid']) && $search['search_pid'] !== '') {
                if($search['search_pid'] == '1'){
                    $where['a.pid']= array('gt',0);
                }else{
                    $where['a.pid']= array('eq',0); 
                }
            }
            $_page   = isset($search['page']) ? intval($search['page']) : 1;
            $_size   = isset($search['limit']) ? intval($search['limit']) : config('pagesize');
            $_offset = ($_page - 1) * $_size;

            $_count  = model('Picture')
                       ->alias('a')
                       ->join('banner b','a.pid = b.id', 'LEFT')
                       ->where($where)
                       ->count();

            $_list   = model('Picture')
                       ->alias('a')
                       ->join('banner b','a.pid = b.id', 'LEFT')
                       ->where($where)
                       ->limit($_offset . ',' . $_size)
                       ->order('a.id desc')
                       ->field('a.*, b.title')
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

    //文章图片
    public function article_img()
    {
        $header = $this->request->header();
        if (isset($header['ajax'])) {
            $where['a.file'] = 'articleimg';
            $search = Request::instance()->param();
            if (isset($search['search_pid']) && $search['search_pid'] !== '') {
                if($search['search_pid'] == 1){
                    $where['a.pid']= array('gt',0);
                }else{
                    $where['a.pid']= array('eq',0); 
                }
            }
            $_page   = isset($search['page']) ? intval($search['page']) : 1;
            $_size   = isset($search['limit']) ? intval($search['limit']) : config('pagesize');
            $_offset = ($_page - 1) * $_size;

            $_count  = model('Picture')
                       ->alias('a')
                       ->join('Article b','a.pid = b.id', 'LEFT')
                       ->where($where)
                       ->count();

            $_list   = model('Picture')
                       ->alias('a')
                       ->join('Article b','a.pid = b.id', 'LEFT')
                       ->where($where)
                       ->limit($_offset . ',' . $_size)
                       ->order('a.id desc')
                       ->field('a.*, b.title')
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

    //文章附件
    public function article_file()
    {
        $header = $this->request->header();
        if (isset($header['ajax'])) {
            $where['a.file'] = 'articlefile';
            $search = Request::instance()->param();
            if (isset($search['search_pid']) && $search['search_pid'] !== '') {
                if($search['search_pid'] == 1){
                    $where['a.pid']= array('gt',0);
                }else{
                    $where['a.pid']= array('eq',0); 
                }
            }
            $_page   = isset($search['page']) ? intval($search['page']) : 1;
            $_size   = isset($search['limit']) ? intval($search['limit']) : config('pagesize');
            $_offset = ($_page - 1) * $_size;

            $_count  = model('Picture')
                       ->alias('a')
                       ->join('Article b','a.pid = b.id', 'LEFT')
                       ->where($where)
                       ->count();

            $_list   = model('Picture')
                       ->alias('a')
                       ->join('Article b','a.pid = b.id', 'LEFT')
                       ->where($where)
                       ->limit($_offset . ',' . $_size)
                       ->order('a.id desc')
                       ->field('a.*, b.title,b.fileName')
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

    //附件/图片
    public function del()
    {
        if($this->request->isPost()){
            $id = input('id', 0);
            $info = model('Picture')->find($id);
            $dir=ROOT_PATH . 'public' . DS . 'uploads' . DS . $info['file'] . DS . $info['name'];
            $result = model('Picture')->del($id);
            if(!(is_numeric($result))){
                return json([
                    'code' => 0,
                    'msg'  => '删除失败',
                    'data' => $result,
                ]);
            }else{
                if(file_exists($dir)){
                    unlink($dir);
                }
                action_log($id);
                return json([
                    'code' => 200,
                    'msg'  => '删除成功',
                    'data' => $result,
                ]);
            }
        }
        exit();
    }

    //更新banner图片到表
    public function update_banner()
    {
        $this->insertPicture('banner','Banner','img');
    }
    
    //更新文章图片到表
    public function update_article_img()
    {
        $this->insertPicture('articleimg','Article','img','content');
    }

    //更新文章文件到表
    public function update_article_file()
    {
        $this->insertPicture('articlefile','Article','file');
    }
    //处理图片(进表)
    public function insertPicture($file,$Table,$condition1 = null,$condition2 = null,$condition3 = null)
    {
        $dir=ROOT_PATH . 'public' . DS . 'uploads' . DS . $file;
        //PHP遍历文件夹下所有文件
        $handler = opendir($dir);
        //定义用于存储文件名的数组
        $file_array = array();
        while( ($filename = readdir($handler)) !== false ) 
        {
         //略过linux目录的名字为'.'和‘..'的文件
         if($filename != "." && $filename != "..")
         {  
          //输出文件名
           $file_array[] = $filename;
          }
        }

        foreach ($file_array as &$value) {
            $where['name'] = ["like", "%" . trim($value) . "%"];
            $info   = model('Picture')->where($where)->find();
            if(!empty($info)){
                $data['id'] = $info['id'];
            }
            if(!empty($condition1)){
                $whereor[$condition1] = ["like", "%".trim($value)."%"];
            }
            if(!empty($condition2)){
                $whereor[$condition2] = ["like", "%".trim($value)."%"];
            }
            if(!empty($condition3)){
                $whereor[$condition3] = ["like", "%".trim($value)."%"];
            }
            $res = model($Table)->whereor($whereor)->find();
            if(!empty($res)){
                $data['pid'] = $res['id'];
            }else{
                $data['pid'] = 0;
            }
            $data['file'] = $file;
            $data['name'] = $value;
            
            $res = model('Picture')->modify($data);
        }
    }

}