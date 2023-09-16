function solution(number) {
  const comb = combination(number, 3);
  let answer = 0;
  for (let i of comb) {
    if (i.reduce((a, b) => a + b, 0) === 0) {
      answer++;
    }
  }
  return answer;
}

function combination(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    res.push(...attach);
  });
  return res;
}
