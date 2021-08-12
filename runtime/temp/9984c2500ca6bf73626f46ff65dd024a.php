<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:67:"G:\wamp64\www\hico\public/../application/admin\view\menu\index.html";i:1624347388;s:58:"G:\wamp64\www\hico\application\admin\view\common\head.html";i:1624346804;s:58:"G:\wamp64\www\hico\application\admin\view\common\foot.html";i:1624346639;}*/ ?>
<!DOCTYPE html>
<html>

<head>
    <title>分类列表</title>
    <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/admin/style/admin.css" media="all">
    <style type="text/css">
        tbody .layui-table-cell {
            height: 40px;
            line-height: 40px;
        }
        .btn {
            display: inline-block;
            font-weight: 600;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border: 1px solid transparent;
            padding: .3rem .8rem;
            font-size: 12px;
            line-height: 24px;
            border-radius: .25rem;
            letter-spacing: .5px;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }
        .btn-info{
            box-shadow: 0 2px 6px #82d3f8;
            background-color: #3abaf4;
            border-color: #3abaf4;
            color: #fff;
        }
        .btn.btn-sm {
            padding: .10rem .4rem;
            font-size: 12px;
            border-radius: .2rem;
        }
        .btn:not(:disabled):not(.disabled) {
            cursor: pointer;
        }
    </style>
</head>

<body>

    <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md12">
                <div class="layui-card">
                    <div class="layui-card-header">分类列表</div>
                    <div class="layui-card-body">
                        <div class="test-table-reload-btn" style="margin-bottom: 10px;">
                            <button class="layui-btn layui-btn-danger btn-add">新增菜单</button>
                        </div>
                        <table class="layui-hide" id="test-table-reload" lay-filter="test-table-reload"></table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/admin/layui/layui.js"></script>
    <script>
        layui.config({
            base: '/admin/' //静态资源所在路径
        }).extend({
            index: 'lib/index' //主入口模块
        }).use(['index', 'table'], function () {
            var table = layui.table;

            //方法级渲染
            table.render({
                elem: '#test-table-reload'
                , url: '<?php echo url("admin/menu/index"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                    { field: 'id', title: 'ID', width: 80, align: 'center', sort: true, fixed: true }
                    , { field: 'sort', title: '排序', width: 80, align: 'center', edit: 'text'}
                    , { field: 'title', title: '菜单名称', templet: "#nameField" }
                    , { field: 'name', title: '菜单地址', align: 'center'}
                    , { field: 'status', title: '状态', width: 80, align: 'center', templet: "#status" }
                    , { field: 'caozuo', title: '操作', width: 250, align: 'center', templet: "#caozuo" }
                ]]
                , height: 'full-145'
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
                }
            };

            $('.test-table-reload-btn .layui-btn').on('click', function () {
                var type = $(this).data('type');
                active[type] ? active[type].call(this) : '';
            });

            //监听单元格编辑
            table.on('edit(test-table-reload)', function(obj){
                var value = obj.value //得到修改后的值
                    , data = obj.data; //得到字段
                    console.log(value)
                $.ajax({
                    type: 'post',
                    url: "<?php echo url('/admin/menu/csort'); ?>",
                    data: {
                        sort: value,
                        id: data.id
                    },
                    success: function (res) {
                        if (res.code == 200) {
                            layer.msg('修改成功', {
                                offset: '15px'
                            });
                        } else {
                            layer.msg(res.msg, {
                                offset: '15px'
                            });
                        }
                    },
                    error: function () {
                        layer.msg('修改失败', {
                            offset: '15px'
                        });
                    }
                });
            });

            $('.btn-add').click(function () {
                layer.open({
                    type: 2
                    , title: '添加菜单'
                    , shadeClose: false
                    , shade: 0.8
                    , area: ['50%', '80%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/menu/add'); ?>"
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/menu/add'); ?>",
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
                if (obj.event === 'edit') {
                    layer.open({
                        type: 2
                        , title: '编辑菜单'
                        , shadeClose: true
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/menu/edit'); ?>" + '?id=' + data.id
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/menu/edit'); ?>" + '?id=' + data.id,
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
                }else if(obj.event === 'submenu') {
                    layer.open({
                        type: 2
                        , title: '添加子菜单'
                        , shadeClose: false
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/menu/add'); ?>" + '?pid=' + data.id + '&type=' + data.type
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/menu/add'); ?>" + '?pid=' + data.id + '&type=' + data.type,
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
                }else if(obj.event === 'del') {
                    layer.confirm('您确认删除该菜单吗？', function (index) {
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/menu/del'); ?>",
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
                                layer.alert('删除菜单失败');
                            }
                        });
                    });
                }
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
        <a class="layui-btn layui-btn-sm" lay-event="submenu">添加子菜单</a>
        <a class="layui-btn layui-btn-sm layui-btn-warm" lay-event="edit">修改</a>
        <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="del">删除</a>
    </script>
</body>

</html>