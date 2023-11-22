// 로또의 최고 순위와 최저 순위
// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const prize = [6, 6, 5, 4, 3, 2, 1];
  let zeroCount = lottos.filter((num) => num === 0).length;
  const currentWin = lottos.filter((num) => win_nums.includes(num)).length;

  const answer = [prize[currentWin + zeroCount], prize[currentWin]];
  return answer;
}

// NOTE
// prize 를 key : value 아니고, index : value 로 접근
