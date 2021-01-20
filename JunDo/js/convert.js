
function updateResult(target) {
  isEnglish = document.location.href.includes("_en")
  symbole = isEnglish ? "$" : "€";
  coef = isEnglish ? 0.0097 : 0.008;

  if(target == "input_yen") {
    inputVal = Number(document.getElementById("input_euro").value.replace(symbole, ""));
    outputVal = document.getElementById("input_yen");
    if (!isNaN(inputVal)) {
      outputVal.value = (Math.round((Number(inputVal)/coef)*100)/100) + " ¥";
      console.log("Valeur convertie !");
    }

  } else if(target == "input_euro") {
    inputVal = Number(document.getElementById("input_yen").value.replace("¥", ""));
    outputVal = document.getElementById("input_euro");
    if (!isNaN(inputVal)) {
      outputVal.value = (Math.round(Number(inputVal)*coef*100)/100) + " " + symbole;
    }
  
  } else {
    console.error("Le paramètre entré ne correspond pas à celui attendu.");
  }
}

updateResult("input_yen");
console.log("Cahrgement terminé.");