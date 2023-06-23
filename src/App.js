import "./styles.css";

import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Context from './Context'

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const endpoint = "/fotos.json";

  const [fotos, setFotos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => { //cargo el archivo JSON al momento del montaje
    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => {
        setFotos(json.photos)
      })
      .catch((e) => console.log(e))
  }, []);

  const handleFavoritos = (foto) => {
    console.log("handleFavoritos", foto)
    if(favoritos.includes(foto)) {
      // Si la foto ya está en favoritos, la removemos
      setFavoritos(favoritos.filter((f) => f != foto))
    } else {
      // Si la foto no está en favoritos, la agregamos
      setFavoritos([...favoritos, foto]);
    }
    
  }

  const globalState = { fotos, favoritos, handleFavoritos };

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
