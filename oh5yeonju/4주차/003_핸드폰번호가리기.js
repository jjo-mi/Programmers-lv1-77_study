// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12948
function solution(phone_number) {
    // *은 length - 4 만큼 반복하고
    // 뒤애 slice 한 맨 뒷자리 4자리를 붙인다.
    return '*'.repeat(phone_number.length-4) + phone_number.slice(-4)
}