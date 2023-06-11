import { FC, useContext } from 'react';

import YearsInput from '../Inputs/Years';
import IncomeInput from '../Inputs/Income';
import Rate from '../Inputs/Rate';
import Content from '../Content/Content';
import Summary from '../Summary';

import { OptionType } from '../../Choice/Options';

import SavingsFormula from '../Formulas/Savings';

import { abbreviateNumberFormatter } from '../../Helpers/formatters';

import { CalculatorContext } from '../CalculatorProvider';

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

const Savings: React.FC<Props> = ({
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

      <Content />
      <Summary resultLabel="Savings needed" result={savings}>
        <SummaryDetails years={years} draw={draw} />
      </Summary>
    </>
  );
};

export default Savings;
