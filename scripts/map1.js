var map = L.map('map').setView([51.51148042452153, -0.11436186098910175], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.416318519315304, -0.25407877997597933]).addTo(map);

marker.bindPopup("<b>New Victoria Hospital");

var marker2 = L.marker([51.51900974550507, -0.11566754521495307]).addTo(map);

marker2.bindPopup("<b>Dottore London");

var marker3 = L.marker([51.38636678673475, -0.05600745279357429]).addTo(map);

marker3.bindPopup("<b>The Shirley Oaks Hospital");

var marker4 = L.marker([51.39040037117009, -0.10928572883594538]).addTo(map);

marker4.bindPopup("<b>Croydon University Hospital");

var marker5 = L.marker([51.38004146193365, -0.2207295033601805]).addTo(map);

marker5.bindPopup("<b>Spire Saint Anthony's Hospital");

var marker6 = L.marker([51.51871759871615, -0.11549398715124518]).addTo(map);

marker6.bindPopup("<b>Dottore London");

marker.addEventListener('click', function() {
  document.getElementById('title-map1').style.display = "block";
  document.getElementById('address1').style.display = "block";

  document.getElementById('title-map2').style.display = "none";
  document.getElementById('address2').style.display = "none";

  document.getElementById('title-map3').style.display = "none";
  document.getElementById('address3').style.display = "none";

  document.getElementById('title-map4').style.display = "none";
  document.getElementById('address4').style.display = "none";

  document.getElementById('title-map5').style.display = "none";
  document.getElementById('address5').style.display = "none"; 
   
  document.getElementById('title-map6').style.display = "none";
  document.getElementById('address6').style.display = "none"; 
});
marker2.addEventListener('click', function() {
  document.getElementById('title-map2').style.display = "block";
  document.getElementById('address2').style.display = "block";

  document.getElementById('title-map1').style.display = "none";
  document.getElementById('address1').style.display = "none";

  document.getElementById('title-map3').style.display = "none";
  document.getElementById('address3').style.display = "none";

  document.getElementById('title-map4').style.display = "none";
  document.getElementById('address4').style.display = "none";

  document.getElementById('title-map5').style.display = "none";
  document.getElementById('address5').style.display = "none"; 
   
  document.getElementById('title-map6').style.display = "none";
  document.getElementById('address6').style.display = "none"; 
});
marker3.addEventListener('click', function() {
  document.getElementById('title-map3').style.display = "block";
  document.getElementById('address3').style.display = "block";

  document.getElementById('title-map1').style.display = "none";
  document.getElementById('address1').style.display = "none";

  document.getElementById('title-map2').style.display = "none";
  document.getElementById('address2').style.display = "none";

  document.getElementById('title-map4').style.display = "none";
  document.getElementById('address4').style.display = "none";

  document.getElementById('title-map5').style.display = "none";
  document.getElementById('address5').style.display = "none"; 
   
  document.getElementById('title-map6').style.display = "none";
  document.getElementById('address6').style.display = "none"; 
});
marker4.addEventListener('click', function() {
  document.getElementById('title-map4').style.display = "block";
  document.getElementById('address4').style.display = "block";

  document.getElementById('title-map1').style.display = "none";
  document.getElementById('address1').style.display = "none";

  document.getElementById('title-map2').style.display = "none";
  document.getElementById('address2').style.display = "none";

  document.getElementById('title-map3').style.display = "none";
  document.getElementById('address3').style.display = "none";

  document.getElementById('title-map5').style.display = "none";
  document.getElementById('address5').style.display = "none"; 
   
  document.getElementById('title-map6').style.display = "none";
  document.getElementById('address6').style.display = "none"; 
});

marker5.addEventListener('click', function() {
  document.getElementById('title-map5').style.display = "block";
  document.getElementById('address5').style.display = "block"; 

  document.getElementById('title-map4').style.display = "none";
  document.getElementById('address4').style.display = "none";

  document.getElementById('title-map1').style.display = "none";
  document.getElementById('address1').style.display = "none";

  document.getElementById('title-map2').style.display = "none";
  document.getElementById('address2').style.display = "none";

  document.getElementById('title-map3').style.display = "none";
  document.getElementById('address3').style.display = "none";

  document.getElementById('title-map6').style.display = "none";
  document.getElementById('address6').style.display = "none";
});

marker6.addEventListener('click', function() {
  document.getElementById('title-map6').style.display = "block";
  document.getElementById('address6').style.display = "block"; 

  document.getElementById('title-map5').style.display = "none";
  document.getElementById('address5').style.display = "none"; 

  document.getElementById('title-map4').style.display = "none";
  document.getElementById('address4').style.display = "none";

  document.getElementById('title-map1').style.display = "none";
  document.getElementById('address1').style.display = "none";

  document.getElementById('title-map2').style.display = "none";
  document.getElementById('address2').style.display = "none";

  document.getElementById('title-map3').style.display = "none";
  document.getElementById('address3').style.display = "none";
});

setTimeout(function () { map.invalidateSize() }, 3000);


document.getElementById('title-map1').style.display = "block";
document.getElementById('address1').style.display = "block";