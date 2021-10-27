import { useState } from 'react';
import { styled, keyframes } from '@stitches/react';
import * as Popover from '@radix-ui/react-popover';
import { useHotkeys } from 'react-hotkeys-hook';
import List from './List';

export type OptionType = {
  label: string;
  value: string;
};

type Props = {
  options: OptionType[],
  placeholder: string,
}

const StyledTrigger = styled(Popover.Trigger, {
  transformOrigin: 'var(--radix-popover-content-transform-origin)',
  border: `1px solid transparent`,
  width: `calc(100% - 2rem)`,
  minWidth: `240px`,
  background: `#fff`,
  padding: `12px 16px`,
  textAlign: `left`,
  '&:hover': {
    border: `1px solid #EFF1F4`
  },
  '&:focus-visible': {
    border: `1px solid #EFF1F4`
  }
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
  width: `calc(100% - 2rem)`,
  minWidth: `240px`,
  boxShadow: `0px 16px 24px 0px hsla(222, 63%, 3%, 0.12), 0px -2px 8px 0px hsla(222, 63%, 3%, 0.04)`
});

const Options = ({options, placeholder}: Props) => {
  const [open , setOpen] = useState(false);
  const [rate, setRate] = useState(options[2]);
  useHotkeys('r', (e) => { setOpen(true); e.preventDefault(); });

  return (
    <Popover.Root
      open={open}
      onOpenChange={setOpen}
      >
      <StyledTrigger>
        {rate.label}
      </StyledTrigger>
      <StyledContent sideOffset={4}>
        <List
          options={options}
          placeholder={placeholder}
          onSelect={(option: OptionType) => { 
            setRate(option);
            setOpen(false)}
          }
        />
      </StyledContent>
    </Popover.Root>
  )
};

export default Options;
