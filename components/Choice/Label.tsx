type Props = {
  text: string;
  style?: object;
};

const css = {
  color: 'var(--foreground)',
  fontSize: '13px',
  flex: '0 120px',
};

const Label = ({ text, style }: Props) => {
  return <div style={style || css}>{text}</div>;
};

export default Label;
