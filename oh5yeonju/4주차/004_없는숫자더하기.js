// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/86051
function solution(numbers) {
    let totalSum = 1+2+3+4+5+6+7+8+9;
    let arraySum = 0;
    for(let i of numbers) {
        arraySum += i;
    }
    return totalSum - arraySum;
}