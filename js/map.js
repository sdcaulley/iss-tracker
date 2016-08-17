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
var geocoder;
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
}


//Gets new ISS data and sets map center every 5 seconds
var locationTimer = setInterval(findISS, 5000);

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
	console.log(data);
	for (i = 0; i < data.people.length; i++) {
    console.log(data.people[i].name+" is currently aboard the "+data.people[i].craft); // Console logs names and craft in calling getAstronaut()
	}
}
