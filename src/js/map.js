import L from "leaflet";
import "leaflet.awesome-markers";

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
