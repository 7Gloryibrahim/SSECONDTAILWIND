alert('Welcome to javascript class!')
confirm('You are learning javascript!')

console .log("javasript class")
// let
// var
// const

let myNumber=35
console.log(myNumber)
++myNumber
console.log(myNumber)
--myNumber
console.log(myNumber)
let newNumber = 24
console.log(newNumber + newNumber)
let firstName = prompt("Enter your first name: ")
let secondName = prompt("Enter your second name: ")
let stateName = prompt("Enter your state name: ") 
console.log('my name is' + ' ' + firstName + " " + secondName)

let firstDigit =parseInt(prompt('Enter the first digit: '))
let secondDigit =parseInt(prompt('Enter the last digit: '))
console.log(firstDigit + secondDigit)
console.log( firstDigit + secondDigit)
console.log( firstDigit - secondDigit)
console.log( firstDigit * secondDigit)
console.log( firstDigit / secondDigit)

let myUsername ='kalu'
let myAddress = 'feyikayo street off allen avenue'
let myOccupation = 'barber'
console.log(myUsername + ' ' + "leaves at" + ' ' + myAddress + ' ' + 'he is a' + ' ' + myOccupation  )
employerName = 'Vibrant'
employerAge = 25;
employerLocation ='Benin';
console.log('employerName' + ' ' + employerAge + ' ' + employerLocation)

employerName = prompt('Enter your name😀: ');
employerAge = prompt('Enter your age😁 :');
employerLocation = prompt('Enter your location😎:');
console.log('employerName' + ' ' + employerAge + ' ' + employerLocation);

let firstNumber = parseInt(prompt('Enter your first number:'));
let secondNumber = parseInt(prompt('Enter your second number: '));

console.log(firstNumber + secondNumber);
// template literals

citizenName = 'Samuel'
citizenAge =20;
citizenStatus = 'single'
citizenJob = 'Student'

console.log(`${citizenName} is ${citizenAge} years old, he is a ${citizenJob} and his ${citizenStatus} `)
// data types
// stringes

let yourAddress = '12, feyikayo street off allen avenue'
let newLocation = "lagos state";

console.log(yourAddress.length);
console.log(typeof yourAddress);
console.log(yourAddress.replace('feikayo', 'Gbagada'));
console.log(yourAddress.slice(4));
console.log(yourAddress.split(' ').reverse().join(' '));
console.log(yourAddress.indexOf('n'));
console.log(yourAddress.concat(' ', newLocation));
console.log(yourAddress.toUpperCase());
console.log(yourAddress.toLowerCase());
console.log(yourAddress.includes('Lekki'));
console.log(yourAddress.endsWith('s'));
console.log(yourAddress.toLocaleLowerCase());


// Number

let myNum = 29;
console.log(typeof mynum);
console.log(myNum.toExponential(2));
console.log(myNum.toPrecision(3));
console.log(myNumber.toFixed(2))
let newNum = 18;

// Arithmetic Operation
// Comparison Operators
// Logical Operators


// Arithmetic Operation
console.log(myNum + newNum);
console.log(myNum-newNum);
console.log(myNum*3);
console.log(newNum/5)
// modulus
console.log(myNum%6);
// exponential
console.log(3**3);

// comparism operators
// <
// >
// <=
// >= !=
// == ===

// logical operators
// and &&
// true and true = true
// true and false = false
// false and true = false
//  false and false = false

// or ||
// true or false = true
// false or true = true
// false or false = false 
// true or true = true

let number =10;
let number1='10';
console.log(number+number1)
console.log(number==number1);
console.log(number===number1);

// create a program that checks for indigene eligibility
const age = parseInt(prompt("Enter your name:"));

let individualName = 'Bolu';
const votingAge =18;
let citizenship ='true'


// control flow
// if(condition)
// result
// else if
// else

    if(age>=votingAge && citizenship){
        console.log(`${individualName} is eligible for voting you are ${VotingAge} years old`);  
    }
    else(
        console.log(`${individualName} is not eligible for voting you are ${votingAge} years old`)
    );
    
    // grading system 
    let score = prompt('Enter your grade:')
    newScore = score.toLowerCase()
    if(newScore== 'a'){
        console.log('Excellent!')
    }

    else if(newScore =='b'){
        console.log('Verygood!')
    }

    else if(newScore =='c'){
        console.log('Good!')
    }
    else if(newScore =='d'){
        console.log('Failed!')
    }
    // switch case 
    myScore = prompt('Enter your grade:')
    myScore = myScore.toLowerCase()
    switch(myScore){
        case 'a':
            console.log('Excellent!')
            break
            case 'b':
            console.log('You did well')
            break
            case 'c':
            console.log('Pass')
            break
            case 'd':
            console.log('fair')
            break
            case 'e':
            console.log('sorry, better luck next time')
            break
            default:
                console.log('unknown score')
    }
      
    // craet a grading programe for grading system
    score =parseInt(prompt('Enter your score : '))
    if(score >=80){
        console.log('Excellent, keep it up!!!')
    }

    else if ( score>=60 && score <=79){
        console.log('Very good')
    }

    else if ( score >=50 && score<=59){
        console.log('Good')
    }
    else if ( score < 50){
        console.log('Failed')
    }

    else{
        console.log('Unknown result')
    }

    // loop in javascript
    // for loop
    // for (initialization, condition, increment)

    for(let i=40; i<=50; i++){
        console.log(i)
    }
 for(let x=1; x<=10; x++ ){
    console.log(x)
 }

 number=3
 for(let i=1; i<=12; i++){
    console.log(`${i} x ${number}=${i*number} `)
 }

// Execution
// while loop
// initailization, condition increment
let x=0
while (x<10){
    x= x + 1
    console.log(x)
}
// ternary operators
let greeting ='get out!'
let unavailable='get out!'

console.log(greeting =='get out!'? "you are not welcome": "welcome")


let num1= 20
let num2=45

console.log(num2 > num1 ? 'this is the highest': 'this is the lowest')

    // Arrays
    //  Arrays allows variable to be used  later in the future
    // we use it in brecket [] notation
    // arrays allows mediable data type
    color =['green','yellow', 'purple', 'orange',]
    console.log(color[0])
    console.log(color[1])
    console.log(color[4])
    // array method
    // (1)unshift
    // (2)push
    // (3)shift
    // (4)pop
    // color.unshift('black')
    // console.log(color)
    // color.push('gray')
    // console.log(color)
    // color.shift()
    // console.log(color)
    // color.pop()
    // console.log(color)

    // FUNCTION DECLARATION
    function welcome(){
        console.log("welcome to javascript class")
    }
   
     function calcAge(){
       const birthYear = 2006
      const  currentYear = 2025
        let currentAge = currentYear - birthYear
        console.log(`I found out that my age is ${currentAge}`)

     }
     
    // FUNCTION EXPRESSION
   
       const calcNewAge = function(){
        const birthYear = 2006
        const currentyear = 2025
        let currentAge = (`I found out that my age is ${currentAge}`)
       }
       calcAge()
       calcNewAge()
       welcome()
       welcome()

    //    function retirementYear(){
    //   const age =  30
    //   const birthYear = 1995
    //   retirementAge = 60
    //  let yearsleft = retirementAge - age
    //  console.log(`Your retirement year is ${yearsleft}`)
    //    }
    // Assignment
    let word ='javascript is an object oriented multiplication programming language'
    // 1) reverse the variable word
    // 2) change the word programming to syntax
    // 3) join the statement  "it is an intersting programming language"
    // 4) bring out only javasript in the word
    // 5) what is the index of e in the word

    // 2) creat a program that takes two numbers and its operators such that if it takes + then it will add it and vice versa
    let firstOperand = parseInt(prompt('Enter a number:'))
    let secondOperand = parseInt(prompt('Enter the second number:'))
    let oper = parseInt(prompt('Enter an operator'))

    switch(oper){
        case '+' :
            console.log(`the answer is ${firstOperand + secondOperand}`)
            break
            case '-' :
                console.log(`the answer is ${firstOperand + secondOperand}`)
                break
                case '*' :
                console.log(`the answer is ${firstOperand + secondOperand}`)
                break
                case '/' :
                console.log(`the answer is ${firstOperand + secondOperand}`)      

                break
                case '%' :
                console.log(`the answer is ${firstOperand + secondOperand}`)
                break

            }
    // 3)* create a program that calculate the income of an individual after tax if the tax is 30%
    let income = parseInt(prompt('Enter your monthly income:'))
    console.log(`Your monthly income is ${income} `)
    let taxableIncome= 0.3* income
    let incomeAfterTax = income - taxableIncome
    console.log(`Your income after tax is deducted is ${incomeAfterTax}`)
    // 4) creat a multiplication table using "for" loop and "while" loop 
    let multiplication = parseInt(prompt('Enter a number'))
    let i = 1 
    while(i<=12){
        i=i+1
        result = multiplication * i
        console.log(`${multiplication} * i = ${multiplication*i}`)
    }
    // 5) generate numbers btween 1 and 10 if the number is divisible by 2 it should output fuzz but if it is divisible by 5 it should output fizzfuzz
    const myNumb = Math.trunc(Math.random()*10);
    console.log(myNumb)

    if (myNumb %2 ==0){
        console.log('fuzz')
    }
    else if (myNumb %5==0){
        console.log('fizzfuzz')
    }
    else{
        console.log('unknown answer')
    }

    // 6) let training = ['education', 'schooling','software', 'training',]
    let training= ['education', 'schooling','software', 'training','class','teaching']
    for(let i=0; i<=training.length; i++){
        let words = training[i]
        if (words.startsWith('t')){
            console.log(words)
        }
    }
    // output the word that start with t
// assignment
// 1)create a new object then add it to the existing object that we have
// object
let employee = [
    {
        name: 'Azeez',
        age: 24,
        occupation:'farmer',
        state: 'lagos',
        country:'nigeria'
    },

     {
        name: 'Ebube',
        age: 35,
        occupation:'political scientist',
        state: 'Awka',
        country:'nigeria'
    },

     {
        name: 'Evidence',
        age: 18,
        occupation:'Student',
        state: 'lagos',
        country:'nigeria'
    },

     {
        name: 'Ezikiel',
        age: 24,
        occupation:'Unemployed',
        state: 'lagos',
        country:['nigeria', 'Ghana', 'Togo','Gabon']
    },
]

console.log(employee[1])
console.log(employee[2]['age'])
console.log(employee[3]['state'])
employee[2]['country'] = 'china'
console.log(employee[2])
employee[1].gender = 'male'
console.log(employee)  



alert('Welcome to javascript class')
// function
// function declaration
// function expression


// function declaration
let presentYear = 2025
function calcAge(birthYear){
  return presentYear - birthYear  
}

const currentAge = calcAge(2005)
console.log(`Her age is ${currentAge}`)


// Function expression
const calcAge1 = function(birthYear){
    return presentYear-birthYear
}
const presentAge = calcAge1(2008)
console.log(presentAge)


// Arrow Function
const newAge = (birthYear) => presentYear - birthYear
console.log(newAge(2009)) 

const myAge = (birthYear,firstName)=> {

    const age = 2025 - birthYear
     const retirement = 60 - age
     return `${firstName} will retire at the age of ${retirement}`
}
const retirementAge = myAge(2010, 'Kunle')
console.log(retirementAge)
const newClass = (book) => {
    return book*5
}

const myClass = (mybook, yourbook) =>{
    const newstudent = newClass(mybook)
    const mystudent = newclass(yourbook)
    return `The new student book is ${newstudent} is more than my own student's book which is ${mystudent}`
}