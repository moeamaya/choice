import { useState } from 'react';
import Radio from './Radio';

import Years from './Years';

const Drawdown = () => {
  const [calculator, setCalculator] = useState({
    value: 'years',
    label: 'Years',
  });
  const [amount, setAmount] = useState<number>(450000);
  const [time, setTime] = useState({ value: '20', label: '☒ 20 Years' });
  const [rate, setRate] = useState({ value: '0.07', label: '☒ 7% (Average)' });
  const [income, setIncome] = useState({ value: '30000', label: '$ 30,000' });

  // const years = parseFloat(time.value);
  const interest = parseFloat(rate.value);
  const draw = parseFloat(income.value);

  return (
    <>
      <Radio selected={calculator} setSelected={setCalculator} />
      <Years
        amount={amount}
        setAmount={setAmount}
        income={income}
        setIncome={setIncome}
        rate={rate}
        setRate={setRate}
        draw={draw}
        interest={interest}
      />
    </>
  );
};

export default Drawdown;
