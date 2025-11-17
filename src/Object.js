// 1)create a new object then add it to the existing object that we have
// object

let employee = [
    {
        name: 'Azeez',
        age: 24,
        occupation:'farmer',
        state: 'lagos state',
        country:'nigeria'
    },

     {
        name: 'Ebube',
        age: 35,
        occupation:'political scientist',
        state: 'Awka state',
        country:'nigeria'
    },

     {
        name: 'Evidence',
        age: 18,
        occupation:'Student',
        state: 'lagos state',
        country:'nigeria'
    },

     {
        name: 'Ezikiel',
        age: 24,
        occupation:'Unemployed',
        state: 'lagos state',
        country:['nigeria', 'Ghana', 'Togo','Gabon']
    },
]

// console.log(employee[i]['name'])
console.log(employee[2]['age'])
console.log(employee[3]['state'])
employee[2]['country'] = 'china'
console.log(employee[2])
employee[1].gender = 'male'
console.log(employee)  



 
let latestEmployee = [
    {
        name: 'Celestina',
        age: 18,
        occupation: 'model',
        state: 'No idea',
        country:'US',
    },

     {
        name: 'David',
        age: 18,
        occupation: 'null',
        state: 'Lagos state',
        country:'Nigeria',
    },

     {
        name: 'Rita',
        age: 18,
        occupation: 'Student',
        state: 'Calabar state',
        country:'Nigeria',
    },
]



// function retirementYear() {
//   const age = 30;
//   const currentYear = 2025;
//   const birthYear = 1995;
//   const retirementAge = 60;

//   let yearsLeft = retirementAge - age;
//   let retireYear = currentYear + yearsLeft;

//   console.log(`Your retirement year is ${retireYear}`);
// }

retirementYear();
 function retirementYear(){
      const age =  parseInt(prompt('Enter your age😊'));
    //   Add parseInt to change the string to numbers, so that they can add up together
      const currentYear = parseInt(prompt("What year are we in? 🧐"));
      const birthYear =parseInt(prompt("What is your birth year?"));
      const retirementAge = 60;
     let yearsleft = retirementAge - age;
     let retireYear =  currentYear + yearsleft
    
     document.writeln(`Your retirement year is ${retireYear} <br>`);
     
     
     console.log(`Your retirement year is ${retireYear}`);
    
       }
       
     
// retirementYear();

for(let i=0; i<employee.length;i++){
    console.log(employee[i] ['occupation'])
}
// employee.push(latestEmployee)
// let allEmployee= [...employee, ...latestEmployee]
// allEmployee.forEach(allEmployee => { console.log(allEmployee['name'])
//   console.log(allEmployee['occupation'])
//   console.log(allEmployee['state'])
    
// });
for ( let i of latestEmployee){
    console.log(i)
    employee.push(i)
    console.log(employee)
}

retirementYear();