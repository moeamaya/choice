import { createContext, useState, FC, useRef } from 'react';
import { OptionType } from '../../../Choice/Options';

import { options as yearsOptions } from '../inputs/Years';
import { options as incomeOptions } from '../inputs/Income';
import { options as rateOptions } from '../inputs/Rate';
import { options as inflationOptions } from '../inputs/Inflation';

interface CalculatorState {
  amount: number;
  time: OptionType;
  income: OptionType;
  rate: OptionType;
  inflation: OptionType;
}

type SetCalculatorState = React.Dispatch<React.SetStateAction<CalculatorState>>;

interface CalculatorContextProps {
  calculatorState: CalculatorState;
  setCalculatorState: SetCalculatorState;
}

// Define the default initial state
const defaultCalculatorState: CalculatorState = {
  amount: 450000,
  time: yearsOptions[2],
  income: incomeOptions[2],
  rate: rateOptions[3],
  inflation: inflationOptions[6],
};

const CalculatorContext = createContext<CalculatorContextProps>({
  calculatorState: defaultCalculatorState,
  setCalculatorState: () => {},
});

const CalculatorProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>(defaultCalculatorState);
  const debounceTimeoutRef = useRef<number | undefined>(undefined);

  const logStateChange = (newState: CalculatorState) => {
    // Perform the logging here, e.g., console.log or any other logging mechanism
    console.log('State changed:', newState);
  };

  const updateCalculatorState: SetCalculatorState = (newState: React.SetStateAction<CalculatorState>) => {
    setCalculatorState((prevState) => {
      const updatedState = typeof newState === 'function' ? newState(prevState) : { ...prevState, ...newState };

      if (debounceTimeoutRef.current !== undefined) {
        clearTimeout(debounceTimeoutRef.current);
      }

      debounceTimeoutRef.current = window.setTimeout(() => {
        logStateChange(updatedState);
        debounceTimeoutRef.current = undefined;
      }, 5000);

      return updatedState;
    });
  };

  return (
    <CalculatorContext.Provider value={{ calculatorState, setCalculatorState: updateCalculatorState }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export { CalculatorContext, CalculatorProvider };
export type { CalculatorContextProps };
