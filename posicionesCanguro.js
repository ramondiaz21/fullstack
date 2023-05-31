function kangaroo(x1, v1, x2, v2) {
  // Write your code here

  let posicionCanguro1 = x1;
  let metrosPorSalto1 = v1;
  let posicionCanguro2 = x2;
  let metrosPorSalto2 = v2;

  if (v2 >= v1 && x2 > x1) {
    return "NO";
  } else {
    while (x1 < x2) {
      x1 += v1;
      x2 += v2;
      if (x1 == x2) {
        return "YES";
      }
    }
    return "NO";
  }
}

// for (let i = posicionCanguro1; i <= 10000; i++) {
//   metrosPorSalto1 += metrosPorSalto1;
//   if (metrosPorSalto1 == metrosPorSalto2) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//     for (let j = posicionCanguro2; j <= 10000; j++) {
//       metrosPorSalto2 += metrosPorSalto2;
//     }
//   }
// }
