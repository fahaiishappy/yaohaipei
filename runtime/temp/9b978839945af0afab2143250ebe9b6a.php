<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:72:"G:\wamp64\www\hico\public/../application/admin\view\college\article.html";i:1623751742;}*/ ?>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>文章列表</title>
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
		<style type="text/css">
			tbody .layui-table-cell {
				height: 45px;
				line-height: 45px;
			}
		</style>
	</head>

	<body>
		<div class="layui-fluid">
			<div class="layui-row layui-col-space15">
				<div class="layui-col-md12">
					<div class="layui-card">
						<div class="layui-card-header">文章列表</div>
						<div class="layui-card-body">
							<div class="test-table-reload-btn" style="margin-bottom: 10px;">
								<div class="layui-inline">
									<input class="layui-input" name="search_title" id="search_title" autocomplete="off" placeholder="请输入文章名称">
								</div>
                                <div class="layui-inline layui-form">
                                    <div style="width: 150px;">
                                        <select name="search_pid" id="search_pid">
                                            <option value="">文章分类</option>
                                            <?php if(is_array($cate) || $cate instanceof \think\Collection || $cate instanceof \think\Paginator): $i = 0; $__LIST__ = $cate;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?>
                                                <option value="<?php echo $vo['id']; ?>"><?php echo $vo['pre']; ?><?php echo $vo['name']; ?></option>
                                            <?php endforeach; endif; else: echo "" ;endif; ?>
                                        </select>
                                    </div>
                                </div>
                                <!-- <div class="layui-inline layui-form">
                                    <div style="width: 100px;">
                                        <select name="search_free" id="search_free">
                                            <option value="">是否收费</option>
                                            <option value="0">收费</option>
                                            <option value="1">免费</option>
                                        </select>
                                    </div>
                                </div> -->
								<div class="layui-inline layui-form">
									<div style="width: 100px;">
										<select name="search_status" id="search_status">
											<option value="">状态</option>
											<option value="0">禁用</option>
											<option value="1">启用</option>
										</select>
									</div>
								</div>
								<button class="layui-btn" data-type="reload">搜索</button>
								<?php if($manager['type'] == 0): ?>
								    <button class="layui-btn layui-btn-danger btn-add">新增文章</button>
								<?php endif; ?>
							</div>

							<table class="layui-hide" id="test-table-reload" lay-filter="test-table-reload"></table>
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
        }).use(['util', 'index', 'table'], function () {
            var table = layui.table;
            var util = layui.util;

            //方法级渲染
            table.render({
                elem: '#test-table-reload'
                , url: '<?php echo url("admin/college/article"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                      { checkbox: true}
                    , { field: 'id', title: 'ID', width: 70, align: 'center', sort: true}
                    , { field: 'sort', title: '排序', width: 80, align: 'center', sort: true, edit: 'text'}
					, { field: 'name', title: '分类', width: 140, align: 'center', templet: "#nameField" }
                    , { field: 'title', title: '文章标题', templet: "#titleField" }
					, { field: 'img', title: '图片', width: 90, align: 'center', templet: "#imgField" }
					, { field: 'author', title: '作者', width: 90, align: 'center' }
					, { field: 'views', title: '查看', width: 90, align: 'center' }
					, { field: 'status', title: '状态', width: 70, align: 'center', templet: "#status" }
                    , { field: 'createtime', title: '发布时间', align: 'center', width:120, templet: function (d) { return util.toDateString(d.createtime * 1000, "yyyy-MM-dd"); } }
                    , { field: 'caozuo', title: '操作', width: 90, align: 'center', templet: "#caozuo"}
                ]]
                , page: true
                , height: 'full-145'
            });

            var $ = layui.$, active = {
                reload: function () {
                    var search_title = $('#search_title');
                    var search_status = $('#search_status');
                    var search_free = $('#search_free');
                    var search_pid = $('#search_pid');
                    //执行重载
                    table.reload('test-table-reload', {
                        page: {
                            curr: 1 //重新从第 1 页开始
                        }
                        , where: {
                            search_title: search_title.val(),
                            search_status: search_status.val(),
                            search_free: search_free.val(),
                            search_pid: search_pid.val(),
                        }
                    });
                },
                getCheckData: function () { //获取选中数据
                    var checkStatus = table.checkStatus('test-table-reload')
                        , data = checkStatus.data;
                    layer.alert(JSON.stringify(data));
                }
                , getCheckLength: function () { //获取选中数目
                    var checkStatus = table.checkStatus('test-table-reload')
                        , data = checkStatus.data;
                    layer.msg('选中了：' + data.length + ' 个');
                }
                , isAll: function () { //验证是否全选
                    var checkStatus = table.checkStatus('test-table-reload');
                    layer.msg(checkStatus.isAll ? '全选' : '未全选')
                }
            };

            $('.test-table-reload-btn .layui-btn').on('click', function () {
                var type = $(this).data('type');
                active[type] ? active[type].call(this) : '';
            });

            //监听表格复选框选择
            table.on('checkbox(test-table-reload)', function (obj) {
                console.log(obj)
            });

            //修改排序
            table.on('edit(test-table-reload)', function (obj) {
                var value = obj.value //得到修改后的值
                    , data = obj.data //得到所在行所有键值
                    , field = obj.field; //得到字段
                $.ajax({
                    type: 'post',
                    url: "<?php echo url('/admin/college/sort'); ?>",
                    data: {
                        field: field,
                        value: value,
                        id: data.id
                    },
                    success: function (res) {
                        if (res.code == 200) {
                            layer.msg('修改成功', {
                                offset: '15px'
                            });
                        } else {
                            layer.msg(res.msg, {
                                offset: '15px'
                            });
                        }
                    },
                    error: function () {
                        layer.msg('修改失败', {
                            offset: '15px'
                        });
                    }
                });
            });
            $('.btn-add').click(function () {
                layer.open({
                    type: 2
                    , title: '发布文章'
                    , shadeClose: false
                    , shade: 0.8
                    , area: ['60%', '90%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/college/add_article'); ?>"
                    , btn: ['发布', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        console.log(body.find('form').serialize());
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/college/add_article'); ?>",
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
                                layer.alert('发布失败');
                                layer.close(index);
                            }
                        });
                    }
                    , btn2: function (index, layero) {
                        layer.close(index);
                    }
                });
            })
            //监听工具条
            table.on('tool(test-table-reload)', function (obj) {
                var data = obj.data;
                if (obj.event === 'del') {
                    layer.confirm('删除文章', function (index) {
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/college/del_article'); ?>",
                            data: { id: data.id },
                            success: function (res) {
                                layer.alert(res.msg, function () {
                                    if($(".layui-laypage-btn")[0] == undefined){
                                            window.location.reload();
                                        }else{
                                            $(".layui-laypage-btn")[0].click(); 
                                        }
                                    layer.closeAll();
                                });
                            },
                            error: function () {
                                layer.alert('删除失败');
                            }
                        });
                    });
                } else if (obj.event === 'edit') {
                    layer.open({
                        type: 2
                        , title: '编辑文章'
                        , shadeClose: true
                        , shade: 0.8
                        , area: ['60%', '90%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/college/edit_article'); ?>" + '?id=' + data.id
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/college/edit_article'); ?>" + '?id=' + data.id,
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
                                    layer.alert('编辑失败');
                                    layer.close(index);
                                }
                            });
                        }
                        , btn2: function (index, layero) {
                            layer.close(index);
                        }
                    });
                }
            });

            $('.test-table-reload-btn .layui-btn').on('click', function () {
                var type = $(this).data('type');
                active[type] ? active[type].call(this) : '';
            });

        });
    </script>
	<!-- 是否收费 -->
	<script type="text/html" id="freeField">
		{{#  if(d.free == 1){ }}
			<button class="layui-btn layui-btn-xs layui-btn-radius" style="background-color: #5FB878;">免费</button>
		{{#  } else{ }}
			<button class="layui-btn layui-btn-xs layui-btn-danger layui-btn-radius">收费</button>
		{{#  } }}
	</script>
	<!-- 分类名称 -->
	<script type="text/html" id="nameField">
		<button class="layui-btn layui-btn-xs layui-btn-primary layui-btn-radius">{{d.name}}</button>
	</script>
	<!-- 文章图片 -->
	<script type="text/html" id="imgField">
		{{#  if (d.img){ }}
		<img style="width:51px; height:32px; border-radius: 12%" src="{{d.img}}">
		{{#  } else{ }}
		<button class="layui-btn layui-btn-xs layui-btn-disabled layui-btn-radius">无图</button>
		{{#  } }}
	</script>
	<!-- 文章标题 -->
	<script type="text/html" id="titleField">
		{{#  if(d.type == 1){ }}
			〔抖音〕
		{{#  } else if(d.type == 0){ }}
			<span style="color: #E71D36;">〔快手〕</span>
        {{#  } else{ }}
            〔抖音,<span style="color: #E71D36;">快手</span>〕
		{{#  } }}
		{{d.title}}
	</script>
	<!-- 状态 -->
	<script type="text/html" id="status">
		{{#  if(d.status == 1){ }}
			<button class="layui-btn layui-btn-xs layui-btn-radius" style="background-color: #5FB878;">正常</button>
		{{#  } else{ }}
			<button class="layui-btn layui-btn-xs layui-btn-disabled layui-btn-radius">禁用</button>
		{{#  } }}
	</script>
	<script type="text/html" id="caozuo">
		<a class="layui-btn layui-btn-sm" lay-event="edit">编辑</a>
    </script>
	</body>

</html>
