function solution(n) {
  let answer = n;
  for (let i = n; i >= 1; i--) {
    if (n % i === 1) {
      answer = i;
    }
  }
  return answer;
}
