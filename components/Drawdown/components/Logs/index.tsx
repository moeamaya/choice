import { FC, useContext, useEffect } from 'react';
import { CalculatorContext } from '../../components/Calculator/provider';

import TimeAgo from 'react-timeago'

import { styled } from '@stitches/react'

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

const StyledTR = styled('tr', {
  '&:nth-child(even)': {
    background: `var(--background)`,
    borderBottom: `1px solid var(--border)`,
  },
  '&:nth-child(odd) td': {
    paddingTop: `0.625rem`,
    fontFamily: `serif`,
    color: `var(--foreground)`,
  },
  '&:nth-child(even) td': {
    paddingBottom: `0.625rem`,
  },
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

const StyledTD = styled('td', {
  padding: `0.125rem 0.5rem`,
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
        {logs
          .sort((a, b) => {
            const dateA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
            const dateB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
            return dateA - dateB;
          })
          .reverse()
          .map((log, index) => {
            return (
              <>
                <StyledTR key={index}>
                  <StyledTD colSpan={5}>
                    <TimeAgo date={log.timestamp} minPeriod={15} />
                  </StyledTD>
                </StyledTR>
                <StyledTR key={index + 1000}>
                  <StyledTD>Years</StyledTD>
                  <StyledTD>{log.amount}</StyledTD>
                  <StyledTD>{log.income.value}</StyledTD>
                  <StyledTD>{log.time.value}</StyledTD>
                  <StyledTD>{log.rate.value} · {log.inflation.value}</StyledTD>
                </StyledTR>
              </>
            );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Logs;