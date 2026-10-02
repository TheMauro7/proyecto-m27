import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../redux/slice/searchSlice";

import {
  SearchForm,
  SearchInput,
  SearchButton,
  ErrorMessage,
  RetryButton,
} from "./styles";

const SearchBar = () => {
  const [artist, setArtist] = useState("");
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.search);

  const handleSearch = (e) => {
    e.preventDefault();

    if (artist.trim() !== "") {
      dispatch(fetchSongs(artist.trim()));
    }
  };

  const handleRetry = () => {
    if (artist.trim() !== "") {
      dispatch(fetchSongs(artist.trim()));
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Busca un artista..."
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />

        <SearchButton type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Buscar"}
        </SearchButton>
      </SearchForm>

      {error && (
        <ErrorMessage>
          <p>{error}</p>
          <RetryButton type="button" onClick={handleRetry}>
            Reintentar
          </RetryButton>
        </ErrorMessage>
      )}
    </>
  );
};

export default SearchBar;
