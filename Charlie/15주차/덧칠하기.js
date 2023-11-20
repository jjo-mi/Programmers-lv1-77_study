// 덧칠하기
// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  let answer = 0,
    current = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] <= current) continue;
    answer += 1;
    current = section[i] + m - 1;
  }

  return answer;
}

// 칠하지 않은 가장 왼쪽부터 칠하는 것
