let coffeeSize   ;
let addSugar = true;
let small = 1;
let medium =2;
let large = 3;
let smallS = 1.5;
let mediumS =2.5;
let largeS = 3.5;
function testNum(coffeeSize = 3) {
  let result;
  if (3 < 1) {
    result = "1€";
  } else {
    result = "1,5€";
  }
   if (3 < 2){
    result= "1,5€" ;
   } else {
    result = "2,2€" ;
   }
    return result;
}
console.log(testNum(3));