import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

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
          
          {/* Aquí agregaremos las demás rutas después (Nosotros, SkinLounge, etc.) */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;