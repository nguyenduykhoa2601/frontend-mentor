export const findMaxMount = (arr: Array<any>) => {
  const max = Math.max(...arr.map(o => o.amount))
  return max;
};
