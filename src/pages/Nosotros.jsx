import React from 'react';
import Footer from '../components/Footer';
import PerfilesDoctores from '../components/PerfilesDoctores';

const HERO_IMG_PC =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793119690/ulzdc8ptvikgxede5sql.jpg';
const HERO_IMG_MOBILE =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793751486/rmdebo0j14cc7hwlgtbi.png';

const Nosotros = () => {
  return (
    <main className="w-full font-principal bg-[#fcfbf9] flex flex-col min-h-screen">

      {/* =========================================
          1A. HERO MÓVIL + TABLET (< lg)
          ========================================= */}
      <section className="lg:hidden relative w-full h-[620px] sm:h-[760px] md:h-[880px] rounded-b-[2.5rem] md:rounded-b-[3.5rem] overflow-hidden">
        {/* Foto: cubre todo el ancho sin deformarse */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMG_MOBILE}')` }}
        ></div>

        {/* Degradado para que el texto se lea bien */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Textos: subidos más arriba */}
        <div className="absolute bottom-0 left-0 w-full z-10 text-center px-6 pb-[130px] sm:pb-[170px] md:pb-[210px]">
          <h1
            className="text-white text-[2.2rem] sm:text-[3.2rem] md:text-[4.5rem] leading-none mb-3 md:mb-5 drop-shadow-lg"
            style={{ fontFamily: 'Alta, serif' }}
          >
            ¿QUIÉNES SOMOS?
          </h1>
          <p className="text-white text-[13px] sm:text-[16px] md:text-[20px] font-light leading-[1.25] drop-shadow-md mx-auto max-w-[340px] sm:max-w-[520px] md:max-w-[680px]">
            Somos un centro médico enfocado en el manejo global de la piel
            con especialidades que trabajan en conjunto para resolver cualquier
            caso, e incluso hacer más por ti, siempre con empatía y profesionalismo.
          </p>
        </div>
      </section>

      {/* =========================================
          1B. HERO PC (lg en adelante) - SIN CAMBIOS
          ========================================= */}
      <div className="w-full overflow-x-auto hidden lg:flex justify-center bg-[#fcfbf9]">
        <section
          className="relative flex flex-col items-center justify-end mb-24 md:mb-32 shrink-0"
          style={{
            width: '1905px',
            height: '950px',
            minWidth: '1840px',
            minHeight: '950px'
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center md:bg-top"
            style={{ backgroundImage: `url('${HERO_IMG_PC}')` }}
          ></div>

          <div className="absolute bottom-[70px] md:bottom-[80px] z-40 text-center px-6 w-full max-w-[850px]">
            <h1
              className="text-white text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] leading-none mb-4 md:mb-5 drop-shadow-lg whitespace-nowrap"
              style={{ fontFamily: 'Alta, serif' }}
            >
              ¿QUIÉNES SOMOS?
            </h1>

            <p className="text-white text-[15px] md:text-[17px] lg:text-[19px] font-light leading-[1.1] drop-shadow-md mx-auto max-w-[750px]">
              Somos un centro médico enfocado en el manejo global de<br className="hidden md:block"/>
              la piel con especialidades que trabajan en conjunto para resolver<br className="hidden md:block"/>
              cualquier caso, e incluso hacer más por ti, siempre con empatía y<br className="hidden md:block"/>
              profesionalismo.
            </p>
          </div>
        </section>
      </div>

      {/* =========================================
          2. TARJETAS DE MISIÓN Y VISIÓN
          ========================================= */}
      <section className="w-full bg-[#fcfbf9] pb-12 lg:pb-32 px-4 sm:px-8 lg:px-6">
        <div className="max-w-[1050px] mx-auto grid grid-cols-2 gap-3 sm:gap-6 lg:flex lg:flex-row lg:justify-center lg:gap-16 -mt-[45px] sm:-mt-[65px] lg:-mt-[100px] relative z-30">

          {/* MISIÓN (Azul) */}
          <div className="relative w-full lg:w-1/2 bg-[#053d57] text-white text-center rounded-[1.5rem] lg:rounded-[2rem] pt-[58px] sm:pt-[85px] lg:pt-[130px] pb-8 sm:pb-10 lg:pb-12 px-3 sm:px-6 lg:px-10 shadow-2xl">

            {/* ✅ overflow-hidden + isolate: recorta el ícono dentro del círculo (quita las esquinas puntiagudas en iPhone/Safari) */}
            <div className="absolute -top-[45px] sm:-top-[65px] lg:-top-[70px] left-1/2 transform -translate-x-1/2 w-[92px] h-[92px] sm:w-[130px] sm:h-[130px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden isolate border-[7px] sm:border-[10px] lg:border-[24px] border-[#fcfbf9] bg-[#053d57] bg-clip-padding flex items-center justify-center shadow-sm p-2 sm:p-3 lg:p-6 z-40">
              <img
                src="/misión.svg"
                alt="Ícono Misión"
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            <h3 className="text-[1.5rem] sm:text-[2.2rem] lg:text-[3.2rem] mb-2 sm:mb-3 lg:mb-4 tracking-wider" style={{ fontFamily: 'Alta, serif' }}>
              MISIÓN
            </h3>
            <p className="text-[11px] sm:text-[14px] lg:text-[15.5px] font-light leading-[1.25] lg:leading-[1.2] opacity-95">
              Guiar y acompañar a cada paciente en su<br className="hidden lg:block"/>
              {' '}paso por SALVAR, desde el momento del<br className="hidden lg:block"/>
              {' '}diagnóstico hasta el día del alta. Cada<br className="hidden lg:block"/>
              {' '}paciente es una historia diferente por escribir.
            </p>
          </div>

          {/* VISIÓN (Rosa) */}
          <div className="relative w-full lg:w-1/2 bg-[#c9a79e] text-white text-center rounded-[1.5rem] lg:rounded-[2rem] pt-[58px] sm:pt-[85px] lg:pt-[130px] pb-8 sm:pb-10 lg:pb-12 px-3 sm:px-6 lg:px-10 shadow-2xl">

            <div className="absolute -top-[45px] sm:-top-[65px] lg:-top-[70px] left-1/2 transform -translate-x-1/2 w-[92px] h-[92px] sm:w-[130px] sm:h-[130px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden isolate border-[7px] sm:border-[10px] lg:border-[24px] border-[#fcfbf9] bg-[#c9a79e] bg-clip-padding flex items-center justify-center shadow-sm p-2 sm:p-3 lg:p-6 z-40">
              <img
                src="/visión.svg"
                alt="Ícono Visión"
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            <h3 className="text-[1.5rem] sm:text-[2.2rem] lg:text-[3.2rem] mb-2 sm:mb-3 lg:mb-4 tracking-wider" style={{ fontFamily: 'Alta, serif' }}>
              VISIÓN
            </h3>
            <p className="text-[11px] sm:text-[14px] lg:text-[15.5px] font-light leading-[1.25] lg:leading-[1.2] opacity-95">
              Ser un centro de referencia en el cuidado de<br className="hidden lg:block"/>
              {' '}la piel y skin beauty; en búsqueda constante<br className="hidden lg:block"/>
              {' '}de los mejores tratamientos y tecnologías<br className="hidden lg:block"/>
              {' '}para nuestros pacientes.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          3. PERFILES DE DOCTORES
          ========================================= */}
      <PerfilesDoctores />

      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default Nosotros;