function compareTriplets(a, b) {
  var Alice = 0;
  var Bob = 0;
  var ScoreArray = [];

  for (var i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        Alice += 1;
      } else if (a[i] < b[i]) {
        Bob += 1;
      }
  }

  ScoreArray = [Alice, Bob];

  return ScoreArray;
}