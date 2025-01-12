function isInViewport($element) {
  const rect = $element[0].getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= ($(window).height() || $(document).height()) &&
    rect.right <= ($(window).width() || $(document).width())
  );
}

$(document).ready(function () {
  const $features = $("#features");
  const $numSections = $(".num-section");

  function fadeIn() {
    if (isInViewport($features)) {
      let counter = 500;
      $numSections.each(function (index, element) {
        setTimeout(() => {
          $(element).css("opacity", 1);
        }, counter);
        counter += 500;
      });
    }
  }

  $(window).on("scroll", fadeIn);
});
