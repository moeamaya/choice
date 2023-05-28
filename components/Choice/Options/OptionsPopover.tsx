import * as Popover from '@radix-ui/react-popover';
import { styled, keyframes } from '@stitches/react';
import { OptionType } from '.';
import List from '../List';
import { triggerStyle } from './styles';

type Props = {
  options: OptionType[];
  option: OptionType;
  setOption: (option: OptionType) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  placeholder: string;
  shortcut: string;
  prefix: string;
  suffix: string;
};

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0.85)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const PopoverStyledContent = styled(Popover.Content, {
  transformOrigin: 'var(--radix-popover-content-transform-origin)',
  animation: `${scaleIn} 0.1s ease-out`,
  border: `1px solid var(--border)`,
  borderRadius: `2px`,
  fontFamily: `monospace`,
  width: `200px`,
  boxShadow: `0px 16px 24px 0px hsla(222, 63%, 3%, 0.12), 0px -2px 8px 0px hsla(222, 63%, 3%, 0.04)`,
  background: `var(--background)`,
});

const PopoverStyledTrigger = styled(Popover.Trigger, triggerStyle);

const OptionsPopover = ({
  open,
  setOpen,
  options,
  option,
  setOption,
  placeholder,
  shortcut,
  prefix,
  suffix
}: Props) => {
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <PopoverStyledTrigger className={open ? 'active' : ''}>
        {option.label}
      </PopoverStyledTrigger>
      <PopoverStyledContent
        align="start"
        side="left"
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
          setOpen={setOpen}
          prefix={prefix}
          suffix={suffix}
        />
      </PopoverStyledContent>
    </Popover.Root>
  );
};

export default OptionsPopover;
