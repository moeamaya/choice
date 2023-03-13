const decimalFormatter = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 1 });

export const abbreviateNumberFormatter = (value: number): string => {
  let iter = value;
  
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixNum = 0;
  while (iter >= 1000) {
    iter /= 1000;
    suffixNum++;
  }
  
  let newValue = decimalFormatter.format(iter);

  newValue += suffixes[suffixNum];
  return newValue;
};

// percentFormatter.ts
export const percentFormatter = (value: number): string => {
  return Number(value).toLocaleString(undefined,{style: 'percent', minimumFractionDigits: 1});
};


// TODO: Extract as helper
export const dollarFormatter = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0, 
    minimumFractionDigits: 0, 
  }).format(number);
};

