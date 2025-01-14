import "bootstrap-v5-rtl/dist/js/bundle.min.js";
import "bootstrap-v5-rtl/dist/css/bootstrap.min.css";
import "normalize.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import $ from "jquery";
import "./sass/style.scss";
import "@fortawesome/fontawesome-free/js/all.min";
import "leaflet/dist/leaflet.css";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";

(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

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
