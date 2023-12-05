// 숫자 짝꿍
// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  let answer = "";
  const arrX = X.split(""),
    arrY = Y.split("");

  for (let i = 9; i >= 0; i--) {
    answer += (i + "").repeat(
      Math.min(
        arrX.filter((num) => parseInt(num) === i).length,
        arrY.filter((num) => parseInt(num) === i).length
      )
    );
  }
  if (answer.length === 0)
    // 없을때
    return "-1";
  if (/^0+$/.test(answer))
    // 0으로만 이루어져있을때
    return "0";
  return answer;
}

// NOTE
// 100 : 10000 의 경우 0이 두개 겹친다는 것을 확인해야 한다.
// 중복을 체크하기 위해서는
// 1. Y 배열에 index를 따로 저장하여 해당 index인 경우를 제외시킨다.
// 2. Y 배열에 해당하는 숫자를 매번 제거해준다.
// 3. 0 ~ 9 까지 순서대로 체크한다.

// 각 배열의 길이는 최대 3,000,000
// 1,2번 방법도 가능하겠지만 3번이 코드적으로 가장 간단해보여서 그렇게 시도했다.
// 그리고는 절반만 맞고, 절반은 틀렸다.

// 원인은 마지막에 '0000' -> '0' 으로 만들어주기 위한 코드
// parseInt(answer) + '' 에 있었다

/* 
// REVIEW
6~15번 반례찾으시는분들 제가 겪은 경험으로는 string join 하시고 아마 00000 이런 경우 예외처리 해주려고 numer로 형변환
처리 하셨을거예요 . 근데 문제를보니 300만 x 300만 까지 될수가 잇어서 int 허용범위를 넘어서게됩니다.
그러니까 해당부분에서 오류가 나는거니 혹시 number로 형변환 하고 계신분들은 다른방법으로 예외처리 하시길 바랍니다.
---
해당 질문을 발견.
이 부분을 생각하지 못했다.

0으로만 이루어진 경우를 제거하기 위함이기에
굳이 parseInt를 사용하지 않아도 됐다.
*/
