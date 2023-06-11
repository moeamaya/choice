import { FC, useContext } from 'react';
import AmountInput from '../AmountInput';
import IncomeInput from '../IncomeInput';
import Content from '../Content';
import Summary from '../Summary';

import YearsFormula from '../Formulas/Years';

import { abbreviateNumberFormatter } from '../../Helpers/formatters';

import { OptionType } from '../../Choice/Options';
import { CalculatorContext } from '../CalculatorProvider';
import type { CalculatorContextProps } from '../CalculatorProvider';

type Props = {
  draw: number;
  interest: number;
  inflationRate: number;
  children: React.ReactNode;
};

type ChangeProps = (
  key: string,
  value: OptionType | number,
  setCalculatorState: CalculatorContextProps['setCalculatorState']
) => void;

const SummaryDetails = ({ amount, draw }: { amount: number; draw: number }) => {
  return (
    <>
      ${abbreviateNumberFormatter(amount)} &middot; $
      {abbreviateNumberFormatter(draw)}
    </>
  );
};

const handleChange: ChangeProps = (key, option, setCalculatorState) => {
  setCalculatorState((prevState) => ({
    ...prevState,
    [key]: option,
  }));
};

const Years: FC<Props> = ({ draw, interest, inflationRate, children }) => {
  const { calculatorState, setCalculatorState } = useContext(CalculatorContext);

  const amount = calculatorState.amount;
  const years = YearsFormula(1 + inflationRate, 1 + interest, amount, draw);

  return (
    <>
      <AmountInput
        value={amount}
        setValue={(value) =>
          handleChange('amount', value, setCalculatorState)
        }
      />
      <IncomeInput
        option={calculatorState.income}
        setOption={(value) =>
          handleChange('income', value, setCalculatorState)
        }
      />

      {children}

      <Content />
      <Summary resultLabel="Duration" result={years}>
        <SummaryDetails draw={draw} amount={amount} />
      </Summary>
    </>
  );
};

export default Years;
