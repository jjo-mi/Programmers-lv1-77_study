// 과일 장수
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let answer = 0;
  for (let i = m - 1; i < score.length; ) {
    answer += score[i] * m;
    i += m;
  }
  return answer;
}

//NOTE
// 조합 중 가장 작은 수와의 곱이기에 단순 자르기만 하면 가능
// 만약 가장 큰 수였다면, 가장 큰 수 하나와 나머지는 작은 순으로 잘라내면 될 것
