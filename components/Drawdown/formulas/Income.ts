import { dollarFormatter } from '../../Helpers/formatters';

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
  return (
    principal *
    (inflationInterest(interest, inflation) /
      compoundInflationInterest(interest, inflation, years))
  );
};

const format = (value: number): string => {
  const roundedValue = Math.round(value);
  return `${dollarFormatter(roundedValue)}`;
};

const Income = (
  interest: number,
  inflation: number,
  principal: number,
  years: number
): string => {
  const value = calculate(interest, inflation, principal, years);
  return format(value);
};

export default Income;
