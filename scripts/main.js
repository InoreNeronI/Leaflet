import L from 'leaflet';

const map = L.map('map').setView([43.33904, -1.78938], 13);
L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoiZW5ldHoiLCJhIjoiY2s5MmxzNW1qMDFhdzNocGJzamxydTMzciJ9.pkPbcC4N9MRUBM4xFspT4A',
  }
).addTo(map);
const marker = L.marker([43.33904, -1.78938]).addTo(map);
const circle = L.circle([43.339, -1.79], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);
const polygon = L.polygon([
  [43.329, -1.78],
  [43.323, -1.76],
  [43.34, -1.747],
]).addTo(map);
const popup = L.popup()
  .setLatLng([43.32, -1.79])
  .setContent('I am a standalone popup.')
  .openOn(map);
