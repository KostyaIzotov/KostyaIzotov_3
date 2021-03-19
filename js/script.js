var $header = $(".header")
var scroll = 150
var active = "active"
$(window).scroll(function () {
	if ($(window).scrollTop() > scroll) {
		$header.addClass(active)
	} else {
		$header.removeClass(active)
	}
})


$('.menu__list a[href^="#"').on('click', function () {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	});
	return false;
});


var positions = [],
	currentActive = null,
	links = $('.menu__link');

$(".anchor").each(function () {
	positions.push({
		top: $(this).position().top - 350,
		a: links.filter('[href="#' + $(this).attr('id') + '"]')
	});
});

positions = positions.reverse();

$(window).on('scroll', function () {
	var winTop = $(window).scrollTop();
	for (var i = 0; i < positions.length; i++) {
		if (positions[i].top < winTop) {
			if (currentActive !== i) {
				currentActive = i;
				links.filter('.active').removeClass('active');
				positions[i].a.addClass("active");
			}
			break;
		}
	}
});

$(document).ready(function () {

	$('.header__burger').click(function (event) {
		$('.header__burger,.menu__list,.intro__lang').toggleClass('active');
		$('body').toggleClass('lock');
	});

});