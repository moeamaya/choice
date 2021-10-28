import Choice from '../Choice';
import { OptionType } from "../Choice/Options";

const options: OptionType[] = [
  { value: '10', label: '☒ 10 Years' },
  { value: '20', label: '☒ 20 Years' },
  { value: '30', label: '☒ 30 Years' },
  { value: '40', label: '☒ 40 Years' },
  { value: '50', label: '☒ 50 Years' },
];

const Time = () => {
  return (
    <Choice
      label="Years of withdraw"
      placeholder="Set years..."
      options={options}
      shortcut="y"
    />
  )
};

export default Time;
