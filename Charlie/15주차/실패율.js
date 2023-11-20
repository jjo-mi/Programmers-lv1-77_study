// 실패율
// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const data = [],
    totalPlayers = stages.length;

  stages.sort((a, b) => a - b);

  for (let stage = 1; stage <= N; stage++) {
    const stagePlayers = totalPlayers - stages.indexOf(stage); // 해당 스테이지를 지나치거나 도달한 사람들
    const notClearPlayers =
      stages.indexOf(stage) === -1
        ? 0
        : stages.lastIndexOf(stage) - stages.indexOf(stage) + 1; // 해당 스테이지에 머물러있는 사람들

    data.push([stage, notClearPlayers / stagePlayers]);
  }

  data.sort((a, b) => {
    return b[1] - a[1];
  }); // 실패율 기준으로 정렬 (실패율이 같으면 이미 오름차순으로 정렬되어 있어 괜찮)
  const answer = data.map((record) => record[0]);
  return answer;
}

// NOTE
// 처음에는 변수를 많이 만들어서 반복문을 많이 돌렸는데
// indexOf를 활용할 수 있겠다는 생각이 들었다.
