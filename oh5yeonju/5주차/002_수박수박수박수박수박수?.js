function solution(n) {
    const watermelon =['수', '박'];

    let result = '';
    for (let i = 0; i < n; i++) {
        result += watermelon[i % 2];
    }
    return result;
}