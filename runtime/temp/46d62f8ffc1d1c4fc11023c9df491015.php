<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:66:"G:\wamp64\www\hico\public/../application/admin\view\role\edit.html";i:1595857578;}*/ ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>新增公司</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
</head>

<body>
    <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md6">
                <form>
                    <input type="hidden" name="id" value="<?php echo $info['id']; ?>" />
                    <div class="layui-card">
                        <div class="layui-card-header">角色名称</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="text" name="title" placeholder="请输入角色名称" autocomplete="off" class="layui-input" value="<?php echo $info['title']; ?>">
                            </div>
                        </div>
                        <div class="layui-card layui-form">
                            <div class="layui-card-header">是否启用</div>
                            <div class="layui-card-body layui-row layui-col-space10">
                                <div class="layui-col-md12">
                                    <input type="radio" name="status" value="1" title="启用" <?php if($info['status'] == '1'): ?>checked<?php endif; ?>>
                                    <input type="radio" name="status" value="0" title="禁用" <?php if($info['status'] == '0'): ?>checked<?php endif; ?>>
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
        }).use(['index', 'jquery', 'form'], function () {

        });
    </script>
</body>

</html>