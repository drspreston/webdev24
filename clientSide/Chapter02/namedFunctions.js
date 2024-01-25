//global scope variable
let user = "Sophia";

// A function that prints a static message to the JavaScript console
function printMsg() {
    console.log("This function does not have any parameters.");
    console.log("Silvia Preston, Today is 01/24/23.");
}


/**
 * A function that takes in three parameters and returns a value 
 * @param {number} num1 
 * @param {number} num2 
 * @param {number} num3 
 * @returns {number} the sum of 3 numbers
 */
function add3(num1, num2, num3) 
{
    let sum = num1 + num2 + num3; //let is blocked scoped
    return sum;
}

function showUser()
{
    //command block - body of the function
    let user = "Silvia"; //local scope variable
    console.log(user);
}

function showGlobalUser()
{
    console.log(user); //prints the value stored in global variable user
}

//call the function printMsg
printMsg();

//call the function add3 and store the results
//in variable sum
let sum = add3(1, 2, 3); //passing 3 arguments to function add3
console.log("The sum of 1 + 2 + 3 is: " + sum); //error on this line if the above is commented

//sum = add3(9, 11, 13);
console.log("The sum of 9 + 11 + 13 is: " + add3(9, 11, 13));

sum = add3(10, 12, 5) + add3(5, 2, add3(4, 7, 9));
console.log("The sum is now " + sum);

//this will call the show user function and print the user defined
//locally in that function
showUser();

//this will work now because the global user is defined at the top
//of this program
console.log(user); //user does not exist in this scope (update: it does now!)

//calling the function showGlobalUser
//has the same effect as the above statement
showGlobalUser();

flag = true;
console.log(flag);

console.log("\\Welcome to 'JavaScript'\\");
console.log('Welcome to "JavaScript"');
console.log("Welcome to 'JavaScript\'s \nFunctions'");

let letterGrade = "B";

//Chapter 2 Section 2-6
//Arithmetic operator
let x = 12;
console.log("\ndemonstrating post-increment");
console.log("value of x: " + x); //12
x++; //x = x + 1; //13
console.log("value of x after x++: " + x); //13
console.log("value of x++: " + x++); //x has not been incremented yet //13
console.log("value of x after x++: " + x); //14


console.log("\ndemonstrating pre-increment");
console.log("value of x: " + x); //14
++x; //15
console.log("value of x after ++x: " + x); //15
console.log("value of ++x: " + ++x); //16
console.log("value of x after ++x: " + x); //16
console.log("value of x: " + x); //16

x = x + 2; //18
//compound assignment operators
x += 2; //20
x *= 3; //x = x * 3
x /= 3;
//x %= 2;
x **= 3; //x = x * x * x
console.log("value of x: " + x);
x = "2";
z = "3";
y = "2";
//x = x + y;
//console.log("value of x: " + x);
z += y;
console.log("value of z: " + z);
console.log("value of y: " + y);

console.log(x === y);

//= assignment operator
//== tests if two values are the same
//=== tests if two values are the same and/or the same data type

//Section 2-6d - Conditional Operators
let member = "prime";
let plan = "silver";
let discount = (member === "prime") || (plan === "gold") ? 0.10 : 0.0;
console.log("As a " + member + " member and with a " + plan + " plan," +
     " your discount is " + (discount*100) + "%");

//or you can have boolean value set to true or false if you are a prime member
let primeMember = false;
discount = primeMember ? 0.05 : 0.0;

//expressions instead of values
(primeMember) ?  console.log("Enjoy your free shipping!") :
                console.log("Go Prime to enjoy free shipping!");

let firstName = "", lastName = "";

console.log("type of member variable: " + typeof(member));