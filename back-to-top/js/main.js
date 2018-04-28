var $btnTop = $('.btn-top');

$(window).scroll(function () {
	if ($(window).scrollTop() >= 200) {
		$btnTop.fadeIn();
	} else {
		$btnTop.fadeOut();
	}
});

$btnTop.click(function () {
	$('html, body').animate({scrollTop:0}, 900)
});