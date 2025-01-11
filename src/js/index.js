import "bootstrap-v5-rtl/dist/js/bundle.min.js";
import "bootstrap-v5-rtl/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import $ from "jquery";
import "../sass/style.scss";
import "@fortawesome/fontawesome-free/js/all.min";

// $(document).ready(() => {
//   $("img").css("width", "50%");
// });

// $(function () {
//   let modalId = $("#image-gallery");

//   loadGallery(true, "a.thumbnail");
//   function disableButtons(counter_max, counter_current) {
//     $("#show-previous-image, #show-next-image").show();
//     if (counter_max === counter_current) {
//       $("#show-next-image").hide();
//     } else if (counter_current === 1) {
//       $("#show-previous-image").hide();
//     }
//   }

//   function loadGallery(setIDs, setClickAttr) {
//     let current_image,
//       selector,
//       counter = 0;

//     $("#show-next-image, #show-previous-image").click(function () {
//       if ($(this).attr("id") === "show-previous-image") {
//         current_image--;
//       } else {
//         current_image++;
//       }

//       selector = $('[data-image-id="' + current_image + '"]');
//       updateGallery(selector);
//     });

//     function updateGallery(selector) {
//       let $sel = selector;
//       current_image = $sel.data("image-id");
//       $("#image-gallery-title").text($sel.data("title"));
//       $("#image-gallery-image").attr("src", $sel.data("image"));
//       disableButtons(counter, $sel.data("image-id"));
//     }

//     if (setIDs == true) {
//       $("[data-image-id]").each(function () {
//         counter++;
//         $(this).attr("data-image-id", counter);
//       });
//     }
//     $(setClickAttr).on("click", function () {
//       updateGallery($(this));
//     });
//   }
// });

// (function () {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var form = document.querySelector(".needs-validation");

//   form.addEventListener(
//     "submit",
//     function (event) {
//       if (!form.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//       }

//       form.classList.add("was-validated");
//     },
//     false
//   );
// })();

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year;
