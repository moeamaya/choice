import YearsInput from '../YearsInput';
import IncomeInput from '../IncomeInput';
import Rate from '../Rate';
import Content from '../Content';
import Summary from '../Summary';

import { OptionType } from '../../Choice/Options';

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

const SummaryDetails = ({ amount, draw }: { amount: number; draw: number }) => {
  return (
    <>
      ${abbreviateNumberFormatter(amount)} &middot; $
      {abbreviateNumberFormatter(draw)}
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
  const savings = '$375,000';

  return (
    <>
      <IncomeInput option={income} setOption={setIncome} />
      <YearsInput option={time} setOption={setTime} />

      <Rate option={rate} setOption={setRate} />

      <Content />
      <Summary resultLabel="Savings needed" result={savings}>
        {/* <SummaryDetails amount={amount} draw={draw} /> */}
      </Summary>
    </>
  );
};

export default Savings;
