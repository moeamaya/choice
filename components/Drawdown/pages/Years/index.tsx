import { FC, useContext } from 'react';
import AmountInput from '../../components/inputs/Amount';
import IncomeInput from '../../components/inputs/Income';
import Content from '../../content';
import Summary from '../../components/Summary';

import YearsFormula from '../../formulas/Years';

import { abbreviateNumberFormatter } from '../../../Helpers/formatters';

import { CalculatorContext } from '../../components/Calculator/provider';
import type { CalculatorState } from '../../components/Calculator/provider';


type Props = {
  interest: number;
  inflation: number;
  children: React.ReactNode;
};

const SummaryDetails = ({ amount, draw }: { amount: number; draw: number }) => {
  return (
    <>
      ${abbreviateNumberFormatter(amount)} &middot; $
      {abbreviateNumberFormatter(draw)}
    </>
  );
};

function calculateDelta(newValue: any, oldValue: any): any {
  if (typeof newValue === "number" && typeof oldValue === "number") {
    return (newValue - oldValue).toString();
  } else if (typeof newValue === "string" && typeof oldValue === "string") {
    // Compare strings (e.g., for dropdown options)
    if (newValue !== oldValue) {
      return `${oldValue} → ${newValue}`;
    }
  }

  // Handle other data types as needed
  return "N/A";
}

function padZero(value: any) {
  return String(value).padStart(2, '0');
}

function formatDate(date: Date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const hour = date.getHours();
  const minute = date.getMinutes();
  const period = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;

  const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${formattedHour}:${padZero(minute)} ${period}`;

  return formattedDate;
}



const Years: FC<Props> = ({ interest, inflation, children }) => {
  const { calculatorState, setCalculatorState, logs } = useContext(CalculatorContext);

  const amount = calculatorState.amount;
  const draw = parseFloat(calculatorState.income.value);
  const years = YearsFormula(inflation, interest, amount, draw);

  return (
    <>
      <AmountInput
        value={amount}
        setValue={(value) => {
          setCalculatorState((prevState) => ({
            ...prevState,
            amount: value,
          }));
        }}
      />
      <IncomeInput
        option={calculatorState.income}
        setOption={(option) => {
          setCalculatorState((prevState) => ({
            ...prevState,
            income: option,
          }));
        }} />

      {children}

      <ol>
      {logs
        .sort((a, b) => {
          const dateA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
          const dateB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
          return dateA - dateB;
        })
        .reverse()
        .map((log, index) => {
          const previousLog = index > 0 ? logs[index - 1] : null;
          const changes: { field: string; delta: string }[] = [];

          if (previousLog) {
            Object.entries(log).forEach(([field, value]) => {
              if (field !== "timestamp" && JSON.stringify(value) !== JSON.stringify(previousLog[field as keyof CalculatorState])) {
                const delta = calculateDelta(value, previousLog[field as keyof CalculatorState]);
                changes.push({ field, delta });
              }
            });
          }

          return (
            <li key={index}>
              {changes.length > 0 && (
                <div>
                  <p>Changes: <span>{formatDate(log["timestamp"] || new Date())}</span></p>
                  <ul>
                    {changes.map(({ field, delta }) => (
                      <li key={field}>
                        <strong>{field}:</strong> {delta}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <pre>{JSON.stringify(log)}</pre>
            </li>
          );
  })}
      </ol>

      <Content />
      <Summary resultLabel="Duration" result={years}>
        <SummaryDetails draw={draw} amount={amount} />
      </Summary>
    </>
  );
};

export default Years;
