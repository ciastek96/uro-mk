import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import GlobalStyles from "../theme/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
