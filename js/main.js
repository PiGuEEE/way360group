$(document).ready(function() {  
	$('.word').hover(function(){
		$(this).addClass('found');
	});

	$('.word2').hover(function(){
		$(this).addClass('found2');
	});

	$('.word3').hover(function(){
		$(this).addClass('found3');
	});

	var movementStrength = 20;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();

	$(".firstSection").mousemove(function(e){
	    var pageX = e.pageX - ($(window).width() / 600);
	    var pageY = e.pageY - ($(window).height() / 600);
	    var newvalueX = (width * pageX) / 2;
	    var newvalueY = (height * pageY) / 2;
     	var newvalueX2 = (width * pageX) / 4;
	    var newvalueY2 = (height * pageY) / 4;
	    $('.titlesBox').css("transform", "translate("+newvalueX2+"px , "+newvalueY2+"px)");
	    $('.logo').css("transform", "translate(-"+newvalueX2+"px , -"+newvalueY2+"px)");
	    $('.menu').css("transform", "translate(-"+newvalueX2+"px , -"+newvalueY2+"px)");
	});

	$(".wordsGame").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 600);
	    var pageY = e.pageY - ($(window).height() / 500);
		var newvalueX2 = (width * pageX);
	    var newvalueY2 = (height * pageY) / 4;

		$('.wordsContainerBg').css("transform", "translate(-"+newvalueX2+"px , -"+newvalueY2+"px)");
	});

	$('.headerBtn').click(function(f){
		f.preventDefault();
		$('.headerBtn').toggleClass('menuActive');
		$('.headerOverlay').toggleClass('active');
	})

	$('.playBtn').click(function(e){

		e.preventDefault();
		video = $('.video');
		//weAreTitle = $('.weAre');
		weAreTitle = $('.weAreBox');
		//$('.weAre').toggleClass('blurred');
		//$('.weAreBox').toggleClass('transparent');
		$('.header').toggleClass('lighterHeader');
		$('.firstSection').toggleClass('darkFirstSection');
		$('.weAreHere').toggleClass('transparent2');
		$('.playBtn').toggleClass('playBtnShadow');
		if ($('.weAreBox').hasClass('blurred')) {
			console.log('tem');
			$('.weAreBox').removeClass('blurred');
		} else{
			console.log('nao tem');
			$('.weAreBox').addClass('blurred');
		};
		//$('.weAreHere').fadeToggle(500);
		if (video.hasClass('videoScaled')) {
			video.removeClass('videoScaled');
		} else{
			$('.video').addClass('videoScaled');
		};
		 
	});

	$(window).scroll(function(){

		var height1 = $('.firstSection').height();
		var height2 = $('.wordsGame').height() + 120;
		var height3 = height2 + height1;

		console.log(height3);

		if ($(window).scrollTop() >= height1) {
			console.log('OLA PEPA');
			$(".headerBtn .line").css("background-color", "#FFF" );
		} else {
			$(".headerBtn .line").css("background-color", "#111" );	
		}
		if ($(window).scrollTop() >= height3) {
			console.log('entrei');
			$(".headerBtn .line").css("background-color", "#111" );
		};

	});




});