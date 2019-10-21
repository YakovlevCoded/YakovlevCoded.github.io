$(document).ready(function(){
/*---------Слайдер на главной странице-------*/
/*
 $("#owl-slider ").owlCarousel({
  items : 4,
  singleItem: true,
  autoPlay : true,
  paginationNumbers: true
 });*/

     $('#owl-slider').owlCarousel({
            loop:true,
            nav:false,
            autoplay:true,
            items:1
      });
        var i = 1;
    $('#owl-slider .owl-dot').each(function(){
      $(this).html("<span>"+i+"</span>");
      i++;
    });

/*-----------------------Центрируем заголовок по вертикали-----------------------------------------------*/
var alertmsg;
var alertmsgUa = "Ваше повідомлення відправлено!";
var alertmsgRu = "Ваше сообщение отправлено!";
var alertmsgEn = "Your message have been sent";


if($(".ua").hasClass('active-lang')){
    alertmsg = alertmsgUa;
   
  }
  else if($(".ru").hasClass('active-lang')){
    alertmsg = alertmsgRu;
   
  }
  else if($(".en").hasClass('active-lang')){
    alertmsg = alertmsgEn;
   
  } 



$(".language a").click(function(event){
  event.preventDefault();
  var modalDataClass = $("#modal-menu .modal-body .active-modal").attr("data-class");
  var modalHref = $(this).attr("href");
  var modalClass = modalDataClass+"::"+modalHref;
  $.cookie('modalClass', modalClass);
  location.href = modalHref; 
});

function openModal(){
  var str = $.cookie('modalClass');
  if(str!==undefined){
    var strArr = str.split("::");
    var modalClass = strArr[0];
    var hrefArr = strArr[1].split("?");
    var modalCookieHref = hrefArr[0];
    
    var nowHref = document.location.pathname;
    
    if(modalClass!==""&&modalClass!==undefined&&modalClass!==null&&modalCookieHref==nowHref){
      $("."+modalClass).removeClass('inv').addClass('active-modal');
      $("#modal-menu").modal();
      $( "#modal-menu div.modal-content" ).animate({
      "right": "-2%"
      }, 500 );
    }
  } 
}

var contentBlockHeight = function(){
  var h = $(window).height();
  var w = $(window).width();
  var header = $(".phone-header").height();
  var marginTop = 6;
  var totalWidth;
  var cssHeight = window.screen.height; 
  var cssWidth = window.screen.width;
  var titleHeight = 40;
  var leftMenuWidth = $(".landscape-nav").width();
  
  var contentHeight = h - header - marginTop;

  if(h/w>1){
    var contentWidth = w;
    $(".phone-header").removeClass('inv');
    $(".landscape-nav").addClass('inv');
    $(".content-block").height(contentHeight);
      $(".content-block").css({
        "width":w,
      "padding-left":"0px",
      "padding-right":"0px"
    });
    var slideHeight = h - header - marginTop - titleHeight;  
    $("#promo-slider .slide").height(slideHeight);
    $(".owl-item img").width(contentWidth);
    var promoWidth = 0.85*contentWidth-6;
    $("#promo-slider .owl-item img").width(promoWidth);
    $("html").css({"overflow-y":"hidden"});
    
  }
  else if(h/w<1  ){
      var dimension;
     $("html").css({"overflow-y":"scroll"}); 
    if(cssHeight/cssWidth<1){
      dimension = cssHeight/cssWidth;
    }
    else if(cssHeight/cssWidth>1){
      dimension = cssWidth/cssHeight;
    }
    var contentWidth = w*dimension ;

    var promoWidth = 0.85*contentWidth-6;
    var freeSpace = (w - leftMenuWidth - contentWidth)/2;
    var leftPadding = freeSpace + leftMenuWidth;
    $(".phone-header").addClass('inv');
    $(".landscape-nav").removeClass('inv'); 
    $(".content-block").height(h);
    $("#owl-slider img, .form .pages").width(contentWidth);
    $("#promo-slider .text-for-scroll, #promo-slider .owl-item img").width(promoWidth);
    $(".content-block").css({
      "width":w,
      "padding-left":leftPadding,
      "padding-right":freeSpace
    });
    var slideHeight = h - marginTop - titleHeight;  
    $("#promo-slider .slide").height(slideHeight);
  }
  
  //Картинки меню в горизонтальном варианте
  if(h>320){
    $(".landscape-header img").css({
      "width":"64px"
    });
  }
  else if (h<210){
    $(".landscape-header img").css({
      "width":"32px"
    });
  }
  else{
    $(".landscape-header img").css({
      "width":"48px"
    });
  }  
  //$(".content-block").height(contentHeight);
  $(".content-block").width(contentWidth);

}


$(window).load(function() {
  contentBlockHeight();
  openModal();
});
$(window).resize(function() {
  if($(".in").length==0){
    contentBlockHeight();  
  }
  
});


/*-----------------------------------------------------------------------------------*/
  
//анимация окошек меню
$( ".menu-button" ).click(function(){
  $( "#modal-menu div.modal-content" ).animate({
    "right": "-2%"
    }, 500 );
  $('.menu-punkts').removeClass('inv').addClass('active-modal');
  $('.modal-numbers, .modal-questions').addClass('inv').removeClass('active-modal');

});

$( ".call-button" ).click(function() {
  $( "#modal-menu div.modal-content" ).animate({
    "right": "-2%"
    }, 500 );

  $('.menu-punkts, .modal-questions').addClass('inv').removeClass('active-modal');
  $('.modal-numbers').removeClass('inv').addClass('active-modal');
});
$('.ask-button').click(function(){
  $( "#modal-menu div.modal-content" ).animate({
    "right": "-2%"
    }, 500 );

  $('.menu-punkts, .modal-numbers').addClass('inv').removeClass('active-modal');
  $('.modal-questions').removeClass('inv').addClass('active-modal');
});
$('.number').mask('(999) 999-99-99');





//autocomplete for order input
$("#ask-form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
  e.preventDefault();
	var res = $("#phone-ask").val();
	res = res.substr(1, 1);
	if (res == '0') {
		  var form_data = $(this).serialize(); //собераем все данные из формы
		  $.ajax({
			type: "POST", //Метод отправки
			url: "ask.php", //путь до php фаила отправителя
			data: form_data,
			success: function(){
			  alert(alertmsg);
			  location.reload();
			}
		  });
	} else {
		$("#phone-ask").css("background-color", 'red')
		                .animate({opacity: 0.1}, 1500)
		                .animate({opacity: 1}, 1500, "linear", function() {
								$(this).css("background-color", 'white');
						});
						
	}
});

 $("#form").submit(function(e) { //устанавливаем событие отправки для формы с id=form
	e.preventDefault();
	var res = $("#phone-form").val();
	res = res.substr(1, 1);
	if (res == '0') {
		var form_data = $(this).serialize(); //собераем все данные из формы
		$.ajax({
		  type: "POST", //Метод отправки
		  url: "sender.php", //путь до php фаила отправителя
		  data: form_data,
		  success: function(){
			alert(alertmsg);
			location.reload();
		  }
		});
	} else {
		$("#phone-form").css("background-color", 'red')
		                .animate({opacity: 0.1}, 1500)
		                .animate({opacity: 1}, 1500, "linear", function() {
								$(this).css("background-color", 'white');
						});
						
	}
  });



/*-----------------------------------------------------------------------------------*/
$(function() {
  $( "#accordion" ).accordion({
    active: false,
    collapsible: true,
    heightStyle: "content"
  });
});
var askBox = function(){
  var b = $('h1.ask').height();
  var x = $('.ask-content').height();
  var a = x-b;
  $('.scroll-box').css({
   'height':a
  });
}
  $(window).load(function() {
      askBox();
      promoScrollInsert();
  });
  $(window).resize(function() {
      askBox();
      promoScrollInsert();
  });
  
/*------Promo page script-----------*/

$('#promo-slider').owlCarousel({
  loop:true,
  nav:true,
  items:1,
  
  navText: [
      '<img src="img/images/Path_01.png" alt="">',
      '<img src="img/images/Path_03.png" alt="">'
      ],
  afterInit : function(elem){
      var that = this
      that.owlControls.prependTo(elem)
    }
 });
  
    $(function(){
      $("#promo-slider .owl-dots").prependTo('#promo-slider');
      $(".promo-content #title").prependTo('#promo-slider');
      
      //$(".promo-content .owl-buttons").appendTo(".promo-scroll-track, .promo-scroll-button");
    });

    $('#promo-slider .owl-dot').each(function(){
      $(this).html("<span>"+i+"</span>");
      i++;
    });
function promoScrollInsert(){
  var h = $(window).height();
  var w =  $(window).width();
  var header = $(".phone-header").height();
  var hImg = $(".promo-content .slide-content img").height();
  var hTitle = 40+6+20;
  var scrollHeight = h - header - hImg - hTitle;
  var scrollTop = h - scrollHeight;
  var paddingLeft = $(".content-block").css("padding-left");

  $(".promo-scroll-track").css({
    "top":scrollTop,
    "left":"14px",
    "height":scrollHeight-44
  });
  $(".promo-scroll-button").css({
    "top":scrollTop,
    "left":"10px"
  });
  if(h/w<1){
    var hTitle = 40;
    var scrollHeight = h - hImg - hTitle;
    var scrollTop = h - scrollHeight;
    var paddingLeft = $(".content-block").css("padding-left");
    var intPaddingLeft = parseInt(paddingLeft,10);
    var trackLeft =intPaddingLeft+14;
    var buttonLeft =intPaddingLeft+10;
    console.log(paddingLeft);

    $(".promo-scroll-track").css({
      "top":scrollTop,
      "left":trackLeft,
      "height":scrollHeight-44
    });
    $(".promo-scroll-button").css({
      "top":scrollTop,
      "left":buttonLeft
    });

  }


}
$(".box-with-scroll").scroll(function() {
    var z = $(this).children(".text-for-scroll").height();
    var box = $(this).height();
    var x = z - box + 20;
    var y = $(this).scrollTop();
    var scrollHeight = $(this).children(".scroll-track").height();
    var difference = y/x;
    var scrollMove = y+10;
    var trace =  scrollHeight*difference+scrollMove;
    $(this).children('.scroll-track').css({
      "top":scrollMove
    });
    $(this).children(".scroll-button").css({
      "top":trace
    });  
    
    
    console.log(" difference = " + difference);
});
$(".promo-content .slide").scroll(function(){
  var h = $(window).height();
  var scrollContent = $(this).children(".slide-content").height();
  var box = $(this).height();
  var scrollTrack = $(".promo-scroll-track").height();
  var scrollButton = 10;
  var fromTop = $(this).scrollTop();
  var y = scrollContent - box + scrollButton;
  var diff = fromTop/y;
  var beginPoint = h - scrollTrack - 20;
  var trace = beginPoint + diff * scrollTrack;
  $(".promo-scroll-button").css({
    "top":trace-34
  });
  console.log("scroll place = "+ y +" fromTop = " + fromTop + " between = " + diff);
});

$('.modal').on('hidden.bs.modal', function () {
  
  askBox();
  promoScrollInsert();
  contentBlockHeight();
});

  
});

// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}
function setDesctop(url) {
    setCookie('setdesc', 1, { path: '/'});
    location.replace(url);
}