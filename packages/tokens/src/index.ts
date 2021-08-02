const palette = {
  black: "#000000",
  white: "#FFFFFF",
  pink: {
    700: "#F12D64", // Dark
    500: "#F67599", // Default
    300: "#FBBACC", // Light
    50: "#FEF8FA", // Lighter
  },
  red: "#F5333F",
  orange: "#FF9F37",
  yellow: "#FFE600",
  green: "#14BFA1",
  blue: "#3CC8E1",
  navy: "#001A70",
  purple: "#C964CF",
};

export const colors = {
  primary: palette.red,
  secondary: palette.blue,
  success: palette.green,
  info: palette.purple,
  warning: palette.yellow,
  danger: palette.red,
  ...palette,
};

export const sizes = {
  radius: {
    xs: "1px",
    sm: "0.125rem", // 2px
    md: "0.25rem", // 4px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    full: "9999px",
  },
};
