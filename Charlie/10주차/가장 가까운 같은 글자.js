/*
가장 가까운 같은 글자
https://school.programmers.co.kr/learn/courses/30/lessons/142086

문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

*/

function solution(str) {
  const answer = [];
  for (let i = 0; i < str.length; i++)
    answer.push(
      str.indexOf(str[i]) === i ? -1 : i - str.lastIndexOf(str[i], i - 1)
    );
  return answer;
}

// function solution(str) {
//   const history = {};
//   const answer = [];

//   str.split("").forEach((alpha, idx) => {
//     if (Object.keys(history).includes(alpha)) {
//       answer.push(idx - history[alpha]);
//       history[alpha] = idx;
//     } else {
//       answer.push(-1);
//       history[alpha] = idx;
//     }
//   });
//   return answer;
// }

/*

객체에 최근 인덱스를 저장하며 반복했던 기존 코드
-> 
lastIndexOf 메서드를 활용
앞서 먼저 나왔다는 확신이 있으면 현재 인덱스 앞에서부터 역으로 index 찾으면 해결
못 찾으면 -1을 return한다는 점을 이용하고 싶었는데,
인덱스를 반환하는 것이 아니라 거리를 반환하는 거라 결국 조건문이 들어가야 해서 실패

*/
