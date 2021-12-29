export const abbreviateNumberFormatter = (value: number): string => {
  let iter = value;
  

  const suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixNum = 0;
  while (iter >= 1000) {
    iter /= 1000;
    suffixNum++;
  }
  console.log(iter);
  
  let newValue = iter.toPrecision(3);

  newValue += suffixes[suffixNum];
  return newValue;
};
