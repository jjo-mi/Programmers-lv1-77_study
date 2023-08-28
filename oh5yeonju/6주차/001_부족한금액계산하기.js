function solution(price, money, count) {
    // price * 1 + price * 2 + ... + price * count
    let result = 0;
    for(let i = 1; i <= count; i++) {
        result += price * i
    }
    return money - result > 0 ? 0 : Math.abs(money - result);
}