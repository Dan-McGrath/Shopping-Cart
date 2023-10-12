import Contact from "./Contact";
import { render, screen } from "@testing-library/react";

describe("Contact component", () => {
  it("renders name input", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Name:"), {
      name: "Name:",
    }).toBeInTheDocument();
  });

  it("renders email input", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Email:"), {
      name: "Email:",
    }).toBeInTheDocument();
  });
  it("renders email input", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Message:"), {
      name: "Message",
    }).toBeInTheDocument();
  });

  it("renders email input", () => {
    render(<Contact />);
    expect(screen.getByRole("button"), {
      name: "Submit",
    }).toBeInTheDocument();
  });
});
