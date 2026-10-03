import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DermatologiaLaser from './pages/DermatologiaLaser';
import DermatologiaClinica from './pages/DermatologiaClinica'; 
import DermatologiaEstetica from './pages/DermatologiaEstetica'; // <-- Importamos la nueva página

function App() {
  return (
    <BrowserRouter>
      {/* Contenedor principal con la fuente dinámica y fondo base */}
      <div className="relative min-h-screen bg-marca-blanco font-principal">
        
        {/* El Navbar estará visible en todas las rutas públicas */}
        <Navbar />

        <Routes>
          {/* Ruta principal (Inicio) */}
          <Route path="/" element={<Home />} />
          
          {/* Rutas de Dermatología */}
          <Route path="/dermatologia/laser" element={<DermatologiaLaser />} />
          <Route path="/dermatologia/clinica" element={<DermatologiaClinica />} />
          <Route path="/dermatologia/estetica" element={<DermatologiaEstetica />} /> {/* <-- Nueva ruta agregada */}
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;