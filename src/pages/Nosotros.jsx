import React from 'react';
import Footer from '../components/Footer';
import PerfilesDoctores from '../components/PerfilesDoctores'; // <-- Importamos el componente

const Nosotros = () => {
  return (
    <main className="w-full font-principal bg-white flex flex-col min-h-screen">
      
      {/* =========================================
          1. HERO (¿Quiénes Somos?)
          ========================================= */}
      <section className="relative w-full h-[80vh] md:h-[90vh] min-h-[750px] flex flex-col items-center justify-end mb-24 md:mb-32">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-top"
          style={{ backgroundImage: `url('/nosotros-bg.jpg')` }} 
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
        <div className="absolute bottom-[140px] md:bottom-[170px] z-20 text-center px-6 w-full max-w-[850px]">
          <h1
            className="text-white text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] leading-none mb-4 md:mb-5 drop-shadow-lg whitespace-nowrap"
            style={{ fontFamily: 'Alta, serif' }}
          >
            ¿QUIÉNES SOMOS?
          </h1>
          <p className="text-white text-[15px] md:text-[17px] lg:text-[19px] font-light leading-relaxed drop-shadow-md mx-auto max-w-[750px]">
            Somos unidad! un centro médico enfocado en el manejo global de<br className="hidden md:block"/>
            la piel con especialidades que trabajan en conjunto para resolver<br className="hidden md:block"/>
            cualquier caso, e incluso hacer más por ti, siempre con empatía y<br className="hidden md:block"/>
            profesionalismo.
          </p>
        </div>
      </section>

      {/* =========================================
          2. TARJETAS DE MISIÓN Y VISIÓN
          ========================================= */}
      <section className="w-full bg-white pb-24 md:pb-32 px-6">
        <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row justify-center gap-24 md:gap-12 lg:gap-16 -mt-[80px] md:-mt-[100px] relative z-30">
          
          <div className="relative w-full md:w-1/2 bg-[#053d57] text-white text-center rounded-[1.5rem] md:rounded-[2rem] pt-[110px] md:pt-[130px] pb-12 px-6 md:px-10 shadow-2xl">
            <div className="absolute -top-[50px] md:-top-[70px] left-1/2 transform -translate-x-1/2 w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full border-[16px] md:border-[24px] border-white bg-[#053d57] flex items-center justify-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-24 md:h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.559-5.467-5.467.559 2.225-2.51-5.072-1.358C2.553 9.697 3.14 7.6 4.966 6.84a10.038 10.038 0 0113.882 13.882c-.76 1.825-2.857 2.413-3.806 1.45z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-4a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </div>
            <h3 className="text-[2.5rem] md:text-[3.2rem] mb-4 tracking-wider" style={{ fontFamily: 'Alta, serif' }}>
              MISIÓN
            </h3>
            <p className="text-[14px] md:text-[15.5px] font-light leading-relaxed opacity-95">
              Guiar y acompañar a cada paciente en su<br className="hidden sm:block"/>
              paso por SALVAR, desde el momento del<br className="hidden sm:block"/>
              diagnóstico hasta el día del alta. Cada<br className="hidden sm:block"/>
              paciente es una historia diferente por escribir.
            </p>
          </div>

          <div className="relative w-full md:w-1/2 bg-[#c9a79e] text-white text-center rounded-[1.5rem] md:rounded-[2rem] pt-[110px] md:pt-[130px] pb-12 px-6 md:px-10 shadow-2xl mt-24 md:mt-0">
            <div className="absolute -top-[50px] md:-top-[70px] left-1/2 transform -translate-x-1/2 w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full border-[16px] md:border-[24px] border-white bg-[#c9a79e] flex items-center justify-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-24 md:h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-[2.5rem] md:text-[3.2rem] mb-4 tracking-wider" style={{ fontFamily: 'Alta, serif' }}>
              VISIÓN
            </h3>
            <p className="text-[14px] md:text-[15.5px] font-light leading-relaxed opacity-95">
              Ser un centro de referencia en el cuidado de<br className="hidden sm:block"/>
              la piel y skin beauty; en búsqueda constante<br className="hidden sm:block"/>
              de los mejores tratamientos y tecnologías<br className="hidden sm:block"/>
              para nuestros pacientes.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          3. PERFILES DE DOCTORES (NUEVO COMPONENTE)
          ========================================= */}
      <PerfilesDoctores />

      {/* =========================================
          FOOTER
          ========================================= */}
      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default Nosotros;