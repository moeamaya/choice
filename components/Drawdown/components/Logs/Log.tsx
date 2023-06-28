import {FC} from "react";

import TimeAgo from 'react-timeago';


import { styled } from '@stitches/react'

import type { CalculatorState } from "../Calculator/provider";

type Props = {
  log: CalculatorState;
}

const capitalize = (str: string) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

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

const Log: FC<Props> = ({log} ) => {
  return (
  <>
    <StyledTR>
      <StyledTD colSpan={5}>
        <TimeAgo date={log.timestamp} minPeriod={15} />
      </StyledTD>
    </StyledTR>
    <StyledTR>
      <StyledTD>{capitalize(log.type)}</StyledTD>
      <StyledTD>{log.amount}</StyledTD>
      <StyledTD>{log.income.value}</StyledTD>
      <StyledTD>{log.time.value}</StyledTD>
      <StyledTD>{log.rate.value} · {log.inflation.value}</StyledTD>
    </StyledTR>
  </>
  );
}

export default Log;