import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "@ui-components/react";
import { colors } from "../../tokens/src";

const theme = {
  colors: {
    ...colors,
    secondary: "blue",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider theme={theme}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
