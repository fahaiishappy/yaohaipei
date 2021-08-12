<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:66:"G:\wamp64\www\hico\public/../application/admin\view\role\auth.html";i:1597076571;}*/ ?>
 <!DOCTYPE html>
<html>

<head>
		<meta charset="utf-8">
		<title>新增公司</title>
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
		<link rel="stylesheet" href="/layuiadmin/layui_ext/eleTree/eleTree.css" media="all">
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

	<script src="/layuiadmin/layui/layui.js"></script>
	<script>
			layui.config({
					base: '/layuiadmin/layui_ext/eleTree/' //静态资源所在路径
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