import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders logo", () => {
    render(<App />);
    const imgElement = screen.getByAltText("nasaLogo");

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveClass("nasa-logo");
  });
});
