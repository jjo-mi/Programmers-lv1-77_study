function solution(num1, num2) {
    let 최대공약수 = 0;
    let 최소공배수 = 0;

    let num = num1 > num2 ? num1 : num2;

    for(let i = 1; i < num; i++) {
        if(num1 % i === 0 && num2 % i === 0) {
            최대공약수 = i;
        }
    }

    최소공배수 = num1 * num2 / 최대공약수;

    return [최대공약수, 최소공배수]
}