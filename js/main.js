var $;
var window;
/* ==================================
          Preloader
================================== */
$(window).on('load', function () {
  $("#status").fadeOut(500);
  $("#preloader").delay(350).fadeOut(1000);
});