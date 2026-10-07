import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import useFetch from "../src/hooks/useFetch";

jest.mock("axios");

const TestComponent = ({ url }) => {
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      <span data-testid="loading">
        {loading ? "loading" : "loaded"}
      </span>

      <span data-testid="data">
        {data ? JSON.stringify(data) : "no-data"}
      </span>

      <span data-testid="error">
        {error ? "error" : "no-error"}
      </span>
    </div>
  );
};

describe("useFetch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("realiza una petición correctamente", async () => {
    axios.get.mockResolvedValue({
      data: {
        album: [
          {
            idAlbum: "123",
            strAlbum: "Súper sangre joven",
          },
        ],
      },
    });

    render(<TestComponent url="https://example.com/api" />);

    await waitFor(() => {
      expect(screen.getByTestId("loading")).toHaveTextContent("loaded");
    });

    expect(axios.get).toHaveBeenCalledWith(
      "https://example.com/api"
    );

    expect(
      screen.getByTestId("data")
    ).toHaveTextContent("Súper sangre joven");

    expect(
      screen.getByTestId("error")
    ).toHaveTextContent("no-error");
  });

  test("maneja errores de la petición", async () => {
    const error = new Error("Error de conexión");

    axios.get.mockRejectedValue(error);

    render(<TestComponent url="https://example.com/api" />);

    await waitFor(() => {
      expect(screen.getByTestId("loading")).toHaveTextContent(
        "loaded"
      );
    });

    expect(
      screen.getByTestId("error")
    ).toHaveTextContent("error");
  });

  test("no realiza petición cuando no existe URL", () => {
    render(<TestComponent url="" />);

    expect(axios.get).not.toHaveBeenCalled();

    expect(
      screen.getByTestId("loading")
    ).toHaveTextContent("loading");
  });
});
