import { FC } from 'react';

import Radio from './components/Radio';
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
        <Logs />
        <Content />
      </CalculatorProvider>
    </>
  );
};

export default Drawdown;
