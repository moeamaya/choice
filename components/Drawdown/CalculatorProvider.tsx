import { createContext, useState, FC} from 'react';
import { OptionType } from '../Choice/Options';

import { options as yearsOptions } from './YearsInput';
import { options as incomeOptions } from './IncomeInput';
import { options as rateOptions } from './Rate';
import { options as inflationOptions } from './Inflation';

interface CalculatorState {
  amount: number;
  time: OptionType;
  income: OptionType;
  rate: OptionType;
  inflation: OptionType;
}

interface CalculatorContextProps {
  calculatorState: CalculatorState;
  setCalculatorState: React.Dispatch<React.SetStateAction<CalculatorState>>;
}

// Define the default initial state
const defaultCalculatorState: CalculatorState = {
  amount: 450000,
  time: yearsOptions[2],
  income: incomeOptions[2],
  rate: rateOptions[3],
  inflation: inflationOptions[6],
};

// Create the CalculatorContext with the default value
const CalculatorContext = createContext<CalculatorContextProps>({
  calculatorState: defaultCalculatorState,
  setCalculatorState: () => {},
});

const CalculatorProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>(defaultCalculatorState);

  return (
    <CalculatorContext.Provider value={{ calculatorState, setCalculatorState }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export { CalculatorContext, CalculatorProvider };
export type { CalculatorContextProps };
