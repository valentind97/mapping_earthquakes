// Add console.log to check to see if our code is working.
console.log("working");

// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
let map = L.map("mapid", {
  center: [
    40.7, -94.5
  ],
  zoom: 4
});
  
  // Add a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data (c); <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
