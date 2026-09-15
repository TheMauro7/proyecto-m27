import React from "react";
import Song from "../Song/Song";
import "./styles.css";

const Library = ({ songs }) => {
  return (
    <section className="library">
      <h2>Mi biblioteca</h2>

      {songs.length === 0 ? (
        <p>No tienes canciones en tu biblioteca.</p>
      ) : (
        songs.map((song) => (
          <Song
            key={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
          />
        ))
      )}
    </section>
  );
};

export default Library;