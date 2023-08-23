function solution(s) {
  let len = s.length;
  return len % 2 == 0
    ? s.substring(len / 2 - 1, len / 2 + 1)
    : s[Math.floor(len / 2)];
}
