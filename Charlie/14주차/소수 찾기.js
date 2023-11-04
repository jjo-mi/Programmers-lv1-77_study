// 소수 찾기
//https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  const nums = new Array(n + 1).fill(1);
  nums[0] = 0;
  nums[1] = 0;

  for (let i = 2; i <= n; i++) {
    for (let j = 2; i * j <= n; j++) nums[i * j] = 0;
  }

  const answer = nums.reduce((a, c) => a + c, 0);
  return answer;
}

// NOTE
// '에라토스테네스의 체' 를 알게 해준 문제
// 딱 그대로 구현한 것은 아니지만, 비슷한 원리로 작성한 코드!
// (그래서 효율성이 조금 떨어진다)
// 항상 하던대로 제곱근까지 탐색을 하면 효율성을 통과하지 못한다.
// 소수 문제는 굉장히 대중화된 문제이기도 하니, 알아두는 것이 좋겠다!
