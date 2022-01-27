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

});
