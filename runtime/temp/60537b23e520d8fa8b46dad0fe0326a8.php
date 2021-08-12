<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:72:"G:\wamp64\www\hico\public/../application/admin\view\messaging\index.html";i:1612341547;}*/ ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>群发管理</title>
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
		<style type="text/css">
			.messaging .layui-col-md12{
				display: flex;
			}
			.messaging .layui-form-item{
				display: flex;
				margin:0;
				margin-left: 5px;
				line-height: 1
			}
			.messaging .layui-form-item .layui-inline{
				margin: 0
			}
			.give{
				margin-bottom: 5px
			}
			.history1{
				float: right;
				margin-top: 7px
			}
		</style>
	</head>
	<body>
		<div class="layui-fluid">
			<div class="layui-row layui-col-space15">
				<div class="layui-col-md12">
					<div class="layui-card">
						<div class="layui-card-header layui-elem-field site-demo-button">群发管理</div>
						<div class="layui-card-body">
							<form class="layui-form">
								<input type="hidden" name="page" value="1" />
								<input type="hidden" name="templateid" value="1" />
								<div class="layui-fluid">
									<div class="layui-row layui-col-space15">
										<div class="layui-col-md6">
											<div class="layui-card">
												<div class="layui-card-header">
													<span>消息模板</span>
													<button type="button" class="layui-btn layui-btn-sm history1">发送历史</button>
												</div>
												<div class="layui-card-body layui-row layui-col-space10 messaging">
													<div class="layui-col-md12">
														<input type="text" name="messaging1" placeholder="请输入标题" autocomplete="off" class="layui-input" value="纯佣主播数据更新啦，纯佣主播联系方式大公开，快去看看平台又新增了哪些主播吧。">
														<div class="layui-form-item">
													      <div class="layui-input-inline" style="width: 120px;">
													        <input type="text" name="color1" value="#333333" placeholder="请选择颜色" class="layui-input" id="messaging1">
													      </div>
													      <div class="layui-inline" style="left: -11px;">
													        <div id="test-form1"></div>
													      </div>
													    </div>
													</div>
													<div class="layui-col-md12">
														<input type="text" name="messaging2" placeholder="请输入查询信息" autocomplete="off" class="layui-input" value="抖音&快手 纯佣主播">
														<div class="layui-form-item">
													      <div class="layui-input-inline" style="width: 120px;">
													        <input type="text" name="color2" value="#333333" placeholder="请选择颜色" class="layui-input" id="messaging2">
													      </div>
													      <div class="layui-inline" style="left: -11px;">
													        <div id="test-form2"></div>
													      </div>
													    </div>
													</div>
													<div class="layui-col-md12">
														<input type="text" name="messaging3" placeholder="请输入查询时间" autocomplete="off" class="layui-input" value="<?php echo $time; ?>" disabled>
														<div class="layui-form-item">
													      <div class="layui-input-inline" style="width: 120px;">
													        <input type="text" name="color3" value="#333333" placeholder="请选择颜色" class="layui-input" id="messaging3">
													      </div>
													      <div class="layui-inline" style="left: -11px;">
													        <div id="test-form3"></div>
													      </div>
													    </div>
													</div>
													<div class="layui-col-md12">
														<input type="text" name="messaging4" placeholder="请输入查询结果" autocomplete="off" class="layui-input" value="13位纯佣主播已更新">
														<div class="layui-form-item">
													      <div class="layui-input-inline" style="width: 120px;">
													        <input type="text" name="color4" value="#E71D36" placeholder="请选择颜色" class="layui-input" id="messaging4">
													      </div>
													      <div class="layui-inline" style="left: -11px;">
													        <div id="test-form4"></div>
													      </div>
													    </div>
													</div>
													<div class="layui-col-md12">
														<input type="text" name="messaging5" placeholder="请输入备注" autocomplete="off" class="layui-input" value="想要直播带货，上红人速推，更多纯佣主播帮您带货！">
														<div class="layui-form-item">
													      <div class="layui-input-inline" style="width: 120px;">
													        <input type="text" name="color5" value="#333333" placeholder="请选择颜色" class="layui-input" id="messaging5">
													      </div>
													      <div class="layui-inline" style="left: -11px;">
													        <div id="test-form5"></div>
													      </div>
													    </div>
													</div>
												</div>
											</div>
										</div>
										<div class="layui-col-md6">
											<div class="layui-card">
												<div class="layui-card-header">消息示例</div>
												<div class="layui-card-body layui-row layui-col-space10">
													<div class="layui-col-md12 give">
														<div id="first" style="color:#333333">纯佣主播数据更新啦，纯佣主播联系方式大公开，快去看看平台又新增了哪些主播吧。</div>
														<div>查询信息：<span id="keyword1" style="color:#333333">抖音&快手 纯佣主播</span></div>
														<div>查询时间：<span id="keyword2" style="color:#333333"><?php echo $time; ?></span></div>
														<div>查询结果：<span id="keyword3" style="color:#E71D36">13位纯佣主播已更新</span></div>
														<div id="remark" style="color:#333333">想要直播带货，上红人速推，更多纯佣主播帮您带货！</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="layui-card-body layui-row layui-col-space10">
										<div class="layui-card layui-form">
			                                <div class="layui-col-md12">
			                                	<input type="radio" name="factor" value="6" title="测试">
			                                    <input type="radio" name="factor" value="1" title="所有非会员">
			                                    <input type="radio" name="factor" value="2" title="普通会员">
			                                    <input type="radio" name="factor" value="3" title="超级会员">
			                                    <input type="radio" name="factor" value="4" title="所有未支付会员">
			                                    <input type="radio" name="factor" value="5" title="所有未操作会员">
			                                </div>
			                            </div>
		                            </div>
		                            <div class="layui-form-item" style="text-align: center;margin-top: 10px">
										<button type="button" class="layui-btn" lay-submit lay-filter="formDemo">一键群发</button>
									</div>
								</div>
							</form>
						</div>
						<div style="padding: 15px" id="nextpage">
							
						</div>
					</div>
				</div>
			</div>
		</div>

		<script src="/layuiadmin/layui/layui.js"></script>
		<script>
		layui.config({
			base: '/layuiadmin/' //静态资源所在路径
		}).extend({
			index: 'lib/index' //主入口模块
		}).use(['util', 'index', 'table', 'laydate','colorpicker'], function () {
			var $ = layui.$
				, form = layui.form
  				,colorpicker = layui.colorpicker;
			//表单赋值
			colorpicker.render({
				elem: '#test-form1'
				,color: '#333333'
				,done: function(color){
					$('#first').css("color",color);
					$('#messaging1').val(color);
				}
			});
			colorpicker.render({
				elem: '#test-form2'
				,color: '#333333'
				,done: function(color){
					$('#keyword1').css("color",color);
					$('#messaging2').val(color);
				}
			});
			colorpicker.render({
				elem: '#test-form3'
				,color: '#333333'
				,done: function(color){
					$('#keyword2').css("color",color);
					$('#messaging3').val(color);
				}
			});
			colorpicker.render({
				elem: '#test-form4'
				,color: '#E71D36'
				,done: function(color){
					$('#keyword3').css("color",color);
					$('#messaging4').val(color);
				}
			});
			colorpicker.render({
				elem: '#test-form5'
				,color: '#333333'
				,done: function(color){
					$('#remark').css("color",color);
					$('#messaging5').val(color);
				}
			});

			$('input[name="messaging1"]').on('keyup',function(e){ 
				$('#first').css("color",$('#messaging1').val());
				$('#first').text($('input[name="messaging1"]').val());
			})
			$('input[name="messaging2"]').on('keyup',function(e){  
				$('#keyword1').css("color",$('#messaging2').val());
				$('#keyword1').text($('input[name="messaging2"]').val());
			})
			$('input[name="messaging3"]').on('keyup',function(e){  
				$('#keyword2').css("color",$('#messaging3').val());
				$('#keyword2').text($('input[name="messaging3"]').val());
			})
			$('input[name="messaging4"]').on('keyup',function(e){  
				$('#keyword3').css("color",$('#messaging4').val());
				$('#keyword3').text($('input[name="messaging4"]').val());
			})
			$('input[name="messaging5"]').on('keyup',function(e){  
				$('#remark').css("color",$('#messaging5').val());
				$('#remark').text($('input[name="messaging5"]').val());
			})


			form.on('submit(formDemo)', function (data) {
				$('#nextpage').html('');
				$.ajax({
                    type: 'get',
                    url: "<?php echo url('/admin/messaging/messaging'); ?>",
                    data: data.field,
                    dataType: 'json',
                    success: function (res) {
                    	console.log(res)
                        if (res.nextpage) {
                            layer.msg(res.msg, {time: 10000});
                            $('#nextpage').append('<div>第'+res.page+'页'+res.list.length+'位,'+res.msg+'</div>');
                            messaging1(res.messaging)
                        } else {
                            layer.msg(res.msg);
                            $('#nextpage').append('<div>第'+res.page+'页'+res.list.length+'位,'+res.msg+'</div>');
                        }
                    },
                    error: function (res) {
                    	console.log(res)
                        layer.msg(res.msg);
                    }
                });
			})

			window.messaging1 = function (messaging){
				$.ajax({
                    type: 'get',
                    url: "<?php echo url('/admin/messaging/messaging'); ?>",
                    data: messaging,
                    dataType: 'json',
                    success: function (res) {
                    	console.log(res)
                        if (res.nextpage) {
                            layer.msg(res.msg, {time: 10000});
                            $('#nextpage').append('<div>第'+res.page+'页'+res.list.length+'位,'+res.msg+'</div>');
                            messaging2(res.messaging)
                        } else {
                            layer.msg(res.msg);
                            $('#nextpage').append('<div>第'+res.page+'页'+res.list.length+'位,'+res.msg+'</div>');
                        }
                    },
                    error: function (res) {
                    	console.log(res)
                        layer.msg(res.msg);
                    }
                });
			}
			window.messaging2 = function (messaging){
				$.ajax({
                    type: 'get',
                    url: "<?php echo url('/admin/messaging/messaging'); ?>",
                    data: messaging,
                    dataType: 'json',
                    success: function (res) {
                    	console.log(res)
                        if (res.nextpage) {
                            layer.msg(res.msg, {time: 10000});
                            $('#nextpage').append('<div>第'+res.page+'页'+res.list.length+'位,'+res.msg+'</div>');
                            messaging1(res.messaging)
                        } else {
                            layer.msg(res.msg);
                            $('#nextpage').append('<div>第'+res.page+'页'+res.list.length+'位,'+res.msg+'</div>');
                        }
                    },
                    error: function (res) {
                    	console.log(res)
                        layer.msg(res.msg);
                    }
                });
			}

			// 发送历史
			$('.history1').click(function () {
                layer.open({
                    type: 2
                    , title: '添加红人'
                    , shadeClose: true
                    , shade: 0.8
                    , area: ['80%', '80%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/messaging/count'); ?>" + '?templateid=1'
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        layer.close(index);
                    }
                    , btn2: function (index, layero) {
                        layer.close(index);
                    }
                });
            })
		});
	</script>

	</body>

</html>
