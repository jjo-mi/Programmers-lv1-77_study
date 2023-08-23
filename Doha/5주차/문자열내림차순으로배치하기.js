/* 
문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.

입출력 예
s	return
"Zbcdefg"	"gfedcbZ"
*/

function solution(s) {
  return s.split('').sort().reverse().join('');
}

// NOTE: 문자열 정렬
/* 
- 문자열 오름차순 sort()
- 간단버전 문자열 내림차순 sort().reverse() //오름차순 후 뒤집기
- 문자열 내림차순 (원리이해용)
sort((a, b) => {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  });

비교함수(compareFunction)의 원리
sort()메소드에서 작동원리 -1을 반환하면 순서가 바뀜, 1을 반환하면 그대로, 0을 반환시 무의미
이외의 값을 반환하면 비교함수 작동안됨.
*/
