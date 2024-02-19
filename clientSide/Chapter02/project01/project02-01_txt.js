/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: 
      Date:   

      Filename: project02-01.js
 */

function CelsiusToFahrenheit(degree)
{
      return (degree*1.8) + 32;  
}

function FahrenheitToCelsius(degree)
{
      return (degree-32)/1.8;
}


document.getElementById("cValue").onchange = function() {
      let cDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
};

document.getElementById("fValue").onchange = function() {
      let fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
};
