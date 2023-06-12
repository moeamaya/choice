import { FC, useContext } from 'react';

import AmountInput from '../../components/inputs/Amount';
import YearsInput from '../../components/inputs/Years';
import Content from '../../content';
import Summary from '../../components/Summary';

import IncomeFormula from '../../formulas/Income';

import { abbreviateNumberFormatter } from '../../../Helpers/formatters';

import { CalculatorContext } from '../../components/Calculator/provider';

type Props = {
  interest: number;
  inflation: number;
  children: React.ReactNode;
};

type SummaryDetailsProps = {
  amount: number;
  years: number;
};

const SummaryDetails = ({ amount, years }: SummaryDetailsProps) => {
  return (
    <>
      ${abbreviateNumberFormatter(amount)} · {abbreviateNumberFormatter(years)}{' '}
      Years
    </>
  );
};

const Income: FC<Props> = ({ interest, inflation, children }) => {
  const { calculatorState, setCalculatorState } = useContext(CalculatorContext);

  const time = calculatorState.time;
  const amount = calculatorState.amount;

  const years = parseFloat(time.value);
  const income = IncomeFormula(interest, inflation, amount, years);

  return (
    <>
      <AmountInput value={amount} setValue={(value) => {
        setCalculatorState((prevState) => ({
          ...prevState,
          amount: value,
        }));
      }} />
      <YearsInput option={time} setOption={(option) => {
        setCalculatorState((prevState) => ({
          ...prevState,
          time: option,
        }));
      }} />

      {children}

      <Content />
      <Summary result={income} resultLabel="Target withdraw">
        <SummaryDetails amount={amount} years={years} />
      </Summary>
    </>
  );
};

export default Income;
