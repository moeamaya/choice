import { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

import { OptionType } from './Options';
import { styled } from '@stitches/react';
import { useBreakpoint } from '../Breakpoint';
import { dollarFormatter } from '../Helpers/formatters';

type SelectProps = {
  options: OptionType[];
  defaultValue: OptionType;
  placeholder: string;
  shortcut: string;
  onSelect: (option: OptionType) => void;
};

const isOptionType = (v: any): v is OptionType => {
  if ((v as OptionType).value !== undefined) return v.value;
  return false;
};

const listStyle = {
  menuList: (provided: any) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    background: `var(--background)`,
    color: `var(--foreground)`,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor:
      state.isFocused || state.isSelected ? `var(--backgroundContrast)` : 'transparent',
    fontSize: 13,
    padding: `8px 16px`,
    color: `var(--foreground)`,
  }),
  control: (provided: any) => ({
    ...provided,
    border: `none`,
    borderRadius: `0`,
    boxShadow: `none`,
    fontSize: 13,
    padding: `4px 8px`,
    borderBottom: `1px solid var(--border)`,
    background: `var(--background)`,
    color: `var(--foreground)`,
    '&:hover': {
      borderColor: `#EFF1F4`,
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    position: `relative`,
    border: `none`,
    borderRadius: 0,
    boxShadow: `none`,
    margin: 0,
    backgroundColor: `var(--background)`,
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    display: `none`,
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const ShortcutIcon = (props: any) => {
  const { shortcut } = props.selectProps;
  const breakpoint = useBreakpoint();

  const StyledShortcut = styled('div', {
    display: `inline-block`,
    verticalAlign: `baseline`,
    textAlign: `center`,
    textTransform: `capitalize`,
    color: `rgb(60, 65, 73)`,
    fontSize: 11,
    fontFamily: `sans-serif`,
    lineHeight: `110%`,
    background: `rgb(239, 241, 244)`,
    borderRadius: `4px`,
    padding: `3px`,
    minWidth: `17px`,
  });

  if (breakpoint === 'laptop' || breakpoint === 'laptopL') {
    return (
      <components.DropdownIndicator {...props}>
        <StyledShortcut>{shortcut}</StyledShortcut>
      </components.DropdownIndicator>
    );
  }

  return null;
};

const Input = (props: any) => {
  return <components.Input pattern="[0-9]*" inputMode="numberic"  {...props} />;
};

const NewInput = (props: any) => {
  return (
    <NumericFormat
      thousandSeparator={true}
      prefix={'$'}
      pattern="[0-9]*"
      allowNegative={false}
      {...props}
    /> 
  );
}

const List = ({
  options,
  defaultValue,
  placeholder,
  shortcut,
  onSelect,
  ...props
}: SelectProps) => {
  return (
    <CreatableSelect
      //@ts-ignore
      shortcut={shortcut}
      options={options}
      defaultValue={defaultValue}
      controlShouldRenderValue={false}
      styles={listStyle}
      placeholder={placeholder}
      menuIsOpen={true}
      maxMenuHeight={200}
      isClearable={false}
      backspaceRemovesValue={false}
      onBlur={(v) => {
        const value = v.target.value;
        const label = dollarFormatter(parseFloat(value));
        return value ? onSelect({ value, label }) : null;
      }}
      onChange={(v) => {
        console.log(v)
        if (isOptionType(v)) {
          onSelect(v);
        }
      }}
      components={{ DropdownIndicator: ShortcutIcon, Input }}
      {...props}
    />
  );
};

export default List;
