var mapGoogle = document.getElementById("map_google");
var mapLocal = document.getElementById("map_local");
var mapLocalInfo = document.getElementById("map_local_info");

var onMapLocal = false;

function ChangeMap() {
  if (onMapLocal) {
    mapLocal.style.display = "none";
    mapLocalInfo.style.display = "none";
    mapGoogle.style.display = "block";
    onMapLocal = false;
    console.log("great");
  }
  else {
    mapLocal.style.display = "block";
    mapLocalInfo.style.display = "block";
    mapGoogle.style.display = "none";
    onMapLocal = true;
    console.log("great");
  }
}