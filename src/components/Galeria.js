import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext } from "react";
import Context from "../Context";

export default function Home() {

  const { fotos, favoritos, handleFavoritos } = useContext(Context);
  console.log("fotos galeria", fotos)
  return (
    <div className="galeria grid-columns-5 p-3">
      {
        fotos.map((foto) => {
          const isFavorito = favoritos.includes(foto)
          return(
            <div key={foto.id} 
              style={{backgroundImage: `url(${foto.src.portrait})`}}
              className="foto"
              onClick={() => handleFavoritos(foto)}>
             <Heart filled={isFavorito} />
            </div>
          )
        })
      }
    </div>
  );
}
