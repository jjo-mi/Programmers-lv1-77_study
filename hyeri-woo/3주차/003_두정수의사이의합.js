function solution(a, b) {
  // 1
  // var answer = 0;
  // for(i=Math.min(a, b); i<=Math.max(a, b); i++) {
  //     answer += i;
  // }
  // return answer;

  // 2
  // return Array(Math.max(a, b)-Math.min(a, b)+1)
  //         .fill(Math.min(a, b))
  //         .map((item, idx) => item+idx)
  //         .reduce((a, b) => a + b, 0);

  // 3
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sub = max - min;
  return min * (sub + 1) + (sub * (sub + 1)) / 2;
}
