<?php if (!defined('THINK_PATH')) exit(); /*a:5:{s:74:"G:\wamp64\www\yaohaipei\public/../application/index\view\detail\index.html";i:1627032572;s:63:"G:\wamp64\www\yaohaipei\application\index\view\common\head.html";i:1627271842;s:63:"G:\wamp64\www\yaohaipei\application\index\view\common\menu.html";i:1627268535;s:63:"G:\wamp64\www\yaohaipei\application\index\view\common\link.html";i:1626937027;s:63:"G:\wamp64\www\yaohaipei\application\index\view\common\foot.html";i:1626934409;}*/ ?>
<!DOCTYPE html>
<html>
<head>
    <title>姚海培博客</title>
    <meta name="keywords" content="姚海培博客,技术博客,个人博客">
    <meta name="description" content="姚海培博客,技术博客,个人博客">
    <meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<meta name="sogou_site_verification" content="Pg8qb00ZtG">
<meta name="baidu_union_verify" content="10a5589da3d24bb174aba5c99aadd5ae">
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="/static/index/css/bootstrap.css">
<link rel="stylesheet" href="/static/index/css/animate.css">
<link rel="stylesheet" href="/static/index/css/font-icon.css">
<link rel="stylesheet" href="/static/index/css/pagination.css">
<link rel="stylesheet" href="/static/index/css/main.css">

<script src="/static/index/js/jquery-1.9.1.min.js"></script>
<script src="/static/index/js/layer/layer.js"></script>
<script src="/static/index/js/bootstrap.js"></script>
<script src="/static/index/js/pagination.min.js"></script>
<script src="/static/index/js/main.js"></script>
    <link rel="stylesheet" href="/static/admin/prism/prism.css">
    <script type="text/javascript" src="/static/admin/prism/prism.js"></script>
</head>
<body>
<!--导航-->
<!--导航-->
<nav class="navbar navbar-expand-lg navbar-light nav-color-nav  navbar-lk text-dark">
    <div class="container">
        <a class="navbar-brand" href=""><img src="/static/index/image/logo-tra.png" alt="姚海培博客"></a>
        <div class="collapse navbar-collapse justify-content-between">
            <ul class="navbar-nav nav-color ">
                <li class="nav-item">
                    <a class="nav-link <?php if($nav == 0): ?>active<?php endif; ?>" href="/">首页</a>
                </li>
                <?php if(is_array($menu) || $menu instanceof \think\Collection || $menu instanceof \think\Paginator): $k = 0; $__LIST__ = $menu;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;?>
                    <li class="nav-item">
                        <a class="nav-link <?php if($nav == $vo['id']): ?>active<?php endif; ?>" href="<?php echo url('Index/category/index',array('id' => $vo['id'])); ?>"><?php echo $vo['name']; ?></a>
                    </li> 
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </ul>
        </div>
    </div>
</nav>

<!--内容-->
<div class="container middle">
    <div class="row">
        <div class="col-md-9">
            <div class="row detail">
                <div class="title"><?php echo $info['title']; ?></div>
                <ul class="information">
                    <li>
                        <i class="el-user"></i>
                        <?php echo $info['author']; ?>
                    </li>
                    <li>
                        <i class="el-time"></i>
                        <?php echo date('Y-m-d H:i:s',$info['createtime']); ?>
                    </li>
                    <li>
                    <a href="<?php echo url('Index/category/index',array('id' => $info['id'])); ?>" title="<?php echo $info['classifyName']; ?>">
                        <i class="el-th-list"></i>
                        <?php echo $info['classifyName']; ?>
                    </a>
                    </li>
                    <li>
                        <i class="el-tags"></i>
                        <?php echo TemplateLable($info['lable'] ); ?>
                    </li>
                </ul>
                <div class="content"><?php echo $info['content']; ?></div>
            </div>
        </div>
        <!--右边-->
        <div class="col-md-3">
            <div class="container">
                <div class="row bgc">
                    <div class="new new-right">
                        <span><i class="el-asl"></i>推荐文章</span>
                        <small>Recommended Article</small>
                    </div>
                    <ul class="list-unstyled artimg-list">
                        <?php if(is_array($recommend) || $recommend instanceof \think\Collection || $recommend instanceof \think\Paginator): $key = 0; $__LIST__ = $recommend;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
                            <li class="item">
                                <a href="<?php echo url('Index/detail/index',array('id' => $vo['id'])); ?>">
                                    <i class="el-lines"></i>
                                    <span><?php echo $vo['title']; ?></span>
                                </a>
                            </li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                </div>
                <div class="row bgc mt15">
                    <div class="new new-right">
                        <span><i class="el-tags"></i>热门标签</span>
                        <small>Hot Tags</small>
                    </div>
                    <div class="col-md-12 ">
                        <ul class="label">
                            <?php if(is_array($lables) || $lables instanceof \think\Collection || $lables instanceof \think\Paginator): $key = 0; $__LIST__ = $lables;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
                                <li style="background: <?php echo $vo['background']; ?>"><a href="<?php echo url('Index/category/index',array('id' => $vo['id'])); ?>"><?php echo $vo['name']; ?> (<?php echo TemplateLableNum($vo['id'] ); ?>)</a></li>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                        </ul>
                    </div>
                </div>
                <div class="row bgc mt15">
                    <div class="new new-right">
                        <span><i class="el-link"></i>友情链接</span>
                        <small>Friendly link</small>
                    </div>
                    <div class="col-md-12 ">
                        <ul class="label">
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
    <li><a href="#">93高考网</a></li>
</ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--底部-->
<footer id="footer">
    <div class="foot-nav">
        <div>Copyright © loubi blog 2017 </div>
        <div>豫ICP备19046096号</div>
    </div>
</footer>
</body>

</html>