function solution(arr1, arr2) {
    const resultArray = [];
    for(let i = 0; i < arr1.length; i++) {
        const innerArray = [];

        for(let j = 0; j < arr1[0].length; j++) {
            innerArray.push(arr1[i][j] + arr2[i][j]);
        }
        resultArray.push(innerArray);
    }
    return resultArray;
}

// 통과 못한 풀이
// function solution(arr1, arr2) {
//     const resultArray = [];
//     const innerArray = [];
//     for(let i = 0; i < arr1.length; i++) {
//         for(let j = 0; j < arr1[0].length; j++) {
//             innerArray.push(arr1[i][j] + arr2[i][j]);
//         }
//         resultArray.push(innerArray);
//     }
//     return resultArray;
// }