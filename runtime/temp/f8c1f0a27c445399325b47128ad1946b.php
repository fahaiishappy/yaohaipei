<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:66:"G:\wamp64\www\hico\public/../application/admin\view\user\auth.html";i:1595849702;}*/ ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>新增公司</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
    <style type="text/css">
        .layui-form-checkbox{
            margin-bottom: 10px
        }
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
                <form>
                    <input value="<?php echo $id; ?>" name="id" type="hidden" />
                    <input value="<?php echo $auth['status']; ?>" name="status" type="hidden" />
                    <div class="layui-card">
                        <div class="layui-card layui-form">
                            <div class="layui-card-body layui-row layui-col-space10">
                                <div class="layui-col-md12">
                                    <?php if(is_array($info) || $info instanceof \think\Collection || $info instanceof \think\Paginator): $i = 0; $__LIST__ = $info;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                                        <input type="checkbox" name="gid[]" value="<?php echo $vo['id']; ?>" title="<?php echo $vo['title']; ?>" <?php if(in_array($vo['id'], $auth['group'])): ?>checked<?php endif; ?>>
                                    <?php endforeach; endif; else: echo "" ;endif; ?>
                                </div>
                            </div>
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
        }).use(['index', 'form', 'upload'], function () {

        });
    </script>
</body>

</html>