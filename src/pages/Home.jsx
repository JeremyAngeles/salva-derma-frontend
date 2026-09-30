import Hero from '../components/Hero';
import ServicesSplit from '../components/ServicesSplit';
import StaffMedicos from '../components/StaffMedicos';
import MejorVersion from '../components/MejorVersion';
import CuidamosPiel from '../components/CuidamosPiel';
import SkinLounge from '../components/SkinLounge';
import Ubicacion from '../components/Ubicacion'; // <-- Nuevo import
import Footer from '../components/Footer'; // <-- Nuevo import

const Home = () => {
  return (
    <main>
      <Hero />
      <ServicesSplit />
      <StaffMedicos />
      <MejorVersion />
      <CuidamosPiel />
      <SkinLounge />
      <Ubicacion /> {/* <-- Sección mapa y horarios */}
      <Footer />    {/* <-- Pie de página */}
    </main>
  );
};

export default Home;