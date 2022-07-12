import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
  const validProps = {
    searchResults: ["World", "Hello"],
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchResults results={validProps.searchResults} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
