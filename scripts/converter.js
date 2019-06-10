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
  if (option == "DISTANCIA") {
    document.getElementById("temp").style.display = "none";
    document.getElementById("mass").style.display = "none";
    document.getElementById("dist").style.display = "block";
    document.getElementById("time").style.display = "none";
  }
  if (option == "TEMPERATURA") {
    document.getElementById("dist").style.display = "none";
    document.getElementById("mass").style.display = "none";
    document.getElementById("temp").style.display = "block";
    document.getElementById("time").style.display = "none";
  }

  if (option == "PESO") {
    document.getElementById("dist").style.display = "none";
    document.getElementById("temp").style.display = "none";
    document.getElementById("mass").style.display = "block";
    document.getElementById("time").style.display = "none";
  }

  if (option == "TEMPO") {
    document.getElementById("dist").style.display = "none";
    document.getElementById("temp").style.display = "none";
    document.getElementById("mass").style.display = "none";
    document.getElementById("time").style.display = "block";
  }
  if (option == "SELECT") {
    document.getElementById("dist").style.display = "none";
    document.getElementById("temp").style.display = "none";
    document.getElementById("mass").style.display = "none";
    document.getElementById("time").style.display = "none";
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

  //Beginning of Kilometro
  if (one == "Kilometro" && two == "Kilometro") {
    dresult.value = parseFloat(dinput.value) + "km";
  }

  if (one == "Kilometro" && two == "Metro") {
    dresult.value = parseFloat(parseFloat(dinput.value) * 1000) + "m";
  }

  if (one == "Kilometro" && two == "Centimetro") {
    dresult.value = parseFloat(parseFloat(dinput.value) * 100000) + "cm";
  }

  //Beginning of Metro

  if (one == "Metro" && two == "Kilometro") {
    dresult.value = parseFloat(parseFloat(dinput.value) * 0.001) + "km";
  }

  if (one == "Metro" && two == "Centimetro") {
    dresult.value = parseFloat(parseFloat(dinput.value) * 100) + "cm";
  }

  //Beginning of Centimetro
  if (one == "Centimetro" && two == "Kilometro") {
    dresult.value = parseFloat(parseFloat(dinput.value) * 0.00001) + "km";
  }

  if (one == "Centimetro" && two == "Metro") {
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

  if (one == "Tonelada" && two == "Kilograma") {
    mresult.value = parseFloat(parseFloat(minput.value) * 1000) + "Kg";
  }

  if (one == "Tonelada" && two == "Grama") {
    mresult.value = parseFloat(parseFloat(minput.value) * 1000000) + "g";
  }

  //kilogram

  if (one == "Kilograma" && two == "Tonelada") {
    mresult.value = parseFloat(parseFloat(minput.value) * 0.001) + "tn";
  }

  if (one == "Kilograma" && two == "Grama") {
    mresult.value = parseFloat(parseFloat(minput.value) * 1000) + "g";
  }

  //gram

  if (one == "Grama" && two == "Kilograma") {
    mresult.value = parseFloat(parseFloat(minput.value) * 0.001) + "kg";
  }

  if (one == "Grama" && two == "Tonelada") {
    mresult.value = parseFloat(parseFloat(minput.value) * 0.000001) + "tn";
  }

  if (minput.value == "") {
    alert("Please enter a valid number value to be converted");
    mresult.value = "";
  }
}

// time
function timenow() {
  var one, two;
  one = timea.value;
  two = timeb.value;
  tmresult.value = "";
  tminput.focus();

  //Beginning of hours
  if (one == "Hora" && two == "Minuto") {
    tmresult.value = parseFloat(parseFloat(tminput.value) * 60) + "min";
  }

  if (one == "Hora" && two == "Segundo") {
    tmresult.value = parseFloat(parseFloat(tminput.value) * 3600) + "sec";
  }
  // minutes
  if (one == "Minuto" && two == "Hora") {
    tmresult.value = parseFloat(parseFloat(tminput.value) / 60) + "h";
  }

  if (one == "Minuto" && two == "Segundo") {
    tmresult.value = parseFloat(parseFloat(tminput.value) * 60) + "sec";
  }

  // seconds
  if (one == "Segundo" && two == "Hora") {
    tmresult.value = parseFloat(parseFloat(tminput.value) / 3600) + "sec";
  }

  if (one == "Segundo" && two == "Minuto") {
    tmresult.value = parseFloat(parseFloat(tminput.value) / 60) + "h";
  }

  if (tminput.value == "") {
    alert("Please enter a valid number value to be converted");
    tmresult.value = "";
  }
}
