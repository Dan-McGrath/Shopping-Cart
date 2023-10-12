import { render, screen } from "@testing-library/react";
import Recommendation from "./Recommendation";

describe("Recommendation Component", () => {
  it("renders section title", () => {
    render(<Recommendation />);
    expect(
      screen.getByRole("heading", { name: "Recommendations" }),
    ).toBeInTheDocument();
  });
});
