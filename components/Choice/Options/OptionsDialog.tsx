import * as Dialog from '@radix-ui/react-dialog';
import { styled, keyframes } from '@stitches/react';
import { OptionType } from '.';
import List from '../List';
import { triggerStyle } from './styles';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  label: string;
  options: OptionType[];
  option: OptionType;
  setOption: (option: OptionType) => void;
  placeholder: string;
  shortcut: string;
  prefix: string;
  suffix: string;
};

const DialogStyledTrigger = styled(Dialog.Trigger, triggerStyle);

const scaleUp = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, 0%) scale(0.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, 0%) scale(1)' },
});

const DialogStyledTitle = styled(Dialog.Title, {
  margin: '16px 12px 0px',
  height: '25px',
  lineHeight: '25px',
  padding: '0px 8px',
  fontSize: '0.8em',
  fontWeight: `normal`,
  flexShrink: 0,
  alignSelf: 'flex-start',
  color: 'rgb(107, 111, 118)',
  background: 'var(--backgroundContrast)',
  borderRadius: '4px',
  maxWidth: 'calc(100vw - 60px)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const DialogStyledContent = styled(Dialog.Content, {
  animation: `${scaleUp} 350ms cubic-bezier(0.16, 1, 0.3, 1)`,
  border: `1px solid var(--border)`,
  borderRadius: `8px`,
  fontFamily: `monospace`,
  background: `var(--background)`,
  boxShadow: `rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 50px -15px`,
  position: `fixed`,
  top: `10%`,
  left: `50%`,
  transform: `translate(-50%, 0%)`,
  width: `90vw`,
  maxWidth: `500px`,
  maxHeight: `85vh`,
  zIndex: 10,
  overflow: `hidden`,
  caretColor: `var(--foreground)`,
});

const OptionsDialog = ({
  open,
  setOpen,
  label,
  options,
  option,
  setOption,
  placeholder,
  shortcut,
  prefix,
  suffix
}: Props) => {
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
          setOpen={setOpen}
          prefix={prefix}
          suffix={suffix}
        />
      </DialogStyledContent>
    </Dialog.Root>
  );
};

export default OptionsDialog;
