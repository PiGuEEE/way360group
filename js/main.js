$(document).ready(function() {  
	
	
	// FINDING WORDS TRIGGER EFFECT

		$('.word1').hover(function(){
			var allwords = $('.word1').length;
			var founds = $('.found1').length + 1;
			console.log(allwords);
			console.log(founds);

			$(this).addClass('found1');

			if (allwords == founds) {
				$('.found1').addClass('allfound1');
			}

		});

		$('.word2').hover(function(){
			var allwords2 = $('.word2').length;
			var founds2 = $('.found2').length + 1;

			$(this).addClass('found2');

			if (allwords2 == founds2) {
				$('.found2').addClass('allfound2');
			}

		});

		$('.word3').hover(function(){
			var allwords3 = $('.word3').length;
			var founds3 = $('.found3').length + 1;

			$(this).addClass('found3');

			if (allwords3 == founds3) {
				$('.found3').addClass('allfound3');
			}
		});



	// MOUSE MOVE FUNCTIONS - KEEP ALL FUNCTIONS WITHIN ITS SECTION
	// SECTIONS PARALLAX EFFECTS


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



	// MENU OVERLAY BTN

		$('.headerBtn').click(function(f){
			f.preventDefault();
			$('.headerBtn').toggleClass('menuActive');
			$('.headerOverlay').toggleClass('active');
		});

		// adds active class and change lines colours
		var menuOverlay = $('.headerOverlay');
		if (menuOverlay.hasClass('.active')) {
			$('.headerBtn .line').css({ 'background-color' : '#FFF' });
		};



	// SCROLL FUNCTION
	// CHANGE MENUS COLOUR WHILE SCROLLING
	
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


	// FIRST SECTION VIDEO PLAY BTN

		$('.playBtn').click(function(e){

			e.preventDefault();
			video = $('.video');
			weAreTitle = $('.weAreBox');
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
			if (video.hasClass('videoScaled')) {
				video.removeClass('videoScaled');
			} else{
				$('.video').addClass('videoScaled');
			};
			 
		});


});