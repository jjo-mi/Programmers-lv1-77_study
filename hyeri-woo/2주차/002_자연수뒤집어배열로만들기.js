function solution(n) {
    return [...(n + "")].map(item=>parseInt(item)).reverse();
}
