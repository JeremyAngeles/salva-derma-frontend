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
          1. HERO CIRUGÍA PLÁSTICA
          ========================================= */}
      <section className="relative w-full">
        <div className="relative w-full h-[90vh] md:h-[90vh] min-h-[750px] md:min-h-[800px] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16 shadow-2xl">
          
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792615585/Gemini_Generated_Image_sqs2lsqs2lsqs2ls.jpg')` }}
          ></div>

          <div className="absolute inset-0 bg-[#053d57]/50 z-10 pointer-events-none mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

          <div className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-[1000px] mt-10 md:mt-0">
            <h1 
              className="text-white text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[7rem] leading-[1.05] tracking-wide drop-shadow-lg mb-6"
              style={{ fontFamily: 'Alta, serif' }}
            >
              CIRUGÍA PLÁSTICA
            </h1>
            
            <div className="max-w-[850px]">
              <p className="text-white text-[15px] md:text-[17px] lg:text-[19px] font-light leading-relaxed drop-shadow-md">
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