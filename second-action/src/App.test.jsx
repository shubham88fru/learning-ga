import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  it("renders the app", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("has the button", async () => {
    render(<App />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
