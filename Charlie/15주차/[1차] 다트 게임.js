// [1차] 다트 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  let scores = [0];
  const prizes = "OSDT";

  for (let i = 0; i < dartResult.length; ) {
    let currentValue = dartResult[i++]; // 처음 점수

    // 점수(currentValue) 다음에 '0'이 나오는 경우는 점수가 10점인 경우뿐이다.
    if (dartResult[i] === "0") {
      currentValue = 10;
      i++;
    }

    // SDT 인덱스가 1, 2, 3 인것을 이용
    currentValue = Math.pow(currentValue, prizes.indexOf(dartResult[i++]));

    // 보너스가 있을때
    if (i < dartResult.length && dartResult[i] === "*") {
      scores[scores.length - 1] *= 2;
      currentValue *= 2;
      i++;
    } else if (i < dartResult.length && dartResult[i] === "#") {
      currentValue *= -1;
      i++;
    }

    scores.push(currentValue);
  }

  // * 의 경우 이전 점수에 가산되는 점이 있기에, 바로 합산하지 않고
  // 배열에 저장해둔 뒤에 한번에 계산
  return scores.reduce((ac, cu) => {
    return ac + cu;
  }, 0);
}
