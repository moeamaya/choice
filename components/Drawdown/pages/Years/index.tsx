import { FC, useContext } from 'react';
import AmountInput from '../../components/inputs/Amount';
import IncomeInput from '../../components/inputs/Income';
import Content from '../../content/Content';
import Summary from '../../components/Summary';

import YearsFormula from '../../formulas/Years';

import { abbreviateNumberFormatter } from '../../../Helpers/formatters';

import { CalculatorContext } from '../../components/Calculator/provider';

type Props = {
  interest: number;
  inflation: number;
  children: React.ReactNode;
};

const SummaryDetails = ({ amount, draw }: { amount: number; draw: number }) => {
  return (
    <>
      ${abbreviateNumberFormatter(amount)} &middot; $
      {abbreviateNumberFormatter(draw)}
    </>
  );
};

const Years: FC<Props> = ({ interest, inflation, children }) => {
  const { calculatorState, setCalculatorState } = useContext(CalculatorContext);

  const amount = calculatorState.amount;
  const draw = parseFloat(calculatorState.income.value);
  const years = YearsFormula(inflation, interest, amount, draw);

  return (
    <>
      <AmountInput
        value={amount}
        setValue={(value) => {
          setCalculatorState((prevState) => ({
            ...prevState,
            amount: value,
          }));
        }}
      />
      <IncomeInput
        option={calculatorState.income}
        setOption={(option) => {
          setCalculatorState((prevState) => ({
            ...prevState,
            income: option,
          }));
        }} />

      {children}

      <Content />
      <Summary resultLabel="Duration" result={years}>
        <SummaryDetails draw={draw} amount={amount} />
      </Summary>
    </>
  );
};

export default Years;
