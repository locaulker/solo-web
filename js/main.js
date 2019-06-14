var $;
var window;
/* ==================================
          Preloader
================================== */
$(window).on('load', function () {
  $("#status").fadeOut(500);
  $("#preloader").delay(350).fadeOut('slow');
});


/* =======================================
          Team Section: Owl Carousel
======================================= */
$(function () { // jQuery's document.ready method
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});


/* ==============================================
          Team Section: Progress Bars/Waypoints
============================================== */
$(function () {
  $("#progress-elements").waypoint(function () {
    $(".progress-bar").each(function () {
      $(this).animate({
        width: $(this).attr("aria-valuenow") + '%'
      }, 1000);
    });
    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });
});


/* ==============================================
          Services Section: Responsive Tabs
============================================== */
$(function() {
  $("#services-tabs").responsiveTabs({
    animation: 'slide'
  });
});


/* =======================================
        Portfolio Section: Isotopes
======================================= */
$(window).on('load', function () {
  // Initialize Isotope
//  $("#isotope-container").isotope({
//    
//  });
  
  // filter items on button click
  $("#isotope-filters").on('click', 'button', function() {
    
    // get data-filter value
    var filterValue = $(this).attr('data-filter');
    
    // filter portfolio item
    $("#isotope-container").isotope({
      filter: filterValue
    });
    
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');
    
  });
  
});



































