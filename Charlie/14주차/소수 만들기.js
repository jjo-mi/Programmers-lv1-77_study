// 소수 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12977
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let answer = 0;

  for (let x = 0; x < nums.length; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      for (let z = y + 1; z < nums.length; z++) {
        if (isPrime(nums[x] + nums[y] + nums[z])) answer += 1;
      }
    }
  }
  return answer;
}

// NOTE
// 소수 찾기 문제와는 달리 숫자 범위가 작다
// 숫자 3개를 뽑는 경우를 조합 알고리즘을 사용해야 했는데, 이 또한 범위가 작다
