// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12935
function solution(arr) {
    const newArray = [...arr].sort((a,b) => a - b);
    return arr.filter(v => v !== newArray[0]).length ? arr.filter(v => v !== newArray[0]) : [-1]

}