import React from 'react';
import TiposLaser from '../components/TiposLaser'; 
import TratamientosLaserList from '../components/TratamientosLaserList';
import CasosExito from '../components/CasosExito';
import Footer from '../components/Footer';

const HERO_IMG_PC =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793068053/eouss5sgj6ksujh6cfoc.jpg';
const HERO_IMG_MOBILE =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793751609/miehpg4zfflinicphh28.png';

const DermatologiaLaser = () => {
  return (
    <main className="w-full font-principal bg-white flex flex-col min-h-screen">

            {/* =========================================
          1A. HERO MÓVIL + TABLET (< lg)
          ========================================= */}
      <section className="lg:hidden relative w-full rounded-b-[2.5rem] md:rounded-b-[4rem] overflow-hidden">
        {/* La imagen se ve entera y sin deformarse */}
        <img
          src={HERO_IMG_MOBILE}
          alt="Unidad Dermoláser"
          className="block w-full h-auto min-h-[680px] sm:min-h-[820px] md:min-h-[900px] object-cover object-center"
        />

        {/* Oscurecido + degradado abajo para leer el párrafo */}
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Título: al centro de la foto */}
        <div className="absolute top-[44%] left-0 w-full -translate-y-1/2 z-10 flex justify-center text-white px-4">
          <div className="flex flex-col w-fit">
            <span className="text-white text-[1.3rem] sm:text-[1.9rem] md:text-[2.3rem] font-light tracking-wide mb-[-6px] sm:mb-[-10px] md:mb-[-14px] ml-1 text-left">
              Unidad
            </span>

            <h1
              className="text-white text-[2.9rem] min-[400px]:text-[3.4rem] sm:text-[5rem] md:text-[6.5rem] leading-none tracking-normal drop-shadow-md"
              style={{ fontFamily: 'Alta, serif' }}
            >
              DERMOLÁSER
            </h1>

            <div className="w-full flex justify-end mt-[-3px] sm:mt-[-8px] pr-1">
              <span className="text-white text-[0.95rem] sm:text-xl md:text-2xl font-light tracking-wide">
                Tecnología avanzada
              </span>
            </div>
          </div>
        </div>

        {/* Párrafo: abajo, separado del título */}
        <div className="absolute bottom-0 left-0 w-full z-10 flex justify-center px-6 pb-[40px] sm:pb-[60px] md:pb-[80px]">
          <p className="text-white text-[12.5px] sm:text-[17px] md:text-[20px] font-light leading-[1.3] text-center drop-shadow-md max-w-[330px] sm:max-w-[520px] md:max-w-[680px]">
            Nuestra unidad Dermoláser utiliza la mejor tecnología en dermatología láser.
            Está a cargo de nuestro staff de dermatólogas y especialistas en láser,
            brindamos protocolos personalizados según cada necesidad.
          </p>
        </div>
      </section>

      {/* =========================================
          1B. HERO PC (lg en adelante) - SIN CAMBIOS
          ========================================= */}
      <section className="relative w-full hidden lg:block">
        <div className="relative w-full h-[90vh] md:h-[90vh] min-h-[750px] md:min-h-[800px] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden flex flex-col justify-center items-center">

          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_IMG_PC}')` }}
          ></div>

          <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

          <div className="relative z-20 text-white px-4 pb-12 md:pb-20 w-full flex flex-col items-center justify-center">
            <div className="flex flex-col w-fit">
              <span className="text-white text-2xl md:text-3xl lg:text-[2.5rem] font-light tracking-wide mb-[-10px] md:mb-[-18px] ml-1.5 md:ml-2 text-left">
                Unidad
              </span>

              <h1
                className="text-white text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] leading-none tracking-normal drop-shadow-md"
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

      {/* 2. TIPOS DE LÁSER */}
      <TiposLaser />

      {/* 3. LISTA DE TRATAMIENTOS */}
      <TratamientosLaserList />

      {/* 4. CASOS DE ÉXITO */}
      <CasosExito />

      {/* 5. FOOTER */}
      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default DermatologiaLaser;