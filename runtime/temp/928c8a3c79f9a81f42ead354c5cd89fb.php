<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:66:"G:\wamp64\www\hico\public/../application/admin\view\log\index.html";i:1624347343;s:58:"G:\wamp64\www\hico\application\admin\view\common\head.html";i:1624346804;s:58:"G:\wamp64\www\hico\application\admin\view\common\foot.html";i:1624346639;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <title>系统日志</title>
    <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/admin/style/admin.css" media="all">
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
                    <div class="layui-card-header">系统日志</div>
                    <div class="layui-card-body">
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
        }).use(['util','table'], function () {
            var table = layui.table;
            var util = layui.util;

            //方法级渲染
            table.render({
                elem: '#test-table-reload'
                , url: '<?php echo url("admin/log/index"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                    { checkbox: true, fixed: true}
                    , { field: 'id', title: 'ID', align: 'center', width:80, sort: true, fixed: true}
                    , { field: 'description', title: '行为描述', align: 'center', width:120, sort: true}
                    , { field: 'url', title: 'URL', align: 'center', width:200}
                    , { field: 'key', title: '数据主键', align: 'center', width:120}
                    , { field: 'ip', title: '登录ip', align: 'center', width:150}
                    , { field: 'addtime', title: '操作时间', width: 160, align: "center", 
                        templet: function (d) {
                          if(d.addtime >0){
                            return util.toDateString(d.addtime * 1000, "yyyy-MM-dd HH:mm:ss");
                          }else{
                            return '<button class="layui-btn layui-btn-xs layui-btn-disabled layui-btn-radius">无</button>';
                          } 
                        }}
                    , { field: 'operatorname', title: '操作人(ID)', align: "center", width: 100}
                ]]
                , page: true
                , height: 'full-140'
            });
        });
    </script>
</body>
</html>
