import React from "react";
import { render, screen } from "@testing-library/react";
import { MyComponent } from "../index";

test("renders Hello, World!", () => {
  render(<MyComponent />);
  expect(screen.getByText("Hello, World!")).toBe(true);
});
