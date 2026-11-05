import React from 'react';
import Footer from '../components/Footer';
import TratamientosEstetica from '../components/TratamientosEstetica';
import ProcedimientosEstetica from '../components/ProcedimientosEstetica';
import CasosExitoEstetica from '../components/CasosExitoEstetica';
import ContactoStaff from '../components/ContactoStaff';

const HERO_IMG_PC =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793087259/zngdkk3fka8qa8kp1wod.jpg';
const HERO_IMG_MOBILE =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793751614/ulpfkkjvpc8l5wkrajq6.png';

const DermatologiaEstetica = () => {
  return (
    <main className="w-full font-principal bg-white flex flex-col min-h-screen">

      {/* =========================================
          1A. HERO MÓVIL + TABLET (< lg)
          ========================================= */}
      <section className="lg:hidden relative w-full h-[680px] sm:h-[820px] md:h-[900px] rounded-b-[2.5rem] md:rounded-b-[4rem] overflow-hidden">
        {/* Fondo exclusivo para móvil y tablet (actualizado) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_IMG_MOBILE}')` }}
        ></div>

        {/* Título: desplazado más abajo (top-[68%]) y con textos más grandes */}
        <div className="absolute top-[68%] sm:top-[65%] left-0 w-full -translate-y-1/2 flex items-center justify-center z-10 text-white px-4">
          <div className="flex flex-col items-center text-center w-fit mt-4 sm:mt-0">
            <span className="text-white text-[1.4rem] min-[400px]:text-[1.6rem] sm:text-[2.2rem] md:text-[2.6rem] font-light tracking-wider mb-1 sm:mb-2 drop-shadow-md">
              DERMATOLOGÍA
            </span>

            <h1
              className="text-white text-[4.5rem] min-[400px]:text-[5.2rem] sm:text-[7.5rem] md:text-[9.8rem] leading-none tracking-normal drop-shadow-lg"
              style={{ fontFamily: 'Alta, serif' }}
            >
              ESTÉTICA
            </h1>
          </div>
        </div>
      </section>

      {/* =========================================
          1B. HERO PC (lg en adelante) - SIN CAMBIOS
          ========================================= */}
      <section className="relative w-full hidden lg:block">
        <div className="relative w-full h-[90vh] md:h-[90vh] min-h-[750px] md:min-h-[800px] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col items-center justify-center">

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_IMG_PC}')` }}
          ></div>

          <div className="relative z-20 flex flex-col items-center text-center px-4 w-full mt-10 md:mt-20">

            <span className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wider mb-2 md:mb-3 drop-shadow-md z-10">
              DERMATOLOGÍA
            </span>

            <h1
              className="text-white text-[5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] leading-none tracking-normal drop-shadow-lg"
              style={{ fontFamily: 'Alta, serif' }}
            >
              ESTÉTICA
            </h1>

          </div>
        </div>
      </section>

      {/* =========================================
          2. TEXTO INTRODUCTORIO
          ========================================= */}
      <section className="w-full py-16 md:py-24 bg-[#fbfbfb] flex flex-col justify-center items-center px-2 min-[375px]:px-4 overflow-x-hidden">
        <div className="max-w-[1200px] w-full flex flex-col items-center">
          
          {/* Título forzado en 1 sola fila con responsive text */}
          <div className="w-full flex justify-center mb-5 md:mb-8 px-2">
            <h2 className="text-[#053d57] text-[3.2vw] min-[400px]:text-[3.5vw] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.2rem] font-semibold text-center tracking-wide whitespace-nowrap">
              ¿QUÉ HACEMOS EN DERMATOLOGÍA ESTÉTICA?
            </h2>
          </div>
          
          {/* Párrafo forzado a exactamente 4 filas como en la referencia */}
          <div className="flex flex-col items-center text-[#88807a] text-[10px] min-[375px]:text-[11px] min-[400px]:text-[12px] sm:text-[16px] md:text-[20px] lg:text-[1.65rem] font-light leading-[1.6] md:leading-[1.5] text-center w-full">
            <span className="whitespace-nowrap">Combina el conocimiento y ciencia de nuestros dermatólogos</span>
            <span className="whitespace-nowrap">junto a la tecnología y tratamientos avanzados para la mejora</span>
            <span className="whitespace-nowrap">de la calidad de piel (líneas de expresión, flacidez, ojeras, textura</span>
            <span className="whitespace-nowrap">poros y pigmentaciones etc).</span>
          </div>

        </div>
      </section>

      {/* 3. TRATAMIENTOS D. ESTÉTICA */}
      <TratamientosEstetica />

      {/* 4. PROCEDIMIENTOS */}
      <ProcedimientosEstetica />

      {/* 5. CASOS DE ÉXITO ESTÉTICA */}
      <CasosExitoEstetica />

      {/* 6. CONTACTO STAFF */}
      <ContactoStaff />

      {/* 7. FOOTER */}
      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default DermatologiaEstetica;