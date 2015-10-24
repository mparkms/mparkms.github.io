$(function() {
	$('.show-hide-btn').click(function() {
		var details = $(this).parent().parent().nextAll('.project-details:first');
		if (details.css('display') == 'none')
			details.show(300);
		else
			details.hide(300);
	});
})

$(document).ready(function() {
	$(".fancybox").fancybox();

	$(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
});