import { useState } from 'react';
import { OptionType } from '../../Choice/Options';
import { styled, keyframes } from '@stitches/react';

type Props = {
  selected: OptionType;
  setSelected: (value: any) => void;
};

const options: OptionType[] = [
  { value: 'years', label: 'Years', description: 'How long will it last?' },
  { value: 'income', label: 'Income', description: 'How much can I withdraw?' },
  { value: 'savings', label: 'Savings', description: 'How much should I save?'},
];

const scaleBounce = keyframes({
  '0%': { transform: 'scale(1, 1)' },
  '60%': { transform: 'scale(1.04, 1.12)' },
  '100%': { transform: 'scale(1.01, 1.05)' },
});

const StyledLabel = styled('label', {
  display: `flex`,
  position: `relative`,
  marginTop: -1,
  width: `100%`,
  height: 40,
  cursor: `pointer`,
  fontSize: 17,
  userSelect: `none`,
  '&:first-child': {
    marginTop: 0,
  },
  '&:first-child .background': {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
});

const StyledText = styled('div', {
  display: `flex`,
  position: `relative`,
  zIndex: 10,
  marginLeft: 40,
  alignItems: `center`
});

const StyledCheckmark = styled('div', {
  position: `absolute`,
  top: 12,
  left: 14,
  height: 16,
  width: 16,
  background: `var(--foreground)`,
  borderRadius: `50%`,
  transition: `all 250ms ease-out`,
  zIndex: 3,

  '&:after': {
    content: '',
    position: `absolute`,
    top: 0,
    left: 0,
    width: `100%`,
    height: `100%`,
    opacity: 0,
    borderRadius: `50%`,
    background: `var(--foreground)`,
    transform: `scale(0)`,
    transition: `all 350ms ease-out`,
  },
  '&:before': {
    content: '',
    position: `absolute`,
    width: `100%`,
    height: `100%`,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='7' height='5' viewBox='0 0 7 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.75 2L2.75 4L6.25 0.5' stroke='%238C9098'/%3E%3C/svg%3E")`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `7px 5px`,
    backgroundPosition: `center`,
    zIndex: 1,
  },
});

const StyledBackground = styled('div', {
  position: `absolute`,
  top: 0,
  width: `100%`,
  height: `100%`,
  background: `var(--backgroundContrast)`,
  border: `1px solid var(--border)`,
  transition: `transform 350ms ease-out`,
});

const StyledInput = styled('input', {
  position: `absolute`,
  opacity: 0,
  cursor: `pointer`,
  zIndex: 1,
  '&:checked ~ .text': {
    color: `var(--highlight)`,
  },
  '&:checked ~ .checkmark': {
    transform: `scale(1.2)`,
    zIndex: 10,
  },
  '&:checked ~ .background': {
    borderColor: `var(--foreground)`,
    transform: `scale(1.01, 1.05)`,
    animation: `${scaleBounce} 450ms ease-out`,
    zIndex: 8,
  },
  '&:checked ~ .checkmark:after': {
    opacity: 1,
    transform: `scale(1)`,
    background: `var(--highlight)`,
  },
  '&:checked ~ .description': {
    color: `var(--highlight)`,
  }
});

const StyledDescription = styled('div', {
  position: `absolute`,
  top: 12,
  right: 0,
  paddingRight: `1rem`,
  zIndex: 10,
  fontFamily: `monospace`,
  fontSize: 12,
  opacity: 0.5
});

const Radio = ({ selected, setSelected }: Props) => {
  const handleChange = (e: any) => {
    const value = e.target.value;
    const newSelected = options.find((option) => option.value === value);
    setSelected(newSelected);
  };

  return (
    <form style={{ marginBottom: `2rem` }}>
      {options.map((option) => {
        return (
          <StyledLabel key={option.value}>
            <StyledInput
              type="radio"
              value={option.value}
              checked={option.value === selected.value}
              onChange={(e) => handleChange(e)}
            />
            <StyledText className="text">{option.label}</StyledText>
            <StyledCheckmark className="checkmark" />
            <StyledDescription className="description">{option.description}</StyledDescription>
            <StyledBackground className="background"></StyledBackground>
          </StyledLabel>
        );
      })}
    </form>
  );
};

export default Radio;
