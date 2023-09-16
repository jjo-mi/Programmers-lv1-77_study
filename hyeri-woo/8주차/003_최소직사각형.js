function solution(sizes) {
  const organizaedSizes = sizes.map((item) => {
    if (item[1] > item[0]) {
      return [item[1], item[0]];
    } else {
      return item;
    }
  });

  const maxWidth = Math.max(...organizaedSizes.map((item) => item[0]));
  const maxHeight = Math.max(...organizaedSizes.map((item) => item[1]));
  return maxWidth * maxHeight;
}
