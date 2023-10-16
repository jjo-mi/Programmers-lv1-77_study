// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const set = new Set(nums);
  return set.size < nums.length / 2 ? set.size : nums.length / 2;
}

console.log(solution(arr));

//NOTE
// 개수 와 max 비교
