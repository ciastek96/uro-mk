import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { renderWithThemeProvider } from "../utils/testUtils";
import ContactForm from "../components/ContactForm/ContactForm";

const sampleValues = {
  name: "Name",
  email: "test@o2.pl",
  content: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  agreement: false,
};

describe("Contact form", () => {
  it("displays errors when the agreement is not checked", async () => {
    render(renderWithThemeProvider(<ContactForm />));
    const submitButton = screen.getByRole("button", { name: /wyślij/i });
    const nameInput = screen.getByTestId("name");
    const emailInput = screen.getByTestId("email");
    const contentInput = screen.getByTestId("content");

    userEvent.type(nameInput, sampleValues.name);
    userEvent.type(emailInput, sampleValues.email);
    userEvent.type(contentInput, sampleValues.content);

    userEvent.click(submitButton);
    const errorMsg = await screen.findByText("Pole obowiązkowe");

    expect(errorMsg).toBeInTheDocument();
  });
  //   it("renders without crashing", () => {
  //     const div = document.createElement("div");

  //     ReactDOM.render(renderWithThemeProvider(<Button />), div);
  //   });

  //   it("renders button correctly", () => {
  //     const { getByText } = render(
  //       renderWithThemeProvider(<Button>click me</Button>)
  //     );

  //     expect(getByText(/click me/i)).toBeInTheDocument();
  //   });

  //   it("renders value correctly", () => {
  //     const { getByText } = render(
  //       renderWithThemeProvider(<Button>click me</Button>)
  //     );

  //     const textContent = /click me/i;

  //     expect(getByText(textContent)).toHaveTextContent(textContent);
  //   });
});
