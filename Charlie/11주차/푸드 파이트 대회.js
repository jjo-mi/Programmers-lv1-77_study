// 푸드 파이트 대회 - 134240
// [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/134240)

// 한번에 양쪽 다 만드는 방법
// function solution(food) {
//     const answer = [0];

//     for (let idx = food.length - 1; idx > 0; idx--) {
//         answer.push((idx + '').repeat(Math.floor(food[idx] / 2)));
//         answer.unshift((idx + '').repeat(Math.floor(food[idx] / 2)));
//     }
//     return answer.join('');
// }

// 한쪽만 완성하고 뒤집어 붙이는 방법
function solution(food) {
  const answer = [];
  food.forEach((count, idx) => {
    answer.push((idx + "").repeat(Math.floor(count / 2)));
  });
  return answer.join("") + "0" + answer.reverse().join("");
}

/*
    String.(prototype).repeat :: 문자열 반복 메서드
*/
