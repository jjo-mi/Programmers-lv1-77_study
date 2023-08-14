// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    return parseInt([...String(n)].sort((a,b) => b-a).join(''));
}