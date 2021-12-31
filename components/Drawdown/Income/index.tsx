import AmountInput from '../AmountInput';
import YearsInput from '../YearsInput';
import Rate from '../Rate';
import Content from '../Content';
import Summary from '../Summary';

import { OptionType } from '../../Choice/Options';

import IncomeFormula from '../Formulas/Income';

import { abbreviateNumberFormatter } from '../../Helpers/formatters';

type Props = {
  amount: number;
  setAmount: (amount: number) => void;
  rate: OptionType;
  setRate: (rate: OptionType) => void;
  time: OptionType;
  setTime: (years: OptionType) => void;
  interest: number;
};

const SummaryDetails = ({
  amount,
  years,
}: {
  amount: number;
  years: number;
}) => {
  return (
    <>
      ${abbreviateNumberFormatter(amount)} &middot;
      {abbreviateNumberFormatter(years)} Years
    </>
  );
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
      <Summary result={income} resultLabel="Target Income">
        <SummaryDetails amount={amount} years={years} />
      </Summary>
    </>
  );
};

export default Income;
