function solution(n) {
  // let answer = Array(n).fill().map((item, idx) =>{
  //     if(idx%2 == 0) return "수";
  //     else return "박";
  // });
  // return answer.join("");
  return "수박".repeat(n / 2).slice(0, n);
}
