

<!DOCTYPE html>
<html lang="zh-cn">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>提交记录 - Daimayuan Online Judge</title>
		
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
							<li role="presentation"><a class="dropdown-item" href="file:///D:/oj.daimayuan.top/user/system-msg.html">系统消息&nbsp;&nbsp;</a></li>
													</ul>
					</li>
					<li id="login" class="nav-item" role="presentation"><a class="nav-link" href="file:///D:/oj.daimayuan.top/login.html">登录</a></li>
					<li id="register" class="nav-item" role="presentation"><a class="nav-link" href="file:///D:/oj.daimayuan.top/register.html">注册</a></li>
					<li id="logout" class="nav-item" role="presentation"><a class="nav-link" href="file:///D:/oj.daimayuan.top/logout.html">登出</a></li>
								</ul><script type="text/javascript">
							var uoj_username = localStorage.getItem("uoj-username");
							if (uoj_username != null) {
								document.querySelector("#uoj_username_page").innerHTML = uoj_username;
								document.querySelector("#my_chat").href = "file:///D:/oj.daimayuan.top/user/profile/" + uoj_username + ".html";
								document.querySelector("#login").hidden = true;
								document.querySelector("#register").hidden = true;
							}
							else {
								document.querySelector("#uoj_username_a").hidden = true;
								document.querySelector("#logout").hidden = true;
							}
						</script>
				<h1 class="d-none d-sm-block"><a href="file:///D:/oj.daimayuan.top.html"><img src="http://oj.daimayuan.top/images/logo_small.png" alt="Logo" class="img-rounded" style="width:39px; height:39px;" /></a> Daimayuan Online Judge</h1>
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
		<script src="file:///D:/oj.daimayuan.top/js/uoj.js"></script>
	</div><!--/.nav-collapse -->
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
			<div class="uoj-content">
<div class="d-none d-sm-block">
		<div class="float-right">
		<a href="submissions.html?mine" class="btn btn-primary btn-sm">我的提交记录</a>
	</div>
		<form id="form-search" class="form-inline" method="get">
		<div id="form-group-problem_id" class="form-group">
			<label for="input-problem_id" class="control-label">题目ID:</label>
			<input type="text" class="form-control input-sm" name="problem_id" id="input-problem_id" value="" maxlength="4" style="width:4em" />
		</div>
		<div id="form-group-submitter" class="form-group">
			<label for="input-submitter" class="control-label">用户名:</label>
			<input type="text" class="form-control input-sm" name="submitter" id="input-submitter" value="" maxlength="20" style="width:10em" />
		</div>
		<div id="form-group-score" class="form-group">
			<label for="input-min_score" class="control-label">分数范围:</label>
			<input type="text" class="form-control input-sm" name="min_score" id="input-min_score" value="" maxlength="3" style="width:4em" placeholder="0" />
			<label for="input-max_score" class="control-label">~</label>
			<input type="text" class="form-control input-sm" name="max_score" id="input-max_score" value="" maxlength="3" style="width:4em" placeholder="100" />
		</div>
		<div id="form-group-language" class="form-group">
			<label for="input-language" class="control-label">语言:</label>
			<input type="text" class="form-control input-sm" name="language" id="input-language" value="" maxlength="10" style="width:8em" />
		</div>
		<button type="submit" id="submit-search" class="btn btn-secondary btn-sm ml-2">搜索</button>
	</form>
	<script type="text/javascript">
		$('#form-search').submit(function(e) {
			e.preventDefault();
			
			url = 'submissions.html';
			qs = [];
			$(['problem_id', 'submitter', 'min_score', 'max_score', 'language']).each(function () {
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
	<div class="top-buffer-sm"></div>
</div>
<div class="table-responsive"><table class="table table-bordered table-hover table-striped table-text-center"><thead><tr><th>ID</th><th>题目</th><th>提交者</th><th>结果</th><th>用时</th><th>内存</th><th>语言</th><th>文件大小</th><th>提交时间</th></tr></thead><tbody><script>
for (var i = 1; ; i++) 
	if (localStorage.getItem("uoj-user-id=" + i) == null) 
		break;
	else {
		localStorage.setItem("uoj-user_" + localStorage.getItem("uoj-user-id=" + i) + "_problems", 0);
		for (var j = 1; j <= Number(localStorage.getItem("problem-lastid")); j++) {
			localStorage.removeItem("problem-id=" + j + "?user=" + localStorage.getItem("uoj-user-id=" + i) + "&ac");
		}
	}
for (var i = Number(localStorage.getItem("last_submission_id")); i; i--) {
	if (localStorage.getItem("submission-id=" + i + "?type") >= 100 || localStorage.getItem("submission-id=" + i + "?type") == "AC") {
		if (localStorage.getItem("problem-id=" + localStorage.getItem("submission-id=" + i + "?proid") + "?user=" + localStorage.getItem("submission-id=" + i + "?user") + "&ac") == null) {
			localStorage.setItem("uoj-user_" + localStorage.getItem("submission-id=" + i + "?user") + "_problems", Number(localStorage.getItem("uoj-user_" + localStorage.getItem("submission-id=" + i + "?user") + "_problems")) + 1);
		}
		localStorage.setItem("problem-id=" + localStorage.getItem("submission-id=" + i + "?proid") + "?user=" + localStorage.getItem("submission-id=" + i + "?user") + "&ac", 100);
	}
	else if (localStorage.getItem("problem-id=" + localStorage.getItem("submission-id=" + i + "?proid") + "?user=" + localStorage.getItem("submission-id=" + i + "?user") + "&ac") == null && localStorage.getItem("submission-id=" + i + "?type") > 0) 
		localStorage.setItem("problem-id=" + localStorage.getItem("submission-id=" + i + "?proid") + "?user=" + localStorage.getItem("submission-id=" + i + "?user") + "&ac", localStorage.getItem("submission-id=" + i + "?type"));
	else if (localStorage.getItem("problem-id=" + localStorage.getItem("submission-id=" + i + "?proid") + "?user=" + localStorage.getItem("submission-id=" + i + "?user") + "&ac") == null) 
		localStorage.setItem("problem-id=" + localStorage.getItem("submission-id=" + i + "?proid") + "?user=" + localStorage.getItem("submission-id=" + i + "?user") + "&ac", 0);
	if (localStorage.getItem("submission-id=" + i + "?type") == null || (localStorage.getItem("submission-id=" + i + "?contest") != null && !(localStorage.getItem("uoj-user_" + uoj_username + "_gler") > 0))) 
		continue;
	if (localStorage.getItem("submission-id=" + i + "?user") == uoj_username || (localStorage.getItem("uoj-user_" + uoj_username + "_gler") > 0)) {
		document.write('<tr><td><a href="submission/' + i + '.html">#' + i + '</a></td><td><a href="problem/' + localStorage.getItem("submission-id=" + i + "?proid") + '.html">#' + localStorage.getItem("submission-id=" + i + "?proid") + '. ' + (localStorage.getItem("problem-id=" + localStorage.getItem("submission-id=" + i + "?proid") + "?name")) + '</a></td><td><span class="uoj-username" data-rating="1500">' + localStorage.getItem("submission-id=" + i + "?user") + '</span></td><td><a href="submission/' + i + '.html" class="uoj-score">' + localStorage.getItem("submission-id=" + i + "?type") + '</a></td><td>' + (localStorage.getItem("submission-id=" + i + "?time") != null ? localStorage.getItem("submission-id=" + i + "?time") + 'ms' : '/') + '</td><td>' + (localStorage.getItem("submission-id=" + i + "?memory") != null ? localStorage.getItem("submission-id=" + i + "?memory") + 'kb' : '/') + '</td><td><a href="submission/' + i + '.html">' + localStorage.getItem("submission-id=" + i + "?lang") + '</a></td><td>' + localStorage.getItem("submission-id=" + i + "?size") + '</td><td><small>' + localStorage.getItem("submission-id=" + i + "?submit_time") + '</small></td></tr>');
		if (localStorage.getItem("submission-id=" + i + "?user") != uoj_username) 
			continue;
		if (localStorage.getItem("submission-id=" + i + "?type") == "Waiting") {
			document.write('<tr class="info"><td colspan="233" style="vertical-align: middle"><div class="uoj-status-details-img-div"><img src="http://img.uoj.ac/utility/bear-thinking.gif" alt="小熊像人一样思考" class="img-rounded" /></div><div class="uoj-status-details-text-div">Waiting</div></td></tr>')
		}
		else if (localStorage.getItem("submission-id=" + i + "?type") == "Judging") {
			document.write('<tr class="info"><td colspan="233" style="vertical-align: middle"><div class="uoj-status-details-img-div"><img src="http://img.uoj.ac/utility/bear-flying.gif" alt="小熊像超人一样飞" class="img-rounded" /></div><div class="uoj-status-details-text-div">Compiling</div></td></tr>')
		}
	}
}
</script></tbody></table></div>
	<ul class="pagination top-buffer-no bot-buffer-sm justify-content-center"><li class="page-item disabled"><a class="page-link"><span class="glyphicon glyphicon glyphicon-backward"></span></a></li><li class="page-item active"><a class="page-link" href="">1</a></li><li class="page-item disabled"><a class="page-link"><span class="glyphicon glyphicon glyphicon-forward"></span></a></li></ul>
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
