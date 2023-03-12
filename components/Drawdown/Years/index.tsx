import AmountInput from '../AmountInput';
import IncomeInput from '../IncomeInput';
import Content from '../Content';
import Summary from '../Summary';

import { OptionType } from '../../Choice/Options';

import YearsFormula from '../Formulas/Years';

import { abbreviateNumberFormatter } from '../../Helpers/formatters';


type Props = {
  amount: number;
  setAmount: (value: number) => void;
  income: OptionType;
  setIncome: (income: OptionType) => void;
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
  amount,
  setAmount,
  income,
  setIncome,
  draw,
  interest,
  inflationRate,
  children
}) => {
  const years = YearsFormula(1 + inflationRate, 1 + interest, amount, draw);

  return (
    <>
      <AmountInput value={amount} setValue={setAmount} />
      <IncomeInput option={income} setOption={setIncome} />

      {children}

      <Content />
      <Summary resultLabel="Duration" result={years}>
        <SummaryDetails amount={amount} draw={draw} />
      </Summary>
    </>
  );
};

export default Years;
