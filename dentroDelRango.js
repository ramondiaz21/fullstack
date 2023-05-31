// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   // Write your code here
//   let checarManzanas;
//   let contadorManzanas;
//   let checarNaranjas;
//   let contadorNaranjas;

//   for (let i = 0; i < apples.length; i++) {
//     checarManzanas = apples[i] + a;
//     if (checarManzanas >= s && checarManzanas <= t) {
//       contadorManzanas++;
//       return contadorManzanas;
//     } else {
//     }
//   }

//   for (let j = 0; j < apples.length; j++) {
//     checarNaranjas = apples[j] + b;
//     if (checarNaranjas >= s && checarNaranjas <= t) {
//       contadorNaranjas++;
//       return contadorNaranjas;
//     } else {
//     }
//   }

//   console.log(contadorManzanas);
//   console.log(contadorNaranjas);
// }

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const startingPoint = s;
  const endingPoint = t;
  const appleTree = a;
  const orangeTree = b;
  let totalApples = 0;
  let totalOranges = 0;

  apples.forEach((apple) => {
    let fallPos = appleTree + apple;
    if (fallPos >= startingPoint && fallPos <= endingPoint) {
      totalApples++;
    }
  });
  oranges.forEach((orange) => {
    let fallPos = orangeTree + orange;
    if (fallPos >= startingPoint && fallPos <= endingPoint) {
      totalOranges++;
    }
  });
  console.log(totalApples);
  console.log(totalOranges);
}
