function miniMaxSum(arr) {
  // Write your code here
  let resultadoMinimo;
  let resultadoMaximo;
  let suma = 0;

  var minimo = Math.min(...arr);
  //resultadoMinimo = arr.filter((e) => e != minimo);
  //console.log(minimo);

  var maximo = Math.max(...arr);
  //console.log(maximo);
  //resultadoMaximo = arr.filter((e) => e != maximo);

  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }

  console.log((suma - maximo),(suma - minimo));
}
