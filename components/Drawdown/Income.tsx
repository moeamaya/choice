import Choice from '../Choice';
import { OptionType } from '../Choice/Options';

type Props = {
  option: OptionType;
  setOption: (option: OptionType) => void;
};

const options: OptionType[] = [
  { value: '10000', label: '$ 10,000' },
  { value: '20000', label: '$ 20,000' },
  { value: '30000', label: '$ 30,000' },
  { value: '40000', label: '$ 40,000' },
  { value: '50000', label: '$ 50,000' },
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
