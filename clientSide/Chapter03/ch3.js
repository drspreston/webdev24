//initializing array months with values
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//initializing array dataValues to an empty array
let dataValues = [];

//initializing array months2 using new Array
let months2 = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

//initializing an array with 4 undefined values
let vals = [,,,];
console.log(vals[0]);
vals[0] = "Silvia";
console.log(vals[0]);
vals[4] = "Jack";
console.log(vals[4]);
console.log("The size of array vals is " + vals.length); //print the size of the array
console.log(vals); //display the contents of the array in the format of [values,...,values]

//Sparse arrays
let sparse = new Array();
sparse[0] = 1;
sparse[99] = 100;

console.log(sparse[0]);
console.log(sparse[1]);
console.log(sparse[99]);

let foodMenu = new Array("Breakfast", "Lunch", "Dinner");
//or
// let foodMenu = ["Breakfast", "Lunch", "Dinner"];

//size of foodMenu array
let size = foodMenu.length;

//return the 3rd element in foodMenu array
console.log(foodMenu[2]);

//a loop to add numbers from 0 to 10
let num = 1;
let total = 0;
//while loop is a pre-test loop: it checks your condition before
//you can get in the loop
while(num <= 10) //no semicolon here
{
   total += num;  //total = total + num;
   num++;         //num = num + 1;
}
console.log("Total (using while loop) is " + total);

//reset variables
num = 1;
total = 0;
//do..while is a post-test loop: it lets you in the loop, then
//check your condition
do
{
   total += num;  //total = total + num;
   num++;
} while(num <= 10);
console.log("Total (using do..while loop) is " + total);

//reset variables
total = 0;
//for loop is also a pre-test loop
for(num = 1; num <= 10; num++)
{
   total += num;
}
console.log("Total (using for loop) is " + total);

let grade = 78;

if (grade >= 90) //no semicolon here
{
   console.log("You made an A!");
}
else if (grade >= 80)
{
   console.log("You made a B!");
}
else if (grade >= 70)
{
   console.log("You made a C!");
}
else if (grade >= 60)
{
   console.log("You made a D!");
}
else
{
   console.log("You failed!");
}

//initializing array daysWeek to be a new array of 7 elements
let daysWeek = new Array(8);
let monthName = new Array(12); //holds 12 elements

//populate array daysWeek with values
daysWeek[0] = "";
daysWeek[1] = "Monday";
daysWeek[2] = "Tuesday";
daysWeek[3] = "Wednesday";
daysWeek[4] = "Thursday";
daysWeek[5] = "Friday";
daysWeek[6] = "Saturday";
daysWeek[7] = "Sunday";

//Switch statement
switch (daysWeek[1])
{
   case "Monday": 
      console.log("Starting a new work week!!!");
      break;      //exits the switch block
   case "Friday":
      console.log("TGIF!!");
      break;
   case "Saturday":
      console.log("Sleep in today!");
      break;
   case "Sunday":
      console.log("Go to church and cook a good meal!");
      break;
   default:    //happens when none of the case are executed
      console.log("Have a great day!");
}

console.log("The middle of the week is " + daysWeek[3]);
console.log(daysWeek);

//populate array vals
vals[2] = 89; //__ __ 89 __
console.log(vals[0] + ", " + vals[1] + ", " + vals[2] + ", " + vals[3]);
console.log(vals);

//sparse arrays
let grades = new Array();
grades[0] = 99;
grades[4] = 100;
console.log("Size of grades is " + grades.length);

//Multi-dimensional arrays
let mArray = [
                [4, 2, 1, 2],
                [1, 3, 18, 6],
                [3, 7, 3, 4]
             ];
console.log(mArray[1][2]); //prints 18 - 2nd row 3rd col
console.log(mArray[2][2]); //prints 3 last row 3rd col
console.log(mArray[2][3]); //prints the last 4
console.log("mArray has " + mArray.length + " rows and "
            + mArray[0].length + " columns");

//while loop are pre-test loops: the body of the loop
//might never be executed if the condition is false.
//The condition must be true before executing the body/block
//of the while loop.
//The condition must be false at one point to stop the loop or
//an infinite loop will occur
//In a while, we can have a condition predefined or we can allow
//the user to define the condition (sentinel)
let sum = 0;
let count = 0;
while(count <= 10) //no semicolor here
{
   sum += count;
   if (sum == 50)
      break; //halts the loop and exit the loop
   count++;
}
console.log("<using a while loop> The sum is " + sum);

//do while loop are post-test loops: the body of the loop
//will be executed at least once then the condition will be checked
//this is a bottom-test loop.
//If the condition is true, go back in the body of the loop
sum = 0;
count = 0;
do //no semicolon here
{
   if (count % 2 == 0)
      continue; //this will skip even numbers

   sum += count;
   count++;   
} while(count <= 10); //semicolon here to end the do while statement
console.log("<using a do..while loop> The sum is " + sum);

//for loop is also a pre-test loop;
//for(initial value; condition; iteration/changes to your initial value)
//{
//    body of for loop
//}
sum = 0;
for(let count = 0; count <= 10; count++) //no semicolon here
{
   sum += count;
}
console.log("<using a for loop> The sum is " + sum);

//printing daysWeek array (1D)
for(let i = 1; i < 8; i++)
{
   console.log(daysWeek[i]);
}

let str = "";
//nested for loop to print the 2D array mArray
//outer for loop controls the rows
for(let r = 0; r < mArray.length; r++)
{
   //inner for loop controls each column of row r
   for(let c = 0; c < mArray[0].length; c++)
   {
      str += mArray[r][c] + " "; //building a string for each row
   }
   str += "\n";
}
console.log(str);

console.log("Printing days of the week using forEach...");
function writeDays(val)
{
   console.log(val);
}

//daysWeek.forEach(writeDays);
//months.forEach(writeDays);

function stepUp5(val, i, arr)
{
   arr[i] = val + 5;
}
let x = [1, 3, 5, 10];
x.forEach(stepUp5);  //adds 5 to each element of array x
x.forEach(writeDays); //prints each element of array x

let i = 1;
str = "";
while (i <= 100)
{
   str += i;
   if (i != 100) //if i not equal to 100
      str += ", ";  //body of the if statement; it will be executed if the condition is true
   i++;
}
console.log(str);

str = "";
i = 3;
while(i <= 96)
{
   str += "<td>" + i + "</td> ";
   i *= 2;
}
console.log(str);

//as a for loop
str = "";
for(let i = 3; i <=96; i*=2)
   str += "<td>" + i + "</td> ";
console.log(str);

//as a do while 
str = "";
i = 3;
do
{
   str += "<td>" + i + "</td> ";
   i*=2;
} while(i <= 96);

console.log(str);

if (daysWeek[4] === "Thursday") //if condition is false, else block is executed
   console.log("It is almost the weekend!");
//console.log("bad place for code!");
else
   console.log("It is not Thursday!");
console.log("Yay!");

grades[1] = 89;
grades[2] = 55;
grades[3] = 0;
console.log("Printing array grades...");
grades.forEach(writeDays);
let letter = "";

for (let i = 0; i < grades.length; i++)
{
   if (grades[i] >= 90)
   {
      letter = "A";
      if (grades[i] == 100)
      {
         console.log("That is EXCELLENT!");
      }
   }
   else if (grades[i] >= 80)
      letter = "B";
   else if (grades[i] >= 70)
      letter = "C";
   else if (grades[i] >= 60)
      letter = "D";
   else
   {
      letter = "F";
      if (grades[i] == 0)
      {
         console.log("You can do better than this!");
      }
   }

   console.log(grades[i] + " letter grade is " + letter);   
}

