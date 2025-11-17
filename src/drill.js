let word = 'javascript is an object oriented multiplication programming language'
let myOpinion = 'it is an intersting programming language'
console.log(word + ' ' + ',' + ' '+ myOpinion)
// console.log(word.length);
console.log(word.split(' ').reverse().join(' '));
console.log(word.replace('javascript is an object oriented multiplication programming language', 'Javascript'))
console.log(word.replace('programming', 'Syntax'))
console.log(word.indexOf('e'))     
// indexOf starts counting from zero(0) including the spaces and even punctuation marks. So the indexOf for this string ie:'word' would be '20'

let inCome = 5000
let taxAmount = 30
let tax = inCome * taxAmount
let incomeAftertax = inCome-tax
console.log('Your income after tax is' + ' ' + incomeAftertax )


let num1 = parseInt(prompt("Enter a number to see its multiplication table:"))
for (let i = 1; i<=12; i++){
    console.log(`${i} x ${num1} = ${i * num1} `)
    
}

let num2 = parseInt(prompt("Enter a number to see its multiplication table:"))
let i = 1;
while (i <=12) {
    console.log(`${i} x ${num2} = ${i * num2}`);
    i++; // increase i by 1 after each loop
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("fuzz");
  } else if (i % 5 === 0) {
    console.log("fizzfuzz");
  } else {
    console.log(i);
  }
}

let training = ['education', 'schooling','software', 'training',];
console.log(training[3])