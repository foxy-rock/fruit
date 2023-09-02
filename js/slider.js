$('.slider').slick({
	infinite: true,
	dots: true,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1546,
			settings: {
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
	]

});