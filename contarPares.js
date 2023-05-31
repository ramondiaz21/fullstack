/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  let count = [];
  for (let i = 0; i <= 100; i++) {
    count[i] = 0;
  }
  ar.forEach((e) => count[e]++);
  let total = 0;
  count.map((u) => {
    total = total + Math.floor(u / 2);
  });
  return total;
}

