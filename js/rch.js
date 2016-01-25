// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top -50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Inserts videos into modal window
$('.video-link').click(function(){
	// Get URL from link
	var videoURL = $(this).attr("href");

	// Parse Vimeo vid number
	var vidNumber = videoURL.slice(17);

	// Get title from <img> alt
	var videoTitle = $(this).children('img').attr('alt');

	var videoCaption = $(this).parent().next().html();

	// Insert video src into <iframe>
	$('#video-frame').attr("src", "http://player.vimeo.com/video/" + vidNumber);

	// Prepend title into modal header
	$('.modal-title').replaceWith("<h4 class='modal-title' id='myModalLabel'>" + videoTitle + "</h4>");

	// Insert caption into modal window
	$('.modal-footer').replaceWith("<div class='modal-footer'>" + videoCaption + "</div>");

});