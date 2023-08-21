function solution(x) {
  var sum = [...(x + "")].reduce((a, b) => a + parseInt(b), 0);
  return x % sum == 0;
}
