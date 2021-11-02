import Label from "./Label";
import Options, { OptionType } from "./Options";

type Props = {
  options: OptionType[],
  option: OptionType,
  setOption: (option: OptionType) => void,
  label?: string,
  placeholder?: string,
  shortcut?: string,
}

const style = {
  display: 'flex',
  alignItems: 'center'
}

const Choice = ({options, option, setOption, shortcut="", label="Choose", placeholder="Filter..."}: Props) => {  
  return (
    <div style={style}>
      <Label text={label} />
      <Options
        options={options}
        option={option}
        setOption={setOption}
        placeholder={placeholder}
        shortcut={shortcut}
      />
    </div>
  )
}

export default Choice;