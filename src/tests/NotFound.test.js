import { screen } from "@testing-library/react";
import React from "react";
import NotFoundPage from "../pages/NotFoundPage";
import renderWithRouter from "../utils/testUtils";

describe("Not Found page test", () => {
  it("should render link element correctly", () => {
    renderWithRouter(<NotFoundPage />);
    expect(screen.getByRole(/notfoundpage/i)).toBeInTheDocument();
  });

  it("should contain infromation", () => {
    renderWithRouter(<NotFoundPage />);
    const errorStatus = screen.getByText("404");
    expect(errorStatus).toBeInTheDocument();

    const errorType = screen.getByText(/page not found/i);
    expect(errorType).toBeInTheDocument();
  });

  it("should render link to go back", () => {
    renderWithRouter(<NotFoundPage />);
    expect(screen.getByText(/back to dashboard/i)).toBeInTheDocument();
  });

  it("should have possibility description", () => {
    renderWithRouter(<NotFoundPage />);
    expect(screen.getByText(/Maybe you entered the wrong word/i)).toBeInTheDocument();
  });
});
