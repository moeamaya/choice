import { styled } from '@stitches/react';
import { abbreviateNumberFormatter } from '../../Helpers/formatters';

type Props = {
  amount: number;
  draw: number;
  years: string;
};

const StyledLabels = styled('div', {
  color: `#6B6F76`,
});

const StyledDrawdown = styled('h3', {
  color: `#6B6F76`,
  fontWeight: `normal`,
  fontSize: 13,
  lineHeight: `13px`,
  margin: 0,
});

const StyledBalance = styled('h2', {
  color: `#3C4149`,
  fontWeight: `normal`,
  fontSize: 18,
  lineHeight: `18px`,
  margin: `4px 0 0 0`,
});

const StyledValues = styled('div', {
  marginLeft: `auto`,
  textAlign: `right`,
});

const StyledYears = styled('h3', {
  color: `#6B6F76`,
  fontWeight: `normal`,
  fontSize: 13,
  lineHeight: `13px`,
  fontFamily: `monospace`,
  margin: 0,
});

const StyledAmount = styled('h2', {
  color: `#3C4149`,
  fontWeight: `normal`,
  fontSize: 18,
  lineHeight: `18px`,
  margin: `4px 0 0 0`,
  fontFamily: `monospace`,
});

const FormattedDetails = ({
  amount,
  draw,
}: {
  amount: number;
  draw: number;
}) => {
  return (
    <>
      ${abbreviateNumberFormatter(amount)} &middot; $
      {abbreviateNumberFormatter(draw)}
    </>
  );
};

const Summary = ({ amount, draw, years }: Props) => {
  console.log(amount);

  return (
    <>
      <StyledLabels>
        <StyledDrawdown>Details</StyledDrawdown>
        <StyledBalance>Duration</StyledBalance>
      </StyledLabels>
      <StyledValues>
        <StyledYears>
          <FormattedDetails amount={amount} draw={draw} />
        </StyledYears>
        <StyledAmount>{years}</StyledAmount>
      </StyledValues>
    </>
  );
};

export default Summary;
