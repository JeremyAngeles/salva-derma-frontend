import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DermatologiaLaser from './pages/DermatologiaLaser';
import Tratamientos from './pages/Tratamientos';
import DermatologiaClinica from './pages/DermatologiaClinica'; 
import DermatologiaEstetica from './pages/DermatologiaEstetica';
import SkinLounge from './pages/SkinLounge'; 
import Nosotros from './pages/Nosotros'; 
import ScrollToTop from './components/ScrollToTop'; // <-- 1. Importamos el componente

function App() {
  return (
    <BrowserRouter>
      {/* <-- 2. Lo colocamos dentro del BrowserRouter para que siempre suba el scroll al cambiar de página --> */}
      <ScrollToTop />
      
      <div className="relative min-h-screen bg-marca-blanco font-principal">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dermatologia/laser" element={<DermatologiaLaser />} />
          <Route path="/dermatologia/clinica" element={<DermatologiaClinica />} />
          <Route path="/dermatologia/estetica" element={<DermatologiaEstetica />} /> 
          <Route path="/skinlounge" element={<SkinLounge />} /> 
          <Route path="/tratamientos" element={<Tratamientos />} /> 
          <Route path="/nosotros" element={<Nosotros />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;