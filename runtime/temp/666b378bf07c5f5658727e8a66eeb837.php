<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:73:"G:\wamp64\www\yaohaipei\public/../application/admin\view\index\index.html";i:1629166939;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\head.html";i:1629166939;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\foot.html";i:1629166939;}*/ ?>
<!DOCTYPE html>
<html>

<head>
	<title>姚海培博客管理</title>
	<meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/static/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/static/admin/style/admin.css" media="all">
	<style type="text/css">
		.modify{cursor:pointer;}
	</style>
</head>

<body class="layui-layout-body">
	<div id="LAY_app">
		<div class="layui-layout layui-layout-admin">
			<div class="layui-header">
				<!-- 头部区域 -->
				<ul class="layui-nav layui-layout-left">
					<li class="layui-nav-item layadmin-flexible" lay-unselect>
						<a href="javascript:;" layadmin-event="flexible" title="侧边伸缩">
							<i class="layui-icon layui-icon-shrink-right" id="LAY_app_flexible"></i>
						</a>
					</li>
					<li class="layui-nav-item" lay-unselect>
						<a href="javascript:;" layadmin-event="refresh" title="刷新">
							<i class="layui-icon layui-icon-refresh-3"></i>
						</a>
					</li>
				</ul>
				<ul class="layui-nav layui-layout-right" lay-filter="layadmin-layout-right" style="margin-right: 40px">
					<li class="layui-nav-item layui-hide-xs" lay-unselect>
						<a href="javascript:;" layadmin-event="theme">
							<i class="layui-icon layui-icon-theme"></i>
						</a>
					</li>
					<li class="layui-nav-item layui-hide-xs" lay-unselect>
						<a href="javascript:;" layadmin-event="fullscreen">
							<i class="layui-icon layui-icon-screen-full"></i>
						</a>
					</li>
					<li class="layui-nav-item" lay-unselect>
						<a href="javascript:;">
							<cite>
								<?php if(!(empty($company) || (($company instanceof \think\Collection || $company instanceof \think\Paginator ) && $company->isEmpty()))): ?><?php echo $company; ?> - <?php endif; if(!(empty($company_dept) || (($company_dept instanceof \think\Collection || $company_dept instanceof \think\Paginator ) && $company_dept->isEmpty()))): ?><?php echo $company_dept; ?> - <?php endif; if(!(empty($manager['truename']) || (($manager['truename'] instanceof \think\Collection || $manager['truename'] instanceof \think\Paginator ) && $manager['truename']->isEmpty()))): ?><?php echo $manager['truename']; else: ?><?php echo $manager['username']; endif; if(!(empty($title) || (($title instanceof \think\Collection || $title instanceof \think\Paginator ) && $title->isEmpty()))): ?>(<?php echo $title; ?>)<?php endif; ?>
							</cite>
						</a>
						<dl class="layui-nav-child">
							<dd style="text-align: center;"><a class="modify" data-type="modify">修改个人信息</a></dd>
							<dd style="text-align: center;"><a href="<?php echo url('admin/login/logout'); ?>">退出</a></dd>
						</dl>
					</li>
				</ul>
			</div>

			<!-- 侧边菜单 -->
			<div class="layui-side layui-side-menu">
				<div class="layui-side-scroll">
					<div class="layui-logo" lay-href="<?php echo url('admin/index/console'); ?>">
						<span>姚海培博客管理</span>
					</div>

					<ul class="layui-nav layui-nav-tree" lay-shrink="all" id="LAY-system-side-menu"
						lay-filter="layadmin-system-side-menu">
						<?php if(is_array($authCategory) || $authCategory instanceof \think\Collection || $authCategory instanceof \think\Paginator): $i = 0; $__LIST__ = $authCategory;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$nav1): $mod = ($i % 2 );++$i;if(isset($nav1['children']) && !empty($nav1['children']) && is_array($nav1['children'])): ?>
								<li data-name="<?php echo $nav1['name']; ?>" class="layui-nav-item">
									<a href="javascript:;" lay-tips="<?php echo $nav1['title']; ?>" lay-direction="2">
										<?php if(!empty($nav1['icon'])): ?>
										<i class="layui-icon <?php echo $nav1['icon']; ?>"></i>
										<?php else: ?>
										<i class="layui-icon layui-icon-set"></i>
										<?php endif; ?>
										<cite><?php echo $nav1['title']; ?></cite>
									</a>
									<dl class="layui-nav-child">
										<?php if(is_array($nav1['children']) || $nav1['children'] instanceof \think\Collection || $nav1['children'] instanceof \think\Paginator): $i = 0; $__LIST__ = $nav1['children'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$nav2): $mod = ($i % 2 );++$i;?>
										<dd>
											<a lay-href="<?php echo url($nav2['name']); ?>"><?php echo $nav2['title']; ?></a>
										</dd>
										<?php endforeach; endif; else: echo "" ;endif; ?>
									</dl>
								</li>
							<?php else: ?>
								<li data-name="<?php echo $nav1['name']; ?>" class="layui-nav-item <?php if($nav1['title'] == '主页'): ?>layui-this<?php endif; ?>">
									<?php if($nav1['title'] == '主页'): ?>
										<a lay-href="<?php echo url('admin/index/console'); ?>">	
											<?php if(!empty($nav1['icon'])): ?>
											<i class="layui-icon <?php echo $nav1['icon']; ?>"></i>
											<?php else: ?>
											<i class="layui-icon layui-icon-set"></i>
											<?php endif; ?>
											<cite><?php echo $nav1['title']; ?></cite>
										</a>
									<?php else: ?>
										<a lay-href="<?php echo url($nav1['name']); ?>">	
										<?php if(!empty($nav1['icon'])): ?>
										<i class="layui-icon <?php echo $nav1['icon']; ?>"></i>
										<?php else: ?>
										<i class="layui-icon layui-icon-set"></i>
										<?php endif; ?>
										<cite><?php echo $nav1['title']; ?></cite>
									</a>
									<?php endif; ?>
								</li>
							<?php endif; endforeach; endif; else: echo "" ;endif; ?>
					</ul>
				</div>
			</div>

			<!-- 页面标签 -->
			<div class="layadmin-pagetabs" id="LAY_app_tabs">
				<div class="layui-icon layadmin-tabs-control layui-icon-prev" layadmin-event="leftPage"></div>
				<div class="layui-icon layadmin-tabs-control layui-icon-next" layadmin-event="rightPage"></div>
				<div class="layui-icon layadmin-tabs-control layui-icon-down">
					<ul class="layui-nav layadmin-tabs-select" lay-filter="layadmin-pagetabs-nav">
						<li class="layui-nav-item" lay-unselect>
							<a href="javascript:;"></a>
							<dl class="layui-nav-child layui-anim-fadein">
								<dd layadmin-event="closeThisTabs"><a href="javascript:;">关闭当前标签</a></dd>
								<dd layadmin-event="closeOtherTabs"><a href="javascript:;">关闭其它标签</a></dd>
								<dd layadmin-event="closeAllTabs"><a href="javascript:;">关闭全部标签</a></dd>
							</dl>
						</li>
					</ul>
				</div>
				<div class="layui-tab" lay-unauto lay-allowClose="true" lay-filter="layadmin-layout-tabs">
					<ul class="layui-tab-title" id="LAY_app_tabsheader">
						<li lay-id="<?php echo url('admin/index/console'); ?>" lay-attr="<?php echo url('admin/index/console'); ?>" class="layui-this"><i
								class="layui-icon layui-icon-home"></i></li>
					</ul>
				</div>
			</div>


			<!-- 主体内容 -->
			<div class="layui-body" id="LAY_app_body">
				<div class="layadmin-tabsbody-item layui-show">
					<iframe src="<?php echo url('admin/index/console'); ?>" frameborder="0" class="layadmin-iframe"></iframe>
				</div>
			</div>

			<!-- 辅助元素，一般用于移动设备下遮罩 -->
			<div class="layadmin-body-shade" layadmin-event="shade"></div>
		</div>
	</div>
	<script src="/static/admin/layui/layui.js"></script>
	<script>
		layui.config({
			base: '/static/admin/' //静态资源所在路径
		}).extend({
			index: 'lib/index' //主入口模块
		}).use(['index'], function(){
			var $ = layui.$
			,admin = layui.admin
			,element = layui.element
			,layer = layui.layer;

			element.render();

			/* 触发弹层 */
			var active = {
				modify: function(){
			    	layer.open({
		                type: 2
		                , title: '修改个人信息'
		                , shadeClose: true
		                , shade: 0.8
		                , area: ['50%', '60%']
		                , maxmin: false
		                , content: "<?php echo url('/admin/user/profile', array('id'=>$manager['id'])); ?>"
		                , btn: ['保存', '取消']
		                , yes: function (index, layero) {
		                    var body = layer.getChildFrame('body', index);
		                    var iframeWin = window[layero.find('iframe')[0]['name']];
		                    $.ajax({
		                        type: 'post',
		                        url: "<?php echo url('/admin/user/profile'); ?>",
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
		                            layer.alert('修改失败');
		                        }
		                    });
		                }
		                , btn2: function (index, layero) {
		                    layer.close(index);
		                }
		            });
				}
			};

			$('#LAY_app .modify').on('click', function(){
				var type = $(this).data('type');
				active[type] && active[type].call(this);
			});
		});
	</script>
</body>

</html>