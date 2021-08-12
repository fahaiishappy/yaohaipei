<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:71:"G:\wamp64\www\yaohaipei\public/../application/admin\view\role\auth.html";i:1626926141;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\head.html";i:1626926141;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\foot.html";i:1626926140;}*/ ?>
 <!DOCTYPE html>
<html>

<head>
	<title>新增公司</title>
	<meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/static/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/static/admin/style/admin.css" media="all">
	<link rel="stylesheet" href="/static/admin/layui_ext/eleTree/eleTree.css" media="all">
</head>

<body>
	<div class="layui-fluid">
		<div class="layui-row layui-col-space15">
			<div class="layui-col-md6">
				<form>
					<div class="eleTree ele1" ></div>
				</form>
			</div>
		</div>
	</div>
	<script src="/static/admin/layui/layui.js"></script>
	<script>
			layui.config({
					base: '/static/admin/layui_ext/eleTree/' //静态资源所在路径
			}).extend({
					index: 'lib/index' //主入口模块
			}).use(['jquery','eleTree'], function () {
				var $ = layui.jquery;
            	var eleTree = layui.eleTree;

				//基本演示
				eleTree.render({
					elem: '.ele1',
					data: <?php echo $authtree; ?>,
					defaultExpandAll: true,// 是否默认展开所有节点
					showCheckbox: true,// 节点是否可被选择
					checkStrictly: true,// 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法
					showLine: true,//是否显示连线
					drag: true,
               		accordion: true
				});
			});
	</script>
</body>

</html>