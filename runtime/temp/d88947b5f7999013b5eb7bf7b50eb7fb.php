<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:67:"G:\wamp64\www\hico\public/../application/admin\view\news\index.html";i:1612341548;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>资讯列表</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
    <style type="text/css">tbody .layui-table-cell {height: 45px;line-height: 45px;}</style>
</head>
<body>
    <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md12">
                <div class="layui-card">
                    <div class="layui-card-header">资讯列表</div>
                    <div class="layui-card-body">
                        <div class="test-table-reload-btn" style="margin-bottom: 10px;">
                            <div class="layui-inline">
                                <input class="layui-input" name="search_title" id="search_title" autocomplete="off" placeholder="请输入标题">
                            </div>
                            <div class="layui-inline layui-form">
                                <div style="width: 100px;">
                                    <select name="search_type" id="search_type" lay-verify="">
                                        <option value="">分类</option>
                                        <option value="1">快讯</option>
                                        <option value="2">资讯</option>
                                    </select>
                                </div>
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
                            <button class="layui-btn layui-btn-danger btn-add">新增文章</button>
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
        }).use(['util', 'index', 'table', 'laydate'], function () {
            var table = layui.table;
            var laydate = layui.laydate;
            var util = layui.util;

            //方法级渲染
            table.render({
                elem: '#test-table-reload'
                , url: '<?php echo url("admin/news/index"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                    { checkbox: true, fixed: true}
                    , { field: 'id', title: 'ID', align: 'center', width:70, sort: true, fixed: true}
					, { field: 'type', title: '分类', align: 'center', width:70, fixed: true, templet: "#type"}
                    , { field: 'title', title: '文章标题', width:300, fixed: true}
                    , { field: 'img', title: '封面', align: 'center', width:100, templet: '#img'}
                    , { field: 'author', title: '作者', align: 'center', width:100}
                    , { field: 'hits', title: '点击量', align: 'center', sort: true, width:100}
                    , { field: 'addtime', title: '显示时间', align: 'center', sort: true, width:110}
                    , { field: 'createtime', title: '发布时间', align: 'center', width:120, templet: function (d) { return util.toDateString(d.createtime * 1000, "yyyy-MM-dd"); } }
                    , { field: 'source', title: '来源', align: 'center', width:100}
                    , { field: 'status', title: '状态', align: "center", width:70, sort: true, templet: "#status" }
                    , { title: '操作', align: 'center', width:136, toolbar: '#test-table-reload-barDemo' }
                ]]
                , page: true
                , height: 'full-140'
            });

            var $ = layui.$, active = {
                reload: function () {
                    //执行重载
                    table.reload('test-table-reload', {
                        page: {
                            curr: 1 //重新从第 1 页开始
                        }
                        , where: {
                            search_title: $('#search_title').val(),
                            search_type: $('#search_type').val(),
                            search_status: $('#search_status').val(),
                        }
                    });
                }
            };

            $('.test-table-reload-btn .layui-btn').on('click', function () {
                var type = $(this).data('type');
                active[type] ? active[type].call(this) : '';
            });

            $('.btn-add').click(function () {
                layer.open({
                    type: 2
                    , title: '添加文章'
                    , shadeClose: true
                    , shade: 0.8
                    , area: ['50%', '90%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/news/add'); ?>"
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/news/add'); ?>",
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
                if (obj.event === 'del') {
                    layer.confirm('删除文章', function (index) {
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/news/del'); ?>",
                            data: { id: data.id },
                            success: function (res) {
                                layer.alert(res.msg, function () {
                                    obj.del();
                                    layer.closeAll();
                                });
                            },
                            error: function () {
                                layer.alert('删除文章失败');
                            }
                        });
                    });
                } else if (obj.event === 'edit') {
                    layer.open({
                        type: 2
                        , title: '编辑文章'
                        , shadeClose: true
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/news/edit'); ?>" + '?id=' + data.id
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/news/edit'); ?>" + '?id=' + data.id,
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
                                    layer.alert('修改文章失败');
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

    <!-- 封面 -->
    <script type="text/html" id="img">
    	{{#  if (d.img){ }}
    	<img style="width:64px; height: 40px; border-radius: 5px;" src="{{d.img}}">
    	{{#  } else{ }}
    	<button class="layui-btn layui-btn-xs layui-btn-disabled layui-btn-radius">无图</button>
    	{{#  } }}
    </script>

    <!-- 分类 -->
    <script type="text/html" id="type">
        {{#  if(d.type == 1){ }}
            快讯
        {{#  } else if(d.type == 2){ }}
            资讯
        {{#  } }}
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
        <a class="layui-btn layui-btn-sm" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</a>
    </script>
    </body>

</html>
