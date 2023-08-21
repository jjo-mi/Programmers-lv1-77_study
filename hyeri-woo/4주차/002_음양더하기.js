function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((item, index) => {
    signs[index] ? (answer += item) : (answer -= item);
  });
  return answer;
}
