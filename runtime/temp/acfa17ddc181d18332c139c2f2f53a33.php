<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:67:"G:\wamp64\www\hico\public/../application/admin\view\banner\add.html";i:1624347256;s:58:"G:\wamp64\www\hico\application\admin\view\common\head.html";i:1624346804;s:58:"G:\wamp64\www\hico\application\admin\view\common\foot.html";i:1624346639;}*/ ?>
<!DOCTYPE html>
<html>

<head>
    <title>新增banner</title>
    <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/admin/style/admin.css" media="all">
</head>

<body>
    <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md6">
                <form>
                    <div class="layui-card">
                        <div class="layui-card-header">排序</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="number" name="sort" placeholder="请输入排序" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-card-header">banner标题</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="text" name="title" placeholder="请输入名称" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-card-header">banner图片<button style="float: right;" type="button" class="layui-btn" id="images">上传图片</button></div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <input type="hidden" name="img" id="image">
                            <input type="hidden" name="originalName" id="originalName">
                            <div class="layui-form-item">
                                <div class="layui-upload">
                                    <div class="layui-upload-list">
                                        <div style="width: 160px;height: 100px">
                                            <img style="width: 100%;height: 100%" class="layui-upload-img" id="exhibition">
                                        </div>
                                    </div>
                                    <div>建议尺寸：750px * 320px</div>
                                </div>
                            </div>
                        </div>
                        <div class="layui-card-header">跳转地址</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="text" name="link" placeholder="请输入跳转地址" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-card-header">所属页面</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="text" name="page" placeholder="请输入所属页面" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-card layui-form">
                            <div class="layui-card-header">banner位置</div>
                            <div class="layui-card-body layui-row layui-col-space10">
                                <div class="layui-col-md12">
                                    <input type="radio" name="position" value="1" title="头部" checked>
                                    <input type="radio" name="position" value="2" title="中部">
                                    <input type="radio" name="position" value="3" title="底部">
                                </div>
                            </div>
                        </div>
                        <div class="layui-card layui-form">
                            <div class="layui-card-header">是否启用</div>
                            <div class="layui-card-body layui-row layui-col-space10">
                                <div class="layui-col-md12">
                                    <input type="radio" name="status" value="1" title="启用" checked>
                                    <input type="radio" name="status" value="0" title="禁用">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="/admin/layui/layui.js"></script>
    <script>
        layui.config({
            base: '/admin/' //静态资源所在路径
        }).extend({
            index: 'lib/index' //主入口模块
        }).use(['index', 'form', 'upload'], function () {
            var $ = layui.$
                , admin = layui.admin
                , element = layui.element
                , form = layui.form
                , upload = layui.upload;

            //banner图片上传
            var uploadInst = upload.render({
                elem: '#images'
                ,url: "<?php echo url('admin/upload/banner'); ?>"
                ,size: 2048
                ,before: function(obj){
                    obj.preview(function(index, file, result){
                        $('#exhibition').attr('src', result);
                    });
                }
                ,done: function(res){
                    //如果上传失败
                    if(res.code != 200){
                        return layer.msg('上传失败');
                    }else{
                        layer.msg('上传成功');
                        $('#image').val(res.url);
                        $('#originalName').val(res.originalName);
                    }
                }
            });
        });
    </script>
</body>

</html>