/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
  // Write your code here
  let resultado = [];
  for (let i = a.length - 1; i >= 0; i--) {
    resultado.push(a[i]);
  }
  return resultado;
}
