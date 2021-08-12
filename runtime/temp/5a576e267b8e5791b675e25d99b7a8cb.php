<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:73:"G:\wamp64\www\hico\public/../application/admin\view\college\category.html";i:1623893117;}*/ ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>分类列表</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
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
                                <input class="layui-input" name="keyword" id="keyword" autocomplete="off"
                                    placeholder="请输入分类名称">
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

    <script src="/layuiadmin/layui/layui.js"></script>
    <script>
        layui.config({
            base: '/layuiadmin/' //静态资源所在路径
        }).extend({
            index: 'lib/index' //主入口模块
        }).use(['index', 'table'], function () {
            var table = layui.table;

            //列表渲染
            table.render({
                elem: '#test-table-reload'
                , url: '<?php echo url("admin/college/category"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                    { field: 'id', title: 'ID', width: 80, align: 'center', sort: true, fixed: true }
					, { field: 'sort', title: '排序', width: 80, align: 'center' }
                    , { field: 'name', title: '分类名称', templet: "#nameField" }
					, { field: 'status', title: '状态', width: 150, align: 'center', templet: "#status" }
                    , { field: 'caozuo', title: '操作', width: 200, align: 'center', templet: "#caozuo" }
                ]]
                , height: 'full-145'
            });

            //搜索
            var $ = layui.$, active = {
                reload: function () {
                    var keyword = $('#keyword');
                    //执行重载
                    table.reload('test-table-reload', {
                        page: {
                            curr: 1 //重新从第 1 页开始
                        }
                        , where: {
                            keyword: keyword.val(),
                        }
                    });
                }
            };

            // 新增分类
            $('.btn-add').click(function () {
                layer.open({
                    type: 2
                    , title: '添加分类'
                    , shadeClose: false
                    , shade: 0.8
                    , area: ['50%', '80%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/college/add_category'); ?>"
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/college/add_category'); ?>",
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
                if (obj.event === 'del') {
                    layer.confirm('您确认删除该分类么？同时删除所有子分类以及所有子分类文章！', function (index) {
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/college/del_category'); ?>",
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
                    layer.open({
                        type: 2
                        , title: '编辑分类'
                        , shadeClose: true
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/college/edit_category'); ?>" + '?id=' + data.id
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/college/edit_category'); ?>" + '?id=' + data.id,
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
        <span>{{d.pre}}{{d.name}}</span>
    </script>
    
	<!-- 状态 -->
	<script type="text/html" id="status">
		{{#  if(d.status == 1){ }}
			<button class="layui-btn layui-btn-xs layui-btn-radius" style="background-color: #5FB878;">正常</button>
		{{#  } else{ }}
			<button class="layui-btn layui-btn-xs layui-btn-disabled layui-btn-radius">禁用</button>
		{{#  } }}
	</script>

    <!-- 操作 -->
    <script type="text/html" id="caozuo">
        <a class="layui-btn layui-btn-sm" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</a>
    </script>
</body>

</html>