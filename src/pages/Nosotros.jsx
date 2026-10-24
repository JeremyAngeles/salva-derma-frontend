import React from 'react';
import Footer from '../components/Footer';
import PerfilesDoctores from '../components/PerfilesDoctores';

const Nosotros = () => {
  return (
    <main className="w-full font-principal bg-[#fcfbf9] flex flex-col min-h-screen">
      
      {/* =========================================
          1. HERO (¿Quiénes Somos?)
          ========================================= */}
      <section className="relative w-full h-[80vh] md:h-[90vh] min-h-[750px] flex flex-col items-center justify-end mb-24 md:mb-32">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-top"
          style={{ backgroundImage: `url('https://res.cloudinary.com/da47iihxz/image/upload/v1792812206/i1smrfdt6ic6z4mtpxaq.jpg')` }} 
        ></div>
        <div className="absolute bottom-[90px] md:bottom-[110px] z-20 text-center px-6 w-full max-w-[850px]">
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
      <section className="w-full bg-[#fcfbf9] pb-24 md:pb-32 px-6">
        <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row justify-center gap-24 md:gap-12 lg:gap-16 -mt-[80px] md:-mt-[100px] relative z-30">
          
          {/* =======================
              TARJETA: MISIÓN (Azul)
              ======================= */}
          <div className="relative w-full md:w-1/2 bg-[#053d57] text-white text-center rounded-[1.5rem] md:rounded-[2rem] pt-[110px] md:pt-[130px] pb-12 px-6 md:px-10 shadow-2xl">
            
            <div className="absolute -top-[50px] md:-top-[70px] left-1/2 transform -translate-x-1/2 w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full border-[16px] md:border-[24px] border-[#fcfbf9] bg-[#053d57] flex items-center justify-center shadow-sm p-4 md:p-6 z-40">
              <img 
                src="/misión.svg" 
                alt="Ícono Misión" 
                className="w-full h-full object-contain"
              />
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

          {/* =======================
              TARJETA: VISIÓN (Rosa)
              ======================= */}
          <div className="relative w-full md:w-1/2 bg-[#c9a79e] text-white text-center rounded-[1.5rem] md:rounded-[2rem] pt-[110px] md:pt-[130px] pb-12 px-6 md:px-10 shadow-2xl mt-24 md:mt-0">
            
            <div className="absolute -top-[50px] md:-top-[70px] left-1/2 transform -translate-x-1/2 w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full border-[16px] md:border-[24px] border-[#fcfbf9] bg-[#c9a79e] flex items-center justify-center shadow-sm p-4 md:p-6 z-40">
              <img 
                src="/visión.svg" 
                alt="Ícono Visión" 
                className="w-full h-full object-contain"
              />
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
          3. PERFILES DE DOCTORES
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