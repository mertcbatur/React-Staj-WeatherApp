export const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#22222f",
    border: "2px solid #d1d5db",
    borderRadius: "0.375rem", // rounded-md
    boxShadow: "none", // shadow-none
    "&:hover": {
      border: "2px solid #9ca3af", // hover:border-gray-400
    },
    color: "white",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    width: "16rem",
    height: "3rem",
    minHeight: "3rem",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused || isSelected ? "#3b3b54" : "#22222f",
    color: "white",
    ":active": {
      backgroundColor: isSelected ? "#3b3b54" : "#22222f",
    },
    padding: "1rem",
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "#22222f",
    width: "16rem",
  }),
  input: (styles) => ({
    ...styles,
    color: "white",
  }),
};
