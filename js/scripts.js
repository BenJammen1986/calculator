var add = function(number1, number2){
return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number: "));

alert(add(number1,number2));


var subtract = function(number1, number2){
return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number: "));

alert(subtract(number1,number2));


var multiply = function(number1, number2){
return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number: "));

alert(multiply(number1,number2));


var divide = function(number1, number2){
return number1/number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number: "));

alert(divide(number1,number2));



var bmi = function(weight, height){
return weight/(height*height);
};

var weight = parseInt(prompt("Enter your weight:"));
var height = parseInt(prompt("Enter your height: "));

alert(bmi(weight, height));


var celciusConv = function(tempF){
return (tempF - 32)*(5/9);
};

var fahTemp = parseInt(prompt("Enter temp in Fahrenheit: "));

alert(celciusConv(fahTemp));


var convert2Fah = function(tempC){
return tempC*(9/5) + 32;
};

var celciusTemp = parseInt(prompt("Enter temp in Celcius: "));

alert(convert2Fah(celciusTemp));
