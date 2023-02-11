import { render, screen } from "@testing-library/react";
import React from "react";
import AddCar from "../pages/AddCar";
import renderWithRouter from "../utils/testUtils";

describe("Add Car page test", () => {
  it("should have a div with classname addcar", () => {
    renderWithRouter(<AddCar />);
    expect(screen.getByRole(/addcar/i)).toBeInTheDocument();
  });
});
