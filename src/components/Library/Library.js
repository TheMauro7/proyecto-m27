import React from "react";
import Song from "../Song/Song";
import {
    LibraryContainer,
    LibraryTitle,
    EmptyMessage,
} from "./styles";

const Library = ({ songs }) => {
    return (
        <LibraryContainer>
            <LibraryTitle>Mi biblioteca</LibraryTitle>

            {songs.length === 0 ? (
                <EmptyMessage>
                    No tienes canciones en tu biblioteca.
                </EmptyMessage>
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
        </LibraryContainer>
    );
};

export default Library;