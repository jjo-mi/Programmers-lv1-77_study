/* 
문제 설명
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000

입출력 예
left	right	result
13	17	43
24	27	52

입출력 예 설명
입출력 예 #1
다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.
수	약수	약수의 개수
13	1, 13	2
14	1, 2, 7, 14	4
15	1, 3, 5, 15	4
16	1, 2, 4, 8, 16	5
17	1, 17	2
따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.

입출력 예 #2
다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.
수	약수	약수의 개수
24	1, 2, 3, 4, 6, 8, 12, 24	8
25	1, 5, 25	3
26	1, 2, 13, 26	4
27	1, 3, 9, 27	4
따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.
*/

function solution(left, right) {
  const arr = Array.from({ length: right - left + 1 }, (_, i) => left + i);
  return arr.reduce(
    (acc, cur) => acc + (Math.sqrt(cur) % 1 === 0 ? -cur : cur),
    0
  );
}

// NOTE: 까먹지 않기위해 메모
// Array.from()의 첫번째 인자는 배열로 변환하고 싶은 객체(+유사객체),  두번째 인자에는 배열의 모든 요소에 대해 호출할 맵핑 함수가 옴

/*
1. Array.from({length: right - left + 1}, (_, i) => left + i)
첫번째 인자로 들어가는 객체의 길이는 17 - 13 + 1 = 5임.
length가 5인 객체이고 값을 이제 두번째 인자의 맵핑 함수에서 넣어줌.
left + i 로 13부터 17까지 넣어줌.

2. arr.reduce((acc, cur) => acc + (Math.sqrt(cur) % 1 === 0 ? -cur : cur), 0);
계산해주는 reduce.
acc는 누적값
Math.sqrt(cur) % 1 === 0은 current의 제곱근이 정수인지를 판별 대칭을 이루는 쌍이 있으면 정수. (4 * 4 = 16)처럼 
제곱근이 정수라면 약수의 개수가 홀수. 
제곱근이 정수라면은 정수 % 1 === 0이기때문에 -cur를 해주는 것.
*/

function solution(s) {
  const sorted = s.split('').sort((a, b) => {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  });
  return sorted.join('');
}
