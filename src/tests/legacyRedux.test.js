import {
  addSong,
  removeSong,
} from "../src/redux/libraryActions";

import libraryReducer from "../src/redux/libraryReducer";

describe("libraryActions", () => {
  test("crea la acción ADD_SONG", () => {
    const song = {
      id: "123",
      strAlbum: "Súper sangre joven",
      strArtist: "Duki",
    };

    expect(addSong(song)).toEqual({
      type: "ADD_SONG",
      payload: song,
    });
  });

  test("crea la acción REMOVE_SONG", () => {
    expect(removeSong("123")).toEqual({
      type: "REMOVE_SONG",
      payload: "123",
    });
  });
});

describe("libraryReducer", () => {
  const song = {
    id: "123",
    strAlbum: "Súper sangre joven",
    strArtist: "Duki",
  };

  test("regresa el estado inicial", () => {
    expect(
      libraryReducer(undefined, { type: "UNKNOWN" })
    ).toEqual([]);
  });

  test("agrega una canción", () => {
    expect(
      libraryReducer([], addSong(song))
    ).toEqual([song]);
  });

  test("elimina una canción", () => {
    expect(
      libraryReducer([song], removeSong("123"))
    ).toEqual([]);
  });

  test("mantiene las demás canciones", () => {
    const secondSong = {
      id: "456",
      strAlbum: "Otro álbum",
      strArtist: "Duki",
    };

    expect(
      libraryReducer(
        [song, secondSong],
        removeSong("123")
      )
    ).toEqual([secondSong]);
  });
});
