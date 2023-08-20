/*
1. 문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

2. 제한 사항
str은 길이 1 이상인 문자열입니다.

3.입출력 예
s	          return
"Zbcdefg"	  "gfedcbZ"
*/

function solution(s) {
    const lowerChar = s.split('').filter(char => char >= 'a' && char <= 'z').sort().reverse().join('');
    const upperChar = s.split('').filter(char => char >= 'A' && char <= 'Z').sort().reverse().join('');
    
    return lowerChar + upperChar;
}

// 참고할만한 풀이
function solution(s) {
    let answer = [[],[]];
    for (let i=0; i<s.length; i++) {
        if(s[i] === s[i].toUpperCase()) {
            answer[1].push(s[i])
        } else {
            answer[0].push(s[i])
        }
    }
    let ans1 = answer[0].sort().reverse().join('');
    let ans2 = answer[1].sort().reverse().join('');
    answer = [ans1, ans2].join('')
    return answer
}