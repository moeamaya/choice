import AmountInput from '../AmountInput';
import IncomeInput from '../IncomeInput';
import Rate from '../Rate';
import Content from '../Content';
import Summary from '../Summary';
import Inflation from '../Inflation';

import { OptionType } from '../../Choice/Options';

import YearsFormula from '../Formulas/Years';

import { abbreviateNumberFormatter } from '../../Helpers/formatters';


type Props = {
  amount: number;
  setAmount: (value: number) => void;
  income: OptionType;
  setIncome: (income: OptionType) => void;
  rate: OptionType;
  setRate: (rate: OptionType) => void;
  inflation: OptionType;
  setInflation: (inflation: OptionType) => void;
  draw: number;
  interest: number;
  inflationRate: number;
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
  rate,
  setRate,
  inflation,
  setInflation,
  draw,
  interest,
  inflationRate
}) => {
  const years = YearsFormula(1 + inflationRate, 1 + interest, amount, draw);

  return (
    <>
      <AmountInput value={amount} setValue={setAmount} />
      <IncomeInput option={income} setOption={setIncome} />

      <Rate option={rate} setOption={setRate} />
      <Inflation option={inflation} setOption={setInflation} />

      <Content />
      <Summary resultLabel="Duration" result={years}>
        <SummaryDetails amount={amount} draw={draw} />
      </Summary>
    </>
  );
};

export default Years;
