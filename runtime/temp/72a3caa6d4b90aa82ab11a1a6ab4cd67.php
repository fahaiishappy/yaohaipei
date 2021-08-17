<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:72:"G:\wamp64\www\yaohaipei\public/../application/admin\view\user\index.html";i:1629166939;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\head.html";i:1629166939;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\foot.html";i:1629166939;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <title>人员列表</title>
    <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/static/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/static/admin/style/admin.css" media="all">
    <style type="text/css">
        tbody .layui-table-cell {
            height: 45px;
            line-height: 45px;
        }
    </style>
</head>
<body>
    <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md12">
                <div class="layui-card">
                    <div class="layui-card-header">人员列表</div>
                    <div class="layui-card-body">
                        <div class="test-table-reload-btn" style="margin-bottom: 10px;">
                            <div class="layui-inline">
                                <input class="layui-input" name="search_username" id="search_username" autocomplete="off" placeholder="请输入用户名">
                            </div>
                            <div class="layui-inline">
                                <input class="layui-input" name="search_truename" id="search_truename" autocomplete="off" placeholder="请输入真实姓名">
                            </div>
                            <div class="layui-inline layui-form">
                                <div style="width: 100px;">
                                    <select name="search_status" id="search_status" lay-verify="">
                                        <option value="">状态</option>
                                        <option value="0">禁用</option>
                                        <option value="1">正常</option>
                                    </select>
                                </div>
                            </div>
                            <button class="layui-btn" data-type="reload">搜索</button>
                            <button class="layui-btn btn-add">添加人员</button>
                            <button class="layui-btn layui-btn-danger delete-all">批量删除</button>
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
        }).use(['table'], function () {
            var table = layui.table;
            var deleteList = [];
            //方法级渲染
            table.render({
                elem: '#test-table-reload'
                , url: '<?php echo url("admin/user/index"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                    { checkbox: true, fixed: true}
                    , { field: 'id', title: 'ID', align: 'center', width:80, sort: true, fixed: true}
                    , { field: 'username', title: '用户名', align: 'center', width:200, sort: true}
                    , { field: 'truename', title: '真实姓名', align: 'center', width:200}
                    , { field: 'mobile', title: '手机号', align: 'center', width:200}
                    , { field: 'status', title: '状态', align: 'center', width:80, event: "status", style:'cursor: pointer;', templet: '#status'}
                    , { title: '操作', align: 'center', width:190, toolbar: '#test-table-reload-barDemo'}
                ]]
                , page: true
                , height: 'full-140'
            });

            var $ = layui.$, active = {
                reload: function () {
                    var search_username = $('#search_username');
                    var search_truename = $('#search_truename');
                    var search_status = $('#search_status');
                    //执行重载
                    table.reload('test-table-reload', {
                        page: {
                            curr: 1 //重新从第 1 页开始
                        }
                        , where: {
                            search_username: search_username.val(),
                            search_truename: search_truename.val(),
                            search_status: search_status.val(),
                        }
                    });
                }
            };

            $('.test-table-reload-btn .layui-btn').on('click', function () {
                var type = $(this).data('type');
                active[type] ? active[type].call(this) : '';
            });

            //监听表格复选框选择
            table.on('checkbox(test-table-reload)', function (obj) {
                deleteList = []
                var checkStatus = table.checkStatus('test-table-reload'),
                    data = checkStatus.data;
                    data.forEach((item,index)=>{
                        deleteList.push(item.id)
                })
            });
            $('.delete-all').click(function () {
                if(!deleteList.length > 0){
                    layer.alert('请选择您要删除的用户！');
                    return false;
                }
                layer.confirm('您确认删除所选用户吗？', function (index) {
                    $.ajax({
                        type: 'post',
                        url: "<?php echo url('/admin/user/delAll'); ?>",
                        data: { id: deleteList },
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
            })

            $('.btn-add').click(function () {
                layer.open({
                    type: 2
                    , title: '添加人员'
                    , shadeClose: true
                    , shade: 0.8
                    , area: ['50%', '80%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/user/add'); ?>"
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/user/add'); ?>",
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
                                layer.alert('添加资料失败');
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
                        url: "<?php echo url('/admin/user/change_status'); ?>",
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
                } else if (obj.event === 'auth') {
                    layer.open({
                        type: 2
                        , title: '权限分配'
                        , shadeClose: true
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/user/auth'); ?>" + '?id=' + data.id
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/user/auth'); ?>" + '?id=' + data.id,
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
                                    layer.alert('修改人员失败');
                                }
                            });
                        }
                        , btn2: function (index, layero) {
                            layer.close(index);
                        }
                    });
                } else if (obj.event === 'edit') {
                    layer.open({
                        type: 2
                        , title: '修改人员'
                        , shadeClose: true
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/user/edit'); ?>" + '?id=' + data.id
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/user/edit'); ?>" + '?id=' + data.id,
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
                                    layer.alert('修改人员失败');
                                }
                            });
                        }
                        , btn2: function (index, layero) {
                            layer.close(index);
                        }
                    });
                }else if(obj.event === 'delete') {
                    layer.confirm('您确认删除该人员吗？', function (index) {
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/user/del'); ?>",
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
        });
    </script>

    <!-- 状态 -->
    <script type="text/html" id="status">
        {{#  if(d.status == 1){ }}
            <button class="layui-btn layui-btn-xs layui-btn-radius" style="background-color: #5FB878;">正常</button>
        {{#  } else{ }}
            <button class="layui-btn layui-btn-xs layui-btn-disabled layui-btn-radius">禁用</button>
        {{#  } }}
    </script>

    <script type="text/html" id="test-table-reload-barDemo">
        {{#  if(d.id != 1){ }}
            <a class="layui-btn layui-btn-sm" lay-event="auth">权限</a>
            <a class="layui-btn layui-btn-sm layui-btn-warm" lay-event="edit">修改</a>
            <a class="layui-btn layui-btn-sm layui-btn-danger" lay-event="delete">删除</a>
        {{#  } }}
    </script>
</body>

</html>
