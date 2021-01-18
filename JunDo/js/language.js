var curPage = document.location.href;

if(curPage.includes("_en")) {
  var but = document.getElementById("language_select");
  if(but != null) {
    console.log("repositionnement du bouton");
    but.style.top = "30px";
  } else {
    console.error("Le bouton de langue n'existe pas ou n'a pas été trouvé.");
  }
}


function changeLanguage() {
  var curPage = document.location.href;
  var newPage = "";

  if(curPage.includes("_en")) {
    var newPage = curPage.replace("_en", "");
  } else {
    var newPage = curPage.replace(".html", "_en.html");
  }

  document.location.href = newPage;
}
