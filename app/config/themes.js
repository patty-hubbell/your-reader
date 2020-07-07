import colors from "./colors";

const backgroundColor = (theme) => {
  return theme === "light" ? colors.white : colors.black;
};

const color = (theme) => {
  return theme === "light" ? colors.black : colors.white;
};

export { backgroundColor, color };
