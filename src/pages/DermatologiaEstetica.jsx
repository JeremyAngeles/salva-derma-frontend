import React from 'react';
import Footer from '../components/Footer';
import TratamientosEstetica from '../components/TratamientosEstetica';
import ProcedimientosEstetica from '../components/ProcedimientosEstetica';
import CasosExitoEstetica from '../components/CasosExitoEstetica'; 
import ContactoStaff from '../components/ContactoStaff'; // <-- Importamos el nuevo componente

const DermatologiaEstetica = () => {
  return (
    <main className="w-full font-principal bg-white flex flex-col min-h-screen">
      
      {/* =========================================
          1. HERO (Dermatología Estética)
          ========================================= */}
      <section className="relative w-full">
        <div className="relative w-full h-[90vh] md:h-[90vh] min-h-[750px] md:min-h-[800px] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792531300/01_-_xportada.png')` }} 
          ></div>
          <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
          <div className="relative z-20 flex flex-col items-center text-center px-4 w-full mt-10 md:mt-20">
            <span className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] mb-4 md:mb-6 drop-shadow-md z-10">
              DERMATOLOGÍA
            </span>
            <h1 
              className="text-white text-[5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] leading-none tracking-widest drop-shadow-lg"
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
      <section className="w-full py-16 md:py-24 bg-[#fbfbfb] flex flex-col justify-center items-center px-6">
        <div className="max-w-[1200px] w-full flex flex-col items-center">
          <h2 className="text-[#053d57] text-2xl md:text-3xl lg:text-[2.2rem] font-semibold mb-6 md:mb-8 text-center tracking-wide">
            ¿QUÉ HACEMOS EN DERMATOLOGÍA ESTÉTICA?
          </h2>
          <p className="text-[#88807a] text-center text-xl md:text-2xl lg:text-[1.65rem] font-light leading-relaxed max-w-[1100px]">
            Combina el conocimiento y ciencia de nuestros dermatólogos junto a la<br className="hidden md:block" />
            tecnología y tratamientos avanzados para la mejora de la calidad de piel (líneas de<br className="hidden md:block" />
            expresión, flacidez, ojeras, textura poros y pigmentaciones etc).
          </p>
        </div>
      </section>

      {/* =========================================
          3. TRATAMIENTOS D. ESTÉTICA
          ========================================= */}
      <TratamientosEstetica />

      {/* =========================================
          4. PROCEDIMIENTOS 
          ========================================= */}
      <ProcedimientosEstetica />

      {/* =========================================
          5. CASOS DE ÉXITO ESTÉTICA
          ========================================= */}
      <CasosExitoEstetica />

      {/* =========================================
          6. CONTACTO STAFF (El nuevo componente)
          ========================================= */}
      <ContactoStaff />

      {/* =========================================
          7. FOOTER
          ========================================= */}
      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default DermatologiaEstetica;