# International Space Station Tracker

### Abstract

This project will use several APIs to track the International space station and present that data and any live webstream content available.

### Goals

1.	This project will produce a web-app that will track the international space station.
2.	The app will take user location and show it on the map and/or inform the user of the next overhead pass of the space station.
3.	The app will allow the user to select from several people, places, or mission payloads to learn more.
4.	The app will take user location and show it on the map and/or inform the user of the next overhead pass of the space station.
5.	The app will allow the user to select from several people, places, or mission payloads to learn more.
6.	Data will persist in HTML localStorage

### API usage

+	ISS location data will be taken from the Open-Notify-API http://open-notify.org/Open-Notify-API/ISS-Location-Now/

+	ISS overhead passage times will be taken from the Open-Notify-API http://open-notify.org/Open-Notify-API/ISS-Pass-Times/

+	The google maps API will be used to output the location https://developers.google.com/maps/


### FUNCTIONS & JS files

+ map.js will contains map rendering JS
	1. Primary JS is a self invoking anonymous function that grabs the element id="mapCanvas". It pulls from two variables(listed below) to create a map. The map is rendered in the iss.html page as defined in the css/style.css #mapCanvas
	2. issLoc() sets latitude and longitude vars issLong & issLgn. JSONP API data overwrites the initial location, Currently set to Code Fellows PDX. If the JSONP data is not received the map will center there.
	3. getPass(lat, Lng) returns overhead pass estimations based upon the input location. Callback data is stored in passTimes
	4. initMap() creates the map element using the google maps API
	5. var namesInSpace contains all current Astronauts and the craft they are currently aboard.
	6. var numberAstro contains the qty of Astronauts in space.


+ app.js will be the primary JS location
	1. function() will be listed here

### Pages

+ iss.html populates a google map with the google maps JS api. The initial location is the Codefellows Portland building but the map is rendered again on reception of the JSONP data.


#### Strech Goals
s
