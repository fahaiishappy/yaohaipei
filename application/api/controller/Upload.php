<?php
namespace app\api\controller;


class Upload extends Common
{

    public function index(){
        $files = reset($_FILES);
        if(!isset($files['type'])){
            return $this->app_error('请选择图片');
        }
        $mimeType = explode('/', $files['type']);
        if ($mimeType[0] != 'image') {
            return $this->app_error('图片类型不合法');
        }
        $msg = $this->uploadImage();
        if ($msg['code'] != 0) {
            return $this->app_error($msg['msg']);
        }
        return $this->app_json($msg);
    }

    private function uploadImage() {
        $file  = request()->file('image');
        $thumb = input('post.thumb', 0);
        $info  = $file->validate([
            'size' => 10485760,
            'ext'  => 'jpg,jpeg,png,gif'
        ])->move(ROOT_PATH . 'public' . DS . 'uploads');
        if($info){
            $savename = '/uploads/' . $info->getSaveName();
            $realpath = ROOT_PATH . 'public' . DS . 'uploads/' . $info->getSaveName();
            //win下替换\为/
            if(strpos($savename,'\\') !== false){
                $savename =  str_replace('\\','/',$savename);
            }
            $savename = tomedia($savename);
            $filename = $info->getFilename();
            if($thumb == 1){
                $image = \think\Image::open($realpath);
                $image->thumb(500, 500, \think\Image::THUMB_SCALING)->save($realpath, null, 100);
            }
            $msg = [
                'code' => 0,
                'url'  => $savename,
                'name' => $filename,
            ];
        }else{
            $msg = [
                'code' => 1,
                'msg'  => $file->getError(),
            ];
        }
        return $msg;
    }

}