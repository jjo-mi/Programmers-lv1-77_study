function solution(left, right) {
  let answer = 0;
  let count;
  for (let i = left; i <= right; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) count++;
    }
    if (count % 2 == 0) answer += i;
    else answer -= i;
  }
  return answer;
}
