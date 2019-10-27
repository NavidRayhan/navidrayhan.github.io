function scrollToNextSection(section) {
  var smallScreen = window.matchMedia("(max-width: 500px)");
  var offsetValue;
  if (section == "section02"){
    offsetValue = 120;
  }
  else{
    offsetValue = -30;
  }
  if (smallScreen.matches){  
    e1 = document.getElementById(section+"-img").getBoundingClientRect().top
    window.scrollTo({top: e1 + window.pageYOffset + offsetValue, behavior: "smooth"})
  }
  else{
    document.getElementById(section).scrollIntoView(true);
  }
}

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





