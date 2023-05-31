/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Utilizar un objeto para llevar un seguimiento del recuento de cada número
  const counts = {};

  // Recorrer el array y contar cada número
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    counts[num] = (counts[num] || 0) + 1;
  }
 // const array = [1, 2, 3, 4, 2, 1, 5, 2, 6, 2, 1];
//   // El objeto `counts` ahora contiene los recuentos de cada número
// counts = {
//   1: 3,
//   2: 4,
//   3: 1,
//   4: 1,
//   5: 1,
//   6: 1
// }

  // Encontrar el número con el recuento más alto
  let maxCount = 0;
  let maxNum = null;
  for (const num in counts) {
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      maxNum = num;
    }
  }

  // Devolver el número que se repite más veces
  return maxNum;
}
