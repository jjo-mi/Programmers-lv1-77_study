// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    let num = 0;
    // arr[0] + arr[1] + arr[2] + ... + arr[arr.length-1] / arr.length
    for(let i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    return num / arr.length;
}