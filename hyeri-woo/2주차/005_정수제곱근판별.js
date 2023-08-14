function solution(n) {
    var answer = Math.sqrt(n);
    return answer % 1 ? -1 : (answer+1)**2;
}
