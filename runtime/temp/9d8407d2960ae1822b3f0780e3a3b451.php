<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:68:"G:\wamp64\www\hico\public/../application/index\view\speed\index.html";i:1610097824;s:58:"G:\wamp64\www\hico\application\index\view\common\head.html";i:1609814743;s:58:"G:\wamp64\www\hico\application\index\view\common\menu.html";i:1610788154;s:58:"G:\wamp64\www\hico\application\index\view\common\foot.html";i:1608974931;}*/ ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<link rel="stylesheet" href="../../layuiadmin/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="../../layuiadmin/style/admin.css" media="all">
		<title>红人速配-红人速推</title>
		<meta name="keywords" content="红人速配-红人速推">
		<meta name="description" content="红人速推-红人速配">
		<link rel="stylesheet" href="../../index/css/index.css" media="all">
	</head>
	<body>
		<div class="head">
			<div class="inside">
				<div class="logo">
					<img src="https://www.hongrensutui.com/h5/img/logo_750_banner.png">
				</div>
				<div class="navigation">
	<ul class="layui-nav" lay-filter="">
		<li class="layui-nav-item <?php if($page == 'index'): ?> layui-this<?php endif; ?>">
			<a href="<?php echo url('index/index/index'); ?>">首页</a>
		</li>
		<li class="layui-nav-item <?php if($page == 'speed'): ?> layui-this<?php endif; ?>">
			<a href="<?php echo url('index/speed/index'); ?>">红人速配</a>
		</li>
		<li class="layui-nav-item <?php if($page == 'college'): ?> layui-this<?php endif; ?>">
			<a href="<?php echo url('index/college/index'); ?>?categoryid=1&page=1&limit=10">带货学院</a>
		</li>
		<li class="layui-nav-item <?php if($page == 'information'): ?> layui-this<?php endif; ?>">
			<a href="<?php echo url('index/information/index'); ?>">红人资讯</a>
		</li>
		<li class="layui-nav-item <?php if($page == 'settled'): ?> layui-this<?php endif; ?>">
			<a href="<?php echo url('index/settled/merchant'); ?>">入驻中心</a>
		</li>
	</ul>

	<ul class="layui-nav center">
	  <li class="layui-nav-item">
	  	<input type="hidden" id="userid" value="<?php echo $userInfo['id']; ?>">
	  	<?php if(empty($userInfo) || (($userInfo instanceof \think\Collection || $userInfo instanceof \think\Paginator ) && $userInfo->isEmpty())): ?>
			<a href="javascript:;" class="login">登录</a>
		<?php else: ?>
			<a href="javascript:;"><img src="<?php echo $userInfo['avatar']; ?>" class="layui-nav-img"><?php echo $userInfo['nickname']; ?></a>
			<dl class="layui-nav-child">
				<dd><a href="<?php echo url('index/personal/index'); ?>">个人中心</a></dd>
				<dd><a href="javascript:;" id="logout">退出登录</a></dd>
		    </dl>
		<?php endif; ?>
	  </li>
	</ul>
</div>

<ul class="fix_bar">
    <li class="layui-icon layui-fixbar-top" id="to_top" title="返回顶部" style="display: none">
    	<i class="layui-icon layui-icon-up"></i>
    </li>
</ul>
			</div>
		</div>
		<div class="main" style="margin-top: 60px">
			<div class="major">
				<div class="card" style="min-height: 490px; position: relative;padding-bottom: 100px">
					<div class="layui-progress layui-progress-big" lay-showpercent="true" lay-filter="demo">
						<div class="layui-progress-bar layui-bg-red" lay-percent="1/5"></div>
					</div>
					<form class="layui-form speed" action="">
						<input type="hidden" id="userid" name="userid" value="<?php echo $userInfo['id']; ?>">
						<input type="hidden" id="mobile" name="mobile" value="<?php echo $userInfo['mobile']; ?>">
						<div class="speed1 active">
							<div class="title">您的商品属于什么类目？</div>
							<div class="layui-form-item" style="padding-left: 60px">
								<div class="layui-input-block">
									 <div class="layui-col-md12">
										<?php if(is_array($realm) || $realm instanceof \think\Collection || $realm instanceof \think\Paginator): $i = 0; $__LIST__ = $realm;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;if($vo['pid'] == 0): ?>
											<div class="realmtitle"><?php echo $vo['name']; ?></div>
												<?php if(is_array($realm) || $realm instanceof \think\Collection || $realm instanceof \think\Paginator): $i = 0; $__LIST__ = $realm;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;if($v['pid'] == $vo['id']): ?>
														<input type="checkbox" lay-filter="realm" name="category[]" data-pid="<?php echo $v['pid']; ?>" value="<?php echo $v['id']; ?>" title="<?php echo $v['name']; ?>">
													<?php endif; endforeach; endif; else: echo "" ;endif; endif; endforeach; endif; else: echo "" ;endif; ?>
									</div>
								</div>
							</div>
							<div class="button">
								<div class="step" data-speed="2">下一步</div>
							</div>
						</div>
						<div class="speed2">
							<div class="title">您希望网红性别是？</div>
							<div class="layui-form-item">
								<div class="layui-input-block">
									 <div class="layui-col-md12 sex">
									 	<div class="radio">
											<input class="hide" id="sex-1" name="sex" type="radio" value="3">
											<label for="sex-1" class="radio-label">不限</label>
										</div>
										<div class="radio">
											<input class="hide" id="sex-2" name="sex" type="radio" value="1">
											<label  for="sex-2" class="radio-label">男</label>
										</div>
										<div class="radio">
											<input class="hide" id="sex-3" name="sex" type="radio" value="2">
											<label for="sex-3" class="radio-label">女</label>
										</div>
									</div>
								</div>
							</div>
							<div class="button">
								<div class="step" data-speed="1">上一步</div>
								<div class="step" data-speed="3">下一步</div>
							</div>
						</div>
						<div class="speed3">
							<div class="title">您希望网红的平台是？</div>
							<div class="layui-form-item">
								<div class="layui-input-block">
									 <div class="layui-col-md12 platform">
									 	<div class="radio">
											<input class="hide" id="platform-1" name="platform" type="radio" value="3">
											<label for="platform-1" class="radio-label">不限</label>
										</div>
										<div class="radio">
											<input class="hide" id="platform-2" name="platform" type="radio" value="1">
											<label for="platform-2" class="radio-label">抖音</label>
										</div>
										<div class="radio">
											<input class="hide" id="platform-3" name="platform" type="radio" value="2">
											<label for="platform-3" class="radio-label">快手</label>
										</div>
									</div>
								</div>
							</div>
							<div class="button">
								<div class="step" data-speed="2">上一步</div>
								<div class="step" data-speed="4">下一步</div>
							</div>
						</div>
						<div class="speed4">
							<div class="title">您希望网红的粉丝量有多少？</div>
							<div class="layui-form-item">
								<div class="layui-input-block">
									 <div class="layui-col-md12 fans">
									 	<div class="radio">
											<input class="hide" id="fans-1" name="fans" type="radio" value="99">
											<label for="fans-1" class="radio-label">不限</label>
										</div>
										<div class="radio">
											<input class="hide" id="fans-2" name="fans" type="radio" value="10">
											<label for="fans-2" class="radio-label">10w以下</label>
										</div>
										<div class="radio">
											<input class="hide" id="fans-3" name="fans" type="radio" value="100">
											<label for="fans-3" class="radio-label">10w~100w</label>
										</div>
										<div class="radio">
											<input class="hide" id="fans-4" name="fans" type="radio" value="500">
											<label for="fans-4" class="radio-label">100w~500w</label>
										</div>
										<div class="radio">
											<input class="hide" id="fans-5" name="fans" type="radio" value="1000">
											<label for="fans-5" class="radio-label">500w~1000w</label>
										</div>
										<div class="radio">
											<input class="hide" id="fans-6" name="fans" type="radio" value="1001">
											<label for="fans-6" class="radio-label">1000w以上</label>
										</div>
									</div>
								</div>
							</div>
							<div class="button">
								<div class="step" data-speed="3">上一步</div>
								<button type="submit" class="layui-btn" lay-submit="" lay-filter="demo1">立即速配</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="footer">
		Copyright © 2020 合肥玩转网络科技有限公司 版权所有 皖ICP备20003451号-2
</div>
<script src="/layuiadmin/layui/layui.js"></script>
<script src="/index/js/index.js"></script>
	</body>
	<script>
		layui.use(['index', 'form', 'element','layer'], function(){
			var $ = layui.$
				,element = layui.element //Tab的切换功能，切换事件监听等，需要依赖element模块
				,form = layui.form
				,mobile = $('#mobile').val()
				,percentage = 25
				,progress = 4;

			var userid = $('#userid').val();
	        if(!userid){
				$('.login').trigger("click");
			}

			var categoryid = [];
			var categorypid = [];
			form.on('checkbox(realm)', function(data){
				if(data.elem.checked){
					if($.inArray(categoryid,data.elem.value) == -1){
						categoryid.push(data.elem.value);
						categorypid.push($(data.elem).data('pid'));
					}
				}else{
					var position = categoryid.indexOf(data.elem.value);
					if(position != -1){
						categoryid.splice(position,1);
						categorypid.splice(position,1);
					}
				}
			});

			$('.sex .radio-label').click(function () {
				$('.sex .radio-label').removeClass('active');
				$(this).addClass('active');
			});
			$('.platform .radio-label').click(function () {
				$('.platform .radio-label').removeClass('active');
				$(this).addClass('active');
			});
			$('.fans .radio-label').click(function () {
				$('.fans .radio-label').removeClass('active');
				$(this).addClass('active');
			});

			$('.layui-progress-bar').attr('lay-percent','1/'+progress);
			element.init();
			element.progress('demo', percentage+'%')

			$('.step').click(function () {
				if(!userid){
					$('.login').trigger("click");
					return false
				}
				var speed = $(this).data('speed');
				if(speed == 2){
					if(categoryid.length == 0) {
						layer.msg('至少选择一个商品类目！', {icon: 5});
						return false;
					}
				}
				if(speed == 3){
					var sex = $(".sex input[type='radio']:checked").val();
					if(!sex) {
						layer.msg('请选择网红性别！', {icon: 5});
						return false;
					}
				}
				if(speed == 4){
					var platform = $(".platform input[type='radio']:checked").val();
					if(!platform) {
						layer.msg('请选择网红所属平台！', {icon: 5});
						return false;
					}
				}
				$('.speed'+speed).addClass('active').siblings().removeClass('active');
				$('.layui-progress-bar').attr('lay-percent',speed+'/'+progress);
				element.init();
				element.progress('demo', percentage*speed+'%')

				//监听提交
				form.on('submit(demo1)', function(data){
					var fans = $(".fans input[type='radio']:checked").val();
					if(!fans) {
						layer.msg('请选择网红粉丝量！', {icon: 5});
						return false;
					}
					if(!mobile){
						layer.prompt({title: '最后一步啦，填写手机号查看结果！'}, function(pass, index){
							layer.close(index);
							var verif = /^1[3|4|5|7|8|9]\d{9}$/;
							if(!verif.test(pass)){
			                	layer.msg('请输入正确手机号!', {icon: 5});
								return false;
			                }else{
			                	window.location.replace("https://www.hongrensutui.com/index/speed/mate.html?categoryid="+categoryid.toString()+"&categorypid="+categorypid.toString()+"&sex="+data.field.sex+"&platform="+data.field.platform+"&fans="+data.field.fans+"&mobile="+pass+"&userid="+userid);
			                }
						});
						return false;
					}else{
						window.location.replace("https://www.hongrensutui.com/index/speed/mate.html?categoryid="+categoryid.toString()+"&categorypid="+categorypid.toString()+"&sex="+data.field.sex+"&platform="+data.field.platform+"&fans="+data.field.fans+"&mobile="+data.field.mobile+"&userid="+userid);
						return false;
					}     
				});
			});
		});
	</script>
</html>
