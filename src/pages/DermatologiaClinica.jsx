import React from 'react';
import PatologiasPiel from '../components/PatologiasPiel';
import ProblemasCapilares from '../components/ProblemasCapilares';
import CasosExitoAlopecia from '../components/CasosExitoAlopecia'; // <-- Importamos Casos de Éxito Alopecia
import ContactoDoctora from '../components/ContactoDoctora';       // <-- Importamos Contacto Doctora
import Footer from '../components/Footer';

const DermatologiaClinica = () => {
  return (
    <main className="w-full font-principal bg-white flex flex-col min-h-screen">
      
      {/* =========================================
          1. HERO
          ========================================= */}
      <section className="relative w-full">
        <div className="relative w-full h-[90vh] md:h-[90vh] min-h-[750px] md:min-h-[800px] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col items-center justify-between pt-24 pb-12 md:pt-32 md:pb-16">
          
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/derma-clinica.jpg')` }} 
          ></div>

          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

          <div className="relative z-20 flex flex-col items-center text-center mt-10 md:mt-16">
            <span className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-[0.15em] mb-2 drop-shadow-md">
              DERMATOLOGÍA
            </span>
            
            <h1 
              className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.05] tracking-wide drop-shadow-lg flex flex-col"
              style={{ fontFamily: 'Alta, serif' }}
            >
              <span>CLÍNICA Y</span>
              <span>TRICOLOGÍA</span>
            </h1>
          </div>

          <div className="relative z-20 px-6 max-w-[900px] text-center mb-2 md:mb-4">
            <p className="text-white text-lg md:text-xl lg:text-[1.35rem] font-light leading-relaxed drop-shadow-md">
              En dermatología clínica diagnosticamos distintos tipos de<br className="hidden md:block" />
              enfermedades inflamatorias crónicas. Descartamos lesiones<br className="hidden md:block" />
              malignas utilizando la dermatoscopia y biopsia de piel.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          2. PATOLOGÍAS QUE TRATAMOS
          ========================================= */}
      <PatologiasPiel />

      {/* =========================================
          3. PROBLEMAS CAPILARES
          ========================================= */}
      <ProblemasCapilares />

      {/* =========================================
          4. CASOS ÉXITO ALOPECIA (Nuevo)
          ========================================= */}
      <CasosExitoAlopecia />

      {/* =========================================
          5. CONTACTO DOCTORA (Nuevo)
          ========================================= */}
      <ContactoDoctora />

      {/* =========================================
          6. FOOTER
          ========================================= */}
      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default DermatologiaClinica;