import { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

import { OptionType } from './Options';
import { styled } from '@stitches/react';
import { useBreakpoint } from '../Breakpoint';
import { dollarFormatter } from '../Helpers/formatters';
import { convertToFloat } from '../Helpers/parseCurrency';

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
  return <components.Input pattern="[0-9]*" inputMode="decimal" placeholder={props.placeholder} {...props} />;
};

const StyledInput = styled('input', {
  visibility: `visible`,
  display: `inline-grid`,
  gridArea: `1 / 1 / 2 / 3`,
  gridTemplateColumns: ` 0 min-content`,
  margin: `2px`,
  padding: `2px 0`,
  background: `var(--backgroundContrast)`,
  border: `none`,
  height: `40px`,
  fontFamily: `monospace`,
  appearance: `none`,
  '-moz-appearance': `none`,
  '-webkit-appearance': `none`,
  '&:focus': {
    borderColor: `#e3e5e8`,
    outline: `none`,
  },
});

const NumericInput = (props: any) => {
  return (
    <NumericFormat
      customInput={StyledInput}
      thousandSeparator={true}
      prefix={'$'}
      pattern="[0-9]*"
      allowNegative={false}
      placeholder='Set income....'
      {...props}
    />
  );
};

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
        if (v === null) return;
        if (v.target.value === '') return;

        const input = v.target.value;
        const currency = convertToFloat(input);
        const value = currency.toString();
        const label = dollarFormatter(currency);

        const object = { value, label };
        return onSelect(object)
      }}
      onChange={(v) => {
        if (v === null) return;

        const currency = convertToFloat(v.value).toString();
        const object = { value: currency, label: v.label };
        return onSelect(object);
      }}
      components={{ DropdownIndicator: ShortcutIcon, Input: NumericInput }}
      {...props}
    />
  );
};

export default List;
