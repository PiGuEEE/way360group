$(document).ready(function() {  
	$('.word').hover(function(){
		$(this).addClass('found');
	});

	var movementStrength = 20;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();

	$(".firstSection").mousemove(function(e){
	    var pageX = e.pageX - ($(window).width() / 600);
	    var pageY = e.pageY - ($(window).height() / 600);
	    var newvalueX = (width * pageX) / 4;
	    var newvalueY = (height * pageY) / 4;
     	var newvalueX2 = (width * pageX) / 2;
	    var newvalueY2 = (height * pageY) / 2;
	    //$('.logoS').css("background-position", "-" + newvalueX +"% -" + newvalueY +"%");
	    //$(this).css("transform", "translate("+newvalueX+"px , "+newvalueY+"px)");
	    $('.titlesBox').css("transform", "translate("+newvalueX2+"px , "+newvalueY2+"px)");
	    $('.logoShadow1').css("transform", "translate(-"+newvalueX2+"px , -"+newvalueY2+"px)");
	    $('.logoShadow2').css("transform", "translate("+newvalueX2+"px , "+newvalueY2+"px)");
	    $('.logo').css("transform", "translate(-"+newvalueX2+"px , -"+newvalueY2+"px)");
	    //$(this).css("transform", newvalueX +"% " + newvalueY +"%");

	});

});