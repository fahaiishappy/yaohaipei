<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:68:"G:\wamp64\www\hico\public/../application/index\view\index\index.html";i:1626859658;s:58:"G:\wamp64\www\hico\application\index\view\common\head.html";i:1626858436;s:58:"G:\wamp64\www\hico\application\index\view\common\menu.html";i:1626857913;s:58:"G:\wamp64\www\hico\application\index\view\common\foot.html";i:1626858582;}*/ ?>
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
<link rel="stylesheet" href="/index/css/bootstrap.css">
<link rel="stylesheet" href="/index/css/main.css">
<link rel="stylesheet" href="/index/css/animate.css">
<link rel="stylesheet" href="/index/css/font-icon.css">
<link rel="stylesheet" href="/index/css/layui.css">
<link rel="stylesheet" href="/index/css/pagination.css">

<script src="/index/js/layui.js"></script>
<script src="/index/js/jquery-1.9.1.min.js"></script>
<script src="/index/js/bootstrap.js"></script>
<script src="/index/js/pagination.min.js"></script>
<script src="/index/js/wow.js"></script>
<script>
    (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https'){
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else{
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
</script>
<!--    百度统计-->
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?8126eda31d2f0387f1381a3c49db6e6c";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
</head>
<body>
<!--导航-->
<!--导航-->
<nav class="navbar navbar-expand-lg navbar-light nav-color-nav  navbar-lk text-dark">
    <div class="container">
        <a class="navbar-brand" href=""><img src="/index/image/logo-tra.png" alt="姚海培博客"></a>
        <div class="collapse navbar-collapse justify-content-between">
            <ul class="navbar-nav nav-color ">
                <li class="nav-item">
                    <a class="nav-link active" href="/">首页</a>
                </li>
                <?php if(is_array($menu) || $menu instanceof \think\Collection || $menu instanceof \think\Paginator): $k = 0; $__LIST__ = $menu;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;?>
                    <li class="nav-item">
                        <a class="nav-link" href="Saye.html"><?php echo $vo['name']; ?></a>
                    </li> 
                <?php endforeach; endif; else: echo "" ;endif; ?>
            </ul>
            <form class="form-inline my-2 my-lg-0" method="get" action="/search.html">
                <input class="form-control mr-sm-2" type="search" name="keyword" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>

<!--内容-->
<div class="container middle">
    <div class="row">
        <div class="col-md-8">
            <div class="container">
                <div class="row wow">
                    <!-- banner -->
                    <div id="banner" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <?php if(is_array($banner) || $banner instanceof \think\Collection || $banner instanceof \think\Paginator): $k = 0; $__LIST__ = $banner;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;?>   
                                <li data-target="#banner" data-slide-to="<?php echo $k-1; ?>" <?php if($k-1 == 0): ?>class="active"<?php endif; ?> ></li>    
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                        </ol>
                        <div class="carousel-inner">
                            <?php if(is_array($banner) || $banner instanceof \think\Collection || $banner instanceof \think\Paginator): $k = 0; $__LIST__ = $banner;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;?>
                                <div class="carousel-item <?php if($k == 1): ?>active<?php endif; ?>" >
                                    <img class="d-block w-100" src="<?php echo $vo['img']; ?>">
                                </div>         
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                        </div>
                        <a class="carousel-control-prev" href="#banner" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a class="carousel-control-next" href="#banner" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
                <div class="row mt-2 wow">
                    <div class="col-md-12 bgc">
                        <div class="new">
                            <span><i class="el-certificate"></i></span>
                            <span>最新文章</span>
                            <small>New Article</small>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 ">
                    <ul class="list-unstyled art-list">
                        <?php if(is_array($articleList) || $articleList instanceof \think\Collection || $articleList instanceof \think\Paginator): $key = 0; $__LIST__ = $articleList;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
                            <li class="media wow">
                                <div class="art-img">
                                    <a href="56.html">
                                        <img class="mr-3" src="<?php echo $vo['img']; ?>">
                                    </a>
                                </div>
                                <div class="media-body art-content">
                                    <h5>
                                        <a href="56.html"><?php echo $vo['title']; ?></a>
                                    </h5>
                                    <p><?php echo strip_tags($vo['content']); ?></p>
                                    <ul>
                                        <li>
                                            <i class="el-time"></i>
                                            <?php echo date('Y-m-d H:i:s',$vo['createtime']); ?>
                                        </li>
                                        <li class="d-none d-sm-none d-md-none d-lg-block">
                                            <i class="el-user"></i>
                                            <?php echo $vo['author']; ?>
                                        </li>
                                        <li>
                                            <i class="el-tags"></i>
                                            <?php echo TemplateLable($vo['lable'] ); ?>
                                        </li>
                                        <li class="d-none d-sm-none d-md-none d-lg-block">
                                            <a href="56.html" title="PHP">
                                                <i class="el-th-list"></i>
                                                <?php echo $vo['classifyName']; ?>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                </div>
                <div id="pagination1" class="page fl"></div>
                <script type="text/javascript">
                    $(function() {
                        $("#pagination1").pagination({
                            currentPage: 1,
                            totalPage: 12,
                            callback: function(current) {
                                $("#current1").text(current)
                            }
                        });
                    });
                </script>
            </div>
        </div>
        <!--右边-->
        <div class="col-md-4">
            <div class="container">
                <div class="row bgc">
                    <div class="new new-right">
                        <span><i class="el-asl"></i>推荐文章</span>
                        <small>Recommended Article</small>
                    </div>
                    <ul class="list-unstyled artimg-list">
                        <?php if(is_array($recommend) || $recommend instanceof \think\Collection || $recommend instanceof \think\Paginator): $key = 0; $__LIST__ = $recommend;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
                            <li class="item">
                                <a href="151.html">
                                    <i class="el-lines"></i>
                                    <span><?php echo $vo['title']; ?></span>
                                </a>
                            </li>
                        <?php endforeach; endif; else: echo "" ;endif; ?>
                    </ul>
                </div>
                <div class="row bgc">
                    <div class="new new-right">
                        <span><i class="el-tags"></i>热门标签</span>
                        <small>Hot Tags</small>
                    </div>
                    <div class="col-md-12 ">
                        <ul class="label">
                            <?php if(is_array($lables) || $lables instanceof \think\Collection || $lables instanceof \think\Paginator): $key = 0; $__LIST__ = $lables;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($key % 2 );++$key;?>
                                <li style="background: <?php echo $vo['background']; ?>"><a href="#"><?php echo $vo['name']; ?> (<?php echo TemplateLableNum($vo['id'] ); ?>)</a></li>
                            <?php endforeach; endif; else: echo "" ;endif; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--底部-->
<footer id="footer">
    <div class="foot-nav text-center">
        <div class="copy-right"><span>Copyright © loubi blog 2017 </span></div>
        <div class="bottom-nav">
            <a href="javascript:;"><span>豫ICP备19046096号</span></a>
        </div>
    </div>
</footer>
<script>
    new WOW().init();//把wow初始化
</script>
<script>
    window.onload = function () {
        var art_list = document.getElementById('box');
        var art_list_a = art_list.getElementsByTagName('a');
        for (var i = 0; i < art_list_a.length; i++) {
            var aclick = art_list_a[i];
            aclick.onclick = function () {
                for (var j = 0; j < art_list_a.length; j++) {
                    art_list_a[j].className = '';
                    art_list_a[j].style.color = '#000000';
                }
                this.className = 'actives';
                this.style.color = '#ffffff';
            };
        }
    }
</script>
</body>
</html>