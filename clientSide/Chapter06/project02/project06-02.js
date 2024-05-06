"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: 
      Date:   

      Filename: project06-02.js
*/

//event listener that runs an anonymous function when the page loads.
window.addEventListener("load", function() 
{
      //add a statement that uses the querySelectorAll() method 
      //to create a node list of all elements matching the CSS 
      //selector form#govLinks select. Store the node list in 
      //the allSelect variable.
      let allSelect = document.querySelectorAll("form#govLinks select");

      //for loop that iterates through all of the contents of 
      //the allSelect node list. At each iteration of the allSelect 
      //node list do the following:
      for (let i = 0; i < allSelect.length; i++)
      {
            //a. Apply the onchange event handler to allSelect[i] to run an 
            //anonymous function when the selection list option is changed. 
            //Add the parameter evt to the anonymous function.
            allSelect[i].onchange = function(evt) 
            {
                  //b. Within the nested anonymous function retrieve the value 
                  //property of evt.target and store it in the linkURL variable.
                  let linkURL = evt.target.value;

                  //c. Within the nested anonymous function: Use the window.open() 
                  //method to open a new browser window with linkURL as the url of 
                  //the window. You do not have to set a name for the window or any 
                  //window options. Store the window under the newWin variable.
                  let newWin = window.open(linkURL);
            }
      }
});
