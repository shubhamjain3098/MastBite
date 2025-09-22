import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Test cases", () => {
  test("should load contact component", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact component", () => {
    render(<Contact />);

    // Querying
    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load 2 inpust component", () => {
    render(<Contact />);

    // Querying
    // const button = screen.getByRole("button");
    const boxes = screen.getAllByRole("textbox");
    //  console.log(boxes.length)

    expect(boxes.length).toBe(2);
  });
});
