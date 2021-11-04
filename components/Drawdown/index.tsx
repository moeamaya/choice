import { useState } from 'react';
import AmountInput from './AmountInput';
import Time from './Time';
import Rate from './Rate';
import Income from './Income';
import Content from './Content';

import Summary from './Summary';

// TODO: Extract as helper
const format = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

const Drawdown = () => {
  const [amount, setAmount] = useState<number>(350000);
  const [time, setTime] = useState({ value: '20', label: '☒ 20 Years' });
  const [rate, setRate] = useState({ value: '0.03', label: '☒ 3% (Average)' });
  const [income, setIncome] = useState({ value: '20000', label: '$ 20,000' });

  // TODO: Extract as helpers
  const years = parseFloat(time.value);
  const interest = parseFloat(rate.value);
  const draw = parseFloat(income.value);

  const compoundInterest = Math.pow(1 + interest, years);
  const principalInterest = amount * compoundInterest;

  const drawRate = Math.pow(1 + interest, years + 1) - 1;
  const drawAmount = draw * drawRate;
  const drawTotal = drawAmount / interest - draw;
  const balance = principalInterest - drawTotal;

  return (
    <>
      <AmountInput value={amount} setValue={setAmount} />
      <Time option={time} setOption={setTime} />
      <Rate option={rate} setOption={setRate} />
      <Income option={income} setOption={setIncome} />

      <Content />

      <Summary balance={format(balance)} years={years} />
    </>
  );
};

export default Drawdown;
