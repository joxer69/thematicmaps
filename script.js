// Kreiranje Leaflet karte
var map = L.map('map').setView([0, 0], 2);

// Dodavanje pločica (tiles) na kartu
//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    maxZoom: 19,
//}).addTo(map);

// Učitavanje podataka o gustoći naseljenosti iz data.js datoteke
L.geoJSON(countriesData, {
    style: function(feature) {
        var density = feature.properties.density;
        return {
            fillColor: getColor(density),
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
        };
    }
}).addTo(map);

// Funkcija za određivanje boje prema gustoći naseljenosti
function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}
