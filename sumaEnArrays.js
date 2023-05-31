function birthday(s, d, m) {
  // Write your code here

  let barraDeChocolate = s; //Este es un vector
  let diaDeCumple = d; //Entero
  let mesDeCumple = m; //Entero
  let resultado = 0; //El numero en que puede dividirse la barra de chocolate
  let sumaDeResultados = 0;
  let sumaDePosiciones = 0;

  //con el m cuantos vectores puedo formar
  //con el d cual es la suma de ellos

  for (let i = 0; i < m && i < barraDeChocolate.length; i++) {
    sumaDePosiciones = barraDeChocolate[i] + barraDeChocolate[i + 1];
    if (sumaDePosiciones > diaDeCumple) {
      i++;
    } else if (sumaDePosiciones == diaDeCumple) {
      resultado++;
    }
  }

  console.log(resultado);
}

let ejemplo = [1, 2, 1, 3, 2];
let count = 0,
  sum = 0;
for (let i = 0; i < s.length; i++) {
  for (let j = i; j < m + i; j++) {
    sum += s[j];
  }
  if (sum === d) {
    count++;
  }
  sum = 0;
}
return count;
