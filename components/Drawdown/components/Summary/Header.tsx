import { FC } from "react";

import { styled } from '@stitches/react';

type Props = {
  result: string;
  resultLabel: string;
  children: React.ReactNode;
};

const StyledLabels = styled('div', {
  color: `#6B6F76`,
});

const StyledDrawdown = styled('h3', {
  color: `#6B6F76`,
  fontWeight: `normal`,
  fontSize: 15,
  lineHeight: `15px`,
  margin: 0,
});

const StyledBalance = styled('h2', {
  color: `var(--highlight)`,
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
  fontSize: 15,
  lineHeight: `15px`,
  fontFamily: `monospace`,
  margin: 0,
});

const StyledAmount = styled('h2', {
  color: `var(--highlight)`,
  fontWeight: `normal`,
  fontSize: 18,
  lineHeight: `18px`,
  margin: `4px 0 0 0`,
  fontFamily: `monospace`,
});

const Summary: FC<Props> = ({ result, resultLabel, children }) => {
  return (
    <>
      <StyledLabels>
        <StyledDrawdown>Details</StyledDrawdown>
        <StyledBalance>{resultLabel}</StyledBalance>
      </StyledLabels>
      <StyledValues>
        <StyledYears>{children}</StyledYears>
        <StyledAmount>{result}</StyledAmount>
      </StyledValues>
    </>
  );
};

export default Summary;
