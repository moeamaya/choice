import Label from './Label';
import Options, { OptionType } from './Options';

type Props = {
  options: OptionType[];
  option: OptionType;
  setOption: (option: OptionType) => void;
  label?: string;
  labelCSS?: object;
  placeholder?: string;
  shortcut?: string;
  prefix?: string;
  suffix?: string;
};

const style = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: `1rem`,
};

const Choice = ({
  options,
  option,
  setOption,
  shortcut = '',
  label = 'Choose',
  labelCSS,
  placeholder = 'Filter...',
  prefix = '',
  suffix = '',
}: Props) => {
  return (
    <div style={style}>
      <Label style={labelCSS} text={label} />
      <Options
        options={options}
        option={option}
        setOption={setOption}
        placeholder={placeholder}
        shortcut={shortcut}
        label={label}
        prefix={prefix}
        suffix={suffix}
      />
    </div>
  );
};

export default Choice;
