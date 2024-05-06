let navProperties = ["appName", "appVersion", "cookieEnabled", "language", "online"];
let navPValues = [navigator.appName, navigator.appVersion, navigator.cookieEnabled, navigator.language, navigator.onLine];

let screenProperties = ["availHeight", "availWidth", "colorDepth", "height", "pixelDepth", "width"];
let screenPValues = [screen.availHeight, screen.availWidth, screen.colorDepth, screen.height, screen.pixelDepth, screen.width];

function navigationProp()
{
    let navProp = document.getElementById("nav-properties");

    //create a table with a header row and two columns
    let tbl = document.createElement("table");
    
    let hRow = document.createElement("tr"); 
    let hCell1 = document.createElement("th");    
    hCell1.textContent = "Navigator Property";
    
    let hCell2 = document.createElement("th");
    hCell2.textContent = "Value";    
    hRow.appendChild(hCell1);
    hRow.appendChild(hCell2);
    tbl.appendChild(hRow);

    //create the rest of the rows to store the navigation properties and values
    for (let i = 0; i < navProperties.length; i++)
    //for (var property in navigator)
    {
        //let np = navigator[property];        
        let np = navProperties[i];
        let row = document.createElement("tr");    

        let c1 = document.createElement("td"); 
        c1.style.fontWeight = "bold";       
        c1.textContent = np;
        
        let c2 = document.createElement("td");        
        let pg = document.createElement("p");        
        pg.innerHTML = navPValues[i];
        c2.appendChild(pg);

        row.appendChild(c1);
        row.appendChild(c2);
        tbl.appendChild(row);
    }

    //append the table to the document body
    navProp.append(tbl);
}

function screenProp()
{
    let navProp = document.getElementById("screen-properties");

    //create a table with a header row and two columns
    let tbl = document.createElement("table");
    
    let hRow = document.createElement("tr"); 
    let hCell1 = document.createElement("th");
    hCell1.textContent = "Screen Property";
    
    let hCell2 = document.createElement("th");    
    hCell2.textContent = "Value";    
    hRow.appendChild(hCell1);
    hRow.appendChild(hCell2);
    tbl.appendChild(hRow);

    //create the rest of the rows to store the screen properties and values
    for (let i = 0; i < screenProperties.length; i++)
    {
        //let np = navigator[property];        
        let np = screenProperties[i];
        let row = document.createElement("tr");    

        let c1 = document.createElement("td");
        c1.style.fontWeight = "bold";
        c1.textContent = np;
        
        let c2 = document.createElement("td");
        let pg = document.createElement("p");        
        pg.innerHTML = screenPValues[i];
        c2.appendChild(pg);

        row.appendChild(c1);
        row.appendChild(c2);
        tbl.appendChild(row);
    }

    //append the table to the document body
    navProp.append(tbl);
}


window.addEventListener("load", navigationProp);
window.addEventListener("load", screenProp);