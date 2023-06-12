import { createContext, useState, FC, useRef } from 'react';
import { OptionType } from '../../../Choice/Options';

// import { useLocalStorage } from 'react-use';

import { options as yearsOptions } from '../inputs/Years';
import { options as incomeOptions } from '../inputs/Income';
import { options as rateOptions } from '../inputs/Rate';
import { options as inflationOptions } from '../inputs/Inflation';
import { time } from 'console';

interface CalculatorState {
  amount: number;
  time: OptionType;
  income: OptionType;
  rate: OptionType;
  inflation: OptionType;
  timestamp?: Date;
  [key: string]: number | OptionType | Date | undefined;
}

type SetCalculatorState = React.Dispatch<React.SetStateAction<CalculatorState>>;

interface CalculatorContextProps {
  calculatorState: CalculatorState;
  setCalculatorState: SetCalculatorState;
  logs: CalculatorState[];
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
  logs: [],
});

const CalculatorProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>(defaultCalculatorState);
  const [logs, setLogs] = useState<CalculatorState[]>([{...defaultCalculatorState, timestamp: new Date()}]);

  const debounceTimeoutRef = useRef<number | undefined>(undefined);

  const logStateChange = (newState: CalculatorState) => {
    // Perform the logging here, e.g., console.log or any other logging mechanism
    console.log('State changed:', newState);
    setLogs((prevLogs) => [...prevLogs, {...newState, timestamp: new Date()}]);
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
    <CalculatorContext.Provider value={{ calculatorState, setCalculatorState: updateCalculatorState, logs }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export { CalculatorContext, CalculatorProvider };
export type { CalculatorState, CalculatorContextProps };
