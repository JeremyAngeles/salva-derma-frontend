import React, { useState, useEffect, useRef } from 'react';

const CASOS_CIRUGIA = [
  { id: 1, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528788/1.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528845/1-mini.png' },
  { id: 2, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528789/2.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528845/2-mini.png' },
  { id: 3, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528789/3.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528845/3-mini.png' },
  { id: 4, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528789/4.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528844/4-mini.png' }
];

const CASOS_DERMA = [
  { id: 1, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528927/1-derma.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528899/1-mini-derma.png' },
  { id: 2, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528927/2-derma.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528899/2-mini-derma.png' },
  { id: 3, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528928/3-derma.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792529000/3-mini-derma.png' },
  { id: 4, full: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528928/4-derma.png', thumb: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792528898/4-mini-derma.png' }
];

/* ============================================================
   ✨ ANIMACIONES (todo vive en este mismo archivo)
   - 1.1s = duración de la entrada
   - 120ms = retraso entre un elemento y el siguiente
   ============================================================ */
const ESTILOS_ANIMACION = `
  :root { --ease-suave: cubic-bezier(0.22, 1, 0.36, 1); }

  @keyframes serv-subir {
    from { opacity: 0; translate: 0 24px; }
    to   { opacity: 1; translate: 0 0; }
  }
  @keyframes serv-aparecer {
    from { opacity: 0; transform: scale(0.88); }
  }
  @keyframes serv-flotar {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-5px); }
  }

  /* Entran una sola vez al hacer scroll */
  .serv-reveal .rv { opacity: 0; }
  .serv-reveal.is-visible .rv {
    animation: serv-subir 1.1s var(--ease-suave) both;
    animation-delay: calc(var(--i, 0) * 120ms);
  }

  /* Miniatura nueva que aparece al cambiar de caso */
  .thumb-in { animation: serv-aparecer 0.8s var(--ease-suave) backwards; }

  /* Íconos con flotación casi imperceptible */
  .flotar { animation: serv-flotar 7s ease-in-out infinite; }

  @media (prefers-reduced-motion: reduce) {
    .serv-reveal .rv, .thumb-in, .flotar {
      animation: none !important; opacity: 1 !important; translate: none !important; transform: none !important;
    }
  }
`;

/* Marca la sección como visible la primera vez que entra en pantalla */
const useReveal = (threshold = 0.15) => {
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

const SUAVE = 'duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]';

const ServicesSplit = () => {
  const [activeCirugia, setActiveCirugia] = useState(1);
  const [activeDerma, setActiveDerma] = useState(1);
  const [ref, visible] = useReveal(0.15);

  const thumbsCirugia = CASOS_CIRUGIA.filter((caso) => caso.id !== activeCirugia);
  const thumbsDerma = CASOS_DERMA.filter((caso) => caso.id !== activeDerma);

  return (
    <section
      ref={ref}
      className={`serv-reveal ${visible ? 'is-visible' : ''} w-full flex flex-col lg:flex-row mt-24 md:mt-32 font-principal`}
    >
      <style>{ESTILOS_ANIMACION}</style>

      <div
        className="relative flex-1 px-4 md:px-6 lg:px-10 pb-4 md:pb-6 pt-0 flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1792797966/ymccrdcmzsfryyqlbzjw.png')" }}
      >
        <div className="relative z-10 w-full max-w-[600px] mx-auto flex flex-row gap-4 md:gap-6 lg:gap-8 items-stretch justify-center">

          <div className="flex flex-col justify-between w-[90px] md:w-[130px] shrink-0">
            <div
              style={{ '--i': 3 }}
              className="rv w-[80px] h-[80px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] -mt-[40px] md:-mt-[55px] lg:-mt-[65px] z-20 flex items-center justify-center drop-shadow-lg self-center"
            >
              <img
                src="/cirugia-icono.svg"
                alt="Ícono Cirugía Plástica"
                draggable={false}
                className="flotar w-full h-full object-contain select-none"
              />
            </div>

            <div
              style={{ '--i': 2 }}
              className="rv w-full bg-white/20 p-2 md:p-3 rounded-[1rem] md:rounded-[1.5rem] flex flex-col gap-2 md:gap-3 backdrop-blur-md shadow-lg border border-white/10"
            >
              {thumbsCirugia.map((thumb) => (
                <button
                  type="button"
                  key={thumb.id}
                  onClick={() => setActiveCirugia(thumb.id)}
                  className="thumb-in w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden cursor-pointer border-2 border-transparent hover:border-white transition-all duration-500 ease-out hover:scale-[1.04] active:scale-95 shadow-sm focus:outline-none"
                >
                  <img
                    src={thumb.thumb}
                    alt={`Miniatura ${thumb.id}`}
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none select-none"
                  />
                </button>
              ))}
            </div>
          </div>

          <div
            style={{ '--i': 0 }}
            className="rv flex-1 flex flex-col bg-white/20 p-2 md:p-3 rounded-[1.2rem] md:rounded-[1.8rem] backdrop-blur-md shadow-lg border border-white/10 -mt-6 md:-mt-10 z-10"
          >
            <div className="rounded-[1rem] md:rounded-[1.2rem] overflow-hidden w-full h-full relative bg-black/40 aspect-[3/4.8]">
              {CASOS_CIRUGIA.map((caso) => (
                <img
                  key={caso.id}
                  src={caso.full}
                  alt={`Cirugía Caso ${caso.id}`}
                  draggable={false}
                  className={`absolute inset-0 w-full h-full object-cover select-none transition-all ${SUAVE} ${
                    caso.id === activeCirugia
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        <h2
          style={{ fontFamily: 'Alta, serif', '--i': 4 }}
          className="rv relative z-10 text-white text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] tracking-tight text-center mt-1 md:mt-2 drop-shadow-md"
        >
          CIRUGÍA PLÁSTICA
        </h2>
      </div>

      <div
        className="relative flex-1 px-4 md:px-6 lg:px-10 pb-4 md:pb-6 pt-0 flex flex-col items-center mt-16 lg:mt-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1792797965/kry2jr97ugxxj7o1tie1.png')" }}
      >
        <div className="relative z-10 w-full max-w-[600px] mx-auto flex flex-row gap-4 md:gap-6 lg:gap-8 items-stretch justify-center">

          <div
            style={{ '--i': 2 }}
            className="rv flex-1 flex flex-col bg-white/20 p-2 md:p-3 rounded-[1.2rem] md:rounded-[1.8rem] backdrop-blur-md shadow-lg border border-white/10 -mt-6 md:-mt-10 z-10"
          >
            <div className="rounded-[1rem] md:rounded-[1.2rem] overflow-hidden w-full h-full relative bg-black/40 aspect-[3/4.8]">
              {CASOS_DERMA.map((caso) => (
                <img
                  key={caso.id}
                  src={caso.full}
                  alt={`Dermatología Caso ${caso.id}`}
                  draggable={false}
                  className={`absolute inset-0 w-full h-full object-cover select-none transition-all ${SUAVE} ${
                    caso.id === activeDerma
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between w-[90px] md:w-[130px] shrink-0">
            <div
              style={{ '--i': 5 }}
              className="rv w-[80px] h-[80px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] -mt-[40px] md:-mt-[55px] lg:-mt-[65px] z-20 flex items-center justify-center drop-shadow-lg self-center"
            >
              <img
                src="/derma-icono.svg"
                alt="Ícono Dermatología"
                draggable={false}
                className="flotar w-full h-full object-contain select-none"
                style={{ animationDelay: '-3s' }}
              />
            </div>

            <div
              style={{ '--i': 4 }}
              className="rv w-full bg-white/20 p-2 md:p-3 rounded-[1rem] md:rounded-[1.5rem] flex flex-col gap-2 md:gap-3 backdrop-blur-md shadow-lg border border-white/10"
            >
              {thumbsDerma.map((thumb) => (
                <button
                  type="button"
                  key={thumb.id}
                  onClick={() => setActiveDerma(thumb.id)}
                  className="thumb-in w-full aspect-square bg-gray-300 rounded-[0.6rem] md:rounded-[0.8rem] overflow-hidden cursor-pointer border-2 border-transparent hover:border-white transition-all duration-500 ease-out hover:scale-[1.04] active:scale-95 shadow-sm focus:outline-none"
                >
                  <img
                    src={thumb.thumb}
                    alt={`Miniatura ${thumb.id}`}
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none select-none"
                  />
                </button>
              ))}
            </div>
          </div>

        </div>

        <h2
          style={{ fontFamily: 'Alta, serif', '--i': 6 }}
          className="rv relative z-10 text-white text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] tracking-tight text-center mt-1 md:mt-2 drop-shadow-md"
        >
          DERMATOLOGÍA
        </h2>
      </div>

    </section>
  );
};

export default ServicesSplit;