import { FC } from 'react';

import Radio from './components/Radio';
import Breakdown from './components/Breakdown'
import Calculator from './components/Calculator';
import Logs from './components/Logs'

import { CalculatorProvider } from './components/Calculator/provider';
import Content from './content';
;


const Drawdown: FC = () => {
  return (
    <>
      <CalculatorProvider>
        <Radio />
        <Calculator />
        
        <Breakdown />
        <Content />
        <Logs />
      </CalculatorProvider>
    </>
  );
};

export default Drawdown;
