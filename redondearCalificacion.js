function gradingStudents(grades) {
  // Write your code here
  let resutls = [];
  for (const element of grades) {
    let ceilgrades = Math.ceil(element / 5) * 5;
    let temp = ceilgrades - element;

    if (temp < 3 && ceilgrades >= 40) {
      resutls.push(ceilgrades);
    }
    if (temp == 3 && ceilgrades >= 40) {
      resutls.push(element);
    }
    if ((temp > 3) | (ceilgrades < 40)) {
      resutls.push(element);
    }
  }
  return resutls;
}
