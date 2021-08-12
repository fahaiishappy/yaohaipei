<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:67:"G:\wamp64\www\hico\public/../application/admin\view\card\index.html";i:1612341544;}*/ ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>付费列表</title>
        <meta name="renderer" content="webkit">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
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
                        <div class="layui-card-header">付费列表</div>
                        <div class="layui-card-body">
                            <div class="test-table-reload-btn" style="margin-bottom: 10px;">
                                <div class="layui-inline">
                                    <input class="layui-input" name="keyword" id="keyword" autocomplete="off" placeholder="请输入标题">
                                </div>
                                <div class="layui-inline layui-form">
                                    <div style="width: 100px;">
                                        <select name="search_belong" id="search_belong" lay-verify="">
                                            <option value="">所属</option>
                                            <option value="1">套餐</option>
                                            <option value="2">认证</option>
                                            <option value="3">单次</option>
                                            <option value="4">超级会员</option>
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
                                <button class="layui-btn layui-btn-danger btn-add">添加付费</button>
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
                , url: '<?php echo url("admin/card/index"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                    { checkbox: true, fixed: true}
                    , { field: 'id', title: 'ID', align: 'center', width:80, sort: true, fixed: true}
                    , { field: 'level', title: '会员等级', align: 'center', width:120, sort: true}
                    , { field: 'name', title: '会员名称', align: 'center', width:200}
                    , { field: 'price', title: '会员费用', align: 'center', width:120}
                    , { field: 'number', title: '查看数量', align: 'center', width:100}
                    , { field: 'content', title: '会员内容', align: 'center', width:300}
                    , { field: 'expire', title: '有效期', align: "center", width: 80}
                    , { field: 'belong', title: '所属', align: 'center', width:80, templet: '#belong'}
                    , { field: 'status', title: '状态', align: 'center', width:80, templet: '#status'}
                    , { title: '操作', align: 'center', width:190, toolbar: '#test-table-reload-barDemo'}
                ]]
                , page: true
                , height: 'full-140'
            });

            var $ = layui.$, active = {
                reload: function () {
                    var keyword = $('#keyword');
                    var search_belong = $('#search_belong');
                    var search_status = $('#search_status');
                    //执行重载
                    table.reload('test-table-reload', {
                        page: {
                            curr: 1 //重新从第 1 页开始
                        }
                        , where: {
                            keyword: keyword.val(),
                            search_status: search_status.val(),
                            search_belong: search_belong.val(),
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
                    , title: '添加付费'
                    , shadeClose: true
                    , shade: 0.8
                    , area: ['50%', '80%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/card/add'); ?>"
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/card/add'); ?>",
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
                    layer.confirm('删除付费', function (index) {
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/card/del'); ?>",
                            data: { id: data.id },
                            success: function (res) {
                                layer.alert(res.msg, function () {
                                    obj.del();
                                    layer.closeAll();
                                });
                            },
                            error: function () {
                                layer.alert('删除付费失败');
                            }
                        });
                    });
                } else if (obj.event === 'edit') {
                    layer.open({
                        type: 2
                        , title: '编辑付费'
                        , shadeClose: true
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/card/edit'); ?>" + '?id=' + data.id
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/card/edit'); ?>" + '?id=' + data.id,
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
                                    layer.alert('修改付费失败');
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
    <!-- 收费形式 -->
    <script type="text/html" id="belong">
        {{#  if(d.belong == 1){ }}
            套餐
        {{#  } else if(d.belong == 2){ }}
            认证
        {{#  } else if(d.belong == 3){ }}
            单次
        {{#  } else if(d.belong == 4){ }}
            学院超级会员
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
