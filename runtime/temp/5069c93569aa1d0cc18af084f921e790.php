<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:72:"G:\wamp64\www\yaohaipei\public/../application/admin\view\role\index.html";i:1627007347;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\head.html";i:1626926141;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\foot.html";i:1626926140;}*/ ?>
<!DOCTYPE html>
<html>

<head>
    <title>分类列表</title>
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
            <div class="layui-col-md12">
                <div class="layui-card">
                    <div class="layui-card-header">角色列表</div>
                    <div class="layui-card-body">
                        <div class="test-table-reload-btn" style="margin-bottom: 10px;">
                            <button class="layui-btn layui-btn-danger btn-add">添加角色</button>
                        </div>
                        <table class="layui-hide" id="test-table-reload" lay-filter="test-table-reload"></table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/static/admin/layui/layui.js"></script>
    <script>
        layui.config({
            base: '/static/admin/' //静态资源所在路径
        }).extend({
            index: 'lib/index' //主入口模块
        }).use(['index', 'table'], function () {
            var table = layui.table;

            //方法级渲染
            table.render({
                elem: '#test-table-reload'
                , url: '<?php echo url("admin/role/index"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                    { field: 'id', title: 'ID', width: 100, align: 'center', sort: true, fixed: true }
                    , { field: 'title', title: '角色名称', align: 'center' }
                    , { field: 'status', title: '状态', align: 'center', event: "status", style:'cursor: pointer;', templet: "#status" }
                    , { field: 'caozuo', title: '操作', width: 300, align: 'center', templet: "#caozuo" }
                ]]
                , height: 'full-140'
            });

            var $ = layui.$, active = {
                reload: function () {
                    var keyword = $('#keyword');
                    var search_status = $('#search_status');
                    //执行重载
                    table.reload('test-table-reload', {
                        page: {
                            curr: 1 //重新从第 1 页开始
                        }
                        , where: {
                            keyword: keyword.val(),
                            search_status: search_status.val(),
                        }
                    });
                },
            };

            $('.test-table-reload-btn .layui-btn').on('click', function () {
                var type = $(this).data('type');
                active[type] ? active[type].call(this) : '';
            });

            $('.btn-add').click(function () {
                layer.open({
                    type: 2
                    , title: '添加菜单'
                    , shadeClose: false
                    , shade: 0.8
                    , area: ['50%', '80%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/role/add'); ?>"
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/role/add'); ?>",
                            data: body.find('form').serialize(),
                            success: function (res) {
                                if (res.code == 200) {
                                    layer.alert(res.msg, function () {
                                        if($(".layui-laypage-btn")[0] == undefined){
                                            window.location.reload();
                                        }else{
                                            $(".layui-laypage-btn")[0].click(); 
                                        }
                                        layer.closeAll();
                                    });
                                } else {
                                    layer.alert(res.msg);
                                }
                            },
                            error: function () {
                                layer.alert('添加失败');
                                layer.close(index);
                            }
                        });
                    }
                    , btn2: function (index, layero) {
                        layer.close(index);
                    }
                });
            })
            //监听工具条
            table.on('tool(test-table-reload)', function (obj) {
                var data = obj.data;
                if(obj.event === 'status'){
                    $.ajax({
                        type: 'post',
                        url: "<?php echo url('/admin/role/change_status'); ?>",
                        data: { 
                            id: data.id,
                            status: data.status,
                        },
                        success: function (res) {
                            if (res.code == 200) {
                                layer.alert(res.msg, function () {
                                    if($(".layui-laypage-btn")[0] == undefined){
                                        window.location.reload();
                                    }else{
                                        $(".layui-laypage-btn")[0].click(); 
                                    }
                                    layer.closeAll();
                                });
                            } else {
                                layer.alert(res.msg);
                            }
                        },
                        error: function () {
                            layer.alert('修改状态失败');
                        }
                    });
                } else if (obj.event === 'edit') {
                    layer.open({
                        type: 2
                        , title: '角色修改'
                        , shadeClose: true
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/role/edit'); ?>" + '?id=' + data.id
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/role/edit'); ?>" + '?id=' + data.id,
                                data: body.find('form').serialize(),
                                success: function (res) {
                                    if (res.code == 200) {
                                        layer.alert(res.msg, function () {
                                            if($(".layui-laypage-btn")[0] == undefined){
                                            window.location.reload();
                                        }else{
                                            $(".layui-laypage-btn")[0].click(); 
                                        }
                                            layer.closeAll();
                                        });
                                    } else {
                                        layer.alert(res.msg);
                                    }
                                },
                                error: function () {
                                    layer.alert('修改失败');
                                    layer.close(index);
                                }
                            });
                        }
                        , btn2: function (index, layero) {
                            layer.close(index);
                        }
                    });
                }else if(obj.event === 'auth') {
                    layer.open({
                        type: 2
                        , title: '设置权限'
                        , shadeClose: false
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/role/auth'); ?>" + '?id=' + data.id
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/role/auth'); ?>" + '?id=' + data.id,
                                data: body.find('form').serialize(),
                                success: function (res) {
                                    if (res.code == 200) {
                                        layer.alert(res.msg, function () {
                                            if($(".layui-laypage-btn")[0] == undefined){
                                            window.location.reload();
                                        }else{
                                            $(".layui-laypage-btn")[0].click(); 
                                        }
                                            layer.closeAll();
                                        });
                                    } else {
                                        layer.alert(res.msg);
                                    }
                                },
                                error: function () {
                                    layer.alert('设置权限失败');
                                    layer.close(index);
                                }
                            });
                        }
                        , btn2: function (index, layero) {
                            layer.close(index);
                        }
                    });
                }else if(obj.event === 'delete') {
                    layer.confirm('您确认删除该角色吗？删除后自动解除所有已关联该角色的用户！', function (index) {
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/role/del'); ?>",
                            data: { id: data.id },
                            success: function (res) {
                                layer.alert(res.msg, function () {
                                    if($(".layui-laypage-btn")[0] == undefined){
                                    window.location.reload();
                                }else{
                                    $(".layui-laypage-btn")[0].click(); 
                                }
                                    layer.closeAll();
                                });
                            },
                            error: function () {
                                layer.alert('删除角色失败');
                            }
                        });
                    });
                }
            });

            $('.test-table-reload-btn .layui-btn').on('click', function () {
                var type = $(this).data('type');
                active[type] ? active[type].call(this) : '';
            });

        });
    </script>
    
    <!-- 分类名称 -->
    <script type="text/html" id="nameField">
        {{d.pre}}{{d.title}}
    </script>

    <!-- 状态 -->
    <script type="text/html" id="status">
        {{#  if(d.status == 1){ }}
            <button class="layui-btn layui-btn-xs layui-btn-radius" style="background-color: #5FB878;">正常</button>
        {{#  } else{ }}
            <button class="layui-btn layui-btn-xs layui-btn-disabled layui-btn-radius">禁用</button>
        {{#  } }}
    </script>
    <script type="text/html" id="caozuo">
        <a class="layui-btn layui-btn-sm" lay-event="auth">权限</a>
        {{#  if(d.id != 1){ }}
            <a class="layui-btn layui-btn-sm layui-btn-warm" lay-event="edit">修改</a>
            <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="delete">删除</a>
        {{#  } }}
    </script>
</body>

</html>