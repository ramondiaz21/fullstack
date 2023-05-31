// function getMoneySpent(keyboards, drives, b) {
//   /*
//    * Write your code here.
//    */
//   var teclado = Math.max(...keyboards);
//   var disco = Math.max(...drives);
//   var presupuesto = Math.max(...b);
//   let resultado = 0;

//   while((teclado + disco) < presupuesto) {

//   }

//   for (let i = 0; i <= keyboards.length; i++) {
//     for (let j = 0; j <= drives.length; j++) {
//       if ((teclado + disco) > presupuesto) {
//         return resultado = -1;
//       }
//     }
//   }
// }

function getMoneySpent(keyboards, drives, b) {
  // Base case
  // if the lowest value keyboard or lowest value drive is greater than the budget
  // then return -1
  if ((Math.min(...keyboards) >= b) || (Math.min(...drives) >= b)) return -1;
  
  // solution array
  const arr = [];
  
  // nested for loops to build possible combinations
  for (let i = 0; i < keyboards.length; i++) {
      // checks that the keyboard value is less than the budget
      if (keyboards[i] < b) { 
          for (let j = 0; j < drives.length; j++) {
              // checks that the drive value is lower than the budget
              // also confirms whether the combination passes before pushing to array
              if ((drives[j] < b) && ((keyboards[i] + drives[j]) <= b)) {
                  arr.push((keyboards[i] + drives[j]));
              }
          }
      } 
  }
  //return max of array, or -1 if no combinations were pushed to the array
  return arr.length > 0 ? Math.max(...arr) : -1; 
}
