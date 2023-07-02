import { FC } from 'react';

import { styled } from '@stitches/react';

import { dollarFormatter } from '../../../Helpers/formatters';

type Props = {
  row: {
    amount: number;
    gain: number;
    loss: number;
    draw: number;
  };
};

const StyledTR = styled('tr', {
  background: `var(--background)`,
  borderBottom: `1px solid var(--border)`,
});

const StyledTD = styled('td', {
  padding: `0.5rem 0.5rem`,
  textAlign: `right`,
  '&:first-child': {
    paddingLeft: `1rem`,
    textAlign: `left`,
  },
  '&:last-child': {
    paddingRight: `1rem`,
  },
});

const Row: FC<Props> = ({ row }) => {
  const $row = Object.fromEntries(
    Object.entries(row).map(([key, value]) => [key, dollarFormatter(value)])
  );

  return (
    <>
      <StyledTR>
        <StyledTD>{$row.amount}</StyledTD>
        <StyledTD>{$row.gain}</StyledTD>
        <StyledTD>{$row.loss}</StyledTD>
        <StyledTD>{$row.draw}</StyledTD>
      </StyledTR>
    </>
  );
};

export default Row;
