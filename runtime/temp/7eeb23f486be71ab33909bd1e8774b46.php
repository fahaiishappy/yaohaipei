<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:75:"G:\wamp64\www\yaohaipei\public/../application/admin\view\index\console.html";i:1626926141;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\head.html";i:1626926141;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\foot.html";i:1626926140;}*/ ?>
<!DOCTYPE html>
<html>
<head>
	<title>欢迎页</title>
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
		</div>
	</div>
	<script src="/static/admin/layui/layui.js"></script>
	<script>
		layui.config({
			base: '/static/admin/' //静态资源所在路径
		}).extend({
			index: 'lib/index' //主入口模块
		}).use(['index', 'sample', 'echarts'], function(){
			
		});
	</script>
</body>
</html>
