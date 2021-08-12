<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:76:"G:\wamp64\www\hico\public/../application/admin\view\college\add_article.html";i:1623751846;}*/ ?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>发布文章</title>
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport"content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
	<link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
	<style type="text/css">
		.hide{display: none}
		.shoe{display: block;}
		.imglist{
			width: 128px;
			height: 80px;
			border: 1px solid #efefef;
			position: relative;
		}
		.imglist span{
			position: absolute;
			top: -10px;
			right: -10px;
			width: 20px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			background: #E71D36;
			border-radius: 50%
		}
		.imglist span i{
			color:#fff;
		}
	</style>
</head>

<body>
	<div class="layui-fluid">
		<div class="layui-row layui-col-space15">
			<div class="layui-col-md12">
				<form>
					<div class="layui-card">
						<div class="layui-card-header">所属分类</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12 layui-form">
								<select name="pid" id="pid" lay-verify="" lay-filter="pid">
									<?php if(is_array($cate) || $cate instanceof \think\Collection || $cate instanceof \think\Paginator): $i = 0; $__LIST__ = $cate;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
										<option value="<?php echo $vo['id']; ?>"><?php echo $vo['pre']; ?><?php echo $vo['name']; ?></option>
									<?php endforeach; endif; else: echo "" ;endif; ?>
								</select>
							</div>
						</div>
						<div class="layui-card-header">排序</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12">
								<input type="text" name="sort" value="0" autocomplete="off" class="layui-input">
							</div>
						</div>
						<div class="layui-card-header">文章标题</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12">
								<input type="text" name="title" placeholder="请输入标题" autocomplete="off" class="layui-input">
							</div>
						</div>
						<div class="layui-card-header">文章作者</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12">
								<input type="text" name="author" autocomplete="off" class="layui-input">
							</div>
						</div>
						<div class="layui-card-header">文章来源</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12">
								<input type="text" name="source" value="" autocomplete="off" class="layui-input">
							</div>
						</div>
						<div class="layui-card-header">
							<span style="margin-right:20px">文章封面</span>
							<button style="float: right;" type="button" class="layui-btn" id="img">上传图片</button>
						</div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <input type="hidden" name="img" id="image">
                            <div class="layui-form-item">
                                <div class="layui-upload">
                                    <div class="layui-upload-list">
                                        <div class="imglist">
                                        	<span class="hide" id="imgclose"><i class="layui-icon">&#x1006;</i></span>
                                        </div>
                                    </div>
                                    <span>建议尺寸：640px * 400px</span>
                                </div>
                            </div>
                        </div>
						<div class="layui-card-header">
							<span style="margin-right:20px">文件地址</span>
							<button style="float: right;" type="button" class="layui-btn" id="downfile">上传文件</button>
						</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12">
								<input type="text" name="file" id="file" placeholder="请输入文件地址，以http://开头" autocomplete="off" class="layui-input" readonly>
							</div>
						</div>
						<div class="layui-card-header">文章内容</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12 layui-form">
								<textarea id="content" name="content" style="display: none;"></textarea>
							</div>
						</div>
						<div class="layui-card-header">分享小卡片标题〔不超过25个汉字〕</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12">
								<input type="text" name="sharetitle" placeholder="请输入分享小卡片标题,不超过25个汉字" autocomplete="off" class="layui-input">
							</div>
						</div>
						<div class="layui-card-header">分享小卡片内容〔不超过30个汉字〕</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12">
								<input type="text" name="sharecontent" placeholder="请输入分享小卡片内容,不超过30个汉字" autocomplete="off" class="layui-input">
							</div>
						</div>
						<div class="layui-card layui-form">
							<div class="layui-card-header">是否启用〔默认启用〕</div>
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
				
		}).use(['util', 'index', 'laydate', 'layer', 'form', 'upload', 'jquery','layedit'], function () {
			var $ = layui.jquery
				, element = layui.element
			    , laydate = layui.laydate
			    , util = layui.util
			    , upload = layui.upload
			    , layedit = layui.layedit
			    , form = layui.form;
			// 编辑器图片上传
            layedit.set({
			  uploadImage: {
			    url: "<?php echo url('admin/upload/index2'); ?>"//接口url
			  }
			});
            layedit.build('content');
	        $("iframe[textarea]").contents().find("body").blur(function(){
	        	$("#content").html($(this).context.innerHTML)
	        });
			// 监听免费收费点击事件
			form.on('radio(free)', function (data) {        
                if ($('#free input[name="free"]:checked ').val() == 1) {
                    $(".free").removeClass('show').addClass('hide');
                    $('.free input[name="price"]').val('');
                    $('.free input[name="expire"]').val('');
                }else {
					$(".free").removeClass('hide').addClass('show');
                }
                form.render();
            });

            //普通图片上传
            var uploadInst = upload.render({
              elem: '#img'
              ,url: "<?php echo url('admin/upload/index'); ?>"
              ,accept: 'img'
              ,done: function(res){
                //如果上传失败
                if(res.code != 200){
                  return layer.msg('上传失败');
                }else{
                    $('#image').val('');
		        	$('.imglist img').remove();
		        	$('#image').val(res.url);
		            $('.imglist').append('<img style="width100%;height:100%" src="'+res.url+'">');
		            $('#imgclose').removeClass('hide').addClass('show');
                }
              }
            });

            // 文件上传
            var uploadInst = upload.render({
			    elem: '#downfile' //绑定元素
			    ,url: "<?php echo url('admin/upload/index'); ?>" //上传接口
			    ,exts: 'xls|xlsx|zip|rar|pdf|ppt|pptx|doc|docx'// 设置允许上传的格式
			    ,accept: 'file'
			    ,done: function(res){
	                if(res.code != 200){
	                  return layer.msg('上传失败');
	                }else{
	                	$('#file').val(res.url);
	                }
	            }
			});

	        $('#imgclose').click(function () {
	        	$('#image').val('');
	        	$('.imglist img').remove();
                $('#imgclose').removeClass('show').addClass('hide');
	        });

	        $('#tacitly1').click(function () {
	        	$('#image').val('');
	        	$('.imglist img').remove();
	        	$('#image').val('http://cdn.hongrensutui.com/uploads/share/college_douyin_logo.png');
	            $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/college_douyin_logo.png">');
	            $('#imgclose').removeClass('hide').addClass('show');
	        });
			$('#tacitly2').click(function () {
				$('#image').val('');
				$('.imglist img').remove();
				$('#image').val('http://cdn.hongrensutui.com/uploads/share/college_douyin_logo2.png');
			    $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/college_douyin_logo2.png">');
			    $('#imgclose').removeClass('hide').addClass('show');
			});
			$('#tacitly3').click(function () {
				$('#image').val('');
				$('.imglist img').remove();
				$('#image').val('http://cdn.hongrensutui.com/uploads/share/college_douyin_logo3.png');
			    $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/college_douyin_logo3.png">');
			    $('#imgclose').removeClass('hide').addClass('show');
			});
			$('#tacitly4').click(function () {
				$('#image').val('');
				$('.imglist img').remove();
				$('#image').val('http://cdn.hongrensutui.com/uploads/share/college_douyin_logo4.png');
			    $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/college_douyin_logo4.png">');
			    $('#imgclose').removeClass('hide').addClass('show');
			});
			$('#tacitly5').click(function () {
				$('#image').val('');
				$('.imglist img').remove();
				$('#image').val('http://cdn.hongrensutui.com/uploads/share/college_douyin_logo5.png');
			    $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/college_douyin_logo5.png">');
			    $('#imgclose').removeClass('hide').addClass('show');
			});
	        $('#tacitly6').click(function () {
	        	$('#image').val('');
	        	$('.imglist img').remove();
	        	$('#image').val('http://cdn.hongrensutui.com/uploads/share/college_kuaishou_logo.png');
                $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/college_kuaishou_logo.png">');
                $('#imgclose').removeClass('hide').addClass('show');
	        });
	        $('#tacitly7').click(function () {
	        	$('#image').val('');
	        	$('.imglist img').remove();
	        	$('#image').val('http://cdn.hongrensutui.com/uploads/share/college_douyin_kuaishou_logo.png');
	            $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/college_douyin_kuaishou_logo.png">');
	            $('#imgclose').removeClass('hide').addClass('show');
	        });
			$('#tacitly8').click(function () {
				$('#image').val('');
				$('.imglist img').remove();
				$('#image').val('http://cdn.hongrensutui.com/uploads/share/doc_logo.png');
			    $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/doc_logo.png">');
			    $('#imgclose').removeClass('hide').addClass('show');
			});
			$('#tacitly9').click(function () {
				$('#image').val('');
				$('.imglist img').remove();
				$('#image').val('http://cdn.hongrensutui.com/uploads/share/xls_logo.png');
			    $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/xls_logo.png">');
			    $('#imgclose').removeClass('hide').addClass('show');
			});
			$('#tacitly10').click(function () {
				$('#image').val('');
				$('.imglist img').remove();
				$('#image').val('http://cdn.hongrensutui.com/uploads/share/ppt_logo.png');
			    $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/ppt_logo.png">');
			    $('#imgclose').removeClass('hide').addClass('show');
			});
			$('#tacitly11').click(function () {
				$('#image').val('');
				$('.imglist img').remove();
				$('#image').val('http://cdn.hongrensutui.com/uploads/share/pdf_logo.png');
			    $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/pdf_logo.png">');
			    $('#imgclose').removeClass('hide').addClass('show');
			});
			$('#tacitly12').click(function () {
				$('#image').val('');
				$('.imglist img').remove();
				$('#image').val('http://cdn.hongrensutui.com/uploads/share/zip_logo.png');
			    $('.imglist').append('<img style="width100%;height:100%" src="http://cdn.hongrensutui.com/uploads/share/zip_logo.png">');
			    $('#imgclose').removeClass('hide').addClass('show');
			});

            // 时间配置
            var laydate = layui.laydate;
			laydate.render({
			    elem: '#test-laydate-normal-cn',
			    trigger: 'click',
			});
		});
	</script>

</html>