import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import SearchBar from "../src/components/SearchBar/SearchBar";
import theme from "../src/styles/theme";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: (callback) =>
    callback({
      search: {
        loading: false,
        error: null,
      },
    }),
}));

jest.mock("../src/redux/slice/searchSlice", () => ({
  fetchSongs: jest.fn(),
}));

const { fetchSongs } = require("../src/redux/slice/searchSlice");

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe("SearchBar", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renderiza el campo de búsqueda y el botón", () => {
    renderWithTheme(<SearchBar />);

    expect(
      screen.getByPlaceholderText("Busca un artista...")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Buscar" })
    ).toBeInTheDocument();
  });

  test("permite escribir un artista", () => {
    renderWithTheme(<SearchBar />);

    const input = screen.getByPlaceholderText("Busca un artista...");

    fireEvent.change(input, {
      target: {
        value: "Duki",
      },
    });

    expect(input).toHaveValue("Duki");
  });

  test("la función de búsqueda se ejecuta al hacer clic en Buscar", () => {
    renderWithTheme(<SearchBar />);

    const input = screen.getByPlaceholderText("Busca un artista...");
    const button = screen.getByRole("button", {
      name: "Buscar",
    });

    fireEvent.change(input, {
      target: {
        value: "Duki",
      },
    });

    fireEvent.click(button);

    expect(fetchSongs).toHaveBeenCalledWith("Duki");
    expect(mockDispatch).toHaveBeenCalled();
  });

  test("la función de búsqueda se ejecuta al presionar Enter", () => {
    renderWithTheme(<SearchBar />);

    const input = screen.getByPlaceholderText("Busca un artista...");

    fireEvent.change(input, {
      target: {
        value: "Duki",
      },
    });

    fireEvent.submit(input.closest("form"));

    expect(fetchSongs).toHaveBeenCalledWith("Duki");
    expect(mockDispatch).toHaveBeenCalled();
  });
});
