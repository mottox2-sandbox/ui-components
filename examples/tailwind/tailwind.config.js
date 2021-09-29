const tokens = require("@ui-components/tokens");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
