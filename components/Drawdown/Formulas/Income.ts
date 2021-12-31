const inflationInterest = (interest: number, inflation: number): number =>
  1 - inflation / interest;

const compoundInflationInterest = (
  interest: number,
  inflation: number,
  years: number
): number => {
  return 1 - Math.pow(inflation / interest, years);
};

const calculate = (
  interest: number,
  inflation: number,
  principal: number,
  years: number
): number => {
  return principal * (inflationInterest(interest, inflation) / compoundInflationInterest(interest, inflation, years));
};


const durationFormatter = (value: number): string => {
  const totalDays = value * 365;
  const years = Math.floor(totalDays / 365);

  let yearsDur = years > 0 ? `${years} year` : '';
  yearsDur = years > 1 ? `${yearsDur}s` : yearsDur;

  const months = Math.floor((totalDays - years * 365) / 30);
  let monthsDur = months > 0 ? `${months} month` : '';
  monthsDur = months > 1 ? `${monthsDur}s` : monthsDur;

  const and = years > 0 && months > 0 ? ' ' : '';

  return `${yearsDur}${and}${monthsDur}`;
};

const format = (value: number): string => {
  return value === 1000 ? '1,000+ years' : durationFormatter(value);
};

const Income = (
  interest: number,
  inflation: number,
  principal: number,
  years: number
): string => {
  const value = calculate(interest, inflation, principal, years);
  console.log(value);
  
  // return format(value);
  return '';
};

export default Income;
