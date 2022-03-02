import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { renderWithThemeProvider } from "../utils/testUtils";
import Button from "../components/Button/Button";
import ReactDOM from "react-dom";

describe("Button", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(renderWithThemeProvider(<Button />), div);
  });

  it("renders button correctly", () => {
    const { getByText } = render(
      renderWithThemeProvider(<Button>click me</Button>)
    );

    expect(getByText(/click me/i)).toBeInTheDocument();
  });

  it("renders value correctly", () => {
    const { getByText } = render(
      renderWithThemeProvider(<Button>click me</Button>)
    );

    const textContent = /click me/i;

    expect(getByText(textContent)).toHaveTextContent(textContent);
  });
});
