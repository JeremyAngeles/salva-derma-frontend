import React from 'react';
import PatologiasPiel from '../components/PatologiasPiel';
import ProblemasCapilares from '../components/ProblemasCapilares';
import CasosExitoAlopecia from '../components/CasosExitoAlopecia';
import ContactoDoctora from '../components/ContactoDoctora';
import Footer from '../components/Footer';

const HERO_IMG_PC =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793083115/jtzlt3mixvivaaq8bnxi.jpg';
const HERO_IMG_MOBILE =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793751618/ihprlqt23wumpgg4ylxf.png';

const DermatologiaClinica = () => {
  return (
    <main className="w-full font-principal bg-white flex flex-col min-h-screen">

      {/* =========================================
          1A. HERO MÓVIL + TABLET (< lg)
          ========================================= */}
      <section className="lg:hidden relative w-full rounded-b-[2.5rem] md:rounded-b-[4rem] overflow-hidden">
        {/* Foto nueva para celular */}
        <img
          src={HERO_IMG_MOBILE}
          alt="Dermatología clínica y tricología"
          className="block w-full h-auto min-h-[680px] sm:min-h-[820px] md:min-h-[900px] object-cover object-[95%_center]"
        />

        {/* Degradado abajo para leer el párrafo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Título: más arriba */}
        <div className="absolute top-[32%] left-0 w-full -translate-y-1/2 z-10 flex justify-center text-white px-4">
          <div className="flex flex-col items-center text-center w-fit">
            <span className="text-white text-[1.15rem] sm:text-[1.9rem] md:text-[2.3rem] font-light tracking-wider mb-1 sm:mb-2 drop-shadow-md">
              DERMATOLOGÍA
            </span>

            <h1
              className="text-white text-[2.9rem] min-[400px]:text-[3.4rem] sm:text-[5rem] md:text-[6.5rem] leading-[0.9] tracking-wide drop-shadow-lg flex flex-col"
              style={{ fontFamily: 'Alta, serif' }}
            >
              <span>CLÍNICA Y</span>
              <span className="-mt-1 sm:-mt-2">TRICOLOGÍA</span>
            </h1>
          </div>
        </div>

        {/* Párrafo: Más abajo (se redujo el pb de 150 a 60, etc.) */}
        <div className="absolute bottom-0 left-0 w-full z-10 flex justify-center px-5 pb-[60px] sm:pb-[90px] md:pb-[120px]">
          <p className="text-white text-[14.5px] min-[400px]:text-[15.5px] sm:text-[21px] md:text-[25px] font-light leading-[1.3] text-center drop-shadow-md max-w-[360px] sm:max-w-[600px] md:max-w-[780px]">
            En dermatología clínica diagnosticamos distintos tipos de
            enfermedades inflamatorias crónicas. Descartamos lesiones
            malignas utilizando la dermatoscopia y biopsia de piel.
          </p>
        </div>
      </section>

      {/* =========================================
          1B. HERO PC (lg en adelante) - SIN CAMBIOS
          ========================================= */}
      <section className="relative w-full hidden lg:block">
        <div className="relative w-full h-[90vh] md:h-[90vh] min-h-[750px] md:min-h-[800px] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col items-center justify-between pt-24 pb-12 md:pt-32 md:pb-16">

          <div
            className="absolute inset-0 bg-cover lg:bg-[length:100%_100%] bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${HERO_IMG_PC}')` }}
          ></div>

          <div className="relative z-20 flex flex-col items-center text-center mt-10 md:mt-16">
            <span className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wider mb-1 md:mb-2 drop-shadow-md">
              DERMATOLOGÍA
            </span>

            <h1
              className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-wide drop-shadow-lg flex flex-col"
              style={{ fontFamily: 'Alta, serif' }}
            >
              <span>CLÍNICA Y</span>
              <span className="-mt-2 md:-mt-3">TRICOLOGÍA</span>
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

      {/* 2. PATOLOGÍAS QUE TRATAMOS */}
      <PatologiasPiel />

      {/* 3. PROBLEMAS CAPILARES */}
      <ProblemasCapilares />

      {/* 4. CASOS ÉXITO ALOPECIA */}
      <CasosExitoAlopecia />

      {/* 5. CONTACTO DOCTORA */}
      <ContactoDoctora />

      {/* 6. FOOTER */}
      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default DermatologiaClinica;