$(document).ready(function()
{
	applyClickEvent();
	mobile();
});

/* smooth scroll*/
	function applyClickEvent()
	{
	$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 500);
    }
});
}

/*Mobile nav*/
function mobile(){
    $('.menu').click(function(){
        $('ul').toggleClass('active');
    });
  }
