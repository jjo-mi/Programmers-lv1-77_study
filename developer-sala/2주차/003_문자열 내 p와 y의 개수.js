function solution(s) {
  const lowerAlpha = s.toLowerCase();
  const findP = lowerAlpha.split('').filter((el) => el === 'p').length;
  const findY = lowerAlpha.split('').filter((el) => el === 'y').length;

  return findP === findY ? true : false;
}
