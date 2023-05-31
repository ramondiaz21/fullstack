/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
  // Write your code here
  let arr = [1 ,1 ,1, 0, 0, 0,
             0, 1, 0, 0, 0, 0,
             1 ,1 ,1, 0, 0, 0,
             0, 0, 2, 4, 4, 0,
             0, 0, 0, 2, 0, 0,
             0, 0, 1, 2, 4, 0,]
  let newArr = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      newArr.push(sum);
    }
  }
  return newArr.reduce((a, b) => Math.max(a, b));
}
