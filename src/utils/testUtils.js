import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from "@testing-library/react";

export default function renderWithRouter(children) {
  function Wrapper({ children }) {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
  return render(<Wrapper>{children}</Wrapper>);
}
