// To contain the Google API map JS
var issLocation = {}; // initiate empty lat-long object
var passTimes = {}; // initiate empty pass time data obj
var issLat = 45.5163719; // code fellows latitude
var issLng = -122.6765228; // code fellows longitude
var map; // google map object
var numberAstro; // API created objects with qty of people in space
var namesInSpace; // API created objects with Astronaut names and current vessels

// Recieves the ISS location from JSONP
var script = document.createElement('script');
script.src = 'http://api.open-notify.org/iss-now.json?callback=issLoc'
document.head.appendChild(script);
console.log("Iss Location updated");
script.parentNode.removeChild(script);
console.log("Iss location script cleared");

// ISS location data is stored in this
function issLoc(data) {
	issLat = data.iss_position.latitude;
	issLng = data.iss_position.longitude;
	issLocation = data;
	initMap();
}

// Receives the overhead pass estimates from JSONP
function getPass(lat, lng) {
	var script = document.createElement('script');
	script.src = 'http://api.open-notify.org/iss-pass.json?lat='+lat+'&lon='+ln+'&callback=passTimes'
	document.head.appendChild(script);
	console.log("passTimes script Loaded");
	script.parentNode.removeChild(script);
	console.log("passTimes script cleared");
}

// contains the trackign data from a overhead pass API request
function passTimes(data) {
 // Parking for future code
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

// Draws the map
function initMap() {
	geocoder = new google.maps.Geocoder()
	map = new google.maps.Map(document.getElementById('mapCanvas'), {

	center: {lat: issLat, lng: issLng},
	zoom: 7,
	disableDefaulyUI: true,
	scrollwheel: false,
	draggable: false,
	mapTypeID: google.maps.MapTypeId.SATELLITE,
	});
}

var geocoder

// grab lat lng from user submit
function grabLatLng() {
	var addrss = JSON.parse(sessionStorage.getItem('address'))
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
			userLatLng = results[0].geometry.location
      console.log(results[0].geometry.location)
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
