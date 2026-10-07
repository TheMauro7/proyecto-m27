import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import SearchResults from "../src/components/SearchResults/SearchResults";
import theme from "../src/styles/theme";

const mockDispatch = jest.fn();

const mockAlbums = [
  {
    idAlbum: "1",
    strAlbum: "Súper sangre joven",
    strArtist: "Duki",
    intYearReleased: "2019",
    strAlbumThumb: "https://example.com/duki.jpg",
  },
  {
    idAlbum: "2",
    strAlbum: "Desde el fin del mundo",
    strArtist: "Duki",
    intYearReleased: "2021",
    strAlbumThumb: "https://example.com/duki2.jpg",
  },
];

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: (callback) =>
    callback({
      search: {
        results: mockAlbums,
        loading: false,
        error: null,
      },
    }),
}));

jest.mock("../src/redux/slice/librarySlice", () => ({
  addSong: jest.fn(),
}));

const { addSong } = require("../src/redux/slice/librarySlice");

jest.mock("react-router-dom", () => ({
  Link: ({ children, ...props }) => (
    <a href={props.to} {...props}>
      {children}
    </a>
  ),
}));

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe("SearchResults", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("muestra los resultados de búsqueda", () => {
    renderWithTheme(<SearchResults />);

    expect(
      screen.getByText("Resultados (2 álbumes)")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Súper sangre joven")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Desde el fin del mundo")
    ).toBeInTheDocument();
  });

  test("muestra la información de los álbumes", () => {
    renderWithTheme(<SearchResults />);

    expect(
      screen.getAllByText("Artista: Duki")
    ).toHaveLength(2);

    expect(
      screen.getByText("Año: 2019")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Año: 2021")
    ).toBeInTheDocument();
  });

  test('el botón "Agregar a mi biblioteca" ejecuta la función', () => {
    renderWithTheme(<SearchResults />);

    const buttons = screen.getAllByRole("button", {
      name: "Agregar a mi biblioteca",
    });

    fireEvent.click(buttons[0]);

    expect(addSong).toHaveBeenCalledWith(mockAlbums[0]);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
