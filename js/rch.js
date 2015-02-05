var $overlay = $('<div id="overlay"></div>');
var $container = $('<div class="videoContainer"></div>');
var $wrapper = $('<div class="videoWrapper"></div>');
var $video = $('<iframe>');

$overlay.append($container)
$container.append($wrapper);
$wrapper.append($video);


$("body").append($overlay);

$("#gallery a").click( function (event) {

	// Stop link direct
	event.preventDefault();

	// Get video location
	var videoURL = $(this).attr("href");

	// Parse video ID from URL
	var vidNumber = videoURL.slice(17);

	// Embed player using parsed ID
	$video.attr("src", "http://player.vimeo.com/video/" + vidNumber);

	// Fade in overlay
	$overlay.fadeIn(500);


});

// Exit overlay when clicked
$overlay.click(function () {
	$(this).fadeOut(500);
})