import React from "react";
import "./styles.css";

const Song = ({ title, artist, album, duration, onAdd }) => {
  return (
    <div className="song">
      <h3>{title}</h3>

      <p>
        <strong>Artista:</strong> {artist}
      </p>

      <p>
        <strong>Álbum:</strong> {album}
      </p>

      <p>
        <strong>Duración:</strong> {duration}
      </p>

      {onAdd && (
        <button onClick={onAdd}>
          Agregar a mi biblioteca
        </button>
      )}
    </div>
  );
};

export default Song;