import { FC } from 'react';

import { OptionType } from '../../Choice/Options';

import Rate from '../Rate';
import Inflation from '../Inflation';

import * as Collapsible from '@radix-ui/react-collapsible';


type Props = {
  assumptions: {
    interest: number;
    inflationRate: number;
    rate: OptionType;
    setRate: (rate: OptionType) => void;
    inflation: OptionType;
    setInflation: (inflation: OptionType) => void;
  }
};

const Assumptions: FC<Props> = ({ assumptions }) => {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>Assumptions: {assumptions.interest} - {assumptions.inflationRate}</Collapsible.Trigger>
      <Collapsible.Content className="CollapsibleContent">
        <Rate option={assumptions.rate} setOption={assumptions.setRate} />
        <Inflation option={assumptions.inflation} setOption={assumptions.setInflation} />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export default Assumptions;

