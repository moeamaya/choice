import Choice from '../Choice';
import { OptionType } from '../Choice/Options';

type Props = {
  option: OptionType;
  setOption: (option: OptionType) => void;
};

const options: OptionType[] = [
  { value: '0.01', label: '☒ 1% (Average)' },
  { value: '0.02', label: '☒ 2% (Average)' },
  { value: '0.03', label: '☒ 3% (Average)' },
  { value: '0.045', label: '☒ 4.5% (Average)' },
  { value: '0.05', label: '☒ 5% (Average)' },
  { value: '0.07', label: '☒ 7% (Average)' },
  { value: '0.08', label: '☒ 8% (Average)' },
  { value: '0.09', label: '☒ 9% (Average)' },
  { value: '0.10', label: '☒ 10% (Average)' },
];

const Rate = ({ option, setOption }: Props) => {
  return (
    <Choice
      label="Rate of return"
      placeholder="Set rate..."
      options={options}
      option={option}
      setOption={setOption}
      shortcut="r"
    />
  );
};

export default Rate;
