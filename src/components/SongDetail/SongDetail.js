import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
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
        <div>
            <Link to="/">
                ← Regresar
            </Link>

            <h1>{album.strAlbum}</h1>

            <h2>{album.strArtist}</h2>

            <p>
                Año de lanzamiento:{" "}
                {album.intYearReleased || "No disponible"}
            </p>

            {album.strGenre && (
                <p>
                    Género: {album.strGenre}
                </p>
            )}

            {album.strDescriptionEN && (
                <p>
                    {album.strDescriptionEN}
                </p>
            )}

            {album.strAlbumThumb && (
                <img
                    src={album.strAlbumThumb}
                    alt={album.strAlbum}
                />
            )}
        </div>
    );
};

export default SongDetail;