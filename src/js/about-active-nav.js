$(document).ready(function () {
  $(window).on("scroll", function () {
    if (!$("#info-nav-link").hasClass("active")) {
      $("#about-nav-link").addClass("active");
    }
  });
});
