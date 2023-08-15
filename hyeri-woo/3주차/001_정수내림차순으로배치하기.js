function solution(n) {
  return parseInt([...(n + "")].sort((a, b) => b - a).join(""));
}
