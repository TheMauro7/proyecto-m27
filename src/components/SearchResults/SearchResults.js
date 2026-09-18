import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ albums }) => {
    console.log("ALBUMS RECIBIDOS:", albums);

    if (!albums || albums.length === 0) {
        return <p>No se encontraron álbumes.</p>;
    }

    return (
        <div>
            <h2>Resultados de búsqueda</h2>

            {albums.map((album) => (
                <div key={album.idAlbum}>
                    <h3>{album.strAlbum}</h3>

                    <p>
                        Artista: {album.strArtist}
                    </p>

                    <p>
                        Año: {album.intYearReleased || "No disponible"}
                    </p>

                    <Link to={`/song/${album.idAlbum}`}>
                        Ver detalles
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;