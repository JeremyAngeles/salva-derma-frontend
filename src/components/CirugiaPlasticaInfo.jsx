import React, { useState, useEffect, useRef } from 'react';

const ESTILOS_ANIMACION = `
  :root { --ease-delicado: cubic-bezier(0.25, 1, 0.5, 1); }

  @keyframes cpi-aparecer {
    from { opacity: 0; translate: 0 10px; }
    to   { opacity: 1; translate: 0 0; }
  }

  .cpi-reveal .rv { opacity: 0; }
  .cpi-reveal.is-visible .rv {
    animation: cpi-aparecer 0.95s var(--ease-delicado) both;
    animation-delay: calc(var(--i, 0) * 90ms);
  }

  @media (prefers-reduced-motion: reduce) {
    .cpi-reveal .rv {
      animation: none !important; opacity: 1 !important; translate: none !important;
    }
  }
`;

const useReveal = (threshold = 0.12) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
};

const CirugiaPlasticaInfo = () => {
  const [ref, visible] = useReveal(0.12);

  return (
    <section
      ref={ref}
      className={`cpi-reveal ${visible ? 'is-visible' : ''} w-full bg-[#fcfbf9] pt-8 pb-16 md:pt-12 md:pb-24 font-principal overflow-hidden`}
    >
      <style>{ESTILOS_ANIMACION}</style>

      {/* Contenedor más ancho (1350px) y gap más grande (lg:gap-32) para separar las columnas */}
      <div className="max-w-[1350px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos
            ========================================= */}
        <div className="w-full lg:w-[45%] flex flex-col text-center lg:text-left items-center lg:items-start lg:-translate-x-8 xl:-translate-x-16">
          
          {/* Título con letras juntas (tracking-tighter) y filas bien pegadas (leading-[0.85]) */}
          <h2 
            className="rv text-[1.6rem] min-[400px]:text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.5rem] text-[#053d57] leading-[0.85] tracking-tighter mb-2 md:mb-3"
            style={{ fontFamily: 'Alta, serif', '--i': 0 }}
          >
            <span className="whitespace-nowrap">SI LO PUEDES SOÑAR, LO</span><br />
            <span className="whitespace-nowrap">PUEDES LOGRAR</span>
          </h2>
          
          {/* Párrafo con tipografía Montserrat y 2 filas garantizadas en PC */}
          <p 
            className="rv text-[#88807a] text-[15px] md:text-[16.5px] font-light leading-[1.15] max-w-[500px] lg:max-w-none"
            style={{ fontFamily: "'Montserrat', sans-serif", '--i': 1 }}
          >
            <span className="lg:block lg:whitespace-nowrap">No todos los días vamos a poder salvarle la vida a alguien,</span>
            <span className="lg:hidden"> </span>
            <span className="lg:block lg:whitespace-nowrap">pero cada día tenemos la oportunidad de influir en la vida de alguien.</span>
          </p>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Íconos y separadores
            ========================================= */}
        <div className="w-full lg:w-[50%] flex flex-row items-center justify-between lg:translate-x-8 xl:translate-x-12">
          
          {/* Ítem 1: SEGURIDAD */}
          <div style={{ '--i': 2 }} className="rv flex flex-col items-center flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center">
              <img 
                src="/seguridad.svg" 
                alt="Seguridad" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-[#88807a] text-[11px] md:text-[13px] tracking-widest font-medium uppercase text-center">
              SEGURIDAD
            </span>
          </div>

          {/* Línea Divisoria */}
          <div className="w-px h-16 md:h-24 bg-[#c9a79e] opacity-50"></div>

          {/* Ítem 2: TECNOLOGÍA */}
          <div style={{ '--i': 3 }} className="rv flex flex-col items-center flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center">
              <img 
                src="/tecnologia.svg" 
                alt="Tecnología" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-[#88807a] text-[11px] md:text-[13px] tracking-widest font-medium uppercase text-center mt-2">
              TECNOLOGÍA
            </span>
          </div>

          {/* Línea Divisoria */}
          <div className="w-px h-16 md:h-24 bg-[#c9a79e] opacity-50"></div>

          {/* Ítem 3: ATENCIÓN PERSONALIZADA */}
          <div style={{ '--i': 4 }} className="rv flex flex-col items-center flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center">
              <img 
                src="/atención.svg" 
                alt="Atención Personalizada" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-[#88807a] text-[11px] md:text-[13px] tracking-widest font-medium uppercase text-center max-w-[120px] leading-snug">
              ATENCIÓN<br/>PERSONALIZADA
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CirugiaPlasticaInfo;