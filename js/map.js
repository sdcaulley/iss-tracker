// To contain the Google API map JS
var issLocation = {}; // initiate empty lat-long object
var passTimes = {}; // initiate empty pass time data obj
var issLat = 45.5163719; // code fellows latitude
var issLng = -122.6765228; // code fellows longitude
var map; // google map object
var numberAstro; // API created objects with qty of people in space
var namesInSpace; // API created objects with Astronaut names and current vessels
var passEstimate; // API created object of the overhead pass estimate
var issLocRequests = 0; // counts every time new location is recieved
var issOverlay; // Google map ISS overlay
var parkedDataIss // Holds lat-long obj
var geocoder; // Google API geocoder
var reticleMarker;
var reticleImage; //iss png
var geoPlace; // reverse geocode location string
var mapOptions = {
 center: {lat: issLat, lng: issLng},
 zoom: 5,
 mapTypeId: 'satellite',
 draggable: false,
 scrollwheel: false,
}


// Draws the map
function initMap() {
	geocoder = new google.maps.Geocoder();
	map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);
}


// Recieves the ISS location from JSONP
function findISS() {
	var script = document.createElement('script');
	script.src = 'http://api.open-notify.org/iss-now.json?callback=issLoc'
	document.head.appendChild(script);
	// console.log("Iss Location updated");
	script.parentNode.removeChild(script);
	// console.log("Iss location script cleared");
	issLocRequests++;
	// document.getElementById("userIsLocatedAt").textContent =
	document.getElementById("userISSLocateReq").textContent = "Telemetry Request: 0"+issLocRequests;
	// console.log(issLocRequests);
}


// ISS location data is stored in this
function issLoc(data) {
	issLat = data.iss_position.latitude;
	issLng = data.iss_position.longitude;
	issLocation = data;
	parkedDataIss = new google.maps.LatLng(issLat, issLng);
	map.setCenter(new google.maps.LatLng(issLat, issLng));
	// console.log("issLocation");
  document.getElementById("theISSIsLocatedAt").textContent = "Latitude: "+issLat+"ISS Longitude: "+issLng;
}


//Gets new ISS data and sets map center every 5 seconds
var locationTimer = setInterval(findISS, 5000);
var geoTimer = setInterval(geoTracked, 5000);


// Receives the overhead pass estimates from JSONP
function getPass(lat, lng) {
	var script = document.createElement('script');
	script.src = 'http://api.open-notify.org/iss-pass.json?lat='+lat+'&lon='+lng+'&callback=passTimes'
	document.head.appendChild(script);
	console.log("passTimes script Loaded");
	script.parentNode.removeChild(script);
	console.log("passTimes script cleared");
  console.log(script)
}


// contains the trackign data from a overhead pass API request
function passTimes(data) {
 passEstimate = data;
}


// Receives the overhead pass estimates from JSONP
function getAstronaut() {
	var script = document.createElement('script');
	script.src = 'http://api.open-notify.org/astros.json?callback=inSpace'
	document.head.appendChild(script);
	console.log("Astronaut script Loaded");
	script.parentNode.removeChild(script);
	console.log("Astronaut script cleared");
}


// Contains the Data from getAstronaut() which gives names and current craft
function inSpace(data) {
	numberAstro = data.number; // Qty of people currently in space
	namesInSpace = data.people; // Names of the people in space
}


function setMarker() {
  reticleImage = new google.maps.MarkerImage(
    'img/logo_64px.png',          // marker image
    new google.maps.Size(63, 63),    // marker size
    new google.maps.Point(0,0),      // marker origin
    new google.maps.Point(32, 32));  // marker anchor point
    var reticleShape = {
      coords: [32,32,32,32],           // 1px
      type: 'rect'                     // rectangle
    }

  console.log("blocked");
  reticleMarker = new google.maps.Marker({
    position: parkedDataIss,
    map: map,
    icon: reticleImage,
    shape: reticleShape,
    optimized: false,
    zIndex: 5
  });


  google.maps.event.addListener(map, 'bounds_changed',
    function(){reticleMarker.setPosition(map.getCenter());});
}


function geoTracked() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+issLat+', '+issLng+'&key=AIzaSyDajRBtGGCaz958ss2pOvejMODnI4lhrr0', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var data = JSON.parse(request.responseText);
      console.log("got JSON");
      geoPlace = data;
    } else {
      // We reached our target server, but it returned an error
      console.log("Geo JSON failure");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();

	document.getElementById("stringISSLoc").textContent = "Current/Last Known: "+geoPlace.results[0].formatted_address;
};

window.onload = setMarker
