import Heart from "./Heart";
import { useContext, useState } from "react";
import ContextoGlobal from "../context/ContextoGlobal";



export default function Galeria() {
  const { endpoint, favoritos, setFavoritos } = useContext(ContextoGlobal);
  const agregarFavorito = (imagen) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, imagen]);
  };

 const eliminarFavorito = (imagenId) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((imagen) => imagen.id !== imagenId));
  };

  const handleToggleFavorito = (imagenId) => {
    const imagen = endpoint.find((imagen) => imagen.id === imagenId);
    if (imagen) {
      if (favoritos.some((fav) => fav.id === imagenId)) {
        eliminarFavorito(imagenId);
        console.log('ko')
      } else {
        agregarFavorito(imagen);
        console.log('ok')
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        {endpoint.map((imagen) => (
          <Imagen
            key={imagen.id}
            src={imagen.src.portrait}
            alt={imagen.alt}
            isFavorito={favoritos.some((fav) => fav.id === imagen.id)}
            onToggleFavorito={() => handleToggleFavorito(imagen.id)}
          />
        ))}
      </div>
    </div>
  );
}

function Imagen({ src, alt, isFavorito, onToggleFavorito }) {
  const [heart, setHeart] = useState(isFavorito);

  const handleTouchHeart = () => {
    setHeart(!heart);
    onToggleFavorito();
  };

  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 my-1">
      <div className="image-container">
        <img
          onClick={handleTouchHeart}
          className="img-fluid"
          src={src}
          alt={alt}
        />
        <div className="heart-overlay">
          <Heart filled={heart} />
        </div>
        <div className="description-overlay">
          <p>{alt}</p>
        </div>
      </div>
    </div>
  );
}
