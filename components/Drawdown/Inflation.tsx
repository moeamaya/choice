import Choice from '../Choice';
import { OptionType } from '../Choice/Options';

type Props = {
  option: OptionType;
  setOption: (option: OptionType) => void;
};

const options: OptionType[] = [
  { value: '0.05', label: '☒ 0.5% (Limited)' },
  { value: '0.01', label: '☒ 1% (Very Aggressive)' },
  { value: '0.015', label: '☒ 1.5% (Aggressive)' },
  { value: '0.02', label: '☒ 2% (High Average)' },
  { value: '0.025', label: '☒ 2.5% (Above Average)' },
  { value: '0.029', label: '☒ 2.9% (Average)' },
  { value: '0.035', label: '☒ 3.5% (Below Average)' },
  { value: '0.04', label: '☒ 4% (Low Average)' },
  { value: '0.05', label: '☒ 5% (Conservative)' },
  { value: '0.10', label: '☒ 10% (Very Conservative)' },
];

const Inflation = ({ option, setOption }: Props) => {
  return (
    <Choice
      label="Inflation rate"
      placeholder="Set rate..."
      options={options}
      option={option}
      setOption={setOption}
      shortcut="r"
    />
  );
};

export default Inflation;