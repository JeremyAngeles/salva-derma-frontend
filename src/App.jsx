import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DermatologiaLaser from './pages/DermatologiaLaser';
import Tratamientos from './pages/Tratamientos';
import DermatologiaClinica from './pages/DermatologiaClinica'; 
import DermatologiaEstetica from './pages/DermatologiaEstetica';
import SkinLounge from './pages/SkinLounge'; 

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-marca-blanco font-principal">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dermatologia/laser" element={<DermatologiaLaser />} />
          <Route path="/dermatologia/clinica" element={<DermatologiaClinica />} />
          <Route path="/dermatologia/estetica" element={<DermatologiaEstetica />} /> 
          <Route path="/skinlounge" element={<SkinLounge />} /> 
          
          {/* <-- Nueva ruta de Tratamientos Estéticos agregada aquí --> */}
          <Route path="/tratamientos" element={<Tratamientos />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;