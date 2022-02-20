import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import Button from "../components/Button/Button";
import ReactDOM from "react-dom";

describe("Button", () => {
  const withThemeProvider = (element) =>
    `<ThemeProvider theme={theme}>${element}</ThemeProvider>`;

  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(withThemeProvider(<Button />), div);
  });

  it("renders button correctly", () => {
    const { getByText } = render(withThemeProvider(<Button>click me</Button>));

    expect(getByText("click me").toBeInTheDocument());
  });
});
