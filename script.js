
// Wait until the entire HTML document has loaded before running this function.
// The "DOMContentLoaded" event fires when the initial HTML document has been completely loaded 
// and parsed (before stylesheets and images finish loading).
// This ensures that the JavaScript inside runs only after the page is fully ready.
document.addEventListener("DOMContentLoaded", function () {
  // listens for a "click" event on the button 
  // and calls the convertTemperature function when the button is clicked.
  document
    .querySelector("button")
    .addEventListener("click", convertTemperature);
});

// This function converts the temperature from Fahrenheit to Celsius or vice versa.
function convertTemperature() {
  let tempInput = document.getElementById("temp").value.trim(); // get the temperature value from the input field
  let output = document.getElementById("output"); // get the output element

  // check if the input field is empty
  if (tempInput === "") {
    output.innerHTML = "please enter a temperature value."; // display an error message
    return; // exit the function
  }

  // convert the temperature value to a floating-point number
  let temp = parseFloat(tempInput);
  // check if the input value is a valid number
  if (isNaN(temp)) {
    output.innerHTML = "invalid input. please enter a valid number.";   // display an error message
    return; // exit the function
  }

  // check which radio button is checked
  if (document.getElementById("f_to_c").checked) { // check if the Fahrenheit to Celsius radio button is checked
    output.innerHTML = `${(((temp - 32) * 5) / 9).toFixed(2)} °C (Celsius)`;  // convert Fahrenheit to Celsius
  } else if (document.getElementById("c_to_f").checked) { // check if the Celsius to Fahrenheit radio button is checked
    output.innerHTML = `${((temp * 9) / 5 + 32).toFixed(2)} °F (Fahrenheit)`; // convert Celsius to Fahrenheit
  } else {  // if no radio button is checked
    output.innerHTML = "please select a conversion method.";// display an error message
  }
}
W