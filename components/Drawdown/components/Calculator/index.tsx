import React, { useState, useContext } from 'react';

import { OptionType } from '../../../Choice/Options';

import { CalculatorContext } from './provider';

import Years from '../../pages/Years';
import Income from '../../pages/Income';
import Savings from '../../pages/Savings';

import Assumptions from '../Assumptions';


const Calculator = ({ selected }: { selected: OptionType }) => {
  const selectedValue = selected.value;

  const [open, setOpen] = useState<boolean>(false);

  const { calculatorState } = useContext(CalculatorContext) ?? {};

  const interest = 1 + parseFloat(calculatorState.rate.value);
  const inflation = 1 + parseFloat(calculatorState.inflation.value);

  const assumptions = {
    open,
    setOpen
  }

  switch (selectedValue) {
    case 'years':
      return (
        <Years
          interest={interest}
          inflation={inflation}
        >
          <Assumptions assumptions={assumptions} />
        </Years>
      );
    case 'income':
      return (
        <Income
          interest={interest}
          inflation={inflation}
        >
          <Assumptions assumptions={assumptions} />
        </Income>
      );
    case 'savings':
      return (
        <Savings
          interest={interest}
          inflation={inflation}
        >
          <Assumptions assumptions={assumptions} />
        </Savings>
      );
    default:
      return <div>Error</div>;
  }
};

export default Calculator;