//BEGINNING OF SCRIPT CODE FOR CONVERSION
//DECLARATION OF VARIABLES
var one, two;
//BEGINNING OF FUNCTION.
function now() {
  one = boxa.value;
  two = boxb.value;
  result.value = "";
  maininput.focus();

  if (one == "Celsius" && two == "Fahrenheit") {
    result.value = parseFloat(parseFloat(maininput.value) * 1.8 + 32) + "F";
  }

  if (one == "Fahrenheit" && two == "Celsius") {
    result.value =
      parseFloat((parseFloat(maininput.value) - 32) / 1.8) + " " + "Degree(s)";
  }

  if (maininput.value == "") {
    alert("Please enter a valid number value to be converted");
    result.value = "";
  }
}
function clrs() {
  result.value = "";
}

//SCRIPT FOR CALLING CONVERSION OPTRIONS
var option;
// DISTANCE FUNCTION
function showdistanceoptions() {
  option = head.value;
  if (option == "DISTANCE") {
    document.getElementById("temp").style.display = "none";
    document.getElementById("money").style.display = "none";
    document.getElementById("mass").style.display = "none";
    document.getElementById("dist").style.display = "block";
  }
  if (option == "TEMPERATURE") {
    document.getElementById("dist").style.display = "none";
    document.getElementById("mass").style.display = "none";
    document.getElementById("money").style.display = "none";
    document.getElementById("temp").style.display = "block";
  }
  if (option == "CURRENCY") {
    document.getElementById("dist").style.display = "none";
    document.getElementById("mass").style.display = "none";
    document.getElementById("temp").style.display = "none";
    document.getElementById("money").style.display = "block";
  }
  if (option == "WEIGHT") {
    document.getElementById("dist").style.display = "none";
    document.getElementById("money").style.display = "none";
    document.getElementById("temp").style.display = "none";
    document.getElementById("mass").style.display = "block";
  }
  if (option == "SELECT") {
    document.getElementById("dist").style.display = "none";
    document.getElementById("money").style.display = "none";
    document.getElementById("temp").style.display = "none";
    document.getElementById("mass").style.display = "none";
    alert("Please select an option to be converted in the select box");
  }
}

// BEGINNING OF SCRIPT CODE FOR CONVERSION OF DISTANCE
function distnow() {
  var one, two;
  one = dista.value;
  two = distb.value;
  dresult.value = "";
  dinput.focus();

  //Beginning of Kilometer
  if (one == "Kilometer" && two == "Kilometer") {
    dresult.value = parseFloat(dinput.value) + "km";
  }

  if (one == "Kilometer" && two == "Meter") {
    dresult.value = parseFloat(parseFloat(dinput.value) * 1000) + "m";
  }

  if (one == "Kilometer" && two == "Centimeter") {
    dresult.value = parseFloat(parseFloat(dinput.value) * 100000) + "cm";
  }

  //Beginning of Meter

  if (one == "Meter" && two == "Kilometer") {
    dresult.value = parseFloat(parseFloat(dinput.value) * 0.001) + "km";
  }

  if (one == "Meter" && two == "Centimeter") {
    dresult.value = parseFloat(parseFloat(dinput.value) * 100) + "cm";
  }

  //Beginning of Centimeter
  if (one == "Centimeter" && two == "Kilometer") {
    dresult.value = parseFloat(parseFloat(dinput.value) * 0.00001) + "km";
  }

  if (one == "Centimeter" && two == "Meter") {
    dresult.value = parseFloat(parseFloat(dinput.value) * 0.01) + "m";
  }

  if (dinput.value == "") {
    alert("Please enter a valid number value to be converted");
    dresult.value = "";
  }
}

//BEGINNING OF FUNCTION.
function tempnow() {
  var one, two;
  one = tempa.value;
  two = tempb.value;
  tresult.value = "";
  tinput.focus();

  if (one == "Celsius" && two == "Fahrenheit") {
    tresult.value = parseFloat(parseFloat(tinput.value) * 1.8 + 32) + "F";
  }

  if (one == "Fahrenheit" && two == "Celsius") {
    tresult.value =
      parseFloat((parseFloat(tinput.value) - 32) / 1.8) + " " + "Degree(s)";
  }

  if (tinput.value == "") {
    alert("Please enter a valid number value to be converted");
    tresult.value = "";
  }
}

//DECLARATION OF VARIABLES
var one, two;
//BEGINNING OF FUNCTION.
function massnow() {
  one = massa.value;
  two = massb.value;
  result.value = "";
  minput.focus();

  if (one == "Tone" && two == "Kilogram") {
    mresult.value = parseFloat(parseFloat(minput.value) * 1000) + "Kg";
  }

  if (one == "Tone" && two == "Gram") {
    mresult.value = parseFloat(parseFloat(minput.value) * 1000000) + "g";
  }

  //kilogram

  if (one == "Kilogram" && two == "Tone") {
    mresult.value = parseFloat(parseFloat(minput.value) * 0.001) + "tn";
  }

  if (one == "Kilogram" && two == "Gram") {
    mresult.value = parseFloat(parseFloat(minput.value) * 1000) + "g";
  }

  //gram

  if (one == "Gram" && two == "Kilogram") {
    mresult.value = parseFloat(parseFloat(minput.value) * 0.001) + "kg";
  }

  if (one == "Gram" && two == "Tone") {
    mresult.value = parseFloat(parseFloat(minput.value) * 0.000001) + "tn";
  }

  if (minput.value == "") {
    alert("Please enter a valid number value to be converted");
    mresult.value = "";
  }
}
