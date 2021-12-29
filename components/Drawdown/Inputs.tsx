import AmountInput from './AmountInput';
import Income from './Income';
import { OptionType } from '../Choice/Options';

type Props = {
  amount: number;
  setAmount: any;
  income: OptionType;
  setIncome: any;
};

const Inputs = ({ amount, setAmount, income, setIncome }: Props) => {
  return (
    <div>
      <AmountInput value={amount} setValue={setAmount} />
      <Income option={income} setOption={setIncome} />
    </div>
  );
};

export default Inputs;
