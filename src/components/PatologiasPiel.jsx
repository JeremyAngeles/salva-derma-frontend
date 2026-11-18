import React, { useState, useEffect, useRef } from 'react';

const patologias = [
  'Psoriasis',
  'Dermatitis atópica o de otro tipo',
  'Dermatitis seborreica',
  'Cáncer de piel',
  'Tiñas',
  'Biopsia de piel para diagnóstico de cáncer de piel',
  'Otras condiciones dermatológicas',
];

const BG_DESKTOP =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793083400/cyqfycnv6uyynrgx7o41.jpg';
const BG_MOVIL =
  'https://res.cloudinary.com/cgfzvuli/image/upload/v1794003423/Dise%C3%B1o_sin_t%C3%ADtulo_33.png';

const ESTILOS_ANIMACION = `
  :root { --ease-delicado: cubic-bezier(0.25, 1, 0.5, 1); }

  @keyframes pp-aparecer {
    from { opacity: 0; translate: 0 10px; }
    to   { opacity: 1; translate: 0 0; }
  }

  .pp-reveal .rv { opacity: 0; }
  .pp-reveal.is-visible .rv {
    animation: pp-aparecer 0.95s var(--ease-delicado) both;
    animation-delay: calc(var(--i, 0) * 90ms);
  }

  @media (prefers-reduced-motion: reduce) {
    .pp-reveal .rv {
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

const PatologiasPiel = () => {
  const [ref, visible] = useReveal(0.12);

  return (
    <section
      ref={ref}
      className={`pp-reveal ${visible ? 'is-visible' : ''} relative w-full aspect-[674/767] lg:aspect-auto lg:min-h-[100vh] flex flex-col lg:justify-center bg-[#f7f7f5] font-principal overflow-hidden`}
    >
      <style>{ESTILOS_ANIMACION}</style>

      {/* Fondo celular y tablet */}
      <div
        className="lg:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BG_MOVIL}')` }}
      ></div>

      {/* Fondo escritorio */}
      <div
        className="hidden lg:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BG_DESKTOP}')` }}
      ></div>

      <div className="relative z-10 w-full flex flex-col pt-[3.5vw] lg:pt-24 lg:pb-24">
        {/* Título CELULAR / TABLET: centrado arriba, filas juntas con leading-[0.85] */}
        <h2
          className="rv lg:hidden text-center text-[8.3vw] leading-[0.85] text-[#053d57] uppercase mb-[14.1vw]"
          style={{ fontFamily: 'Alta, serif', '--i': 0 }}
        >
          PATOLOGÍAS
          <br />
          QUE TRATAMOS
        </h2>

        {/* Bloque de contenido: mitad derecha en celular/tablet */}
        <div className="ml-[57%] w-[41%] lg:ml-[45%] lg:w-[50%] flex flex-col items-start">
          {/* Título ESCRITORIO: filas juntas con leading-[0.85] */}
          <h2
            className="rv hidden lg:block lg:text-[5.2rem] leading-[0.85] text-[#053d57] lg:mb-16 uppercase"
            style={{ fontFamily: 'Alta, serif', '--i': 0 }}
          >
            PATOLOGÍAS
            <br />
            QUE TRATAMOS
          </h2>

          {/* Icono: sin fondo ni contorno */}
          <img
            src="/enfermedades-de-la-piel.svg"
            alt="Icono Enfermedades de la piel"
            style={{ '--i': 1 }}
            className="rv w-[11vw] h-[11vw] lg:w-[5.5rem] lg:h-[5.5rem] object-contain mb-[3.5vw] lg:mb-14"
          />

          {/* Subtítulo + lista: desplazados a la derecha en celular/tablet */}
          <div className="ml-[3vw] w-[calc(100%-2vw)] lg:ml-0 lg:w-full">
            {/* Subtítulo */}
            <h3
              className="rv text-[#c59e93] text-[5vw] leading-[1.2] lg:text-[3.2rem] font-light tracking-[0.02em] uppercase mb-[3.5vw] lg:mb-8"
              style={{ fontFamily: 'Alta, serif', '--i': 2 }}
            >
              ENFERMEDADES DE LA PIEL
            </h3>

            {/* Lista */}
            <ul className="flex flex-col gap-0 lg:gap-3">
              {patologias.map((item, index) => (
                <li
                  key={index}
                  style={{ '--i': index + 3 }}
                  className="rv flex items-start text-[#7d7570] text-[2.75vw] leading-[1.15] lg:text-[1.05rem] lg:leading-relaxed font-medium"
                >
                  <span className="mr-[0.8vw] lg:mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatologiasPiel;