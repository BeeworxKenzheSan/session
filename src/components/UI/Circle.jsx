import styled, { css } from "styled-components";

const CIRCLE_VARIANTS = {
  default: "grey",
  success: "green",
  error: "red",
  processing: "blue",
  warning: "orange",
};

// #7d7d7d

const getCicleBackground = (props) => {
  const styles = CIRCLE_VARIANTS[props.variant];
  if (!styles) {
    return css`
      background: ${CIRCLE_VARIANTS["default"]};
    `;
  }
  return css`
    background: ${styles};
  `;
};

export const Circle = (props) => {
  return <StyledCircle variant={props.variant} />;
};

const StyledCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 5px solid white;
  ${getCicleBackground};
`;
