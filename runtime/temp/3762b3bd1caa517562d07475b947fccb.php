<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:74:"G:\wamp64\www\yaohaipei\public/../application/admin\view\banner\index.html";i:1629166939;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\head.html";i:1629166939;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\foot.html";i:1629166939;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <title>banner列表</title>
    <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/static/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/static/admin/style/admin.css" media="all">
    <style type="text/css">
        tbody .layui-table-cell {height: 120px;line-height: 120px;}
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
                    <div class="layui-card-header">banner列表</div>
                    <div class="layui-card-body">
                        <div class="test-table-reload-btn" style="margin-bottom: 10px;">
                            <div class="layui-inline">
                                <input class="layui-input" name="search_title" id="search_title" autocomplete="off" placeholder="请输入标题">
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
                            <button class="layui-btn layui-btn-danger btn-add">新增banner</button>
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
                , url: '<?php echo url("admin/banner/index"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                    { checkbox: true, fixed: true}
                    , { field: 'id', title: 'ID', align: 'center', width:70, sort: true, fixed: true}
                    , { field: 'sort', title: '排序', align: 'center', width:70, sort: true, fixed: true}
					, { field: 'img', title: 'banner图片', align: 'center', templet: '#img', event: "img"}
                    , { field: 'title', title: 'banner标题'}
                    , { field: 'link', title: '跳转地址'}
                    , { field: 'page', title: '所属页面', align: 'center'}
                    , { field: 'position', title: 'banner位置', align: 'center', templet: '#position'}
                    , { field: 'status', title: '状态', align: "center", width:100, event: "status", style:'cursor: pointer;', templet: "#status" }
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
                            search_title: $('#search_title').val(),
                            search_status: $('#search_status').val(),
                        }
                    });
                }
            };

            // 新增banner
            $('.btn-add').click(function () {
                layer.open({
                    type: 2
                    , title: '添加banner'
                    , shadeClose: true
                    , shade: 0.8
                    , area: ['50%', '90%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/banner/add'); ?>"
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/banner/add'); ?>",
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
                                layer.alert('添加banner失败');
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
                if(obj.event === 'img'){

                    var img = new Image();
                    img.src = data.img;
                    var height = window.screen.availHeight-300; //获取图片高度
                    var width = window.screen.availWidth-400; //获取图片宽度
                    var imgHtml = "<img src='" + data.img + "' />";  
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
                } else if(obj.event === 'status'){
                    $.ajax({
                        type: 'post',
                        url: "<?php echo url('/admin/banner/change_status'); ?>",
                        data: { 
                            id: data.id,
                            status: data.status == 0 ? 1 : 0,
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
                } else if (obj.event === 'del') {
                    layer.confirm('删除banner', function (index) {
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/banner/del'); ?>",
                            data: {
                                id: data.id,
                                img: data.img
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
                } else if (obj.event === 'edit') {
                    layer.open({
                        type: 2
                        , title: '修改banner'
                        , shadeClose: true
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/banner/edit'); ?>" + '?id=' + data.id
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/banner/edit'); ?>" + '?id=' + data.id,
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
                                    layer.alert('修改banner失败');
                                }
                            });
                        }
                        , btn2: function (index, layero) {
                            layer.close(index);
                        }
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
        <img style="max-width:200px; height: 100px; border-radius: 5px" src="{{d.img}}">
    </script>

    <!-- 分类 -->
    <script type="text/html" id="position">
        {{#  if(d.position == 1){ }}
            头部
        {{#  } else if(d.position == 2){ }}
            中部
        {{#  } else if(d.position == 3){ }}
            尾部
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

    <!-- 操作 -->
    <script type="text/html" id="test-table-reload-barDemo">
        <a class="layui-btn layui-btn-sm layui-btn-warm" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</a>
    </script>
    </body>

</html>
