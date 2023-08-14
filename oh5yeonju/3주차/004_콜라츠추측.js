// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12943
function solution(num) {
    let result = num;
    let repeatNumber = 0;
    while(result !== 1) {
        if(result % 2) {
            result = result * 3 + 1;
            repeatNumber++;
        } else {
            result = result / 2;
            repeatNumber++;
        }
    }
    return repeatNumber < 500 ? repeatNumber : -1;
}