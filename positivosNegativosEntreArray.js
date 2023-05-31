function plusMinus(arr) {
  var contadorPositivo = 0;
  var contadorNegativo = 0;
  var contadorZero = 0;
  for(let i in arr) {
      if (arr[i] > 0) {
          contadorPositivo++;
      } else if (arr[i] < 0) {
          contadorNegativo++;
      } else contadorZero++;
  }
  var tamanoArray = arr.length;
  var resultadoPositivo = (contadorPositivo/tamanoArray);
  var resultadoNegativo = (contadorNegativo/tamanoArray);
  var resultadoCero = (contadorZero/tamanoArray);
  console.log(resultadoPositivo + "\n" + resultadoNegativo + "\n" + resultadoCero);
}