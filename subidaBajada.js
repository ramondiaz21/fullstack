// function countingValleys(steps, path) {
//   // Write your code here
//   var nuevoArray = new Array();
//   const up = "/";
//   const down = "\\";
//   let resultado;

//   for (let i = 0; i <= steps.lenght; i++) {
//     for (let j = 0; j <= steps.lenght; j++)
//       if (path == "U") {
//         nuevoArray[i][j] += up;
//         resultado = nuevoArray[i][j];
//       } else if (path == "D") {
//         nuevoArray[i][j] += down;
//         resultado = nuevoArray[i][j];
//       }
//   }

//   console.log(resultado);
// }

function countingValleys(steps, path) {
  // Write your code here
  let positionRelSea = 0
  let result = 0;
  let pathArray = path.split('');
  pathArray.forEach(step => {
      if (step == "U") {
          positionRelSea++
          if (positionRelSea == 0) {
              result++;
          }
      }
      else if (step == "D") {
          positionRelSea--;
      }
  })
  return result;
}