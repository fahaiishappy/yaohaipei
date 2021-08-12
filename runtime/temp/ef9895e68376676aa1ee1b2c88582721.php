<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:73:"G:\wamp64\www\hico\public/../application/index\view\settled\merchant.html";i:1614067366;s:58:"G:\wamp64\www\hico\application\index\view\common\head.html";i:1609814743;s:58:"G:\wamp64\www\hico\application\index\view\common\menu.html";i:1610788154;s:58:"G:\wamp64\www\hico\application\index\view\common\foot.html";i:1608974931;}*/ ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<link rel="stylesheet" href="../../layuiadmin/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="../../layuiadmin/style/admin.css" media="all">
		<title>红人速推-首页</title>
		<meta name="keywords" content="红人速推-首页">
		<meta name="description" content="红人速推 | 网红直播带货一站式服务平台">
		<link rel="stylesheet" href="../../index/css/index.css" media="all">
		<style type="text/css">
	        .hide{display: none}
	        .show{display: block;}
	        .layui-form-checkbox{
	            margin-bottom: 10px
	        }
	        input::-webkit-outer-spin-button,
	        input::-webkit-inner-spin-button{
	        -webkit-appearance: none !important;
	        margin: 0;
	        }
	        input[type="number"]{-moz-appearance:textfield;}
	        .cor-e8{
	        	color:#E71D36;
	        	font-size: 20px;
	        	position: relative;
	        	top:5px;
	        	margin-right: 2px; 
	        }
	        .layui-form-label{
	        	padding-left: 10px;
	        	line-height: 15px;
	        }
	        .layui-nav-item.layui-this>a{
				background-color: #E71D36!important;
			}
	    </style>
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
				<div class="nav-left">
					<div class="title">入驻类型</div>
					<ul class="nav">
						<?php if($userInfo['type'] == 0 || $userInfo['type'] == 1): ?>
							<li class="item active">
								<a href="<?php echo url('index/settled/merchant'); ?>">商家入驻</a>
							</li>
						<?php endif; if($userInfo['type'] == 0 || $userInfo['type'] == 21): ?>
							<li class="item">
								<a href="<?php echo url('index/settled/celebrity'); ?>">网红入驻</a>
							</li>
						<?php endif; ?>
					</ul>
				</div>
				<div class="form-right">
					<div class="title">商家入驻</div>
					<form class="layui-form">
						<input type="hidden" id="userInfoid" name="mid" value="<?php echo $userInfo['id']; ?>">
						<input type="hidden" name="id" value="<?php echo $info['id']; ?>">
						<div class="layui-form-item">
							<label class="layui-form-label"><span class="cor-e8 text-lg">*</span>企业全称</label>
							<div class="layui-input-block">
								<input type="text" name="company" value="<?php echo $info['company']; ?>" placeholder="请输入企业全称" lay-verify="company" autocomplete="off" class="layui-input">
							</div>
						</div>
						<div class="layui-form-item">
							<label class="layui-form-label"><span class="cor-e8 text-lg">*</span>营业执照</label>
							<div class="layui-input-block">
								<button type="button" class="layui-btn" id="license" style="width: 100px;background:#E71D36">上传执照</button>
	                            <input type="hidden" name="license" value="<?php echo $info['license']; ?>" lay-verify="license" id="licenseimg">
	                            <div class="layui-form-item">
	                                <div class="layui-upload">
	                                    <div class="layui-upload-list">
	                                        <div style="width: 100px;height: 100px">
	                                        	<?php if($info['license']): ?>
	                                                <img style="width: 100%;height: 100%" class="layui-upload-img" src="<?php echo $info['license']; ?>" id="licensedemo">
	                                            <?php else: ?>
	                                                <img style="width: 100%;height: 100%" class="layui-upload-img" id="licensedemo">
	                                            <?php endif; ?>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
							</div>
						</div>
						<div class="layui-form-item">
							<label class="layui-form-label"><span class="cor-e8 text-lg">*</span>品牌名称</label>
							<div class="layui-input-block">
								 <input type="text" name="title" value="<?php echo $info['title']; ?>" placeholder="请输入品牌名称" lay-verify="title" autocomplete="off" class="layui-input">
							</div>
						</div>
						<div class="layui-form-item">
							<label class="layui-form-label"><span class="cor-e8 text-lg">*</span>品牌logo</label>
							<div class="layui-input-block">
								<button type="button" class="layui-btn" id="logo" style="width: 100px;background:#E71D36">上传logo</button>
	                            <input type="hidden" name="logo" value="<?php echo $info['logo']; ?>" lay-verify="logo" id="logoimg">
	                            <div class="layui-form-item">
	                                <div class="layui-upload">
	                                    <div class="layui-upload-list">
	                                        <div style="width: 100px;height: 100px">
	                                            <?php if($info['logo']): ?>
	                                                <img style="width: 100%;height: 100%" class="layui-upload-img" src="<?php echo $info['logo']; ?>" id="logodemo">
	                                            <?php else: ?>
	                                                <img style="width: 100%;height: 100%" class="layui-upload-img" id="logodemo">
	                                            <?php endif; ?>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
							</div>
						</div>
						<div class="layui-form-item">
                        	<div class="layui-form-label"><span class="cor-e8 text-lg">*</span>商家地区</div>
                        	<div class="layui-input-block" data-toggle="distpicker">
							    <div class="layui-input-inline">
						            <select lay-filter="a" id="a" name="province" data-province="<?php echo $info['province']; ?>"></select>
						        </div>
						        <div class="layui-input-inline">
						            <select lay-filter="b" id="b" name="city" data-city="<?php echo $info['city']; ?>"></select>
						        </div>
						        <div class="layui-input-inline">
						            <select lay-filter="c" id="c" name="area" data-city="<?php echo $info['area']; ?>"></select>
						        </div>
						    </div>
						</div>
						<div class="layui-form-item layui-form-text">
							<div class="layui-form-label"><span class="cor-e8 text-lg">*</span>商家简介</div>
							<div class="layui-input-block">
								<textarea name="detail"placeholder="请输入内容" class="layui-textarea"><?php echo $info['detail']; ?></textarea>
							</div>
						</div>
						<div class="layui-form-item">
							<label class="layui-form-label">线上平台</label>
							<div class="layui-input-block">
								<div class="layui-col-md12">
									<?php if($info): if(is_array($platform) || $platform instanceof \think\Collection || $platform instanceof \think\Paginator): $i = 0; $__LIST__ = $platform;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
	                                        <input type="checkbox" name="platform[]" value="<?php echo $vo['id']; ?>" title="<?php echo $vo['name']; ?>" <?php if(in_array($vo['id'],$info['platform'])): ?>checked<?php endif; ?>>
	                                    <?php endforeach; endif; else: echo "" ;endif; else: if(is_array($platform) || $platform instanceof \think\Collection || $platform instanceof \think\Paginator): $i = 0; $__LIST__ = $platform;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
	                                        <input type="checkbox" name="platform[]" value="<?php echo $vo['id']; ?>" title="<?php echo $vo['name']; ?>">
	                                    <?php endforeach; endif; else: echo "" ;endif; endif; ?>
                                </div>
							</div>
						</div>
						<div class="layui-form-item">
							<label class="layui-form-label"><span class="cor-e8 text-lg">*</span>商家领域</label>
							<div class="layui-input-block">
								 <div class="layui-col-md12">
								 	<?php if($info): if(is_array($realm) || $realm instanceof \think\Collection || $realm instanceof \think\Paginator): $i = 0; $__LIST__ = $realm;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;if($vo['pid'] == 0): ?>
	                                        <div><?php echo $vo['name']; ?></div>
	                                            <?php if(is_array($realm) || $realm instanceof \think\Collection || $realm instanceof \think\Paginator): $i = 0; $__LIST__ = $realm;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;if($v['pid'] == $vo['id']): ?>
	                                                    <input type="checkbox" name="category[]" value="<?php echo $v['id']; ?>" title="<?php echo $v['name']; ?>" <?php if(in_array($v['id'],$info['category'])): ?>checked<?php endif; ?>>
	                                                <?php endif; endforeach; endif; else: echo "" ;endif; endif; endforeach; endif; else: echo "" ;endif; else: if(is_array($realm) || $realm instanceof \think\Collection || $realm instanceof \think\Paginator): $i = 0; $__LIST__ = $realm;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;if($vo['pid'] == 0): ?>
	                                        <div><?php echo $vo['name']; ?></div>
	                                            <?php if(is_array($realm) || $realm instanceof \think\Collection || $realm instanceof \think\Paginator): $i = 0; $__LIST__ = $realm;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$v): $mod = ($i % 2 );++$i;if($v['pid'] == $vo['id']): ?>
	                                                    <input type="checkbox" name="category[]" value="<?php echo $v['id']; ?>" title="<?php echo $v['name']; ?>">
	                                                <?php endif; endforeach; endif; else: echo "" ;endif; endif; endforeach; endif; else: echo "" ;endif; endif; ?>
                                    
                                </div>
							</div>
						</div>
                        <div class="layui-form-item">
                        	<label class="layui-form-label">店铺链接</label>
	                        <div class="layui-input-block">
	                            <input type="text" name="shop_link" value="<?php echo $info['shop_link']; ?>" placeholder="请输入店铺链接" autocomplete="off" class="layui-input">
	                        </div>
	                    </div>
                        <div class="layui-form-item">
                        	<label class="layui-form-label"><span class="cor-e8 text-lg">*</span>商务对接人</label>
	                        <div class="layui-input-block">
	                            <input type="text" name="contact" value="<?php echo $info['contact']; ?>" lay-verify="contact" placeholder="请输入商务对接人" autocomplete="off" class="layui-input">
	                        </div>
	                    </div>
                        <div class="layui-form-item">
                        	<label class="layui-form-label"><span class="cor-e8 text-lg">*</span>手机号</label>
	                        <div class="layui-input-block">
	                            <input type="text" name="mobile" value="<?php echo $info['mobile']; ?>" lay-verify="mobile"  placeholder="请输入手机号" autocomplete="off" class="layui-input">
	                        </div>
	                    </div>
                        <div class="layui-form-item">
                        	<label class="layui-form-label"><span class="cor-e8 text-lg">*</span>微信号</label>
	                        <div class="layui-input-block">
	                            <input type="text" name="wechat_work" value="<?php echo $info['wechat_work']; ?>" lay-verify="wechat_work" placeholder="请输入微信号" autocomplete="off" class="layui-input">
	                        </div>
	                    </div>
	                    <div class="submit">
	                    	<button type="submit" class="layui-btn" lay-submit="" lay-filter="demo1">
	                    		<?php if($info): ?>
		                    		修改信息
		                    	<?php else: ?>
		                    		立即入驻
		                    	<?php endif; ?>
		                    </button>
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
	<script src="/assets/modules/jquery.min.js"></script>
	<script src="/assets/modules/city/distpicker.data.js"></script>
	<script src="/assets/modules/city/distpicker.js"></script>
	<script>
	layui.use(['index', 'form', 'upload', 'layedit'], function(){
		var $ = layui.$
            , admin = layui.admin
            , element = layui.element
            , form = layui.form
            ,layedit = layui.layedit
            , upload = layui.upload;


        var userInfoid = $('#userInfoid').val();
        if(!userInfoid){
			$('.login').trigger("click");
		}

        // 编辑器图片上传
  //       layedit.set({
		//   uploadImage: {
		//     url: "<?php echo url('admin/upload/index2'); ?>"//接口url
		//   }
		// });

        //营业执照上传
        var uploadInst = upload.render({
			elem: '#license'
			,url: "<?php echo url('admin/upload/index'); ?>"
			,before: function(obj){
				obj.preview(function(index, file, result){
					$('#licensedemo').attr('src', result);
				});
			}
			,done: function(res){
				//如果上传失败
				if(res.code != 200){
					return layer.msg('上传失败');
				}else{
					$('#licenseimg').val(res.url);
					return layer.msg('上传成功');
				}
			}
        });

        //logo上传
        var uploadInst = upload.render({
			elem: '#logo'
			,url: "<?php echo url('admin/upload/index'); ?>"
			,before: function(obj){
				obj.preview(function(index, file, result){
					$('#logodemo').attr('src', result);
				});
			}
			,done: function(res){
				//如果上传失败
				if(res.code != 200){
					return layer.msg('上传失败');
				}else{
					$('#logoimg').val(res.url);
				}
			}
        });

        form.on('select(a)', function (data) {
            $("#a").val(data.value).change();
            form.render();
        })

        form.on('select(b)', function (data) {
            $("#b").val(data.value).change();
            form.render();
        })

        form.on('select(c)', function (data) {
            $("#c").val(data.value).change();
            form.render();
        })
        //创建一个编辑器
        // var index = layedit.build('detail');
        //自定义验证规则
		form.verify({
			company: function(value){
		      if(!value){
		        return '企业全称不能为空！';
		      }
		    }
		    ,license: function(value){
		      if(!value){
		        return '请上传营业执照！';
		      }
		    }
		    ,title: function(value){
		      if(!value){
		        return '品牌不能为空！';
		      }
		    }
		    ,logo: function(value){
		      if(!value){
		        return '请上传品牌logo！';
		      }
		    }
		    // ,detail: function(value){
		    //  	layedit.sync(index);
		    // }
		    ,contact: function(value){
		      if(!value){
		        return '商务对接人不能为空！';
		      }
		    }
		    ,mobile: [
		      /^0?1[35849][0-9][0-9]{8}$/
		      ,'请确认输入正确的手机号！'
		    ]
		    ,wechat_work: function(value){
		      if(!value){
		        return '微信号码不能为空！';
		      }
		    }
		});

		//监听提交
		form.on('submit(demo1)', function(data){
			if(data.field.mid){
				// layer.alert('您确认修改商家信息么？修改需重新加入审核队列！', function () {
                    $.ajax({
			            type: 'post',
			            url: "<?php echo url('index/settled/Merchantadd'); ?>",
			            header: {"Content-Type": "application/x-www-form-urlencoded"},
			            data : data.field,
			            success: function (res) {
			            	if(res.data.code == 200){
								layer.alert(res.data.info, function () {
									window.location.reload('https://www.hongrensutui.com/index/settled/merchant.html');
								});
							}else{
								layer.alert(res.data.info);
							}
			            },
			            error: function () {
			                layer.alert('入驻失败！');
			            }
			        });
                // });
		        return false;
			}else{
				$('.login').trigger("click");
				return false;
			}
		});
	});
	</script>
</html>