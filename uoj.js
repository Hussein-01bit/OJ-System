// locale
uojLocaleData = {
	"username": {
		"en": "Username",
		"zh-cn": "用户名"
	},
	"contests::total score": {
		"en": "Score",
		"zh-cn": "分数"
	},
	"contests::n participants": {
		"en": function(n) {
			return n + " participant" + (n <= 1 ? '' : 's');
		},
		"zh-cn": function(n) {
			return "共 " + n + " 名参赛者";
		}
	},
	"click-zan::good": {
		"en": "Good",
		"zh-cn": "好评"
	},
	"click-zan::bad": {
		"en": "Bad",
		"zh-cn": "差评"
	},
	"editor::use advanced editor": {
		"en": "use advanced editor",
		"zh-cn": "使用高级编辑器"
	},
	"editor::language": {
		"en": "Language",
		"zh-cn": "语言"
	},
	"editor::problem": {
		"en": "Problem",
		"zh-cn": "题目"
	},
	"editor::browse": {
		"en": "Browse",
		"zh-cn": "浏览"
	},
	"editor::upload by editor": {
		"en": "Upload by editor",
		"zh-cn": "使用编辑器上传"
	},
	"editor::upload from local": {
		"en": "Upload from local",
		"zh-cn": "从本地文件上传"
	}
};

function uojLocale(name) {
	locale = $.cookie('uoj_locale');
	if (uojLocaleData[name] === undefined) {
		return '';
	}
	if (uojLocaleData[name][locale] === undefined) {
		locale = 'zh-cn';
	}
	val = uojLocaleData[name][locale];
	if (!$.isFunction(val)) {
		return val;
	} else {
		var args = [];
		for (var i = 1; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		return val.apply(this, args);
	}
}

// utility
function strToDate(str) {
	var a = str.split(/[^0-9]/);
	return new Date(
		parseInt(a[0]),
		parseInt(a[1]) - 1,
		parseInt(a[2]),
		parseInt(a[3]),
		parseInt(a[4]),
		parseInt(a[5]),
		0);
}
function dateToStr(date) {
	return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}
function toFilledStr(o, f, l) {
	var s = o.toString();
	while (s.length < l) {
		s = f.toString() + s;
	}
	return s;
}
function getPenaltyTimeStr(x) {
	var ss = toFilledStr(x % 60, '0', 2);
	x = Math.floor(x / 60);
	var mm = toFilledStr(x % 60, '0', 2);
	x = Math.floor(x / 60);
	var hh = x.toString();
	return hh + ':' + mm + ':' + ss;
}

function htmlspecialchars(str)
{
	var s = "";
	if (str.length == 0) return "";
	s = str.replace(/&/g, "&amp;");
	s = s.replace(/</g, "&lt;");
	s = s.replace(/>/g, "&gt;");
	s = s.replace(/"/g, "&quot;");
	return s;
}

function getColOfTagBack(user, rating, mode = 1) {
	if (rating >= 0 && localStorage.getItem("uoj-user_" + user + "_color") != null) 
		return localStorage.getItem("uoj-user_" + user + "_color");
	if (rating >= 15000) {
		// ILM
		return ColorConverter.toStr(new RGB(0, 0, 0));
	} else if (rating >= 10000) {
		// LM
		return ColorConverter.toStr(new RGB(170, 0, 0));
	} else if (rating >= 6000) {
		// GLM
		return ColorConverter.toStr(new RGB(170, 0, 0));
	} else if (rating >= 5000) {
		// GIM
		return ColorConverter.toStr(new RGB(255, 51, 51));
	} else if (rating >= 4500) {
		// LGM
		return ColorConverter.toStr(new RGB(170, 0, 0));
	} else if (rating >= 3700) {
		// IGM
		return ColorConverter.toStr(new RGB(255, 51, 51));
	} else if (rating >= 3500) {
		// GM
		return ColorConverter.toStr(new RGB(255, 119, 119));
	} else if (rating >= 3000) {
		// Master
		return ColorConverter.toStr(new RGB(255, 204, 136));
	} else if (rating >= 2700) {
		// Candidate Master
		return ColorConverter.toStr(new RGB(176, 36, 150));
	} else if (rating >= 2400) {
		return ColorConverter.toStr(new RGB(16, 16, 232));
	} else if (rating >= 2000) {
		return ColorConverter.toStr(new RGB(159, 221, 187));
	} else if (rating >= 1700) {
		return ColorConverter.toStr(new RGB(55, 205, 155));
	} else if (rating >= 1400) {
		return ColorConverter.toStr(new RGB(75, 175, 178));
	} else if (rating >= 1000) {
		return ColorConverter.toStr(new RGB(12, 156, 19));
	} else if (rating > 0) {
		return ColorConverter.toStr(new RGB(204, 204, 204));
	} else if (rating == 0) {
		return ColorConverter.toStr(new RGB(255, 255, 255));
	} else if (rating >= -1000000) {
		return ColorConverter.toStr(new RGB(128, 89, 128));
	} else {
		return ColorConverter.toStr(new RGB(255, 51, 204));
	}
}
function getColOfTagBord(user, rating, mode = 1) {
	if (rating >= 0 && localStorage.getItem("uoj-user_" + user + "_color") != null) 
		return localStorage.getItem("uoj-user_" + user + "_color");
	if (rating >= 15000) {
		// ILM
		return ColorConverter.toStr(new RGB(204, 204, 204));
	} else if (rating >= 10000) {
		// LM
		return ColorConverter.toStr(new RGB(131, 12, 0));
	} else if (rating >= 6000) {
		// GLM
		return ColorConverter.toStr(new RGB(131, 12, 0));
	} else if (rating >= 5000) {
		// GIM
		return ColorConverter.toStr(new RGB(170, 0, 0));
	} else if (rating >= 4500) {
		// LGM
		return ColorConverter.toStr(new RGB(131, 12, 0));
	} else if (rating >= 3700) {
		// IGM
		return ColorConverter.toStr(new RGB(170, 0, 0));
	} else if (rating >= 3500) {
		// GM
		return ColorConverter.toStr(new RGB(255, 51, 51));
	} else if (rating >= 3000) {
		// Master
		return ColorConverter.toStr(new RGB(230, 126, 34));
	} else if (rating >= 2700) {
		// Candidate Master
		return ColorConverter.toStr(new RGB(142, 68, 173));
	} else if (rating >= 2400) {
		return ColorConverter.toStr(new RGB(0, 52, 255));
	} else if (rating >= 2000) {
		return ColorConverter.toStr(new RGB(55, 205, 155));
	} else if (rating >= 1700) {
		return ColorConverter.toStr(new RGB(75, 175, 178));
	} else if (rating >= 1400) {
		return ColorConverter.toStr(new RGB(17, 122, 139));
	} else if (rating >= 1000) {
		return ColorConverter.toStr(new RGB(52, 97, 30));
	} else if (rating > 0) {
		return ColorConverter.toStr(new RGB(0, 0, 0));
	} else if (rating == 0) {
		return ColorConverter.toStr(new RGB(0, 0, 0));
	} else if (rating >= -1000000) {
		return ColorConverter.toStr(new RGB(138, 62, 179));
	} else {
		return ColorConverter.toStr(new RGB(210, 67, 174));
	}
}

function getColOfRating(user, rating, mode = 1) {
	if (rating >= 0 && localStorage.getItem("uoj-user_" + user + "_color") != null) 
		return localStorage.getItem("uoj-user_" + user + "_color");
	if (rating >= 15000) {
		// ILM
		return ColorConverter.toStr(new RGB(0, 0, 0));
	} else if (rating >= 10000) {
		// LM
		return ColorConverter.toStr(new RGB(170, 0, 0));
	} else if (rating >= 6000) {
		// GLM
		return ColorConverter.toStr(new RGB(170, 0, 0));
	} else if (rating >= 5000) {
		// GIM
		return ColorConverter.toStr(new RGB(255, 51, 51));
	} else if (rating >= 4500) {
		// LGM
		return ColorConverter.toStr(new RGB(170, 0, 0));
	} else if (rating >= 3700) {
		// IGM
		return ColorConverter.toStr(new RGB(255, 51, 51));
	} else if (rating >= 3500) {
		// GM
		return ColorConverter.toStr(new RGB(255, 119, 119));
	} else if (rating >= 3000) {
		// Master
		return ColorConverter.toStr(new RGB(255, 204, 136));
	} else if (rating >= 2700) {
		// Candidate Master
		return ColorConverter.toStr(new RGB(176, 36, 150));
	} else if (rating >= 2400) {
		return ColorConverter.toStr(new RGB(16, 16, 232));
	} else if (rating >= 2000) {
		return ColorConverter.toStr(new RGB(159, 221, 187));
	} else if (rating >= 1700) {
		return ColorConverter.toStr(new RGB(55, 205, 155));
	} else if (rating >= 1400) {
		return ColorConverter.toStr(new RGB(75, 175, 178));
	} else if (rating >= 1000) {
		return ColorConverter.toStr(new RGB(12, 156, 19));
	} else if (rating > 0) {
		return ColorConverter.toStr(new RGB(204, 204, 204));
	} else if (rating == 0) {
		return ColorConverter.toStr(new RGB(0, 0, 0));
	} else if (rating >= -1000000) {
		return ColorConverter.toStr(new RGB(128, 89, 128));
	} else {
		return ColorConverter.toStr(new RGB(255, 51, 204));
	}
}
function getColOfScore(score) {
	if (score == 0) {
		return ColorConverter.toStr(ColorConverter.toRGB(new HSV(0, 100, 80)));
	} else if (score == 100) {
		return ColorConverter.toStr(ColorConverter.toRGB(new HSV(120, 100, 80)));
	} else {
		return ColorConverter.toStr(ColorConverter.toRGB(new HSV(30 + score * 60 / 100, 100, 90)));
	}
}

function getUserSpan(username, rating, tag, addSymbol) {
	if (!username) {
		return '';
	}
	if (addSymbol == undefined) {
		addSymbol = true;
	}
	var text = username[0];
	if (username.charAt(0) == '@') {
		username = username.substr(1);
	}
	if (rating >= 4000 && rating < 5000)
		text = '<span style="color: rgb(0, 0, 0);">' + text + '</span>';
	if (rating < 5000 || rating >= 10000) 
		text += username.substring(1, username.length);
	else if (rating < 10000)
		text += '<span style="color: rgb(0, 0, 0);">' + username.substring(1, username.length) + '</span>';
	if (tag == null || tag == undefined) 
		return '<span style="color:' + getColOfRating(username, rating) + ';' + ((rating != 0) ? (' font-weight: 800;') : ("")) + '">' + text + '</span>';
	return '<span style="color:' + getColOfRating(username, rating) + ';' + ((rating != 0) ? (' font-weight: 800;') : ("")) + '">' + text + '</span> <button class="uoj-usertag" style="background-color: ' + getColOfTagBack(username, rating) + '; border: 1px ' + getColOfTagBord(username, rating) + ' solid; ' + ((rating == 0) ? 'color: black; ' : '') + '">' + tag + '</button>';
}
function getUserLink(username, rating, tag, addSymbol) {
	if (!username) {
		return '';
	}
	if (addSymbol == undefined) {
		addSymbol = true;
	}
	var text = username[0];
	if (username.charAt(0) == '@') {
		username = username.substr(1);
	}
	if (rating >= 4000 && rating < 5000)
		text = '<span style="color: rgb(0, 0, 0);">' + text + '</span>';
	if (rating < 5000 || rating >= 10000) 
		text += username.substring(1, username.length);
	else if (rating < 10000)
		text += '<span style="color: rgb(0, 0, 0);">' + username.substring(1, username.length) + '</span>';
	if (tag == null || tag == undefined) 
		return '<a class="uoj-username" href="file:///D:/oj.daimayuan.top/user/profile/' + username + '.html" style="color:' + getColOfRating(username, rating) + ';' + ((rating == 0) ? (' font-weight: 400;') : ("")) + '">' + text + '</a>';
	return '<a class="uoj-username" href="file:///D:/oj.daimayuan.top/user/profile/' + username + '.html" style="color:' + getColOfRating(username, rating) + ';' + ((rating == 0) ? (' font-weight: 400;') : ("")) + '">' + text + '</a> <button onclick="location.href=\'file:///D:/oj.daimayuan.top/official/mark text/1.html\';" class="uoj-usertag" style="background-color: ' + getColOfTagBack(username, rating) + '; border: 1px ' + getColOfTagBord(username, rating) + ' solid;' + ((rating == 0) ? 'color: black; ' : '') + '">' + tag + '</button>';
}

function replaceWithHighlightUsername() {
	var username = $(this).text();
	var rating = localStorage.getItem("uoj-user_" + username + "_rating");
	var contrating = $(this).data("rated");
	var tag = localStorage.getItem("uoj-user_" + username + "_tag");
	contrating = Number(contrating);
	if (contrating == 1) {
		rating = username;
		$(this).replaceWith(getUserSpan(username, rating));
		return;
	}
	if (isNaN(rating)) {
		return;
	}
	if (localStorage.getItem("uoj-user_" + username + "_gler") > 0 && tag == null) 
		tag = "管理员";
	// if (localStorage.getItem("uoj-user_" + username + "_gler") > 0) 
	// 	rating = -10000000;
	if (!(localStorage.getItem("uoj-user_" + username + "_gler") > 0) && tag == "管理员") 
		tag = null;
	if (localStorage.getItem("uoj-user_" + username + "_rating") < 0) 
		tag = "封禁者";
	if ($(this).data("link") != 0) {
		$(this).replaceWith(getUserLink(username, rating, tag));
	} else {
		$(this).replaceWith(getUserSpan(username, rating, tag));
	}
}

$.fn.uoj_honor = function() {
	return this.each(function() {
		var honor = $(this).text();
		var tag = localStorage.getItem("uoj-user_" + honor + "_tag");
		var rating = localStorage.getItem("uoj-user_" + honor + "_rating");
		if (localStorage.getItem("uoj-user_" + honor + "_gler") > 0 && tag == null) 
			tag = "管理员";
		if (!(localStorage.getItem("uoj-user_" + honor + "_gler") > 0) && tag == "管理员") 
			tag = null;
		if (localStorage.getItem("uoj-user_" + honor + "_rating") < 0) 
			tag = "封禁者";
		// if (localStorage.getItem("uoj-user_" + honor + "_gler") > 0) 
		// 	rating = -10000000;
		$(this).replaceWith(getUserSpan(honor, rating, tag));
	});
}

function showErrorHelp(name, err) {
	if (err) {
		$('#div-' + name).addClass('has-error');
		$('#help-' + name).text(err);
		return false;
	} else {
		$('#div-' + name).removeClass('has-error');
		$('#help-' + name).text('');
		return true;
	}
}
function getFormErrorAndShowHelp(name, val) {
	var err = val($('#input-' + name).val());
	return showErrorHelp(name, err);
}

function validateSettingPassword(str) {
	if (str.length < 6) {
		return '瀵嗙爜闀垮害涓嶅簲灏忎簬6銆�';
	} else if (! /^[!-~]+$/.test(str)) {
		return '瀵嗙爜搴斿彧鍖呭惈鍙ASCII瀛楃銆�';
	} else if (str != $('#input-confirm_password').val()) {
		return '涓ゆ杈撳叆鐨勫瘑鐮佷笉涓€鑷淬€�';
	} else {
		return '';
	}
}
function validatePassword(str) {
	if (str.length < 6) {
		return '瀵嗙爜闀垮害涓嶅簲灏忎簬6銆�';
	} else if (! /^[!-~]+$/.test(str)) {
		return '瀵嗙爜搴斿彧鍖呭惈鍙ASCII瀛楃銆�';
	} else {
		return '';
	}
}
function validateEmail(str) {
	if (str.length > 50) {
		return '鐢靛瓙閭鍦板潃澶暱銆�';
	} else if (! /^(.+)@(.+)$/.test(str)) {
		return '鐢靛瓙閭鍦板潃闈炴硶銆�';
	} else {
		return '';
	}
}
function validateUsername(str) {
	if (str.length == 0) {
		return '鐢ㄦ埛鍚嶄笉鑳戒负绌恒€�';
	} else if (! /^[a-zA-Z0-9_]+$/.test(str)) {
		return '鐢ㄦ埛鍚嶅簲鍙寘鍚ぇ灏忓啓鑻辨枃瀛楁瘝銆佹暟瀛楀拰涓嬪垝绾裤€�';
	} else {
		return '';
	}
}
function validateQQ(str) {
	if (str.length < 5) {
		return 'QQ鐨勯暱搴︿笉搴斿皬浜�5銆�';
	} else if (str.length > 15) {
		return 'QQ鐨勯暱搴︿笉搴斿ぇ浜�15銆�';
	} else if (/\D/.test(str)) {
		return 'QQ搴斿彧鍖呭惈0~9鐨勬暟瀛椼€�';
	} else {
		return '';
	}
}
function validateMotto(str) {
	if (str.length > 50) {
		return '涓嶈兘瓒呰繃50瀛�';
	} else {
		return '';
	}
}

// tags
$.fn.uoj_problem_tag = function() {
	return this.each(function() {
		$(this).attr('href', 'file:///D:/oj.daimayuan.top/problems.html?tag=' + encodeURIComponent($(this).text()));
	});
}
$.fn.uoj_blog_tag = function() {
	return this.each(function() {
		$(this).attr('href', 'file:///D:/oj.daimayuan.top/blog/archive.html?tag=' + encodeURIComponent($(this).text()));
	});
}

// click zan
function click_zan(zan_id, zan_type, zan_delta, node) {
	var loading_node = $('<div class="text-muted">loading...</div>');
	$(node).replaceWith(loading_node);
	$.post(zan_link + '/click-zan', {
		id : zan_id,
		delta : zan_delta,
		type : zan_type
	}, function(ret) {
		$(loading_node).replaceWith($(ret).click_zan_block());
	}).fail(function() {
		$(loading_node).replaceWith('<div class="text-danger">failed</div>');
	});
}

function uoj_click_zan_up(id, type) {
	var username = localStorage.getItem("uoj-username");
	var cnt = localStorage.getItem("type=" + type + "&id=" + id);
	var val;
	if (cnt == null) 
		cnt = 0;
	if (username != null) {
		val = localStorage.getItem("type=" + type + "&id=" + id + "&user=" + username);
		if (val == null) 
			val = 0;
	}
	else {
		alert("请先登录。");
		return;
	}
	if (val < 1) {
		cnt++;
		val++;
	}
	localStorage.setItem("type=" + type + "&id=" + id, cnt);
	localStorage.setItem("type=" + type + "&id=" + id + "&user=" + username, val);
	location.href = "";
}
function uoj_click_zan_down(id, type) {
	var username = localStorage.getItem("uoj-username");
	var cnt = localStorage.getItem("type=" + type + "&id=" + id);
	var val;
	if (cnt == null) 
		cnt = 0;
	if (username != null) {
		val = localStorage.getItem("type=" + type + "&id=" + id + "&user=" + username);
		if (val == null) 
			val = 0;
	}
	else {
		alert("请先登录。");
		return;
	}
	if (val > -1) {
		cnt--;
		val--;
	}
	localStorage.setItem("type=" + type + "&id=" + id, cnt);
	localStorage.setItem("type=" + type + "&id=" + id + "&user=" + username, val);
	location.href = "";
}

var cnt_zan_see = 1;
$.fn.click_zan_block = function() {
	return this.each(function() {
		var id = $(this).data('id');
		var type = $(this).data('type');
		var username = localStorage.getItem("uoj-username");
		var val = 0;
		var cnt = localStorage.getItem("type=" + type + "&id=" + id);
		if (cnt == null) 
			cnt = 0;
		if (username != null) {
			val = localStorage.getItem("type=" + type + "&id=" + id + "&user=" + username);
			if (val == null) 
				val = 0;
		}
		if (val >= 1) {
			$(this).addClass('uoj-click-zan-block-cur-up');
		} else if (val == 0) {
			$(this).addClass('uoj-click-zan-block-cur-zero');
		} else if (val == -1) {
			$(this).addClass('uoj-click-zan-block-cur-down');
		} else {
			return;
		}
		if (cnt > 0) {
			$(this).addClass('uoj-click-zan-block-positive');
		} else if (cnt == 0) {
			$(this).addClass('uoj-click-zan-block-neutral');
		} else {
			$(this).addClass('uoj-click-zan-block-negative');
		}
		
		var up_node = $('<a href="#" class="uoj-click-zan-up"><span class="glyphicon glyphicon-thumbs-up"></span>'+uojLocale('click-zan::good')+'</a>').click(function(e) {
			e.preventDefault();
			uoj_click_zan_up(id, type);
		});
		var down_node = $('<a href="#" class="uoj-click-zan-down"><span class="glyphicon glyphicon-thumbs-down"></span>'+uojLocale('click-zan::bad')+'</a>').click(function(e) {
			e.preventDefault();
			uoj_click_zan_down(id, type);
		});
		
		if (cnt_zan_see <= zan_cnt) {
		$(this).append(up_node);
		$(this).append(down_node);
		if (username != localStorage.getItem("uoj-super_gler-user")) 
			$(this).append($('<span class="uoj-click-zan-cnt">[<strong>' + (cnt > 0 ? '+' + cnt : (cnt == 0 ? '0' : '-?')) + '</strong>]</span>'));
		else 
			$(this).append($('<span class="uoj-click-zan-cnt">[<strong>' + (cnt > 0 ? '+' + cnt : (cnt == 0 ? '0' : cnt)) + '</strong>]</span>'));
		}
		cnt_zan_see++;
	});
}

// count down
function getCountdownStr(t) {
	var x = Math.floor(t);
	var ss = toFilledStr(x % 60, '0', 2);
	x = Math.floor(x / 60);
	var mm = toFilledStr(x % 60, '0', 2);
	x = Math.floor(x / 60);
	var hh = x.toString();
	
	var res = '<span style="font-size:30px">';
	res += '<span style="color:' + getColOfScore(Math.min(t / 10800 * 100, 100)) + '">' + hh + '</span>';
	res += ':';
	res += '<span style="color:' + getColOfScore(mm / 60 * 100) + '">' + mm + '</span>';
	res += ':';
	res += '<span style="color:' + getColOfScore(ss / 60 * 100) + '">' + ss + '</span>';
	res += '</span>'
	return res;
}

$.fn.countdown = function(rest, callback) {
	return this.each(function() {
		var start = new Date().getTime();
		var cur_rest = rest != undefined ? rest : parseInt($(this).data('rest'));
		var cur = this;
		var countdown = function() {
			var passed = Math.floor((new Date().getTime() - start) / 1000);
			if (passed >= cur_rest) {
				$(cur).html(getCountdownStr(0));
				if (callback != undefined) {
					callback();
				}
			} else {
				$(cur).html(getCountdownStr(cur_rest - passed));
				setTimeout(countdown, 1000);
			}
		}
		countdown();
	});
};

// update_judgement_status
update_judgement_status_list = []
function update_judgement_status_details(id) {
	update_judgement_status_list.push(id);
};

$(document).ready(function() {
	function update() {
		$.get("/submission-status-details", {
				get: update_judgement_status_list
			},
			function(data) {
				for (var i = 0; i < update_judgement_status_list.length; i++) {
					$("#status_details_" + update_judgement_status_list[i]).html(data[i].html);
					if (data[i].judged) {
						location.reload();
					}
				}
			}, 'json').always(
			function() {
					setTimeout(update, 10000);
				}
			);
	}
	if (update_judgement_status_list.length > 0) {
		setTimeout(update, 10000);
	}
});

// highlight
$.fn.uoj_highlight = function() {
	return $(this).each(function() {
		$(this).find("span.uoj-username").each(replaceWithHighlightUsername);
		$(this).find(".uoj-honor").uoj_honor();
		$(this).find(".uoj-score").each(function() {
			var score = parseInt($(this).text());
			var maxscore = parseInt($(this).data('max'));
			if (isNaN(score) && $(this).text().substring(0, 17) == "Pass the subtask#") {
				score = 100;
				$(this).css("font-weight", 800);
			}
			if (isNaN(score) && $(this).text().substring(0, 17) == "Fail the subtask#") {
				score = 0;
				$(this).css("font-weight", 800);
			}
			if (isNaN(score) && $(this).text().length > 4) {
				$(this).css("font-weight", 400);
				return;
			}
			if ($(this).text() == "AC") 
				if (isNaN(maxscore)) 
					score = 100;
				else 
					score = maxscore;
			else if (isNaN(score))
				score = 0;
			if (isNaN(maxscore)) {
				$(this).css("color", getColOfScore(score));
			} else {
				$(this).css("color", getColOfScore(score / maxscore * 100));
			}
		});
		$(this).find(".uoj-status").each(function() {
			var success = $(this).text();
			if (success == "Success!") {
				$(this).css("color", ColorConverter.toStr(ColorConverter.toRGB(new HSV(120, 100, 80))));
				$(this).css("font-weight", "bold");
			}
			else if (success == "Failed.") {
				$(this).css("color", ColorConverter.toStr(ColorConverter.toRGB(new HSV(0, 100, 100))));
				$(this).css("font-weight", "bold");
			}
		});
		$(this).find(".uoj-problem-tag").uoj_problem_tag();
		$(this).find(".uoj-blog-tag").uoj_blog_tag();
		$(this).find(".uoj-click-zan-block").click_zan_block();
		$(this).find(".countdown").countdown();
		$(this).find(".uoj-readmore").readmore({
			moreLink: '<a href="#" class="text-right">more...</a>',
			lessLink: '<a href="#" class="text-right">close</a>',
		});
	});
};

$(document).ready(function() {
	$('body').uoj_highlight();
});

// contest notice
function checkContestNotice(id, lastTime) {
	$.post('/contest/' + id.toString(), {
			check_notice : '',
			last_time : lastTime
		},
		function(data) {
			setTimeout(function() {
				checkContestNotice(id, data.time);
			}, 60000);
			if (data.msg != undefined) {
				var len=data.msg.length;
				for (var i=0;i<len;i++) alert(data.msg[i]);
			}
		},
		'json'
	).fail(function() {
		setTimeout(function() {
			checkContestNotice(id, lastTime);
		}, 60000);
	});
}

// long table
$.fn.long_table = function(data, cur_page, header_row, get_row_str, config) {
	return this.each(function() {
		var table_div = this;
		
		$(table_div).html('');
		if (config.print_before_table != undefined) {
			$(table_div).append(config.print_before_table());
		}
		
		var page_len = config.page_len != undefined ? config.page_len : 10;
		
		if (!config.echo_full) {
			var n_rows = data.length;
			var n_pages = Math.max(Math.ceil(n_rows / page_len), 1);
			if (cur_page == undefined) {
				cur_page = 1;
			}
			if (cur_page < 1) {
				cur_page = 1;
			} else if (cur_page > n_pages) {
				cur_page = n_pages;
			}
			var cur_start = (cur_page - 1) * page_len;
		} else {
			var n_rows = data.length;
			var n_pages = 1;
			cur_page = 1;
			var cur_start = (cur_page - 1) * page_len;
		}
		
		var div_classes = config.div_classes != undefined ? config.div_classes : ['table-responsive'];
		var table_classes = config.table_classes != undefined ? config.table_classes : ['table', 'table-bordered', 'table-hover', 'table-striped', 'table-text-center'];
		
		var now_cnt = 0;
		var tbody = $('<tbody />')
		for (var i = 0; i < page_len && cur_start + i < n_rows; i++) {
			now_cnt++;
			if (config.get_row_index) {
				tbody.append(get_row_str(data[cur_start + i], cur_start + i));
			} else {
				tbody.append(get_row_str(data[cur_start + i]));
			}
		}
		if (now_cnt == 0) {
			tbody.append('<tr><td colspan="233">鏃�</td></tr>');
		}
		
		$(table_div).append(
			$('<div class="' + div_classes.join(' ') + '" />').append(
				$('<table class="' + table_classes.join(' ') + '" />').append(
					$('<thead>' + header_row + '</thead>')
				).append(
					tbody
				)
			)
		);
		
		if (config.print_after_table != undefined) {
			$(table_div).append(config.print_after_table());
		}
		
		var get_page_li = function(p, h) {
			if (p == -1) {
				return $('<li class="page-item"></li>').addClass('disabled').append($('<a class="page-link"></a>').append(h));
			}
			
			var li = $('<li class="page-item"></li>');
			if (p == cur_page) {
				li.addClass('active');
			}
			li.append(
				$('<a class="page-link"></a>').attr('href', '#' + table_div.id).append(h).click(function(e) {
					if (config.prevent_focus_on_click) {
						e.preventDefault();
					}
					$(table_div).long_table(data, p, header_row, get_row_str, config);
				})
			);
			return li;
		};
		
		if (n_pages > 1) {
			var pagination = $('<ul class="pagination top-buffer-no bot-buffer-sm justify-content-center"></ul>');
			if (cur_page > 1) {
				pagination.append(get_page_li(cur_page - 1, '<span class="glyphicon glyphicon glyphicon-backward"></span>'));
			} else {
				pagination.append(get_page_li(-1, '<span class="glyphicon glyphicon glyphicon-backward"></span>'));
			}
			var max_extend = config.max_extend != undefined ? config.max_extend : 5;
			for (var i = Math.max(cur_page - max_extend, 1); i <= Math.min(cur_page + max_extend, n_pages); i++) {
				pagination.append(get_page_li(i, i.toString()));
			}
			if (cur_page < n_pages) {
				pagination.append(get_page_li(cur_page + 1, '<span class="glyphicon glyphicon glyphicon-forward"></span>'));
			} else {
				pagination.append(get_page_li(-1, '<span class="glyphicon glyphicon glyphicon-forward"></span>'));
			}
			$(table_div).append($('<div class="text-center"></div>').append(pagination));
		}
	});
};

// code mirror
function require_codemirror(config, callback) {
	if ($('link[href="' + uojHome + '/js/codemirror/lib/codemirror.css' + '"]').length == 0) {
		$('<link type="text/css" rel="stylesheet" href="' + uojHome + '/js/codemirror/lib/codemirror.css' + '" />').appendTo('head');
	}
	$LAB.script(uojHome + '/js/codemirror/lib/codemirror.js')
		.wait()
		.script(uojHome + '/js/codemirror/addon/mode/overlay.js')
		.script(uojHome + '/js/codemirror/addon/selection/active-line.js')
		.wait(callback)
}

function get_codemirror_mode(lang) {
	switch (lang) {
		case 'C++14':
		case 'C++17':
			return 'text/x-c++src';
		case 'C':
			return 'text/x-csrc';
		case 'Python2':
		case 'Python3':
			return 'text/x-python';
		case 'Java8':
		case 'Java11':
			return 'text/x-java';
		case 'Pascal':
			return 'text/x-pascal';
		case 'text':
			return 'text/plain';
		default:
			return 'text/plain';
	}
};
function require_codemirror_mode(mode, callback) {
	var name = 'none';
	switch (mode) {
		case 'text/x-c++src':
		case 'text/x-csrc':
		case 'text/x-java':
			name = 'clike';
			break;
		case 'text/x-python':
			name = 'python';
			break;
		case 'text/x-pascal':
			name = 'pascal';
			break;
	}
	if (name !== 'none') {
		$LAB.script(uojHome + '/js/codemirror/mode/' + name + '/' + name + '.js')
			.wait(callback);
	} else {
		setTimeout(callback, 0);
	}
};

// auto save
function autosave_locally(interval, name, target) {
	if (typeof(Storage) === "undefined") {
		console.log('autosave_locally: Sorry! No Web Storage support..');
		return;
	}
	var url = window.location.href;
	var hp = url.indexOf('#');
	var uri = hp == -1 ? url : url.substr(0, hp);
	var full_name = name + '@' + uri;

	target.val(localStorage.getItem(full_name));
	var save = function() {
		localStorage.setItem(full_name, target.val());
		setTimeout(save, interval);
	};
	setTimeout(save, interval);
}

// source code form group
$.fn.source_code_form_group = function(name, text, langs_options_html, pros_options_html) {
	return this.each(function() {
		var input_language_id = 'input-' + name + '_language';
		var input_problem_id = 'input-' + name + '_problem';
		var input_language_name = name + '_language';
		var input_problem_name = name + '_problem';
		var input_upload_type_name = name + '_upload_type';
		var input_editor_id = 'input-' + name + '_editor';
		var input_editor_name = name + '_editor';
		var input_file_id = 'input-' + name + '_file';
		var input_file_name = name + '_file';

		var div_help_language_id = 'div-help-' + name + '_language';
		var div_editor_id = 'div-' + name + '_editor';
		var div_file_id = 'div-' + name + '_file';

		var help_file_id = 'help-' + name + '_file';

		var input_language =
			$('<select id="' + input_language_id + '" name="' + input_language_name + '" class="form-control input-sm"/>')
				.html(langs_options_html);
		var input_problem = 
			$('<select id="' + input_problem_id + '" name="' + input_problem_name + '" class="form-control input-sm"/>')
				.html(pros_options_html);
		if (pros_options_html == undefined) 
			input_problem = "";
		var input_upload_type_editor = $('<input type="radio" name="' + input_upload_type_name + '" value="editor" />');
		var input_upload_type_file = $('<input type="radio" name="' + input_upload_type_name + '" value="file" />');
		var input_file = $('<input type="file" id="' + input_file_id + '" name="' + input_file_name + '" style="display: none" />');
		var input_file_path = $('<input class="form-control" type="text" readonly="readonly" />');
		var input_editor = $('<textarea class="form-control" id="' + input_editor_id + '" name="' + input_editor_name + '"></textarea>');
		var input_use_advanced_editor = $('<input type="checkbox">');

		var div_editor =
			$('<div id="' + div_editor_id + '" class="col-sm-12"/>')
				.append(input_editor)
				.append($('<div class="checkbox text-right" />')
					.append($('<label />')
						.append(input_use_advanced_editor)
						.append(' ' + uojLocale('editor::use advanced editor'))
					)
				)
		var div_file =
			$('<div id="' + div_file_id + '" class="col-sm-12"/>')
				.append(input_file)
				.append($('<div class="input-group"/>')
					.append(input_file_path)
					.append($('<span class="input-group-append"/>')
						.append($('<button type="button" class="btn btn-primary">'+'<span class="glyphicon glyphicon-folder-open"></span> '+uojLocale('editor::browse')+'</button>')
							.css('width', '100px')
							.click(function() {
								input_file.click();
							})
						)
					)
				)
				.append($('<span class="help-block" id="' + help_file_id + '"></span>'))
		var div_help_language = $('<div id="' + div_help_language_id + '" class="col-sm-12 text-warning top-buffer-sm">');

		var show_help_lang = function() {
			if ($(this).val() == 'Java8' || $(this).val() == 'Java11') {
				div_help_language.text('注意：Java 程序源代码中不应指定所在的 package。我们会在源代码中找到第一个被定义的类并以它的 main 函数为程序入口点。');
			} else if (input_problem != "") {
				div_help_language.text('注意：对于 C++ 语言，请在 main 函数里最前部添加 freopen。输入输出文件名为每道题目名字后面括号内的英文名，类型为 .in 和 .out 文件。');
			} else {
				div_help_language.text('');
			}
		};

		var advanced_editor = null;
		var advanced_editor_init = function() {
			require_codemirror({}, function() {
				var mode = get_codemirror_mode(input_language.val());
				require_codemirror_mode(mode, function() {
					if (advanced_editor != null) {
						return;
					}
					advanced_editor = CodeMirror.fromTextArea(input_editor[0], {
						mode: mode,
						lineNumbers: true,
						matchBrackets: true,
						lineWrapping: true,
						styleActiveLine: true,
						indentUnit: 4,
						indentWithTabs: true,
						theme: 'default'
					});
					advanced_editor.on('change', function() {
						advanced_editor.save();
					});
					$(advanced_editor.getWrapperElement()).css('box-shadow', '0 2px 10px rgba(0,0,0,0.2)');
					advanced_editor.focus();
				});
			});
		}

		var save_prefer_upload_type = function(type) {
			$.cookie('uoj_source_code_form_group_preferred_upload_type', type, { expires: 7, path: '/' });
		};

		autosave_locally(2000, name, input_editor);

		var prefer_upload_type = $.cookie('uoj_source_code_form_group_preferred_upload_type');
		if (prefer_upload_type === null) {
			prefer_upload_type = 'editor';
		}
		if (prefer_upload_type == 'file') {
			input_upload_type_file[0].checked = true;
			div_editor.css('display', 'none');
		} else {
			input_upload_type_editor[0].checked = true;
			div_file.css('display', 'none');

			if (prefer_upload_type == 'advanced') {
				input_use_advanced_editor[0].checked = true;
			}
		}

		input_language.each(show_help_lang);
		input_language.change(show_help_lang);
		input_language.change(function() {
			if (advanced_editor != null) {
				var mode = get_codemirror_mode(input_language.val());
				require_codemirror_mode(mode, function() {
					if (mode != get_codemirror_mode(input_language.val())) {
						return;
					}
					advanced_editor.setOption('mode', mode);
				});
			}
		})
		input_upload_type_editor.click(function() {
			div_editor.show('fast');
			div_file.hide('fast');
			save_prefer_upload_type('editor');
		});
		input_upload_type_file.click(function() {
			div_file.show('fast');
			div_editor.hide('fast');
			save_prefer_upload_type('file');
		});
		input_file.change(function() {
			input_file_path.val(input_file.val());
		});
		input_use_advanced_editor.click(function() {
			if (this.checked) {
				advanced_editor_init();
				save_prefer_upload_type('advanced');
			} else {
				if (advanced_editor != null) {
					advanced_editor.toTextArea();
					advanced_editor = null;
					input_editor.focus();
				}
				save_prefer_upload_type('editor');
			}
		});

		if (input_problem != "") 
			$(this)
				.append($('<div class="row col-sm-12"/>')
				.append($('<label class="col-sm-2 control-label"><div class="text-left">' + text + '</div></label>'))
				.append($('<label class="col-sm-1 control-label" for="' + input_language_name + '">'+uojLocale('editor::language')+'</label>'))
				.append($('<label class="col-sm-1 control-label" for="' + input_language_name + '" id="input-answer_answer_language">C++14</label>'))
				.append($('<label class="col-sm-1 control-label" for="' + input_language_name + '">'+uojLocale('editor::problem')+'</label>'))
				.append($('<div class="col-sm-2"/>')
					.append(input_problem)
				)
				.append($('<div class="radio" style="margin-left: 71.6px"/>')
					.append($('<label/>')
						.append(input_upload_type_editor)
						.append(' '+uojLocale('editor::upload by editor'))
					)
				)
				.append($('<div class="radio text-right" style="margin-left: 30px"/>')
					.append($('<label/>')
						.append(input_upload_type_file)
						.append(' '+uojLocale('editor::upload from local'))
					)
				))
				.append(div_help_language)
				.append(div_editor)
				.append(div_file);
		else 
			$(this)
				.append($('<div class="row col-sm-12"/>')
				.append($('<label class="col-sm-2 control-label"><div class="text-left">' + text + '</div></label>'))
				.append($('<label class="col-sm-1 control-label" for="' + input_language_name + '">'+uojLocale('editor::language')+'</label>'))
				.append($('<div class="col-sm-2"/>')
					.append(input_language)
				)
				.append($('<div class="col-sm-2 offset-sm-3 radio"/>')
					.append($('<label/>')
						.append(input_upload_type_editor)
						.append(' '+uojLocale('editor::upload by editor'))
					)
				)
				.append($('<div class="col-sm-2 radio"/>')
					.append($('<label/>')
						.append(input_upload_type_file)
						.append(' '+uojLocale('editor::upload from local'))
					)
				))
				.append(div_help_language)
				.append(div_editor)
				.append(div_file);
		if (prefer_upload_type == 'advanced') {
			var check_advanced_init = function() {
				if (div_editor.is(':visible')) {
					advanced_editor_init();
				} else {
					setTimeout(check_advanced_init, 1);
				}
			}
			check_advanced_init();
		}
	});
}

// text file form group
$.fn.text_file_form_group = function(name, text) {
	return this.each(function() {
		var input_upload_type_name = name + '_upload_type';
		var input_editor_id = 'input-' + name + '_editor';
		var input_editor_name = name + '_editor';
		var input_file_id = 'input-' + name + '_file';
		var input_file_name = name + '_file';

		var div_editor_id = 'div-' + name + '_editor';
		var div_file_id = 'div-' + name + '_file';

		var help_file_id = 'help-' + name + '_file';

		var input_upload_type_editor = $('<input type="radio" name="' + input_upload_type_name + '" value="editor" />');
		var input_upload_type_file = $('<input type="radio" name="' + input_upload_type_name + '" value="file" />');
		var input_file = $('<input type="file" id="' + input_file_id + '" name="' + input_file_name + '" style="display: none" />');
		var input_file_path = $('<input class="form-control" type="text" readonly="readonly" />');
		var input_editor = $('<textarea class="form-control" id="' + input_editor_id + '" name="' + input_editor_name + '"></textarea>');
		var input_use_advanced_editor = $('<input type="checkbox">');

		var div_editor =
			$('<div id="' + div_editor_id + '" class="col-sm-12"/>')
				.append(input_editor)
				.append($('<div class="checkbox text-right" />')
					.append($('<label />')
						.append(input_use_advanced_editor)
						.append(' ' + uojLocale('editor::use advanced editor'))
					)
				)
		var div_file =
			$('<div id="' + div_file_id + '" class="col-sm-12"/>')
				.append(input_file)
				.append($('<div class="input-group"/>')
					.append(input_file_path)
					.append($('<div class="input-group-append"/>')
						.append($('<button type="button" class="btn btn-primary">'+'<span class="glyphicon glyphicon-folder-open"></span> '+uojLocale('editor::browse')+'</button>')
							.css('width', '100px')
							.click(function() {
								input_file.click();
							})
						)
					)
				)
				.append($('<span class="help-block" id="' + help_file_id + '"></span>'))

		var advanced_editor = null;
		var advanced_editor_init = function() {
			require_codemirror({}, function() {
				var mode = get_codemirror_mode('text');
				require_codemirror_mode(mode, function() {
					if (advanced_editor != null) {
						return;
					}
					advanced_editor = CodeMirror.fromTextArea(input_editor[0], {
						mode: mode,
						lineNumbers: true,
						matchBrackets: true,
						lineWrapping: true,
						styleActiveLine: true,
						indentUnit: 4,
						indentWithTabs: true,
						theme: 'default'
					});
					advanced_editor.on('change', function() {
						advanced_editor.save();
					});
					$(advanced_editor.getWrapperElement()).css('box-shadow', '0 2px 10px rgba(0,0,0,0.2)');
					advanced_editor.focus();
				});
			});
		}

		var save_prefer_upload_type = function(type) {
			$.cookie('uoj_text_file_form_group_preferred_upload_type', type, { expires: 7, path: '/' });
		};

		autosave_locally(2000, name, input_editor);

		var prefer_upload_type = $.cookie('uoj_text_file_form_group_preferred_upload_type');
		if (prefer_upload_type === null) {
			prefer_upload_type = 'editor';
		}
		if (prefer_upload_type == 'file') {
			input_upload_type_file[0].checked = true;
			div_editor.css('display', 'none');
		} else {
			input_upload_type_editor[0].checked = true;
			div_file.css('display', 'none');

			if (prefer_upload_type == 'advanced') {
				input_use_advanced_editor[0].checked = true;
			}
		}

		input_upload_type_editor.click(function() {
			div_editor.show('fast');
			div_file.hide('fast');
			save_prefer_upload_type('editor');
		});
		input_upload_type_file.click(function() {
			div_file.show('fast');
			div_editor.hide('fast');
			save_prefer_upload_type('file');
		});
		input_file.change(function() {
			input_file_path.val(input_file.val());
		});
		input_use_advanced_editor.click(function() {
			if (this.checked) {
				advanced_editor_init();
				save_prefer_upload_type('advanced');
			} else {
				if (advanced_editor != null) {
					advanced_editor.toTextArea();
					advanced_editor = null;
					input_editor.focus();
				}
				save_prefer_upload_type('editor');
			}
		});

		$(this)
			.append($('<div class="row"/>')
			.append($('<label class="col-sm-2 control-label"><div class="text-left">' + text + '</div></label>'))
			.append($('<div class="top-buffer-sm" />'))
			.append($('<div class="col-sm-2 offset-sm-6 radio"/>')
				.append($('<label/>')
					.append(input_upload_type_editor)
					.append(' '+uojLocale('editor::upload by editor'))
				)
			)
			.append($('<div class="col-sm-2 radio"/>')
				.append($('<label/>')
					.append(input_upload_type_file)
					.append(' '+uojLocale('editor::upload from local'))
				)
			))
			.append(div_editor)
			.append(div_file);

		if (prefer_upload_type == 'advanced') {
			var check_advanced_init = function() {
				if (div_editor.is(':visible')) {
					advanced_editor_init();
				} else {
					setTimeout(check_advanced_init, 1);
				}
			}
			check_advanced_init();
		}
	});
}

// custom test
function custom_test_onsubmit(response_text, div_result, url) {
	if (response_text != '') {
		$(div_result).html('<div class="text-danger">' + response_text + '</div>');
		return;
	}
	var update = function() {
		var can_next = true;
		$.get(url,
			function(data) {
				if (data.judged === undefined) {
					$(div_result).html('<div class="text-danger">error</div>');
				} else {
					var judge_status = $('<table class="table table-bordered table-text-center"><tr class="info">' + data.html + '</tr></table>');
					$(div_result).empty();
					$(div_result).append(judge_status);
					if (data.judged) {
						var judge_result = $(data.result);
						judge_result.css('display', 'none');
						$(div_result).append(judge_result);
						judge_status.hide(500);
						judge_result.slideDown(500);
						can_next = false;
					}
				}
			}, 'json')
		.always(function() {
			if (can_next) {
				setTimeout(update, 500);
			}
		});
	};
	setTimeout(update, 500);
}

// comment
function showCommentReplies(id, replies) {
	var toggleFormReply = function(from, text) {
		if (text == undefined) {
			text = '';
		}
		
		var p = '#comment-body-' + id;
		var q = '#div-form-reply';
		var r = '#input-reply_comment';
		var t = '#input-reply_id';
		if ($(q).data('from') != from) {
			$(q).data('from', from);
			$(q).hide('fast', function() {
				$(this).appendTo(p).show('fast', function() {
					$(t).val(id);
					$(r).val(text).focus();
				});
			});

		} else if ($(q).css('display') != 'none') {
			$(q).appendTo(p).hide('fast');
		} else {
			$(q).appendTo(p).show('fast', function() {
				$(t).val(id);
				$(r).val(text).focus();
			});
		}
	}

	$('#reply-to-' + id).click(function(e) {
		e.preventDefault();
		toggleFormReply(id);
	});
	
	if (replies.length == 0) {
		return;
	}
	
	$("#replies-" + id).long_table(
		replies,
		1,
		'<tr>' +
			'<th>璇勮鍥炲</th>' +
		'</tr>',
		function(reply) {
			return $('<tr id="' + 'comment-' + reply.id + '" />').append(
				$('<td />').append(
					$('<div class="comtbox6">' + getUserLink(reply.poster, reply.poster_rating) + '锛�' + reply.content + '</div>')
				).append(
					$('<ul class="text-right list-inline bot-buffer-no" />').append(
						'<li>' + '<small class="text-muted">' + reply.post_time + '</small>' + '</li>'
					).append(
						$('<li />').append(
							$('<a href="#">鍥炲</a>').click(function (e) {
								e.preventDefault();
								toggleFormReply(reply.id, '鍥炲 @' + reply.poster + '锛�');
							})
						)
					)
				)
			).uoj_highlight();
		}, {
			table_classes: ['table', 'table-condensed'],
			page_len: 5,
			prevent_focus_on_click: true
		}
	);
}

// standings
function showStandings() {
	$("#standings").long_table(
		standings,
		1,
		'<tr>' +
			'<th style="width:5em">#</th>' +
			'<th style="width:14em">'+uojLocale('username')+'</th>' +
			'<th style="width:5em">'+uojLocale('contests::total score')+'</th>' +
			$.map(problems, function(col, idx) {
				return '<th style="width:8em;">' + '<a href="/contest/' + contest_id + '/problem/' + col + '">' + String.fromCharCode('A'.charCodeAt(0) + idx) + '</a>' + '</th>';
			}).join('') +
		'</tr>',
		function(row) {
			var col_tr = '<tr>';
			if (row[4][1]) {
				col_tr = '<tr style="background:#e0eefd">';
			}
			col_tr += '<td>' + row[3] + '</td>';
			col_tr += '<td>' + getUserLink(row[2][0], row[2][1]);
			if (row[4][0]) {
				col_tr += '<sup><a style="color:black">#</a></sup>';
			}
			col_tr += '</td>';
			col_tr += '<td>' + '<div><span class="uoj-score" data-max="' + problems.length * 100 + '" style="color:' + getColOfScore(row[0] / problems.length) + '">' + row[0] + '</span></div>' + '<div>' + getPenaltyTimeStr(row[1]) + '</div></td>';
			for (var i = 0; i < problems.length; i++) {
				col_tr += '<td>';
				col = score[row[2][0]][i];
				if (col != undefined) {
					col_tr += '<div><a href="file:///oj.daimayuan.top/submission/' + col[2] + '" class="uoj-score" style="color:' + getColOfScore(col[0]) + '">' + col[0] + '</a></div>';
					if (standings_version < 2) {
						col_tr += '<div>' + getPenaltyTimeStr(col[1]) + '</div>';
					} else {
						if (col[0] > 0) {
							col_tr += '<div>' + getPenaltyTimeStr(col[1]) + '</div>';
						}
					}
				}
				col_tr += '</td>';
			}
			col_tr += '</tr>';
			return col_tr;
		}, {
			table_classes: ['table', 'table-bordered', 'table-striped', 'table-text-center', 'table-vertical-middle', 'table-condensed'],
			page_len: 100,
			print_before_table: function() {
				var your_standing = -1;
				for (var i = 0; i < standings.length; i++) {
					if (standings[i][4][1]) your_standing = standings[i][3];
				}
				if (your_standing != -1) {
					return '<div> 你的排名是第 ' + your_standing + ' 名。</div>';
				}
			},
			print_after_table: function() {
				return '<div class="text-right text-muted">' + uojLocale("contests::n participants", standings.length) + '</div>';
			}
		}
	);
}





// top-dock
var top_dock = document.querySelector("#navbarSupportedContent");
var top_dock_text = "";
top_dock_text = '<ul class="nav navbar-nav mr-auto">';
top_dock_text += '<li class="nav-item"><a class="nav-link" href="file:///D:/oj.daimayuan.top/contests.html"><span class="glyphicon glyphicon-stats"></span> 比赛</a></li>';
top_dock_text += '<li class="nav-item"><a class="nav-link" href="file:///D:/oj.daimayuan.top/dpan.html"><span class="glyphicon glyphicon-folder-close"></span> Articles</a></li>';
top_dock_text += '<li class="nav-item"><a class="nav-link" href="file:///D:/oj.daimayuan.top/problems.html"><span class="glyphicon glyphicon-list-alt"></span> 题库</a></li>';
top_dock_text += '<li class="nav-item"><a class="nav-link" href="file:///D:/oj.daimayuan.top/submissions.html"><span class="glyphicon glyphicon-tasks"></span> 提交记录</a></li>';
top_dock_text += '<li class="nav-item"><a class="nav-link" href="file:///D:/oj.daimayuan.top/courses.html"><span class="glyphicon glyphicon-education"></span> 课程</a></li>';
top_dock_text += '<li class="nav-item"><a class="nav-link" href="file:///D:/oj.daimayuan.top/note.html"><span class="glyphicon glyphicon-book"></span> Note<sup style="color:red;"><i>new</i></sup></a></li>';
top_dock_text += '</ul><form id="form-search-problem" class="form-inline my-2 my-lg-0" method="get">';
if (Number(localStorage.getItem("uoj-user_" + localStorage.getItem("uoj-username") + "_gler")) > 0) 
	top_dock_text += '<div class="input-group"><input type="text" class="form-control" name="search" id="input-search-user" placeholder=学员搜索 />  <div class="input-group-append"><button class="btn btn-search btn-outline-primary" onclick="input_users();"><span class="glyphicon glyphicon-search"></span></button></div></div>';
top_dock_text += '<div class="input-group"><input type="text" class="form-control" name="search" id="input-search-problem" placeholder=题目搜索 />  <div class="input-group-append"><button class="btn btn-search btn-outline-primary" onclick="input_problems();"><span class="glyphicon glyphicon-search"></span></button></div></div></form>';
if (localStorage.getItem("uoj-username") == "封禁帐号") 
	top_dock_text = '<ul class="nav navbar-nav mr-auto"><li class="nav-item"><a class="nav-link" href="file:///D:/oj.daimayuan.top/unseal.html">申请解封<sup style="color:red;"><i>申请即解封</i></sup></a></li></ul>';
top_dock.innerHTML = top_dock_text;


function input_users() {
	var url = "file:///D:/oj.daimayuan.top/courses.html";
	var text = document.getElementById("input-search-user").value;
	
	if (text != "") 
		url += "?" + text;

	location.href = url;
	window.event.returnValue = false;
}
function input_problems() {
	var url = "file:///D:/oj.daimayuan.top/problem";
	var text = document.getElementById("input-search-problem").value;
	
	if (text == "") 
		url += "s.html";
	else 
		url += "/" + text + ".html";

	location.href = url;
	window.event.returnValue = false;
}


// SELECTION
var linkcss = document.createElement("link");
linkcss.rel = "stylesheet";
linkcss.type = "text/css";
linkcss.href = "file:///D:/oj.daimayuan.top/css/uoj.css";
linkcss.media = "all";
document.getElementsByTagName("head")[0].appendChild(linkcss);

// LINK
var navbar_brand = document.querySelector(".navbar-brand");
navbar_brand.href = "file:///D:/oj.daimayuan.top.html";


// ALL SUBMISSIONS
var previousURL = window.location.href;
var referrer_len = previousURL.length;
if (previousURL.substring(referrer_len - 20, referrer_len) != "all_submissions.html") 
	localStorage.removeItem("uoj-hack-submission_id");


// THIS ID
var las = 0, numl = 0, numr = 0, flag = 0;
for (var i = 0; i < referrer_len; i++) 
	if (previousURL[i] == '/' || previousURL[i] == '.') {
		if (previousURL.substring(las, i) == 'contest') 
			flag = 1;
		if (previousURL.substring(las, i) == 'add_contest' || previousURL.substring(las, i) == 'del_contest') 
			flag = 0;
		las = i + 1;
		if (flag == 1 && numl == 0) 
			numl = i + 1;
		else if (flag == 1 && numl > 0 && numr == 0) 
			numr = i;
	}
for (var i = 0; i < referrer_len && flag == 1; i++) 
	for (var j = i + 1; j < referrer_len; j++) 
		if (flag == 1 && previousURL.substring(i, j) == 'problem') {
			flag = 2;
			break;
		}
var numleft = 0, numright = 0;
for (var i = 0; i < referrer_len; i++) 
	if (Number(previousURL.substring(i, i + 1)) >= 0) {
		if (!(Number(previousURL.substring(i - 1, i)) >= 0)) 
			numleft = i;
		numright = i + 1;
	}
if (flag == 1) 
	this_id = Number(previousURL.substring(numl, numr));
else if (flag == 2) {
	cont_id = Number(previousURL.substring(numl, numr));
	this_id = Number(previousURL.substring(numleft, numright));
	for (var i = 0; i <= 10000; i++) 
		if (localStorage.getItem("lastcontest_id=" + cont_id + "?" + i + "&id") == this_id) {
			pro_id = i;
			break;
		}
}

las = 0, numl = 0, numr = 0, flag = 0;
for (var i = 0; i < referrer_len; i++) 
	if (previousURL[i] == '/' || previousURL[i] == '.') {
		if (previousURL.substring(las, i) == 'submission' || previousURL.substring(las, i) == 'hack') 
			flag = 1;
		if (previousURL.substring(las, i) == 'test') 
			flag = 0;
		las = i + 1;
		if (flag == 1 && numl == 0) 
			numl = i + 1;
		else if (flag == 1 && numl > 0 && numr == 0) 
			numr = i;
	}
if (flag == 1) 
	this_id = Number(previousURL.substring(numl, numr));

las = 0, numl = 0, numr = 0, flag = 0;
for (var i = 0; i < referrer_len; i++) 
	if (previousURL[i] == '/' || previousURL[i] == '.') {
		if (previousURL.substring(las, i) == 'problem') 
			flag = 1;
		if (previousURL.substring(las, i) == 'add_problem') 
			flag = 0;
		las = i + 1;
		if (flag == 1 && numl == 0) 
			numl = i + 1;
		else if (flag == 1 && numl > 0 && numr == 0) 
			numr = i;
	}
if (flag == 1) 
	this_id = Number(previousURL.substring(numl, numr));

// USER_LIST
var fr = document.querySelector(".float-right");
var fr_dm = '<li role="presentation"><a class="dropdown-item" id="my_chat">个人信息</a></li>\n							<li role="presentation"><a class="dropdown-item" href="file:///D:/oj.daimayuan.top/user/system-msg.html">系统消息&nbsp;&nbsp;</a></li>';
// ACTIVITY
fr_dm += '\n						<li role="presentation"><a class="dropdown-item" href="file:///D:/oj.daimayuan.top/act/uoj_manage.html">✨志愿者管理员活动</a></li>';
//------------------------------------------------------------
if (Number(localStorage.getItem("uoj-user_" + localStorage.getItem("uoj-username") + "_gler")) > 0) 
	fr_dm += '\n						<li role="presentation"><a class="dropdown-item" href="file:///D:/oj.daimayuan.top/edit/manage.html">系统管理&nbsp;&nbsp;</a></li>';
if (localStorage.getItem("uoj-username") != null && localStorage.getItem("uoj-super_gler-user") == localStorage.getItem("uoj-username")) 
	fr_dm += '\n						<li role="presentation"><a class="dropdown-item" href="file:///D:/oj.daimayuan.top/edit/domain.html">域管理&nbsp;&nbsp;</a></li>';

fr.querySelector(".dropdown-menu").innerHTML = fr_dm;

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
/*
<li role="presentation"><a class="dropdown-item" id="my_chat">个人信息</a></li>
							<li role="presentation"><a class="dropdown-item" href="file:///D:/oj.daimayuan.top/user/system-msg.html">系统消息&nbsp;&nbsp;</a></li>
*/


