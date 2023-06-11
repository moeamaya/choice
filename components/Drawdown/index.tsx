import { useState } from 'react';
import { OptionType } from '../Choice/Options';
import Radio from './Components/Radio';
import { CalculatorProvider } from './CalculatorProvider';

import Calculator from './Calculator';


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
