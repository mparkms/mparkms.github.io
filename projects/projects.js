$(function() {
	$('.show-hide-btn').click(function() {
		var details = $(this).parent().parent().nextAll('.project-details:first');
		if (details.css('display') == 'none')
			details.show(300);
		else
			details.hide(300);
	});
})