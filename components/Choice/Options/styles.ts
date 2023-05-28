export const triggerStyle = {
  transformOrigin: 'var(--radix-popover-content-transform-origin)',
  border: `1px solid var(--border)`,
  width: `200px`,
  marginLeft: `auto`,
  background: `transparent`,
  padding: `12px 16px`,
  textAlign: `left`,
  fontFamily: `monospace`,
  '&:hover': {
    border: `1px solid var(--border)`,
  },
  '&.active': {
    background: `var(--backgroundContrast)`,
    border: `1px solid var(--border)`,
  },
  '&:focus': {
    outline: `none`,
    boxShadow: `var(--shadowFocus)`,
  },
  '&:focus-visible': {
    outlineOffset: `2px`,
    outline: `2px solid var(--border)`,
    boxShadow: `var(--shadowFocus)`,
    borderColor: `var(--foreground)`
  },
};