const bill1 = parseInt(prompt('Enter your bill :'));
const tip1 = bill1 >= 50 && bill1<= 300 ? bill1 * 0.15 : bill1 * 0.20;
let total1 = bill1 + tip1;
console.log(`Bill  = ${bill1}\n Tip = ${tip1}\n Total = ${total1}`)

const bill2 = 40;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.20;
let total2 = bill2 + tip2
console.log(`fee = ${40} \n Tip=${tip2} \n Total fee = ${total2}`)

const bill3 = 430;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.20;
const total3 = bill3 + tip3
console.log(`Bill = ${bill3}\n Tip = ${tip3}\n Total = ${total3}`)

const data1 = [
   {
    dolphinsScore0: [96,108,89],
    koalasScore0:[88,91,110],
   },
   {
    dolphinsScore1:[97,112,101],
    koalasScore1:[109,95,123],
   },
   {
    dolphinsScore2:[97,112,101],
    koalasScore2:[109,95,106],
   },
];
const dolphinsScore0 = data1[0].dolphinsScore0;
const dolphinsScore1 = data1[1].dolphinsScore1;
const dolphinsScore2 = data1[2].dolphinsScore2;

const sum1 = dolphinsScore0[0]+dolphinsScore0[1]+dolphinsScore0[2]
console.log(`The Dolphins first sum up is: ${sum1}`)
const average1 = 3
const allAverage1 = sum1/average1
// let average0 = sum/dolphinsScore0.length
// let average1 = sum/dolphinsScore1.length
// let average2 = sum/dolphinsScore2.length
console.log(`The Dolphins average score for the first play is: ${allAverage1}`)

const koalasScore0 = data1[0].koalasScore0;
const koalasScore1 = data1[1].koalasScore1;
const koalasScore2 = data1[2].koalasScore2;
const sum2 = koalasScore0[0]+ koalasScore0[1]+ koalasScore0[2];
console.log(`The Koalas first sum up is : ${sum2}`);
const ave2 = 3
const allAve2= sum2/ave2
console.log(`The Koalas average score for the first play is: ${allAve2}`)
if(allAverage1 > allAve2 && allAverage1>=100){
   console.log(`Dolphins win the trophy🏆, with score of ${allAverage1} vs ${allAve2}`)
}
 else if(allAve2 > allAverage1 && allAve2>=100){
  console.log(`Koalas win the trophy🏆, with score of ${allAve2} vs ${allAverage1}🎉`)
}
// // else  (allAverage1 ===allAve2 && allAverage1<100 && allAve2<100);
   else {
      console.log(`No one wins the trophy🏆😥, both teams have less than 100 points😥`)
}




// if(allAverage1 > allAve2 && allAverage1>=100){
//    console.log(`Dolphins win the trophy🏆, with score of ${allAverage1} vs ${allAve2}`)
// }
// else if(allAve2 > allAverage1 && allAve2>=100){
//    console.log(`Koalas win the trophy🏆, with score of ${allAve2} vs ${allAverage1}🎉`)
// }
// else {
//    console.log(`No one wins the trophy🏆😥, both teams have less than 100 points😥`)
// }
