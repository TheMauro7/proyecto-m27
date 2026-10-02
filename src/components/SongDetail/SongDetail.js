import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const SongDetail = () => {
  const { idAlbum } = useParams();

  const url = `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${idAlbum}`;

  console.log("ID DEL ÁLBUM:", idAlbum);
  console.log("URL DETALLES:", url);

  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <p>Cargando detalles...</p>;
  }

  if (error) {
    return <p>Error al cargar los detalles.</p>;
  }

  const album = data?.album?.[0];

  if (!album) {
    return <p>No se encontró el álbum.</p>;
  }

  return (
    <div>
      {album.strAlbumThumb && (
        <img
          src={album.strAlbumThumb}
          alt={`Portada de ${album.strAlbum}`}
          width="300"
        />
      )}

      <h2>{album.strAlbum}</h2>

      <p>
        <strong>Artista:</strong> {album.strArtist}
      </p>

      <p>
        <strong>Álbum:</strong> {album.strAlbum}
      </p>

      <p>
        <strong>Año:</strong>{" "}
        {album.intYearReleased || "No disponible"}
      </p>

      {album.strGenre && (
        <p>
          <strong>Género:</strong> {album.strGenre}
        </p>
      )}

      {album.strDescriptionEN && (
        <p>
          <strong>Descripción:</strong>{" "}
          {album.strDescriptionEN}
        </p>
      )}
    </div>
  );
};

export default SongDetail;
