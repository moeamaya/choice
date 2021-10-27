import Label from "./Label";
import Options, { OptionType } from "./Options";

type Props = {
  options: OptionType[],
  label?: string,
  placeholder?: string,
}

const style = {
  display: 'flex',
  alignItems: 'center'
}

const Choice = ({options, label="Choose", placeholder="Filter..."}: Props) => {  
  return (
    <div style={style}>
      <Label text={label} />
      <Options
          options={options}
          placeholder={placeholder}
        />
    </div>
  )
}

export default Choice;