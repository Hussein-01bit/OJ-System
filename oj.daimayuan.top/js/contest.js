var this_user = localStorage.getItem("uoj-username");

if (!(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0) && localStorage.getItem("lastcontest_id=" + this_id + "?" + this_user) != null && localStorage.getItem("lastcontest_id=" + this_id + "?" + this_user + "&type") == "unstart" && document.querySelector("#contest-registrants") == null)
	window.location.href = "file:///D:/oj.daimayuan.top/contests.html";

// ID
var id = this_id;

// NAME
var contname = localStorage.getItem("lastcontest_id=" + id + "?name");

// RULE
var sz = localStorage.getItem("lastcontest_id=" + id + "?rules");

// TOPTITLE
var contitle = " - 比赛 - Daimayuan Online Judge";
var cont = document.querySelector("#contest-name");
if (cont != null) 
	cont.innerHTML = contname + " - 比赛主页" + contitle;
var conts = document.querySelector("#contest-submit");
if (conts != null) 
	conts.innerHTML = contname + " - 提交记录" + contitle;
var contp = document.querySelector("#contest-submit-page");
if (contp != null) 
	contp.innerHTML = contname + " - 提交代码" + contitle;
var contt = document.querySelector("#contest-stand");
var contt = document.querySelector("#contest-stand");
if (contt != null) 
	contt.innerHTML = contname + " - 排行榜" + contitle;
var contm = document.querySelector("#contest-manage");
if (contm != null) 
	contm.innerHTML = contname + " - 管理" + contitle;
var contb = document.querySelector("#contest-back");
if (contb != null) 
	contb.innerHTML = contname + " - 大后台" + contitle;
var contr = document.querySelector("#contest-register");
if (contr != null) 
	contr.innerHTML = contname + " - 报名" + contitle;
var contbm = document.querySelector("#contest-registrants");
if (contbm != null) 
	contbm.innerHTML = contname + " - 报名选手列表" + contitle;
var conth = document.querySelector("#contest-hacks");
if (conth != null) 
	conth.innerHTML = contname + " - Hack!" + contitle;

// BIGTITLE
var contn = document.querySelector("#contname");
if (contn != null) 
	contn.innerHTML = contname;
var contgln = document.querySelector("#contname-gl");
if (contgln != null) 
	contgln.innerHTML = contname + " - 管理";

// RULES
var saizhi = document.querySelector("#cont_type");
if (saizhi != null) {
	saizhi.innerHTML = "此次比赛为" + sz + "赛制。";
	if (sz == "IOI") 
		document.getElementById("cont_type_zy").innerHTML = "注意：比赛时显示测试所有数据的结果，但无法看到详细信息。";
	else if (sz == "OI") 
		document.getElementById("cont_type_zy").innerHTML = "注意：比赛时只显示测样例的结果。";
	else if (sz == "NOI") 
		document.getElementById("cont_type_zy").innerHTML = "注意：仅支持 C++ 语言版本为 C++14，所有选手代码必须包含 freopen，一道题目仅支持提交一次。比赛最终评测完以后不能再提交代码，但可以在题目页补题，提交不带 freopen 的代码。";
	else if (sz == "Codeforces") 
		document.getElementById("cont_type_zy").innerHTML = "注意：有些题目计算部分分。每一次错误的提交（不含 Compile Error 与样例）会将下一次提交记录 -50 分。并且每道题目会随时间的流逝而减少满分的分数。";
	else if (sz == "ACM") 
		document.getElementById("cont_type_zy").innerHTML = "注意：每道题目均不计算部分分。一道题第一次 AC 之前的每一次错误的提交（不含 Compile Error）会计算 20 分钟的罚时。没有通过的题目不会计算罚时。";
	else if (sz == "ExICPC") 
		document.getElementById("cont_type_zy").innerHTML = "注意：每道题目均不计算部分分。一道题第一次 AC 之前的每一次错误的提交（不含 Compile Error）会计算 5 分钟的罚时。没有通过的题目不会计算罚时。";
}

// LINK
var all_link = "file:///D:/oj.daimayuan.top/contest/" + id;

var contest = document.querySelector(".contest");
if (contest != null) 
	contest.href = all_link + ".html";
var submissions = document.querySelector(".submissions");
if (submissions != null) 
	submissions.href = all_link + "/submissions.html";
var standings = document.querySelector(".standings");
if (standings != null) 
	standings.href = all_link + "/standings.html";
standings = document.querySelector("#btn-standings1");
if (standings != null) 
	standings.href = all_link + "/standings.html";
standings = document.querySelector("#btn-standings2");
if (standings != null) 
	standings.href = all_link + "/standings.html";
var backstage = document.querySelector(".backstage");
if (backstage != null) 
	backstage.href = all_link + "/backstage.html";
var manage = document.querySelector(".manage");
if (manage != null) 
	manage.href = all_link + "/manage.html";
var registrants = document.querySelector(".registrants");
if (registrants != null) 
	registrants.href = all_link + "/registrants.html";




if (contr == null && localStorage.getItem("lastcontest_id=" + id + "?see") != 0 && localStorage.getItem("lastcontest_id=" + id + "?" + this_user) == null && (localStorage.getItem("lastcontest_id=" + this_id + "?" + this_user + "&type") == "unstart" || localStorage.getItem("lastcontest_id=" + this_id + "?" + this_user + "&type") == "unend") && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0) && contbm == null) {
	var urlreg = all_link + "/register.html";
	window.location.href = urlreg;
}

if (contbm == null) {
	if ((localStorage.getItem("lastcontest_id=" + id + "?" + this_user) == null && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0) && (contr == null || Number(localStorage.getItem("lastcontest_id=" + id + "?see")) == 0)) || (contm != null && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0)) || (contb != null && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0) || (contbm != null && !Number(localStorage.getItem("lastcontest_id=" + this_id + "?see")) && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0)))) {
		contitle = "403 - Daimayuan Online Judge";
		document.querySelector("title").innerHTML = contitle;
		document.querySelector(".uoj-content").innerHTML = '<div class="text-center"><div style="font-size:233px">403</div><p>禁止入内！ T_T</p></div>			';
	}
}
else {
	if ((!(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0) && (Number(localStorage.getItem("lastcontest_id=" + id + "?see")) == 0)) || (contm != null && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0) || (!Number(localStorage.getItem("lastcontest_id=" + this_id + "?see")) && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0)))) {
		contitle = "403 - Daimayuan Online Judge";
		document.querySelector("title").innerHTML = contitle;
		document.querySelector(".uoj-content").innerHTML = '<div class="text-center"><div style="font-size:233px">403</div><p>禁止入内！ T_T</p></div>			';
	}
}

if (localStorage.getItem("lastcontest_id=" + this_id + "?" + this_user) != null && contr != null && contbm == null) {
	location.replace("file:///D:/oj.daimayuan.top/contests.html");
}

// THIS TYPE
var this_contest_type = "end", i = this_id;
var uoj_username = this_user;
if (i != null) {
if (uoj_username != null && localStorage.getItem("lastcontest_id=" + i + "?" + uoj_username + "&type") == "unstart") 
	this_contest_type = "unend";
else if (uoj_username != null && localStorage.getItem("lastcontest_id=" + i + "?" + uoj_username + "&type") == "unend") 
	this_contest_type = "unend";
else if (uoj_username != null && localStorage.getItem("lastcontest_id=" + i + "?" + uoj_username + "&type") == "wait") 
	this_contest_type = "wait";
else if (uoj_username != null && localStorage.getItem("lastcontest_id=" + i + "?" + this_user + "&type") == "judging") 
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

// OI_CONTEST SUBMIT
function submit(name) {
	if (this_user == null) {
		alert("请先登录");
		return;
	}
	var cont_id = this_id;
	var selectElement = document.querySelector("#" + 'input-' + name + '_problem');
	var selectedIndex = selectElement.selectedIndex;
	var pro_id = selectElement.options[selectedIndex].value;
	if (localStorage.getItem("lastcontest_id=" + cont_id + "?" + pro_id + "&" + this_user + "lock") != null && this_contest_type != "end" && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0)) {
		document.querySelector("#submit_wrong").hidden = false;
		document.querySelector("#button-submit-answer").href="#submit_wrong";
		return;
	}
	if (this_contest_type != "unend" && this_contest_type != "wait" && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0)) {
		document.querySelector("#end_wrong").hidden = false;
		document.querySelector("#button-submit-answer").href="#end_wrong";
		return;
	}
	var this_submit = localStorage.getItem("last_submission_id");
	this_submit = Number(this_submit);
	this_submit++;
	var input_lang = document.querySelector("#" + 'input-' + name + '_language').innerHTML;
	localStorage.setItem("last_submission_id", this_submit);
	localStorage.setItem("submission-id=" + this_submit + "?proid", localStorage.getItem("lastcontest_id=" + cont_id + "?" + pro_id + "&id"));
	localStorage.setItem("submission-id=" + this_submit + "?lang", input_lang);
	var code = document.querySelector('#input-' + name + '_editor').value;
	var codelen = code.length;
	localStorage.setItem("submission-id=" + this_submit + "?code", code);
	localStorage.setItem("submission-id=" + this_submit + "?user", this_user);
	localStorage.setItem("submission-id=" + this_submit + "?type", "Waiting");
	localStorage.setItem("submission-id=" + this_submit + "?size", (codelen < 1000) ? (codelen + "b") : ((codelen / 1024).toFixed(1) + "kb"));
	localStorage.setItem("submission-id=" + this_submit + "?submit_time", this_long_time);
	localStorage.setItem("submission-id=" + this_submit + "?judging_time", "");
	if ((this_contest_type == "unend" || this_contest_type == "wait") && !(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0)) 
		localStorage.setItem("submission-id=" + this_submit + "?contest", cont_id);
	else 
		document.querySelector("#button-submit-answer").href="file:///D:/oj.daimayuan.top/submissions.html";
	localStorage.setItem("lastcontest_id=" + cont_id + "?" + pro_id + "&" + this_user + "lock", 1);
}


if (localStorage.getItem("lastcontest_id=" + this_id + "?name") == null) {
	contitle = "404 - Daimayuan Online Judge";
	document.querySelector("title").innerHTML = contitle;
	document.querySelector(".uoj-content").innerHTML = '<div class="text-center"><div style="font-size:233px">404</div><p>唔……未找到该页面……你是从哪里点进来的……&gt;_&lt;……</p></div>			</div>			';
}

