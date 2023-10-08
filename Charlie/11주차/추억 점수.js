// 추억 점수 - 176963

// [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/176963)

function solution(name, yearning, photo) {
  const answer = [];

  for (const phase of photo) {
    let count = 0;
    for (const nm of phase) {
      const index = name.indexOf(nm);
      count += index === -1 ? 0 : yearning[index];
    }
    answer.push(count);
  }
  return answer;
}
