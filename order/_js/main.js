var arFunInit = Array(resizes);
var constErr = "ОШИБКА: поле не заполнено!";
var moduleuser = 'jsfbase.php';
var moduleanonim = 'jsform.php';
var sform = true;
function check() {
	var ret = true;
	$("input:text, textarea").each(function() {
		var retL = true;
		var tmpV = $.trim($(this).val());
		if ((tmpV == constErr) || (tmpV == ''))  {
			retL = false;
			var tmpA = $(this).attr("id");
			
			var tmpN = $.trim($("#asktel").val());
			if ((tmpA == "askmail") && (tmpN != constErr) && (tmpN != '')) {
				retL = true;
			}
			
			tmpN = $.trim($("#askmail").val());
			if ((tmpA == "asktel") && (tmpN != constErr) && (tmpN != '')) {
				retL = true;
			}
		}			
		if (retL == false) {
			ret = false;
			$(this).val(constErr);
			$(this).css("background-color","#ffa17d");
		}
	});
	return ret;
}

function get_name_browser(){
    // получаем данные userAgent
    var ua = navigator.userAgent;    
    // с помощью регулярок проверяем наличие текста,
    // соответствующие тому или иному браузеру
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    // условий может быть и больше.
    // сейчас сделаны проверки только 
    // для популярных браузеров
    return 'Не определен';
}
 
function resizes() {
}

$(document).ready(function() {
	$(".show__content table").hide();
	for (var i=0; i<arFunInit.length;i++) {
		arFunInit[i]();
	}
	$(window).load(function() {		
	
    			// showmes("Ошибка", "<h2>Ошибка связи с сервером!</h2><p>Уважаемый клиент, сегодня вирусная атака парализовала работу нашей компании. На данный момент приём онлайн заказов приостановлен. Просим прощения за временные неудобства.</p>");
	
	
		$(".show__content table").fadeIn(1000, function() {
			/*
			$('html, body').animate({
				scrollTop: $('.main').offset().top
			}, 500);
			*/
		});
	});
	
	window.onbeforeunload = function () { 
		if (sform) {
			var flres = true;
			var args = new Object();
			$("input, textarea").each(function() {
				var tname = $(this).attr('name');
				var tval = $(this).val();
				tval = tval.replace("\n", " ");
				args[tname] = tval;
			});
			if (($.trim(args['orcw']) == '') && ($.trim(args['orcwf']) == '') && ($.trim(args['orcwi']) == '')) {
				flres = false;
			}
			if ($.trim(args['ordate']) == '') {
				flres = false;
			}
			if (flres) {
			  var e = e || window.event; 
			  var myMessage= "Вы заполнили, но НЕ ОТПРАВИЛИ форму."; 
			  if (e) { 
			    e.returnValue = myMessage; 
			  } 
			  return myMessage;
			}
		}
	}

	$(window).resize(resizes);

	// пример использования
	// var browser = get_name_browser();
	// if (browser == 'Safari') {
		// location.replace("http://cw.com.ua/order/");
	// };

	$(".slader p").hide();
	$("div.menu").addClass('menu-nosel');
	$("div.menu-nosel").click(function() {
		$(".slader p").slideUp("slow");
		$("div.menu-sel").addClass('menu-nosel');
		$("div.menu").removeClass('menu-sel')
		$(this).addClass('menu-sel');
		$(this).parent().children("p").slideDown("slow");
	});
	$("div.top-link").eq(0).addClass('top-link-o-0');
	$("div.top-link").eq(1).addClass('top-link-o-1');
	$("div.top-link").eq(2).addClass('top-link-o-2');
	$(".top-link").eq(0).hover(  
		function () {    
			$(this).removeClass('top-link-o-0'); 
			$(this).addClass('top-link-h-0'); 
		},  function () {    
			$(this).removeClass('top-link-h-0');
			$(this).addClass('top-link-o-0');
		}
	);
	$(".top-link").eq(1).hover(  
		function () {    
			$(this).removeClass('top-link-o-1'); 
			$(this).addClass('top-link-h-1'); 
		},  function () {    
			$(this).removeClass('top-link-h-1');
			$(this).addClass('top-link-o-1');
		}
	);
	$(".top-link").eq(2).hover(  
		function () {    
			$(this).removeClass('top-link-o-2'); 
			$(this).addClass('top-link-h-2'); 
		},  function () {    
			$(this).removeClass('top-link-h-2');
			$(this).addClass('top-link-o-2');
		}
	);
	$("div.top2-link").eq(0).addClass('top2-link-o-0');
	$(".top2-link").eq(0).hover(  
		function () {    
			$(this).removeClass('top2-link-o-0'); 
			$(this).addClass('top2-link-h-0'); 
		},  function () {    
			$(this).removeClass('top2-link-h-0');
			$(this).addClass('top2-link-o-0');
		}
	);
	var menuStart = $("#idmenu").offset();
	var oldS = 0;
	var winW = $(window).width();
	var winH = $(window).height();
	$("#g-book").width(winW - 400);
	$("#g-book").height(winH - 160);
	var menuH = $("#idmenu").innerHeight() + 20;
	$("#td-menu").height(menuH - 20);
/*
	$(window).scroll(function() {
 		$("#idmenu").css('position', 'absolute');
		var scrollTop = $(window).scrollTop();
		var menuOff = $("#idmenu").offset(); 
		if (winH > menuH) {
			if (scrollTop > menuStart.top) {
				$("#idmenu").stop().animate({top: scrollTop}, 1500);
			} else {
				$("#idmenu").stop().animate({top: menuStart.top}, 1500);
			}
		} else {
			if (scrollTop > oldS) {
				if (scrollTop + winH > menuOff.top + menuH) {
					$("#idmenu").stop().animate({top: scrollTop + winH - menuH}, 1500);
				}
				if (menuOff.top > menuStart.top) {
					var menuNew = scrollTop + winH - menuH;
					if (menuNew > menuStart.top) {
						$("#idmenu").stop().animate({top: menuNew}, 1500);
					} else {
						$("#idmenu").stop().animate({top: menuStart.top}, 1500);
					}
				}
			} else {
				if (scrollTop < menuOff.top) {
					if (scrollTop > menuStart.top) {
						$("#idmenu").stop().animate({top: scrollTop}, 1500);
					} else {
						$("#idmenu").stop().animate({top: menuStart.top}, 1500);
					}
				}
			}
		}
		oldS = scrollTop;
	});
*/	
	$("input:text, textarea").focus(function() {
		$("input:text, textarea").each(function() {
			var tmp = $(this).val();
			if (tmp == constErr) {
				$(this).val("");
				$(this).css("background-color","#ffffff");
			}
		});
		$("#asksend").val("Отправить");
		$("#asksend").attr("disabled",false);
	});
	
	$("#asksend").bind("click", function(e){
		$("#asksend").attr("disabled",true);
		$("#asksend").val("...отправляем");
		if (check()) {

			$.post(pathroot + '_system/' + moduleuser,'run=ask&askname=' + $("#askname").val() + '&askmail=' + $("#askmail").val() + '&asktel=' + $("#asktel").val() + '&askmess=' + $("#askmess").val(), function(data) {
				$("input:text, textarea").val("");
				$("#asksend").val("...доставлено со статусом "+data);
				$("#asksend").attr("disabled",false);
			}, "html");

		} else {
			$("#asksend").val("...заполните выделенные поля");
		}
	});	

	$("#farea").focus(function() {
		$("#fstat").html("");
		$("#fsend").attr("disabled",false);
	});
	$("#fsend").bind("click", function(e){
		var stitle = $("title").html();
		var stext = $.trim($("#farea").val());
		if (stext != '') {
			$("#fstat").html("отправляется...");
			$("#fsend").attr("disabled",true);
			$.post(pathroot + '_system/' + moduleanonim,'title=' + stitle + '&text=' + stext, function() {
				$("#fstat").html("доставлено");
				$("#farea").html("");					
				$("#fsend").attr("disabled",false);
			});
		} else {
			$("#fstat").html("не конструктивно");
		}
	});	
});
