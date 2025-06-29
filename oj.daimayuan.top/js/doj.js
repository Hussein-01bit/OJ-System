var d1 = new Date();
var y1 = d1.getFullYear();
var m1 = d1.getMonth() + 1;
var dy1 = d1.getDay();

var dys1 = d1.getDate();
var h1 = d1.getHours();
var min1 = d1.getMinutes();
var s1 = d1.getSeconds();
window.this_time = y1 + "" + ((m1 < 10) ? '0' + m1 : m1) + "" + ((dys1 < 10) ? '0' + dys1 : dys1) + "" + ((h1 < 10) ? '0' + h1 : h1) + "" + ((min1 < 10) ? '0' + min1 : min1) + "" + ((s1 < 10) ? '0' + s1 : s1);
this_time = Number(this_time);

var tt = y1 + "-" + ((m1 < 10) ? '0' + m1 : m1) + "-" + ((dys1 < 10) ? '0' + dys1: dys1) + " " + ((h1 < 10) ? '0' + h1 : h1) + ":" + ((min1 < 10) ? '0' + min1 : min1) + ":" + ((s1 < 10) ? '0' + s1 : s1);
if (document.querySelector(".uoj-footer") != null)
	document.querySelector(".uoj-footer").innerHTML = 
		'<div class="btn-group dropright mb-3"><button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-globe"></span> 简体中文					</button><div class="dropdown-menu"><a class="dropdown-item" href="">简体中文</a></div></div><ul class="list-inline"><li class="list-inline-item">Daimayuan Online Judge</li></ul><p>服务器时间: ' + tt + ' | <a href="https://github.com/UniversalOJ/UOJ-System" target="_blank">开源项目</a></p></div>';
window.this_long_time = tt;

var las = 0, numl = 0, numr = 0, flag = 0;
for (var i = 0; i < referrer_len; i++) 
	if (previousURL[i] == '/' || previousURL[i] == '.') {
		if (previousURL.substring(las, i) == 'profile') 
			flag = 1;
		las = i + 1;
		if (flag == 1 && numl == 0) 
			numl = i + 1;
		else if (flag == 1 && numl > 0 && numr == 0) 
			numr = i;
	}
if (flag == 1) 
	if (localStorage.getItem("uoj-user_" + this_id + "_password") == null) {
		document.querySelector("title").innerHTML = "不存在该用户 - 用户信息 - Daimayuan Online Judge";
		document.querySelector(".uoj-content").innerHTML = '<div class="card border-danger"><div class="card-header bg-danger">用户信息</div><div class="card-body"><h4>不存在该用户</h4></div></div>';
	}
