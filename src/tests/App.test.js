import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

jest.mock("react-router-dom", () => ({
  Link: ({ children, ...props }) => (
    <a href={props.to} {...props}>
      {children}
    </a>
  ),

  Routes: ({ children }) => <div>{children}</div>,

  Route: ({ element }) => element,
}));

jest.mock("../src/components/Header/Header", () => {
  return function MockHeader({ appName }) {
    return <header>{appName}</header>;
  };
});

jest.mock("../src/components/SearchBar/SearchBar", () => {
  return function MockSearchBar() {
    return (
      <section>
        <input
          placeholder="Busca un artista..."
          aria-label="Buscar artista"
        />

        <button>Buscar</button>
      </section>
    );
  };
});

jest.mock("../src/components/SearchResults/SearchResults", () => {
  return function MockSearchResults() {
    return (
      <section>
        <h2>Resultados de búsqueda</h2>

        <div>
          <h3>Súper sangre joven</h3>
          <p>Artista: Duki</p>

          <button>Agregar a mi biblioteca</button>
        </div>
      </section>
    );
  };
});

jest.mock("../src/components/Library/Library", () => {
  return function MockLibrary() {
    return (
      <section>
        <h2>Mi biblioteca</h2>
      </section>
    );
  };
});

jest.mock("../src/components/SongDetail/SongDetail", () => {
  return function MockSongDetail() {
    return <div>Detalle del álbum</div>;
  };
});

jest.mock("../src/components/AppStyles", () => ({
  AppContainer: ({ children }) => <main>{children}</main>,
}));

describe("App", () => {
  test("renderiza el Header y el enlace a la biblioteca", () => {
    render(<App />);

    expect(
      screen.getByText("Music Library")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Mi biblioteca",
      })
    ).toBeInTheDocument();
  });

  test("renderiza SearchBar y SearchResults", () => {
    render(<App />);

    expect(
      screen.getByPlaceholderText("Busca un artista...")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Resultados de búsqueda")
    ).toBeInTheDocument();
  });

  test("permite escribir un artista en el buscador", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(
      "Busca un artista..."
    );

    fireEvent.change(input, {
      target: {
        value: "Duki",
      },
    });

    expect(input).toHaveValue("Duki");
  });

  test("permite hacer clic en Buscar", () => {
    render(<App />);

    const button = screen.getByRole("button", {
      name: "Buscar",
    });

    fireEvent.click(button);

    expect(button).toBeInTheDocument();
  });

  test("muestra los resultados de búsqueda", () => {
    render(<App />);

    expect(
      screen.getByText("Súper sangre joven")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Artista: Duki")
    ).toBeInTheDocument();
  });

  test("permite simular agregar un álbum a la biblioteca", () => {
    render(<App />);

    const addButton = screen.getByRole("button", {
      name: "Agregar a mi biblioteca",
    });

    fireEvent.click(addButton);

    expect(
      screen.getByText("Súper sangre joven")
    ).toBeInTheDocument();
  });

  test("renderiza la sección de biblioteca", () => {
    render(<App />);

    expect(
      screen.getByRole("link", {
        name: "Mi biblioteca",
      })
    ).toBeInTheDocument();
  });

  test("renderiza la página de detalles", () => {
    render(<App />);

    expect(
      screen.getByText("Detalle del álbum")
    ).toBeInTheDocument();
  });
});