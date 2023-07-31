// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    let strN = String(n);
    let arr = [];
    for(let i = 0; i < strN.length; i++) {
        arr.push(Number(strN[i]));
    }
    return arr.reverse();
}