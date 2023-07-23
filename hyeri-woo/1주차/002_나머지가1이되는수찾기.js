function solution(n) {
    var answer = n-1;
    for(let i=2; i<n; i++) {
        if((n-1)%i == 0) {
            answer = i;
            break;
        }
    }
    return answer;
}
