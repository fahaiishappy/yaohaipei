<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:77:"G:\wamp64\www\hico\public/../application/admin\view\college\add_category.html";i:1623835896;}*/ ?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>新增公司</title>
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
	<link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
</head>

<body>
	<div class="layui-fluid">
		<div class="layui-row layui-col-space15">
			<div class="layui-col-md6">
				<form>
					<div class="layui-card">
						<div class="layui-card-header">所属上级</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12 layui-form">
								<select name="pid" id="pid" lay-verify="" lay-filter="pid">
									<option value="0">顶级分类</option>
									<?php if(is_array($cate) || $cate instanceof \think\Collection || $cate instanceof \think\Paginator): $i = 0; $__LIST__ = $cate;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
									<option value="<?php echo $vo['id']; ?>"><?php echo $vo['pre']; ?><?php echo $vo['name']; ?></option>
									<?php endforeach; endif; else: echo "" ;endif; ?>
								</select>
							</div>
						</div>
						<div class="layui-card-header">分类名称</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12">
								<input type="text" name="name" placeholder="请输入分类名称" autocomplete="off" class="layui-input">
							</div>
						</div>
						<div class="layui-card-header">排序</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12">
								<input type="text" name="sort" value="0" autocomplete="off" class="layui-input">
							</div>
						</div>
						<div class="layui-card layui-form">
							<div class="layui-card-header">是否启用</div>
							<div class="layui-card-body layui-row layui-col-space10">
								<div class="layui-col-md12">
									<input type="radio" name="status" value="1" title="启用" checked>
									<input type="radio" name="status" value="0" title="禁用">
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>


	<script src="/layuiadmin/layui/layui.js"></script>
	<script>
		layui.config({
			base: '/layuiadmin/' //静态资源所在路径
		}).extend({
			index: 'lib/index' //主入口模块
		}).use(['index', 'jquery', 'form'], function () {
			var $ = layui.$
				, admin = layui.admin
				, element = layui.element
				, form = layui.form;
				var table = layui.table;
			form.render(null, 'component-form-element');
			element.render('breadcrumb', 'breadcrumb');

			form.on('submit(component-form-element)', function (data) {
				layer.msg(JSON.stringify(data.field));
				return false;
			});
			form.render('select');
		});
	</script>
	<script>
		layui.use('layedit', function(){
			var layedit = layui.layedit;
			layedit.build('demo'); //建立编辑器
		});
	</script>
</body>

</html>