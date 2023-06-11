import React, { useState, useContext } from 'react';

import { OptionType } from '../Choice/Options';

import { CalculatorContext } from './CalculatorProvider';

import Years from './Years';
import Income from './Income';
import Savings from './Savings';

import Assumptions from './Assumptions';


const Calculator = ({ selected }: { selected: OptionType }) => {
  const selectedValue = selected.value;

  const [open, setOpen] = useState<boolean>(false);

  const { calculatorState } = useContext(CalculatorContext) ?? {};

  const interest = parseFloat(calculatorState.rate.value);
  const inflationRate = parseFloat(calculatorState.inflation.value);
  const draw = parseFloat(calculatorState.income.value);

  const assumptions = {
    open,
    setOpen
  }

  switch (selectedValue) {
    case 'years':
      return (
        <Years
          draw={draw}
          interest={interest}
          inflationRate={inflationRate}
        >
          <Assumptions assumptions={assumptions} />
        </Years>
      );
    // case 'income':
    //   return (
    //     <Income
    //       interest={interest}
    //     >
    //       <Assumptions assumptions={assumptions} />
    //     </Income>
    //   );
    // case 'savings':
    //   return (
    //     <Savings
    //       income={income}
    //       setIncome={setIncome}
    //       time={time}
    //       setTime={setTime}
    //       interest={interest}
    //     >
    //       <Assumptions assumptions={assumptions} />
    //     </Savings>
    //   );
    default:
      return <div>Error</div>;
  }
};

export default Calculator;