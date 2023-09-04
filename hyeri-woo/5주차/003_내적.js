function solution(a, b) {
  return a.reduce((acc, curr, idx) => acc + a[idx] * b[idx], 0);
}
