jQuery(document).ready(function ($) {

	"use strict";

	/* ---------------------------------------------------------------------- */
	/*	------------------------------- Loading ----------------------------- */
	/* ---------------------------------------------------------------------- */

	/*Page Preloading*/
	$(window).on('load', function () {
		$('#spinner').fadeOut(200);
		$('#preloader').delay(200).fadeOut('slow');
		$('.wrapper').fadeIn(200);
		$('#custumize-style').fadeIn(200);
	});

	/* ---------------------------------------------------------------------- */
	/* ------------------------------- Taps profile ------------------------- */
	/* ---------------------------------------------------------------------- */

	// $('.collapse_tabs').click(function () {

	// 	if ($(this).hasClass('collapsed')) {
	// 		$(this).find('i.glyphicon').removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
	// 	} else {
	// 		$(this).find('i.glyphicon').removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
	// 	}

	// });

	/* ---------------------------------------------------------------------- */
	/* -------------------------- easyResponsiveTabs ------------------------ */
	/* ---------------------------------------------------------------------- */

	$('#menu').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true
	});

	// $("h2.resp-accordion").click(function () {
	// 	$(this).find(".icon_menu").addClass("icon_menu_active");
	// 	$("h2.resp-accordion").not(this).find(".icon_menu").removeClass("icon_menu_active");

	// 	/*	Scroll To */
	// 	$('html, body').animate({ scrollTop: $('h2.resp-accordion').offset().top - 50 }, 600);
	// });

	// $(".resp-tabs-list li").click(function () {
	// 	$(this).find(".icon_menu").addClass("icon_menu_active");
	// 	$(".resp-tabs-list li").not(this).find(".icon_menu").removeClass("icon_menu_active");
	// });


	// $(".resp-tabs-list li").hover(function () {
	// 	$(this).find(".icon_menu").addClass("icon_menu_hover");
	// }, function () {
	// 	$(this).find(".icon_menu").removeClass("icon_menu_hover");
	// });

	// $("h2.resp-accordion").hover(function () {
	// 	$(this).find(".icon_menu").addClass("icon_menu_hover");
	// }, function () {
	// 	$(this).find(".icon_menu").removeClass("icon_menu_hover");
	// });

	/* ---------------------------------------------------------------------- */
	/* --------------------------- Scroll tabs ------------------------------ */
	/* ---------------------------------------------------------------------- */

	// $(".content_2").mCustomScrollbar({
	// 	theme: "dark-2",
	// 	contentTouchScroll: true,
	// 	advanced: {
	// 		updateOnContentResize: true,
	// 		updateOnBrowserResize: true,
	// 		autoScrollOnFocus: false
	// 	}
	// });

	/* ---------------------------------------------------------------------- */
	/* ------------------------- Effect tabs -------------------------------- */
	/* ---------------------------------------------------------------------- */

	// var animation_style = 'bounceIn';

	// $('.dropdown-select').change(function () {
	// 	animation_style = $('.dropdown-select').val();
	// });


	// $('ul.resp-tabs-list li[class^=tabs-]').click(function () {

	// 	var tab_name = $(this).attr('data-tab-name');

	// $('.resp-tabs-container').addClass('animated ' + animation_style);
	// $('.resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
	// 	$('.resp-tabs-container').removeClass('animated ' + animation_style);
	// });

	// 	$(".content_2").mCustomScrollbar("destroy");
	// 	$(".content_2").mCustomScrollbar({
	// 		theme: "dark-2",
	// 		contentTouchScroll: true,
	// 		advanced: {
	// 			updateOnContentResize: true,
	// 			updateOnBrowserResize: true,
	// 			autoScrollOnFocus: false
	// 		}
	// 	});

	// 	if (tab_name == "contact")
	// 		initialize();

	// 	return false;
	// });

	// $("#verticalTab h2.resp-accordion").click(function () {
	// 	initialize();
	// });

	/* ---------------------------------------------------------------------- */
	/* ---------------------- redimensionnement ----------------------------- */
	/* ---------------------------------------------------------------------- */

	// function redimensionnement() {

	// 	if (window.matchMedia("(max-width: 800px)").matches) {
	// 		$(".content_2").mCustomScrollbar("destroy");
	// 		$(".resp-vtabs .resp-tabs-container").css("height", "100%");
	// 		$(".content_2").css("height", "100%");
	// 	} else {

	// 		$(".resp-vtabs .resp-tabs-container").css("height", "580px");
	// 		$(".content_2").css("height", "580px");
	// 		$(".content_2").mCustomScrollbar("destroy");
	// 		$(".content_2").mCustomScrollbar({
	// 			theme: "dark-2",
	// 			contentTouchScroll: true,
	// 			advanced: {
	// 				updateOnContentResize: true,
	// 				updateOnBrowserResize: true,
	// 				autoScrollOnFocus: false
	// 			}
	// 		});

	// 	}

	// }

	// // On lie l'événement resize à la fonction
	// window.addEventListener('load', redimensionnement, false);
	// window.addEventListener('resize', redimensionnement, false);

	// $("#verticalTab h2.resp-accordion").click(function () {
	// 	initialize();
	// });





	/* ---------------------------------------------------------------------- */
	/* ----------------------------- prettyPhoto ---------------------------- */
	/* ---------------------------------------------------------------------- */

	$("a[rel^='portfolio']").prettyPhoto({
		animation_speed: 'fast', /* fast/slow/normal */
		social_tools: '',
		theme: 'pp_default',
		horizontal_padding: 5,
		deeplinking: false,
	});



	/* ---------------------------------------------------------------------- */
	/* ------------------------------ Google Maps --------------------------- */
	/* ---------------------------------------------------------------------- */

	var map;
	function initialize() {
		map = new GMaps({
			div: '#map',
			lat: -37.817917,
			lng: 144.965065,
			zoom: 16

		});
		map.addMarker({
			lat: -37.81792,
			lng: 144.96506,
			title: 'Marker with InfoWindow',
			icon: 'images/map-marker.png',
			infoWindow: {
				content: '<p>Melbourne Victoria, 300, Australia</p>'
			}
		});
	}

	/* ---------------------------------------------------------------------- */
	/* --------------------------------- Blog ------------------------------- */
	/* ---------------------------------------------------------------------- */

	// More blog
	$('a.read_m').click(function () {
		var pagina = $(this).attr('href');
		var postdetail = pagina + '-page';

		if (pagina.indexOf("#post-") != -1) {

			$('#blog-page').hide();

			$(postdetail).show();
			$(".tabs-blog").trigger('click');
		}

		return false;

	});

	// More blog
	$('a.read_more').click(function () {
		var pagina = $(this).attr('href');
		var postdetail = pagina + '-page';

		if (pagina.indexOf("#post-") != -1) {

			$('#blog-page').hide();

			$(postdetail).show();
			$(".tabs-blog").trigger('click');
		}

		return false;

	});

	//pagination All
	$('.content-post a').click(function () {
		var pagina = $(this).attr('href');

		if (pagina == "#blog") {

			$('.content-post').hide();
			$('#blog-page').show();
			$(".tabs-blog").trigger('click');

		}

		return false;

	});

	//pagination blog
	$('.content-post #pagination').click(function () {


		var pagina = $(this).attr('href');
		var postdetail = pagina + '-page';

		if (pagina.indexOf("#post-") != -1) {

			$('#blog-page').hide();
			$('.content-post').hide();

			$(postdetail).show();
			$(".tabs-blog").trigger('click');
		}

		return false;

	});


	/* ---------------------------------------------------------------------- */
	/* ---------------------------- icon menu ------------------------------- */
	/* ---------------------------------------------------------------------- */

	// $(".resp-tabs-container h2.resp-accordion").each(function () {

	// 	if ($(this).hasClass('resp-tab-active')) {
	// 		$(this).append("<i class='glyphicon glyphicon-chevron-up arrow-tabs'></i>");
	// 	} else {
	// 		$(this).append("<i class='glyphicon glyphicon-chevron-down arrow-tabs'></i>");
	// 	}
	// });

	// $(".resp-tabs-container h2.resp-accordion").click(function () {
	// 	if ($(this).hasClass('resp-tab-active')) {
	// 		$(this).find("i.arrow-tabs").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
	// 	}

	// 	$(".resp-tabs-container h2.resp-accordion").each(function () {

	// 		if (!$(this).hasClass('resp-tab-active')) {
	// 			$(this).find("i.arrow-tabs").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
	// 		}
	// 	});


	// });


	/* ---------------------------------------------------------------------- */
	/* -------------------------------- skillbar ---------------------------- */
	/* ---------------------------------------------------------------------- */

	$('.tabs-resume').click(function () {

		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').width(0);
		});

		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').animate({
				width: $(this).attr('data-percent')
			}, 2000);
		});

	});

	$('#resume').prev('h2.resp-accordion').click(function () {

		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').width(0);
		});

		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').animate({
				width: $(this).attr('data-percent')
			}, 2000);
		});
	});


	//Change for demo page
	$('input:radio[name=page_builder]').on('change', function () {

		$('input:radio[name=page_builder]').each(function () {

			var $this = $(this);

			if ($(this).prop('checked')) {
				window.location.replace($this.val());
			}
		});

		return false;
	});

	//hash url page changer
	// if ("onhashchange" in window) {

	// 	var hash = location.hash;

	// 	if (hash == "")
	// 		return false;

	// 	var pages_array = [
	// 		'profile',
	// 		'resume',
	// 		'portfolio',
	// 		'blog',
	// 		'contact'
	// 	];

	// 	var hash = hash.replace("#", "");

	// 	if (!($.inArray(hash, pages_array) > -1)) {
	// 		return false;
	// 	} else {
	// 		$(".tabs-" + hash).trigger('click');
	// 	}

	// }

});
