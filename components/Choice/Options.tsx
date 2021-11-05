import { useRef, useState } from 'react';
import { styled, keyframes } from '@stitches/react';
import * as Popover from '@radix-ui/react-popover';
import { useHotkeys } from 'react-hotkeys-hook';
import List from './List';

export type OptionType = {
  label: string;
  value: string;
};

const SCROLL_BUFFER = 16; // pixels

type Props = {
  options: OptionType[];
  option: OptionType;
  setOption: (option: OptionType) => void;
  placeholder: string;
  shortcut: string;
};

const StyledTrigger = styled(Popover.Trigger, {
  transformOrigin: 'var(--radix-popover-content-transform-origin)',
  border: `1px solid transparent`,
  width: `200px`,
  marginLeft: `auto`,
  background: `transparent`,
  padding: `12px 16px`,
  textAlign: `left`,
  fontFamily: `monospace`,
  '&:hover': {
    border: `1px solid #EFF1F4`,
  },
  '&.active': {
    border: `1px solid #E6E8EB`,
  },
});

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.85)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const StyledContent = styled(Popover.Content, {
  transformOrigin: 'var(--radix-popover-content-transform-origin)',
  animation: `${scaleIn} 0.1s ease-out`,
  border: `1px solid #EFF1F4`,
  borderRadius: `2px`,
  width: `200px`,
  fontFamily: `monospace`,
  boxShadow: `0px 16px 24px 0px hsla(222, 63%, 3%, 0.12), 0px -2px 8px 0px hsla(222, 63%, 3%, 0.04)`,
});

const Options = ({
  options,
  option,
  setOption,
  placeholder,
  shortcut,
}: Props) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();

  useHotkeys(shortcut, (e) => {
    setOpen(true);
    e.preventDefault();
  });

  const onOpenChange = (open: boolean) => {
    setOpen(open);
    if (open) {
      const scroll = window.scrollY;
      const top = buttonRef.current.getBoundingClientRect().top;
      window.scrollTo({
        top: scroll + top - SCROLL_BUFFER,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Popover.Root open={open} onOpenChange={onOpenChange}>
      <StyledTrigger ref={buttonRef} className={open ? 'active' : ''}>
        {option.label}
      </StyledTrigger>
      <StyledContent sideOffset={4} onEscapeKeyDown={() => setOpen(false)}>
        <List
          options={options}
          defaultValue={option}
          placeholder={placeholder}
          shortcut={shortcut}
          onSelect={(option: OptionType) => {
            setOption(option);
            setOpen(false);
          }}
        />
      </StyledContent>
    </Popover.Root>
  );
};

export default Options;
