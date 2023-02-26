import React from 'react';

import AmountInput from '../AmountInput';
import IncomeInput from '../IncomeInput';
import Rate from '../Rate';
import Content from '../Content';
import Summary from '../Summary';

import { OptionType } from '../../Choice/Options';

import YearsFormula from '../Formulas/Years';

import { abbreviateNumberFormatter } from '../../Helpers/formatters';

const AmountInputMemo = React.memo(AmountInput);

type Props = {
  amount: number;
  setAmount: (value: number) => void;
  income: OptionType;
  setIncome: (income: OptionType) => void;
  rate: OptionType;
  setRate: (rate: OptionType) => void;
  draw: number;
  interest: number;
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
  draw,
  interest,
}) => {
  const years = YearsFormula(1.029, 1 + interest, amount, draw);

  return (
    <>
      <AmountInputMemo key="amountInput" value={amount} setValue={setAmount} />
      <IncomeInput option={income} setOption={setIncome} />

      <Rate option={rate} setOption={setRate} />

      <Content />
      <Summary resultLabel="Duration" result={years}>
        <SummaryDetails amount={amount} draw={draw} />
      </Summary>
    </>
  );
};

export default Years;
