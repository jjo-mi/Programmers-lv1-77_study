
// 명예의 전당 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  const stage = [];
  const answer = [];

  for (const num of score) {
    if (stage.length < k) {
      stage.push(num);
    } else if (stage[0] < num) {
      stage.shift();
      stage.push(num);
    }
    stage.sort((a, b) => a - b);
    answer.push(stage[0]);
    console.log(stage);
  }
  return answer;
}

// [작은수, 큰수, ..., k] 순서로 저장하여 0번째 인덱스로만 비교
