/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: 
      Date:   

      Filename: project02-04.js
 */
 //Define constants
 const CHICKEN_PRICE = 10.95;
 const HALIBUT_PRICE = 13.95;
 const BURGER_PRICE = 9.95;
 const SALMON_PRICE = 18.95;
 const SALAD_PRICE = 7.95;
 const SALES_TAX = 0.07;

 //add onclick actions tot each element of the form
 document.getElementById("chicken").onclick = calcTotal;
 document.getElementById("halibut").onclick = calcTotal;
 document.getElementById("burger").onclick = calcTotal;
 document.getElementById("salmon").onclick = calcTotal;
 document.getElementById("salad").onclick = calcTotal;

 //define the function to calculate the total
 function calcTotal()
 {
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   cost += (buyChicken) ? CHICKEN_PRICE : 0;
   cost += (buyHalibut) ? HALIBUT_PRICE : 0;
   cost += (buyBurger) ? BURGER_PRICE : 0;
   cost += (buySalmon) ? SALMON_PRICE : 0;
   cost += (buySalad) ? SALAD_PRICE : 0;

   //update the foodTotal element in the HTML with a formatted cost value ($23.45)
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

   //Calculate the tax and update the foodTax element in the HTML with a formatted tax value
   let tax = cost * SALES_TAX;
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   //calculate the total cost of the food
   let totalCost = cost + tax;
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
 }

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2); //$32.54
 }
