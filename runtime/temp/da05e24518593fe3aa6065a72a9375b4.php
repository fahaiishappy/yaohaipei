<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:69:"G:\wamp64\www\hico\public/../application/admin\view\sysset\index.html";i:1612341551;}*/ ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>系统设置</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
    <style type="text/css">
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button{
        -webkit-appearance: none !important;
        margin: 0;
        }
        input[type="number"]{-moz-appearance:textfield;}
    </style>
</head>

<body>
    <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md6">
                <form class="layui-form" method="POST" id="sysset_form" novalidate="">
                    <input type="hidden" name="id" value="<?php echo $info['id']; ?>" id="id">
                    <div class="layui-card">
                        <div class="layui-card-header">一级终端佣金比例</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="number" name="first_commission" placeholder="请输入一级终端佣金比例" autocomplete="off" class="layui-input"  value="<?php echo $info['first_commission']; ?>" id="first_commission">
                            </div>
                        </div>
                        <div class="layui-card-header">二级终端佣金比例</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="number" name="second_commission" placeholder="请输入二级终端佣金比例" autocomplete="off" class="layui-input" value="<?php echo $info['second_commission']; ?>" id="second_commission">
                            </div> 
                        </div>
                        <div class="layui-card-header" style="text-align: right;padding-bottom: 10px">
                            <button class="layui-btn" type="submit">保存配置</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="/layuiadmin/layui/layui.js"></script>
    <script>
        layui.config({
            base: '/layuiadmin/' //静态资源所在路径
        }).extend({
            index: 'lib/index' //主入口模块
        }).use(['layer','index', 'form'], function () {
            var $ = layui.jquery
            , layer=layui.layer
            , form = layui.form;

           $('#sysset_form').submit(function(e){
                e.preventDefault();
                let form_data = $(e.target).serialize();
                $.ajax({
                    type: 'post',
                    url: "<?php echo url('/admin/sysset/edit', array('id'=>1)); ?>",
                    data: form_data,
                    success: function(res) {
                        layer.alert(res.msg);
                    },
                    error: function() {
                        layer.alert('修改失败');
                    }
                });
                e.preventDefault();
            });
        });
    </script>
</body>

</html>