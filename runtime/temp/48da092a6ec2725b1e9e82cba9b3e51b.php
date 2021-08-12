<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:68:"G:\wamp64\www\hico\public/../application/admin\view\share\index.html";i:1612341550;}*/ ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>分享列表</title>
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
		<style type="text/css">
			tbody .layui-table-cell {
				height: 80px;
				line-height: 80px;
			}
		</style>
	</head>
	<body>
		<div class="layui-fluid">
			<div class="layui-row layui-col-space15">
				<div class="layui-col-md12">
					<div class="layui-card">
						<div class="layui-card-header">分享列表</div>
						<div class="layui-card-body">
							<div class="test-table-reload-btn" style="margin-bottom: 10px;">
								<div class="layui-inline layui-form">
                                    <div style="width: 100px;">
                                        <select name="search_category" id="search_category" lay-verify="">
                                            <option value="">选择类别</option>
                                            <option value="1">每日心语</option>
                                            <option value="2">拉新素材</option>
                                            <option value="3">用户反馈</option>
                                            <option value="4">宣传素材</option>
                                            <option value="5">节日素材</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="layui-inline layui-form">
                                    <div style="width: 100px;">
                                        <select name="search_status" id="search_status" lay-verify="">
                                            <option value="">状态</option>
                                            <option value="1">正常</option>
                                            <option value="0">禁用</option>
                                        </select>
                                    </div>
                                </div>
								<button class="layui-btn" data-type="reload">搜索</button>
								<button class="layui-btn layui-btn-danger btn-add">发布分享</button>
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
        }).use(['util', 'index', 'table', 'laydate'], function () {
            var table = layui.table;
            var laydate = layui.laydate;
            var util = layui.util;

            //方法级渲染
            table.render({
                elem: '#test-table-reload'
                , url: '<?php echo url("admin/share/index"); ?>'
                , headers: { ajax: 1 }
                , cols: [[
                    { checkbox: true, fixed: true}
                    , { field: 'id', title: 'ID', align: 'center', width:80, sort: true, fixed: true}
                    , { field: 'sort', title: '排序', align: 'center', width:80, sort: true, edit: 'text'}
                    , { field: 'img', title: '分享图片', align: 'center', width:150, templet: '#img'}
                    , { field: 'category', title: '分享类型', align: 'center', width:100, templet: '#category'}
                    , { field: 'content', title: '分享内容', align: 'center', width:300}
                    , { field: 'createtime', title: '发布时间', align: 'center', width:120, templet: function (d) { return util.toDateString(d.createtime * 1000, "yyyy-MM-dd"); } }
                    , { field: 'status', title: '状态', align: "center", width:80, templet: "#status" }
                    , { title: '操作', align: 'center', width:190, toolbar: '#test-table-reload-barDemo' }
                ]]
                , page: true
                , height: 'full-140'
            });

            var $ = layui.$, active = {
                reload: function () {
                    var search_category = $('#search_category');
                    var search_status = $('#search_status');
                    //执行重载
                    table.reload('test-table-reload', {
                        page: {
                            curr: 1 //重新从第 1 页开始
                        }
                        , where: {
                            search_category: search_category.val(),
                            search_status: search_status.val(),
                        }
                    });
                }
            };

            $('.test-table-reload-btn .layui-btn').on('click', function () {
                var type = $(this).data('type');
                active[type] ? active[type].call(this) : '';
            });

            $('.btn-add').click(function () {
                layer.open({
                    type: 2
                    , title: '发布分享'
                    , shadeClose: true
                    , shade: 0.8
                    , area: ['50%', '80%']
                    , maxmin: false
                    , content: "<?php echo url('/admin/share/add'); ?>"
                    , btn: ['保存', '取消']
                    , yes: function (index, layero) {
                        var body = layer.getChildFrame('body', index);
                        var iframeWin = window[layero.find('iframe')[0]['name']];
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/share/add'); ?>",
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
                                layer.alert('发布分享失败');
                                layer.close(index);
                            }
                        });
                    }
                    , btn2: function (index, layero) {
                        layer.close(index);
                    }
                });
            })
            //修改排序
            table.on('edit(test-table-reload)', function (obj) {
                var value = obj.value //得到修改后的值
                    , data = obj.data //得到所在行所有键值
                    , field = obj.field; //得到字段
                $.ajax({
                    type: 'post',
                    url: "<?php echo url('/admin/share/sort'); ?>",
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
            //监听工具条
            table.on('tool(test-table-reload)', function (obj) {
                var data = obj.data;
                if (obj.event === 'del') {
                    layer.confirm('删除分享', function (index) {
                        $.ajax({
                            type: 'post',
                            url: "<?php echo url('/admin/share/del'); ?>",
                            data: { id: data.id },
                            success: function (res) {
                                layer.alert(res.msg, function () {
                                    obj.del();
                                    layer.closeAll();
                                });
                            },
                            error: function () {
                                layer.alert('删除红人失败');
                            }
                        });
                    });
                } else if (obj.event === 'edit') {
                    layer.open({
                        type: 2
                        , title: '编辑分享'
                        , shadeClose: true
                        , shade: 0.8
                        , area: ['50%', '80%']
                        , maxmin: false
                        , content: "<?php echo url('/admin/share/edit'); ?>" + '?id=' + data.id
                        , btn: ['保存', '取消']
                        , yes: function (index, layero) {
                            var body = layer.getChildFrame('body', index);
                            var iframeWin = window[layero.find('iframe')[0]['name']];
                            $.ajax({
                                type: 'post',
                                url: "<?php echo url('/admin/share/edit'); ?>" + '?id=' + data.id,
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
                                    layer.alert('编辑分享失败');
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

	<!-- 头像 -->
	<script type="text/html" id="img">
        {{# layui.each(d.img, function(index, vo){ }}
            <a href="{{vo}}" target="_blank">
              <img style="width:38px; height:67px; border-radius: 5%" src="{{vo}}">
            </a>
        {{# }); }}
        
    </script>

	<!-- 性别 -->
	<script type="text/html" id="category">
		{{#  if(d.category == 1){ }}
            每日心语
        {{#  } else if(d.category == 2){ }}
            拉新素材
        {{#  } else if(d.category == 3){ }}
            用户反馈
        {{#  } else if(d.category == 4){ }}
            宣传素材
        {{#  } else if(d.category == 5){ }}
            节日素材
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

	<script type="text/html" id="test-table-reload-barDemo">
        <a class="layui-btn layui-btn-sm" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</a>
    </script>
	</body>

</html>
