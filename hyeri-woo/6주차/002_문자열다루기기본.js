function solution(s) {
  // return (s.length == 4 || s.length == 6) && (s.split("").every(c => !isNaN(c)));
  //return (s.match(/[0-9]+/g)?.length != s.length);
  return (
    (s.length == 4 || s.length == 6) &&
    [...s.match(/[0-9]+/g)[0].toString()]?.length !== s.length
  );
}
