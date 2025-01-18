$(document).ready(function () {
  $(window).on("scroll", function () {
    if (!$("#products-nav-link").hasClass("active")) {
      $("#home-nav-link").addClass("active");
    }
  });
});
