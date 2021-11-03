import Label from '../Choice/Label';
import NumberFormat from 'react-number-format';
import { SetStateAction } from 'react';


type Props = {
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>
}

const style = {
  display: 'flex',
  alignItems: 'center'
}

const inputStyle = {
  width: `200px`,
  background: `#FFF`,
  border: `1px solid #EFF1F4`,
  height: `40px`,
  padding: `0 1rem`,
  marginLeft: `auto`,
}

const AmountInput = ({value, setValue}: Props) => {
  return ( 
    <div style={style}>
      <Label text="Starting amount" />
      <NumberFormat
        defaultValue={value}
        style={inputStyle}
        thousandSeparator={true}
        prefix={'$'}
        onValueChange={values => {
          const { floatValue } = values;
          setValue(floatValue);
        }}
      />
    </div>
  );
}

export default AmountInput;