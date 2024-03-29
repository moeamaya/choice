import Choice from '../../../Choice';
import { OptionType } from '../../../Choice/Options';

type Props = {
  option: OptionType;
  setOption: (option: OptionType) => void;
};

export const options: OptionType[] = [
  { value: '0.0', label: '0% (No Return)' },
  { value: '0.01', label: '1% (Very Conservative)' },
  { value: '0.02', label: '2% (Conservative)' },
  { value: '0.035', label: '3.5% (Below Average)' },
  { value: '0.05', label: '5% (Average)' },
  { value: '0.07', label: '7% (High Average)' },
  { value: '0.08', label: '8% (Above Average)' },
  { value: '0.09', label: '9% (Aggressive)' },
  { value: '0.10', label: '10% (Very Aggressive)' },
];

const css = {
  color: 'var(--foreground)',
  fontSize: '15px',
  flex: '0 120px',
  marginLeft: '1.9rem'
};

const Rate = ({ option, setOption }: Props) => {
  return (
    <Choice
      label="Rate of return"
      labelCSS={css}
      placeholder="Set rate..."
      options={options}
      option={option}
      setOption={setOption}
      shortcut="r"
    />
  );
};

export default Rate;
