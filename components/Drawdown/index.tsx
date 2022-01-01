import { useState } from 'react';
import { OptionType } from '../Choice/Options';
import Radio from './Radio';

import Years from './Years';
import Income from './Income';
import Savings from './Savings';

const Drawdown = () => {
  const [selected, setSelected] = useState({
    value: 'years',
    label: 'Years',
  });
  const [amount, setAmount] = useState<number>(450000);
  const [time, setTime] = useState<OptionType>({
    value: '20',
    label: '☒ 20 Years',
  });
  const [rate, setRate] = useState<OptionType>({
    value: '0.07',
    label: '☒ 7% (Average)',
  });
  const [income, setIncome] = useState<OptionType>({
    value: '30000',
    label: '$ 30,000',
  });

  const years = parseFloat(time.value);
  const interest = parseFloat(rate.value);
  const draw = parseFloat(income.value);

  const Calculator = ({ selected }: { selected: OptionType }) => {
    const selectedValue = selected.value;

    switch (selectedValue) {
      case 'years':
        return (
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
        );
      case 'income':
        return (
          <Income
            amount={amount}
            setAmount={setAmount}
            rate={rate}
            setRate={setRate}
            time={time}
            setTime={setTime}
            interest={interest}
          />
        );
      case 'savings':
        return (
          <Savings
            income={income}
            setIncome={setIncome}
            time={time}
            setTime={setTime}
            rate={rate}
            setRate={setRate}
            interest={interest}
          />
        );
      default:
        return <div>Error</div>;
    }
  };

  return (
    <>
      <Radio selected={selected} setSelected={setSelected} />
      <Calculator selected={selected} />
    </>
  );
};

export default Drawdown;
