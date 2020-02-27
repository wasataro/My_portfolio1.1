/*
 * Copyright (c) 2019 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	arlo_tm_anchor();
	arlo_tm_down();
	arlo_tm_imgtosvg();
	arlo_tm_scrollable();
	arlo_tm_switcher();
	arlo_mobile_menu();
	arlo_tm_data_images();
	arlo_tm_animate_text();
	arlo_tm_jarallax();
	arlo_tm_projects();
	arlo_tm_isotope();
	arlo_tm_partners();
	arlo_tm_contact_form();
	arlo_tm_location();
	arlo_tm_totop();
	arlo_tm_nav_bg();
	arlo_hero_effect();
	arlo_about_img();
	arlo_tm_kenburn_slider();
	arlo_tm_ripple();
	arlo_tm_videoplayer();
	arlo_tm_about_animation();
	
	
	jQuery(window).on('resize',function(){
		arlo_tm_scrollable();
		arlo_tm_isotope();
	});
	
	jQuery(window).on('scroll',function(){
		
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.arlo_tm_preloader').addClass('loaded');
    }, 1000);
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

function arlo_tm_anchor(){
	
	"use strict";
	
	jQuery('.arlo_tm_leftpart .inner .menu ul li a,.arlo_tm_topbar .dropdown .dropdown_inner ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top
			}, 1000);
		}
		return false;
	});
	
	jQuery('.arlo_tm_menu_second .inner .menu ul li a,.arlo_tm_topbar.second .dropdown .dropdown_inner ul li a,.arlo_tm_third_menu .inner .menu ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-200
			}, 1000);
		}
		return false;
	});
	
	jQuery('.arlo_tm_fourth_menu .inner .menu ul li a,.arlo_tm_topbar.second .dropdown .dropdown_inner ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-220
			}, 1000);
		}
		return false;
	});
	
	jQuery('.arlo_tm_menu_fifth .inner .menu ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-95
			}, 1000);
		}
		return false;
	});
	
	jQuery('.arlo_tm_intro_menu .in .left .list ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-40
			}, 1000);
		}
		return false;
	});

}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function arlo_tm_down(){
	
	"use strict";
	
	jQuery('.arlo_tm_arrow_wrap a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 1000);
		}
		return false;
	});
	jQuery('.arlo_tm_arrow_wrap_second a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-220
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ------------   WAIT FOW IMAGES    -------------------
// -----------------------------------------------------

$('.masonry img').waitForImages(function() {
    arlo_tm_isotope();
});	

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function arlo_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -------------------------------------------------
// --------------   MENU SCROLL  -------------------
// -------------------------------------------------

function arlo_tm_scrollable(){
	
	"use strict";
	
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.arlo_tm_leftpart .inner .menu.scrollable');
	var verMenu			= jQuery('.arlo_tm_leftpart .inner .menu');
	var logoHeight		= jQuery('.arlo_tm_leftpart .inner .logo').outerHeight();
	var socialHeight	= jQuery('.arlo_tm_leftpart .inner .bottom').outerHeight()+100;

	verMenu.css({height:H-logoHeight-socialHeight});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		
		element.css({height: H-logoHeight-socialHeight}).niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #eee"
		});
	});
}

// -----------------------------------------------------
// -----------------    SWITCHER    --------------------
// -----------------------------------------------------

function arlo_tm_switcher(){
	
	"use strict";
	
	var switcherOpener				= jQuery('.arlo_tm_leftpart .inner .resize');
	var switcherIcon				= jQuery('.arlo_tm_leftpart .inner .resize a span');
	var leftPart					= jQuery('.arlo_tm_leftpart');
	var rightPart					= jQuery('.arlo_tm_rightpart');
	var WW							= jQuery(window).width();
	
	switcherOpener.on('click',function(){
		if(WW >= 1600){
			if(switcherOpener.hasClass('opened')){
			switcherOpener.removeClass('opened');
			switcherIcon.removeClass('opened');
			leftPart.removeClass('opened');
			rightPart.removeClass('opened');
		}else{
			switcherOpener.addClass('opened');
			switcherIcon.addClass('opened');
			leftPart.addClass('opened');
			rightPart.addClass('opened');
		}
		}else{
			if(switcherOpener.hasClass('opened')){
			switcherOpener.removeClass('opened');
			switcherIcon.removeClass('opened');
			leftPart.removeClass('opened2');
			rightPart.removeClass('opened');
		}else{
			switcherOpener.addClass('opened');
			switcherIcon.addClass('opened');
			leftPart.addClass('opened2');
			rightPart.addClass('opened');
		}
		}
			setTimeout(function(){jQuery('#ripple').ripples('updateSize');},101);
			setTimeout(function(){jQuery('#ripple').ripples('updateSize');},201);
			setTimeout(function(){jQuery('#ripple').ripples('updateSize');},301);
		if(jQuery('.jarallax').length){
			jQuery('.jarallax').jarallax('destroy');
			setTimeout(function(){arlo_tm_jarallax();},300);
		
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   MOBILE MENU    --------------------
// -----------------------------------------------------

function arlo_mobile_menu(){
	
	"use strict";
		
	var trigger			= jQuery('.arlo_tm_topbar .topbar_inner .trigger');
	var triggerClose	= trigger.find('a .close');
	var triggerMenu		= trigger.find('a .menu');
	var dropdown		= jQuery('.arlo_tm_topbar .dropdown');
	
	trigger.on('click',function(){
		var element	= jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			triggerMenu.removeClass('closed');
			triggerClose.removeClass('opened');
			dropdown.slideUp();
		}else{
			element.addClass('opened');
			triggerMenu.addClass('closed');
			triggerClose.addClass('opened');
			dropdown.slideDown();
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function arlo_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function arlo_tm_animate_text(){
	
	"use strict";
	
	var animateSpan1			= jQuery('.arlo_tm_animation_text_word');
	
		animateSpan1.typed({
			strings: ["大学生", "プログラマー", "Youtuber"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
	
	var animateSpan2			= jQuery('.arlo_tm_animation_text_word2');
	
		animateSpan2.typed({
			strings: ["Alexander", "Freelancer", "Developer", "Photographer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function arlo_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -----------------------------------------------------
// --------------------   SKILLS    --------------------
// -----------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*300));
	});
}

	jQuery('.arlo_progress').each(function() {

		"use strict";

		var pWrap 			= jQuery(this);
		pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	});

function arlo_tm_projects() {
	
	"use strict";
	
	jQuery('.arlo_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.arlo_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.arlo_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.arlo_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.arlo_tm_portfolio_titles').removeClass('visible');
		});
	});
}


// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function arlo_tm_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function arlo_tm_partners(){
	
	"use strict";
	
		var carousel1			= jQuery('.arlo_tm_partners .owl-carousel');
		carousel1.owlCarousel({
				loop: true,
				items: 4,
				lazyLoad: true,
				margin: 40,
				autoplay: true,
				autoplayTimeout: 4000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:3},
					1200:{items:4},
					1600:{items:4},
					1920:{items:4}
				}
		});
	
		var carousel2			= jQuery('.arlo_tm_testimonial .owl-carousel,.arlo_tm_testimonial_second .owl-carousel');
		carousel2.owlCarousel({
				loop: true,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				items: 1,
				lazyLoad: true,
				autoplay: true,
				autoplayTimeout: 5000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true
		});
	
		var carousel4			= jQuery('.arlo_tm_myskill_second .owl-carousel');
		carousel4.owlCarousel({
				loop: true,
				items: 3,
				lazyLoad: true,
				margin: 50,
				autoplay: true,
				autoplayTimeout: 5000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:3},
					1200:{items:3},
					1600:{items:3},
					1920:{items:3}
				}
		});
		arlo_tm_imgtosvg();
	}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function arlo_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// ----------------    PLACEHOLDER    ------------------
// -----------------------------------------------------

function arlo_tm_location(){
		var button		= jQuery('.href_location');
		button.on('click',function(){
			var element		= jQuery(this);
			var address		= element.text();
			address			= address.replace(/\ /g,'+');
			var text		= 'https://maps.google.com?q=';
			window.open(text+address);
			return false;
		});
	}


// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function arlo_tm_totop(){
	
	"use strict";
	
	jQuery(".arlo_tm_footer .footer_inner .top a").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

// -----------------------------------------------------
// ------------------    NAV BG SCROLL    --------------
// -----------------------------------------------------

function arlo_tm_nav_bg(){
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.arlo_tm_menu_second');
		var menu2	 		= jQuery('.arlo_tm_third_menu');
		var menu3	 		= jQuery('.arlo_tm_fourth_menu');
		var menu4	 		= jQuery('.arlo_tm_menu_fifth');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 250){
			menu.addClass('animate');
			menu2.addClass('animate');
			menu3.addClass('animate');
			menu4.addClass('animate');
		}else{
			menu.removeClass('animate');
			menu2.removeClass('animate');
			menu3.removeClass('animate');
			menu4.removeClass('animate');
		}
	});
}

// -----------------------------------------------------
// --------------------    HERO EFFECT    --------------
// -----------------------------------------------------

function arlo_hero_effect(){
		
	jQuery(window).on('scroll',function(){
		var WinScroll			= jQuery(window).scrollTop();
		var text				= jQuery(".arlo_tm_third_hero .hero_texts");
		var currentScroll		= window.pageYOffset;
		text.css({'opacity' : (1 - (currentScroll/20) / 15)});
		
		if(WinScroll >= 400){
			text.addClass('changed');
		}else{
			text.removeClass('changed');
		}
	});
	
}

// -----------------------------------------------------
// -------------    ABOUT HOVER IMAGE   ----------------
// -----------------------------------------------------

function arlo_about_img(){
		
		var name		= jQuery('.robex_about .about_main p .name');
		var image		= jQuery('.robex_about .about_image');
		
		name.on('mouseenter',function(){
			image.addClass('opened');
		})
		.on('mouseleave',function(){
			image.removeClass('opened');
		});
		
	}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function arlo_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.arlo_tm_kenburn_hero .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/slider/1.jpg' },
				{ src: 'img/slider/2.jpeg' },
				{ src: 'img/slider/3.jpg' },
			]

		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function arlo_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function arlo_tm_videoplayer(){
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

	function arlo_tm_about_animation(){
		
		"use strict";
		
		if ($('.parallax').length > 0) { 
		  var scene = $('.parallax').get(0);
		  var parallax = new Parallax(scene, { 
			relativeInput: true,
			onReady: function() { console.log('ready!');
		  } });
		}
	}