/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: 
      Date:   

      Filename: project02-02.js
 */
 
function verifyForm()
{
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;

      (name && email && phone) 
                  ? window.alert("Thank you!")
                  : window.alert("Please fill in all fields!");
}

//add an event listener to the submit button to call the verify form
//when the button is clicked
document.getElementById("submit").addEventListener("click", verifyForm);