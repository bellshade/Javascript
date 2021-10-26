let container = document.getElementById("geo-data"); // menyeleksi container
let btn = document.getElementById("geo-btn"); // menyeleksi button

function show(position){
    container.innerHTML = `
    <div>longitude: ${position.coords.longitude}</div>
    <br/>
    <div>latitude: ${position.coords.latitude}</div>
    `; // mengisi data di container
    var mymap = L.map("geo-map").setView([-5, 120], 4); // initialisasi leaflet map
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
}).addTo(mymap);
    
    L.marker([position.coords.latitude,position.coords.longitude]).addTo(mymap) // menandai lokasi dengan marker
    .bindPopup(`<div>lokasi mu disini: <br>latitude: ${position.coords.latitude} <br>longitude: ${position.coords.longitude}</div>`); // mengisi data di pop-up 
    
}
function showGeoData() {
    navigator.geolocation.getCurrentPosition(show); // menggunakan geolocation web api
}
btn.addEventListener("click",showGeoData);