import React, { useState, useMemo } from 'react';

import { OptionType } from '../Choice/Options';

import Years from './Years';
import Income from './Income';
import Savings from './Savings';

import Assumptions from './Assumptions';


const Calculator = ({ selected }: { selected: OptionType }) => {
  const selectedValue = selected.value;

  const [open, setOpen] = useState<boolean>(false);

  const [amount, setAmount] = useState<number>(450000);
  const [time, setTime] = useState<OptionType>({
    value: '20',
    label: '☒ 20 Years',
  });
  const [income, setIncome] = useState<OptionType>({
    value: '30000',
    label: '$ 30,000',
  });
  const [rate, setRate] = useState<OptionType>({
    value: '0.035',
    label: '☒ 3% (Average)',
  });
  const [inflation, setInflation] = useState<OptionType>({
    value: '0.029',
    label: '☒ 2.9% (Average)',
  });

  const interest = parseFloat(rate.value);
  const inflationRate = parseFloat(inflation.value);
  const draw = parseFloat(income.value);

  const assumptions = {
    open,
    setOpen,
    interest,
    inflationRate,
    rate,
    setRate,
    inflation,
    setInflation
  }

  switch (selectedValue) {
    case 'years':
      return (
        <Years
          amount={amount}
          setAmount={setAmount}
          income={income}
          setIncome={setIncome}
          draw={draw}
          interest={interest}
          inflationRate={inflationRate}
        >
          <Assumptions assumptions={assumptions} />
        </Years>
      );
    case 'income':
      return (
        <Income
          amount={amount}
          setAmount={setAmount}
          time={time}
          setTime={setTime}
          interest={interest}
        >
          <Assumptions assumptions={assumptions} />
        </Income>
      );
    case 'savings':
      return (
        <Savings
          income={income}
          setIncome={setIncome}
          time={time}
          setTime={setTime}
          interest={interest}
        >
          <Assumptions assumptions={assumptions} />
        </Savings>
      );
    default:
      return <div>Error</div>;
  }
};

export default Calculator;