import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Cart component", () => {
  it("renders card title", () => {
    render(
      <Card
        title="foo"
        price="1.00"
        category="foo"
        description="bar"
        image="fooBarr"
      />,
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
  it("renders card image", () => {
    render(
      <Card
        title="foo"
        price="1.00"
        category="foo"
        description="bar"
        image="fooBarr"
      />,
    );
    expect(screen.getByAltText("foo")).toBeInTheDocument();
  });
  it("renders card description", () => {
    render(
      <Card
        title="foo"
        price="1.00"
        category="foo"
        description="bar"
        image="fooBarr"
      />,
    );
    expect(screen.getByText("bar")).toBeInTheDocument();
  });
  it("renders card category", () => {
    render(
      <Card
        title="foo"
        price="1.00"
        category="foo"
        description="bar"
        image="fooBarr"
      />,
    );
    expect(screen.getByText("foo")).toBeInTheDocument();
  });
  it("renders card price", () => {
    render(
      <Card
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
