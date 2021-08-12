<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:68:"G:\wamp64\www\hico\public/../application/admin\view\article\add.html";i:1626770145;s:58:"G:\wamp64\www\hico\application\admin\view\common\head.html";i:1624346804;s:58:"G:\wamp64\www\hico\application\admin\view\common\foot.html";i:1624346639;}*/ ?>
<!DOCTYPE html>
<html>

<head>
	<title>新增文章</title>
	<meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/admin/style/admin.css" media="all">
	<link href="/admin/highlight/monokai_sublime-8.0.min.css" rel="stylesheet">
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
		.layui-form-checkbox{
			padding: 0;
		}
		.layui-form-checkbox i{
			display: none;
		}
		.layui-form-checkbox span{
			border-radius: 3px;
		}
		.add-lable{
			width: 30px;
			height: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			border: 1px solid #ddd;
			cursor: pointer;
			user-select:none;
		}
		.add-lable i{
			color: #666;
		}
	</style>
</head>

<body>
	<div class="layui-fluid">
		<div class="layui-row layui-col-space15">
			<div class="layui-col-md12">
				<form class="layui-form">
					<div class="layui-card">
						<div class="layui-card-header">所属分类</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12 layui-form">
								<select name="pid" id="pid">
									<?php if(is_array($cate) || $cate instanceof \think\Collection || $cate instanceof \think\Paginator): $i = 0; $__LIST__ = $cate;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;if($vo['pid'] == 0): ?>
											<option value="<?php echo $vo['id']; ?>"><?php echo $vo['pre']; ?><?php echo $vo['name']; ?></option>
										<?php endif; endforeach; endif; else: echo "" ;endif; ?>
								</select>
							</div>
						</div>
						<label class="layui-card-header">标签</label>
						<div class="layui-input-block" style="display: flex; margin-left: 15px;">
							<?php if(is_array($lable) || $lable instanceof \think\Collection || $lable instanceof \think\Paginator): $i = 0; $__LIST__ = $lable;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
								<input type="checkbox" name="lable[]" value="<?php echo $vo['id']; ?>" title="<?php echo $vo['name']; ?>">
							<?php endforeach; endif; else: echo "" ;endif; ?>
							<div class="add-lable"><i class="layui-icon layui-icon-addition"></i></div>
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
								<input type="text" name="title" placeholder="请输入文章标题" autocomplete="off" class="layui-input">
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
						<div class="layui-card-header">文章封面<button style="float: right;" type="button" class="layui-btn" id="images">上传图片</button></div>
                        <div class="layui-card-body layui-row layui-col-space10">
                            <input type="hidden" name="img" id="image">
                            <input type="hidden" name="imgName" id="imgName">
                            <div class="layui-form-item">
                                <div class="layui-upload">
                                    <div class="layui-upload-list">
                                        <div style="width: 160px;height: 100px">
                                            <img style="width: 100%;height: 100%" class="layui-upload-img" id="exhibition">
                                        </div>
                                    </div>
                                    <div>建议尺寸：750px * 320px</div>
                                </div>
                            </div>
                        </div>
						<div class="layui-card-header">
							<span style="margin-right:20px">文件地址</span>
							<button style="float: right;" type="button" class="layui-btn" id="downfile">上传文件</button>
						</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12">
								<input type="hidden" name="fileName" id="fileName">
								<input type="text" name="file" id="file" autocomplete="off" class="layui-input" readonly>
							</div>
						</div>
						<div class="layui-card-header">文章内容</div>
						<div class="layui-card-body layui-row layui-col-space10">
							<div class="layui-col-md12 layui-form">
								<div id="editor"></div>
								<textarea id="content" name="content" style="display: none"></textarea>
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
	<script src="/admin/layui/layui.js"></script>
	<script type="text/javascript" src="/admin/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="/admin/highlight/highlight-8.0.min.js"></script>
	<script type="text/javascript" src="/admin/wangEditor/wangEditor.min.js"></script>
	<script>
		layui.config({
			base: '/admin/' //静态资源所在路径
		}).extend({
			index: 'lib/index' //主入口模块	
		}).use(['index', 'layer', 'form', 'upload', 'jquery'], function () {
			var $ = layui.jquery
				, element = layui.element
			    , upload = layui.upload
			    , form = layui.form;

			$('.add-lable').click(function () {
				var id = $('#pid').val();
	            layer.open({
                    type: 2
                    , title: '添加标签'
                    , shadeClose: false
                    , shade: 0.8
                    , area: ['50%', '80%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/classify/add'); ?>" + '?id=' + id + '&label=1'
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/classify/add'); ?>",
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
                                layer.alert('添加失败');
                                layer.close(index);
                            }
                        });
                    }
                    , btn2: function (index, layero) {
                        layer.close(index);
                    }
                });
	        })

            //文章封面上传
            var uploadInst = upload.render({
                elem: '#images'
                ,url: "<?php echo url('admin/upload/article'); ?>"
                ,size: 2048
                ,before: function(obj){
                    obj.preview(function(index, file, result){
                        $('#exhibition').attr('src', result);
                    });
                }
                ,done: function(res){
                    if(res.code != 200){
                        return layer.msg('上传失败');
                    }else{
                        layer.msg('上传成功');
                        $('#image').val(res.url);
                        $('#imgName').val(res.originalName);
                    }
                }
            });

            // 文件上传
            var uploadInst = upload.render({
			    elem: '#downfile' //绑定元素
			    ,url: "<?php echo url('admin/upload/article'); ?>" //上传接口
			    ,exts: 'xls|xlsx|zip|rar|pdf|ppt|pptx|doc|docx|txt'// 设置允许上传的格式
			    ,size: 2048
			    ,accept: 'file'
			    ,done: function(res){
	                if(res.code != 200){
	                  return layer.msg('上传失败');
	                }else{
	                	layer.msg('上传成功');
                        $('#file').val(res.url);
                        $('#fileName').val(res.originalName);
	                }
	            }
			});

			// 获取分类下标签
			form.on('select(pid)', function(data){
				if(data.value != ''){
					$.ajax({
						type: 'post',
						url: "<?php echo url('/useradmin/commission/select_dept'); ?>",
						data: {company_id: data.value},
						success: function (res) {
							var tpl = '<option value="">请选择部门</option>';
							if (res.code == 200) {
								for (const item of res.list) {
									tpl += '<option value="'+item.id+'">'+item.name+'</option>';
								}
								$('#search_company_dept').empty().html(tpl);
								form.render('select');
							} else {
								layer.alert(res.msg);
							}
						}
					});
				}else{
					$('#search_company_dept').empty().html('<option value="">请选择部门</option>');
					form.render('select');
				}
			});
		});
		// 编辑器
		const E = window.wangEditor;
	    const editor = new E('#editor');
	    const $content = $('#content');
	    editor.config.placeholder = '写点东西吧。。。';
	    // 挂载highlight插件
		editor.highlight = hljs;
		// 上传图片接口
		editor.config.uploadImgServer = "<?php echo url('admin/upload/article'); ?>";
		// 限制类型
		editor.config.uploadImgAccept = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
		// 自定义 fileName
		editor.config.uploadFileName = 'file'
		// 自定义 header
		editor.config.uploadImgHeaders = {
		    Accept: 'application/json, text/javascript, */*; q=0.01',
		}
		// 上传图片数量限制
		editor.config.uploadImgMaxLength = 1;
		// 回调函数
		editor.config.uploadImgHooks = {
		    // 图片上传并返回了结果，想要自己把图片插入到编辑器中
		    // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
		    customInsert: function(insertImgFn, result) {
		        // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
		        insertImgFn(result['url'])
		    }
		}

	    editor.config.onchange = function (html) {
	        // 第二步，监控变化，同步更新到 textarea
	        $content.val(html);
	    }
	    editor.create();
	    // 第一步，初始化 textarea 的值
	    $content.val(editor.txt.html());
	</script>
</html>