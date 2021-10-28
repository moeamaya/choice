import Label from "./Label";
import Options, { OptionType } from "./Options";

type Props = {
  options: OptionType[],
  label?: string,
  placeholder?: string,
  shortcut?: string,
}

const style = {
  display: 'flex',
  alignItems: 'center'
}

const Choice = ({options, shortcut="", label="Choose", placeholder="Filter..."}: Props) => {  
  return (
    <div style={style}>
      <Label text={label} />
      <Options
          options={options}
          placeholder={placeholder}
          shortcut={shortcut}
        />
    </div>
  )
}

export default Choice;