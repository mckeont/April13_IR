// setup.js
var map = L.map('map', {
  center: [20.0, 10.0],  // Modify as needed for your application's focus area
  zoom: 3,               // Adjust based on your preference
  minZoom: 2,            // Optional: minimum zoom level
  maxZoom: 19            // Optional: maximum zoom level
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);
