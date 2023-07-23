function solution(n) {
  const newArr = Array.from(String(n));
  return newArr.reduce((a, b) => a + parseInt(b), 0);
}
