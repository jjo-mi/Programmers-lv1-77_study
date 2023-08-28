function solution(s) {
    return (s.length === 4 || s.length === 6) && s == parseInt(s);
}

// 통과 못한 풀이1
// function solution(s) {
//     return [...s].filter((ele) => Number(ele)).length == s.length ? true : false
// }
// Number(0)은 false이기 때문에 filter로 출력되지 않아 s에 0이 포함되어 있다면 테스트를 통과할 수 없다고 생각했는데, isNaN(ele)로 변경해도 통과하지 못했습니다.

// 통과 못한 풀이2
// function solution(s) {
//     const regex = /[0-9]/g;
//     return s.replace(regex, '').length > 0 ? false : true
// }