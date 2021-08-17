<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:81:"G:\wamp64\www\yaohaipei\public/../application/admin\view\picture\article_img.html";i:1629166939;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\head.html";i:1629166939;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\foot.html";i:1629166939;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <title>文章图片</title>
    <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/static/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/static/admin/style/admin.css" media="all">
    <style type="text/css">
        tbody .layui-table-cell {height: 60px;line-height: 60px;}
        .layui-btn-disabled,
        .layui-btn-disabled:active,
        .layui-btn-disabled:hover{
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md12">
                <div class="layui-card">
                    <div class="layui-card-header">图片列表</div>
                    <div class="layui-card-body">
                        <div class="test-table-reload-btn" style="margin-bottom: 10px;">
                            <div class="layui-inline layui-form">
                                <div style="width: 150px;">
                                    <select name="search_pid" id="search_pid">
                                        <option value="">使用情况</option>
                                        <option value="1">使用中</option>
                                        <option value="2">未使用</option>
                                    </select>
                                </div>
                            </div>
                            <button class="layui-btn" data-type="reload">搜索</button>
                            <button class="layui-btn" data-type="refresh">刷新</button>
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
        }).use(['util', 'index', 'table', 'laydate'], function () {
            var table = layui.table;
            var laydate = layui.laydate;
            var util = layui.util;

            //列表渲染
            table.render({
                elem: '#test-table-reload'
                , url: '<?php echo url("/admin/picture/article_img"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                    { checkbox: true, fixed: true}
                    , { field: 'id', title: 'ID', align: 'center', width:80, fixed: true}
                    , { field: 'pid', title: '文章ID', align: 'center', width:80}
                    , { field: 'name', title: '文章图片', align: 'center', width:200, templet: '#img', event: "img"}
                    , { field: 'title', title: '文章标题'}
                    , { title: '操作', align: 'center', width:136, toolbar: '#test-table-reload-barDemo' }
                ]]
                , page: true
                , height: 'full-140'
            });

            // 搜索
            var $ = layui.$, active = {
                reload: function () {
                    //执行重载
                    table.reload('test-table-reload', {
                        page: {
                            curr: 1 //重新从第 1 页开始
                        }
                        , where: {
                            search_pid: $('#search_pid').val(),
                        }
                    });
                },
                refresh: function () {
                    $.ajax({
                        type: 'post',
                        url: "<?php echo url('/admin/picture/update_article_img'); ?>",
                        success: function (res) {
                            layer.alert('刷新成功', function () {
                                //执行重载
                                table.reload('test-table-reload', {
                                    page: {
                                        curr: 1 //重新从第 1 页开始
                                    }
                                    , where: {
                                        search_pid: $('#search_pid').val(),
                                    }
                                });
                                layer.closeAll();
                            });
                        },
                        error: function () {
                            layer.alert('刷新失败');
                        }
                    });
                    
                },
            };

            //监听工具条
            table.on('tool(test-table-reload)', function (obj) {
                var data = obj.data;
                if(obj.event === 'img'){
                    var img = new Image();
                    img.src = '/uploads/articleimg/'+data.name;
                    var height = window.screen.availHeight-300; //获取图片高度
                    var width = window.screen.availWidth-400; //获取图片宽度
                    var imgHtml = "<img src='/uploads/articleimg/" + data.name + "' />";  
                    //弹出层
                    layer.open({  
                        type: 1,  
                        shade: 0.8,
                        offset: 'auto',
                        area: [width + 'px',height+'px'],
                        shadeClose:true,//点击外围关闭弹窗
                        scrollbar: false,//不现实滚动条
                        title: "图片预览", //不显示标题  
                        content: imgHtml, //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响  
                        cancel: function () {  
                            //layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构', { time: 5000, icon: 6 });  
                        }  
                    }); 
                } else if (obj.event === 'del') {
                    layer.confirm('删除图片', function (index) {
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/picture/del'); ?>",
                            data: {
                                id: data.id
                            },
                            success: function (res) {
                                layer.alert(res.msg, function () {
                                    obj.del();
                                    layer.closeAll();
                                });
                            },
                            error: function () {
                                layer.alert('删除banner失败');
                            }
                        });
                    });
                }
            });

            // 监听按钮事件
            $('.test-table-reload-btn .layui-btn').on('click', function () {
                var type = $(this).data('type');
                active[type] ? active[type].call(this) : '';
            });
        });
        
    </script>

    <!-- 封面 -->
    <script type="text/html" id="img">
        <img style="max-width:100%; height: 45px; border-radius: 5px" src="/uploads/articleimg/{{d.name}}">
    </script>

    <!-- 操作 -->
    <script type="text/html" id="test-table-reload-barDemo">
        {{#  if(d.pid == 0){ }}
            <a class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</a>  
        {{#  } }}
    </script>
    </body>

</html>
