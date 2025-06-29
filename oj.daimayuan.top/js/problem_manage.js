// THIS_USER
var this_user = localStorage.getItem("uoj-username");

// ID
var id = this_id;

// NAME
var contname = localStorage.getItem("problem-id=" + id + "?name");

// TOPTITLE
var contitle = " - 管理 - 题目 - Daimayuan Online Judge";
var cont = document.querySelector("#problem-name");
if (cont != null) 
	cont.innerHTML = contname + contitle;

// BIGTITLE
var contn = document.querySelector("#proname");
if (contn != null) 
	contn.innerHTML = "#" + id + " : " + contname + " 管理";

// SUBMIT
function submit(name) {
	if (this_user == null) {
		alert("请先登录");
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
}

if (this_user == null || (!(localStorage.getItem("uoj-user_" + this_user + "_gler") > 0) && localStorage.getItem("problem-id=" + id + "?" + this_user + "_gler") == null) || contname == null) {
	contitle = "404 - Daimayuan Online Judge";
	var cont = document.querySelector("#problem-name");
	if (cont != null) 
		cont.innerHTML = contitle;
	document.querySelector(".uoj-content").innerHTML = '<div class="text-center"><div style="font-size:233px">404</div><p>唔……未找到该页面……你是从哪里点进来的……&gt;_&lt;……</p></div>			</div>			';
}


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
