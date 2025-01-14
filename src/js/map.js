import L from "leaflet";
import "leaflet.awesome-markers";

const map = L.map("map").setView([21.4858, 39.1925], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

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
  icon: "coffee",
  markerColor: "custom",
  iconColor: "#f5deb3",
  prefix: "fa",
  extraClasses: "fas",
});

locations.forEach((location) => {
  const { name, lat, lng, district } = location;
  const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

  marker.bindPopup(`<b>${name}</b><br>الحي: ${district}`);
});

const bounds = L.latLngBounds(
  locations.map((location) => [location.lat, location.lng])
);
map.fitBounds(bounds);
