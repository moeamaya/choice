import { dollarFormatter } from '../../Helpers/formatters';

const inflationInterest = (interest: number, inflation: number): number =>
  inflation / interest - 1;

const compoundInflationInterest = (
  interest: number,
  inflation: number,
  years: number
): number => {
  return Math.pow(inflation / interest, years) - 1;
};

const calculate = (
  interest: number,
  inflation: number,
  draw: number,
  years: number
): number => {
  const ii = inflationInterest(interest, inflation);
  const cii = compoundInflationInterest(interest, inflation, years);

  return draw * ( cii  / ii);
};

const format = (value: number): string => {
  const roundedValue = Math.round(value);
  return `${dollarFormatter(roundedValue)}`;
};

const Savings = (
  interest: number,
  inflation: number,
  draw: number,
  years: number
): string => {
  const value = calculate(interest, inflation, draw, years);
  return format(value);
};

export default Savings;
