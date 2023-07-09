import React, { useContext } from "react";
import ContextoGlobal from "../context/ContextoGlobal";

export default function Favoritos() {
  const { favoritos } = useContext(ContextoGlobal);

  return (
    <div className="container">
      <h2 className="mt-4">Imágenes favoritas:</h2>
      <div className="row">
        {favoritos.map((imagen) => (
          <div key={imagen.id} className="col-lg-2 col-md-3 col-sm-4 col-6 my-1">
            <img className="img-fluid" src={imagen.src.portrait} alt={imagen.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
