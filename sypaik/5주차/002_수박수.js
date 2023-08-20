/*
1. 문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

2. 제한 조건
n은 길이 10,000이하인 자연수입니다.

3. 입출력 예
n	    return
3	   "수박수"
4	   "수박수박"
*/

function solution(n) {
  let answer = '';
  const even = '수';
  const odd = '박';
  for(let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? even : odd;
  }
  return answer;
}

// 참고할 풀이 (repeat 사용)
function solution(n) {
  return "수박".repeat(n / 2) + ((n%2) ? '수' : '');
}