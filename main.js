
var largeScreen = window.matchMedia("(min-width: 750px)");
if (largeScreen.matches){
  // Screen is less than 480px


$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".full-container").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom - objectBottom*0.23 < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(250,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(250,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });
}
