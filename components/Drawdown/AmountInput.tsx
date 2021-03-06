import Label from '../Choice/Label';
import NumberFormat from 'react-number-format';
import { styled } from '@stitches/react';

type Props = {
  value: number;
  setValue: (value: number) => void;
};

const style = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: `1rem`,
};

const StyledInput = styled('input', {
  width: `200px`,
  background: `#FFF`,
  border: `1px solid #EFF1F4`,
  height: `40px`,
  fontFamily: `monospace`,
  padding: `0 1rem`,
  marginLeft: `auto`,
  appearance: `none`,
  '-moz-appearance': `none`,
  '-webkit-appearance': `none`,
  '&:focus': {
    borderColor: `#e3e5e8`,
    outline: `none`,
  },
});

const AmountInput = ({ value, setValue }: Props) => {
  return (
    <div style={style}>
      <Label text="Starting amount" />
      <NumberFormat
        defaultValue={value}
        customInput={StyledInput}
        thousandSeparator={true}
        prefix={'$'}
        pattern="[0-9]*"
        onValueChange={(values) => {
          const floatValue = values.floatValue ?? 0;
          setValue(floatValue);
        }}
      />
    </div>
  );
};

export default AmountInput;
