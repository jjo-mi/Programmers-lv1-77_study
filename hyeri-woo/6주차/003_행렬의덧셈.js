function solution(arr1, arr2) {
  return arr1.map((v, i) => v.map((vv, vi) => vv + arr2[i][vi]));
}
