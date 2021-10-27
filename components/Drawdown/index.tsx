import Choice from '../Choice';
import { OptionType } from "../Choice/Options";

const options: OptionType[] = [
  { value: '0.01', label: '☒ 1% (Average)' },
  { value: '0.02', label: '☒ 2% (Average)' },
  { value: '0.03', label: '☒ 3% (Average)' },
  { value: '0.045', label: '☒ 4.5% (Average)' },
  { value: '0.05', label: '☒ 5% (Average)' },
  { value: '0.07', label: '☒ 7% (Average)' },
  { value: '0.10', label: '☒ 10% (Average)' },
];

const Drawdown = () => {
  return (
    <Choice
      label="Rate of return"
      placeholder="Set rate of return..."
      options={options}
    />
  )
};

export default Drawdown;
