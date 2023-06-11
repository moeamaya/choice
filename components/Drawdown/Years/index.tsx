import AmountInput from '../AmountInput';
import IncomeInput from '../IncomeInput';
import Content from '../Content';
import Summary from '../Summary';

import YearsFormula from '../Formulas/Years';

import { abbreviateNumberFormatter } from '../../Helpers/formatters';

import { useContext } from 'react';

import { CalculatorContext } from '../CalculatorProvider';

type Props = {
  draw: number;
  interest: number;
  inflationRate: number;
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


const Years: React.FC<Props> = ({
  draw,
  interest,
  inflationRate,
  children
}) => {
  const { calculatorState: state, setCalculatorState } = useContext(CalculatorContext) ?? {};

  const years = YearsFormula(1 + inflationRate, 1 + interest, state?.amount || 0, draw);

  return (
    <>
      <AmountInput />
      {/* <IncomeInput /> */}

      {children}

      <Content />
      <Summary resultLabel="Duration" result={years}>
        {/* <SummaryDetails draw={draw} /> */}
      </Summary>
    </>
  );
};

export default Years;
