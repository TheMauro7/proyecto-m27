import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSong } from "../../redux/libraryActions";

import {
    ResultsContainer,
    ResultsTitle,
    AlbumCard,
    AlbumTitle,
    AlbumInfo,
    DetailsLink,
} from "./styles";

const SearchResults = ({ albums }) => {
    const dispatch = useDispatch();

   const handleAddToLibrary = (album) => {
    const song = {
        id: album.idAlbum,
        title: album.strAlbum,
        artist: album.strArtist,
        album: album.strAlbum,
    };

    dispatch(addSong(song));
};

    if (!albums || albums.length === 0) {
        return (
            <ResultsContainer>
                <AlbumInfo>
                    No se encontraron álbumes.
                </AlbumInfo>
            </ResultsContainer>
        );
    }

    return (
        <ResultsContainer>
            <ResultsTitle>
                Resultados de búsqueda
            </ResultsTitle>

            {albums.map((album) => (
                <AlbumCard key={album.idAlbum}>
                    <AlbumTitle>
                        {album.strAlbum}
                    </AlbumTitle>

                    <AlbumInfo>
                        Artista: {album.strArtist}
                    </AlbumInfo>

                    <AlbumInfo>
                        Año:{" "}
                        {album.intYearReleased ||
                            "No disponible"}
                    </AlbumInfo>

                    <DetailsLink
                        as={Link}
                        to={`/song/${album.idAlbum}`}
                    >
                        Ver detalles
                    </DetailsLink>

                    <button
                        onClick={() => handleAddToLibrary(album)}
                    >
                        Agregar a mi biblioteca
                    </button>
                </AlbumCard>
            ))}
        </ResultsContainer>
    );
};

export default SearchResults;