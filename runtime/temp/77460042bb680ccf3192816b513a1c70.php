<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:76:"G:\wamp64\www\yaohaipei\public/../application/admin\view\classify\index.html";i:1627007347;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\head.html";i:1626926141;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\foot.html";i:1626926140;}*/ ?>
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
                    <div class="layui-card-header">分类列表</div>
                    <div class="layui-card-body">
                        <div class="test-table-reload-btn" style="margin-bottom: 10px;">
                            <div class="layui-inline">
                                <input class="layui-input" name="search_name" id="search_name" autocomplete="off"
                                    placeholder="请输入分类或标签名称">
                            </div>
                            <div class="layui-inline layui-form">
                                <div style="width: 100px;">
                                    <select name="search_status" id="search_status" lay-verify="">
                                        <option value="">状态</option>
                                        <option value="0">禁用</option>
                                        <option value="1">启用</option>
                                    </select>
                                </div>
                            </div>
                            <button class="layui-btn" data-type="reload">搜索</button>
                            <?php if($manager['type'] == 0): ?>
                                <button class="layui-btn layui-btn-danger btn-add">新增分类</button>
                            <?php endif; ?>
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

            //列表渲染
            table.render({
                elem: '#test-table-reload'
                , url: '<?php echo url("admin/classify/index"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                    { field: 'id', title: 'ID', width: 80, align: 'center', sort: true, fixed: true }
					, { field: 'sort', title: '排序', width: 80, align: 'center', edit: 'text' }
                    , { field: 'name', title: '分类名称', templet: "#nameField" }
					, { field: 'status', title: '状态', width: 150, align: 'center', event: "status", style:'cursor: pointer;', templet: "#status" }
                    , { field: 'caozuo', title: '操作', width: 250, align: 'right', templet: "#caozuo" }
                ]]
                , height: 'full-145'
            });

            //搜索
            var $ = layui.$, active = {
                reload: function () {
                    //执行重载
                    table.reload('test-table-reload', {
                        page: {
                            curr: 1 //重新从第 1 页开始
                        }
                        , where: {
                            search_name: $('#search_name').val(),
                            search_status: $('#search_status').val(),
                        }
                    });
                }
            };

            //监听排序单元格编辑
            table.on('edit(test-table-reload)', function(obj){
                var value = obj.value //得到修改后的值
                    , data = obj.data; //得到字段
                $.ajax({
                    type: 'post',
                    url: "<?php echo url('/admin/classify/sort'); ?>",
                    data: {
                        sort: value,
                        id: data.id
                    },
                    success: function (res) {
                        layer.msg(res.msg);
                    },
                    error: function () {
                        layer.msg(res.msg);
                    }
                });
            });

            // 新增分类
            $('.btn-add').click(function () {
                layer.open({
                    type: 2
                    , title: '添加分类'
                    , shadeClose: false
                    , shade: 0.8
                    , area: ['50%', '80%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/classify/add'); ?>"
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/classify/add'); ?>",
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
                        url: "<?php echo url('/admin/classify/status'); ?>",
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
                }else if(obj.event === 'label') {
                    layer.open({
                        type: 2
                        , title: '添加标签'
                        , shadeClose: false
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/classify/add'); ?>" + '?id=' + data.id + '&label=1'
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/classify/add'); ?>",
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
                } else if (obj.event === 'del') {
                    layer.confirm('您确认删除该分类么？同时删除所有子分类以及所有子分类文章！', function (index) {
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/classify/del'); ?>",
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
                                layer.alert('删除分类失败');
                            }
                        });
                    });
                } else if (obj.event === 'edit') {
                    var label,title;
                    if(data.pid > 0){
                        label = '&label=1';
                        title = '编辑标签';
                    }else{
                        label = '&label=0';
                        title = '编辑分类';
                    }
                    layer.open({
                        type: 2
                        , title: title
                        , shadeClose: true
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/classify/edit'); ?>" + '?id=' + data.id + label
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/classify/edit'); ?>" + '?id=' + data.id,
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
        {{#  if(d.pre){ }}
            <span>{{d.pre}}</span>
        {{#  } else{ }}
            {{#  if(d.pname){ }}
                <button class="layui-btn layui-btn-xs layui-btn-radius">{{d.pname}}</button> - 
            {{#  } }}
        {{#  } }}
        <span>{{d.name}}</span>
    </script>
    
	<!-- 状态 -->
	<script type="text/html" id="status">
		{{#  if(d.status == 1){ }}
			<button class="layui-btn layui-btn-xs layui-btn-radius" style="background-color: #5FB878;">启用</button>
		{{#  } else{ }}
			<button class="layui-btn layui-btn-xs layui-btn-disabled layui-btn-radius">禁用</button>
		{{#  } }}
	</script>

    <!-- 操作 -->
    <script type="text/html" id="caozuo">
        {{#  if(d.pid == 0){ }}
            <a class="layui-btn layui-btn-sm" lay-event="label">添加标签</a>
        {{#  } }}
        <a class="layui-btn layui-btn-sm layui-btn-warm" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</a>
    </script>
</body>

</html>