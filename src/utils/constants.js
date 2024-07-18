export const COLORS = {
  WHITE: "white",
  NEUTRAL60: "#afafaf",
};

export const button_variants = {
  primary: {
    color: COLORS.WHITE,
    bg: "#1677ff",
    hover: {
      background: COLORS.NEUTRAL60,
    },
    active: {
      background: "#0d2545",
    },
    border: "none",
  },
  default: {
    color: "black",
    bg: "white",
    hover: {
      background: "#8ba3c4",
    },
    active: {
      background: "#8ea7c6",
    },
    border: "1px solid grey",
  },
  dashed: {
    color: "black",
    bg: "white",
    hover: {
      background: "#8ba3c4",
    },
    active: {
      background: "#8ea7c6",
    },
    border: "1px dashed grey",
  },
  text: {
    color: "black",
    bg: "none",
    hover: {
      color: "#8ba3c4",
    },
    active: {
      color: "#8ea7c6",
    },
    border: "none",
  },
  link: {
    color: "#1677ff",
    bg: "none",
    hover: {
      color: "#37547d",
    },
    active: {
      color: "#0b1a2d",
    },
    border: "none",
  },
};

export const sizes = {
  large: "10px 50px",
  small: "5px 20px",
  default: "2px 10px",
};
