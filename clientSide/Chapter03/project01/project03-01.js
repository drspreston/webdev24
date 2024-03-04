/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < menuItems.length-1; i++)
{
      menuItems[i].addEventListener("click", calcTotal);
}

function calcTotal()
{
      let orderTotal = 0;

      for (let i = 0; i < menuItems.length-1; i++)
      {
            if (menuItems[i].checked)
            {
                  orderTotal += Number(menuItems[i].value);
            }
      }

      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }