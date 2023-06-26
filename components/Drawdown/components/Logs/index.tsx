import { FC, useContext, useEffect } from 'react';
import { CalculatorContext } from '../../components/Calculator/provider';

import Log from "./Log"

import { styled } from '@stitches/react'


function padZero(value: any) {
  return String(value).padStart(2, '0');
}


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
  


const Logs: FC = () => {
  const { logs } = useContext(CalculatorContext);

  const sortedLogs = logs
    .sort((a, b) => {
      const dateA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
      const dateB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
      return dateA - dateB;
    })
    .reverse();

  return (
    <StyledTable>
      <thead>
        <StyledHeadTR>
          <StyledTH colSpan={5}>
            <Title>Logs</Title>
          </StyledTH>
        </StyledHeadTR>
      </thead>
      <thead>
        <StyledHeadTR>
          <StyledTH>Type</StyledTH>
          <StyledTH>Amount</StyledTH>
          <StyledTH>Income</StyledTH>
          <StyledTH>Years</StyledTH>
          <StyledTH>Rates</StyledTH>
        </StyledHeadTR>
      </thead>
      <tbody>
        {sortedLogs.map((log, index) => (
          <Log key={index} log={log} />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Logs;