import { useState } from 'react';
import { OptionType } from '../Choice/Options';
import Radio from './components/Radio';
import { CalculatorProvider } from './components/Calculator/provider';

import Calculator from './components/Calculator';


const Drawdown = () => {
  const [selected, setSelected] = useState<OptionType>({
    value: 'years',
    label: 'Years',
  });

  return (
    <>
      <Radio selected={selected} setSelected={setSelected} />
      <CalculatorProvider>
        <Calculator selected={selected} />
      </CalculatorProvider>
    </>
  );
};

export default Drawdown;
