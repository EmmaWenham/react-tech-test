import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
  const validProps = {
    searchResults: ["test", "test"],
  };

  it("renders SearchResult component correctly", () => {
    const { asFragment } = render(
      <SearchResults results={validProps.results} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders placeholder if no results", () => {
    const validProps = [];
    render(<SearchResults results={validProps} />);

    const placeholderMsg = screen.getByText("No results");

    expect(placeholderMsg).toBeInTheDocument();
  });
});
