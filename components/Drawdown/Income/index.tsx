import AmountInput from '../AmountInput';
import YearsInput from '../YearsInput';
import Rate from '../Rate';
import Content from '../Content';
import Summary from '../Summary';

import { OptionType } from '../../Choice/Options';

import IncomeFormula from '../Formulas/Income';

type Props = {
  amount: number;
  setAmount: (amount: number) => void;
  rate: OptionType;
  setRate: (rate: OptionType) => void;
  time: OptionType;
  setTime: (years: OptionType) => void;
  interest: number;
};

const Income: React.FC<Props> = ({
  amount,
  setAmount,
  rate,
  setRate,
  interest,
  time,
  setTime,
}) => {
  const years = parseFloat(time.value);
  const income = IncomeFormula(1 + interest, 1.029, amount, years);

  return (
    <>
      <AmountInput value={amount} setValue={setAmount} />
      <YearsInput option={time} setOption={setTime} />

      <Rate option={rate} setOption={setRate} />

      <Content />
      {/* <Summary result={years} /> */}
    </>
  );
};

export default Income;
