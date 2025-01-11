import "bootstrap-v5-rtl/dist/js/bundle.min.js";
import "bootstrap-v5-rtl/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import $ from "jquery";
import "../sass/style.scss";
import "@fortawesome/fontawesome-free/js/all.min";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.awesome-markers";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";

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

// إنشاء الخريطة
const map = L.map("map").setView([21.4858, 39.1925], 13); // إحداثيات جدة الافتراضية

// إضافة الطبقة الافتراضية للخريطة
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

// مواقع الموزعين مع أسماءهم وأحيائهم
const locations = [
  {
    name: "الموزع: أحمد محمد",
    lat: 21.4858,
    lng: 39.1925,
    district: "شمال جدة",
  },
  {
    name: "الموزع: مصطفى حسين",
    lat: 21.4875,
    lng: 39.1915,
    district: "وسط جدة",
  },
  { name: "الموزع: تركي حسن", lat: 21.49, lng: 39.195, district: "جنوب جدة" },
  {
    name: "الموزع: سليمان فهد",
    lat: 21.48,
    lng: 39.185,
    district: "حي الشاطئ",
  },
  {
    name: "الموزع: ناصر فتحي",
    lat: 21.495,
    lng: 39.2,
    district: "حي الفيصلية",
  },
  {
    name: "الموزع: ابراهيم خليل",
    lat: 21.482,
    lng: 39.18,
    district: "حي الصفا",
  },
  { name: "الموزع: يوسف محمد", lat: 21.47, lng: 39.19, district: "حي النسيم" },
];

const customIcon = L.AwesomeMarkers.icon({
  icon: "coffee", // اسم الأيقونة (من مكتبة FontAwesome)
  markerColor: "custom", // لون مخصص
  iconColor: "#f5deb3", // لون الأيقونة
  prefix: "fa", // استخدام FontAwesome
  extraClasses: "fas",
  // html: `<i style="background-color: #392719; color: #fff; padding: 8px; border-radius: 50%;"></i>`, // تنسيق مخصص
});

// إضافة العلامات مع الأيقونة المخصصة
locations.forEach((location) => {
  const { name, lat, lng, district } = location;
  const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

  // ربط اسم الموزع مع اسم الحي عند الإشارة عليها
  marker.bindPopup(`<b>${name}</b><br>الحي: ${district}`);
});

// ضبط الخريطة لتناسب جميع العلامات
const bounds = L.latLngBounds(
  locations.map((location) => [location.lat, location.lng])
);
map.fitBounds(bounds);

// إصلاح الأيقونات الافتراضية
// L.Marker.prototype.options.icon = L.icon({
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
//   iconSize: [25, 41], // حجم الأيقونة
//   iconAnchor: [12, 41], // النقطة التي تحدد مكان العلامة
//   popupAnchor: [1, -34], // مكان ظهور الـ popup بالنسبة للعلامة
//   shadowSize: [41, 41], // حجم الظل
// });

// إنشاء العلامات
// const markers = locations.map(([lat, lng]) => L.marker([lat, lng]).addTo(map));
