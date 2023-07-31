function solution(n) {
  let answer = [];
  for (let i = n; i >= 0; i--) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer.reduce((a, b) => a + b, 0);
}
