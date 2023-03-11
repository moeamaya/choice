import { styled } from "@stitches/react"

const StyledLogo = styled("div", {
  display: "flex",
  alignItems: "center",
});

const StyledBrand = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  borderRadius: "4px",
  marginLeft: "0.5rem",
});

const StyledTitle = styled("div", {
  fontFamily: "serif",
  fontSize: "1.5rem",
  color: "var(--highlight)",
});
const StyledVersion = styled("div", {
  fontSize: "0.5rem",
});


export const Logo = () => {
  return (
    <StyledLogo>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="white"/>
        <path d="M6.5858 0H8.00001L0 8.00001V6.5858L6.5858 0Z" fill="#3C4149"/>
        <path d="M0 12.5858L12.5858 0H14L0 14V12.5858Z" fill="#3C4149"/>
        <path d="M0 18.5858L18.5858 0H20L0 20V18.5858Z" fill="#3C4149"/>
        <path d="M3.10136 23.8987C2.73873 23.8154 2.39491 23.6829 2.07733 23.5085L23.5085 2.07733C23.6829 2.39491 23.8154 2.73873 23.8987 3.10136L3.10136 23.8987Z" fill="#3C4149"/>
        <path d="M10 24H8.5858L24 8.5858V10L10 24Z" fill="#3C4149"/>
        <path d="M17 24H15.5858L24 15.5858V17L17 24Z" fill="#3C4149"/>
      </svg>
      <StyledBrand>
        <StyledTitle>Remir</StyledTitle>
        <StyledVersion>1.0</StyledVersion>
      </StyledBrand>
    </StyledLogo>
  )
}