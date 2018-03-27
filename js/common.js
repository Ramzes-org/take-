$( document ).ready(function() {
	//init wow plagin ------------>
	new WOW().init();


	// button click animation
	

	//Slick slider. Trigger animation on every current slide
	$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
	// console.log('afterChange - '+currentSlide);
	$(slick.$slides)
	.find('p, h4, a').removeClass('fadeInUp').addClass('hidden');

	$(slick.$slides[currentSlide])
	.find('p, h4, a').removeClass('hidden').addClass('fadeInUp');
	});


});