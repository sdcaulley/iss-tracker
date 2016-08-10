// To contain the Google API map JS
// To be updated to dynamic locations from API call. For now targets codefellows PDX
var issLat = 45.5163719;
var issLng = -122.6765228;

/*
// Self invoking anonymous function to build the map
(function(window, google) {

	// Options here can be added as necessary, Check the google maps dev docs for full list
	var options = {
		center: {
			lat: issLat,
			lng: issLng
		},
		zoom: 10
	}
	// Targeting the map location in iss.html
	mapSpot = document.getElementById('mapCanvas'),

	// Building a map in the location specified
	map = new google.maps.Map(mapSpot, options);

}(window, google));
*/


var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('mapCanvas'), {
		center: {lat: issLat, lng: issLng},
		zoom: 8
	});
}
