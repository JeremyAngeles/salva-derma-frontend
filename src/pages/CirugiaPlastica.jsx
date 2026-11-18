import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import CirugiaPlasticaInfo from '../components/CirugiaPlasticaInfo';
import ConoceNuestrasCirugias from '../components/ConoceNuestrasCirugias';
import CirugiasDeExito from '../components/CirugiasDeExito';
import CadaPasoCirugia from '../components/CadaPasoCirugia';
import ContactoDoctorCirugia from '../components/ContactoDoctorCirugia';

const ESTILOS_ANIMACION = `
  :root { --ease-delicado: cubic-bezier(0.25, 1, 0.5, 1); }

  @keyframes cp-aparecer {
    from { opacity: 0; translate: 0 10px; }
    to   { opacity: 1; translate: 0 0; }
  }

  .cp-reveal .rv { opacity: 0; }
  .cp-reveal.is-visible .rv {
    animation: cp-aparecer 0.95s var(--ease-delicado) both;
    animation-delay: calc(var(--i, 0) * 90ms);
  }

  @media (prefers-reduced-motion: reduce) {
    .cp-reveal .rv {
      animation: none !important; opacity: 1 !important; translate: none !important;
    }
  }
`;

const CirugiaPlastica = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <main className="w-full bg-[#f4f2ef] font-principal flex flex-col min-h-screen">
      <style>{ESTILOS_ANIMACION}</style>
      
      {/* =========================================
1. HERO CIRUGÍA PLÁSTICA
          ========================================= */}
      <section className={`cp-reveal ${heroVisible ? 'is-visible' : ''} relative w-full`}>
        
        {/* === VISTA CELULAR Y TABLET (< lg) === */}
        <div 
          className="lg:hidden relative w-full aspect-[629/880] min-h-[700px] rounded-b-[3rem] bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-between pt-24 pb-12 px-6 shadow-2xl"
          style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793755071/jwciowcpwrfurkq2omxj.png')" }}
        >
          {/* Título en la parte superior, MÁS ABAJO (mt-32) y MÁS CHICO */}
          <div className="relative z-20 flex flex-col items-center text-center w-full mt-32">
            <h1 
              className="rv text-white text-[3rem] min-[390px]:text-[3.5rem] sm:text-6xl leading-[0.95] tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'Alta, serif', '--i': 0 }}
            >
              CIRUGÍA PLÁSTICA
            </h1>
          </div>

          {/* Párrafo en la parte inferior */}
          <div className="relative z-20 flex flex-col items-center text-center w-full mb-4">
            <p
              style={{ '--i': 1 }}
              className="rv text-white text-[15px] sm:text-[17px] font-light leading-[1.1] drop-shadow-md max-w-[400px]"
            >
              Cirugía plástica estética facial y corporal, con especialidad en láser para
              manejo post quirúrgico de cicatrices, y cirugía reconstructiva de lesiones
              colgajos, injertos, cirugía de retiro de cáncer de piel y manejo de quemaduras
            </p>
          </div>
        </div>

        {/* === VISTA PC (lg:) === */}
        <div 
          className="hidden lg:flex relative w-full h-[90vh] min-h-[800px] rounded-b-[5rem] overflow-hidden flex-col items-center justify-center pt-32 pb-16 shadow-2xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793122629/gfyomltdbyqthfev2j6h.jpg')" }}
        >
          <div className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-[1000px]">
            {/* Título en PC restaurado a su tamaño original */}
            <h1 
              className="rv text-white text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[7rem] leading-[1.05] tracking-wide drop-shadow-lg mb-6"
              style={{ fontFamily: 'Alta, serif', '--i': 0 }}
            >
              CIRUGÍA PLÁSTICA
            </h1>
            
            <div style={{ '--i': 1 }} className="rv max-w-[850px]">
              <p className="text-white text-[15px] md:text-[17px] lg:text-[19px] font-light leading-[1.1] drop-shadow-md">
                Cirugía plástica estética facial y corporal, con especialidad en láser para<br className="hidden md:block" />
                manejo post quirúrgico de cicatrices, y cirugía reconstructiva de lesiones<br className="hidden md:block" />
                colgajos, injertos, cirugía de retiro de cáncer de piel y manejo de quemaduras
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
2. INFORMACIÓN Y VALORES
          ========================================= */}
      <CirugiaPlasticaInfo />

      {/* =========================================
3. CONOCE NUESTRAS CIRUGÍAS
          ========================================= */}
      <ConoceNuestrasCirugias />

      {/* =========================================
4. CIRUGÍAS DE ÉXITO
          ========================================= */}
      <CirugiasDeExito />

      {/* =========================================
5. CADA PASO TE ACERCA MÁS A TU SUEÑO
          ========================================= */}
      <CadaPasoCirugia />

      {/* =========================================
6. CONTACTO DR. HÉCTOR VARGAS
          ========================================= */}
      <ContactoDoctorCirugia />

      {/* =========================================
          FOOTER
          ========================================= */}
      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default CirugiaPlastica;