alert("You are highly welcome!");
confirm("To data check!");

console.log("output Data!");

let myNumber=30;
console.log(myNumber);
++myNumber;
console.log(myNumber);
--myNumber;
console.log(myNumber);
let newNumber=10;
console.log(newNumber + myNumber);

function firstName()
{
let firstName = prompt("Your first name:");
console.log("My first name is" + " " + firstName)
}
function secondName()
{
let secondName = prompt("Your second name:");
console.log("")
console.log("Welcome to data checking" + " " + secondName)
document.getElementById("age").innerHTML="Welcome" + " " + secondName + "😃" + "!";
}
function myAge()
{
    let myAge = prompt("Enter your age:");
    console.log("My age is " + myAge)
}

function myCountry()
{
    let myCountry = prompt("Enter your country's name:")
    console.log("My country's name is" + " " + myCountry);
}