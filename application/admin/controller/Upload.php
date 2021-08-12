<?php
namespace app\admin\controller;
use think\Controller;
use think\Request;

// 文件/图片上传管理
class Upload extends Controller
{
    protected $request;

    public function __construct()
    {
        parent::__construct();
        $this->request = Request::instance();
    }

    // banner附件上传（图片，文件）
    public function banner()
    {
        $msg                 = array();
        $size                = 0;
        $files               = reset($_FILES);
        if(!isset($files['type'])){
            return json([
                "code" => 0,
                "msg" => '无上传内容',
            ]);
        }
        $mimeType            = explode('/', $files['type']);
        switch ($mimeType[0]) {
            case 'image':
                $mime        = 'image';
                $msg         = $this->ImageFolder('banner');
                break;   
            default:
                return json([
                    "code" => 0,
                    "msg" => '不支持该文件格式',
                ]);
                break;
        }
        return json($msg);
    }

    // 文章附件上传（图片，文件）
    public function article()
    {
        $msg                 = array();
        $size                = 0;
        $files               = reset($_FILES);
        if(!isset($files['type'])){
            return json([
                "code" => 0,
                "msg" => '无上传内容',
            ]);
        }
        $mimeType            = explode('/', $files['type']);
        switch ($mimeType[0]) {
            case 'image':
                $mime        = 'image';
                $msg         = $this->ImageFolder('articleimg');
                break;
            case 'application':
                $mime        = 'application';
                $msg         = $this->FileFolder('articlefile');
                break;
            case 'text':
                $mime        = 'text';
                $msg         = $this->FileFolder('articlefile');
                break;
            default:
                return json([
                    "code" => 0,
                    "msg" => '不支持该文件格式',
                ]);
                break;
        }
        return json($msg);
    }

    // 图片上传（指定返回格式）
    public function editor_article()
    {
        $msg                 = array();
        $size                = 0;
        $files               = reset($_FILES);
        if(!isset($files['type'])){
            return json([
                "code" => 0,
                "msg" => '无上传内容',
            ]);
        }
        $mimeType            = explode('/', $files['type']);
        switch ($mimeType[0]) {
            case 'image':
                $mime        = 'image';
                $msg         = $this->ImageFolder('articleimg');
                break;
            default:
                $msg['code'] = 0;
                $msg['msg']  = '不支持该文件格式';
                return json($msg);
                break;
        }
        if($msg['code'] == 200){
            $data =[
                "errno" => 0,
                "msg" => $msg['msg'],
                "data" => [
                    "url" => $msg['url'],
                    "alt" => $msg['originalName'],
                    "href" => ""
                ]
            ];
        }else {
           $data =[
                "errno" => -1,
                "msg" => '上传失败',
                "data" => [
                    "url" => "",
                    "alt" => "",
                    "href" => ""
                ]
            ];
        }
        return json($data);
    }

    // 图片上传方法(指定文件夹)
    // $folder：文件夹名
    private function ImageFolder($folder) 
    {
        $file  = request()->file('file');
        $imgName = md5(microtime(true));
        $thumb = input('post.thumb', 0);
        $info  = $file->validate([
                    'size'=>314572800,
                    'ext'=>'jpg,jpeg,png,gif'
                ])->move(ROOT_PATH.'public'.DS.'uploads'.DS.$folder,$imgName);
        if($info){
            // 访问地址
            $url = '/uploads/'.$folder.'/'.$info->getSaveName();
            // 加密后文件名
            $name = $info->getFilename();
            // 原文件名
            $originalName = $info->getinfo()['name'];

            $realpath = ROOT_PATH.'public'.DS.'uploads'.DS.$folder.DS.$info->getSaveName();
            //win下替换\为/
            if(strpos($url,'\\') !== false){
                $url =  str_replace('\\','/',$url);
            }
            
            if($thumb == 1){
                $image = \think\Image::open($realpath);
                $image->thumb(500, 500, \think\Image::THUMB_SCALING)->save($realpath, null, 100);
            }
            $msg = [
                'code' => 200,
                'msg'  => '上传成功',
                'url'  => $url,
                'name' => $name,
                'originalName' => $originalName,
            ];
        }else{
            $msg = [
                'code' => 0,
                'msg'  => $file->getError(),
            ];
        }
        return $msg;
    }

    // 图片上传方法(默认日期文件夹)
    private function Image() 
    {
        $file  = request()->file('file');
        $thumb = input('post.thumb', 0);
        $info  = $file->validate([
                    'size'=>314572800,
                    'ext'=>'jpg,jpeg,png,gif'
                ])->move(ROOT_PATH.'public'.DS.'uploads');
        if($info){
            // 访问地址
            $url = '/uploads/'.$info->getSaveName();
            // 加密后文件名
            $name = $info->getFilename();
            // 原文件名
            $originalName = $info->getinfo()['name'];

            $realpath = ROOT_PATH.'public'.DS.'uploads'.DS.$info->getSaveName();
            //win下替换\为/
            if(strpos($url,'\\') !== false){
                $url =  str_replace('\\','/',$url);
            }
            
            if($thumb == 1){
                $image = \think\Image::open($realpath);
                $image->thumb(500, 500, \think\Image::THUMB_SCALING)->save($realpath, null, 100);
            }
            $msg = [
                'code' => 200,
                'msg'  => '上传成功',
                'url'  => $url,
                'name' => $name,
                'originalName' => $originalName
            ];
        }else{
            $msg = [
                'code' => 0,
                'msg'  => $file->getError(),
            ];
        }
        return $msg;
    }

	// 文件上传方法(指定文件夹)
    // $folder：文件夹名
    private function FileFolder($folder) 
    {
        $file  = request()->file('file');
        $thumb = input('post.thumb', 0);
        $fileName = md5(microtime(true));
        $info  = $file
                 ->validate([
                    'size'=>314572800,
                    'ext'=>'xls,xlsx,zip,rar,pdf,ppt,pptx,doc,docx,txt'
                ])->move(ROOT_PATH.'public'.DS.'uploads'.DS.$folder,$fileName);
        if($info){
            // 访问地址
            $url = '/uploads/'.$folder.'/'.$info->getSaveName();
            // 加密后文件名
            $name = $info->getFilename();
            // 原文件名
            $originalName = $info->getinfo()['name'];

            $realpath = ROOT_PATH.'public'.DS.'uploads'.DS.$folder.DS.$info->getSaveName();
            //win下替换\为/
            if(strpos($url,'\\') !== false){
                $url =  str_replace('\\','/',$url);
            }
            if($thumb == 1){
                $image = \think\Image::open($realpath);
                $image->thumb(500, 500, \think\Image::THUMB_SCALING)->save($realpath, null, 100);
            }
            $msg = [
                'code' => 200,
                'msg'  => '上传成功',
                'url'  => $url,
                'name' => $name,
                'originalName' => $originalName
            ];
        }else{
            $msg = [
                'code' => 0,
                'msg'  => $file->getError(),
            ];
        }
        return $msg;
    }

    // 文件上传方法(默认日期文件夹)
    private function File() 
    {
        $file  = request()->file('file');
        $thumb = input('post.thumb', 0);

        $info  = $file
                 ->validate(['size'=>314572800,'ext'=>'xls,xlsx,zip,rar,pdf,ppt,pptx,doc,docx'])
                 ->move(ROOT_PATH.'public'.DS.'uploads');
        if($info){
            // 访问地址
            $url = '/uploads/'.$info->getSaveName();
            // 加密后文件名
            $name = $info->getFilename();
            // 原文件名
            $originalName = $info->getinfo()['name'];

            $realpath = ROOT_PATH.'public'.DS.'uploads'.DS.$info->getSaveName();
            //win下替换\为/
            if(strpos($url,'\\') !== false){
                $url =  str_replace('\\','/',$url);
            }
            if($thumb == 1){
                $image = \think\Image::open($realpath);
                $image->thumb(500, 500, \think\Image::THUMB_SCALING)->save($realpath, null, 100);
            }
            $msg = [
                'code' => 200,
                'msg'  => '上传成功',
                'url'  => $url,
                'name' => $name,
                'originalName' => $originalName
            ];
        }else{
            $msg = [
                'code' => 0,
                'msg'  => $file->getError(),
            ];
        }
        return $msg;
    }

    // 上传图片到服务器
    public function uploadServer() 
    {
        $file       = request()->file('uploadImage');
        $ser_width  = input('post.width');                                           //图片截取宽度
        $ser_height = input('post.height');                                          //图片截取长度
        $thumb      = input('post.thumb');                                           //是否裁剪
        $info       = $file->validate(['size'=>314572800,'ext'=>'jpg,jpeg,png,gif'])
                        ->move(ROOT_PATH . 'public' . DS . 'uploads');
        if($info){
            $savename = '/uploads/' . $info->getSaveName();
            $realpath = ROOT_PATH . 'public' . DS . 'uploads/' . $info->getSaveName();
            //win下替换\为/
            if(strpos($savename,'\\') !== false){
                $savename =  str_replace('\\','/',$savename);
            }
            $filename = $info->getFilename();
            $realpath = ROOT_PATH . 'public' . DS . 'uploads/' . $info->getSaveName();
            $image = \think\Image::open($realpath);
            $width = $image->width();
            $height = $image->height();
            if($thumb == 1 && $width >$ser_width && $height>$ser_height){
                $image->thumb($ser_width, $ser_height, \think\Image::THUMB_SCALING)->save($realpath, null, 100);
            }
            $msg = [
                'code' => 200,
                'msg'  => '上传成功',
                'url'  => $savename,
                'name' => $filename,
            ];
        }else{
            $msg = [
                'code' => 0,
                'msg'  => $file->getError(),
            ];
        }
        return $msg;
    }
}