import { styled } from '@stitches/react';
import Header from './Header';

type Props = {
  amount: number;
  draw: number;
  years: string;
};

const StyledSummary = styled('div', {
  display: `flex`,
  position: `fixed`,
  left: `-0.25rem`,
  bottom: `1rem`,
  margin: `0 1rem`,
  background: `#fff`,
  border: `1px solid rgba(239, 241, 244, 1)`,
  borderRadius: `2px`,
  width: `calc(100% - 1.5rem)`,
  padding: `1rem`,
  boxShadow: `0px 0px 1px 0px rgba(0, 0, 0, 0.1),
    0px 6px 6px -6px rgba(0, 0, 0, 0.16)
  `,
});

const Summary: React.FC<Props> = ({ amount, draw, years, children }) => {
  return (
    <StyledSummary>
      <Header amount={amount} draw={draw} years={years}>
        {children}
      </Header>
    </StyledSummary>
  );
};

export default Summary;
