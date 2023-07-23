function solution(x, n) {
    return Array(n).fill().map((item, idx) => x*(idx+1));
}
