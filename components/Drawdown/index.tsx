import { useState } from 'react';
import Radio from './Radio';
import Time from './Time';
import Rate from './Rate';
import Income from './Income';
import Content from './Content';
import Inputs from './Inputs';
import YearsFormula from './Formulas/Years';

import Summary from './Summary';

// TODO: Extract as helper
const format = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

const Drawdown = () => {
  const [calculator, setCalculator] = useState({
    value: 'years',
    label: 'Years',
  });
  const [amount, setAmount] = useState<number>(450000);
  const [time, setTime] = useState({ value: '20', label: '☒ 20 Years' });
  const [rate, setRate] = useState({ value: '0.07', label: '☒ 7% (Average)' });
  const [income, setIncome] = useState({ value: '30000', label: '$ 30,000' });

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

  const yearz = YearsFormula(1.029, 1 + interest, amount, draw);

  return (
    <>
      <Radio selected={calculator} setSelected={setCalculator} />

      <Inputs
        amount={amount}
        setAmount={setAmount}
        income={income}
        setIncome={setIncome}
      />

      <Rate option={rate} setOption={setRate} />

      <Content />

      <Summary amount={amount} draw={draw} years={yearz} />
    </>
  );
};

export default Drawdown;
