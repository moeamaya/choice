import { FC } from 'react';

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
  time: OptionType;
  setTime: (years: OptionType) => void;
  interest: number;
  children: React.ReactNode;
};

type SummaryDetailsProps = {
  amount: number;
  years: number;
};

const SummaryDetails = ({ amount, years }: SummaryDetailsProps) => {
  return (
    <>
      ${abbreviateNumberFormatter(amount)} · {abbreviateNumberFormatter(years)} Years
    </>
  );
};

const Income: FC<Props> = ({
  amount,
  setAmount,
  interest,
  time,
  setTime,
  children,
}) => {
  const years = parseFloat(time.value);
  const income = IncomeFormula(1 + interest, 1.029, amount, years);

  return (
    <>
      <AmountInput value={amount} setValue={setAmount} />
      <YearsInput option={time} setOption={setTime} />

      {children}

      <Content />
      <Summary result={income} resultLabel="Target withdraw">
        <SummaryDetails amount={amount} years={years} />
      </Summary>
    </>
  );
};

export default Income;
