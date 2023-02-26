import { useState } from 'react';
import { OptionType } from '../Choice/Options';
import Radio from './Radio';

import Calculator from './Calculator';


const Drawdown = () => {
  const [selected, setSelected] = useState<OptionType>({
    value: 'years',
    label: 'Years',
  });

  return (
    <>
      <Radio selected={selected} setSelected={setSelected} />
      <Calculator selected={selected} />
    </>
  );
};

export default Drawdown;
