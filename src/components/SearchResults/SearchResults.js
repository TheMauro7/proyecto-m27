import React from "react";
import Song from "../Song/Song";
import "./styles.css";

const SearchResults = ({ songs, onAdd }) => {
  return (
    <section className="search-results">
      <h2>Resultados de búsqueda</h2>

      {songs.map((song) => (
        <Song
          key={song.id}
          title={song.title}
          artist={song.artist}
          album={song.album}
          duration={song.duration}
          onAdd={() => onAdd(song)}
        />
      ))}
    </section>
  );
};

export default SearchResults;