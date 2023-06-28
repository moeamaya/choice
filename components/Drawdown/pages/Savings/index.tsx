import { FC, useContext } from 'react';

import YearsInput from '../../components/inputs/Years';
import IncomeInput from '../../components/inputs/Income';
import Content from '../../content';
import Summary from '../../components/Summary';

import SavingsFormula from '../../formulas/Savings';

import { abbreviateNumberFormatter } from '../../../Helpers/formatters';

import { CalculatorContext } from '../../components/Calculator/provider';
import Logs from '../../components/Logs';

type Props = {
  interest: number;
  inflation: number;
  children: React.ReactNode;
};

const SummaryDetails = ({ years, draw }: { years: number; draw: number }) => {
  return (
    <>
      {years} Years · ${abbreviateNumberFormatter(draw)}
    </>
  );
};

const Savings: FC<Props> = ({
  interest,
  inflation,
  children
}) => {
  const { calculatorState, setCalculatorState } = useContext(CalculatorContext);

  const time = calculatorState.time;

  const years = parseFloat(time.value);
  const draw = parseFloat(calculatorState.income.value);
  const savings = SavingsFormula(interest, inflation, draw, years);

  return (
    <>
      <IncomeInput
        option={calculatorState.income}
        setOption={(option) => {
          setCalculatorState((prevState) => ({
            ...prevState,
            income: option,
          }));
      }} />
      <YearsInput option={time} setOption={(option) => {
        setCalculatorState((prevState) => ({
          ...prevState,
          time: option,
        }));
      }} />

      {children}

      <Summary resultLabel="Savings needed" result={savings}>
        <SummaryDetails years={years} draw={draw} />
      </Summary>
    </>
  );
};

export default Savings;
