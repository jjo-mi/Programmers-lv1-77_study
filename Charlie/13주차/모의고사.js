// 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const people = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const correct = [0, 0, 0];

  for (const x of answers) {
    for (let i = 0; i < 3; i++) {
      if (people[i][0] === x) correct[i] += 1;
      people[i].push(people[i].shift());
    }
  }

  const max = Math.max(...correct);
  const answer = [];
  for (let i = 0; i < 3; i++) {
    if (correct[i] === max) answer.push(i + 1);
  }
  return answer;
}

/*
//NOTE
사람마다 답지 반복되는 구간을 어떻게 반복하지 하다가
push shift로 돌리기로 함
*/
