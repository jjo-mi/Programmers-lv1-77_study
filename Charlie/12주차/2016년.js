
// 2016년
// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let count = 0;

  for (let i = a - 1; i >= 1; i--) count += months[i - 1];
  count += b - 1;

  return days[parseInt(count % 7)];
}
