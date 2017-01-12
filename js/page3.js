$(document).ready(function() {
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
});