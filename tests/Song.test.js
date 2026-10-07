import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Song from "../src/components/Song/Song";
import theme from "../src/styles/theme";

describe("Song", () => {
  const song = {
    title: "Súper sangre joven",
    artist: "Duki",
  };

  const renderSong = () =>
    render(
      <ThemeProvider theme={theme}>
        <Song song={song} />
      </ThemeProvider>
    );

  test("muestra el título y artista de la canción", () => {
    renderSong();

    expect(
      screen.getByText("Súper sangre joven")
    ).toBeInTheDocument();

    expect(screen.getByText("Duki")).toBeInTheDocument();
  });

  test("permite agregar y quitar una canción de favoritos", () => {
    renderSong();

    const button = screen.getByRole("button", {
      name: "Agregar favorito",
    });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(
      screen.getByRole("button", {
        name: "Quitar favorito",
      })
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Quitar favorito",
      })
    );

    expect(
      screen.getByRole("button", {
        name: "Agregar favorito",
      })
    ).toBeInTheDocument();
  });
});
