import axios from "axios";
import reducer, {
  fetchSongs,
  resetResults,
} from "../src/redux/slice/searchSlice";

jest.mock("axios");

describe("searchSlice", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("tiene el estado inicial correcto", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({
      results: [],
      loading: false,
      error: null,
    });
  });

  test("maneja resetResults", () => {
    const state = {
      results: [
        {
          idAlbum: "123",
          strAlbum: "Álbum",
        },
      ],
      loading: false,
      error: "Error",
    };

    expect(reducer(state, resetResults())).toEqual({
      results: [],
      loading: false,
      error: null,
    });
  });

  test("maneja fetchSongs.pending", () => {
    const state = reducer(
      undefined,
      fetchSongs.pending("request-id", "Duki")
    );

    expect(state.loading).toBe(true);
    expect(state.results).toEqual([]);
    expect(state.error).toBeNull();
  });

  test("busca artista y devuelve sus álbumes", async () => {
    axios.get
      .mockResolvedValueOnce({
        data: {
          artists: [
            {
              idArtist: "111239",
              strArtist: "Duki",
            },
          ],
        },
      })
      .mockResolvedValueOnce({
        data: {
          album: [
            {
              idAlbum: "123",
              strAlbum: "Súper sangre joven",
              strArtist: "",
              strAlbumThumb: "",
            },
            {
              idAlbum: "456",
              strAlbum: "",
              strAlbumStripped: "Álbum sin nombre",
              strArtist: "",
              strAlbumThumbHQ: "https://example.com/image.jpg",
            },
          ],
        },
      });

    const dispatch = jest.fn();
    const getState = jest.fn();

    const result = await fetchSongs("Duki")(
      dispatch,
      getState,
      undefined
    );

    expect(result.type).toBe("search/fetchSongs/fulfilled");

    expect(result.payload).toHaveLength(2);

    expect(result.payload[0]).toMatchObject({
      idAlbum: "123",
      strAlbum: "Súper sangre joven",
      strArtist: "Duki",
      strAlbumThumb: null,
    });

    expect(result.payload[1]).toMatchObject({
      idAlbum: "456",
      strAlbum: "Álbum sin nombre",
      strArtist: "Duki",
      strAlbumThumb: "https://example.com/image.jpg",
    });

    expect(axios.get).toHaveBeenCalledTimes(2);
  });

  test("rechaza cuando no encuentra al artista", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        artists: [],
      },
    });

    const result = await fetchSongs("Artista inexistente")(
      jest.fn(),
      jest.fn(),
      undefined
    );

    expect(result.type).toBe("search/fetchSongs/rejected");
    expect(result.payload).toBe("Artista no encontrado");
  });

  test("rechaza cuando el artista no tiene ID", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        artists: [
          {
            strArtist: "Artista",
          },
        ],
      },
    });

    const result = await fetchSongs("Artista")(
      jest.fn(),
      jest.fn(),
      undefined
    );

    expect(result.type).toBe("search/fetchSongs/rejected");
    expect(result.payload).toBe(
      "El artista no tiene ID en TheAudioDB"
    );
  });

  test("rechaza cuando no encuentra álbumes", async () => {
    axios.get
      .mockResolvedValueOnce({
        data: {
          artists: [
            {
              idArtist: "123",
              strArtist: "Duki",
            },
          ],
        },
      })
      .mockResolvedValueOnce({
        data: {
          album: [],
        },
      });

    const result = await fetchSongs("Duki")(
      jest.fn(),
      jest.fn(),
      undefined
    );

    expect(result.type).toBe("search/fetchSongs/rejected");
    expect(result.payload).toBe(
      "No se encontraron álbumes para este artista"
    );
  });

  test("maneja errores de axios", async () => {
    axios.get.mockRejectedValueOnce({
      response: {
        data: {
          message: "Error de API",
        },
      },
    });

    const result = await fetchSongs("Duki")(
      jest.fn(),
      jest.fn(),
      undefined
    );

    expect(result.type).toBe("search/fetchSongs/rejected");
    expect(result.payload).toBe("Error de API");
  });

  test("maneja errores sin mensaje de API", async () => {
    axios.get.mockRejectedValueOnce(new Error("Error"));

    const result = await fetchSongs("Duki")(
      jest.fn(),
      jest.fn(),
      undefined
    );

    expect(result.type).toBe("search/fetchSongs/rejected");
    expect(result.payload).toBe("Error al buscar álbumes");
  });

  test("maneja fetchSongs.fulfilled", () => {
    const albums = [
      {
        idAlbum: "123",
        strAlbum: "Súper sangre joven",
      },
    ];

    const state = reducer(
      undefined,
      fetchSongs.fulfilled(albums, "request-id", "Duki")
    );

    expect(state.loading).toBe(false);
    expect(state.results).toEqual(albums);
  });

  test("maneja fetchSongs.rejected", () => {
    const state = reducer(
      undefined,
      fetchSongs.rejected(
        new Error("Error"),
        "request-id",
        "Duki",
        "Error personalizado"
      )
    );

    expect(state.loading).toBe(false);
    expect(state.results).toEqual([]);
    expect(state.error).toBe("Error personalizado");
  });
});
