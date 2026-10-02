import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import SongDetail from "./components/SongDetail/SongDetail";
import Library from "./components/Library/Library";
import { AppContainer } from "./components/AppStyles";

const App = () => {
  return (
    <AppContainer>
      <Header appName="Music Library" />

      <Link to="/library">Mi biblioteca</Link>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <SearchResults />
            </>
          }
        />

        <Route path="/song/:idAlbum" element={<SongDetail />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
