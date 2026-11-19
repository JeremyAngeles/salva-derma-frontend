import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ============================================================
   ✨ ANIMACIONES (todo vive en este mismo archivo)
- 1.1s  = duración de la entrada
- 120ms = retraso entre un elemento y el siguiente
   ============================================================ */
const ESTILOS_ANIMACION = `
  :root { --ease-suave: cubic-bezier(0.22, 1, 0.36, 1); }

  @keyframes sk-subir {
    from { opacity: 0; translate: 0 24px; }
    to   { opacity: 1; translate: 0 0; }
  }

  /* Entran una sola vez al hacer scroll */
  .sk-reveal .rv { opacity: 0; }
  .sk-reveal.is-visible .rv {
    animation: sk-subir 1.1s var(--ease-suave) both;
    animation-delay: calc(var(--i, 0) * 120ms);
  }

  @media (prefers-reduced-motion: reduce) {
    .sk-reveal .rv {
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

const SkinLounge = () => {
  const [ref, visible] = useReveal(0.15);

  // =========================================
  // 1. Carrusel de Imágenes (Izquierda)
  // =========================================
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const images = [
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799855/zdeq0dpeah0wot2ulxio.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799853/p1iujgny4hssrjvh84qa.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799855/dstxalaqohfwxatpobxq.jpg',
    'https://res.cloudinary.com/da47iihxz/image/upload/v1792799852/ft1p2iioo393pbzzvqp7.jpg'
  ];

  // Efecto para que el carrusel cambie de foto cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length, currentImage]);

  const handleImageTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleImageTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleImageTouchEnd = () => {
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

  // =========================================
  // 2. Carrusel de Testimonios (Solo Móvil)
  // =========================================
  const testimonialRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTouchingTestimonial, setIsTouchingTestimonial] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Me animé a vivir esta experiencia porque está diseñada por especialistas en dermatología y cirugía plástica."
    },
    {
      id: 2,
      text: "Me encantó porque va más allá de una simple limpieza, también se enfocaron en un momento de relajación y cuidado integral de mi piel."
    },
    {
      id: 3,
      text: "Lo mejor fue el catering, la aromaterapia y los masajitos en mis hombros. Además de los productos 100% dermatológicos que usaron en mi piel."
    }
  ];

  useEffect(() => {
    if (isTouchingTestimonial) return;

    const timer = setInterval(() => {
      if (window.innerWidth < 768 && testimonialRef.current) {
        const container = testimonialRef.current;
        const nextIndex = (currentTestimonial + 1) % testimonials.length;
        setCurrentTestimonial(nextIndex);

        const targetCard = container.children[nextIndex];
        if (targetCard) {
          container.scrollTo({
            left: targetCard.offsetLeft - container.offsetLeft,
            behavior: 'smooth'
          });
        }
      }
    }, 3500);

    return () => clearInterval(timer);
  }, [currentTestimonial, testimonials.length, isTouchingTestimonial]);

  const handleTestimonialScroll = () => {
    const container = testimonialRef.current;
    if (!container || window.innerWidth >= 768) return;

    const firstCard = container.children[0];
    if (!firstCard) return;

    const step = firstCard.offsetWidth + 20; // ancho de tarjeta + gap-5 (20px)
    const index = Math.round(container.scrollLeft / step);
    if (index >= 0 && index < testimonials.length && index !== currentTestimonial) {
      setCurrentTestimonial(index);
    }
  };

  return (
    <section
      ref={ref}
      className={`sk-reveal ${visible ? 'is-visible' : ''} relative w-full max-w-[1900px] mx-auto min-h-[900px] lg:min-h-0 lg:h-[870px] overflow-hidden font-principal flex items-center justify-center`}
    >
      <style>{ESTILOS_ANIMACION}</style>

      {/* Fondo ajustado para mostrar la foto entera al 100% sin recortes ni zoom */}
      <div
        className="absolute inset-0 w-full h-full bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793054488/yi9a85ywmpdstl6a2vjx.jpg')" }}
      >
      </div>

      {/* Contenedor Principal */}
      <div className="relative z-10 w-full max-w-[1500px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center py-10 lg:py-0">

        {/* =========================================
            COLUMNA IZQUIERDA: Textos + Tarjeta Vertical a la izquierda
            ========================================= */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:-ml-12 xl:-ml-20">

          {/* Cabecera Textos Ajustados */}
          <div className="mb-8 flex flex-col items-center lg:items-start" style={{ fontFamily: 'Alta, serif' }}>
            <h3 style={{ '--i': 0 }} className="rv text-white text-[1.8rem] lg:text-[2.2rem] tracking-[0.1em] font-light mb-[-5px]">
              FACIAL
            </h3>
            <h2 style={{ '--i': 1 }} className="rv text-white text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-[1.05] mb-2 drop-shadow-md">
              SKIN LOUNGE
            </h2>
            <p
              className="rv text-white text-base md:text-xl lg:text-[22px] font-light tracking-wide drop-shadow-sm whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif", '--i': 2 }}
            >
              Experiencias en limpiezas faciales EXCLUSIVAS
            </p>
          </div>

          {/* Tarjeta de Imagen Vertical (Carrusel Animado con Swipe) */}
          <div
            style={{ '--i': 3 }}
            onTouchStart={handleImageTouchStart}
            onTouchMove={handleImageTouchMove}
            onTouchEnd={handleImageTouchEnd}
            className="rv relative w-[300px] md:w-[360px] lg:w-[380px] h-[460px] md:h-[540px] lg:h-[570px] rounded-[2rem] overflow-hidden border-[6px] md:border-[8px] border-white border-opacity-40 shadow-2xl mx-auto lg:mx-0 bg-black/10 touch-pan-y select-none"
          >

            {/* Imágenes con fundido lento + zoom casi imperceptible */}
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Skin Lounge Procedimiento ${index + 1}`}
                draggable="false"
                className={`absolute inset-0 w-full h-full object-cover ${
                  index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{
                  transform: index === currentImage ? 'scale(1.06)' : 'scale(1)',
                  transition: 'opacity 1200ms ease-in-out, transform 7000ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full object-cover bg-black/50' }}
              />
            ))}

            {/* Gradiente inferior para resaltar los puntitos */}
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none"></div>

            {/* Puntitos del carrusel centrados abajo */}
            <div className="absolute bottom-6 w-full flex justify-center gap-2.5 z-30">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-3 rounded-full transition-all duration-500 ease-out ${
                    index === currentImage
                      ? 'w-7 bg-white'
                      : 'w-3 bg-white bg-opacity-40 hover:bg-opacity-80'
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Testimonios y Botones empujados a la derecha
            ========================================= */}
        <div className="flex flex-col gap-6 w-full max-w-[520px] mx-auto lg:ml-auto lg:-mr-12 xl:-mr-20 mt-10 lg:mt-0">

          {/* Carrusel deslizable con el dedo en celular y Lista normal en PC */}
          <div
            ref={testimonialRef}
            onScroll={handleTestimonialScroll}
            onTouchStart={() => setIsTouchingTestimonial(true)}
            onTouchEnd={() => setIsTouchingTestimonial(false)}
            className="flex md:flex-col overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide pb-4 md:pb-0 gap-5 md:gap-6 touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {testimonials.map((testimonio, i) => (
              <div
                key={testimonio.id}
                style={{ '--i': i + 2 }}
                className="rv w-full flex-shrink-0 md:flex-shrink md:w-auto snap-center"
              >

                {/* Tarjeta de Reseña */}
                <div className="group bg-white/10 backdrop-blur-sm border-2 border-white/40 rounded-[1.5rem] p-5 md:p-6 lg:p-7 flex gap-5 shadow-lg hover:bg-white/20 hover:shadow-xl transition-all duration-500 ease-out cursor-default h-full">

                  {/* Ícono de Usuario (Avatar) */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[1.5px] border-white flex items-center justify-center bg-transparent">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Contenido (Estrellas + Texto) */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, s) => (
                        <svg
                          key={s}
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ transitionDelay: `${s * 60}ms` }}
                          className="w-4 h-4 md:w-5 md:h-5 text-white transition-all duration-500 ease-out group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.9)]"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] font-light leading-snug md:leading-relaxed drop-shadow-sm">
                      {testimonio.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón de Acción */}
          <div style={{ '--i': 5 }} className="rv flex justify-center lg:justify-end mt-4">
            <Link
              to="/skinlounge"
              className="group inline-flex items-center justify-center w-auto gap-2 bg-[#7ba9b7] text-white px-7 lg:px-8 py-3.5 rounded-full font-medium text-[16px] shadow-lg hover:bg-[#6894a1] hover:shadow-xl transition-all duration-500 ease-out whitespace-nowrap"
            >
              Tratamientos Skin Lounge
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Redes Sociales con íconos personalizados */}
          <div
            style={{ '--i': 6 }}
            className="rv flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-3 lg:gap-4 mt-2 text-white drop-shadow-sm"
          >
            <span className="font-light text-[17px] md:text-[19px] lg:text-[21px] tracking-wide text-center sm:text-left lg:whitespace-nowrap">
              Mira nuestra experiencia en redes:
            </span>
            <div className="flex gap-2.5 lg:gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1dwkJoh95C/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center hover:scale-110 transition-transform duration-500 ease-out"
              >
                <img src="/fcolor.svg" alt="Facebook" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/salvar.dermatoplastica?xtok=bmJxZG03OTB1a29h"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center hover:scale-110 transition-transform duration-500 ease-out"
              >
                <img src="/igcolor.svg" alt="Instagram" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@salvar_dermatoplastica?_r=1&_t=ZS-9BTxbcYcGBu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center hover:scale-110 transition-transform duration-500 ease-out"
              >
                <img src="/tiktokcolor.svg" alt="TikTok" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkinLounge;