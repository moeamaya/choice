import YearsInput from '../YearsInput';
import IncomeInput from '../IncomeInput';
import Rate from '../Rate';
import Content from '../Content';
import Summary from '../Summary';

import { OptionType } from '../../Choice/Options';

import SavingsFormula from '../Formulas/Savings';

import { abbreviateNumberFormatter } from '../../Helpers/formatters';

type Props = {
  income: OptionType;
  setIncome: (income: OptionType) => void;
  time: OptionType;
  setTime: (amount: OptionType) => void;
  rate: OptionType;
  setRate: (rate: OptionType) => void;
  interest: number;
};

const SummaryDetails = ({ years, draw }: { years: number; draw: number }) => {
  return (
    <>
      {years} Years &middot; ${abbreviateNumberFormatter(draw)}
    </>
  );
};

const Savings: React.FC<Props> = ({
  income,
  setIncome,
  time,
  setTime,
  rate,
  setRate,
  interest,
}) => {
  const years = parseFloat(time.value);
  const draw = parseFloat(income.value);
  const savings = SavingsFormula(1 + interest, 1.029, draw, years);

  return (
    <>
      <IncomeInput option={income} setOption={setIncome} />
      <YearsInput option={time} setOption={setTime} />

      <Rate option={rate} setOption={setRate} />

      <Content />
      <Summary resultLabel="Savings needed" result={savings}>
        <SummaryDetails years={years} draw={draw} />
      </Summary>
    </>
  );
};

export default Savings;
