var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        })
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

function closeModal () {
  modal.style.display = "none"
}

var close = document.getElementById('modalButton')
close.addEventListener('click', closeModal)

// grab lat lng from user submit
function grabLatLng() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      alert(results[0].geometry.location)
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

var latLngFunc = document.getElementById('modalButton')
latLngFunc.addEventListener('click', grabLatLng)
