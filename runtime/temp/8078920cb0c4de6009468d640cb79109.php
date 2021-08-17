<?php if (!defined('THINK_PATH')) exit(); /*a:3:{s:73:"G:\wamp64\www\yaohaipei\public/../application/admin\view\login\login.html";i:1629166939;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\head.html";i:1629166939;s:63:"G:\wamp64\www\yaohaipei\application\admin\view\common\foot.html";i:1629166939;}*/ ?>
<!DOCTYPE html>
<html>
<head>
	<title>管理平台</title>
	<meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link rel="stylesheet" href="/static/admin/layui/css/layui.css" media="all">
<link rel="stylesheet" href="/static/admin/style/admin.css" media="all">
	<style type="text/css">
		.canvas {
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
		}

		.loginform {
			width: 350px;
			margin: 0 auto;
			position: absolute;
			z-index: 9999;
			top: 25%;
			left: 50%;
			margin-left: -175px;
		}

		.layui-card {
			padding: 10px;
		}

		.layui-card-body {
			padding: 15px;
		}

		.layui-card-body+.layui-card-body {
			padding-top: 0;
		}

		canvas {
			background-color: #000;
			width: 100%;
			height: 100%;
		}
	</style>
</head>

<body>
	<div class="canvas" style="">
		<canvas id="nokey"></canvas>
	</div>

	<div class="loginform">
		<div>
			<img src="">
		</div>
		<form class="layui-form" method="POST" id="sysset_form" novalidate="">
			<div class="layui-card">
				<div class="layui-card-body layui-row">
					<div class="layui-col-md12">帐号</div>
					<div class="layui-col-md12">
						<input type="username" name="username" placeholder="请输入登陆帐号" autocomplete="off" class="layui-input">
					</div>
				</div>
				<div class="layui-card-body layui-row">
					<div class="layui-col-md12">密码</div>
					<div class="layui-col-md12">
						<input type="password" name="password" placeholder="请输入登陆密码" autocomplete="off" class="layui-input">
					</div>
				</div>
				<div class="layui-card-body layui-row">
					<button class="layui-btn layui-col-md12" type="submit">登录</button>
				</div>
			</div>
		</form>
	</div>
	<script src="/static/admin/layui/layui.js"></script>
	<script>
		layui.config({
			base: '/static/admin/' //静态资源所在路径
		}).extend({
			index: 'lib/index' //主入口模块
		}).use(['layer', 'index', 'form'], function() {
			var $ = layui.jquery,
				layer = layui.layer,
				form = layui.form;

			$('#sysset_form').submit(function(e) {
				e.preventDefault();
				let form_data = $(e.target).serialize();
				$.ajax({
					type: 'post',
					url: "<?php echo url('admin/login/login'); ?>",
					data: form_data,
					success: function(res) {
						if (res.code == 200) {
							layer.msg(res.msg);
							setTimeout(function() {
								location.reload();
							}, 1000);
						} else {
							layer.msg(res.msg);
						}
					},
					error: function() {
						layer.msg('登录失败');
					}
				});
				e.preventDefault();
			});
		});

		//背景特效
		var canvas = document.getElementById('nokey'),
			can_w = parseInt(canvas.getAttribute('width')),
			can_h = parseInt(canvas.getAttribute('height')),
			ctx = canvas.getContext('2d');

		// console.log(typeof can_w);

		var ball = {
				x: 0,
				y: 0,
				vx: 0,
				vy: 0,
				r: 0,
				alpha: 1,
				phase: 0
			},
			ball_color = {
				r: 207,
				g: 255,
				b: 4
			},
			R = 2,
			balls = [],
			alpha_f = 0.03,
			alpha_phase = 0,

			// Line
			link_line_width = 0.8,
			dis_limit = 260,
			add_mouse_point = true,
			mouse_in = false,
			mouse_ball = {
				x: 0,
				y: 0,
				vx: 0,
				vy: 0,
				r: 0,
				type: 'mouse'
			};

		// Random speed
		function getRandomSpeed(pos) {
			var min = -1,
				max = 1;
			switch (pos) {
				case 'top':
					return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
					break;
				case 'right':
					return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
					break;
				case 'bottom':
					return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
					break;
				case 'left':
					return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
					break;
				default:
					return;
					break;
			}
		}

		function randomArrayItem(arr) {
			return arr[Math.floor(Math.random() * arr.length)];
		}

		function randomNumFrom(min, max) {
			return Math.random() * (max - min) + min;
		}
		console.log(randomNumFrom(0, 10));
		// Random Ball
		function getRandomBall() {
			var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
			switch (pos) {
				case 'top':
					return {
						x: randomSidePos(can_w),
						y: -R,
						vx: getRandomSpeed('top')[0],
						vy: getRandomSpeed('top')[1],
						r: R,
						alpha: 1,
						phase: randomNumFrom(0, 10)
					}
					break;
				case 'right':
					return {
						x: can_w + R,
						y: randomSidePos(can_h),
						vx: getRandomSpeed('right')[0],
						vy: getRandomSpeed('right')[1],
						r: R,
						alpha: 1,
						phase: randomNumFrom(0, 10)
					}
					break;
				case 'bottom':
					return {
						x: randomSidePos(can_w),
						y: can_h + R,
						vx: getRandomSpeed('bottom')[0],
						vy: getRandomSpeed('bottom')[1],
						r: R,
						alpha: 1,
						phase: randomNumFrom(0, 10)
					}
					break;
				case 'left':
					return {
						x: -R,
						y: randomSidePos(can_h),
						vx: getRandomSpeed('left')[0],
						vy: getRandomSpeed('left')[1],
						r: R,
						alpha: 1,
						phase: randomNumFrom(0, 10)
					}
					break;
			}
		}

		function randomSidePos(length) {
			return Math.ceil(Math.random() * length);
		}

		// Draw Ball
		function renderBalls() {
			Array.prototype.forEach.call(balls, function(b) {
				if (!b.hasOwnProperty('type')) {
					ctx.fillStyle = 'rgba(' + ball_color.r + ',' + ball_color.g + ',' + ball_color.b + ',' + b.alpha + ')';
					ctx.beginPath();
					ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
					ctx.closePath();
					ctx.fill();
				}
			});
		}

		// Update balls
		function updateBalls() {
			var new_balls = [];
			Array.prototype.forEach.call(balls, function(b) {
				b.x += b.vx;
				b.y += b.vy;

				if (b.x > -(50) && b.x < (can_w + 50) && b.y > -(50) && b.y < (can_h + 50)) {
					new_balls.push(b);
				}

				// alpha change
				b.phase += alpha_f;
				b.alpha = Math.abs(Math.cos(b.phase));
				// console.log(b.alpha);
			});

			balls = new_balls.slice(0);
		}

		// loop alpha
		function loopAlphaInf() {

		}

		// Draw lines
		function renderLines() {
			var fraction, alpha;
			for (var i = 0; i < balls.length; i++) {
				for (var j = i + 1; j < balls.length; j++) {

					fraction = getDisOf(balls[i], balls[j]) / dis_limit;

					if (fraction < 1) {
						alpha = (1 - fraction).toString();

						ctx.strokeStyle = 'rgba(150,150,150,' + alpha + ')';
						ctx.lineWidth = link_line_width;

						ctx.beginPath();
						ctx.moveTo(balls[i].x, balls[i].y);
						ctx.lineTo(balls[j].x, balls[j].y);
						ctx.stroke();
						ctx.closePath();
					}
				}
			}
		}

		// calculate distance between two points
		function getDisOf(b1, b2) {
			var delta_x = Math.abs(b1.x - b2.x),
				delta_y = Math.abs(b1.y - b2.y);

			return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
		}

		// add balls if there a little balls
		function addBallIfy() {
			if (balls.length < 20) {
				balls.push(getRandomBall());
			}
		}

		// Render
		function render() {
			ctx.clearRect(0, 0, can_w, can_h);

			renderBalls();

			renderLines();

			updateBalls();

			addBallIfy();

			window.requestAnimationFrame(render);
		}

		// Init Balls
		function initBalls(num) {
			for (var i = 1; i <= num; i++) {
				balls.push({
					x: randomSidePos(can_w),
					y: randomSidePos(can_h),
					vx: getRandomSpeed('top')[0],
					vy: getRandomSpeed('top')[1],
					r: R,
					alpha: 1,
					phase: randomNumFrom(0, 10)
				});
			}
		}
		// Init Canvas
		function initCanvas() {
			canvas.setAttribute('width', window.innerWidth);
			canvas.setAttribute('height', window.innerHeight);

			can_w = parseInt(canvas.getAttribute('width'));
			can_h = parseInt(canvas.getAttribute('height'));
		}
		window.addEventListener('resize', function(e) {
			console.log('Window Resize...');
			initCanvas();
		});

		function goMovie() {
			initCanvas();
			initBalls(30);
			window.requestAnimationFrame(render);
		}
		goMovie();

		// Mouse effect
		canvas.addEventListener('mouseenter', function() {
			console.log('mouseenter');
			mouse_in = true;
			balls.push(mouse_ball);
		});
		canvas.addEventListener('mouseleave', function() {
			console.log('mouseleave');
			mouse_in = false;
			var new_balls = [];
			Array.prototype.forEach.call(balls, function(b) {
				if (!b.hasOwnProperty('type')) {
					new_balls.push(b);
				}
			});
			balls = new_balls.slice(0);
		});
		canvas.addEventListener('mousemove', function(e) {
			var e = e || window.event;
			mouse_ball.x = e.pageX;
			mouse_ball.y = e.pageY;
		});
	</script>
</body>
</html>