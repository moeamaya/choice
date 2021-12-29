const principalWithdraw = (principal: number, withdraw: number): number => {
  return principal / withdraw;
};

const inflationInterest = (interest: number, inflation: number): number =>
  (interest - inflation) / interest;

const logTime = (
  inflation: number,
  interest: number,
  principal: number,
  withdraw: number
): number => {
  const oneMinus =
    1 -
    principalWithdraw(principal, withdraw) *
      inflationInterest(interest, inflation);
  return Math.log(oneMinus);
};

const calculate = (
  inflation: number,
  interest: number,
  principal: number,
  withdraw: number
): number => {
  const timeRate = logTime(inflation, interest, principal, withdraw);

  if (isNaN(timeRate)) return 1000;

  const interestRate = Math.log(inflation / interest);
  return timeRate / interestRate;
};

const durationFormatter = (value: number): string => {
  const totalDays = value * 365;
  const years = Math.floor(totalDays/365);

  let yearsDur = years > 0 ? `${years} year` : '';
  yearsDur = years > 1 ? `${yearsDur}s` : yearsDur;

  const months = Math.floor((totalDays-(years *365))/30);
  let monthsDur = months > 0 ? `${months} month` : '';
  monthsDur = months > 1 ? `${monthsDur}s` : monthsDur;
  
  const and = years > 0 && months > 0 ? ' and ' : '';

  return `${yearsDur}${and}${monthsDur}`;
};

const format = (value: number): string => {
  return value === 1000 ? '1,000+ years' : durationFormatter(value);
};

const Years = (
  inflation: number,
  interest: number,
  principal: number,
  withdraw: number
): string => {
  const value = calculate(inflation, interest, principal, withdraw);
  return format(value);
};

export default Years;
