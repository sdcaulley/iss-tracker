// object constructor for astronauts
function Astronaut(name, craft) {
	this.name = name;
	this.craft = craft;
	this.image = "";
	this.biography = null;
}

Astronaut.prototype.addBio(biography) {
	this.biography = biography;
}

Astronaut.prototype.addPicture(imgLink) {
	this.image = imgLink;
}
