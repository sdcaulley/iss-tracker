/* // start
function Astronaut(name, craft) {
	this.name = name;
	this.craft = craft;
	this.image = "";
	this.biography = ;
}

Astronaut.prototype.addBio(biography) {
	this.biography = biography;
}

Astronaut.prototype.addPicture(imgLink) {
	this.image = imgLink;
} */

// grab lat lng from user submit
var geocoder

function grabLatLng() {
	var address = document.getElementById('address').value
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      console.log(results[0].geometry.location)
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

//function to load new page
