import { createContext, useState, FC, useRef } from 'react';
import { OptionType } from '../../../Choice/Options';

// import { useLocalStorage } from 'react-use';

import { options as yearsOptions } from '../inputs/Years';
import { options as incomeOptions } from '../inputs/Income';
import { options as rateOptions } from '../inputs/Rate';
import { options as inflationOptions } from '../inputs/Inflation';

const SAVE_DELAY = 2500;

export enum CalculatorType {
  Years = "years",
  Income = "income",
  Savings = "savings"
}

export interface CalculatorState {
  type: CalculatorType,
  amount: number;
  time: OptionType;
  income: OptionType;
  rate: OptionType;
  inflation: OptionType;
  timestamp: number;
  [key: string]: number | OptionType | CalculatorType;
}

type SetCalculatorState = React.Dispatch<React.SetStateAction<CalculatorState>>;

interface CalculatorContextProps {
  calculatorState: CalculatorState;
  setCalculatorState: SetCalculatorState;
  logs: CalculatorState[];
}

// Define the default initial state
const defaultCalculatorState: CalculatorState = {
  type: CalculatorType.Years,
  amount: 450000,
  time: yearsOptions[2],
  income: incomeOptions[2],
  rate: rateOptions[3],
  inflation: inflationOptions[6],
  timestamp: new Date().getTime(),
};

const CalculatorContext = createContext<CalculatorContextProps>({
  calculatorState: defaultCalculatorState,
  setCalculatorState: () => {},
  logs: [],
});

const CalculatorProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>(defaultCalculatorState);
  const [logs, setLogs] = useState<CalculatorState[]>([{...defaultCalculatorState}]);

  const debounceTimeoutRef = useRef<number | undefined>(undefined);

  const logStateChange = (newState: CalculatorState) => {
    // Perform the logging here, e.g., console.log or any other logging mechanism
    const timestamp = new Date().getTime();;

    console.log('State changed:', {...newState, timestamp});
    setLogs((prevLogs) => [...prevLogs, {...newState, timestamp}]);
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
      }, SAVE_DELAY);

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
