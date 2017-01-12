$(document).ready(function() {
	if (window.matchMedia("(min-width: 420px)").matches) {
		$('.footer').hide();
		$('svg').hide();
		function showSVG(){
			$('svg').show();
			$('.footer').show();
			$('.footer').css('margin-top','300px');
			$('.footer').css('text-align','center');
			$('svg').animate({
				left: "30%",
				width : "40%"
			}, 1500);
		}
        setTimeout(showSVG, 5500);
	} else {
		$('.footer').hide();
		$('svg').hide();
		function nouvelPage(){
			$('html').load("page4.html");
		}
		setTimeout(nouvelPage,33000);
	}
});