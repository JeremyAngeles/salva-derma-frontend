import React from 'react';
import TiposLaser from '../components/TiposLaser'; 
import TratamientosLaserList from '../components/TratamientosLaserList';
import CasosExito from '../components/CasosExito'; // <-- Importamos Casos de Éxito
import Footer from '../components/Footer';         // <-- Importamos el Footer

const DermatologiaLaser = () => {
  return (
    <main className="w-full font-principal bg-white flex flex-col min-h-screen">
      
      {/* =========================================
          1. HERO (Imagen estática, sin carrusel)
          ========================================= */}
      <section className="relative w-full">
        {/* Contenedor de la Imagen */}
        <div className="relative w-full h-[90vh] md:h-[90vh] min-h-[750px] md:min-h-[800px] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col justify-center items-center">
          
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/derma-laser.png')` }}
          ></div>

          <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

          <div className="relative z-20 text-white px-4 pb-12 md:pb-20 w-full flex flex-col items-center justify-center">
            <div className="flex flex-col w-fit">
              <span className="text-white text-2xl md:text-3xl lg:text-[2.5rem] font-light tracking-wide mb-[-10px] md:mb-[-18px] ml-1.5 md:ml-2 text-left">
                Unidad
              </span>
              
              <h1 
                className="text-white text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] leading-none tracking-widest drop-shadow-md"
                style={{ fontFamily: 'Alta, serif' }}
              >
                DERMOLÁSER
              </h1>
              
              <div className="w-full flex justify-end mt-[-5px] md:mt-[-15px] pr-2 md:pr-4">
                <span className="text-white text-lg md:text-xl lg:text-2xl font-light tracking-wide">
                  Tecnología avanzada
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. TIPOS DE LÁSER 
          ========================================= */}
      <TiposLaser />

      {/* =========================================
          3. LISTA DE TRATAMIENTOS 
          ========================================= */}
      <TratamientosLaserList />

      {/* =========================================
          4. CASOS DE ÉXITO
          ========================================= */}
      <CasosExito />

      {/* =========================================
          5. FOOTER (Obliga a empujarse al fondo si falta espacio)
          ========================================= */}
      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default DermatologiaLaser;