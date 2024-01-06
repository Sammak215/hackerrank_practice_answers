function plusMinus(arr) {
  // Write your code here
  let total_zero = 0;
  let total_plus = 0;
  let total_minus = 0;

  for (let el of arr) {
    el > 0 && total_plus++;
    el < 0 && total_minus++;
    el === 0 && total_zero++;
  }
  console.log(total_plus / arr.length);
  console.log(total_minus / arr.length);
  console.log(total_zero / arr.length);
}
