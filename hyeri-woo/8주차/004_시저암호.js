function solution(s, n) {
  // y 에서 두칸이면 a
  // x 에서 세칸이면 a
  const alphabet = "abcdefghijklnmopqrstuwxyz";
  return [...s]
    .map((v, i) => {
      if (v == " ") return " ";
      let isUpper = v.toUpperCase() === v;
      let index = alphabet.indexOf(v.toLowerCase()) + n;
      if (index >= alphabet.length) index -= alphabet.length;
      return isUpper ? alphabet[index].toUpperCase() : alphabet[index];
    })
    .join("");
}
