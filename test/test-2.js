function celsiusToFahrenheit(celsius) {
var celsiusToFahrenheitFormula = ((celsius * 1.8) + 32);
var rounded = Math.round(celsiusToFahrenheitFormula);
return(celsius + 'ºC equals ' + celsiusToFahrenheitFormula + 'ºF');
}

function fahrenheitToCelsius(fahrenheit) {

var fahrenheitToCelsiusFormula = ((fahrenheit - 32)/1.8);

return(fahrenheit + 'ºF equals ' + fahrenheitToCelsiusFormula + 'ºC');

}

function calculate() {

//Getting the value
var myValue = $('#my-value');
var celsiusVar = myValue.val();

//Excuting the function
var fahrenheitVar = celsiusToFahrenheit(celsiusVar)

//Show the value in the interface
var result = $("#result");
result.html(fahrenheitVar);

}

var myButton = $("#my-button");
myButton.click(calculate);