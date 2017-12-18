/* smooth scroll*/
$(document).ready(function()
{
	applyClickEvent();
	mobile();
  closeNav();
});

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
    // closeNav();
  }
  /*closeNav*/
  function closeNav(){
    // $('.container').click(function(){
  	// 		 $('.nav').toggle();
    //    });
  }
