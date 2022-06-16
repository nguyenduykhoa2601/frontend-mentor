export const findMaxMount = (arr: Array<any>) => {
  const max = Math.max(...arr.map((o) => o.amount));
  return max;
};

export const checkTypeMenu = (data: any) => {
  let flag = false;
  if (data?.name) flag = true;
  return flag;
};
