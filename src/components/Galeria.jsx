import Heart from "./Heart";
import { useContext } from "react";
import ContextoGlobal from "../context/ContextoGlobal";

export default function Galeria() {
  const { endpoint } = useContext(ContextoGlobal);

  return (
    <div className="container">
      <div className="row">
        {endpoint.map((image, index) => (
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 my-1" key={index}>
            <div className="image-container">
              <img className="img-fluid" src={image.src.portrait} alt={`Image ${index}`} />
              <div className="heart-overlay">
                <Heart filled={image.liked} />
              </div>
              <div className="description-overlay">
                <p>{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
