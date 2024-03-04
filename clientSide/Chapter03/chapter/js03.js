/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */

//Days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                "Thursday", "Friday", "Saturday"];

//Function to write weekday names into the calendar
function addWeekdays()
{
    let i = 0;  //initial counter value

    //reference the collection of heading cells
    let headingCells = document.getElementsByTagName("th");

    //write each of the seven days into a heading cell
    while(i < 7)
    {
        headingCells[i].innerHTML = weekDays[i];
        //increment i by 1
        i++;
    }
}

//Function to write game information into the calendar
function showGames()
{
    //loop through the gameDates arrays
    for (let i = 0; i < gameDates.length; i++)
    {
        let gameInfo = "";

        //open the paragraph
        switch(gameResults[i])
        {
            case "W":
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='lose'>";
                break;    
            case "S":
                gameInfo += "<p class='suspended'>";
                break;
            case "P":
                gameInfo += "<p class='postponed'>";
                break;
        }

        //Display the game location
        if (gameLocations[i] === "h")
        {
            gameInfo += "vs. ";
        }
        else if (gameLocations[i] === "a")
        {
            gameInfo += "@ ";
        }

        //include the opponent
        gameInfo += gameOpponents[i] + "<br>";

        //include the result and score
        gameInfo += gameResults[i] + ": (" + runsScored[i] +
                    " - " + runsAllowed[i] + ")";
        
        //Display innings played for suspended, shortened, or extrainning games
        if (gameInnings[i] < 5)
        {
            gameInfo += " [" + gameInnings[i] + "]***";
        }
        else if (gameInnings[i] < 9)
        {
            gameInfo += " [" + gameInnings[i] + "]*";
        }
        else if (gameInnings[i] > 9)
        {
            gameInfo += " [" + gameInnings[i] + "]";
        }

        //close the paragraph
        gameInfo += "</p>";

        //write the information into a table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
    }
}

window.addEventListener("load", addWeekdays);
window.addEventListener("load", showGames);