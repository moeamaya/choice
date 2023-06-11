import { FC, useContext } from 'react';

import { CalculatorContext } from './CalculatorProvider';

import Label from '../Choice/Label';
import { NumericFormat } from 'react-number-format';
import { styled } from '@stitches/react';

import type { CalculatorContextProps } from './CalculatorProvider';


type ChangeProps = (
  floatValue: number,
  setAmount: CalculatorContextProps["setCalculatorState"]
) => void;

const style = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: `1rem`,
};

const StyledInput = styled('input', {
  width: `200px`,
  background: `var(--backgroundContrast)`,
  border: `1px solid var(--border)`,
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
  caretColor: `var(--foreground)`,
});


const handleChange: ChangeProps = (floatValue, setCalculatorState) => {
  setCalculatorState((prevState) => ({
    ...prevState,
    amount: floatValue,
  }));
};

const AmountInput: FC = () => {
  const { calculatorState, setCalculatorState } = useContext(CalculatorContext);

  return (
    <div style={style}>
      <Label text="Starting amount" />
      <NumericFormat
        defaultValue={calculatorState.amount}
        customInput={StyledInput}
        thousandSeparator={true}
        prefix={'$'}
        pattern="[0-9]*"
        onValueChange={(values) => {
          const floatValue = values.floatValue ?? 0;
          handleChange(floatValue, setCalculatorState);
        }}
      />
    </div>
  );
};

export default AmountInput;
