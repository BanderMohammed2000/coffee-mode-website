$(document).ready(function () {
  $(".cart").each(function (index, element) {
    $(element).on("click", () => {
      alert("تمت إضافة المنتج الى السلة");
    });
  });
});
