"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: 
      Date:   

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

//step 3
if(localStorage.sbloggerVisit)
{
      //it exists!
      //step 4
      let storedLastDate = localStorage.getItem("sbloggerVisit");

      //step 5
      lastVisitDate.textContent = storedLastDate;

      //step 6
      let lastDate = new Date(storedLastDate);

      //step 7
      for(let items of articleDates)
      {
            //step 7a
            let articleDate = new Date(items.textContent);
            //step 7b
            if (articleDate > lastDate)
            {
                  items.innerHTML += "<strong>NEW</strong>";
            }
      }
}
else
{
      //localStorage does not exist!
      //step 8a
      lastVisitDate.textContent = "Welcome to SBlogger";
      //step 8b
      for(let items of articleDates)
      {
            items.innerHTML += "<strong>NEW</strong>";
      }
}
//step 9a
let currentDate = new Date("9/12/2024");
//step 9b
localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());