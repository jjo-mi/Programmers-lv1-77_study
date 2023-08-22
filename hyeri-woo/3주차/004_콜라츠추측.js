function solution(num) {
  var answer = 0;
  for (let i = 0; i <= 500; i++) {
    if (num == 1) break;
    if (num % 2 == 0) num /= 2;
    else num = num * 3 + 1;
    answer++;
  }
  return answer > 500 ? -1 : answer;
}
