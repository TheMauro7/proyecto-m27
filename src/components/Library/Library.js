import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSong } from "../../redux/slice/librarySlice";

import {
  LibraryContainer,
  LibraryTitle,
  EmptyMessage,
  LibraryCard,
  RemoveButton,
} from "./styles";

const Library = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.library);

  return (
    <LibraryContainer>
      <LibraryTitle>Mi biblioteca</LibraryTitle>

      {songs.length === 0 ? (
        <EmptyMessage>Tu biblioteca está vacía.</EmptyMessage>
      ) : (
        songs.map((song) => (
          <LibraryCard key={song.idAlbum}>
            <h3>{song.strAlbum}</h3>
            <p><strong>Artista:</strong> {song.strArtist}</p>
            <p><strong>Álbum:</strong> {song.strAlbum}</p>
            <RemoveButton onClick={() => dispatch(removeSong(song.idAlbum))}>
              Eliminar
            </RemoveButton>
          </LibraryCard>
        ))
      )}
    </LibraryContainer>
  );
};

export default Library;
