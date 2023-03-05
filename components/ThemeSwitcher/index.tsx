import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { styled } from '@stitches/react';

const StyledSelect = styled('select', {
  color: `var(--foreground)`,
  background: `var(--background)`,
  border: `none`,
  fontSize: 13,
  padding: `4px 8px`,
  borderBottom: `1px solid var(--border)`,
  marginLeft: `auto`,
  '&:hover': {
    borderColor: `#EFF1F4`,
  }
});

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <StyledSelect value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </StyledSelect>
  )
}

export default ThemeSwitcher;