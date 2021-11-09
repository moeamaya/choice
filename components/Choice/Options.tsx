import { useRef, useState } from 'react';
import { styled, keyframes } from '@stitches/react';

import { createBreakpoint } from 'react-use';

import * as Popover from '@radix-ui/react-popover';
import * as Dialog from '@radix-ui/react-dialog';

import { useHotkeys } from 'react-hotkeys-hook';
import List from './List';

export type OptionType = {
  label: string;
  value: string;
};

const SCROLL_BUFFER = 16; // pixels

const useBreakpoint = createBreakpoint();

type Props = {
  options: OptionType[];
  option: OptionType;
  setOption: (option: OptionType) => void;
  placeholder: string;
  shortcut: string;
  label: string;
};

const triggerStyle = {
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
};

const PopoverStyledTrigger = styled(Popover.Trigger, triggerStyle);
const DialogStyledTrigger = styled(Dialog.Trigger, triggerStyle);

const scaleUp = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.85)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const DialogStyledTitle = styled(Dialog.Title, {
  margin: '16px 12px 0px',
  height: '25px',
  lineHeight: '25px',
  padding: '0px 8px',
  fontSize: '0.8em',
  fontWeight: `normal`,
  fontFamily: `sans-serif`,
  flexShrink: 0,
  alignSelf: 'flex-start',
  color: 'rgb(107, 111, 118)',
  background: 'rgb(239, 241, 244)',
  borderRadius: '4px',
  maxWidth: 'calc(100vw - 60px)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const DialogStyledContent = styled(Dialog.Content, {
  animation: `${scaleUp} 350ms cubic-bezier(0.16, 1, 0.3, 1)`,
  border: `1px solid #EFF1F4`,
  borderRadius: `8px`,
  fontFamily: `monospace`,
  background: `#fff`,
  boxShadow: `rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 50px -15px`,
  position: `fixed`,
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  width: `90vw`,
  maxWidth: `500px`,
  maxHeight: `85vh`,
});

const PopoverStyledContent = styled(Popover.Content, {
  transformOrigin: 'var(--radix-popover-content-transform-origin)',
  animation: `${scaleIn} 0.1s ease-out`,
  border: `1px solid #EFF1F4`,
  borderRadius: `2px`,
  fontFamily: `monospace`,
  width: `200px`,
  boxShadow: `0px 16px 24px 0px hsla(222, 63%, 3%, 0.12), 0px -2px 8px 0px hsla(222, 63%, 3%, 0.04)`,
});

const Options = ({
  options,
  option,
  setOption,
  placeholder,
  shortcut,
  label,
}: Props) => {
  const [open, setOpen] = useState(false);
  const breakpoint = useBreakpoint();

  useHotkeys(shortcut, (e) => {
    setOpen(true);
    e.preventDefault();
  });

  if (breakpoint === 'laptop' || breakpoint === 'laptopL') {
    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <PopoverStyledTrigger className={open ? 'active' : ''}>
          {option.label}
        </PopoverStyledTrigger>
        <PopoverStyledContent
          sideOffset={4}
          onEscapeKeyDown={() => setOpen(false)}
        >
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
        </PopoverStyledContent>
      </Popover.Root>
    );
  } else {
    return (
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <DialogStyledTrigger className={open ? 'active' : ''}>
          {option.label}
        </DialogStyledTrigger>

        <Dialog.Overlay />

        <DialogStyledContent>
          <DialogStyledTitle>{label}</DialogStyledTitle>

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
        </DialogStyledContent>
      </Dialog.Root>
    );
  }
};

export default Options;
