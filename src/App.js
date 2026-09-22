import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import SongDetail from "./components/SongDetail/SongDetail";
import { AppContainer } from "./components/AppStyles";

import useFetch from "./hooks/useFetch";

const App = () => {
    const [artist, setArtist] = useState("");

    const url = artist
        ? `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(
              artist
          )}`
        : "";

    const { data, loading, error, refetch } = useFetch(url);

    const handleSearch = (searchTerm) => {
        setArtist(searchTerm);
    };

    const albums = data?.album || [];

    console.log("ARTISTA:", artist);
    console.log("DATA:", data);
    console.log("ALBUMS:", albums);

    return (
        <AppContainer>
            <Header appName="Music Library" />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <SearchBar onSearch={handleSearch} />

                            {loading && <p>Cargando...</p>}

                            {error && (
                                <div>
                                    <p>
                                        Hubo un problema al cargar los datos.
                                        Intenta nuevamente.
                                    </p>

                                    <button onClick={refetch}>
                                        Reintentar
                                    </button>
                                </div>
                            )}

                            {!loading && !error && artist && (
                                <SearchResults albums={albums} />
                            )}
                        </>
                    }
                />

                <Route
                    path="/song/:id"
                    element={<SongDetail />}
                />
            </Routes>
        </AppContainer>
    );
};

export default App;