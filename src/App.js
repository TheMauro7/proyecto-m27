import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import Library from "./components/Library/Library";

import "./app.css";

function App() {
  // Resultados ficticios de búsqueda
  const [searchResults] = useState([{
    id: 1,
    title: "Ameri",
    artist: "Duki",
    album: "Ameri",
    duration: "3:19",
  },
  {
    id: 2,
    title: "Goteo",
    artist: "Duki",
    album: "Super Sangre Joven",
    duration: "3:05",
  },
  {
    id: 3,
    title: "Antes de Perderte",
    artist: "Duki",
    album: "Antes de Ameri",
    duration: "2:46",
  },
  ]);

  // Biblioteca inicialmente vacía
  const [library, setLibrary] = useState([]);

  // Se ejecuta cada vez que library cambia
  useEffect(() => {
    console.log("La biblioteca se ha actualizado:", library);
  }, [library]);

  // Agregar canción a la biblioteca
  const addToLibrary = (song) => {
    setLibrary((currentLibrary) => {
      // Evitar canciones repetidas
      const alreadyExists = currentLibrary.some(
        (item) => item.id === song.id
      );

      if (alreadyExists) {
        return currentLibrary;
      }

      return [...currentLibrary, song];
    });
  };

  return (
    <div className="app">
      <Header appName="Music App" />

      <main>
        <SearchResults
          songs={searchResults}
          onAdd={addToLibrary}
        />

        <Library songs={library} />
      </main>
    </div>
  );
}

export default App;