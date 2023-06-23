import { useContext } from 'react'
import Context from '../Context';
import Heart from "../components/Heart"; 

export default function Favoritos() {
  
  const { fotos, favoritos } = useContext(Context);
  console.log("fotos favoritos", fotos)
  console.log("favoritos", favoritos)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((foto) =>(
          <div key={foto.id}
            style={{ backgroundImage: `url(${foto.src.portrait})` }}
            className="foto">
              <Heart filled={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
