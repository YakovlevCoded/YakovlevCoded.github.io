$(document).ready(function(){ 
	  
	  
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
/*------------Variables-------------------------------------------------------------------*/
  var MinWinDel = 3;//минимальная  разница  между  началом  и  концом ВремениДоставки (сейчас = 3)
  var min = 2;//минимальное количество бутылей в заказе (сейчас = 2)
  var dop = 50;//стоимость доставки меньше минимального количества (сейчас = 50)
  var now = new Date();//Сегодняшняя дата
  var Kyiv;


//массивы ошибок
var headerArrUa = ["Помилка!","Попередження!"];
var errormsgArrUa = [
/*0*/  "Невірно вказаний час доставки!<br>Виберіть потрібний час доставки<br>у вигляді  ГГ.ХХ-ГГ.ХХ<br>Доставки виконуються:<br>ПН-ПТ 7:00-21:00<br>СБ 7:00-18:00<br>Період доставки не менше 3 годин.",
/*1*/  "Період доставки замалий.<br>Мінімальний гарантований період доставки<br>не менше 3 годин.<br>Прийом замовлень на вказаний вами час можливий тільки по телефону.<br>Доставки виконуються:<br>ПН-ПТ 7:00-21:00<br>СБ 7:00-18:00",
/*2*/  "Не вказано дату доставки!<br>Доставки виконуються: <br>ПН-ПТ  7:00-21:00<br>СБ     7:00-18:00",
/*3*/  "Невірна дата доставки!<br>Доставки виконуються:<br>ПН-ПТ  7:00-21:00<br> СБ     7:00-18:00",
/*4*/  "Неділя - вихідний!<br>Доставки виконуються:<br>ПН-ПТ  7:00-21:00<br> СБ     7:00-18:00",
/*5*/  "Святковий день - доставка неможлива!<br>Доставки виконуються:<br>ПН-ПТ  7:00-21:00<br> СБ     7:00-18:00",
/*6*/  "Не вказано час доставки!<br>Доставки виконуються:<br>ПН-ПТ  7:00-21:00<br> СБ     7:00-18:00",
/*7*/  "<h3>На жаль, на обрану Вами дату прийом замовлень завершено.</h3><p>Ви  можете оформити замовлення на інший зручний для Вас день. Додаткова інформація за телефоном:<br>&nbsp;&nbsp;<a href=\"tel:+380443913030\">044 391 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380503153030\">050 315 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380933183030\">093 518 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380672433040\">067 243 30 40</a></p><p>Режим роботи колл-центру:<br>&nbsp;&nbsp;ПН-ПТ &nbsp;&nbsp;  8:00-21:00<br>&nbsp;&nbsp;СБ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-17:00</p>",
/*8*/  "<h3>На жаль, прийом замовлень на завтра завершено.</h3><p>Ви  можете оформити замовлення на інший зручний для Вас день. Додаткова інформація за телефоном:<br>&nbsp;&nbsp;<a href=\"tel:+380443913030\">044 391 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380503153030\">050 315 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380933183030\">093 518 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380672433040\">067 243 30 40</a></p><p>Режим роботи колл-центру:<br>&nbsp;&nbsp;ПН-ПТ &nbsp;&nbsp;  8:00-21:00<br>&nbsp;&nbsp;СБ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-17:00</p>",
/*9*/  "Не заповнені важливі поля!<br>Поля, позначені зірочкою, повинні бути заповнені!",
/*10*/  "Не вказана кількість бутелів!<br>При замовленні 2 бутелів або більше доставка здійснюється безкоштовно.",
/*11*/  "Ваше повідомлення відправлено!",
/*12*/ "Ожидайте, идет отправка данных"
];
var advicemsgArrUa = [
  "При замовленні менше 2 бутелів<br>доставка оплачується окремо!<br>Додаткова вартість за доставку<br>становить 50 грн.</br>",
  "Ви впевнені, що старі примітки актуальні? <br>  Текст приміток: " + $("#orcomment").val()  
];
var headerArrRu = ["Ошибка!","Предупреждение!"];
var errormsgArrRu = [
/*0*/  "Неверно указано время доставки!<br>Укажите требуемое время доставки<br>в виде  ЧЧ.ММ-ЧЧ.ММ<br>Доставки выполняются:<br>ПН-ПТ 7:00-21:00<br>СБ 7:00-18:00<br>Период доствки не менее 3 часов.",
/*1*/  "Период доставки слишком мал.<br>Минимальный гарантированный период доставки<br>не менее 3 часов.<br>Прием заказов на указанное Вами время возможен только по телефону.<br>Доставки выполняются:<br>ПН-ПТ 7:00-21:00<br>СБ 7:00-18:00",
/*2*/  "Не указана дата доставки!<br>Доставки выполняются:<br>ПН-ПТ 7:00-21:00<br>СБ 7:00-18:00",
/*3*/  "Неверная дата доставки!<br>Доставки выполняются:<br>ПН-ПТ 7:00-21:00<br>СБ 7:00-18:00",
/*4*/  "Воскресенье - выходной!<br>Доставки выполняются:<br>ПН-ПТ 7:00-21:00<br>СБ 7:00-18:00",
/*5*/  "Праздничный день - доставка невозможна!<br>Доставки выполняются:<br>ПН-ПТ 7:00-21:00<br>СБ 7:00-18:00",
/*6*/  "Не указано время доставки!<br>Доставки выполняются:<br>ПН-ПТ 7:00-21:00<br>СБ 7:00-18:00",
/*7*/  "<h3>К сожалению, на выбранную Вами дату прием заказов завершен.</h3><p>Вы можете оформить заказ на другой удобный для Вас день. Дополнительная информация по телефону:<br>&nbsp;&nbsp;<a href=\"tel:+380443913030\">044 391 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380503153030\">050 315 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380933183030\">093 518 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380672433040\">067 243 30 40</a></p><p>Режим работы колл-центра:<br>&nbsp;&nbsp;ПН-ПТ &nbsp;&nbsp;  8:00-21:00<br>&nbsp;&nbsp;СБ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-17:00</p>",
/*8*/  "<h3>К сожалению, прием заказов на завтра завершен.</h3><p>Вы можете оформить заказ на другой удобный для Вас день. Дополнительная информация по телефону:<br>&nbsp;&nbsp;<a href=\"tel:+380443913030\">044 391 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380503153030\">050 315 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380933183030\">093 518 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380672433040\">067 243 30 40</a></p><p>Режим работы колл-центра:<br>&nbsp;&nbsp;ПН-ПТ &nbsp;&nbsp;  8:00-21:00<br>&nbsp;&nbsp;СБ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-17:00</p>",
/*9*/  "Не заполнены важные поля!<br>Поля, отмеченные звездочкой, должны быть заполнены!",
/*10*/  "Не указано количество бутылей!<br>При заказе 2-х бутылей или более доставка осуществляется бесплатно.",
/*11*/  "Ваше сообщение отправлено!",
/*12*/ "Ожидайте, идет отправка данных"
];
var advicemsgArrRu = [
  "При заказе менее 2 бутылей<br>доставка не является бесплатной!<br>Дополнительная стоимость за доставку<br>составляет 50 грн.",
  "Вы уверны, что старое примечание актуально? <br>  Текст примечания: " + $("#orcomment").val()
];
var headerArrEn = ["Error!","Warning!"];
var errormsgArrEn = [
/*0*/  "The wrong delivery time!<br>Enter the required delivery time<br>in the form HH: MM-HH: MM<br>Deliveries run:<br>Mon-Fri  7:00-21:00<br>Sat      7:00-18:00<br>The delivery interval has to be not less than 3 hours.",
/*1*/  "The delivery period is too small<br>The minimum guaranteed delivery period<br>is not less than 3 hours.<br>Receiving orders at the time of your choise is possible only by phone.<br>Deliveries run:<br>Mon-Fri  7:00-21:00<br>Sat      7:00-18:00",
/*2*/  "Not specified the delivery date!<br>Deliveries run:<br>Mon-Fri  7:00-21:00<br>Sat      7:00-18:00",
/*3*/  "The wrong date!<br>Deliveries run:<br>Mon-Fri  7:00-21:00<br>Sat      7:00-18:00",
/*4*/  "Sunday is a day off!<br>Deliveries run:<br>Mon-Fri  7:00-21:00<br>Sat      7:00-18:00",
/*5*/  "On holiday delivery is not possible!<br>Deliveries run:<br>Mon-Fri  7:00-21:00<br>Sat      7:00-18:00",
/*6*/  "Not specified the delivery time!<br>Deliveries run:<br>Mon-Fri  7:00-21:00<br>Sat      7:00-18:00",
/*7*/  "<h3>Unfortunately, accepting orders for the day you chose is completed.</h3><p>You can place an order on another convenient day. Additional information by phone:<br>&nbsp;&nbsp;<a href=\"tel:+380443913030\">044 391 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380503153030\">050 315 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380933183030\">093 518 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380672433040\">067 243 30 40</a></p><p>Call center working hours:<br>&nbsp;&nbsp;ПН-ПТ &nbsp;&nbsp;  8:00-21:00<br>&nbsp;&nbsp;СБ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-17:00</p>",
/*8*/  "<h3>Unfortunately, accepting orders for tomorrow is completed.</h3><p>You can place an order on another convenient day. Additional information by phone:<br>&nbsp;&nbsp;<a href=\"tel:+380443913030\">044 391 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380503153030\">050 315 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380933183030\">093 518 30 30</a><br>&nbsp;&nbsp;<a href=\"tel:+380672433040\">067 243 30 40</a></p><p>Call center working hours:<br>&nbsp;&nbsp;ПН-ПТ &nbsp;&nbsp;  8:00-21:00<br>&nbsp;&nbsp;СБ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00-17:00</p>",
/*9*/  "Didn't specified the important fields!<br>The fields marked with an asterisk have been fulfilled.",
/*10*/  "Didn't specified the quantity of bottles!<br>If you order 2 or more bottles, then the delivery will be free of charge.",
/*11*/  "Your message have been sent",
/*12*/ "Ожидайте, идет отправка данных"
];
var advicemsgArrEn = [
  "If you order less than 2 bottles,<br> you should pay for the delivery!<br>Additional cost for the delivery is 50 UAH.",
  "Are you sure, that last notes are relevant? <br>  Text of notes: " + $("#orcomment").val()
];


var headerArr = [];
var errormsgArr = [];
var advicemsgArr = [];
var dopmsg;
  //список времени ОТ
  var usualFromList = ["07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00"];  
  var usualFromListNew = ["06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00"];
  //дежурный сптсок времени ОТ
  var dutyFromList = ["07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00"];
  //Список времени ДО
  var usualToList = ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"];
  var usualToListNew = ["06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30"];
  //дежурный список времени ДО
  var dutyToList= ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00"];
  var currentDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));//системная дата
  var nextday = new Date();
  nextday.setDate(currentDate.getDate()+1);//ТекущаяДата+1
  var nowValue = Date.parse(currentDate);//Текущая дата в числовом представлении
  var nextDayValue=nowValue+86400000;//Завтра в числовом представлении
  var holidate = [];//список выходных
  for(var i = 0; i < holiday.length; i++ ){
    holidate[i] = Date.parse(holiday[i]);
  }
  var closedate = [];//список закрытых
  for(var i = 0; i < closeday.length; i++ ){
    closedate[i] = Date.parse(closeday[i]);
  }
  var dutydate = [];//список дежурных дней, в которые компания работает по субботнему графику (загружается с сервера)
  for(var i = 0; i < dutyday.length; i++ ){
    dutydate[i] = Date.parse(dutyday[i]);
  }  

  
/*-------------------FIRST ORDER PAGE------------------------*/

$(".window-cover").scroll(function(){
  $(".first-window").scroll();
});
$(".window").scroll(function(event) {
  var x = $(this).scrollTop();
  console.log("this window from top is "+x);
});





/*--------------------Date input-----------------------------*/
$.datepicker.regional['en'] ={
  closeText: 'Close', 
      prevText: '', 
      nextText: '', 
      currentText: 'Today', 
      monthNames: ['January','February','March','April','May','June','July','August','September','October','November ','December'], 
      monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], 
      dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], 
      dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'], 
      dayNamesMin: ['SU','MO','TU','WE','TH','FR','SA'], 
      dateFormat: 'dd.mm.yy', 
      minDate: now,
      showOtherMonths: true,
      selectOtherMonths: true,
      firstDay: 1, 
      isRTL: false,
      onChangeMonthYear: function() {
        verifyDate();
      }
}
/*----------Локализация на украинский язык---------------*/
  $.datepicker.regional['ua'] ={
    closeText: 'Закрити', 
    prevText: '&#x3c;Попер', 
    nextText: 'Наст&#x3e;', 
    currentText: 'Сьогодні', 
    monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Лютий'], 
    monthNamesShort: ['Січ','Лют','Бер','Кві','Тра','Чер','Лип','Сер','Вер','Жов','Лис','Гру'], 
    dayNames: ['неділя','понеділок','вівторок','середа','четвер','п`ятниця','субота'], 
    dayNamesShort: ['нед','пнд','втр','срд','чтв','пт','сбт'], 
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], 
    dateFormat: 'dd.mm.yy',
    minDate: now,
    showOtherMonths: true,
      selectOtherMonths: true,
    firstDay: 1, 
    isRTL: false,
    onChangeMonthYear: function() {
      verifyDate();
    }
  }
/*----------Локализация на русский язык---------------*/
  $.datepicker.regional['ru'] = { 
    closeText: 'Закрыть', 
    prevText: '&#x3c;Пред', 
    nextText: 'След&#x3e;', 
    currentText: 'Сегодня', 
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'], 
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], 
    dateFormat: 'dd.mm.yy',
    minDate: now,
showOtherMonths: true,
      selectOtherMonths: true,
    firstDay: 1, 
    isRTL: false,
    onChangeMonthYear: function() {
      verifyDate();
    }
  };
  if($(".ua").hasClass('active-lang')){
    $.datepicker.setDefaults($.datepicker.regional['ua']);
    headerArr = headerArrUa;
    errormsgArr = errormsgArrUa;
    advicemsgArr = advicemsgArrUa;
    Kyiv = "Київ";

  }
  else if($(".ru").hasClass('active-lang')){
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    headerArr = headerArrRu;
    errormsgArr = errormsgArrRu;
    advicemsgArr = advicemsgArrRu;
    Kyiv = "Киев"; 
  }
  else if($(".en").hasClass('active-lang')){
    $.datepicker.setDefaults($.datepicker.regional['en']);
    headerArr = headerArrEn;
    errormsgArr = errormsgArrEn;
    advicemsgArr = advicemsgArrEn;
    Kyiv = "Kyiv";

  } 
  //$.datepicker.setDefaults($.datepicker.regional['ru']); 
/*-----------Отключаем воскресенья и выходные дни------------*/
  var disableSpecificDaysAndSundays = function(date){
    var day = date.getDay();        
    var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
    return [ holiday.indexOf(string) == -1]
  }
/*--------Инициализация календаря---------------------------*/
  $('#iddeldate').datepicker({
    beforeShowDay: disableSpecificDaysAndSundays,
    onClose:function() {
    var dateForCookie = $("#iddeldate").val();
    $.cookie('dateFromCookie', dateForCookie, {expires: 100});
    }  
  });
/*-----------Переход между месяцами в календаре-------------*/
  function verifyDate() {
    $(".ui-datepicker-calendar").find("tr").each(function(){});
  }




/*--------------------Time input-----------------------------*/



/*Функция для создания списка времени внутри окошек барабанов, есть два 
 id : fromlist, tolist
 arr : usualFromList, dutyFromList, usualToList, dutyToList*/  
  function createTimeList(id,arr){
    $("#"+id).html("");
    for( i = 0; i< arr.length; i++){
      var timeListElement = document.createElement('li');
      timeListElement.className = "list-group-item time-list-item";
      timeListElement.innerHTML = arr[i];
      $("#"+id).append(timeListElement);
    }
  }
 $("#time-list-second").on("shown.bs.modal",function(){
    $("#time-accept-second").click(function() {
      var windowScroll = $("#time-list-second .first-window").scrollTop();
       var x = Math.round(windowScroll / 50);
       var z = x+1;
       var y = $("#time-list-second ul li:nth-child("+z+")").text();
       var lastElement = $("#time-list-second ul li:last-child()").text();
       if(y == lastElement){
        $("#time-list-second").modal("hide");
        $("#time-list").modal("show"); 
       }
       else{
        $("#time-list-second").modal("hide");
      $("#iddeltime").val(y);
      var timeCookie = $("#iddeltime").val();
      $.cookie('ortime', timeCookie, {
        expires: 3650
      }); 
       }
        
    });
    $("#time-list-second ul li").click(function(event) {
      var liCheck = $(this).text();
      var lastLi = $("#time-list-second ul li:last-child()").text();
      if(liCheck!==lastLi){
          $("#time-list-second").modal("hide");
          $("#iddeltime").val(liCheck);
          var timeCookie = $("#iddeltime").val();
          $.cookie('ortime', timeCookie, {
            expires: 3650
          });
      }
      else{
        $("#time-list-second").modal("hide");
        $("#time-list").modal("show"); 
      }
    });
 });
$("#time-list").on("shown.bs.modal",function(){
  $("#time-accept").click(function() {
    var firstWindowScroll = $("#time-list .first-window").scrollTop();
    var secondWindowScroll = $(".second-window").scrollTop();
    $("#time-list").modal("hide");
    $(".alert-agree").removeClass("alert-agree-forward alert-agree-time").addClass("alert-agree-time-list");
    $(".alert-disagree").removeClass("alert-disagree-forward alert-disagree-time").addClass("alert-disagree-time-list");
    var x = Math.round(firstWindowScroll / 50);
    var y = Math.round(secondWindowScroll / 50);
    var win = x-y;
    console.log("place in massiv from first window "+x+"place in massiv from second window "+y+"delta hour "+win+" length of massiv is "+usualFromList.length);
    if(win>3){
      header = headerArr[0];
      errormsg = errormsgArr[0];
      errorMessage(header,errormsg);
      return $("#alert").modal();
    }
    else if(win> 0){
      header = headerArr[0];
      errormsg = errormsgArr[1];
      errorMessage(header,errormsg);
      return $("#alert").modal();
    }
    else if(win<= 0){
      $("#iddeltime").val(fromArr[x]+"-"+toArr[y]);
      var timeCookie = $("#iddeltime").val();
      $.cookie('ortime', timeCookie, {
        expires: 3650
      });
    }


  });  
});

/*-------------------------------------------------------------------------------*/
function popupWidth(){
  var b = $(window).width();
    var tir = $('.ui-autocomplete').width();
    var uiMargin = (b-tir)/2;
        $('.ui-autocomplete').css({
          'right':uiMargin,
          'left':uiMargin
        });
  }



/*----------------Запуск списка времени--------------------------------*/




/*-----------------------*/
function errorMessage(header,errormsg){
  $('.alert-attention').html("").html(errormsg);
  $(".alert-header").html("").html(header);
  $("#alert .modal-body").removeClass('alert-warning').addClass('alert-danger');
  $("#alert .modal-header").removeClass('alert-warning').addClass('alert-danger');
  $(".alert-buttons").hide();
  $(".order-buttons").hide();
}
function attentionOrderMessage(header,advicemsg,dopmsg){
  $('.alert-attention').html("").html(advicemsg+dopmsg);
  $(".alert-header").html("").html(header);
  $("#alert .modal-body").removeClass('alert-danger').addClass('alert-warning')
  $("#alert .modal-header").removeClass('alert-danger').addClass('alert-warning');
  $(".alert-buttons").hide();
  $(".order-buttons").show();
}
function attentionMessage(header,advicemsg){
  $('.alert-attention').html("").html(advicemsg);
  $(".alert-header").html("").html(header);
  $("#alert .modal-body").removeClass('alert-danger').addClass('alert-warning')
  $("#alert .modal-header").removeClass('alert-danger').addClass('alert-warning');
  $(".alert-buttons").show();
  $(".order-buttons").hide();
}



/*-------------------------------------------------------------------------------*/

function firstPageCheck(idInput){
	



  if(idInput=="iddeltime"){
    $(".alert-agree").removeClass("alert-agree-forward alert-agree-time-list").addClass("alert-agree-time");
    $(".alert-disagree").removeClass("alert-disagree-forward alert-disagree-time-list").addClass("alert-disagree-time");
  }
  else if(idInput=="to-second-page"){
    $(".alert-agree").removeClass("alert-agree-time alert-agree-time-list").addClass("alert-agree-forward");
    $(".alert-disagree").removeClass("alert-disagree-time alert-disagree-time-list").addClass("alert-disagree-forward");
  }
  //Передаем идентификатор поля с которого запущена функция

  var text = document.getElementById('iddeldate').value;//Передаем строку из поля дата

  var ordateValue = Date.parse(text.replace(/(\d+).(\d+).(\d+)/, '$3-$2-$1'));

  var ordate = new Date(ordateValue);//форматируем Дату доставки

  var orday = ordate.getDay();//получаем день недели доставки

  var currentDay = currentDate.getDay();//получаем сегодняшний день недели

  var ortime = $('#iddeltime').val();//обязательно проверять формат даты, используя шаблон (или оставить только ввод через "календарик")

  var minTime ='07:00';//минимальное разрешенное время доставки (заполняется в алгоритме)

  var maxTime ='21:00';//максимальное разрешенное время доставки (заполняется в алгоритме)

  var specialOrdate = new Date(2017, 0, 8, 0, 0, 0, 0);//форматируем Дату доставки
  var specialOrdate = Date.parse(specialOrdate);
  var nowValue = Date.parse(currentDate);

  var header = "";

  var errormsg ="";//текст ошибки

  var advicemsg = "";//текст предупреждения

  var cw = document.getElementById('idcw').value;

  var cwi = document.getElementById('idcwi').value;

  var cwf = document.getElementById('idcwf').value;

  var sumOfBottles = cw + cwi + cwf;//суммарное введенное количество по трем выдам воды

  var nineteenThirtyFive = new Date();
  nineteenThirtyFive.setHours(19,45,0,0);//19.45 прекращаем прием
  var fivteenFourtyFive = new Date();
  fivteenFourtyFive.setHours(15,45,0,0);//15.45 прекращаем прием 

  var nowTime = now.getTime();
  var checkEvening = nineteenThirtyFive.getTime();
  var checkDay = fivteenFourtyFive.getTime();
    var xday = new Date("07/02/2018");

  console.log("Date of delivery = " +ordate+" nowValue = " +nowValue+" Ordate Value" + ordateValue+" ID = "+idInput+" Next Day = "+nextDayValue);

  /*--------------------------------*/
  var x = 0;//Проверка Выходной день

  var xx = 0;//Проверка Закрытый день
  
  var y = 0;//Проверка дежурный день

  var z = 0;

  for(var i = 0; i < holidate.length; i++ ){
    if(holidate[i] == ordateValue){
      var x = 1;
    }
  }
  for(var i = 0; i < closedate.length; i++ ){
    if(closedate[i] == ordateValue){
      var xx = 1;
    }
  }
  for(var i = 0; i < dutydate.length; i++ ){
    if(dutydate[i] == ordateValue){
      var y = 1;
    }
  }
  for(var i = 0; i < holidate.length; i++ ){
    if(holidate[i] >= nowValue&& holidate[i]<(nowValue+86400000)){
      var z = 1;
    }
  }
  console.log("Z =  "+z);
  /*------------Переключение рабочего и дежурного графиков--------------------*/
  if(orday == 6 || y==1){
    createTimeList("fromlist",dutyFromList);
    createTimeList("tolist",dutyToList);
    fromArr = dutyFromList;
    toArr = dutyToList;
      $(".sat-order").hide();
      $(".sat-new").hide();
  }
  else if (xday < ordate) {
      createTimeList("fromlist",usualFromListNew);
      createTimeList("tolist",usualToListNew);
      fromArr = usualFromListNew;
      toArr = usualToListNew;
      $(".sat-new").show();
      $(".sat-order").hide();
  } else {
      createTimeList("fromlist",usualFromList);
      createTimeList("tolist",usualToList);
      fromArr = usualFromList;
      toArr = usualToList;
      $(".sat-order").show();
      $(".sat-new").hide();

  }
  /*-------------Проверка поля даты-------------------------------------------*/
  
  /*	
    header = "Ошибка";
    errormsg = "Уважаемый клиент, сегодня вирусная атака парализовала работу нашей компании. На данный момент приём онлайн заказов приостановлен. Просим прощения за временные неудобства.";
    errorMessage(header,errormsg);
	return $("#alert").modal();;
  */

  if(text ==""){
    header = headerArr[0];
    errormsg = errormsgArr[2];
    errorMessage(header,errormsg);
  }
  else if(ordateValue<nowValue){
    header = headerArr[0];
    errormsg = errormsgArr[3];
    errorMessage(header,errormsg);
  }
  else if(ordateValue == nowValue){
    header = headerArr[0];
    errormsg = errormsgArr[7];
    errorMessage(header,errormsg);
  }
  else if(orday == 0 && ordateValue != specialOrdate){ 
    header = headerArr[0];
    errormsg = errormsgArr[4];
    errorMessage(header,errormsg);
  }
  else if(x == 1){
    header = headerArr[0];
    errormsg = errormsgArr[5];
    errorMessage(header,errormsg);
  }
  else if(xx == 1){
    header = headerArr[0];
    errormsg = errormsgArr[7];
    errorMessage(header,errormsg);
  }
  else if(document.getElementById('iddeltime').value ==""&&idInput == "to-second-page"){
    header = headerArr[0];
    errormsg = errormsgArr[6];
    errorMessage(header,errormsg);
  }
  else if(ordateValue==nowValue&&(idInput == "iddeltime"||idInput == "to-second-page")){
    header = headerArr[0];
    errormsg = errormsgArr[7];
    errorMessage(header,errormsg);
  }
  else if(z==1&&ordateValue==nextDayValue&&(idInput == "iddeltime"||idInput == "to-second-page")){
    header = headerArr[0];
    errormsg = errormsgArr[8];
    errorMessage(header,errormsg);
  }
  else if(currentDay==0&&ordateValue==nextDayValue&&nowTime>=checkDay&&(idInput == "iddeltime"||idInput == "to-second-page")){
    header = headerArr[0];
    errormsg = errormsgArr[8];
    errorMessage(header,errormsg);
  }
  else if(y==1&&ordateValue==nextDayValue&&nowTime>=checkDay&&(idInput == "iddeltime"||idInput == "to-second-page")){
    header = headerArr[0];
    errormsg = errormsgArr[8];
    errorMessage(header,errormsg);
  }
  else if(ordateValue==nextDayValue&&nowTime>=checkEvening&&(idInput == "iddeltime"||idInput == "to-second-page")){
    header = headerArr[0];
    errormsg = errormsgArr[8];
    errorMessage(header,errormsg);
  }
  /*else if(sumOfBottles==0){
    header = headerArr[0];
    errormsg = errormsgArr[10]; 
    errorMessage(header,errormsg);
  }*/
  else if(sumOfBottles>0&&sumOfBottles<min&&idInput == "to-second-page"){
    header = headerArr[1];
    advicemsg = advicemsgArr[0];
    attentionMessage(header,advicemsg);
  }

  if(header==headerArr[0]){
    return $("#alert").modal();
  }
  else if( header == headerArr[1] && idInput == "iddeltime"){
    return $("#alert").modal();
  }
  else if(header == headerArr[1] && idInput == "to-second-page"){
    return $("#alert").modal();
  }
  else if(idInput == "iddeltime"){
    $("#time-list-second").modal();
  }
  else if(idInput == "to-second-page"){
    leafThrough(1,2);
  }
  
  /*------------Функция реагируем на предпреждение---------------*/
  
  
  
}

/*-----------------------------------------------------*/

$("#to-second-page").click(function() {
	
	ga('send', 'event', 'mobile', 'click', 'order1');
	
  firstPageCheck("to-second-page");
});

$("#iddeltime").click(function() {
  firstPageCheck("iddeltime");
});

function secondToThird(){
  if($("#cityInput").val()==""||$("#streetInput").val()==""||$("#houseInput").val()==""||$("#contactInput").val()==""||$("#phoneInput").val()==""){
    header = headerArr[0];
    errormsg = errormsgArr[9];
    errorMessage(header,errormsg);
    $("#alert").modal();
  }
  else{
    leafThrough(2,3)
    if($(".prodrow").length>0){
        
        fakeTable();
  
    }  
  }
}

$(".first-arrow").click(function() {
  if($(".active-page").hasClass('page2')){
    leafThrough(2,1,"back");  
  }
  else if($(".active-page").hasClass('page3')){
    leafThrough(3,2,"back");
    setTimeout (function(){leafThrough(2,1,"back");}, 300);
    
  }
  else if($(".active-page").hasClass('page4')){
    leafThrough(4,3,"back");
    setTimeout (function(){leafThrough(3,2,"back");}, 300);
    setTimeout (function(){leafThrough(2,1,"back");}, 300);
    
    
  }
  
});

$(".second-arrow").click(function() {
  if($(".active-page").hasClass('page1')){
    firstPageCheck("to-second-page");  
  }
  else if($(".active-page").hasClass('page3')){
    leafThrough(3,2,"back");
  }
  else if($(".active-page").hasClass('page4')){
    leafThrough(4,3,"back");
    setTimeout (function(){leafThrough(3,2,"back");}, 300);
     
  }
  
});

$(".third-arrow").click(function() {
  if($(".active-page").hasClass('page1')){
    firstPageCheck("to-second-page");
      if($(".active-page").hasClass('page2')){
        setTimeout (function(){secondToThird();}, 300);
    }  
  }
  else if($(".active-page").hasClass('page2')){
    secondToThird();
  }
  else if($(".active-page").hasClass('page4')){
    leafThrough(4,3,"back");
    
  }
  
});

$(".fourth-arrow").click(function() {
  if($(".active-page").hasClass('page1')){
    firstPageCheck("to-second-page");
    if($(".active-page").hasClass('page2')){
      secondToThird();
      if($(".active-page").hasClass('page3')){
        setTimeout (function(){leafThrough(3,4);}, 300);
      }
    }  
  }
  else if($(".active-page").hasClass('page2')){
    secondToThird();
      if($(".active-page").hasClass('page3')){
        setTimeout (function(){leafThrough(3,4);}, 300);
      }
  }
  else if($(".active-page").hasClass('page3')){
    leafThrough(3,4); 
  }
  
});




/*First block of check*/
/*second block of check*/

$("#alert").on("shown.bs.modal",function(){
  $(".alert-agree-forward").click(function() {
    $("#alert").modal("hide");
  });
  $(".alert-disagree-forward").click(function() {
    $("#time-list").modal("hide");
    $("#alert").modal("hide");
    leafThrough(1,2);
  });
  
});

$(function() {
  $('input[readonly]').on('focus', function() {
    $(this).trigger('blur');
  });
});
/*--------------------CW input-----------------------------*/

/*--------------------CWF input-----------------------------*/


/*--------------------CWI input-----------------------------*/

/*--------------------Trial-----------------------------*/


/*------------Функция отправки фритрайла---------------*/
$("#trial-form").submit(function(e){ //устанавливаем событие отправки для формы с id=form
  e.preventDefault();
    var res = $("#trialNum").val();
    res = res.substr(1, 1);
    if (res == '0') {

      var form_data = $(this).serialize(); //собераем все данные из формы
      $.ajax({
        type: "POST", //Метод отправки
        url: "freetrial.php", //путь до php фаила отправителя
        data: form_data,
        success: function(){
          alert(errormsgArr[11]);
          location.reload();
        },
        error: function(jqXhr, status, error){
          alert(status);
          alert(error);
        }

      });
    } else {
        $("#trialNum").css("background-color", 'red')
            .animate({opacity: 0.1}, 1500)
            .animate({opacity: 1}, 1500, "linear", function() {
                $(this).css("background-color", 'white');
            });

    }
});

 
$("#online-order").submit(function(e){ //устанавливаем событие отправки для формы с id=form

	ga('send', 'event', 'mobile', 'click', 'submit');

	e.preventDefault();
    var res = $("#phonetInput").val();
    res = res.substr(1, 1);
    if (res == '0') {
		
      header = headerArr[1];
      errormsg = errormsgArr[12];
      errorMessage(header,errormsg);
      $("#alert").modal();
	  
        var orcomment = $("#orcomment").val();
          $.cookie('orcomment', orcomment, {
            expires: 3650
          });
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
          type: "POST", //Метод отправки
          url: "onlineorder.php", //путь до php фаила отправителя
          data: form_data,
          success: function(){
            // alert(errormsgArr[11]);
		
			  header = headerArr[1];
			  errormsg = errormsgArr[11];
			  errorMessage(header,errormsg);
			  $("#alert").modal();			  
			 
			setTimeout (function(){ location.reload();}, 1000);
			  
           
          }
        });
    } else {
        $(".second-arrow").click();
        $("#phonetInput").css("background-color", 'red')
            .animate({opacity: 0.1}, 1500)
            .animate({opacity: 1}, 1500, "linear", function() {
                $(this).css("background-color", 'white');
            });

    }
});
$("#order-alert-agree").click(function(e) {
  e.preventDefault();
  $("#orcomment").val("");
  var form_data = $("#online-order").serialize(); //собераем все данные из формы
    $.ajax({
      type: "POST", //Метод отправки
      url: "onlineorder.php", //путь до php фаила отправителя
      data: form_data,
      success: function(){
        alert(errormsgArr[11]);
        location.reload();
      }
    });
});
$("#order-alert-disagree").click(function(e) {
  e.preventDefault();
  var form_data = $("#online-order").serialize(); //собераем все данные из формы
    $.ajax({
      type: "POST", //Метод отправки
      url: "onlineorder.php", //путь до php фаила отправителя
      data: form_data,
      success: function(){
        alert(errormsgArr[11]);
        location.reload();
      }
    });
});


/*--------------------Forward button-----------------------------*/

/*--------------------Helper modals-----------------------------*/
$(".info-modal").click(function() {
  var title = $(this).attr("data-info-title");
  var body = $(this).attr("data-info");
  var header = '<div class="close" data-dismiss="modal">&times;</div>'
  header +='<h4 class="info-header">';
  header += title;
  header+="</h4>";
  $("#info-modal .modal-header").html(header);
  $("#info-modal .modal-body").html(body);
  $("#info-modal").modal();
});

/*-------------------SECOND ORDER PAGE------------------------*/




/*-------------------THIRD ORDER PAGE------------------------*/

var priceStCheck;
$(function() {
  $( "#prod-accordion" ).accordion({
    active: false,
    collapsible: true,
    heightStyle: "content",
    header:"h3"
  });
});

$(".subitem").click(function() {
  var imgSrc = $(this).attr("data-img");

  var prodName = $(this).attr("data-pname");
  
  var prodPrice = $(this).attr("data-price");
  
  var x = $(this).attr("data-code");
  
  console.log("x = "+x);
  
  $("#prod-id").removeClass().addClass(x);
  $("#prod-title").html(prodName);
  $("#prod-quantity").attr('data-header', prodName);
  $(".prod-img").html('<img src="'+imgSrc+'" alt="">');
  $("#prod-price").html(prodPrice);
  $("#prod-list").modal("hide");
  $("#prod-modal").modal();
});

function fakeTable(){

  $(".prodhead-name").width($("#tbody .prodhead:nth-child(1)").width());
  $(".prodhead-qty").width($("#tbody .prodhead:nth-child(2)").width());
  $(".prodhead-price").width($("#tbody .prodhead:nth-child(3)").width());
  $(".prodhead-sum").width($("#tbody .prodhead:nth-child(4)").width());
}

$("#prod-modal-cancel").click(function() {
  $("#prod-modal").modal("hide");
  $("#prod-list").modal("show");
});
$(document).on("click","#prod-modal-accept",function(){
  var prodName = $("#prod-title").text();
  var prodPrice = $("#prod-price").text();
  var prodClass = $("#prod-id").attr("class");
    
  var prodQuantity = $("#prod-quantity").val();
  
    var sum = parseInt(parseInt(prodQuantity) * parseFloat(prodPrice) * 100) / 100;
    var prodClassR = prodClass.replace(/#/gi,'');
    
    
    if ($("tr").is('#'+prodClassR)) {
        // Да, такой элемент существует.
      if(prodQuantity>0){
        $('#'+prodClassR+' .sum').text(sum);
        var orderedQuantity = prodQuantity +" шт.";
        $("#span"+prodClassR).text(orderedQuantity);


        var str = $("#price-st").val();
        var strArr = str.split("|");
        var forTest = priceStCheck;
        var x = $.inArray( forTest , strArr );
        console.log(strArr+" massiv "+forTest+" - massiv CHECK ");
        var newPriceStMassiv = priceStCheck.split("::");
        var newPriceStCheck = newPriceStMassiv.splice(2,1,prodQuantity);
        var newPriceStr =  newPriceStMassiv.join("::");
        console.log(x+" number in massiv "+priceStCheck+" - massiv PriceSTCHECK "+newPriceStMassiv+" massiv with comas "+ newPriceStCheck+" massiv with new number "+ newPriceStr+" - check of price-st, new quantity"+orderedQuantity);
        if(x!==-1){
            strArr.splice(x, 1, newPriceStr);
            var newStr = strArr.join('|');
            $("#price-st").val(newStr);
          
        }
        $('#input'+prodClassR).val(prodQuantity).attr("data-pr-check",newPriceStr);
      }
      else if(prodQuantity==0){
        var str = $("#price-st").val();
        var strArr = str.split("|");
        var forTest = priceStCheck;
        var x = $.inArray( forTest , strArr );
        console.log("idStr = " + priceStCheck + "--------"+str);
          $("#tblprod #"+prodClassR).remove();
          $("#span"+prodClassR).remove();

            
            if(x!==-1){
              strArr.splice(x, 1);
              var newStr = strArr.join('|');
              $("#price-st").val(newStr);
            }
            var priceStCookie = $("#price-st").val();
            $.cookie('price-st', priceStCookie, {
              expires: 3650
            });
            if($("tr.prodrow").length==0){
              $("#tblprod").addClass('inv');
              $(".banner").removeClass('inv');  
            }
            
      }

    } 
    else {
        // Нет, такого элемента у нас нет.
        priceStCheck = prodClass+"="+prodName+"::"+prodPrice+"::"+prodQuantity;
      var tmp = "";
      tmp +='<tr id = "'+ prodClassR + '" class="prodrow">';
      tmp +='<td class="prodbody"><div>' + prodName + "</div></td>";
      tmp +='<td class="prodbody prodbody-input"><input id="input'+prodClassR+'" class="calc-challenge prod-add" data-header=\'' + prodName + '\' data-pr-check=\''+priceStCheck+'\' type="text" value="'+ prodQuantity + '"  readonly/></td>';
      tmp +='<td class="prodbody price">' + prodPrice + "</td>";
      tmp +='<td class="prodbody sum">' + sum + "</td>";
      tmp +='</tr>';
      $("#tblprod #tbody").append(tmp);
      var orderedQuantity = '<span id="span'+prodClassR +'" class="ordered-quantity">'+prodQuantity+ ' шт.</span>';
      $("[data-pname='"+prodName+"'] ").prepend(orderedQuantity);
      var priceSt = $("#price-st").val();

      if(priceSt!==''){
        $("#price-st").val(priceSt+"|"+prodClass+"="+prodName+"::"+prodPrice+"::"+prodQuantity);
      }else{
        $("#price-st").val(prodClass+"="+prodName+"::"+prodPrice+"::"+prodQuantity);
      }
    
      $("#prod-modal").modal("hide");
      $("#prod-list").modal("show");
      $("#tblprod").removeClass('inv');
      fakeTable();
      $(".banner").addClass('inv');
      $("#prod-quantity").val("0");  
  }
  
    $("#prod-modal").modal("hide");
    $("#prod-list").modal("show");
  
  var priceStCookie = $("#price-st").val();
  $.cookie('price-st', priceStCookie, {
    expires: 3650
  });
});
$(document).on( "click",".calc-challenge", function() {
  id = $(this).attr("id");
  priceStCheck = $(this).attr("data-pr-check");
  var title = $(this).attr("data-header");
  var header ='<div class="close" data-dismiss="modal">&times;</div>';
  header+='<h4 class="modal-title calc-title">';
  header+=title;
  header+='</h4>';
  $("#calculator .modal-header").html(header);
  $("#calculator").modal();
  if(id!=="phonetInput"&&id!=="smsInput"&&id!=="phoneInput2"){
    $('#calculator-field').val('');
  }
  else{
   $('#calculator-field').val('(___)___-__-__'); 
  }
  
});





$("#prod-plus").click(function() {
  var x = $("#prod-quantity").val();
  var t = parseInt(x);
  var y = t + 1;
  $("#prod-quantity").val(y);
});
$("#prod-minus").click(function() {
  var x = $("#prod-quantity").val();
  var t = parseInt(x);
  var y = t - 1;
  if (y<0) {
    return;
  };
  $("#prod-quantity").val(y);
});
$("#prod-quantity").click(function() {
  $("#prod-modal").modal("hide");
  $("#calculator").modal();
});


function prodTableHeight(){
  var h = $(window).height();
  var s = 20;
  var p = $(".page3-buttons").height();
  var a = h*0.37;
  var b = $('.page3-title').height();
  var x = h - p - a -s;
  $('#tblprod').css({
   'height':x
  });
}




//----------------------------------------------------------

/*-------------------FOURTH ORDER PAGE------------------------*/

$('#smsCheck').click(function(){
  if($('#smsCheck').prop("checked")) {
    if($.cookie('orconfsms')==""||$.cookie('orconfsms')==undefined){
      $("#smsInput").val($("#phonetInput").val());
      var orconfsms = $("#smsInput").val();
      $.cookie('orconfsms', orconfsms, {
          expires: 3650
        });
    }
    else{
      $("#smsInput").val($.cookie('orconfsms'));
    }
    $("#smsInput").show();
      $.cookie('smsCheck', "1", {
            expires: 3650
          });
  } else {
    $("#smsInput").hide();
    $("#smsInput").val("");
    $.cookie('smsCheck', "0", {
      expires: 3650
    });
  }

});
$('#mailCheck').click(function(){

  if($('#mailCheck').prop("checked")) {
    $("#emailInput").show();
    $.cookie('mailCheck', "1", {
      expires: 3650
    });
  } else {
    $("#emailInput").hide();
    $.cookie('mailCheck', "0", {
      expires: 3650
    });
  }

});
$('#phoneCheck').click(function(){
  if($('#phoneCheck').prop("checked")) {
    if($.cookie('orconftel')==""||$.cookie('orconftel')==undefined){
      $("#phoneInput2").val($("#phonetInput").val());
      var orconftel = $("#phoneInput2").val();
      $.cookie('orconftel', orconftel, {
            expires: 3650
          });
    }
    else{
      $("#phoneInput2").val($.cookie('orconftel'));
    }
    $("#phoneInput2").show();
    $.cookie('phoneCheck', "1", {
      expires: 3650
    });
  } else {
    $("#phoneInput2").hide();
     $("#phoneInput2").val("");
      $.cookie('phoneCheck', "0", {
            expires: 3650
          });
  }

});
 
/*------------------------------------------------------------------*/


$(".window").on("scrollstop", $.debounce( 500, function(){
    var windowScroll = $(this).scrollTop();
  var height = $(".time-list-item").height() + 10;
  var halfheight = height/2;
  var difference = windowScroll%height;
  var y = height - difference;
  var destinationTop = windowScroll-difference;
  var destinationBottom = windowScroll+y;
  var z = Math.round(windowScroll / 50);
  if(difference<halfheight){
    $(this).animate({
      scrollTop:destinationTop
    },100);
    
    return; 
  }
  else if(difference>=halfheight){
    $(this).animate({
      scrollTop:destinationBottom
    },100);
    
    return;
  }
}));








    

$('#street-list').on('shown.bs.modal', function () {
  $('#input-text').focus();
});

$('#phone-number').on('shown.bs.modal', function () {
  
  //$('#number-field').focus();
  setTimeout(function() {
    $('#number-field').focus();
  }, 100);
});


 

//----------------------------------------------------------



var FlagNewNum = false;
$('.calc-figure').click(function(){
  var num = $(this).val();
  if(FlagNewNum){
    $('#calculator-field').val(num);
    FlagNewNum = false;
  }
  else{
    if(id!=="phonetInput"&&id!=="smsInput"&&id!=="phoneInput2"){
      if($('#calculator-field').val()=='0'){
        $('#calculator-field').val(num);
      }
      else{
        var t = $('#calculator-field').val() + num ;
        $('#calculator-field').val(t);
      }
    }
    else{
      var mask = $('#calculator-field').val();
      var newStr =  mask.replace("_",num);
      $('#calculator-field').val(newStr);
    }
      
  }
});
var calcvalue;

$(document).on("click",".calc-return",function(){
//$('.calc-return').click(function(){
  calcvalue = $('#calculator-field').val();
  console.log("Now id = " + id+" calculator value = " + calcvalue);
  var k = $('#calculator-field').val();
  $('#'+id).val(calcvalue); 
  var cwCookie = $("#idcw").val();
  $.cookie('orcw', cwCookie, {
        expires: 3650
      });
  var cwfCookie = $("#idcwf").val();
  $.cookie('orcwf', cwfCookie, {
        expires: 3650
      });
  var cwiCookie = $("#idcwi").val();
  $.cookie('orcwi', cwiCookie, {
        expires: 3650
      });
  var clientCodeCookie = $("#codeInput").val();
  $.cookie('orcode', clientCodeCookie, {
        expires: 3650
      });
   var ortel = $("#phonetInput").val();
  $.cookie('ortel', ortel, {
        expires: 3650
      });
  var orconftel = $("#phoneInput2").val();
  $.cookie('orconftel', orconftel, {
        expires: 3650
      });
  var orconfsms = $("#smsInput").val();
  $.cookie('orconfsms', orconfsms, {
        expires: 3650
      });


  $('#calculator-field').val("");
  if (id == 'prod-quantity'){
    $("#calculator").modal("hide");
    $("#prod-modal").modal("show");  
  }  
});

$('.calc-clear').click(function(){
  var str = $('#calculator-field').val();
 
  
  if(id!=="phonetInput"&&id!=="smsInput"&&id!=="phoneInput2"){
    var lastSymbol = str.length-1;
    var newStr = str.substring(0,lastSymbol);
    $('#calculator-field').val(newStr); 
    //FlagNewNum = true;
  }
  else{
    var newStr =str.replace(/\d(?!\d|\-\d|\)\d)/,"_");
    $('#calculator-field').val(newStr); 
  }
  
});
$('.calc-delete').click(function(event) {
  
});

$('.input-return').click(function(){
  var k = $('#input-text').val();
  $('#'+id2).val(k);

  var orcity = $("#cityInput").val();
  $.cookie('orcity', orcity, {
        expires: 3650
      });
  var orstreet = $("#streetInput").val();
  $.cookie('orstreet', orstreet, {
        expires: 3650
      });
  var orhouse = $("#houseInput").val();
  $.cookie('orhouse', orhouse, {
        expires: 3650
      });
  var oroffice = $("#officeInput").val();
  $.cookie('oroffice', oroffice, {
        expires: 3650
      });
  var orname = $("#contactInput").val();
  $.cookie('orname', orname, {
        expires: 3650
      });
  
  var orconfmail = $("#emailInput").val();
  $.cookie('orconfemail', orconfmail, {
        expires: 3650
      });
  
  



  $('#input-text').val("");
});



$('.phone-challenge').click(function(){
  phoneFieldId = $(this).attr('id');
});
$('.numeral').click(function(){
  var num = $(this).val();
  var t = $('#number-field').val() + num;
  $('#number-field').val(t);
});
$('.number-clear').click(function(){
  var str = $('#number-field').val();
  str.substring(0, str.length - 1);
  $('#number-field').val(str);

});
$('.number-return').click(function(){
  var k = $('#number-field').val();
  $('#'+phoneFieldId).val(k);

  var ortel = $("#phonetInput").val();
  $.cookie('ortel', ortel, {
        expires: 3650
      });
  var orconftel = $("#phoneInput2").val();
  $.cookie('orconftel', orconftel, {
        expires: 3650
      });
  var orconfsms = $("#smsInput").val();
  $.cookie('orconfsms', orconfsms, {
        expires: 3650
      });
  

  $('#number-field').val("");
});


$("#calculator").on("hidden.bs.modal",function(){
  console.log("calculator is off and id = "+id+"priceStCheck" +priceStCheck);
  var idStr = id.replace(/input/gi,"");
  var idSpan = id.replace(/input/gi,"span");
  var str = $("#price-st").val();
  var strArr = str.split("|");
  var forTest = priceStCheck;
  var x = $.inArray( forTest , strArr );
  console.log("idStr = " + idStr);
  if((calcvalue==""||calcvalue==0)&&id!=="idcw"&&id!=="idcwf"&&id!=="idcwi"){
    $("#tblprod #"+idStr).remove();
    $("#"+idSpan).remove();

      
      if(x!==-1){
        strArr.splice(x, 1);
        var newStr = strArr.join('|');
        $("#price-st").val(newStr);
      }
      var priceStCookie = $("#price-st").val();
      $.cookie('price-st', priceStCookie, {
        expires: 3650
      });
      console.log("x = " +x);
  }
  else{
    var price = $("tr#"+idStr+" .price").text();
    var sum = calcvalue*price;
    sum = sum.toFixed(2);
    $("tr#"+idStr+" .sum").text(sum);
    var orderedQuantity = calcvalue+" шт.";
    $("span#"+idSpan).text(orderedQuantity);
    
    if(priceStCheck!==undefined){

      var newPriceStMassiv = priceStCheck.split("::");
      var newPriceStCheck = newPriceStMassiv.splice(2,1,calcvalue);
      var newPriceStr =  newPriceStMassiv.join("::");
      console.log(x+" number in massiv "+priceStCheck+" - massiv PriceSTCHECK "+newPriceStMassiv+" massiv with comas "+ newPriceStCheck+" massiv with new number "+ newPriceStr+" - check of price-st, new quantity"+calcvalue);
      $("tr#"+idStr+" input").attr("data-pr-check", newPriceStr);
      if(x!==-1){
          strArr.splice(x, 1, newPriceStr);
          var newStr = strArr.join('|');
          $("#price-st").val(newStr);
          
        }
    
    }
    
  }
  var rowsInTable = $(".prodrow").length;
  console.log("rowsInTable = "+ rowsInTable);
  if(rowsInTable==0){
    $("#tblprod").addClass('inv');
    $(".banner").removeClass('inv');
    $("#price-st").val("");
  }
  
});

function leafCentering(){
  var h = $(window).height();
  var w = $(window).width();
  var contentWidth = $(".content-block").width();
  var leftMenuWidth = $(".landscape-nav").width();
  var rightPaddingCB = $(".content-block").css("padding-right");
  var x = contentWidth*0.95;
  if(h/w>1){

    var rightPositionV = (w - contentWidth)/2;
    $(".active-page").css({"right":rightPositionV,"width":contentWidth});
    console.log("Height of the page is "+h+" width of the page is " + w+" content width is " +contentWidth+" so right must be "+rightPositionV);       
  }
  else if(h/w<1){
    var rightPositionH = (w - contentWidth)/2 - leftMenuWidth/2;//(w - contentWidth  - leftMenuWidth + rightPaddingCB + leftPaddingCB )/2;
    $(".active-page").css({"right":rightPositionH,"width":contentWidth});
    console.log("Height of the page is "+h+" width of the page is " + w+"Left menu width is "+ leftMenuWidth+" content width is " +contentWidth+" so right must be "+rightPositionH+"----"+ rightPaddingCB);        
  }
  $(".order-title").width(contentWidth);
  $("#progress-string").width(x);
    
  
}

/*------------------Переход со страницы на страницу в форме------------*/
function leafThrough(pageFrom,pageTo,direction){
  var h = $(window).height();
  var w = $(window).width();
  var distance= 2*w;
  var contentWidth = $(".content-block").width();
  var leftMenuWidth = $(".landscape-nav").width();
  if(h/w>1){leftMenuWidth = 0};
  var rightPosition = (w - contentWidth)/2 - leftMenuWidth/2 ;  
  
  if(direction=='back'){x="-";}
  else{x="";}
  $(".page"+pageFrom).animate({"right": x+"200%"},300).hide(300).removeClass('active-page');
  $(".page"+pageTo).show().animate({"right":rightPosition},300).addClass('active-page');
  $(".arrow"+pageFrom).removeClass('arrow'+pageFrom).addClass('arrow'+pageTo);

  console.log("width of content is "+ contentWidth +" width of left menu now is "+leftMenuWidth+" position from right for page is "+ rightPosition);
  leafCentering();
}

//$(".forward1").click(function(){leafThrough(1,2)});
$(".forward2").click(function(){
	
	ga('send', 'event', 'mobile', 'click', 'order2');
	
  secondToThird();
  
});
$(".forward3").click(function(){
	
	ga('send', 'event', 'mobile', 'click', 'order3');
	
	leafThrough(3,4);
});

$(".back1").click(function(){leafThrough(2,1,"back");});
$(".back2").click(function(){leafThrough(3,2,"back");});
$(".back3").click(function(){leafThrough(4,3,"back");});

/*---------------------------------------------------------------------*/





//----------------------------------------------------------

$('.input-challenge').click(function(){
  id2 = $(this).attr("id");
  var x = $(this).attr("data-header");
  var header = '<h4 class="sl-header-text">';
  header+= x;
  header+='</h4>'
  $(".street-list-header").html(header);
  if(id2 == 'cityInput'){
    $('#input-text').removeClass('street-input').addClass('city-input').autocomplete({disabled: false});
    $('.city-input').autocomplete({
      source: region,
      minLength: 2
    });
    popupWidth();
    
  }
  else if(id2 == 'streetInput'){
    $('#input-text').removeClass('city-input').addClass('street-input').autocomplete({disabled: false});
    $( ".street-input" ).autocomplete({  
      source: street,
      minLength: 2
    });
    
     popupWidth();
  }
  else{
    $('#input-text').removeClass('city-input street-input');
    $('#input-text').autocomplete({
      disabled: true
    });
  }
});



function prodTableLoad(){
  if($("#price-st").val()!==""){
    var prodList = $("#price-st").val();
    var prodArr = prodList.split("|");
    for(var i = 0; i < prodArr.length; i++){
      var prodOptionsArr = prodArr[i].split("::");
      var prodPrice = prodOptionsArr[1];
      var prodQuantity = prodOptionsArr[2];
      var prodTitle = prodOptionsArr[0].split("=");
      var prodClass = prodTitle[0];
      var prodName = prodTitle[1];
      var sum = parseInt(parseInt(prodQuantity) * parseFloat(prodPrice) * 100) / 100;
      var prodClassR = prodClass.replace(/#/gi,'');
      priceStCheck = prodClass+"="+prodName+"::"+prodPrice+"::"+prodQuantity;
      if($("[data-code='"+prodClass+"'] ")){
        prodPrice = $("[data-code='"+prodClass+"'] ").attr("data-price");
          var tmp = "";
        tmp +='<tr id = "'+ prodClassR + '" class="prodrow">';
        tmp +='<td class="prodbody"><div>' + prodName + "</div></td>";
        tmp +='<td class="prodbody prodbody-input"><input id="input'+prodClassR+'" class="calc-challenge prod-add" data-header=\'' + prodName + '\' data-pr-check=\''+priceStCheck+'\' type="text" value="'+ prodQuantity + '"  readonly/></td>';
        tmp +='<td class="prodbody price">' + prodPrice + "</td>";
        tmp +='<td class="prodbody sum">' + sum + "</td>";
        tmp +='</tr>';
        $("#tblprod tbody").append(tmp);
        var orderedQuantity = '<span id="span'+prodClassR +'" class="ordered-quantity">'+prodQuantity+ ' шт.</span>';
        $("[data-pname='"+prodName+"'] ").prepend(orderedQuantity);
        var priceSt = $("#price-st").val();
        $("#tblprod").removeClass('inv');
        $(".banner").addClass('inv');        
      }
    }
  }

}

function cookieLoad(){
   var today = new Date();
   var currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
   var todayValue = Date.parse(currentDate);
   var orderedDate = $.cookie('dateFromCookie');
      if(orderedDate!==undefined){
       var orderedDateUT = new Date(orderedDate.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
        var orderedDateString = Date.parse(orderedDateUT);
      
        if(orderedDateString>=todayValue){
          $("#iddeldate").val($.cookie('dateFromCookie'));
        }
        else if(orderedDateString<todayValue){
          $("#iddeldate").val(""); 
        } 
      }
      console.log($.cookie('ortime'));
    if($.cookie('ortime')!= undefined){
      var x = $.cookie('ortime');
      var y = x.split("-");
      var a = y[0].split(":");
      var b = y[1].split(":");
      var q = (b[1] - a[1])/30;
      var difference = b[0]-a[0]+q;
        if(difference>=3){
          $("#iddeltime").val($.cookie('ortime'));
        }
        else if(difference<3){
          $("#iddeltime").val("");
        }
    }  
    
      
      $("#idcw").val($.cookie('orcw'));
      $("#idcwf").val($.cookie('orcwf'));
      $("#idcwi").val($.cookie('orcwi'));
      $("#codeInput").val($.cookie('orcode'));
      
      if($.cookie('orcity')==undefined||$.cookie('orcity')==null||$.cookie('orcity')==""){
        $("#cityInput").val(Kyiv);
      }else{
        $("#cityInput").val($.cookie('orcity'));  
      }
      $("#streetInput").val($.cookie('orstreet'));
      $("#houseInput").val($.cookie('orhouse'));
      $("#officeInput").val($.cookie('oroffice'));
      $("#contactInput").val($.cookie('orname'));
      $("#phonetInput").val($.cookie('ortel'));
      $("#price-st").val($.cookie('price-st'));
      // $("#orcomment").val($.cookie('orcomment'));
}

function checkBoxLoad(){
  if($.cookie('smsCheck')=="1"){
    $("#smsCheck").attr('checked',true);
    $("#smsInput").show();
    $("#smsInput").val($.cookie('orconfsms'));  
  }
  if($.cookie('mailCheck')=="1"){
    $("#mailCheck").attr('checked',true);
    $("#emailInput").show(); 
    $("#emailInput").val($.cookie('orconfemail'));
  }    
  if($.cookie('phoneCheck')=="1"){
    $("#phoneCheck").attr('checked',true);
    $("#phoneInput2").show();
    $("#phoneInput2").val($.cookie('orconftel')); 
  }
 
}


/*-----------------------------------------------------------------------------*/


$(window).load(function() {
      prodTableHeight();
      cookieLoad();
      prodTableLoad();
      checkBoxLoad();
      if($(".prodrow").length>0){
        
        fakeTable();
  
      }  
  });
$(window).resize(function() {
      if($(".in").length==0){
        prodTableHeight();
          leafCentering();
      }
      
  });
$('.modal').on('hidden.bs.modal', function () {
  leafCentering();
});




/*-----------------------------------------------------------------------------------*/






});