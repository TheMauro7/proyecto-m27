import React from "react";
import { Link } from "react-router-dom";

import {
    ResultsContainer,
    ResultsTitle,
    AlbumCard,
    AlbumTitle,
    AlbumInfo,
    DetailsLink,
} from "./styles";

const SearchResults = ({ albums }) => {
    console.log("ALBUMS RECIBIDOS:", albums);

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
                </AlbumCard>
            ))}
        </ResultsContainer>
    );
};

export default SearchResults;