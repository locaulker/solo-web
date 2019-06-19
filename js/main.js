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
$(function () {
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
  $("#isotope-filters").on('click', 'button', function () {

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


/* ==============================================
        Portfolio Section: Magnific PopUp
============================================== */
$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});


/* ==============================================
        Testimonial Section: Owl Carousel
============================================== */
$(function () { // jQuery's document.ready method
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});


/* ==============================================
        Stats Section: jQuery CounterUp
============================================== */
$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});


/* =======================================
          Client Section: Owl Carousel
======================================= */
$(function () { // jQuery's document.ready method
  $("#clients-list").owlCarousel({
    items: 4,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});


/* =======================================
          Google Map Section
======================================= */
$(window).on('load', function () {

  // Map Variables
  var addressString = '230 Broadway, New York, NY 10007, USA';
  var mylatlng = {
    lat: 40.715240,
    lng: -74.005417
  }

  // 1. Render Google Map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: mylatlng
  });

  // 2. Add Location Marker
  var marker = new google.maps.Marker({
    position: mylatlng,
    map: map,
    title: "Click to See Address"
  });

  // 3. Add Info Window
  var infowindow = new google.maps.InfoWindow({
    content: addressString
  });

  // 4. Open Info Window on Click of Marker
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
});


/* =======================================
          Navigation: Show/Hide
======================================= */
/* Toggle Normal & White Bg Navigation bar on jQuery Scroll */
$(function () {

  // show/hide nav on "Page load"
  showHideNav();

  // show/hide nav on "Window's Scroll"
  $(window).scroll(function () {
    showHideNav();
  });


  function showHideNav() {
    if( $(window).scrollTop() > 50 ) {
      //1. Show White Navigation Bar
      $("nav").addClass("white-nav-top");

      //2. Show Dark Logo
      $(".navbar-brand img").attr("src", "images/logo/logo-dark.png");

      // Show Back-to-top button
      $("#back-to-top").fadeIn();

    } else {
      //1. Hide White Navigation Bar
      $("nav").removeClass("white-nav-top");

      //2. Display Normal Logo
      $(".navbar-brand img").attr("src", "images/logo/logo.png");

      // Hide Back-to-top button
      $("#back-to-top").fadeOut();
    }
  }
});


/* =======================================
          Navigation: Smooth Scrolling
======================================= */
$(function () {
  $("a.smooth-scroll").click(function (e) {
    e.preventDefault();

    // on-click, get section ID like #about, #services, etc
    var section_id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
});