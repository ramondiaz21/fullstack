function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let minCounter = 0;
  let maxCounter = 0;
  scores.forEach((value) => {
    if (min > value) {
      minCounter++;
      min = value;
    }
    if (max < value) {
      maxCounter++;
      max = value;
    }
  });
  return [maxCounter, minCounter];
}
