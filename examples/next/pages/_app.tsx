import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@ui-components/react";
import { colors } from "@ui-components/tokens";

const theme = {
  colors: {
    ...colors,
    secondary: "blue",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  console.log(ThemeProvider);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
