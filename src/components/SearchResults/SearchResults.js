import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../../redux/slice/librarySlice";
import { Link } from "react-router-dom";

import {
  ResultsContainer,
  ResultsTitle,
  AlbumCard,
  AlbumTitle,
  AlbumInfo,
  ActionButton,
  DetailsLink,
} from "./styles";

const SearchResults = () => {
  const dispatch = useDispatch();

  const { results, loading, error } = useSelector(
    (state) => state.search
  );

  console.log("RESULTADOS:", results);

  if (loading) {
    return <p>Cargando álbumes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <ResultsContainer>
      <ResultsTitle>
        Resultados ({results.length} álbumes)
      </ResultsTitle>

      {results.map((album, index) => (
        <AlbumCard
          key={album.idAlbum || `${album.strAlbum}-${index}`}
        >
          {album.strAlbumThumb && (
            <img
              src={album.strAlbumThumb}
              alt={`Portada de ${album.strAlbum}`}
              width="200"
            />
          )}

          <AlbumTitle>
            {album.strAlbum}
          </AlbumTitle>

          <AlbumInfo>
            Artista: {album.strArtist}
          </AlbumInfo>

          <AlbumInfo>
            Año: {album.intYearReleased || "No disponible"}
          </AlbumInfo>

          <ActionButton
            onClick={() => dispatch(addSong(album))}
          >
            Agregar a mi biblioteca
          </ActionButton>

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