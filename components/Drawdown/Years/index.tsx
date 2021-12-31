import AmountInput from '../AmountInput';
import Income from '../Income';
import Rate from '../Rate';
import Content from '../Content';
import Summary from '../Summary';

import { OptionType } from '../../Choice/Options';

import YearsFormula from '../Formulas/Years';

type Props = {
  amount: number;
  setAmount: (amount: number) => void;
  income: OptionType;
  setIncome: (income: OptionType) => void;
  rate: OptionType;
  setRate: (rate: OptionType) => void;
  draw: number;
  interest: number;
};

const Years: React.FC<Props> = ({
  amount,
  setAmount,
  income,
  setIncome,
  rate,
  setRate,
  draw,
  interest,
}) => {
  const years = YearsFormula(1.029, 1 + interest, amount, draw);

  return (
    <>
      <AmountInput value={amount} setValue={setAmount} />
      <Income option={income} setOption={setIncome} />

      <Rate option={rate} setOption={setRate} />

      <Content />
      <Summary amount={amount} draw={draw} years={years} />
    </>
  );
};

export default Years;
