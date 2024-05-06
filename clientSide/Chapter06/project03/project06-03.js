"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: 
      Date:   

      Filename: project06-03.js
*/

//useShip variable to reference the element with the id “useShip”. 
let useShip = document.getElementById("useShip");

//Add an event listener to useShip to run the copyShippingToBilling() 
//function when clicked.
useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling()
{
      //function that copies values from the shipping fields to 
      //corresponding billing fields. Within the function, 
      //insert an if statement that tests whether useShip is 
      //checked and if it is, do the following:
      if (useShip.checked)
      {
            //Set the value of the firstnameBill field to the value of the 
            //firstnameShip field.
            document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;

            //Repeat the previous step to set the value of the lastnameBill, 
            //address1Bill, address2Bill, cityBill, countryBill, codeBill 
            //fields to the values of their corresponding fields in the 
            //shipping part of the form.
            document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
            document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
            document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
            document.getElementById("cityBill").value = document.getElementById("cityShip").value;
            document.getElementById("countryBill").value = document.getElementById("countryShip").value;
            document.getElementById("codeBill").value = document.getElementById("codeShip").value;

            //Set the selectedIndex property of the stateBill field to the 
            //value of the selectedIndex property of the stateShip field.
            document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
      }
}

//Declare the formElements variable and using the querySelectorAll() method store 
//within it a node list corresponding to elements selected with “input[type=’text’]”.
let formElements = document.querySelectorAll("input[type='text']");

//Declare the fieldCount variable with a value equal to the length of the formElements node list.
let fieldCount = formElements.length;

//Declare the errorBox referencing the element with the id “errorBox”.
let errorBox = document.getElementById("errorBox");

//for loop that iterates through each element in the formElements 
//node list and for each element apply an event listener that calls 
//the showValidationError() function in response to the invalid event.
for (let i = 0; i < fieldCount; i++)
{
      formElements[i].addEventListener("invalid", showValidationError);
}

//showValidationError(evt) function and add the following commands to it:
function showValidationError(evt)
{
      //For the event object, evt, apply the preventDefault() method to prevent 
      //the browser from applying the native browser tools to respond to invalid data.
      evt.preventDefault();

      //Set the textContent property of errorBox to the text string “Complete all highlighted fields”.
      errorBox.textContent = "Complete all highlighted fields!";
}