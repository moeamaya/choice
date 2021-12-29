const formatter = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 1 });

export const abbreviateNumberFormatter = (value: number): string => {
  let iter = value;
  
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixNum = 0;
  while (iter >= 1000) {
    iter /= 1000;
    suffixNum++;
  }
  console.log(iter);
  
  let newValue = formatter.format(iter);

  newValue += suffixes[suffixNum];
  return newValue;
};
