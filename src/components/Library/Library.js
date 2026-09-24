import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Song from "../Song/Song";
import { removeSong } from "../../redux/libraryActions";

import {
    LibraryContainer,
    LibraryTitle,
    EmptyMessage,
} from "./styles";

const Library = () => {
    const songs = useSelector((state) => state.library);
    const dispatch = useDispatch();

    const handleRemoveSong = (songId) => {
        dispatch(removeSong(songId));
    };

    return (
        <LibraryContainer>
            <LibraryTitle>Mi biblioteca</LibraryTitle>

            {songs.length === 0 ? (
                <EmptyMessage>
                    No tienes canciones en tu biblioteca.
                </EmptyMessage>
            ) : (
                songs.map((song) => (
                    <div key={song.id}>
                      <Song song={song} />

                        <button
                            onClick={() => handleRemoveSong(song.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                ))
            )}
        </LibraryContainer>
    );
};

export default Library;