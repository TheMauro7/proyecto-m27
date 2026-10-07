import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SongDetail from "../src/components/SongDetail/SongDetail";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

jest.mock("../src/hooks/useFetch");

import { useParams } from "react-router-dom";
import useFetch from "../src/hooks/useFetch";

describe("SongDetail", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useParams.mockReturnValue({
      idAlbum: "12345",
    });
  });

  test("muestra el mensaje de carga", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(<SongDetail />);

    expect(
      screen.getByText("Cargando detalles...")
    ).toBeInTheDocument();
  });

  test("muestra el mensaje de error", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: false,
      error: new Error("Error"),
    });

    render(<SongDetail />);

    expect(
      screen.getByText("Error al cargar los detalles.")
    ).toBeInTheDocument();
  });

  test("muestra mensaje cuando no encuentra el álbum", () => {
    useFetch.mockReturnValue({
      data: {
        album: [],
      },
      loading: false,
      error: null,
    });

    render(<SongDetail />);

    expect(
      screen.getByText("No se encontró el álbum.")
    ).toBeInTheDocument();
  });

  test("muestra los detalles completos del álbum", () => {
    useFetch.mockReturnValue({
      data: {
        album: [
          {
            idAlbum: "12345",
            strAlbum: "Súper sangre joven",
            strArtist: "Duki",
            intYearReleased: "2019",
            strAlbumThumb: "https://example.com/album.jpg",
            strGenre: "Hip-Hop",
            strDescriptionEN: "Álbum de Duki",
          },
        ],
      },
      loading: false,
      error: null,
    });

    render(<SongDetail />);

    expect(
      screen.getByRole("heading", {
        name: "Súper sangre joven",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Súper sangre joven",
      })
    ).toBeInTheDocument();

    expect(screen.getByText("Duki")).toBeInTheDocument();
    expect(screen.getByText("2019")).toBeInTheDocument();
    expect(screen.getByText("Hip-Hop")).toBeInTheDocument();
    expect(
      screen.getByText("Álbum de Duki")
    ).toBeInTheDocument();
  });

  test("muestra No disponible cuando no hay año", () => {
    useFetch.mockReturnValue({
      data: {
        album: [
          {
            idAlbum: "12345",
            strAlbum: "Álbum sin año",
            strArtist: "Duki",
            intYearReleased: "",
          },
        ],
      },
      loading: false,
      error: null,
    });

    render(<SongDetail />);

    expect(screen.getByText("No disponible")).toBeInTheDocument();
  });
});
