import React, { useState, useEffect, useRef } from 'react';

/* ============================================================
   🎛️ ANIMACIÓN DEL CELULAR
- VELOCIDAD_MS: cuánto dura el movimiento al hacer click.
     Más grande = más lento y suave (ej: 900). Más pequeño = más rápido (ej: 500).
   ============================================================ */
const VELOCIDAD_MS = 800;
const CURVA = 'cubic-bezier(0.22, 1, 0.36, 1)'; // salida suave, sin golpe

/* Medidas en vw (las mismas del diseño original) */
const CENTRO = { w: 41.5, h: 59, r: 5 };
const LADO = { w: 25.6, h: 28, r: 4 };
const GAP = 2.4;
const ANCHO_TOTAL = LADO.w + GAP + CENTRO.w + GAP + LADO.w; // 97.5vw
const INICIO = (100 - ANCHO_TOTAL) / 2;

// Posición de cada "slot": 0 = izquierda, 1 = centro, 2 = derecha
const SLOTS = [
  { left: INICIO, top: (CENTRO.h - LADO.h) / 2, ...LADO },
  { left: INICIO + LADO.w + GAP, top: 0, ...CENTRO },
  { left: INICIO + LADO.w + GAP + CENTRO.w + GAP, top: (CENTRO.h - LADO.h) / 2, ...LADO },
];

const ESTILOS_ANIMACION = `
  :root { --ease-delicado: cubic-bezier(0.25, 1, 0.5, 1); }

  @keyframes esl-aparecer {
    from { opacity: 0; translate: 0 10px; }
    to   { opacity: 1; translate: 0 0; }
  }

  .esl-reveal .rv { opacity: 0; }
  .esl-reveal.is-visible .rv {
    animation: esl-aparecer 0.95s var(--ease-delicado) both;
    animation-delay: calc(var(--i, 0) * 90ms);
  }

  @media (prefers-reduced-motion: reduce) {
    .esl-reveal .rv {
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

const EspacioSkinLounge = () => {
  const [ref, visible] = useReveal(0.12);
  // orden[slot] = índice del item que está en ese slot (0 = izquierda, 1 = centro, 2 = derecha)
  const [orden, setOrden] = useState([0, 1, 2]);

  const listaCaracteristicas = [
    {
      id: 1,
      texto: "EXPERIENCIA DE LIMPIEZAS\nDERMATOLOGICAS PREMIUM",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792692168/FACIAL.png"
    },
    {
      id: 2,
      texto: "AROMATERAPIA / MASAJES",
      img: "https://res.cloudinary.com/da47iihxz/image/upload/v1793140851/pqkltndyvcdajnhaiaxv.png"
    },
    {
      id: 3,
      texto: "CATERING ESPECIAL",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792693585/CATERING.png"
    }
  ];

  // Al tocar un card lateral, intercambia lugar con el del centro
  const manejarClickCard = (slotClickeado) => {
    if (slotClickeado === 1) return;
    const nuevoOrden = [...orden];
    [nuevoOrden[slotClickeado], nuevoOrden[1]] = [nuevoOrden[1], nuevoOrden[slotClickeado]];
    setOrden(nuevoOrden);
  };

  const transicion = `${VELOCIDAD_MS}ms ${CURVA}`;

  return (
    <div ref={ref} className={`esl-reveal ${visible ? 'is-visible' : ''}`}>
      <style>{ESTILOS_ANIMACION}</style>

      {/* =====================================================
          CELULAR Y TABLET (animación suave por click)
          ===================================================== */}
      <section className="lg:hidden w-full bg-[#faf9f8] pt-[3vw] pb-[10vw] font-principal relative z-20 overflow-hidden">

        {/* Título con animación de entrada */}
        <h2
          className="rv text-center text-[6.3vw] text-[#053d57] tracking-wide leading-none whitespace-nowrap"
          style={{ fontFamily: 'Alta, serif', '--i': 0 }}
        >
          EL ESPACIO PARA TI Y TU PIEL
        </h2>

        {/* Cards: cada uno es fijo y se desliza de un lugar a otro (no se reordena el DOM) */}
        <div style={{ '--i': 1, height: `${CENTRO.h}vw` }} className="rv relative w-full mt-[6vw]">
          {listaCaracteristicas.map((item, itemIndex) => {
            const slot = orden.indexOf(itemIndex);
            const pos = SLOTS[slot];
            const esCentro = slot === 1;

            return (
              <div
                key={item.id}
                onClick={() => manejarClickCard(slot)}
                className="absolute overflow-hidden cursor-pointer motion-reduce:!transition-none"
                style={{
                  left: `${pos.left}vw`,
                  top: `${pos.top}vw`,
                  width: `${pos.w}vw`,
                  height: `${pos.h}vw`,
                  borderRadius: `${pos.r}vw`,
                  zIndex: esCentro ? 10 : 0,
                  opacity: esCentro ? 1 : 0.88,
                  boxShadow: esCentro
                    ? '0 3vw 6vw -1vw rgba(0,0,0,0.28)'
                    : '0 1vw 2.5vw -0.5vw rgba(0,0,0,0.16)',
                  transition: `left ${transicion}, top ${transicion}, width ${transicion}, height ${transicion}, border-radius ${transicion}, opacity ${transicion}, box-shadow ${transicion}`,
                  willChange: 'left, top, width, height',
                }}
              >
                <img
                  src={item.img}
                  alt={item.texto.replace('\n', ' ')}
                  className="w-full h-full object-cover"
                  style={{
                    transform: esCentro ? 'scale(1)' : 'scale(1.12)',
                    transition: `transform ${transicion}`,
                  }}
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#dcc4bc]' }}
                />

                {/* Degradado inferior */}
                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

                {/* Texto */}
                <div
                  className="absolute left-0 w-full text-center px-1"
                  style={{
                    bottom: esCentro ? '3.4vw' : '2vw',
                    transition: `bottom ${transicion}`,
                  }}
                >
                  <p
                    className="text-white font-medium tracking-wide leading-[1.2] drop-shadow-md"
                    style={{
                      fontSize: esCentro ? '1.8vw' : '1.2vw',
                      transition: `font-size ${transicion}`,
                    }}
                  >
                    {item.texto.split('\n').map((linea, i) => (
                      <span key={i} className="block whitespace-nowrap">{linea}</span>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Texto inferior con "+" */}
        <div style={{ '--i': 2 }} className="rv flex items-start gap-[1.6vw] mt-[11vw] pl-[4vw] pr-[4vw]">
          <div className="flex-shrink-0 mt-[0.6vw]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[3.6vw] h-[3.6vw] text-[#c9aea5]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 11h-6V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
            </svg>
          </div>

          <p className="text-[#88807a] text-[3vw] font-medium leading-[1.3]">
            <span className="block whitespace-nowrap">Nuestra experiencia de faciales incluyen un ambiente</span>
            <span className="block whitespace-nowrap">especial acompañado de  aromaterapia,  catering</span>
            <span className="block whitespace-nowrap">(bebidas, dulces y salados)  masaje de hombros  y los</span>
            <span className="block whitespace-nowrap">mejores productos premium dermatológicos.</span>
          </p>
        </div>
      </section>

      {/* =====================================================
          PC (igual que antes + elevación suave al pasar el mouse)
          ===================================================== */}
      <section className="hidden lg:block w-full bg-[#faf9f8] -mt-24 md:-mt-32 pt-8 md:pt-12 pb-16 md:pb-20 font-principal px-6 lg:px-12 relative z-20">
        <div className="max-w-[1250px] mx-auto">
          
          <h2 
            className="rv text-center text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-[#053d57] mb-12 md:mb-16 tracking-wide"
            style={{ fontFamily: 'Alta, serif', '--i': 0 }}
          >
            EL ESPACIO PARA TI Y TU PIEL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {listaCaracteristicas.map((item, index) => (
              <div 
                key={item.id}
                style={{ '--i': index + 1 }}
                className="rv relative w-full h-[350px] md:h-[400px] lg:h-[420px] rounded-[2rem] overflow-hidden shadow-sm group transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-2xl"
              >
                <img 
                  src={item.img} 
                  alt={item.texto.replace('\n', ' ')} 
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#dcc4bc]' }}
                />
                
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-6 md:bottom-8 left-0 w-full px-4 text-center">
                  <p className="text-white font-medium text-[13px] md:text-[14px] lg:text-[15px] tracking-widest whitespace-pre-line drop-shadow-md">
                    {item.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ '--i': 4 }} className="rv flex items-start gap-4 md:gap-6 mt-12 md:mt-16 max-w-[1050px] mx-auto">
            <div className="flex-shrink-0 mt-1 md:mt-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-[#c59e93]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 11h-6V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
              </svg>
            </div>
            
            <p className="flex-1 text-[#88807a] text-[16px] md:text-[17px] lg:text-[18px] font-medium leading-snug text-center">
              Nuestra experiencia de faciales incluyen un ambiente especial acompañado de aromaterapia, catering<br className="hidden md:block"/>
              (bebidas, dulces y salados) masaje de hombros y los mejores productos premium dermatológicos.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default EspacioSkinLounge;