import React, { useState, useEffect, useRef } from 'react';

/* ============================================================
   ✨ ANIMACIONES (todo vive en este mismo archivo)
- 1.1s  = duración de la entrada de textos
- 120ms = retraso entre un elemento y el siguiente
   ============================================================ */
const ESTILOS_ANIMACION = `
  :root { --ease-suave: cubic-bezier(0.22, 1, 0.36, 1); }

  @keyframes mv-subir {
    from { opacity: 0; translate: 0 24px; }
    to   { opacity: 1; translate: 0 0; }
  }
  @keyframes mv-entrar-derecha {
    from { opacity: 0; translate: 70px 0; }
    to   { opacity: 1; translate: 0 0; }
  }

  /* Entran una sola vez al hacer scroll */
  .mv-reveal .rv, .mv-reveal .rd { opacity: 0; }
  .mv-reveal.is-visible .rv {
    animation: mv-subir 1.1s var(--ease-suave) both;
    animation-delay: calc(var(--i, 0) * 120ms);
  }
  .mv-reveal.is-visible .rd {
    animation: mv-entrar-derecha 1.4s var(--ease-suave) both;
    animation-delay: calc(var(--i, 0) * 150ms);
  }

  @media (prefers-reduced-motion: reduce) {
    .mv-reveal .rv, .mv-reveal .rd {
      animation: none !important; opacity: 1 !important; translate: none !important;
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

const MejorVersion = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [ref, visible] = useReveal(0.15);

  // Estados para deslizar con el dedo en celular
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Array con las 4 imágenes
  const images = [
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799600/oi9kvjsmby3ih66rcebj.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799600/juuoywkqnp452mjixddi.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799600/hxrd58x1spkuy7oa4l6y.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799601/nt4my33jykt6kvkcbjko.jpg'
  ];

  // Efecto para que el carrusel cambie automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, currentImage]);

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > 50) {
      setCurrentImage((prev) => (prev + 1) % images.length);
    } else if (distance < -50) {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section
      ref={ref}
      className={`mv-reveal ${visible ? 'is-visible' : ''} relative w-full py-16 md:py-20 lg:py-32 bg-[#f9f9f9] overflow-hidden font-principal`}
    >
      <style>{ESTILOS_ANIMACION}</style>

      {/* Contenedor general */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

        {/* =========================================
            COLUMNA IZQUIERDA: Textos y Botón
            (en celular aparece ARRIBA de la foto, igual que en PC)
            ========================================= */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full max-w-[540px] mx-auto lg:mx-0 lg:pl-12 lg:ml-36 xl:ml-52 w-full">

          {/* Párrafo corto */}
          <p
            style={{ '--i': 0 }}
            className="rv text-[#88807a] text-[13px] min-[375px]:text-[14px] md:text-[19px] font-light leading-[1.4] md:leading-[1.2] mb-4 md:mb-5 text-left px-6 lg:px-0 max-w-none"
          >
            Clínica con especialistas CERTIFICADOS en dermatología, cirugía plástica, láser, estética y expertos en faciales.
          </p>

          {/* Título + párrafo + botón (ahora visible en celular y PC) */}
          <div className="block px-6 lg:px-0">
            <h2
              className="rv text-[2.1rem] min-[390px]:text-[2.5rem] sm:text-5xl lg:text-[3.8rem] text-[#053d57] leading-[0.95] tracking-wide mb-4 lg:mb-5"
              style={{ fontFamily: 'Alta, serif', '--i': 1 }}
            >
              <span className="font-light lg:whitespace-nowrap">TU MEJOR VERSIÓN,</span><br />
              <span className="font-light">ESTÁ AÚN POR</span><br />
              <span className="font-normal">LLEGAR</span>
            </h2>

            <p
              style={{ '--i': 2 }}
              className="rv text-[#88807a] text-[14px] min-[390px]:text-[15px] sm:text-[17px] md:text-[19px] font-light leading-[1.25] lg:leading-[1.2] mb-6 lg:mb-10 max-w-[340px] sm:max-w-none"
            >
              Nuestros servicios son realizados por<br className="hidden lg:block" />{' '}
              especialistas altamente capacitados fuera<br className="hidden lg:block" />{' '}
              y dentro del país, y priorizamos el manejo<br className="hidden lg:block" />{' '}
              conjunto de ambas especialidades según<br className="hidden lg:block" />{' '}
              la necesidad del caso.
            </p>

            <div style={{ '--i': 3 }} className="rv">
              <a
                href="https://wa.me/51994060977"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#cdb3ae] to-[#e4d1cd] text-white px-8 py-3 lg:px-12 lg:py-4 rounded-full font-medium text-base lg:text-xl shadow-sm hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition-all duration-500 ease-out"
              >
                Reserva tu consulta
              </a>
            </div>
          </div>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Carrusel estirado en móvil (con Swipe)
            ========================================= */}
        <div className="lg:col-span-7 relative w-full h-[460px] min-[390px]:h-[520px] sm:h-[600px] lg:h-[760px] mt-6 lg:mt-0">

          {/* FIGURA CELESTE DE FONDO */}
          <div
            style={{ '--i': 0 }}
            className="rd absolute right-0 -top-6 -bottom-10 lg:-top-10 lg:-bottom-10 w-[85%] lg:w-[66%] bg-[#7caebc] rounded-l-[2.5rem] lg:rounded-l-[4.5rem] z-0"
          ></div>

          {/* IMÁGENES PRINCIPALES DEL CARRUSEL */}
          <div
            style={{ '--i': 1 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="rd absolute right-0 top-0 w-[94%] lg:w-[80%] h-full rounded-l-[2.5rem] lg:rounded-l-[4.5rem] overflow-hidden shadow-2xl z-10 bg-[#f9f9f9] touch-pan-y select-none"
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Clínica Instalaciones ${index + 1}`}
                draggable="false"
                className={`absolute inset-0 w-full h-full object-cover ${
                  index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  transform: index === currentImage ? 'scale(1.06)' : 'scale(1)',
                  transition: 'opacity 1200ms ease-in-out, transform 7000ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full object-cover bg-[#dcc4bc]' }}
              />
            ))}
          </div>

          {/* PUNTOS DEL CARRUSEL */}
          <div
            style={{ '--i': 3 }}
            className="rv absolute -bottom-10 lg:-bottom-16 right-0 w-[85%] lg:w-[66%] h-[48px] lg:h-[90px] flex justify-center items-center gap-3 lg:gap-4 z-20"
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`rounded-full transition-all duration-500 ease-out ${
                  index === currentImage
                    ? 'w-7 h-3 lg:w-9 lg:h-4 bg-white shadow-md'
                    : 'w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 bg-transparent border-[1.5px] border-white hover:bg-white/30'
                }`}
                aria-label={`Ver imagen ${index + 1} de la clínica`}
              ></button>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default MejorVersion;