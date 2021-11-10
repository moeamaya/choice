import { useState } from 'react';

import { useHotkeys } from 'react-hotkeys-hook';
import { useBreakpoint } from '../../Breakpoint';

import OptionsPopover from './OptionsPopover';
import OptionsDialog from './OptionsDialog';

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
  }

  return (
    <OptionsDialog
      open={open}
      setOpen={setOpen}
      label={label}
      options={options}
      option={option}
      setOption={setOption}
      placeholder={placeholder}
      shortcut={shortcut}
    />
  );
};

export default Options;
