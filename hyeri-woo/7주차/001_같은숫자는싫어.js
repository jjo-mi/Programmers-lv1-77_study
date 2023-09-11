function solution(arr) {
  arr.push(-1);
  let answer = [];
  let first = arr[0];
  arr.forEach((item) => {
    if (item != first) {
      answer.push(first);
      first = item;
    }
  });
  return answer;
}
