import React from 'react';
import Footer from '../components/Footer';
import TratamientosSkinLounge from '../components/TratamientosSkinLounge';
import SalvarHydrolips from '../components/SalvarHydrolips';
import EspacioSkinLounge from '../components/EspacioSkinLounge';
import MasAllaSkinLounge from '../components/MasAllaSkinLounge'; // <-- Importamos el nuevo cierre

const SkinLounge = () => {
  return (
    <main className="w-full font-principal bg-[#faf9f8] flex flex-col min-h-screen">
      
      {/* =========================================
          1. HERO (Skin Lounge)
          ========================================= */}
      <section className="relative w-full mb-32 md:mb-48 lg:mb-64">
        
        <div className="absolute top-0 left-0 w-full h-[95vh] min-h-[850px] md:min-h-[900px] rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden z-0 shadow-sm">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/skinlounge-bg.jpg')` }} 
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none"></div>
        </div>

        <div className="relative z-10 w-full h-[95vh] min-h-[850px] md:min-h-[900px] flex flex-col justify-between pt-28 pb-12 md:pb-20 px-6 lg:px-16">
          <div className="flex flex-col items-center text-center w-full mt-4 md:mt-8">
            <h1 
              className="text-white text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] leading-[1.05] drop-shadow-lg flex flex-col items-center"
              style={{ fontFamily: 'Alta, serif' }}
            >
              <span>FACIAL</span>
              <span>SKIN LOUNGE</span>
            </h1>
            
            <div className="flex items-center gap-3 md:gap-5 mt-4 md:mt-6 text-white text-[15px] md:text-[20px] lg:text-[22px] font-light tracking-[0.2em] md:tracking-[0.3em] uppercase drop-shadow-md">
              <span>GLOW UP</span>
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white"></span>
              <span>PURE BALANCE</span>
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white"></span>
              <span>ELITE</span>
            </div>
          </div>

          <div className="w-full max-w-[1250px] mx-auto flex items-end relative">
            <div className="w-full md:w-[60%] lg:w-[50%] text-left pr-4">
              <p className="text-white/95 text-[15px] md:text-[16px] lg:text-[17px] font-light leading-relaxed drop-shadow-md">
                Experiencias Skin Lounge by Salvar son<br />
                faciales premium dermatológicos creados por<br />
                especialistas en dermatología y cirugía<br />
                plástica, se enfocan en tu bienestar y la de tu<br />
                piel con momentos de relajación y calma.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-120px] md:bottom-[-160px] lg:bottom-[-250px] right-6 md:right-16 lg:right-[10%] xl:right-[15%] z-30 w-[260px] md:w-[320px] lg:w-[380px] h-[450px] md:h-[580px] lg:h-[650px] rounded-[2rem] border-[4px] md:border-[6px] border-white/40 shadow-2xl overflow-hidden group cursor-pointer">
          <img 
            src="/skinlounge-video.jpg" 
            alt="Procedimiento Skin Lounge" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#222]' }}
          />
          <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full border-[1.5px] border-white bg-black/20 backdrop-blur-sm flex items-center justify-center transition-colors group-hover:bg-white/40 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </section>

      {/* =========================================
          2. TRATAMIENTOS SKIN LOUNGE
          ========================================= */}
      <TratamientosSkinLounge />

      {/* =========================================
          3. BANNER SALVAR HYDROLIPS
          ========================================= */}
      <SalvarHydrolips />

      {/* =========================================
          4. EL ESPACIO PARA TI Y TU PIEL
          ========================================= */}
      <EspacioSkinLounge />

      {/* =========================================
          5. MÁS ALLÁ DE UN FACIAL (Nuevo Componente)
          ========================================= */}
      <MasAllaSkinLounge />

      {/* =========================================
          6. FOOTER
          ========================================= */}
      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default SkinLounge;