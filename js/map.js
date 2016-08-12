// To contain the Google API map JS
var issLocation = {};
var passTimes = {};
var issLat = 45.5163719;
var issLng = -122.6765228;
var map;
var numberAstro;
var namesInSpace;

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

function passTimes(data) {
 // Parking for future code
}

// Receives the overhead pass estimates from JSONP
var script = document.createElement('script');
script.src = 'http://api.open-notify.org/astros.json?callback=inSpace'
document.head.appendChild(script);
console.log("Astronaut script Loaded");
script.parentNode.removeChild(script);
console.log("Astronaut script cleared");

function inSpace(data) {
	numberAstro = data.number;
	namesInSpace = data.people;
}

// Draws the map
function initMap() {
	geocoder = new google.maps.Geocoder()
	map = new google.maps.Map(document.getElementById('mapCanvas'), {
		center: {lat: issLat, lng: issLng},
		zoom: 7
	});
}
