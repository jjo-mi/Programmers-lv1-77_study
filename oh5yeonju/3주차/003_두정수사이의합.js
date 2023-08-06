// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    const startNum = a - b > 0 ? b : a;
    const endNum = startNum === a ? b : a;
    let sum = 0;
    for(let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
}