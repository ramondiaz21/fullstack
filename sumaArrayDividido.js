/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 * 
 *  int n: the length of array 
    int ar[n]: an array of integers
    int k: the integer divisor
    int contador = 0; the number of pairs
 */

function divisibleSumPairs(n, k, ar) {
  // Write your code here

  //(i < j) and (arr[i] + arr[j]) is divisible by k.

  // let array = ar[n];
  // //let ejemplo = [1, 3, 2, 6, 1, 2];
  // let comienzo = ar[0];
  // let posicionInicial = ar[1]
  // let count = 0;

  // for (let i = posicionInicial; i < ar.length; i++) {
  //   if (comienzo < array[i] && (comienzo + array[i]) % k === 0) {
  //     count++;
  //     comienzo[i+1];
  //   }
  // }
  // return count;

  n = 6;
  ar = [1, 3, 2, 6, 1, 2];
  k = 3;

  let count = 0;
  

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) count += 1;
    }
  }
  return count;
}

//REPRESENTACION GRAFICA DE UN FOR DENTRO DE OTRO FOR
// i = 0:
//   j = 1: 1 + 3 = 4, no es divisible por 3
//   j = 2: 1 + 2 = 3, sí es divisible por 3 (count += 1)
//   j = 3: 1 + 6 = 7, no es divisible por 3
//   j = 4: 1 + 1 = 2, no es divisible por 3
//   j = 5: 1 + 2 = 3, sí es divisible por 3 (count += 1)

// i = 1:
//   j = 2: 3 + 2 = 5, no es divisible por 3
//   j = 3: 3 + 6 = 9, sí es divisible por 3 (count += 1)
//   j = 4: 3 + 1 = 4, no es divisible por 3
//   j = 5: 3 + 2 = 5, no es divisible por 3

// i = 2:
//   j = 3: 2 + 6 = 8, sí es divisible por 3 (count += 1)
//   j = 4: 2 + 1 = 3, sí es divisible por 3 (count += 1)
//   j = 5: 2 + 2 = 4, no es divisible por 3

// i = 3:
//   j = 4: 6 + 1 = 7, no es divisible por 3
//   j = 5: 6 + 2 = 8, sí es divisible por 3 (count += 1)

// i = 4:
//   j = 5: 1 + 2 = 3, sí es divisible por 3 (count += 1)

// En total, hay 5 pares de elementos cuya suma es divisible por 3, por lo que el valor de `count` al final del bucle es 5.
