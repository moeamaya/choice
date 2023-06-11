import { Dispatch, FC, useContext } from 'react';

import { OptionType } from '../../Choice/Options';

import Rate from '../Inputs/Rate';
import Inflation from '../Inputs/Inflation';

import * as Collapsible from '@radix-ui/react-collapsible';

import { percentFormatter } from '../../Helpers/formatters';
import { styled } from '@stitches/react';

import { CalculatorContext } from '../CalculatorProvider';
import type { CalculatorContextProps } from '../CalculatorProvider';

type Props = {
  assumptions: {
    open: boolean;
    setOpen: Dispatch<boolean>; 
  };
};

type ChangeProps = (
  key: string,
  option: OptionType,
  setCalculatorState: CalculatorContextProps['setCalculatorState']
) => void;

const StyledTrigger = styled(Collapsible.Trigger, {
  display: 'flex',
  alignItems: 'center',
  border: `none`,
  width: `100%`,
  padding: '0.5rem 0px 1.5rem 0px',
  background: 'none',
});

const StyledButton = styled('div', {
  width: '16px',
  height: '16px',
  border: 'none',
  background: 'none',
  borderRadius: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 250ms ease-out',
  '&.open': {
    background: 'var(--backgroundContrast)',
    boxShadow: '0 0 0 1px var(--background), 0 0 0 2px var(--foreground)',
  },
});

const StyledArrow = styled('svg', {
  width: '3px',
  height: '6px',
  transition: 'all 250ms ease-out',
  '&.open': {
    transform: 'rotate(90deg)',
  },
});

const StyledTitle = styled('div', {
  fontSize: '15px',
  fontFamily: 'serif',
  color: 'var(--foreground)',
  marginLeft: '10px',
  paddingBottom: '2px',
  borderBottom: `1px dotted`,
});

const StyledLine = styled('div', {
  flex: 1,
  alignContent: `flex-end`,
  borderBottom: `1px dotted var(--border)`,
  alignSelf: `flex-end`,
  margin: `0 12px`,
});

const StyledStats = styled('div', {
  fontSize: '13px',
  color: 'var(--foreground)',
  fontFamily: 'monospace',
  marginLeft: 'auto',
  marginRight: '4px',
});

const handleChange: ChangeProps = (key, option, setCalculatorState) => {
  setCalculatorState((prevState) => ({
    ...prevState,
    [key]: option,
  }));
};

const Assumptions: FC<Props> = ({ assumptions }) => {
  const { calculatorState, setCalculatorState } = useContext(CalculatorContext);

  const interest = percentFormatter(parseFloat(calculatorState.rate.value));
  const inflation = percentFormatter(
    parseFloat(calculatorState.inflation.value)
  );

  return (
    <Collapsible.Root
      open={assumptions.open}
      onOpenChange={assumptions.setOpen}
    >
      <StyledTrigger>
        <StyledButton className={assumptions.open ? 'open' : ''}>
          <StyledArrow
            className={assumptions.open ? 'open' : ''}
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.25 0.75L0.25 5.75L2.75 3.25L0.25 0.75Z"
              fill="#6B6F76"
            />
          </StyledArrow>
        </StyledButton>
        <StyledTitle>Assumptions</StyledTitle>
        <StyledLine />
        <StyledStats>
          {interest} · {inflation}
        </StyledStats>
      </StyledTrigger>
      <Collapsible.Content className="CollapsibleContent">
        <Rate
          option={calculatorState.rate}
          setOption={(option) =>
            handleChange('rate', option, setCalculatorState)
          }
        />
        <Inflation
          option={calculatorState.inflation}
          setOption={(option) =>
            handleChange('inflation', option, setCalculatorState)
          }
        />
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default Assumptions;
