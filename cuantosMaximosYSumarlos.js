function birthdayCakeCandles(candles) {
  // Write your code here
  var maximo = Math.max(...candles);
  let sumaMaximos = 0;

  for (let i = 0; i <= candles.length; i++) {
    //var maximo = Math.max(...candles);
    if(candles[i] == maximo ) {
      sumaMaximos ++;
    }
  }

  return sumaMaximos;
}
