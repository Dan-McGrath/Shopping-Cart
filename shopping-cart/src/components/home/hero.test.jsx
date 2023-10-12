import Hero from "./hero";
import { render, screen } from "@testing-library/react";

describe("Contact component", () => {
  it("renders heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Danify!" }),
    ).toBeInTheDocument();
  });
  it("renders subtext", () => {
    render(<Hero />);
    expect(screen.getByText(/shopping/i)).toBeInTheDocument();
  });
});
