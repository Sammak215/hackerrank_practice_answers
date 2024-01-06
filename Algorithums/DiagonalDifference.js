let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr));

function diagonalDifference(arr) {
  // Write your code here
  let leftcount = 0;
  let rightcount = 0;
  for (let [rowIndex, row] of arr.entries()) {
    for (let [colIndex, element] of row.entries()) {
      let totalidx = rowIndex + colIndex;

      if (totalidx === Number(row.length - 1)) {
        rightcount += element;
      }

      if (rowIndex === colIndex) {
        leftcount += element;
      }
    }
  }

  return rightcount - leftcount;
}
