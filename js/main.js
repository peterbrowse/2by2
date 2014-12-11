var started = false, shown = false;

$(document).ready(function() {
	$("#start").click(function(){
		started = true;
		$(".intro").hide();
		$(".reading").fadeIn(500, function(){
			$(".reading p").typed({
				strings: [
					"Hi.",
					"I'm Peter.",
					"I work in the creative dept.",
					"These are my 2 by 2 things..."
				],
				typeSpeed: 120,
				backSpeed: 20,
				callback: function() {
					$('.reading').fadeOut(0, function() {
						$('#one').fadeIn(500, function() {
							$('#one_thing p').typed({
								typeSpeed: 120,
								backSpeed: 20,
								strings: [
									"I like this website.",
									"It makes me :-)",
									"The internet doesn't have to be all...",
									"porn",
									"'hacking'",
									"and hashtags.",
									"<a id='site' target='_blank' href='http://www.patatap.com/'>Patatap</a>"
								]
							});
						});
					});
				}
    		});		
		});
	});
	
	$('.count').click(function() {
		$(this).hide();
		$(this).next().delay(500).fadeIn(500);
		if(shown) {
			$('#horse').get(0).play(); 
		}
	});
	
	$(window).focus(function() {
		if(started && !shown) {
	        $('#one_thing').hide();
	        $('#two').show();
	        shown = true;
        }
    });
});

function videoEnded() {
	$('#two_thing').hide();
	$('.end').show();
	$('.end p').typed({
		typeSpeed: 120,
		backSpeed: 20,
		strings: [
			"...it goes on.",
			"The End."
		]
	});
}