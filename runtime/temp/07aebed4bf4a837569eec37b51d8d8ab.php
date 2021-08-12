<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:74:"G:\wamp64\www\hico\public/../application/index\view\information\index.html";i:1610010506;s:58:"G:\wamp64\www\hico\application\index\view\common\head.html";i:1609814743;s:58:"G:\wamp64\www\hico\application\index\view\common\menu.html";i:1610788154;s:58:"G:\wamp64\www\hico\application\index\view\common\foot.html";i:1608974931;}*/ ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<link rel="stylesheet" href="../../layuiadmin/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="../../layuiadmin/style/admin.css" media="all">
		<title>红人速推-资讯列表</title>
		<meta name="keywords" content="红人速推-资讯列表">
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
					<div class="title">资讯列表</div>
					<ul id="view"></ul>
					<div id="article_page"></div>
				</div>
				<div class="hot_list clearfix">
					<div class="title">热门推荐</div>
					<ul>
						<?php if(is_array($hot) || $hot instanceof \think\Collection || $hot instanceof \think\Paginator): $i = 0; $__LIST__ = $hot;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                        	<li class="hotstrip">
                        		<a href="/information/<?php echo $vo['id']; ?>.html">
                        			<div class="hottitle ellipsis2"><?php echo $vo['title']; ?></div>
                        			<div class="hottsee">
                        				<div><?php echo $vo['addtime']; ?></div>
                        				<div><i class="iconfont">&#xe982;</i><?php echo $vo['hits']; ?></div>
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
		layui.use(['laypage', 'layer','laytpl'], function(){
			var $ = layui.$
  				,laypage = layui.laypage
  				,layer = layui.layer
  				,laytpl = layui.laytpl;

  			//初始资讯列表
  			var data = {
			  "list":<?php echo $list; ?>
			}
			var getTpl = demo.innerHTML
			,view = document.getElementById('view');
			laytpl(getTpl).render(data, function(html){
			  view.innerHTML = html;
			});

			//完整功能
			laypage.render({
				elem: 'article_page'
				,count: <?php echo $count; ?>
				,layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip']
				,jump: function(obj, first){

					//首次不执行
			        if (!first) {
			          $.ajax({
                            type: 'post',
                            url: "<?php echo url('index/information/index'); ?>",
                            data: {
                            	page:obj.curr,
                            	limit:obj.limit
                            },
                            success: function (res) {
                                if(res.code == 200){
                                	var data = { //数据
									  "list":res.list
									}
									var getTpl = demo.innerHTML
									,view = document.getElementById('view');
									laytpl(getTpl).render(data, function(html){
									  view.innerHTML = html;
									});
                                }else{
                                	layer.alert('获取内容失败！');
                                }
                            },
                            error: function () {
                                layer.alert('获取内容失败！');
                            }
                        });
			        }
				}
			});
		});
	</script>
	<script id="demo" type="text/html">
	  {{#  layui.each(d.list, function(index, item){ }}
		<li class="strip">
			<a href="/information/{{item.id}}.html">
				<div class="article_img">
					{{#  if(item.img){ }}
						<img src="{{ item.img }}">
					{{#  } else{ }}
						<img src="https://www.hongrensutui.com/h5/img/nopic2.png">
					{{#  } }}
				</div>
				<div class="article_subject">
					<div class="article_title ellipsis">{{ item.title }}</div>
					<div class="article_see">
						<div class="time">{{ item.addtime }}</div>
						<div class="hits"><i class="iconfont">&#xe982;</i>{{ item.hits }}</div>
					</div>
					<div class="article_brief ellipsis3">{{ item.brief}}</div>
				</div>
			</a>
		</li>
	  {{#  }); }}
	  {{#  if(d.list.length === 0){ }}
	    无数据
	  {{#  } }}
	</script>
</html>
