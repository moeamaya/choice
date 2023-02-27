import Choice from '../Choice';
import { OptionType } from '../Choice/Options';

type Props = {
  option: OptionType;
  setOption: (option: OptionType) => void;
};

const options: OptionType[] = [
  { value: '15000', label: '$ 15,000' },
  { value: '25000', label: '$ 25,000' },
  { value: '35000', label: '$ 35,000' },
  { value: '50000', label: '$ 50,000' },
  { value: '75000', label: '$ 75,000' },
  { value: '100000', label: '$ 100,000' },
  { value: '150000', label: '$ 150,000' },
  { value: '200000', label: '$ 200,000' },
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
