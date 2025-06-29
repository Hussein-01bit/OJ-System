// ID
var id = this_id;


// USER
var this_user = localStorage.getItem("uoj-username");



var this_contest_type = "end", i = localStorage.getItem("submission-id=" + id + "?contest");
var uoj_username = this_user;
if (i != null) {
if (uoj_username != null && localStorage.getItem("lastcontest_id=" + i + "?" + uoj_username + "&type") == "unstart") 
	this_contest_type = "unend";
else if (uoj_username != null && localStorage.getItem("lastcontest_id=" + i + "?" + uoj_username + "&type") == "unend") 
	this_contest_type = "unend";
else if (uoj_username != null && localStorage.getItem("lastcontest_id=" + i + "?" + uoj_username + "&type") == "wait") 
	this_contest_type = "wait";
else if (uoj_username != null && localStorage.getItem("lastcontest_id=" + i + "?" + uoj_username + "&type") == "judging") 
	this_contest_type = "judging";
else if (uoj_username == null && localStorage.getItem("lastcontest_id=" + i + "?type") == "unstart") 
	this_contest_type = "unend";
else if (uoj_username == null && localStorage.getItem("lastcontest_id=" + i + "?type") == "unend") 
	this_contest_type = "unend";
else if (uoj_username == null && localStorage.getItem("lastcontest_id=" + i + "?type") == "wait") 
	this_contest_type = "wait";
else if (uoj_username == null && localStorage.getItem("lastcontest_id=" + i + "?type") == "judging") 
	this_contest_type = "judging";
}



document.querySelector("title").innerHTML = "提交记录 #" + this_id + " - Daimayuan Online Judge";
if (localStorage.getItem("submission-id=" + id + "?user") != uoj_username && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0) || (this_contest_type != "end") && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0)) {
	var this_type = localStorage.getItem("submission-id=" + id + "?type");
	if (this_type == "AC") this_type = 100;
	else if (!(this_type >= 0)) this_type = 0;
	if (localStorage.getItem("problem-id=" + localStorage.getItem("submission-id=" + id + "?proid") + "?code") == 0 || (localStorage.getItem("problem-id=" + localStorage.getItem("submission-id=" + id + "?proid") + "?code") == 1 && !(localStorage.getItem("problem-id=" + localStorage.getItem("submission-id=" + id + "?proid") + "?user=" + this_user + "&ac") >= 100)) || (localStorage.getItem("problem-id=" + localStorage.getItem("submission-id=" + id + "?proid") + "?code") == 2 && !(localStorage.getItem("problem-id=" + localStorage.getItem("submission-id=" + id + "?proid") + "?user=" + this_user + "&ac") >= this_type))) {
		contitle = "403 - Daimayuan Online Judge";
		var cont = document.querySelector("title");
		if (cont != null) 
			cont.innerHTML = contitle;
		document.querySelector(".uoj-content").innerHTML = '<div class="text-center"><div style="font-size:233px">403</div><p>禁止入内！ T_T</p></div>			';
	}
}


if (localStorage.getItem("submission-id=" + id + "?type") == null) {
	contitle = "404 - Daimayuan Online Judge";
	document.querySelector("title").innerHTML = contitle;
	document.querySelector(".uoj-content").innerHTML = '<div class="text-center"><div style="font-size:233px">404</div><p>唔……未找到该页面……你是从哪里点进来的……&gt;_&lt;……</p></div>			</div>			';
}
