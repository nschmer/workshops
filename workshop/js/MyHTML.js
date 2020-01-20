(function($) {
    $(document).ready(function() {
	
	$('#MyHTML').scianimator({
	    'images': ['images/MyHTML1.png', 'images/MyHTML2.png', 'images/MyHTML3.png', 'images/MyHTML4.png'],
	    'width': 480,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#MyHTML').scianimator('play');
    });
})(jQuery);
