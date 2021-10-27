import Creatable, { CSSObjectWithLabel, StylesConfig } from 'react-select';


export type OptionType = {
  label: string;
  value: string;
};

type SelectProps = {
  options: OptionType[],
  placeholder: string,
  onSelect: (option: OptionType) => void
}

const isOptionType = (v: any): v is OptionType => {
  if((v as OptionType).value !== undefined) return v.value
  return false
}

const customControlStyles: CSSObjectWithLabel = {
  border: `none`,
  borderRadius: `0`,
  boxShadow: `none`,
  fontSize: 14,
  padding: `4px 8px`,
  borderBottom: `1px solid #EFF1F4`,
  '&:hover': {
    borderColor: `#EFF1F4`
  }
};

const selectStyle = {
  menuList: (provided: any) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: '#000',
    backgroundColor: state.isFocused || state.isSelected  ? '#f8f9fb' : 'transparent',
    fontSize: 14,
    padding: `8px 16px`,
  }),
  control: (provided: any) => ({
    ...provided,
    border: `none`,
    borderRadius: `0`,
    boxShadow: `none`,
    fontSize: 14,
    padding: `4px 8px`,
    borderBottom: `1px solid #EFF1F4`,
    '&:hover': {
      borderColor: `#EFF1F4`
    }
  }),
  indicatorsContainer: () => ({
    display: `none`
  }),
  menu: (provided: any) => ({
    ...provided,
    position: `relative`,
    border: `none`,
    borderRadius: `none`,
    boxShadow: `none`,
    margin: 0
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

const Select = ({options, placeholder="Filter...", onSelect, ...props}: SelectProps) => {
  return (
    <Creatable
      options={options}
      styles={selectStyle}
      placeholder={placeholder}
      menuIsOpen={true}
      isClearable={false}
      onInputChange={(e) => {console.log(e)}}
      onChange={(v) => {
        if (isOptionType(v)) {
          onSelect(v)
        }
      }}
      {...props}
    />
  )
}

export default Select;