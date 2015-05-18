var request = new XMLHttpRequest();
request.open("GET", "data/sandwiches.json", false);
request.send(null);

var jsonString = JSON.parse(request.responseText);

$(document).ready(function() {

	// $.each(jsonString, function(i) {
	//     var $li = $('<div class="mix card" data-myorder="'+ i +'"></div>').appendTo('.master');
	//     $('<h2>' + this.name + '</h2>').appendTo($li);
	//     $('<h3>' + this.origin + '</h3>').appendTo($li);
	//      var replaceUrl = $('<p class="replace">http://' + this.image + '</p>');
	//      var imgPath = $(replaceUrl).text()
	//     .replace(/.+?(?:120px-)/g,"dist/img/")
	//     .replace(/(\.)/g,"-320.");
	//  $('<img src="' + imgPath + '">').appendTo('.card .wrap');
	// });

	$('.replace').each(function(){
		var imgPath = $(this).text()
		.replace(/.+?(?:120px-)/g,"dist/img/")
		.replace(/(\.)/g,"-320.");
		$(this).parent().append('<img src="'+imgPath+'"/>');
	});

	// $(function() {
	//     $(window).scroll(function() {
	//         var vertAlign = ($(window).scrollTop());
	//         if (vertAlign <= 80){
	//         	$("header").css('padding', 80 - vertAlign);
	//     	}
	//     });
	// });

	$('.check').on('click',function(){
		$(this).parent().toggleClass('checked');
	});

	$(function(){
		$('#container').mixItUp();
	});

});

