// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    if(Math.sqrt(n) % 1 === 0) {
        return (Math.sqrt(n)+1) ** 2;
    } else {
        return -1;
    }
}