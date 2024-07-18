import styled, { css } from "styled-components";
// #7d7d7d
const BUTTON_VARIANTS = {
  disabled: {
    background: "#F6F6F6",
    color: "#C0C0C0",
    cursor: "not-allowed",
  },
  secondary: {
    background: "#F6F6F6",
    color: "#5DB075",
    cursor: "pointer",
  },
  primary: {
    background: "#5DB075",
    color: "white",
    cursor: "pointer",
  },
};
const getStyles = ({ variant }) => {
  const buttonStyles = BUTTON_VARIANTS[variant];
  return css`
    background: ${buttonStyles.background};
    color: ${buttonStyles.color};
    cursor: ${buttonStyles.cursor};
    padding: 15px 10px;
  `;
};
export const Button = ({ children, variant }) => {
  return <MyButton variant={variant}>{children}</MyButton>;
};
const MyButton = styled.button`
  border: none;
  border-radius: 15px;
  margin: 15px;
  ${getStyles};
`;
