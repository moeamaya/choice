import { useState } from 'react';
import { styled, keyframes } from '@stitches/react';

import * as Dialog from '@radix-ui/react-dialog';

import { useHotkeys } from 'react-hotkeys-hook';
import { useBreakpoint } from '../../Breakpoint';

import OptionsPopover from './OptionsPopover';
import List from '../List';
import { triggerStyle } from './styles';

export type OptionType = {
  label: string;
  value: string;
};

type Props = {
  options: OptionType[];
  option: OptionType;
  setOption: (option: OptionType) => void;
  placeholder: string;
  shortcut: string;
  label: string;
};

const DialogStyledTrigger = styled(Dialog.Trigger, triggerStyle);

const scaleUp = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
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
  top: `30%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
  width: `90vw`,
  maxWidth: `500px`,
  maxHeight: `85vh`,
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
      <OptionsPopover
        options={options}
        option={option}
        setOption={setOption}
        open={open}
        setOpen={setOpen}
        placeholder={placeholder}
        shortcut={shortcut}
      />
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
