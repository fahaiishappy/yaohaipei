<?php if (!defined('THINK_PATH')) exit(); /*a:1:{s:70:"G:\wamp64\www\hico\public/../application/admin\view\picture\index.html";i:1612341548;}*/ ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>红人列表</title>
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<link rel="stylesheet" href="/layuiadmin/layui/css/layui.css" media="all">
		<link rel="stylesheet" href="/layuiadmin/style/admin.css" media="all">
	</head>
	<body>
        <div class="layui-fluid" id="LAY-component-grid-list">
            <div class="layui-row layui-col-space10 demo-list">
                <?php if(is_array($file) || $file instanceof \think\Collection || $file instanceof \think\Paginator): $i = 0; $__LIST__ = $file;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$com): $mod = ($i % 2 );++$i;?>
                    <div class="layui-col-sm4 layui-col-md3 layui-col-lg2">
                    <!-- 填充内容 -->
                        <div class="layui-card btn-add">
                            <a  lay-href="<?php echo url('admin/picture/image',array('folder' => $com)); ?>" lay-text="<?php echo $com; ?>">
                                <img src="/static/image/folder.png" style="width: 100%">
                                <div style="text-align: center;line-height: 34px"><?php echo $com; ?></div>
                            </a>
                        </div>
                    </div>
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </div>
        </div>
	<script src="/layuiadmin/layui/layui.js"></script>
	<script>
		layui.config({
            base: '/layuiadmin/' //静态资源所在路径
        }).extend({
            index: 'lib/index' //主入口模块
        }).use(['util', 'index', 'table', 'laydate'], function () {
            var $ = layui.$;

            // $('.btn-add').on('click', function () {
            //     var type = $(this).data('type');
            //     active[type] ? active[type].call(this) : '';
            // });

            // $('.btn-add').click(function () {
            //     console.log(111)
            // })
        });
    </script>
	</body>

</html>
