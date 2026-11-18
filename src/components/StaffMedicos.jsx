import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ============================================================
   ✨ ANIMACIONES (todo vive en este mismo archivo)
   - 1.1s = duración de la entrada
   - 120ms = retraso entre un elemento y el siguiente
   ============================================================ */
const ESTILOS_ANIMACION = `
  :root { --ease-suave: cubic-bezier(0.22, 1, 0.36, 1); }

  @keyframes staff-subir {
    from { opacity: 0; translate: 0 24px; }
    to   { opacity: 1; translate: 0 0; }
  }
  @keyframes staff-crecer {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  /* Entran una sola vez al hacer scroll */
  .staff-reveal .rv { opacity: 0; }
  .staff-reveal.is-visible .rv {
    animation: staff-subir 1.1s var(--ease-suave) both;
    animation-delay: calc(var(--i, 0) * 120ms);
  }

  /* Línea decorativa que se dibuja sola */
  .staff-reveal .linea { transform: scaleX(0); transform-origin: center; }
  .staff-reveal.is-visible .linea {
    animation: staff-crecer 1.1s var(--ease-suave) 0.3s both;
  }
  @media (min-width: 1024px) {
    .staff-reveal .linea { transform-origin: left; }
  }

  @media (prefers-reduced-motion: reduce) {
    .staff-reveal .rv, .staff-reveal .linea {
      animation: none !important; opacity: 1 !important; translate: none !important; transform: none !important;
    }
  }
`;

/* Marca la sección como visible la primera vez que entra en pantalla */
const useReveal = (threshold = 0.2) => {
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

const StaffMedicos = () => {
  const [ref, visible] = useReveal(0.2);

  const doctors = [
    {
      id: 1,
      slug: "dr-hector",
      name: (<>DR. HÉCTOR FRANCISCO<br/>VARGAS CASTILLO</>),
      specialty: "CIRUJANO PLÁSTICO RECONSTRUCTIVO",
      cmp: "68988",
      rne: "42156",
      image: "https://res.cloudinary.com/da47iihxz/image/upload/v1792799320/pllvqijatj6w1nnre8l8.jpg"
    },
    {
      id: 2,
      slug: "dra-yuvidtza",
      name: (<>DRA. YUVIDTZA ANDREA<br/>ISABEL SALAZAR CARRILLO</>),
      specialty: "DERMATÓLOGA",
      cmp: "66762",
      rne: "39444",
      image: "https://res.cloudinary.com/da47iihxz/image/upload/v1792799319/zz1wxr8esflzppw2xjvr.jpg"
    },
    {
      id: 3,
      slug: "dra-karen",
      name: (<>DRA. KAREN YOHANNA<br/>ANGELES CHUMBIRIZA</>),
      specialty: "DERMATÓLOGA",
      cmp: "81188",
      rne: "48318",
      image: "https://res.cloudinary.com/da47iihxz/image/upload/v1792799320/qzzwduu1qfhez2dghstl.jpg"
    },
    {
      id: 4,
      slug: "dra-edith",
      name: (<>DRA. EDITH SANDRA<br/>LLANCAY MEDINA</>),
      specialty: "DERMATÓLOGA",
      cmp: "86231",
      rne: "052416",
      image: "https://res.cloudinary.com/da47iihxz/image/upload/v1792799320/pzzcgqjmajr0lfuwmef5.jpg"
    }
  ];

  return (
    <section
      ref={ref}
      className={`staff-reveal ${visible ? 'is-visible' : ''} relative w-full py-16 lg:py-0 lg:h-auto lg:aspect-[1900/720] overflow-hidden font-principal flex items-center justify-center`}
    >
      <style>{ESTILOS_ANIMACION}</style>

      {/* Fondo: cover y center en móviles, 100% 100% en PC */}
      <div
        className="absolute inset-0 w-full h-full bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793051009/rnfblmcyrwf4yvhfd4in.jpg')" }}
      ></div>

      <div className="relative z-10 w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center">

        <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left items-center lg:items-start pl-0 lg:-mt-16 w-full">

          {/* Título adaptado: un poco más chico en móvil para asegurar 2 filas */}
          <h2
            className="rv text-[1.5rem] sm:text-[2rem] lg:text-[2.6rem] text-[#053d57] leading-[1.15] lg:leading-[1.1] tracking-wide lg:tracking-normal drop-shadow-sm lg:drop-shadow-none text-center lg:text-left"
            style={{ fontFamily: 'Alta, serif', '--i': 0 }}
          >
            {/* Versión Celular (2 filas exactas) */}
            <span className="font-light block lg:hidden">CONOCE A NUESTRO STAFF DE</span>
            <span className="font-normal block lg:hidden">MÉDICOS ESPECIALISTAS</span>

            {/* Versión PC (Su estructura original de 3 filas) */}
            <span className="font-light hidden lg:inline">CONOCE A NUESTRO </span>
            <br className="hidden lg:block" />
            <span className="font-normal hidden lg:inline">STAFF DE MÉDICOS</span>
            <br className="hidden lg:block" />
            <span className="font-normal hidden lg:inline">ESPECIALISTAS</span>
          </h2>

          <div className="linea w-24 md:w-32 h-[3px] bg-[#cda99c] my-4 md:my-5 mx-auto lg:mx-0"></div>

          {/* Párrafo en PC (Oculto en móvil) */}
          <p
            style={{ '--i': 2 }}
            className="rv text-[#6b6662] text-[18.5px] font-light leading-[1.25] max-w-[390px] hidden lg:block"
          >
            Cada especialista aporta su experiencia y<br/>
            conocimientos para ofrecer un abordaje<br/>
            integral, y <strong className="font-medium text-[#5c5652]">BAJO ESTÁNDARES DE</strong><br/>
            <strong className="font-medium text-[#5c5652]">CALIDAD</strong> que ofrece nuestra clínica.<br/>
            Priorizando las necesidades de cada<br/>
            paciente y acompañándolo en cada<br/>
            etapa de su atención.
          </p>

          {/* Párrafo en Móvil/Tablet (Oculto en PC) */}
          <div
            style={{ '--i': 2 }}
            className="rv flex flex-col items-center justify-center text-[#6b6662] text-[10px] min-[375px]:text-[11px] sm:text-[13px] md:text-[15px] font-light leading-[1.6] w-full lg:hidden drop-shadow-sm"
          >
            <span className="whitespace-nowrap">Cada especialista aporta su experiencia y conocimientos para</span>
            <span className="whitespace-nowrap">ofrecer un abordaje integral, y BAJO ESTÁNDARES DE CALIDAD</span>
            <span className="whitespace-nowrap">que ofrece nuestra clínica. Priorizando las necesidades de cada</span>
            <span className="whitespace-nowrap">paciente y acompañándolo en cada etapa de su atención.</span>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4 lg:gap-2.5 w-full max-w-2xl mx-auto lg:ml-auto lg:mr-0 pr-0 lg:pr-4 lg:translate-x-6 mt-4 lg:mt-0">
          {doctors.map((doc, index) => (
            <Link
              key={doc.id}
              to={`/nosotros#${doc.slug}`}
              style={{ '--i': index + 3 }}
              className="rv group flex items-center justify-between bg-white/[0.3] lg:bg-white/[0.22] hover:bg-white/[0.4] lg:hover:bg-white/[0.35] backdrop-blur-md rounded-2xl sm:rounded-3xl py-3 pl-6 pr-3 sm:py-3.5 sm:pl-9 sm:pr-3.5 shadow-md lg:shadow-sm hover:shadow-lg border border-white/60 lg:border-white/50 cursor-pointer transition-all duration-500 ease-out hover:scale-[1.02] lg:hover:scale-[1.01]"
            >
              <div className="flex flex-col flex-1 pr-3 sm:pr-4 overflow-hidden text-left">
                <h3 className="text-[#5c5652] font-semibold text-[14px] sm:text-[18px] leading-[1.2] break-words drop-shadow-sm">
                  {doc.name}
                </h3>
                <p className="text-[#88807a] text-[11px] sm:text-[14px] font-light mt-1 tracking-normal uppercase truncate">
                  {doc.specialty}
                </p>
                <p className="text-[#6c6662] text-[13px] sm:text-[16px] mt-1 font-medium">
                  CMP {doc.cmp} <span className="mx-1.5 text-[#a8a19c]">|</span> RNE {doc.rne}
                </p>
              </div>

              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-lg border-2 border-white/80">
                <img
                  src={doc.image}
                  alt="Doctor"
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#593433]' }}
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StaffMedicos;