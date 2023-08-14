function solution(n)
{
    // var answer = 0;
    // while(n > 0) {
    //     answer += (n%10);
    //     n = Math.floor(n/10);
    // }
    return [...(n + "")].reduce((a, b)=>a + parseInt(b), 0);
}
