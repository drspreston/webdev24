"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 
      Author: 
      Date:   
      
      Filename: js09b.js
 */

//Retrieve the text of the query string
let qString = location.search.slice(1);
// console.log(qString);

//Replace the encoded characters in the query string
qString = qString.replace(/\+/g, " ");
qString = decodeURIComponent(qString);
// console.log(qString);

//Split the fieldname pairs into separate array items
let formData = qString.split(/&/g); //[name=asdf, address=asdf, email=asdf@asdf.com, ...]
for (let items of formData)
{
      let fieldValuePair = items.split(/=/);    //[name, asdf]
      let fieldName = fieldValuePair[0];        //name
      let fieldValue = fieldValuePair[1];       //asdf

      //Create a labe containing the field name
      let fieldLabel = document.createElement("label"); //<label>Name</label>
      fieldLabel.textContent = fieldName;
      document.getElementById("contactInfo").appendChild(fieldLabel);

      //Create a disabled input box with the field value
      let inputBox = document.createElement("input"); // <input type=text id=name name=name..
      inputBox.id = fieldName;
      inputBox.name = fieldName;
      inputBox.value = fieldValue;        //asdf
      inputBox.disabled = true;
      document.getElementById("contactInfo").appendChild(inputBox);
}

//Store data to local storage when teh user signs up
document.getElementById("signupBtn").onclick = function() {
      //data field to be saved to local storage
      let formFields = document.querySelectorAll("#contactInfo input, input[type=radio], textarea");
      for (let fields of formFields)
      {
            localStorage.setItem(fields.name, fields.value);            
      }

      console.log(localStorage);

}
