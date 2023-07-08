import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ContextoGlobal from './context/ContextoGlobal';
import Navbar from './components/Navbar';
import Home from './components/Galeria';
import Favoritos from './views/Favoritos';


function App() {
  const [endpoint, setEndpoint] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = "/fotos.json";
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setEndpoint(data);
        } catch (error) {
            console.error('Error', error);
        }
    };

    fetchData();
}, []);
  return (
    <div className="App">
    <ContextoGlobal.Provider value={{ endpoint, setEndpoint}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </ContextoGlobal.Provider>

    </div>
  );
}

export default App;
