let userName = "Silvia";

try
{
    console.log("The user is " + username);
}
catch
{
    console.log("Invalid code");
}
finally
{
    console.log("Goodbye!"); //executed no matter what
}

let number = 9;
if (number < 0) throw "Attempt to calculate the square root of a negative number.";
let sqrt = number ** 0.5;
console.log("The square root of " + number + " is " + sqrt); 