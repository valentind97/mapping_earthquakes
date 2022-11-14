// Add console.log to check to see if our code is working.
console.log("working");

// Create our initial map object with a center and zoom level
let map = L.map("mapid").setView ([29.9856, -95.3422], 5);

// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790],
  [30.1900, -97.6687],
  [29.9856, -95.3422],
  [43.4057, -79.3783],
  [40.6398, -73.7789]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue"
}).addTo(map);

// Get data for cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
  console.log(city),
// Could comment out the next line to get rid of the blue markers
  L.circle(city.location).addTo(map)
  });

// We create the tile layer that will be the background of our map.
// Dark Map code:
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {

// Light Map code:
 let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// Loop through the cities array and create one marker for each city.

cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/200000,
    color: 'orange',
    lineweight: 4
  })
  .bindPopup('<h2>' + city.city + ', ' + city.state + '</h2> <hr> <h3>Population ' + city.population.toLocaleString() + '</h3').addTo(map);
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
