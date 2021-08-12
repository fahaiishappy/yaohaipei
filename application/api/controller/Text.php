<?php
namespace app\api\controller;
use think\Controller;
use think\Config;
use think\Request;
use think\Db;
use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;
class Text extends Common{

    protected $appid = 'wx91104fc1e784a6a7';
    protected $appsecret = '7aa5c394f1995627e0876536929f5b77';
    protected $request;

    public function __construct(){
        $this->request = Request::instance();
        header("Access-Control-Allow-Origin: *");
    }

    // 判断用户是否购买
    public function collegelookup(){
        if($this->request->isPost()){
            $data   = input('post.');
            // $data['openid'] = 'oLYhAt68Ev2l-Ep3lc4k99eWw5Qk';
            // $data['cewebrityid'] = '537';
            
            $member = db('member')->where('id = '.$data['mid'])->find();
            if(empty($member)) {
                return $this->app_json([
                    'info' => [
                        'code' => 0,
                        'msg'  => '请先登录！',
                    ]
                ]);
            }
            
            $category = db('order_college')->where([
                    'mid' => $data['mid'],
                    'article_category_id'  => $data['pid'],
                    'status'  => 1,
                ])->find();
            $article = db('order_college')->where([
                    'mid' => $data['mid'],
                    'article_id'  => $data['id'],
                    'status'  => 1,
                ])->find(); 

            if($member['article_card_id'] == 8){
                return $this->app_json([
                    'info' => [
                        'code' => 1,
                        'msg'  => '您是学院超级会员，查看成功',
                    ]
                ]);
            }else{
                if($category){
                    return $this->app_json([
                        'info' => [
                            'code' => 1,
                            'msg'  => '您已购买该栏目，查看成功',
                        ]
                    ]);
                }else{
                    if($article){
                        return $this->app_json([
                            'info' => [
                                'code' => 1,
                                'msg'  => '您已购买该文章，查看成功',
                            ]
                        ]);
                    }else{
                        return $this->app_json([
                            'info' => [
                                'code' => 0,
                                'msg'  => '该文章是付费文章，查看需购买',
                            ]
                        ]);
                    }
                }
            }
            
        }
    }
}