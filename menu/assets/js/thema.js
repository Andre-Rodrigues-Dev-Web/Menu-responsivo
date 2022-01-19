//Menu
$(function() {
    
    // dislay or hide the menu if the user resize the window
    $(window).resize(function() {
        var wi = $(window).width();
        if (wi >= 641) {
            $('#topbar-menu').css({'display':'block'});
          		  $('#topbar-menu-icon').removeClass('ion-close-round');
            $('#topbar-menu-icon').addClass('ion-navicon-round');
        }
        else {
            $('#topbar-menu').css({'display':'none'});
            $('#topbar-menu-icon').removeClass('ion-close-round');
            $('#topbar-menu-icon').addClass('ion-navicon-round');
        }
    });
    
    // Change the menu icon, and show or hide the menu
    $('#topbar-menu-icon').click(function(){
        if ($('#topbar-menu').css('display') == 'none') {
            $('#topbar-menu').css({'display':'block'});
            $('#topbar-menu-icon').removeClass('ion-navicon-round');
            $('#topbar-menu-icon').addClass('ion-close-round');
        } 
        else {
            $('#topbar-menu').css({'display':'none'});
            $('#topbar-menu-icon').removeClass('ion-close-round');
            $('#topbar-menu-icon').addClass('ion-navicon-round');
        }
    });
});
$(function() { // Dropdown toggle
	$('.dropdown-toggle').click(function() { $(this).next('.dropdown').slideToggle();
	});
	
	$(document).click(function(e) 
	{ 
	var target = e.target; 
	if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) 
	//{ $('.dropdown').hide(); }
	  { $('.dropdown').slideUp(); }
	});
});
//Caroussel
$(function(){
	
	let liCount = $('.slider li').length;
	let ulWidth = (liCount * 100);
	let liWidth = (100/liCount);
	let leftIncrement = (ulWidth/liCount);


	$('.slider').height($('.slider li img').height());
  //$('.slider').height('300px');
	
	$('.slider img').on('load', function(){
    $('.loader').fadeOut();
		$('.slider').height($(this).height());
	})

	$(window).resize(function() {
		$('.slider').css('height', $('.slider li img').height());
	}); 
	
	$('.slider ul').css('width', ulWidth + '%');
	$('.slider li').css('width', liWidth + '%');

	$('.slider').append(function() {
		$(this).append('<div class="navigator"></div>');
		$(this).prepend('<span class="prev">Prev</span><span class="next">Next</span>');
		//$(this).append('<div class="autoPlay"><input id="chkBox" type="checkbox" class="chkbox" /><label for="chkBox">Auto Play?</label></div>');

		$(this).find('li').each(function(){
			$('.navigator').append('<span></span>');
		});
	});

  $('.slider').css('height', $('.slider li img').height());
  
	$('.navigator span:first-child').addClass('active');


	if(liCount > 2) {
		$('.slider ul').css('margin-left', -leftIncrement + '%');
		$('.slider ul li:last-child').prependTo('.slider ul');
	} else if(liCount == 1) {
		$('.slider span').css('display', 'none');
		$('.autoPlay').css('display', 'none');
	} else if(liCount == 2) {
		$('.slider .prev').css('display', 'none');
	}

	function moveLeft() {
		$('.slider ul').animate({
			left : -leftIncrement + '%'
		}, 500, function(){
			$('.slider ul li:first-child').appendTo('.slider ul');
			$('.slider ul').css('left', '');

			if($('.navigator span').hasClass('active')) {

				if($('.navigator span.active').is(':last-child')) {
					$('span.active').removeClass('active');
					$('.navigator span:first-child').addClass('active');
				} else {
					$('span.active').next().addClass('active');
					$('span.active').prev().removeClass('active');
				}
			}
		});
	}


	function moveRight() {
		$('.slider ul').animate({
			left : leftIncrement + '%'
		}, 500, function(){
			$('.slider ul li:last-child').prependTo('.slider ul');
			$('.slider ul').css('left', '');

			if($('.navigator span').hasClass('active')) {

				if($('.navigator span.active').is(':first-child')) {
					$('span.active').removeClass('active');
					$('.navigator span:last-child').addClass('active');
				} else {
					$('span.active').prev().addClass('active');
					$('span.active').next().removeClass('active');
				}
			}
		});
	}


	// $('.chkbox').click(function() {
	// 	if($('.chkbox').is(':checked')) {
	// 		$('.slider > span').hide();
	// 		$(this).next('label').text('Auto Playing')
	// 		invertalValue = setInterval(function() {
	// 			moveLeft();
	// 		}, 5000);
	// 	} else {
	// 		$(this).next('label').text('Auto Play?')
	// 		if(liCount == 2) {
	// 			$('.slider .next').show();
	// 		} else if(liCount > 2){
	// 			$('.slider > span').show();
	// 		}
	// 		clearInterval(invertalValue);
	// 	}
	// });
  
  if(liCount > 1) {
		invertalValue = setInterval(function() {
			moveLeft();
		}, 5000);
	}

	$('.prev').click(function(){
		moveRight();
	});

	$('.next').click(function(){
		moveLeft();
	});

});

/* Mamun khandaker */