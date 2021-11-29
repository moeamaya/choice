import AmountInput from './AmountInput';
import Time from './Time';
import { OptionType } from '../Choice/Options';

type Props = {
  amount: number;
  setAmount: any;
  time: OptionType;
  setTime: any;
};

const Inputs = ({ amount, setAmount, time, setTime }: Props) => {
  return (
    <div>
      <AmountInput value={amount} setValue={setAmount} />
      <Time option={time} setOption={setTime} />
    </div>
  );
};

export default Inputs;
