function parseResponse(response)
{
	if (response.refresh) {
		window.location.reload(true);
	}
	if (response.redirect) {
		window.location.href = response.redirect;
	}
	if(response.replaces instanceof Array)
	{
		for(var i = 0, ilen = response.replaces.length; i < ilen; i++)
		{
			$(response.replaces[i].what).replaceWith(response.replaces[i].data);
		}
	}
	if(response.append instanceof Array)
	{
		for(i = 0, ilen = response.append.length; i < ilen; i++)
		{
			$(response.append[i].what).append(response.append[i].data);
		}
	}
	if(response.js)
	{
		$("body").append(response.js);
	}
	jsFunctionsAssign();
}
function jsFunctionsAssign()
{
	$('input, textarea').placeholder();
}
$(function(){
	$(document).on('submit', '.ajax-form', function (event) {
		console.log(event);
		// event.preventDefault();
		// var that = this;
		// jQuery.ajax({'cache': false, 'type': 'POST', 'dataType': 'json', 'data':$(that).serialize(), 'success': function (response) {
		// 	parseResponse(response);
		// }, 'error': function (response) {
		// 	alert(response.responseText);
		// }, 'beforeSend': function() {
		//
		// }, 'complete': function() {
		//
		// }, 'url': this.action});
		// return false;
	});
	$(document).on('submit', '.ajax-form-order', function (event) {
		event.preventDefault();
		var that = this;
		jQuery.ajax({'cache': false, 'type': 'POST', 'dataType': 'json', 'data':$(that).serialize(), 'success': function (response) {
			parseResponse(response);
		}, 'error': function (response) {
			alert(response.responseText);
		}, 'beforeSend': function() {

		}, 'complete': function() {

		}, 'url': this.action});
		return false;
	});
	$(document).on('click', '.submit-form-link', function (event) {
		var that = this;
		if(!$(that).data('confirm') || confirm($(that).data('confirm'))) {
			submitForm(
				that,
				that.href,
				$(that).data('params')
			);
			return false;
		} else {
			return false;
		}
	});
	$(document).on('click', '.ajax-link', function (event) {
		event.preventDefault();
		var that = this;
		jQuery.ajax({'cache': false, 'type': 'POST', 'dataType': 'json', 'data':$(that).data('params'), 'success': function (response) {
			parseResponse(response);
		}, 'error': function (response) {
			alert(response.responseText);
		}, 'beforeSend': function() {

		}, 'complete': function() {

		}, 'url': that.href});
		return false;
	});

	$('.js-popup-trial').click(function(){
		if ($('.popup_trial').hasClass('is-open')) {
			$('.popup_trial').removeClass('is-open');
		} else {
			$('.popup_trial').addClass('is-open');
			$('.overlay').addClass('is-open');
		}
		return false;
	});
	$('.overlay').click(function() {
		$('.popup_trial').removeClass('is-open');
		$('.popup_price').removeClass('is-open');
		$('.popup_feedback').removeClass('is-open');
		$('.popup_excursion').removeClass('is-open');
		$('.popup_big').removeClass('is-open');
	});
	$('.js-popup-excursion').click(function(){
		if ($('.popup_excursion').hasClass('is-open')) {
			$('.popup_excursion').removeClass('is-open');
		} else {
			$('.popup_excursion').addClass('is-open');
			$('.overlay').addClass('is-open');
		}
		return false;
	});
	$('.js-popup-price').click(function(){
		if ($('.popup_price').hasClass('is-open')) {
			$('.popup_price').removeClass('is-open');
		} else {
			$('.popup_price').addClass('is-open');
			$('.overlay').addClass('is-open');
		}
		return false;
	});
	$('.js-popup-feedback').click(function(){
		if ($('.popup_feedback').hasClass('is-open')) {
			$('.popup_feedback').removeClass('is-open');
		} else {
			$('.popup_feedback').addClass('is-open');
			$('.overlay').addClass('is-open');
		}
		return false;
	});
	$('.js-popup-big').click(function(){
		if ($('.popup_big').hasClass('is-open')) {
			$('.popup_big').removeClass('is-open');
		} else {
			$('.popup_big').addClass('is-open');
			$('.overlay').addClass('is-open');
		}
		return false;
	});
	$('.js-popup-online-external').click(function(){
		window.open('/order');
		return false;
	});
});
// yii submit form
function submitForm (element, url, params) {
	var f = $(element).parents('form')[0];
	if (!f) {
		f = document.createElement('form');
		f.style.display = 'none';
		element.parentNode.appendChild(f);
		f.method = 'POST';
	}
	if (typeof url == 'string' && url != '') {
		f.action = url;
	}
	if (element.target != null) {
		f.target = element.target;
	}

	var inputs = [];
	$.each(params, function(name, value) {
		var input = document.createElement("input");
		input.setAttribute("type", "hidden");
		input.setAttribute("name", name);
		input.setAttribute("value", value);
		f.appendChild(input);
		inputs.push(input);
	});

	// remember who triggers the form submission
	// this is used by jquery.yiiactiveform.js
	$(f).data('submitObject', $(element));

	$(f).trigger('submit');

	$.each(inputs, function() {
		f.removeChild(this);
	});
}
