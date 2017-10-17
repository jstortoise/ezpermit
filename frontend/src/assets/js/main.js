$(document).ready(function() {

	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
			if (scroll > $(window).height()) {
				$('#header').removeClass('white');
				$('#logo_img').attr('src', 'assets/images/logo_2.png');
			} else {
				$('#header').addClass('white');
				$('#logo_img').attr('src', 'assets/images/logo_1.png');
			}
		} else {
			$('#header').removeClass('fixed');
			$('#logo_img').attr('src', 'assets/images/logo_1.png');
		}
	});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
		try {
	  	var $el = $(this)
	    	id = $el.attr('href');
			$('html, body').animate({
				scrollTop: $(id).offset().top - 75
			}, 500);
		} catch (e) {}
	  return false;
	});

	$('.watch-btn').on('click touchstart', function () {
		try {
	  	var $el = $(this)
	    	id = $el.attr('href');
			$('html, body').animate({
				scrollTop: $(id).offset().top// - 120
			}, 500);
		} catch (e) {}
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

	// Mobile Navigation
	$('.login-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		$('#user-content').toggleClass('open', 500);
		return false;
	});

	$('#login-header').on('click', function() {
		$('.login-toggle').toggleClass('hide');
		$('.user-content').toggleClass('top', 500);
		$('.user-content').toggleClass('expand');
		// $('.user-content .description').toggle();
		$('#login-header .fa').toggleClass('fa-caret-up fa-caret-down');
		$('.sub-panel').toggle('fade');
		$('#signup-panel').hide();
	});

	$('#signup-btn').on('click', function() {
		$('.login-panel').hide();
		$('#signup-panel').toggle('fade');
	})

	$('.faq-title').on('click', function() {
		$(this).parent().children('.faq-body').toggle('slow');
	})

	$("#password").complexify({}, function(valid, complexity){
    console.log("Password complexity: " + complexity);
  });
});
