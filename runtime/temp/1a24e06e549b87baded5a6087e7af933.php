<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:74:"G:\wamp64\www\hico\public/../application/index\view\cewebrity\details.html";i:1610788188;s:58:"G:\wamp64\www\hico\application\index\view\common\head.html";i:1609814743;s:58:"G:\wamp64\www\hico\application\index\view\common\menu.html";i:1610788154;s:58:"G:\wamp64\www\hico\application\index\view\common\foot.html";i:1608974931;}*/ ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<link rel="stylesheet" href="../../layuiadmin/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="../../layuiadmin/style/admin.css" media="all">
		<title><?php echo $info['nickname']; ?>-红人详情-红人速推</title>
		<meta name="keywords" content="<?php echo $info['nickname']; ?>-红人详情-红人速推">
		<meta name="description" content="红人速推-学院文章详情-<?php echo $info['nickname']; ?>">
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
			<div style="width: 100%;margin: 15px 0;">
				<div class="nav-left" style="text-align: center;">
					<img class="avatar" src="<?php echo $info['avatar']; ?>">
					<div class="nickname">
						<?php if($userInfo['card_id'] > 1): ?>
							<?php echo $info['nickname']; else: ?>
							<?php echo mb_substr($info['nickname'],0,1,'utf-8'); ?>****
						<?php endif; ?>
					</div>
					<input type="hidden" id="collectid" value="<?php echo $info['id']; ?>">
					<?php if($type == 1): ?>
						<div class="follow user-select active" id="attention">已关注</div>
					<?php else: ?>
						<div class="follow user-select" id="attention">加入关注</div>
					<?php endif; ?>
					
				</div>
				<div class="form-right">
					<div class="layui-tab" style="margin: 0">
						<ul class="layui-tab-title">
							<li class="layui-this">资料卡</li>
							<li>粉丝画像</li>
						</ul>
						<div class="layui-tab-content">
							<div class="layui-tab-item layui-show">
								<div class="item">红人昵称：
									<span class="title">
										<?php if($userInfo['card_id'] > 1): ?>
											<?php echo $info['nickname']; else: ?>
											<?php echo mb_substr($info['nickname'],0,1,'utf-8'); ?>****
										<?php endif; ?>
									</span>
								</div>
								<div class="item">入驻平台：
									<span class="title"><?php echo $info['platform']; ?></span>
								</div>
								<div class="item">拥有粉丝：
									<span class="title"><?php echo $info['fans']; ?>w</span>
								</div>
								<div class="item">带货领域：
									<?php if(is_array($info['category']) || $info['category'] instanceof \think\Collection || $info['category'] instanceof \think\Paginator): $i = 0; $__LIST__ = $info['category'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
										<span class="badge"><?php echo $vo; ?></span>
									<?php endforeach; endif; else: echo "" ;endif; ?>
								</div>
								<div class="item">合作形式：
									<?php if(is_array($info['cooperation']) || $info['cooperation'] instanceof \think\Collection || $info['cooperation'] instanceof \think\Paginator): $i = 0; $__LIST__ = $info['cooperation'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
										<span class="badge"><?php echo $vo; ?></span>
									<?php endforeach; endif; else: echo "" ;endif; ?>
								</div>
								<div class="item">微信号码：
									<?php if(empty($userInfo) || (($userInfo instanceof \think\Collection || $userInfo instanceof \think\Paginator ) && $userInfo->isEmpty())): ?>
										<a href="javascript:;" class="login">登录后查看</a>
									<?php else: if($userInfo['card_id'] > 0): ?>
											<?php echo $info['wechat_work']; else: ?>
											<a href="javascript:;" class="member">会员免费查看</a>
										<?php endif; endif; ?>
								</div>
								<div class="item">谁关注他：
									<?php if(is_array($info['purpose']) || $info['purpose'] instanceof \think\Collection || $info['purpose'] instanceof \think\Paginator): $i = 0; $__LIST__ = $info['purpose'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
										<img class="purpose" src="<?php echo $vo; ?>">
									<?php endforeach; endif; else: echo "" ;endif; ?>
									<span>等<?php echo $info['people']; ?>人感兴趣</span>
								</div>
							</div>
							<div class="layui-tab-item">
								<?php if($info['fshx']): ?>
									<img class="fshx" src="<?php echo $info['fshx']; ?>">
								<?php else: ?>
									<div class="nodata">暂无数据</div>
								<?php endif; ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
		Copyright © 2020 合肥玩转网络科技有限公司 版权所有 皖ICP备20003451号-2
</div>
<script src="/layuiadmin/layui/layui.js"></script>
<script src="/index/js/index.js"></script>
	</body>
</html>
