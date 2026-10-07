import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import GlobalStyles from "../src/styles/GlobalStyles";

describe("GlobalStyles", () => {
  test("renderiza los estilos globales", () => {
    const { container } = render(
      <>
        <GlobalStyles />
        <div>Contenido</div>
      </>
    );

    expect(container).toBeInTheDocument();
    expect(
      container.querySelector("div")
    ).toBeInTheDocument();
  });
});
