<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:75:"G:\wamp64\www\yaohaipei\public/../application/admin\view\article\index.html";i:1628490990;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\head.html";i:1626926141;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\foot.html";i:1626926140;}*/ ?>
<!DOCTYPE html>
<html>

<head>
	<title>文章列表</title>
	<meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/static/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/static/admin/style/admin.css" media="all">
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
                                        <?php if(is_array($cate) || $cate instanceof \think\Collection || $cate instanceof \think\Paginator): $i = 0; $__LIST__ = $cate;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;if($vo['pid'] > 0): ?>
                                                <option value="<?php echo $vo['id']; ?>"><?php echo $vo['pre']; ?><?php echo $vo['name']; ?></option>
                                            <?php else: ?>
                                                <option value="<?php echo $vo['id']; ?>" disabled><?php echo $vo['pre']; ?><?php echo $vo['name']; ?></option>
                                            <?php endif; endforeach; endif; else: echo "" ;endif; ?>
                                    </select>
                                </div>
                            </div>
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
							<button class="layui-btn layui-btn-danger btn-add">新增文章</button>
						</div>
						<table class="layui-hide" id="test-table-reload" lay-filter="test-table-reload"></table>
					</div>
				</div>
			</div>
		</div>
	</div>
    <script src="/static/admin/layui/layui.js"></script>
	<script>
	layui.config({
        base: '/static/admin/' //静态资源所在路径
    }).extend({
        index: 'lib/index' //主入口模块
    }).use(['util', 'index', 'table'], function () {
        var table = layui.table;
        var util = layui.util;

        //方法级渲染
        table.render({
            elem: '#test-table-reload'
            , url: '<?php echo url("admin/article/index"); ?>'
            , headers: { ajax: 1 }
            , cols: [[
                  { field: 'id', title: 'ID', width: 80, align: 'center', sort: true}
                , { field: 'sort', title: '排序', width: 80, align: 'center', sort: true, edit: 'text'}
				, { field: 'name', title: '分类', width: 140, align: 'center', templet: "#nameField" }
                , { field: 'title', title: '文章标题' }
				, { field: 'img', title: '封面', width: 200, align: 'center', templet: "#imgField" }
				, { field: 'author', title: '作者', width: 100, align: 'center' }
				, { field: 'views', title: '查看', width: 100, align: 'center' }
				, { field: 'status', title: '状态', width: 100, align: 'center',event: "status", style:'cursor: pointer;', templet: "#status" }
                , { field: 'recommend', title: '推荐', width: 100, align: 'center',event: "recommend", style:'cursor: pointer;', templet: "#recommend" }
                , { field: 'createtime', title: '发布时间', align: 'center', width:150, templet: function (d) { return util.toDateString(d.createtime * 1000, "yyyy-MM-dd"); } }
                , { field: 'caozuo', title: '操作', width: 150, align: 'center', templet: "#caozuo"}
            ]]
            , page: true
            , height: 'full-145'
        });

        var $ = layui.$, active = {
            reload: function () {
                //执行重载
                table.reload('test-table-reload', {
                    page: {
                        curr: 1 //重新从第 1 页开始
                    }
                    , where: {
                        search_title: $('#search_title').val(),
                        search_status: $('#search_status').val(),
                        search_pid: $('#search_pid').val(),
                    }
                });
            },
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
                url: "<?php echo url('/admin/article/sort'); ?>",
                data: {
                    sort: value,
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
                , title: '新增文章'
                , shadeClose: false
                , shade: 0.8
                , area: ['60%', '90%']
                , maxmin: false
                , content: "<?php echo url('/admin/article/add'); ?>"
                , btn: ['发布', '取消']
                , yes: function (index, layero) {
                    var body = layer.getChildFrame('body', index);
                    var iframeWin = window[layero.find('iframe')[0]['name']];
                    console.log(body.find('form').serialize());
                    $.ajax({
                        type: 'post',
                        url: "<?php echo url('/admin/article/add'); ?>",
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
            if(obj.event === 'recommend'){
                $.ajax({
                    type: 'post',
                    url: "<?php echo url('/admin/article/recommend'); ?>",
                    data: { 
                        id: data.id,
                        recommend: data.recommend,
                     },
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
                        layer.alert('修改状态失败');
                    }
                });
            }else if(obj.event === 'status'){
                $.ajax({
                    type: 'post',
                    url: "<?php echo url('/admin/article/status'); ?>",
                    data: { 
                        id: data.id,
                        status: data.status,
                     },
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
                        layer.alert('修改状态失败');
                    }
                });
            }else if (obj.event === 'del') {
                layer.confirm('删除文章', function (index) {
                    $.ajax({
                        type: 'post',
                        url: "<?php echo url('/admin/article/del'); ?>",
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
                    , title: '修改文章'
                    , shadeClose: true
                    , shade: 0.8
                    , area: ['60%', '90%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/article/edit'); ?>" + '?id=' + data.id
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/article/edit'); ?>" + '?id=' + data.id,
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
<!-- 状态 -->
<script type="text/html" id="status">
	{{#  if(d.status == 1){ }}
		<button class="layui-btn layui-btn-xs layui-btn-radius" style="background-color: #5FB878;">正常</button>
	{{#  } else{ }}
		<button class="layui-btn layui-btn-xs layui-btn-disabled layui-btn-radius">禁用</button>
	{{#  } }}
</script>
<!-- 状态 -->
<script type="text/html" id="recommend">
    {{#  if(d.recommend == 1){ }}
        <button class="layui-btn layui-btn-xs layui-btn-radius" style="background-color: #5FB878;">是</button>
    {{#  } else{ }}
        <button class="layui-btn layui-btn-xs layui-btn-disabled layui-btn-radius">否</button>
    {{#  } }}
</script>
<script type="text/html" id="caozuo">
	<a class="layui-btn layui-btn-sm layui-btn-warm" lay-event="edit">修改</a>
    <a class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</a>
</script>
</body>

</html>
