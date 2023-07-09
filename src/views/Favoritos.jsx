import { useContext, useState } from "react";
import ContextoGlobal from "../context/ContextoGlobal";

export default function Favoritos({imagenes}) {
    const { endpoint, favoritos } = useContext(ContextoGlobal);



    return (
        <div>
          <h2>Imágenes favoritas:</h2>
          {favoritos.map((imagen) => (
            <img key={imagen.id} src={imagen.url} alt={imagen.id} />
          ))}
        </div>
      );
    };