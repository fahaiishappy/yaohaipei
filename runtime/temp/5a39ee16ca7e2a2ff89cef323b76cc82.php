<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:74:"G:\wamp64\www\yaohaipei\public/../application/admin\view\user\profile.html";i:1626926141;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\head.html";i:1626926141;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\foot.html";i:1626926140;}*/ ?>
<!DOCTYPE html>
<html>

<head>
    <title>修改个人信息</title>
    <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/static/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/static/admin/style/admin.css" media="all">
</head>

<body>
    <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md6">
                <form>
                    <input type="hidden" name="id" value="<?php echo $info['id']; ?>" />
                    <div class="layui-card">
                        <div class="layui-card-header">用户名</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="text" name="username" readonly="readonly" placeholder="请输入用户名" autocomplete="off" class="layui-input" value="<?php echo $info['username']; ?>">
                            </div>
                        </div>
                        <div class="layui-card-header">密码</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="password" name="password" placeholder="请输入密码" autocomplete="off" class="layui-input" value="!@douwen">
                            </div>
                        </div>
                        <div class="layui-card-header">真实姓名</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="text" name="truename" placeholder="请输入真实姓名" autocomplete="off" class="layui-input" value="<?php echo $info['truename']; ?>">
                            </div>
                        </div>
                        <div class="layui-card-header">手机号</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="number" name="mobile" placeholder="请输入手机号" autocomplete="off" class="layui-input" value="<?php echo $info['mobile']; ?>">
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="/static/admin/layui/layui.js"></script>
    <script>
        layui.config({
            base: '/static/admin/' //静态资源所在路径
        }).extend({
            index: 'lib/index' //主入口模块
        }).use(['index', 'form'], function () {
            var $ = layui.$
                , admin = layui.admin
                , element = layui.element
                , form = layui.form;

            form.render(null, 'component-form-element');
            element.render('breadcrumb', 'breadcrumb');

            form.on('submit(component-form-element)', function (data) {
                layer.msg(JSON.stringify(data.field));
                return false;
            });
        });
    </script>
</body>

</html>