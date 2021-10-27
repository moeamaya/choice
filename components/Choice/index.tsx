import { useState } from 'react';
import Label from "./Label";
import Options, { OptionType } from "./Options";
import { useHotkeys } from 'react-hotkeys-hook';

type Props = {
  options: OptionType[],
  label?: string,
  placeholder?: string,
}

const Choice = ({options, label="Choose", placeholder="Filter..."}: Props) => {  
  return (
    <>
      <Label text={label} />
      <Options
          options={options}
          placeholder={placeholder}
        />
    </>
  )
}

export default Choice;