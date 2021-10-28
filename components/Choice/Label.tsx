type Props = {
  text: string
}

const style = {
  color: '#6B6F76',
  fontSize: '13px',
  flex: '0 120px'
}

const Label = ({text}: Props) => {
  return (
    <div style={style}>
      {text}
    </div>
  )
}

export default Label;