import reducer, {
  addSong,
  removeSong,
} from "../src/redux/slice/librarySlice";

describe("librarySlice", () => {
  const song = {
    idAlbum: "123",
    strAlbum: "Súper sangre joven",
    strArtist: "Duki",
  };

  test("tiene un estado inicial vacío", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual([]);
  });

  test("agrega una canción a la biblioteca", () => {
    const state = reducer([], addSong(song));

    expect(state).toEqual([song]);
  });

  test("no agrega canciones duplicadas", () => {
    const state = reducer([song], addSong(song));

    expect(state).toEqual([song]);
  });

  test("elimina una canción de la biblioteca", () => {
    const state = reducer([song], removeSong("123"));

    expect(state).toEqual([]);
  });

  test("mantiene las demás canciones al eliminar una", () => {
    const secondSong = {
      idAlbum: "456",
      strAlbum: "Otro álbum",
      strArtist: "Duki",
    };

    const state = reducer(
      [song, secondSong],
      removeSong("123")
    );

    expect(state).toEqual([secondSong]);
  });
});
