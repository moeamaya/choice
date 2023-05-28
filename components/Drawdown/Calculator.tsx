import React, { useState, useMemo } from 'react';

import { OptionType } from '../Choice/Options';

import Years from './Years';
import Income from './Income';
import Savings from './Savings';

import Assumptions from './Assumptions';

import { options as yearsOptions } from './YearsInput';
import { options as incomeOptions } from './IncomeInput';
import { options as rateOptions } from './Rate';
import { options as inflationOptions } from './Inflation';


const Calculator = ({ selected }: { selected: OptionType }) => {
  const selectedValue = selected.value;

  const [open, setOpen] = useState<boolean>(false);

  const [amount, setAmount] = useState<number>(450000);
  const [time, setTime] = useState<OptionType>(yearsOptions[2]);
  const [income, setIncome] = useState<OptionType>(incomeOptions[2]);
  const [rate, setRate] = useState<OptionType>(rateOptions[3]);
  const [inflation, setInflation] = useState<OptionType>(inflationOptions[6]);

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