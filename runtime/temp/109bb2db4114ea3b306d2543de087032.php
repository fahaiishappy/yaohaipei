<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:69:"G:\wamp64\www\hico\public/../application/admin\view\classify\add.html";i:1626744120;s:58:"G:\wamp64\www\hico\application\admin\view\common\head.html";i:1624346804;s:58:"G:\wamp64\www\hico\application\admin\view\common\foot.html";i:1624346639;}*/ ?>
<!DOCTYPE html>
<html>

<head>
	<title>新增<?php if($label == 1): ?>标签<?php else: ?>分类<?php endif; ?></title>
	<meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/admin/style/admin.css" media="all">
</head>

<body>
	<div class="layui-fluid">
		<div class="layui-row layui-col-space15">
			<div class="layui-col-md6">
				<form>
					<div class="layui-card">
						<?php if($label == 1): ?>
							<div class="layui-card-header">所属分类</div>
							<div class="layui-card-body layui-row layui-col-space10">
								<div class="layui-col-md12 layui-form">
									<select name="pid" id="pid" lay-verify="" lay-filter="pid">
										<?php if(is_array($cate) || $cate instanceof \think\Collection || $cate instanceof \think\Paginator): $i = 0; $__LIST__ = $cate;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;if($vo['pid'] == 0 && $vo['id'] == $id): ?>
												<option value="<?php echo $vo['id']; ?>" selected><?php echo $vo['pre']; ?><?php echo $vo['name']; ?></option>
											<?php endif; endforeach; endif; else: echo "" ;endif; ?>
									</select>
								</div>
							</div>
							<div class="layui-card-header">背景色</div>
							<div class="layui-card-body layui-row layui-col-space10">
								<div class="layui-col-md12" style="display: flex;">
									<input type="text" name="background" autocomplete="off" class="layui-input">
									<div id="colorpicker"></div>
								</div>
							</div>
						<?php else: ?>
							<input type="hidden" name="pid" value="0">
						<?php endif; ?>
						<div class="layui-card-header"><?php if($label == 1): ?>标签名称<?php else: ?>分类名称<?php endif; ?></div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12">
								<input type="text" name="name" placeholder="请输入<?php if($label == 1): ?>标签名称<?php else: ?>分类名称<?php endif; ?>" autocomplete="off" class="layui-input">
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
	<script src="/admin/layui/layui.js"></script>
	<script>
		layui.config({
			base: '/admin/' //静态资源所在路径
		}).extend({
			index: 'lib/index' //主入口模块
		}).use(['colorpicker', 'index', 'jquery', 'form'], function () {
			var $ = layui.$
				, admin = layui.admin
				, element = layui.element
				, colorpicker = layui.colorpicker
				, form = layui.form;
			colorpicker.render({
				elem: '#colorpicker', //绑定元素
				color: 'blue',
				change: function(color){
			      $('input[name="background"]').val(color)
			    }
			});
			form.render(null, 'component-form-element');
			element.render('breadcrumb', 'breadcrumb');

			form.on('submit(component-form-element)', function (data) {
				layer.msg(JSON.stringify(data.field));
				return false;
			});
			form.render('select');
		});
	</script>
</body>

</html>