$(document).ready(function(e) {
	var header = $(".header");
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if(scroll > 200) {
			header.addClass('scrolled');	
		} else {
			header.removeClass('scrolled');	
		}
	});
});