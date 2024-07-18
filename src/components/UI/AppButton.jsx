import styled, { css } from "styled-components";
import { button_variants, sizes } from "../../utils/constants";
// #7d7d7d
const getSize = (props) => {
  return sizes[props.size] || sizes["default"];
};

const getBackground = (props) => {
  let buttonStyles = button_variants[props.var];

  return css`
    border: ${buttonStyles.border};
    background: ${buttonStyles.bg};
    color: ${buttonStyles.color};
    &:hover {
      ${buttonStyles.hover}
    }
    &:active {
      ${buttonStyles.active};
    }
  `;
};

export const OtherButton = (props) => {
  return (
    <Button var={props.var} size={props.size}>
      {props.children}
    </Button>
  );
};

const Button = styled.button`
  border: none;
  cursor: pointer;
  ${getBackground};
  padding: ${getSize};
`;
