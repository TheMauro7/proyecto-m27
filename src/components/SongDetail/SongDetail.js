import React from "react";
import { Link, useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

import {
    DetailContainer,
    BackLink,
    AlbumTitle,
    ArtistName,
    AlbumInfo,
    AlbumDescription,
    AlbumImage,
} from "./styles";

const SongDetail = () => {
    const { id } = useParams();

    const url = `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`;

    const { data, loading, error, refetch } = useFetch(url);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return (
            <div>
                <p>
                    Hubo un problema al cargar los datos.
                    Intenta nuevamente.
                </p>

                <button onClick={refetch}>
                    Reintentar
                </button>
            </div>
        );
    }

    const album = data?.album?.[0];

    if (!album) {
        return <p>No se encontró el álbum.</p>;
    }

    return (
        <DetailContainer>
            <BackLink as={Link} to="/">
                ← Regresar
            </BackLink>

            <AlbumTitle>
                {album.strAlbum}
            </AlbumTitle>

            <ArtistName>
                {album.strArtist}
            </ArtistName>

            <AlbumInfo>
                <strong>Año de lanzamiento:</strong>{" "}
                {album.intYearReleased || "No disponible"}
            </AlbumInfo>

            {album.strGenre && (
                <AlbumInfo>
                    <strong>Género:</strong>{" "}
                    {album.strGenre}
                </AlbumInfo>
            )}

            {album.strDescriptionEN && (
                <AlbumDescription>
                    {album.strDescriptionEN}
                </AlbumDescription>
            )}

            {album.strAlbumThumb && (
                <AlbumImage
                    src={album.strAlbumThumb}
                    alt={album.strAlbum}
                />
            )}
        </DetailContainer>
    );
};

export default SongDetail;