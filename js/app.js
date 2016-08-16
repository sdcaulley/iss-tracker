 /*// start
function Astronaut(name, craft) {
	this.name = name;
	this.craft = craft;
	this.image = "";
	this.biography = "";
}

Astronaut.prototype.addBio(biography) {
	this.biography = biography;
}

Astronaut.prototype.addPicture(imgLink) {
	this.image = imgLink;
}*/

// document.getElementById('formButton').addEventListener('click', grabLatLng)

//function to store user name
function storeUserInput () {
	var userLocation = document.getElementById('address').value
	sessionStorage.setItem('address', JSON.stringify(userLocation))
	userName = document.getElementById('name').value
	if (localStorage.getItem("userName") == null) {
		localStorage.setItem("userName", JSON.stringify(userName))
	}
}

document.getElementById('formButton').addEventListener('click', storeUserInput)

//function to check local storage for user name
function checkLocalStorage () {
	if (localStorage.getItem('userName') == null) {
		storeUserName()
	} else {
		userName = JSON.parse(localStorage.getItem('userName'))
	}
}
