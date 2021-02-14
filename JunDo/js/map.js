var mapGoogle = document.getElementById("map_google");
var mapLocal = document.getElementById("map_local");

var onMapLocal = false;

function ChangeMap() {
  if (onMapLocal) {
    mapLocal.style.display = "none";
    mapGoogle.style.display = "block";
    onMapLocal = false;
    console.log("great");
  }
  else {
    mapLocal.style.display = "block";
    mapGoogle.style.display = "none";
    onMapLocal = true;
    console.log("great");
  }
}