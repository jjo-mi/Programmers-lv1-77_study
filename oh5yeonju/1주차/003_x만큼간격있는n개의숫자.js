// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
    const arr = [];
    for(let i = 1; i <= n; i++) {
        arr.push(x*i);
    }
    return arr;
}