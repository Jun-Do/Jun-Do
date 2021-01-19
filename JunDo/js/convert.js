
function updateResult(target) {
  if(target == "input_yen") {
    inputVal = Number(document.getElementById("input_euro").value.replace("€", ""))
    outputVal = document.getElementById("input_yen")
    if (!isNaN(inputVal)) {
      outputVal.value = (Number(inputVal)/0.008) + " ¥"
      console.log("Valeur convertie !")
    }

  } else if(target == "input_euro") {
    inputVal = Number(document.getElementById("input_yen").value.replace("¥", ""))
    outputVal = document.getElementById("input_euro")
    if (!isNaN(inputVal)) {
      outputVal.value = (Number(inputVal)*0.008) + " €"
    }
  
  } else {
    console.error("Le paramètre entré ne correspond pas à celui attendu.")
  }
}

updateResult("input_yen")
console.log("Cahrgement terminé.")