function reduce(arr, iteratee) {
  var index = 0,
    len = arr.length,
    memo = arr[index];
  for (index += 1; index < len; index += 1) {
    memo = iteratee(memo, arr[index]);
  }
  return memo;
}
