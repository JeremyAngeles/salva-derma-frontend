import React, { useState, useEffect, useRef, useCallback } from 'react';

const ESTILOS_ANIMACION = `
  :root { --ease-delicado: cubic-bezier(0.25, 1, 0.5, 1); }

  @keyframes cde-aparecer {
    from { opacity: 0; translate: 0 10px; }
    to   { opacity: 1; translate: 0 0; }
  }

  .cde-reveal .rv { opacity: 0; }
  .cde-reveal.is-visible .rv {
    animation: cde-aparecer 0.95s var(--ease-delicado) both;
    animation-delay: calc(var(--i, 0) * 90ms);
  }

  /* ============================================
     ANIMACIONES VISIBLES DEL MODAL (ABRIR Y CERRAR)
     ============================================ */
  @keyframes cde-fondo-entrar {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
  }

  @keyframes cde-fondo-salir {
    from {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
    to {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
  }

  @keyframes cde-card-entrar {
    0% {
      opacity: 0;
      transform: translateY(38px) scale(0.84);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes cde-card-salir {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    45% {
      opacity: 0.85;
      transform: translateY(16px) scale(0.92);
    }
    100% {
      opacity: 0;
      transform: translateY(44px) scale(0.82);
    }
  }

  @keyframes cde-flecha-entrar {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes cde-flecha-salir {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.8);
    }
  }

  .cde-fondo-enter {
    animation: cde-fondo-entrar 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .cde-fondo-exit {
    animation: cde-fondo-salir 0.42s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .cde-card-enter {
    animation: cde-card-entrar 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .cde-card-exit {
    animation: cde-card-salir 0.42s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .cde-flecha-enter {
    animation: cde-flecha-entrar 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;
  }

  .cde-flecha-exit {
    animation: cde-flecha-salir 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    .cde-reveal .rv,
    .cde-fondo-enter,
    .cde-fondo-exit,
    .cde-card-enter,
    .cde-card-exit,
    .cde-flecha-enter,
    .cde-flecha-exit {
      animation: none !important;
      opacity: 1 !important;
      translate: none !important;
      transform: none !important;
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

const CirugiasDeExito = () => {
  const [ref, visible] = useReveal(0.12);
  const [modalType, setModalType] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const closeTimerRef = useRef(null);

  const galeriaCirugias = {
    otoplastia: {
      titulo: "OTOPLASTÍA",
      fotos: [
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812779/p9bmnzxjrxaeq4azr4zh.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812779/ce5rbh9lggez3edjthof.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812779/fkd4ud5dfq3hkslzkbsm.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812778/nlkiydpef7n30f3xx0xe.jpg"
      ]
    },
    blefaroplastia: {
      titulo: "BLEFAROPLASTÍA",
      fotos: [
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812773/gbbs7pi0he4hfvxfg2mg.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812773/gognvyrpotf6ohvhpcvo.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812773/byqz0f6uskuxgwgms4zq.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812773/pczqrigrpwo6dpgbqc1a.jpg"
      ]
    },
    armonizacion: {
      titulo: "ARMONIZACIÓN FACIAL",
      fotos: [
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812770/bumhyvjq1m0jahaudhmi.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812770/mahupocg6ywwbiwrt0cl.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812770/obrulpfl9kgmoqzycumf.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812769/nybm0x9ytsbu9npdbyrg.jpg"
      ]
    },
    lifting: {
      titulo: "LIFTING FACIAL",
      fotos: [
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812776/vazkn7p2qrmqdhi0r4vy.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812776/eduiaxjwabvly9nsoys8.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812776/sszdhxja0syokzcdrjg9.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812776/voqptyvx9swqeqfceqqp.jpg"
      ]
    },
    rinoseptoplastia: {
      titulo: "RINOSEPTOPLASTÍA",
      fotos: [
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812781/ujsjmjwr841ofgdrw3s8.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812781/pygpcw42bpyi088xonth.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812782/xcjcyfawlazm0fw79ifv.jpg",
        "https://res.cloudinary.com/da47iihxz/image/upload/v1792812782/onwrm9qez8rr8fgcjyqn.jpg"
      ]
    }
  };

  const abrirModal = (tipo) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsClosing(false);
    setCurrentImageIndex(0);
    setModalType(tipo);
  };

  const cerrarModal = useCallback(() => {
    if (!modalType || isClosing) return;
    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setModalType(null);
      setIsClosing(false);
      closeTimerRef.current = null;
    }, 420);
  }, [modalType, isClosing]);

  const siguienteFoto = useCallback((e) => {
    if (e) e.stopPropagation();
    if (modalType) {
      const total = galeriaCirugias[modalType].fotos.length;
      setCurrentImageIndex((prev) => (prev + 1) % total);
    }
  }, [modalType]);

  const anteriorFoto = useCallback((e) => {
    if (e) e.stopPropagation();
    if (modalType) {
      const total = galeriaCirugias[modalType].fotos.length;
      setCurrentImageIndex((prev) => (prev - 1 + total) % total);
    }
  }, [modalType]);

  // Teclado (Escape para cerrar, flechas para navegar) y bloqueo de scroll
  useEffect(() => {
    if (!modalType) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') cerrarModal();
      if (e.key === 'ArrowRight') siguienteFoto();
      if (e.key === 'ArrowLeft') anteriorFoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalType, cerrarModal, siguienteFoto, anteriorFoto]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  // --- LÓGICA DE SWIPE (Solo para celular) ---
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) siguienteFoto();
    if (isRightSwipe) anteriorFoto();
  };

  return (
    <section
      ref={ref}
      className={`cde-reveal ${visible ? 'is-visible' : ''} w-full bg-[#fcfbf9] py-16 md:py-24 font-principal relative`}
    >
      <style>{ESTILOS_ANIMACION}</style>

      <div className="max-w-[1150px] mx-auto px-6 lg:px-8">
        
        {/* Título Principal */}
        <h2 
          className="rv text-[#053d57] text-[2.1rem] sm:text-[3.2rem] md:text-[4.0rem] text-center mt-10 md:mt-0 mb-12 md:mb-14 tracking-wide leading-none font-light"
          style={{ fontFamily: 'Alta, serif', '--i': 0 }}
        >
          CIRUGÍAS DE ÉXITO
        </h2>

        {/* =========================================
            VISTA CELULAR Y TABLET (< lg)
            ========================================= */}
        <div className="grid grid-cols-2 gap-4 lg:hidden">
          
          {/* 1. Otoplastía */}
          <div 
            onClick={() => abrirModal('otoplastia')}
            style={{ '--i': 1 }}
            className="rv relative w-full h-[220px] min-[390px]:h-[250px] sm:h-[300px] rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-xl active:scale-[0.97] transition-all duration-300 group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616263/otoplastia.png" 
              alt="Otoplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-4 text-center px-2">
              <h3 className="text-white font-bold text-[13px] min-[390px]:text-[14.5px] sm:text-[17px] tracking-wider uppercase drop-shadow-md">
                OTOPLASTÍA
              </h3>
            </div>
          </div>

          {/* 2. Blefaroplastía */}
          <div 
            onClick={() => abrirModal('blefaroplastia')}
            style={{ '--i': 2 }}
            className="rv relative w-full h-[220px] min-[390px]:h-[250px] sm:h-[300px] rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-xl active:scale-[0.97] transition-all duration-300 group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616263/BLEFARO.png" 
              alt="Blefaroplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-4 text-center px-2">
              <h3 className="text-white font-bold text-[13px] min-[390px]:text-[14.5px] sm:text-[17px] tracking-wider uppercase drop-shadow-md">
                BLEFAROPLASTÍA
              </h3>
            </div>
          </div>

          {/* 3. Lifting Facial */}
          <div 
            onClick={() => abrirModal('lifting')}
            style={{ '--i': 3 }}
            className="rv relative w-full h-[220px] min-[390px]:h-[250px] sm:h-[300px] rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-xl active:scale-[0.97] transition-all duration-300 group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616264/LIFTING_FACIAL.png" 
              alt="Lifting Facial" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-4 text-center px-2">
              <h3 className="text-white font-bold text-[13px] min-[390px]:text-[14.5px] sm:text-[17px] tracking-wider uppercase drop-shadow-md">
                LIFTING FACIAL
              </h3>
            </div>
          </div>

          {/* 4. Rinoseptoplastía */}
          <div 
            onClick={() => abrirModal('rinoseptoplastia')}
            style={{ '--i': 4 }}
            className="rv relative w-full h-[220px] min-[390px]:h-[250px] sm:h-[300px] rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-xl active:scale-[0.97] transition-all duration-300 group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616264/RINOSEPTOPLASTIA.png" 
              alt="Rinoseptoplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-4 text-center px-2">
              <h3 className="text-white font-bold text-[13px] min-[390px]:text-[14.5px] sm:text-[17px] tracking-wider uppercase drop-shadow-md">
                RINOSEPTOPLASTÍA
              </h3>
            </div>
          </div>

          {/* 5. Armonización Facial */}
          <div 
            onClick={() => abrirModal('armonizacion')}
            style={{ '--i': 5 }}
            className="rv relative w-full h-[320px] min-[390px]:h-[360px] sm:h-[420px] col-span-2 rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-xl active:scale-[0.98] transition-all duration-300 group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616262/ARMONIZACI%C3%93N_FACIAL.png" 
              alt="Armonización Facial" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[15px] min-[390px]:text-[17px] sm:text-[20px] tracking-wider uppercase drop-shadow-md">
                ARMONIZACIÓN FACIAL
              </h3>
            </div>
          </div>

        </div>

        {/* =========================================
            VISTA PC (lg:)
            ========================================= */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-[270px_270px] gap-6">
          
          {/* 1. OTOPLASTÍA */}
          <div 
            onClick={() => abrirModal('otoplastia')}
            style={{ '--i': 1 }}
            className="rv relative w-full h-full rounded-[2.2rem] overflow-hidden shadow-md hover:shadow-xl active:scale-[0.97] transition-all duration-300 group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616263/otoplastia.png" 
              alt="Otoplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[18px] tracking-wider uppercase drop-shadow-md">
                OTOPLASTÍA
              </h3>
            </div>
          </div>

          {/* 2. BLEFAROPLASTÍA */}
          <div 
            onClick={() => abrirModal('blefaroplastia')}
            style={{ '--i': 2 }}
            className="rv relative w-full h-full rounded-[2.2rem] overflow-hidden shadow-md hover:shadow-xl active:scale-[0.97] transition-all duration-300 group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616263/BLEFARO.png" 
              alt="Blefaroplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[18px] tracking-wider uppercase drop-shadow-md">
                BLEFAROPLASTÍA
              </h3>
            </div>
          </div>

          {/* 3. ARMONIZACIÓN FACIAL */}
          <div 
            onClick={() => abrirModal('armonizacion')}
            style={{ '--i': 3 }}
            className="rv relative w-full col-span-1 row-span-2 h-full rounded-[2.2rem] overflow-hidden shadow-md hover:shadow-xl active:scale-[0.97] transition-all duration-300 group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616262/ARMONIZACI%C3%93N_FACIAL.png" 
              alt="Armonización Facial" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-7 text-center px-4">
              <h3 className="text-white font-bold text-[19px] tracking-wider uppercase leading-snug drop-shadow-md">
                ARMONIZACIÓN<br />FACIAL
              </h3>
            </div>
          </div>

          {/* 4. LIFTING FACIAL */}
          <div 
            onClick={() => abrirModal('lifting')}
            style={{ '--i': 4 }}
            className="rv relative w-full h-full rounded-[2.2rem] overflow-hidden shadow-md hover:shadow-xl active:scale-[0.97] transition-all duration-300 group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616264/LIFTING_FACIAL.png" 
              alt="Lifting Facial" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[18px] tracking-wider uppercase drop-shadow-md">
                LIFTING FACIAL
              </h3>
            </div>
          </div>

          {/* 5. RINOSEPTOPLASTÍA */}
          <div 
            onClick={() => abrirModal('rinoseptoplastia')}
            style={{ '--i': 5 }}
            className="rv relative w-full h-full rounded-[2.2rem] overflow-hidden shadow-md hover:shadow-xl active:scale-[0.97] transition-all duration-300 group bg-[#2b2b2b] cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/cgfzvuli/image/upload/v1792616264/RINOSEPTOPLASTIA.png" 
              alt="Rinoseptoplastía" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute inset-x-0 bottom-5 text-center px-4">
              <h3 className="text-white font-bold text-[18px] tracking-wider uppercase drop-shadow-md">
                RINOSEPTOPLASTÍA
              </h3>
            </div>
          </div>

        </div>

      </div>

      {/* =========================================
          POP-UP / MODAL CON ANIMACIÓN CLARA AL ABRIR Y CERRAR
          ========================================= */}
      {modalType && (
        <div 
          onClick={cerrarModal}
          className={`fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 md:p-6 ${
            isClosing ? 'cde-fondo-exit pointer-events-none' : 'cde-fondo-enter'
          }`}
        >
          <div className="relative flex items-center justify-center w-full max-w-[950px] gap-2 md:gap-6">
            
            {/* Flecha Izquierda */}
            <button 
              onClick={anteriorFoto}
              className={`hidden sm:flex shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/40 hover:scale-105 active:scale-95 border border-white/50 text-white items-center justify-center text-2xl backdrop-blur-md shadow-lg cursor-pointer transition-transform duration-300 ${
                isClosing ? 'cde-flecha-exit' : 'cde-flecha-enter'
              }`}
              aria-label="Foto anterior"
            >
              &#10094;
            </button>

            {/* Card Principal del Modal */}
            <div 
              onClick={(e) => e.stopPropagation()} 
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`relative w-full max-w-[750px] bg-white rounded-[2rem] overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col items-center border border-[#e6e2de] ${
                isClosing ? 'cde-card-exit' : 'cde-card-enter'
              }`}
            >
              <button 
                onClick={cerrarModal}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#f4f2ef] hover:bg-[#053d57] text-[#053d57] hover:text-white hover:rotate-90 active:scale-90 flex items-center justify-center font-bold text-xl transition-all duration-300 z-20 shadow-sm cursor-pointer"
                aria-label="Cerrar modal"
              >
                &times;
              </button>

              <h3 
                className="text-[#053d57] text-2xl md:text-3xl lg:text-[2.2rem] tracking-wide font-light mb-6 uppercase text-center border-b border-[#dcc4bc] pb-3"
                style={{ fontFamily: 'Alta, serif' }}
              >
                {galeriaCirugias[modalType].titulo}
              </h3>

              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-[1.2rem] overflow-hidden bg-[#fcfbf9] flex items-center justify-center touch-pan-y">
                {galeriaCirugias[modalType].fotos.map((imgUrl, idx) => (
                  <img 
                    key={idx}
                    src={imgUrl} 
                    alt={`${galeriaCirugias[modalType].titulo} ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                      idx === currentImageIndex 
                        ? 'opacity-100 scale-100 z-10' 
                        : 'opacity-0 scale-[0.98] pointer-events-none z-0'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                {galeriaCirugias[modalType].fotos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      currentImageIndex === idx 
                        ? 'bg-[#053d57] w-3 h-3 md:w-3.5 md:h-3.5 scale-110 shadow-sm' 
                        : 'bg-[#dcc4bc] w-2.5 h-2.5 hover:bg-[#c59e93]'
                    }`}
                    aria-label={`Ir a foto ${idx + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex sm:hidden justify-between w-full mt-4 px-4">
                <button 
                  onClick={anteriorFoto}
                  className="px-4 py-2 bg-[#f4f2ef] active:scale-95 rounded-full text-[#053d57] font-semibold shadow-sm text-sm transition-transform"
                >
                  Anterior
                </button>
                <button 
                  onClick={siguienteFoto}
                  className="px-4 py-2 bg-[#f4f2ef] active:scale-95 rounded-full text-[#053d57] font-semibold shadow-sm text-sm transition-transform"
                >
                  Siguiente
                </button>
              </div>

            </div>

            {/* Flecha Derecha */}
            <button 
              onClick={siguienteFoto}
              className={`hidden sm:flex shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/40 hover:scale-105 active:scale-95 border border-white/50 text-white items-center justify-center text-2xl backdrop-blur-md shadow-lg cursor-pointer transition-transform duration-300 ${
                isClosing ? 'cde-flecha-exit' : 'cde-flecha-enter'
              }`}
              aria-label="Siguiente foto"
            >
              &#10095;
            </button>

          </div>
        </div>
      )}

    </section>
  );
};

export default CirugiasDeExito;