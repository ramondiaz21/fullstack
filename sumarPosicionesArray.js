function aVeryBigSum(ar) {
  // Write your code here
  let sumResult = 0;

    //forEach sirve para recorrer todos los elementos 
    //del array
  ar.forEach(element => {
    return sumResult += element
  });

  return sumResult;
}
