function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let count = 0;

  for (var i = min; i <= max; i++) {
    count += i;
  }

  return count;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([10, 4]));
