import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "../src/components/Header/Header";
import theme from "../src/styles/theme";

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe("Header", () => {
  test("muestra el título de la aplicación", () => {
    renderWithTheme(<Header appName="Biblioteca Musical" />);

    expect(
      screen.getByText("Biblioteca Musical")
    ).toBeInTheDocument();
  });

  test("muestra el subtítulo correctamente", () => {
    renderWithTheme(<Header appName="Biblioteca Musical" />);

    expect(
      screen.getByText("Busca tus artistas y álbumes favoritos")
    ).toBeInTheDocument();
  });
});
