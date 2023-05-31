function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z);
  const catB = Math.abs(y - z);
  if (catA > catB) return "Cat B";
  else if (catB > catA) return "Cat A";
  else return "Mouse C";
}
