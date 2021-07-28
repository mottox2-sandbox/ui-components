import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "@ui-components/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp
