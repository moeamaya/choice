import Choice from '../Choice';
import { OptionType } from '../Choice/Options';

type Props = {
  option: OptionType;
  setOption: (option: OptionType) => void;
};

const options: OptionType[] = [
  { value: '15000', label: '$ 15,000' },
  { value: '30000', label: '$ 30,000' },
  { value: '50000', label: '$ 50,000' },
  { value: '75000', label: '$ 75,000' },
  { value: '100000', label: '$ 100,000' },
];

const Income = ({ option, setOption }: Props) => {
  return (
    <Choice
      label="Income each year"
      placeholder="Set income..."
      options={options}
      option={option}
      setOption={setOption}
      shortcut="i"
    />
  );
};

export default Income;
