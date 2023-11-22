// 옹알이(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function repeatException(word) {
  const except = ["ayaaya", "yeye", "woowoo", "mama"];

  for (const pro of except) {
    if (word.includes(pro)) return false;
  }
  return true;
}

function solution(babbling) {
  const pron = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (!repeatException(babbling[i])) continue; // 같은 발음 연속 두번 예외처리

    let word = babbling[i];
    for (let j = 0; j < 4; j++) {
      const regexp = new RegExp(`${pron[j]}`, "g");
      word = word.replace(regexp, " "); // 모두 ' ' 로 치환
    }

    if (word.trim() === "") count += 1;
  }
  return count;
}

console.log(solution(["aya", "yee", "u", "maa"]));

// 탐색 후 잘라내면 되는데 문제가 있다.
// 1. 잘린 단면이 합쳐져 유효한 단어가 되는 경우
// 2. 탐색 앞 뒤로 같은 발음이 있는 경우

// 1번 해결법: 자르고 난 자리에 공백을 넣어서 구분자를 준다.
// 2번 해결법: 사전에 이어진 문자열 탐색으로 예외처리 해준다.
