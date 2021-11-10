export const triggerStyle = {
  transformOrigin: 'var(--radix-popover-content-transform-origin)',
  border: `1px solid transparent`,
  width: `200px`,
  marginLeft: `auto`,
  background: `transparent`,
  padding: `12px 16px`,
  textAlign: `left`,
  fontFamily: `monospace`,
  '&:hover': {
    border: `1px solid #EFF1F4`,
  },
  '&.active': {
    border: `1px solid #E6E8EB`,
  },
};