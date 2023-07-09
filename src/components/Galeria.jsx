import Heart from "./Heart";
import { useContext, useState } from "react";
import ContextoGlobal from "../context/ContextoGlobal";

export default function Galeria() {
    const {endpoint} = useContext(ContextoGlobal);

    return (
        <div className="container">
            <div className="row">
                {endpoint.map((image) => (
                    <Imagen key={image.id} src={image.src.portrait} alt={image.alt} />
                ))}
            </div>
        </div>
    );
}

function Imagen({ src, alt }) {
    const { setEndpoint, favoritos, setFavoritos } = useContext(ContextoGlobal);
    const [heart, setHeart] = useState(false);
    
    const handleTouchHeart = () => {
        if (!heart) {
            setHeart(true);
            console.log(favoritos)
        } else {
            setHeart(false);
            console.log('ko')
        }
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
