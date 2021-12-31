import Rate from '../Rate';
import Content from '../Content';
import Inputs from '../Inputs';
import Summary from '../Summary';

import YearsFormula from '../Formulas/Years';

const Years = ({
  amount,
  setAmount,
  income,
  setIncome,
  rate,
  setRate,
  draw,
  interest,
}) => {
  const years = YearsFormula(1.029, 1 + interest, amount, draw);

  return (
    <>
      <Inputs
        amount={amount}
        setAmount={setAmount}
        income={income}
        setIncome={setIncome}
      />
      <Rate option={rate} setOption={setRate} />
      <Content />
      <Summary amount={amount} draw={draw} years={years} />
    </>
  );
};

export default Years;
