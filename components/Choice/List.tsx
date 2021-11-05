import { components, InputProps } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { OptionType } from './Options';
import { styled } from '@stitches/react';
import { useRef } from 'react';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

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
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: '#3C4149',
    backgroundColor:
      state.isFocused || state.isSelected ? '#f8f9fb' : 'transparent',
    fontSize: 13,
    padding: `8px 16px`,
  }),
  control: (provided: any) => ({
    ...provided,
    border: `none`,
    borderRadius: `0`,
    boxShadow: `none`,
    fontSize: 13,
    padding: `4px 8px`,
    borderBottom: `1px solid #EFF1F4`,
    '&:hover': {
      borderColor: `#EFF1F4`,
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    position: `relative`,
    border: `none`,
    borderRadius: `none`,
    boxShadow: `none`,
    margin: 0,
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

  return (
    <components.DropdownIndicator {...props}>
      <StyledShortcut>{shortcut}</StyledShortcut>
    </components.DropdownIndicator>
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
      isClearable={false}
      backspaceRemovesValue={false}
      onChange={(v) => {
        if (isOptionType(v)) {
          onSelect(v);
        }
      }}
      components={{ DropdownIndicator: ShortcutIcon }}
      {...props}
    />
  );
};

export default List;
