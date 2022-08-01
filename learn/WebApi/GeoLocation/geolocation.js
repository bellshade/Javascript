/*eslint-disable no-undef */

let long = document.getElementById("geo-long"); // menyeleksi container longitude
let lat = document.getElementById("geo-lat"); // menyeleksi container latitude
let btn = document.getElementById("geo-btn"); // menyeleksi button
let navStatus = document.getElementById("status"); // menyeleksi container

function show(position) {
  const longText = document.createTextNode(position.coords.longitude);
  const latText = document.createTextNode(position.coords.latitude);
  long.appendChild(longText); // mengisi data longitude
  lat.appendChild(latText); // mengisi data latitude
  navStatus.innerHTML = "Access Granted";
  navStatus.style.color = "green";
  let mymap = L.map("geo-map").setView([-5, 120], 4); // initialisasi leaflet map

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
  }).addTo(mymap);

  L.marker([position.coords.latitude, position.coords.longitude])
    .addTo(mymap) // menandai lokasi dengan marker
    .bindPopup(
      `<div>lokasi mu disini: <br>latitude: ${position.coords.latitude} <br>longitude: ${position.coords.longitude}</div>`
    ); // mengisi data di pop-up
}

function error(err) {
  navStatus.innerText = `ERROR: ${err.message} (${err.code})`;
  navStatus.style.color = "red";
}

function showGeoData() {
  navigator.geolocation.getCurrentPosition(show, error);
}
btn.addEventListener("click", showGeoData); // menjalankan showGeoData saat btn diklik
