function solution(x, n) {
  let answer = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += x;
    answer.push(count);
  }
  return answer;
}
