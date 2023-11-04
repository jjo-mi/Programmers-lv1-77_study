function solution(number, limit, power) {
  const countArr = new Array(number + 1).fill(0);

  for (let i = 1; i <= number; i++) {
    for (let j = 1; i * j <= number; j++) {
      countArr[i * j] += 1;
    }
  }
  const answer = countArr.reduce((ac, cu) => {
    return ac + (cu > limit ? power : cu);
  }, 0);
  return answer;
}

// NOTE
// 시간초과를 해결해야 했던 문제
// 1 ~ N / 2 까지 반복 -> 실패
// 약수 하나 구하면 나누는 것 반복 -> 실패
// '에라토스테네스의 체' 활용 -> 성공
