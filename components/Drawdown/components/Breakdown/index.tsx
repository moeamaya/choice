import { FC, useContext } from 'react';

import { styled } from '@stitches/react'

import { CalculatorContext } from '../Calculator/provider';

import Row from './Row';

const StyledTable = styled('table',{
  borderCollapse: `collapse`,
  width: `100%`,
  marginBottom: `1rem`,
  fontFamily: `monospace`,
  fontSize: 12,
  textAlign: `left`,
  border: `1px solid var(--border)`,
  color: `var(--fade)`,
  marginTop: `2rem`,
});

const Title = styled('h2', {
  fontFamily: `serif`,
  fontSize: 12,
  fontWeight: `normal`,
  margin: 0,
  color: `var(--highlight)`,
});

const StyledHeadTR = styled('tr', {
  borderBottom: `1px solid var(--border)`,
});

const StyledTH = styled('th', {
  padding: `0.625rem 0.25rem`,
  fontWeight: `normal`,
  textAlign: `right`,
  '&:first-child': {
    paddingLeft: `1rem`,
    textAlign: `left`,
  },
  '&:last-child': {
    paddingRight: `1rem`,
  }
});

const Breakdown: FC = () => {
  const { calculatorState } = useContext(CalculatorContext);

  console.log(calculatorState)

  const rows = [
    {amount: 450000, gain: 0, loss: 0, draw: 35000},
    {amount: 420000, gain: 22000, loss: 2800, draw: 35000},
  ]

  return (
    <StyledTable>
      <thead>
        <StyledHeadTR>
          <StyledTH colSpan={5}>
            <Title>Breakdown</Title>
          </StyledTH>
        </StyledHeadTR>
      </thead>
      <thead>
        <StyledHeadTR>
          <StyledTH>Amount</StyledTH>
          <StyledTH>Gain</StyledTH>
          <StyledTH>Loss</StyledTH>
          <StyledTH>Draw</StyledTH>
        </StyledHeadTR>
      </thead>
      <tbody>
        {rows.map(row => <Row key={row.amount} row={row} />)}
      </tbody>
    </StyledTable>
  );
}

export default Breakdown;