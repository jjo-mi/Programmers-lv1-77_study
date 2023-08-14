// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/76501
function solution(absolutes, signs) {
    let sum = 0;
    const newArray = absolutes.map((ele,index) => {
        if(!signs[index]) {
            return absolutes[index] * -1;
        } else {
            return absolutes[index];
        }
    })
    for(let i of newArray) {
        sum += i
    }
    return sum;
}