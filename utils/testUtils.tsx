import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";

export const renderWithThemeProvider = (children: ReactNode) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
