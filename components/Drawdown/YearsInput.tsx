import Choice from '../Choice';
import { OptionType } from '../Choice/Options';

type Props = {
  option: OptionType;
  setOption: (option: OptionType) => void;
};

const options: OptionType[] = [
  { value: '10', label: '☒ 10 Years' },
  { value: '20', label: '☒ 20 Years' },
  { value: '30', label: '☒ 30 Years' },
  { value: '40', label: '☒ 40 Years' },
  { value: '50', label: '☒ 50 Years' },
];

const Time = ({ option, setOption }: Props) => {
  return (
    <Choice
      label="Years of withdraw"
      placeholder="Set years..."
      options={options}
      option={option}
      setOption={setOption}
      shortcut="y"
      suffix=" Years"
    />
  );
};

export default Time;
