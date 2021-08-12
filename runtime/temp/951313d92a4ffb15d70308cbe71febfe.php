<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:70:"G:\wamp64\www\hico\public/../application/index\view\college\index.html";i:1610510498;s:58:"G:\wamp64\www\hico\application\index\view\common\head.html";i:1609814743;s:58:"G:\wamp64\www\hico\application\index\view\common\menu.html";i:1610788154;s:58:"G:\wamp64\www\hico\application\index\view\common\foot.html";i:1608974931;}*/ ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<link rel="stylesheet" href="../../layuiadmin/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="../../layuiadmin/style/admin.css" media="all">
		<title>红人学院-红人速推</title>
		<meta name="keywords" content="红人学院-红人速推">
		<meta name="description" content="红人速推 | 网红直播带货一站式服务平台">
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
			<div class="article clearfix">
				<div class="article_list">
					<div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
					  <ul class="layui-tab-title">
					  	<?php if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): $k = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;?>
						    <li class="collegeclassify <?php if($vo['id'] == $categoryid): ?>layui-this<?php endif; ?>" data-id="<?php echo $vo['id']; ?>"><?php echo $vo['name']; ?></li>
					    <?php endforeach; endif; else: echo "" ;endif; ?>
					  </ul>
					  <div class="layui-tab-content">
					  	<?php if(is_array($list) || $list instanceof \think\Collection || $list instanceof \think\Paginator): $key = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
						    <div class="layui-tab-item <?php if($vo['id'] == $categoryid): ?>layui-show<?php endif; ?>">
						    	<ul id="view">
						    		<?php if(is_array($vo['article']) || $vo['article'] instanceof \think\Collection || $vo['article'] instanceof \think\Paginator): $k = 0; $__LIST__ = $vo['article'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($k % 2 );++$k;?>
									    <li class="strip">
											<a href="/college/<?php echo $v['id']; ?>.html">
												<div class="article_img">
													<?php if($v['img']): ?>
														<img src="<?php echo $v['img']; ?>">
													<?php else: ?>
														<img src="https://www.hongrensutui.com/h5/img/nopic2.png">
													<?php endif; ?>
												</div>
												<div class="article_subject">
													<div class="article_title ellipsis"><?php echo $v['title']; ?></div>
													<div class="article_see">
														<div class="category">
															<div class="sort layui-badge layui-bg-orange"><?php echo $v['category']; ?></div>
														</div>
														<div class="hits"><i class="iconfont">&#xe982;</i><?php echo $v['views']; ?></div>
													</div>
													<?php if($v['file']): if($v['card_id'] > 1): ?>
															<div class="downloadtips" style="background: rgba(225,255,255,0.4);border:none;">
																<object><a href="<?php echo $v['file']; ?>" style="font-size: 16px;color:#FFB800;"><?php echo $v['filename']; ?></a></object>
															</div>
														<?php else: ?>
															<div class="downloadtips">您需要加入<?php echo $v['category']; ?>，才能下载此带货资料！</div>
														<?php endif; else: ?>
														<div class="article_brief ellipsis3"><?php echo $v['brief']; ?></div>
													<?php endif; ?>
												</div>
											</a>
										</li>
								    <?php endforeach; endif; else: echo "" ;endif; ?>
						    	</ul>
						    </div>
					     <?php endforeach; endif; else: echo "" ;endif; ?>
					     <div id="article_page"></div>
					  </div>
					</div>
				</div>
				<div class="hot_list clearfix">
					<div class="title">热门推荐</div>
					<ul>
						<?php if(is_array($hot) || $hot instanceof \think\Collection || $hot instanceof \think\Paginator): $i = 0; $__LIST__ = $hot;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
							<li class="hotstrip">
								<a href="/college/<?php echo $vo['id']; ?>.html">
									<div class="hottitle ellipsis2"><?php echo $vo['title']; ?></div>
									<div class="hottsee">
										<div><?php echo date("Y-m-d",$vo['addtime']); ?></div>
										<div><i class="iconfont">&#xe982;</i><?php echo $vo['views']; ?></div>
									</div>
								</a>
						    </li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
					</ul>
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
		layui.use(['util','laypage', 'layer','laytpl'], function(){
			var $ = layui.$
  				,laypage = layui.laypage
  				,layer = layui.layer
  				,util = layui.util
  				,laytpl = layui.laytpl;

			//初始分页
			laypage.render({
				elem: 'article_page'
				, count: <?php echo $count; ?>		//数据总数
                , limit: <?php echo $listlimit; ?>	//每页显示条数
                , limits: [10, 20, 30]
                , curr: <?php echo $listpage; ?>		//起始页
                , groups: 5				//连续页码个数
                , prev: '上一页'			//上一页文本
                , netx: '下一页'			//下一页文本
				,layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip']
				,jump: function(obj, first){
					console.log(obj);
					if(obj.limit == 1){
						var limit =10;
					}else{
						var limit =obj.limit;
					}
					//首次不执行
			        if (!first) {
  						window.location.replace("https://www.hongrensutui.com/index/college/index.html?categoryid="+<?php echo $categoryid; ?>+"&page="+obj.curr+"&limit="+limit);
			        }
				}
			});

  			$('.collegeclassify').click(function () {
  				var categoryid = $(this).data('id');
  				window.location.replace("https://www.hongrensutui.com/index/college/index.html?categoryid="+categoryid+"&page=1&limit=10");
  			});
		});
	</script>
</html>
