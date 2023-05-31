/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

//n es el total de paginas del libro
//p es la pagina a donde quiere llegar el usuario
//Aunque se tiene que considerar si empieza desde el inicio o el final
//Se tiene que imprimir el menor valor de vueltas al libro

function pageCount(n, p) {
  const l = Math.floor(n/2);
  const t = Math.floor(p/2)
  
  if(t-0 < l-t) return t
  else return l-t

}
