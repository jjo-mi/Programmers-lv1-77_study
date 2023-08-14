// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12910
function solution(arr, divisor) {
    const newArray = []
    arr.filter(v => {
        if(!(v % divisor)) {
            newArray.push(v)
        }
    })
    return newArray.length ? newArray.sort((a,b) => a - b) : [-1]
}