import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Library from "../src/components/Library/Library";
import theme from "../src/styles/theme";

const mockDispatch = jest.fn();

const mockSongs = [
  {
    idAlbum: "1",
    strAlbum: "Súper sangre joven",
    strArtist: "Duki",
  },
  {
    idAlbum: "2",
    strAlbum: "Desde el fin del mundo",
    strArtist: "Duki",
  },
];

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: (callback) =>
    callback({
      library: mockSongs,
    }),
}));

jest.mock("../src/redux/slice/librarySlice", () => ({
  removeSong: jest.fn(),
}));

const { removeSong } = require("../src/redux/slice/librarySlice");

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe("Library", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("muestra el título de la biblioteca", () => {
    renderWithTheme(<Library />);

    expect(
      screen.getByRole("heading", {
        name: "Mi biblioteca",
      })
    ).toBeInTheDocument();
  });

  test("muestra correctamente las canciones de la biblioteca", () => {
    renderWithTheme(<Library />);

    expect(
      screen.getByRole("heading", {
        name: "Súper sangre joven",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Desde el fin del mundo",
      })
    ).toBeInTheDocument();

    expect(screen.getAllByText("Duki")).toHaveLength(2);
  });

  test('el botón "Eliminar" ejecuta la función de eliminar', () => {
    renderWithTheme(<Library />);

    const buttons = screen.getAllByRole("button", {
      name: "Eliminar",
    });

    fireEvent.click(buttons[0]);

    expect(removeSong).toHaveBeenCalledWith("1");
    expect(mockDispatch).toHaveBeenCalled();
  });
});
