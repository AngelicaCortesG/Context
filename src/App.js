import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ContextoGlobal from './context/ContextoGlobal';
import Navbar from './components/Navbar';
import Favoritos from './views/Favoritos';
import Home from './views/Home';



function App() {
  const [endpoint, setEndpoint] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const globalState = {endpoint, setEndpoint, favoritos, setFavoritos}
  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = "/fotos.json";
            const response = await fetch(url);
            const data = await response.json();
            const fotos = data.photos
            console.log(data)
            setEndpoint(fotos);
        } catch (error) {
            console.error('Error al cargar las fotos', error);
        }
    };

    fetchData();
}, []);

  return (
    <div className="App">
  
    <ContextoGlobal.Provider value= { globalState }>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </ContextoGlobal.Provider>

      <footer className="footer bg-dark text-white py-3">
        <div className="container text-center">
          <p>&copy; 2023 AngélicaCortés. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
