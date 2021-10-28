import { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { OptionType } from "./Options";
import { styled } from '@stitches/react';

type SelectProps = {
  options: OptionType[],
  placeholder: string,
  shortcut: string,
  onSelect: (option: OptionType) => void
}

const isOptionType = (v: any): v is OptionType => {
  if((v as OptionType).value !== undefined) return v.value
  return false
}

const selectStyle = {
  menuList: (provided: any) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: '#3C4149',
    backgroundColor: state.isFocused || state.isSelected  ? '#f8f9fb' : 'transparent',
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
      borderColor: `#EFF1F4`
    }
  }),
  menu: (provided: any) => ({
    ...provided,
    position: `relative`,
    border: `none`,
    borderRadius: `none`,
    boxShadow: `none`,
    margin: 0
  }),
  indicatorSeparator: (provided, state) => ({
    display: `none`
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}



const Select = ({options, placeholder, shortcut, onSelect, ...props}: SelectProps) => {
  const DropdownIndicator = (props: any) => {
    const StyledShortcut = styled('div', {
      display: `inline-block`,
      verticalAlign: `baseline`,
      textAlign: `center`,
      textTransform: `capitalize`,
      color: `rgb(60, 65, 73)`,
      fontSize: 11,
      lineHeight: `110%`,
      background: `rgb(239, 241, 244)`,
      borderRadius: `4px`,
      padding: `2px`,
      minWidth: `17px`
    });
  
    return (
      <components.DropdownIndicator {...props}>
        <StyledShortcut>{shortcut}</StyledShortcut>
      </components.DropdownIndicator>
    );
  };

  return (
    <CreatableSelect
      options={options}
      defaultValue={options[2]}
      controlShouldRenderValue={false}
      styles={selectStyle}
      placeholder={placeholder}
      menuIsOpen={true}
      isClearable={false}
      backspaceRemovesValue={false}
      onInputChange={(e) => {console.log(e)}}
      onChange={(v) => {
        if (isOptionType(v)) {
          onSelect(v)
        }
      }}
      components={{ DropdownIndicator }}
      {...props}
    />
  )
}

export default Select;