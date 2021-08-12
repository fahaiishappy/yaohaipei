<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:65:"G:\wamp64\www\hico\public/../application/admin\view\menu\add.html";i:1595855536;}*/ ?>
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
                    <input type="hidden" name="type" value="<?php echo $type; ?>" />
                    <div class="layui-card">
                        <div class="layui-card-header">所属上级</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12 layui-form">
                                <select name="pid" id="pid" lay-verify="" lay-filter="pid">
                                    <option value="0">顶级分类</option>
                                    <?php if(is_array($authList) || $authList instanceof \think\Collection || $authList instanceof \think\Paginator): $i = 0; $__LIST__ = $authList;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                                    <option value="<?php echo $vo['id']; ?>" <?php if($vo['id'] == $pid): ?>selected="selected"<?php endif; ?>><?php echo $vo['pre']; ?><?php echo $vo['title']; ?></option>
                                    <?php endforeach; endif; else: echo "" ;endif; ?>
                                </select>
                            </div>
                        </div>
                        <div class="layui-card-header">排序</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="text" name="sort" value="0" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-card-header">菜单名称</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="text" name="title" placeholder="请输入菜单名称" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-card-header">菜单地址</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="text" name="name" placeholder="请输入菜单地址" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-card-header">菜单按钮样式</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <div class="layui-col-md12">
                                <input type="text" name="icon" placeholder="请输入按钮样式" autocomplete="off" class="layui-input">
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
                        <div class="layui-card layui-form">
                            <div class="layui-card-header">是否按钮</div>
                            <div class="layui-card-body layui-row layui-col-space10">
                                <div class="layui-col-md12">
                                    <input type="radio" name="isbtn" value="0" title="菜单" checked>
                                    <input type="radio" name="isbtn" value="1" title="按钮">
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