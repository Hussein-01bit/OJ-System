// THIS_USER
var this_user = localStorage.getItem("uoj-username");

// ID
var id = this_id;

// NAME
var contname = localStorage.getItem("lastcontest_id=" + cont_id + "?" + pro_id + "&name");

// TOPTITLE
var contitle = " - 题目 - Daimayuan Online Judge";
var cont = document.querySelector("#problem-name");
if (cont != null) 
	cont.innerHTML = contname + contitle;

// BIGTITLE
var contn = document.querySelector("#proname");
var x = "", y = Number(pro_id);
while (y > 0) {
	x = String.fromCharCode((y % 26) + 64) + x;
	y = Math.floor(y / 26);
}
if (contn != null) 
	contn.innerHTML = x + ". " + contname;

// time or memory limit
var problem_time = document.querySelector("#time_limit");
var problem_memory = document.querySelector("#memory_limit");
problem_time.innerHTML = "时间限制:" + localStorage.getItem("problem-id=" + id + "?time");
problem_memory.innerHTML = "空间限制:" + localStorage.getItem("problem-id=" + id + "?memory");


// THIS USER
var this_user = localStorage.getItem("uoj-username");


// THIS TYPE
var this_contest_type = "end", i = cont_id;
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

// SUBMIT
function submit(name) {
	if (this_user == null) {
		alert("请先登录");
		return;
	}
	if (localStorage.getItem("lastcontest_id=" + cont_id + "?rules") == "NOI" && this_contest_type != "end" && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0)) {
		document.querySelector("#noi_wrong").hidden = false;
		document.querySelector("#button-submit-answer").href="#noi_wrong";
		return;
	}
	if (localStorage.getItem("lastcontest_id=" + cont_id + "?" + pro_id + "&" + this_user + "lock") != null && this_contest_type != "end" && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0)) {
		document.querySelector("#submit_wrong").hidden = false;
		document.querySelector("#button-submit-answer").href="#submit_wrong";
		return;
	}
	var this_submit = localStorage.getItem("last_submission_id");
	this_submit = Number(this_submit);
	this_submit++;
	var selectElement = document.querySelector("#" + 'input-' + name + '_language');
	var selectedIndex = selectElement.selectedIndex;
	var input_lang = selectElement.options[selectedIndex].text;
	localStorage.setItem("last_submission_id", this_submit);
	localStorage.setItem("submission-id=" + this_submit + "?proid", id);
	localStorage.setItem("submission-id=" + this_submit + "?lang", input_lang);
	var code = document.querySelector('#input-' + name + '_editor').value;
	var codelen = code.length;
	localStorage.setItem("submission-id=" + this_submit + "?code", code);
	localStorage.setItem("submission-id=" + this_submit + "?user", this_user);
	localStorage.setItem("submission-id=" + this_submit + "?type", "Waiting");
	localStorage.setItem("submission-id=" + this_submit + "?size", (codelen < 1000) ? (codelen + "b") : ((codelen / 1024).toFixed(1) + "kb"));
	localStorage.setItem("submission-id=" + this_submit + "?submit_time", this_long_time);
	localStorage.setItem("submission-id=" + this_submit + "?judging_time", "");
	if (this_contest_type == "unend" && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0)) 
		localStorage.setItem("submission-id=" + this_submit + "?contest", cont_id);
}

if (this_contest_type != "unend" || localStorage.getItem("uoj-user_" + this_user + "_gler") > 0) 
	document.querySelector("#button-submit-answer").href="file:///D:/oj.daimayuan.top/submissions.html";


// LINK
var all_link = "file:///D:/oj.daimayuan.top/contest/" + cont_id;

var contest = document.querySelector(".contest");
if (contest != null) 
	contest.href = all_link + ".html";






if (contr == null && localStorage.getItem("lastcontest_id=" + cont_id + "?see") != 0 && localStorage.getItem("lastcontest_id=" + cont_id + "?" + this_user) == null && (localStorage.getItem("lastcontest_id=" + cont_id + "?" + this_user + "&type") == "unstart" || localStorage.getItem("lastcontest_id=" + cont_id + "?" + this_user + "&type") == "unend") && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0)) {
	var urlreg = all_link + "/register.html";
	window.location.href = urlreg;
}

var contr = document.querySelector("#contest-register");

if (localStorage.getItem("lastcontest_id=" + cont_id + "?" + this_user) == null && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0) && (contr == null || Number(localStorage.getItem("lastcontest_id=" + cont_id + "?see")) == 0)) {
	contitle = "403 - Daimayuan Online Judge";
	var cont = document.querySelector("#contest-name");
	if (cont != null) 
		cont.innerHTML = contitle;
	document.querySelector(".uoj-content").innerHTML = '<div class="text-center"><div style="font-size:233px">403</div><p>禁止入内！ T_T</p></div>			';
}

if (!(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0) && localStorage.getItem("lastcontest_id=" + cont_id + "?" + this_user) != null && localStorage.getItem("lastcontest_id=" + cont_id + "?" + this_user + "&type") == "unstart")
	window.location.href = "file:///D:/oj.daimayuan.top/contests.html";


var vars = document.getElementsByTagName('var');
for (var i = 0; i < vars.length; i++) 
	vars[i].innerHTML = "$" + vars[i].innerHTML + "$";
var pres = document.getElementsByTagName('pre');
for (var i = 0; i < pres.length; i++) {
	var ptext = "";
	for (var j = 0; j < pres[i].innerHTML.length; j++) {
		if (pres[i].innerHTML.length - j >= 6 && pres[i].innerHTML.substr(j, 6) == "<var>$") 
			j += 5;
		else if (pres[i].innerHTML.length - j >= 7 && pres[i].innerHTML.substr(j, 7) == "$</var>") 
			j += 6;
		else 
			ptext = ptext + pres[i].innerHTML[j];
	}
	pres[i].innerHTML = ptext;
}

