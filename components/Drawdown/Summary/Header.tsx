import { styled } from '@stitches/react';

type Props = {
  balance: string;
  years: number;
};

const StyledLabels = styled('div', {
  color: `#6B6F76`,
});

const StyledDrawdown = styled('h3', {
  color: `#6B6F76`,
  fontWeight: `normal`,
  fontSize: 13,
  margin: 0,
});

const StyledBalance = styled('h2', {
  color: `#3C4149`,
  fontWeight: `normal`,
  fontSize: 18,
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
  fontFamily: `monospace`,
  margin: 0,
});

const StyledAmount = styled('h2', {
  color: `#3C4149`,
  fontWeight: `normal`,
  fontSize: 18,
  margin: `4px 0 0 0`,
  fontFamily: `monospace`,
});

const Summary = ({ balance, years }: Props) => {
  return (
    <>
      <StyledLabels>
        <StyledDrawdown>Drawdown</StyledDrawdown>
        <StyledBalance>Balance</StyledBalance>
      </StyledLabels>
      <StyledValues>
        <StyledYears>{years} Years</StyledYears>
        <StyledAmount>{balance}</StyledAmount>
      </StyledValues>
    </>
  );
};

export default Summary;
