import React from 'react';
import Footer from '../components/Footer';
import CirugiaPlasticaInfo from '../components/CirugiaPlasticaInfo';
import ConoceNuestrasCirugias from '../components/ConoceNuestrasCirugias';
import CirugiasDeExito from '../components/CirugiasDeExito';
import CadaPasoCirugia from '../components/CadaPasoCirugia';
import ContactoDoctorCirugia from '../components/ContactoDoctorCirugia';

const CirugiaPlastica = () => {
  return (
    <main className="w-full bg-[#f4f2ef] font-principal flex flex-col min-h-screen">
      
      {/* =========================================
          1. HERO CIRUGÍA PLÁSTICA - SIN EFECTO NEGRO
          ========================================= */}
      <section className="relative w-full">
        <div className="relative w-full h-[90vh] md:h-[90vh] min-h-[750px] md:min-h-[800px] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16 shadow-2xl">
          
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://res.cloudinary.com/da47iihxz/image/upload/v1793122629/gfyomltdbyqthfev2j6h.jpg')` }}
          ></div>

          {/* Sin capas de color oscuro ni filtros para que la imagen se vea natural al 100% */}

          <div className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-[1000px] mt-10 md:mt-0">
            <h1 
              className="text-white text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[7rem] leading-[1.05] tracking-wide drop-shadow-lg mb-6"
              style={{ fontFamily: 'Alta, serif' }}
            >
              CIRUGÍA PLÁSTICA
            </h1>
            
            <div className="max-w-[850px]">
              {/* Se cambió leading-relaxed por leading-[1.1] para juntar las líneas */}
              <p className="text-white text-[15px] md:text-[17px] lg:text-[19px] font-light leading-[1.1] drop-shadow-md">
                Cirugia plastica estetica facial y corporal, con especialidad en laser para<br className="hidden md:block" />
                manejo post quirúrgico de cicatrices, y cirugía reconstructiva de lesiones<br className="hidden md:block" />
                colgajos, injertos, cirugía de retiro de cáncer de piel y manejo de quemaduras
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          2. INFORMACIÓN Y VALORES
          ========================================= */}
      <CirugiaPlasticaInfo />

      {/* =========================================
          3. CONOCE NUESTRAS CIRUGÍAS
          ========================================= */}
      <ConoceNuestrasCirugias />

      {/* =========================================
          4. CIRUGÍAS DE ÉXITO
          ========================================= */}
      <CirugiasDeExito />

      {/* =========================================
          5. CADA PASO TE ACERCA MÁS A TU SUEÑO
          ========================================= */}
      <CadaPasoCirugia />

      {/* =========================================
          6. CONTACTO DR. HÉCTOR VARGAS
          ========================================= */}
      <ContactoDoctorCirugia />

      {/* =========================================
          FOOTER
          ========================================= */}
      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default CirugiaPlastica;