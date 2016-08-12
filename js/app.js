
//Status bar function when you click the button
function move(){
  var elem = document.getElementById("myBar");
  var width = 10;
  var id = setInterval(frame, 1000);
  function frame(){
    if(width >= 100){
      clearInterval(id);
    }else{
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1 + '%';
    }
  }
}

// -------Navigation Bar Function ---------
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
