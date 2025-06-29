

<!DOCTYPE html>
<html lang="zh-cn">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>登出 - Daimayuan Online Judge</title>
		
		<script type="text/javascript">uojHome = 'http://oj.daimayuan.top'</script>

		<!-- Bootstrap core CSS -->
		<link type="text/css" rel="stylesheet" href="http://oj.daimayuan.top/css/bootstrap.min.css?v=2019.5.31" />		<!-- Bootstrap Glyphicons CSS-->
		<link type="text/css" rel="stylesheet" href="http://oj.daimayuan.top/css/bootstrap-glyphicons.min.css?v=2019.5.31" />
		<!-- Custom styles for this template -->
		<link type="text/css" rel="stylesheet" href="http://oj.daimayuan.top/css/uoj-theme.css?v=2.3333" />		
		<!-- jQuery (necessary for Bootstrap\'s JavaScript plugins) -->
		<script src="http://oj.daimayuan.top/js/jquery.min.js"></script>		
		<!-- jQuery autosize -->
		<script src="http://oj.daimayuan.top/js/jquery.autosize.min.js"></script>		<script type="text/javascript">
			$(document).ready(function() {
				$('textarea').autosize();
			});
		</script>
		
		<!-- jQuery cookie -->
		<script src="http://oj.daimayuan.top/js/jquery.cookie.min.js"></script>		
		<!-- jQuery modal -->
		<script src="http://oj.daimayuan.top/js/jquery.modal.js"></script>		
				
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="http://oj.daimayuan.top/js/popper.min.js?v=2019.5.31"></script>		<script src="http://oj.daimayuan.top/js/bootstrap.min.js?v=2019.5.31"></script>		
		<!-- Color converter -->
		<script src="http://oj.daimayuan.top/js/color-converter.min.js"></script>		
		<!-- uoj -->
		<script src="file:///D:/oj.daimayuan.top/js/uoj.js"></script>		
		<!-- readmore -->
		<script src="http://oj.daimayuan.top/js/readmore/readmore.min.js"></script>		
		<!-- LAB -->
		<script src="http://oj.daimayuan.top/js/LAB.min.js"></script>
		<!-- favicon -->
		<link rel="shortcut icon" href="http://oj.daimayuan.top/images/favicon.ico" />
		
				
				
				<!-- MD5 -->
		<script src="http://oj.daimayuan.top/js/md5.min.js"></script>				
				
				
				
				
		
				
				
				
				
				
		
		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
		
		<script type="text/javascript">
		before_window_unload_message = null;
		$(window).on('beforeunload', function() {
			if (before_window_unload_message !== null) {
			    return before_window_unload_message;
			}
		});
		</script>
		
			</head>
	<body role="document">
		<div class="container theme-showcase" role="main">
						<div>
				<ul class="nav nav-pills float-right" role="tablist">
									<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="uoj_username_a">
							<span id="uoj_username_page" class="uoj-username" data-rating="1500" data-link="0"></span> 						</a>
						
						<ul class="dropdown-menu" role="menu">
							<li role="presentation"><a class="dropdown-item" id="my_chat">个人信息</a></li>
							<li role="presentation"><a class="dropdown-item" href="oj.daimayuan.top/user/system-msg.html">系统消息&nbsp;&nbsp;</a></li>
													</ul>
					</li>
					<li id="login" class="nav-item" role="presentation"><a class="nav-link" href="file:///D:/oj.daimayuan.top/login.html">登录</a></li>
					<li id="register" class="nav-item" role="presentation"><a class="nav-link" href="file:///D:/oj.daimayuan.top/register.html">注册</a></li>
					<li id="logout" class="nav-item" role="presentation"><a class="nav-link" href="file:///D:/oj.daimayuan.top/logout.html">登出</a></li>
								</ul><script type="text/javascript">
							var uoj_username = localStorage.getItem("uoj-username");
							if (uoj_username != null) {
								document.querySelector("#uoj_username_page").innerHTML = uoj_username;
								document.querySelector("#my_chat").href = "user/profile/" + uoj_username + ".html";
								document.querySelector("#login").hidden = true;
								document.querySelector("#register").hidden = true;
							}
							else {
								document.querySelector("#uoj_username_a").hidden = true;
								document.querySelector("#logout").hidden = true;
							}
						</script>
				<h1 class="d-none d-sm-block"><a href="../oj.daimayuan.top.html"><img src="http://oj.daimayuan.top/images/logo_small.png" alt="Logo" class="img-rounded" style="width:39px; height:39px;" /></a> Daimayuan Online Judge</h1>
				<h1 class="d-block d-sm-none">Home</h1>
			</div>
			
			<div class="navbar navbar-light navbar-expand-md bg-light mb-4" role="navigation">
	<a class="navbar-brand" href="../oj.daimayuan.top.html">Home</a>
	<button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target=".navbar-collapse">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="nav navbar-nav mr-auto">
			<li class="nav-item"><a class="nav-link" href="contests"><span class="glyphicon glyphicon-stats"></span> 比赛</a></li>
			<li class="nav-item"><a class="nav-link" href="problems"><span class="glyphicon glyphicon-list-alt"></span> 题库</a></li>
			<li class="nav-item"><a class="nav-link" href="submissions"><span class="glyphicon glyphicon-tasks"></span> 提交记录</a></li>
			<li class="nav-item"><a class="nav-link" href="courses"><span class="glyphicon glyphicon-education"></span> 课程</a></li>
		</ul>
		
		<form id="form-search-problem" class="form-inline my-2 my-lg-0" method="get">
			 <div class="input-group">
				<input type="text" class="form-control" name="search" id="input-search" placeholder=题目搜索 />  
				<div class="input-group-append">
					<button type="submit" class="btn btn-search btn-outline-primary" id="submit-search"><span class="glyphicon glyphicon-search"></span></button>
				</div>
			</div>
		</form>
	</div><!--/.nav-collapse -->
	<script src="file:///D:/oj.daimayuan.top/js/uoj.js"></script>
</div>
<script type="text/javascript">
	var zan_link = '';
	$('#form-search-problem').submit(function(e) {
		e.preventDefault();
		
		url = 'http://oj.daimayuan.top/problems';
		qs = [];
		$(['search']).each(function () {
			if ($('#input-' + this).val()) {
				qs.push(this + '=' + encodeURIComponent($('#input-' + this).val()));
			}
		});
		if (qs.length > 0) {
			url += '?' + qs.join('&');
		}
		location.href = url;
	});
</script>						
<script type="text/javascript">
localStorage.removeItem("uoj-username");
history.back();
window.event.returnValue = false;
</script>
			</div>
						<div class="uoj-footer">
				<div class="btn-group dropright mb-3">
					<button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" data-toggle="dropdown">
						<span class="glyphicon glyphicon-globe"></span> 简体中文					</button>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="">简体中文</a>
					</div>
				</div>
				
				<ul class="list-inline"><li class="list-inline-item">Daimayuan Online Judge</li></ul>
								<p>服务器时间: 2025-01-23 20:59:08 | <a href="https://github.com/UniversalOJ/UOJ-System" target="_blank">开源项目</a></p>
			</div>
					</div>
		<script src="file:///D:/oj.daimayuan.top/js/doj.js"></script>
		<!-- /container -->
	</body>
</html>
