import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieGallery from "./";

describe("MovieGallery", () => {
  it("should render component", () => {
    render(<MovieGallery />);

    expect(screen.getByTestId("movie-gallery")).toBeInTheDocument();
  });
});
