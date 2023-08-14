// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    let stringX = String(x);
    let dividedNumber = 0;
    for(let i = 0; i < stringX.length; i++) {
        dividedNumber += Number(stringX[i])
    }
    return !(x % dividedNumber) ? true : false;
}