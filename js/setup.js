// setup.js
var map = L.map('map', {
  center: [20.0, 10.0],  // Modify as needed for your application's focus area
  zoom: 3,               // Adjust based on your preference
  minZoom: 2,            // Optional: minimum zoom level
  maxZoom: 19            // Optional: maximum zoom level
});

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles © Esri — Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);
