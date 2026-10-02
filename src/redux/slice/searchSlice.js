import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSongs = createAsyncThunk(
  "search/fetchSongs",
  async (artist, { rejectWithValue }) => {
    try {
      // 1. Buscar el artista
      const artistResponse = await axios.get(
        "https://www.theaudiodb.com/api/v1/json/123/search.php",
        {
          params: {
            s: artist,
          },
        }
      );

      const artists = artistResponse.data.artists;

      if (!artists || artists.length === 0) {
        return rejectWithValue("Artista no encontrado");
      }

      const selectedArtist = artists[0];

      console.log("ARTISTA ENCONTRADO:", selectedArtist);

      // 2. Obtener el ID de TheAudioDB del artista
      const artistId = selectedArtist.idArtist;

      if (!artistId) {
        return rejectWithValue(
          "El artista no tiene ID en TheAudioDB"
        );
      }

      console.log("ID ARTISTA THEAUDIODB:", artistId);

      // 3. Obtener los álbumes del artista
      const albumsResponse = await axios.get(
        "https://www.theaudiodb.com/api/v1/json/123/album.php",
        {
          params: {
            i: artistId,
          },
        }
      );

      console.log(
        "ÁLBUMES DEL ARTISTA:",
        albumsResponse.data
      );

      const albums = albumsResponse.data.album || [];

      if (albums.length === 0) {
        return rejectWithValue(
          "No se encontraron álbumes para este artista"
        );
      }

      // 4. Normalizar los álbumes
      return albums.map((album) => ({
        ...album,

        idAlbum: album.idAlbum,

        strAlbum:
          album.strAlbum ||
          album.strAlbumStripped ||
          "Álbum sin nombre",

        strArtist:
          album.strArtist ||
          selectedArtist.strArtist ||
          artist,

        strAlbumThumb:
          album.strAlbumThumb ||
          album.strAlbumThumbHQ ||
          null,
      }));
    } catch (error) {
      console.error("ERROR THEAUDIODB:", error);

      return rejectWithValue(
        error.response?.data?.message ||
          "Error al buscar álbumes"
      );
    }
  }
);

const initialState = {
  results: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",

  initialState,

  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.results = [];
      })

      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })

      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.results = [];
        state.error =
          action.payload || "Error al buscar álbumes";
      });
  },
});

export const { resetResults } = searchSlice.actions;

export default searchSlice.reducer;
