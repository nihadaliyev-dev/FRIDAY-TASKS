function diagonalDifference(arr) {
  let primaryDiag = 0,
    secondaryDiag = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == j) {
        primaryDiag += arr[i][j];
      } else if (i + j == 2) {
        secondaryDiag += arr[i][j];
      }
    }
  }
  return Math.abs(primaryDiag - secondaryDiag);
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
console.log(diagonalDifference(arr));
