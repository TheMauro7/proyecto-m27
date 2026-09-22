import React, { useState } from "react";
import {
    SongCard,
    SongTitle,
    SongArtist,
    SongButton,
} from "./styles";

const Song = ({ song }) => {
    const [favorite, setFavorite] = useState(false);

    return (
        <SongCard>
            <SongTitle>{song.name}</SongTitle>

            <SongArtist>
                {song.artist}
            </SongArtist>

            <SongButton
                favorite={favorite}
                onClick={() => setFavorite(!favorite)}
            >
                {favorite ? "Quitar favorito" : "Agregar favorito"}
            </SongButton>
        </SongCard>
    );
};

export default Song;