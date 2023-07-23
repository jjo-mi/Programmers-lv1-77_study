// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
    let strN = String(n);
    let num = 0;
    
    for(let i = 0; i < strN.length; i++) {
        num += Number(strN[i]);
    }
    return num;
}