import { FC } from 'react';

import Radio from './components/Radio';
import Calculator from './components/Calculator';

import { CalculatorProvider } from './components/Calculator/provider';


const Drawdown: FC = () => {
  return (
    <>
      <CalculatorProvider>
        <Radio />
        <Calculator />
      </CalculatorProvider>
    </>
  );
};

export default Drawdown;
