import { render, screen } from "@testing-library/react";
import Game from "./Game";

describe("Game component", () => {
  it("renders Game title", () => {
    render(
      <Game
        title="foo"
        price="1.00"
        category="foo"
        description="bar"
        image="fooBarr"
      />,
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  it("renders Game image", () => {
    render(
      <Game
        title="foo"
        price="1.00"
        category="foo"
        description="bar"
        image="fooBarr"
      />,
    );
    expect(screen.getByAltText("foo")).toBeInTheDocument();
  });
  it("renders Game description", () => {
    render(
      <Game
        title="foo"
        price="1.00"
        category="foo"
        description="bar"
        image="fooBarr"
      />,
    );
    expect(screen.getByText("bar")).toBeInTheDocument();
  });
  it("renders Game category", () => {
    render(
      <Game
        title="foo"
        price="1.00"
        category="foo"
        description="bar"
        image="fooBarr"
      />,
    );
    expect(screen.getByText("foo")).toBeInTheDocument();
  });
  it("renders Game price", () => {
    render(
      <Game
        title="foo"
        price="1.00"
        category="foo"
        description="bar"
        image="fooBarr"
      />,
    );
    expect(screen.getByText("$1.00")).toBeInTheDocument();
  });
});
