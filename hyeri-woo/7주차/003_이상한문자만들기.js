function solution(s) {
  return [...s]
    .map((item, idx) => {
      if (idx % 2 == 0) return item.toUpperCase();
      else return item.toLowerCase();
    })
    .join("");
  // return s.split(" ").map((v) => {
  //     return [...v].map((v2, i) => {
  //        if(i%2 == 0) return v2.toUpperCase();
  //         else return v2.toLowerCase();
  //     }).join("");
  // }).join(" ");
}
