import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PAD_TEXTO_IZQ = 'md:pl-[max(1.5rem,calc((100vw-1250px)/2+1.5rem))] md:pr-12 lg:pr-16';
const PAD_TEXTO_DER = 'md:pl-12 lg:pl-16 md:pr-[max(1.5rem,calc((100vw-1250px)/2+1.5rem))]';

const INFO = 'flex flex-col gap-6 md:gap-7 text-[#88807a] text-sm md:text-base leading-tight';

/* ============================================================
   ✨ ANIMACIONES (todo vive en este mismo archivo)
   - 1.2s  = duración de la entrada
   - 130ms = retraso entre un elemento y el siguiente
   - La foto entra deslizándose desde su lado, y se asienta con
     un zoom lento. El texto sube después, uno tras otro.
   ============================================================ */
const ESTILOS_ANIMACION = `
  :root { --ease-suave: cubic-bezier(0.22, 1, 0.36, 1); }

  @keyframes perf-subir {
    from { opacity: 0; translate: 0 24px; }
    to   { opacity: 1; translate: 0 0; }
  }
  @keyframes perf-foto-der {
    from { opacity: 0; translate: 60px 0; }
    to   { opacity: 1; translate: 0 0; }
  }
  @keyframes perf-foto-izq {
    from { opacity: 0; translate: -60px 0; }
    to   { opacity: 1; translate: 0 0; }
  }
  @keyframes perf-zoom {
    from { transform: scale(1.08); }
    to   { transform: scale(1); }
  }
  @keyframes perf-crecer {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  /* Texto */
  .perf-reveal .rv { opacity: 0; }
  .perf-reveal.is-visible .rv {
    animation: perf-subir 1.2s var(--ease-suave) both;
    animation-delay: calc(var(--i, 0) * 130ms + 200ms);
  }

  /* Foto: entra desde su lado y la imagen se asienta */
  .perf-reveal .foto-der, .perf-reveal .foto-izq { opacity: 0; }
  .perf-reveal.is-visible .foto-der { animation: perf-foto-der 1.4s var(--ease-suave) both; }
  .perf-reveal.is-visible .foto-izq { animation: perf-foto-izq 1.4s var(--ease-suave) both; }
  .perf-reveal.is-visible .foto-img { animation: perf-zoom 2.2s var(--ease-suave) both; }

  /* Líneas que se dibujan solas */
  .perf-reveal .linea { transform: scaleX(0); transform-origin: left; }
  .perf-reveal.is-visible .linea {
    animation: perf-crecer 1.2s var(--ease-suave) 0.7s both;
  }

  @media (prefers-reduced-motion: reduce) {
    .perf-reveal .rv, .perf-reveal .foto-der, .perf-reveal .foto-izq,
    .perf-reveal .foto-img, .perf-reveal .linea {
      animation: none !important; opacity: 1 !important; translate: none !important; transform: none !important;
    }
  }
`;

/* Marca el bloque como visible la primera vez que entra en pantalla */
const useReveal = (threshold = 0.1) => {
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

/* Cada doctor es un bloque que se anima cuando llegas a él */
const BloqueDoctor = ({ id, children }) => {
  const [ref, visible] = useReveal(0.1);
  return (
    <div
      id={id}
      ref={ref}
      className={`perf-reveal ${visible ? 'is-visible' : ''} w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center scroll-mt-24`}
    >
      {children}
    </div>
  );
};

const Info = ({ children }) => (
  <div style={{ '--i': 4 }} className={`rv ${INFO}`}>
    {children}
  </div>
);

const Titulo = ({ children }) => (
  <h5 className="font-semibold text-[#053d57] leading-tight mb-1.5">{children}</h5>
);

const Lista = ({ items, space = 'space-y-1' }) => (
  <ul className={`list-disc pl-4 font-light ${space}`}>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const FotoVertical = ({ src, alt, lado }) => {
  const esDerecha = lado === 'derecha';
  return (
    <div
      className={`${esDerecha ? 'foto-der' : 'foto-izq'} w-full flex justify-center px-6 md:px-0 ${
        esDerecha ? 'order-1 md:order-2 md:justify-end' : 'order-1 md:justify-start'
      }`}
    >
      <div
        className={`w-full max-w-[480px] md:max-w-[720px] aspect-[3/4] overflow-hidden shadow-lg bg-[#dcc4bc]/20 rounded-[2rem] ${
          esDerecha ? 'md:rounded-l-[2.5rem] md:rounded-r-none' : 'md:rounded-r-[2.5rem] md:rounded-l-none'
        }`}
      >
        <img src={src} alt={alt} className="foto-img w-full h-full object-cover object-top" />
      </div>
    </div>
  );
};

const Cabecera = ({ cargo, nombre, cmp }) => (
  <>
    <div style={{ '--i': 1 }} className="rv border-l-4 border-[#053d57] pl-3 mb-3">
      <h4 className="text-[#88807a] text-xs md:text-sm font-medium tracking-widest uppercase">{cargo}</h4>
    </div>
    <h2
      className="rv text-[#053d57] text-2xl md:text-3xl lg:text-4xl leading-[1.1] mb-1"
      style={{ fontFamily: 'Alta, serif', '--i': 2 }}
    >
      {nombre[0]}
      <br />
      {nombre[1]}
    </h2>
    <p style={{ '--i': 3 }} className="rv text-[#053d57] font-medium text-sm md:text-base tracking-wide mb-2">{cmp}</p>
    <div className="linea w-full max-w-[280px] h-px bg-[#dcc4bc] mb-6"></div>
  </>
);

/* La línea separadora se dibuja de izquierda a derecha */
const Separador = () => {
  const [ref, visible] = useReveal(0.5);
  return (
    <div ref={ref} className={`perf-reveal ${visible ? 'is-visible' : ''} w-full max-w-[1000px] mx-auto`}>
      <div className="linea w-full h-px bg-[#e6e2de]"></div>
    </div>
  );
};

const PerfilesDoctores = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <section className="w-full bg-[#fcfbf9] py-16 md:py-24 font-principal overflow-hidden flex flex-col gap-20 md:gap-28">
      <style>{ESTILOS_ANIMACION}</style>

      <BloqueDoctor id="dr-hector">
        <div className={`flex flex-col order-2 md:order-1 px-6 ${PAD_TEXTO_IZQ}`}>
          <Cabecera
            cargo="CIRUJANO PLÁSTICO Y RECONSTRUCTIVO"
            nombre={['DR. HÉCTOR FRANCISCO', 'VARGAS CASTILLO']}
            cmp="CMP: 68988 - RNE: 42156"
          />

          <Info>
            <div>
              <Titulo>PREGRADO DE MEDICINA HUMANA:</Titulo>
              <p className="font-light">Universidad San Martín de Porres.</p>
            </div>
            <div>
              <Titulo>POSTGRADO DE CIRUGÍA PLÁSTICA Y RECONSTRUCTIVA:</Titulo>
              <div className="flex flex-col gap-1">
                <p className="font-light">Hospital Nacional Guillermo Almenara Irigoyen, por la USMP.</p>
                <p className="font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
              </div>
            </div>
            <div>
              <Titulo>DIPLOMADOS EN:</Titulo>
              <Lista
                items={[
                  'Gestión de la calidad en establecimientos de servicios de salud.',
                  'Auditoría médica, control en gestión y evaluación de los servicios de salud.',
                ]}
              />
            </div>
            <div>
              <Titulo>PASANTÍAS Y CAPACITACIONES EN:</Titulo>
              <Lista
                items={[
                  'CLÍNICA MORILLAS DE CIRUGÍA PLÁSTICA | Lima - Perú.',
                  'INSTITUTO KIRSCHBAUM DE CIRUGÍA PLÁSTICA | Lima - Perú.',
                ]}
              />
            </div>
            <div>
              <Titulo>MIEMBRO:</Titulo>
              <Lista
                items={[
                  'Miembro adscrito de la Sociedad Peruana de Cirugía Plástica (SPCP).',
                  'Miembro de la International Society of Aesthetic Plastic Surgery (ISAPS).',
                ]}
              />
            </div>
            <div>
              <Titulo>OTROS CURSOS:</Titulo>
              <Lista
                items={[
                  'Ponente expositor nacional e internacional en Lima, Trujillo, Quito y Guayaquil en módulo facial.',
                  'Asistente de congresos y cursos de forma anual: Congreso Ibero-Latinoamericano de Cirugía Plástica, Preservation rhinoplasty latinoamérica, LIMA Master Academy, talleres Hands-On de estética, fillers (ácido hialurónico, toxina botulínica, bioestimuladores).',
                ]}
              />
            </div>
          </Info>
        </div>

        <FotoVertical
          lado="derecha"
          src="https://res.cloudinary.com/da47iihxz/image/upload/v1792811935/iwtejivndkcldgwzhjgd.jpg"
          alt="Dr. Héctor Francisco Vargas Castillo"
        />
      </BloqueDoctor>

      <Separador />

      <BloqueDoctor id="dra-yuvidtza">
        <FotoVertical
          lado="izquierda"
          src="https://res.cloudinary.com/da47iihxz/image/upload/v1792811936/iwyzlo6jlf6ztgjfz5gc.jpg"
          alt="Dra. Yuvidtza Andrea Isabel Salazar Carrillo"
        />

        <div className={`flex flex-col order-2 px-6 ${PAD_TEXTO_DER}`}>
          <Cabecera
            cargo="DERMATÓLOGA CLÍNICA ESPECIALISTA EN LÁSER - TRICOLOGÍA - ESTÉTICA"
            nombre={['DRA. YUVIDTZA ANDREA', 'ISABEL SALAZAR CARRILLO']}
            cmp="CMP: 66762 - RNE: 39444"
          />

          <Info>
            <div>
              <Titulo>PREGRADO DE MEDICINA HUMANA:</Titulo>
              <p className="font-light">Universidad San Martín de Porres.</p>
            </div>
            <div>
              <Titulo>POSTGRADO DE DERMATOLOGÍA:</Titulo>
              <div className="flex flex-col gap-1">
                <p className="font-light">Universidad Nacional Mayor de San MArcos.</p>
                <p className="font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
              </div>
            </div>
            <div>
              <Titulo>MÁSTER EN LÁSER DERMATOLÓGICO Y ENERGÍAS LUMÍNICAS:</Titulo>
              <p className="font-light">Universidad de Alcalá (España)</p>
            </div>
            <div>
              <Titulo>DIPLOMADO EN:</Titulo>
              <Lista
                items={[
                  'Tricología y enfermedades del pelo por el Colegio Iberoamericano de dermatología - CILAD.',
                  'Láser y energías lumínicas por Colegio Iberoamericano de dermatología - CILAD.',
                  'Gestión de la calidad en establecimientos de servicios de salud.',
                  'Auditoría médica, control en gestión y evaluación de los servicios de salud.',
                ]}
              />
            </div>
            <div>
              <Titulo>PASANTÍAS Y CAPACITACIONES INTERNACIONALES EN:</Titulo>
              <Lista
                items={[
                  'Capacitación Láser Hospital Ramón y Cajal - España.',
                  'Capacitación en tricología Hospital Ramón y Cajal - España.',
                  'Capacitación en cirugía dermatológica Instituto "Dr. José Barba Rubio" - México.',
                  'Capacitación en Cadaver Lab ICLO Verona Italia.',
                  'Capacitación en Láser DEKA ACADEMY - Argentina.',
                  'Cursos y congresos en Dermatología en Colombia, Francia, España, Portugal, México y Argentina.',
                ]}
              />
            </div>
            <div>
              <Titulo>MIEMBRO</Titulo>
              <Lista
                items={[
                  'Miembro del Círculo dermatológico del Perú (CIDERM).',
                  'Miembro del Colegio Iberoamericano de Dermatología (CILAD).',
                ]}
              />
            </div>
            <div>
              <Titulo>OTROS CURSOS:</Titulo>
              <Lista
                items={[
                  'Asistente de congresos y conferencista.',
                  'Capacitaciones anuales de: Dermatoscopia tricología, tratamientos láser, dermatología estética, fillers (ácido hialurónico, bioestimuladores y otros) enfermedades de la piel (dermatitis psoriasis y otros).',
                  'Anualmente se capacita en congreso del CIDERM - PERUDERM - PERÚ LÁSER - CILAD - RADLA - MEETING DE LA ACADEMIA AMERICANA.',
                ]}
              />
            </div>
          </Info>
        </div>
      </BloqueDoctor>

      <Separador />

      <BloqueDoctor id="dra-karen">
        <div className={`flex flex-col order-2 md:order-1 px-6 ${PAD_TEXTO_IZQ}`}>
          <Cabecera
            cargo="DERMATÓLOGA CLÍNICA ESPECIALISTA EN LÁSER - TRICOLOGÍA - ESTÉTICA"
            nombre={['DRA. KAREN YOHANNA', 'ANGELES CHUMBIRIZA']}
            cmp="CMP: 81188 - RNE: 48318"
          />

          <Info>
            <div>
              <Titulo>PREGRADO DE MEDICINA HUMANA:</Titulo>
              <p className="font-light">Universidad Nacional Mayor de San Marcos.</p>
            </div>
            <div>
              <Titulo>POSTGRADO DE DERMATOLOGÍA:</Titulo>
              <div className="flex flex-col gap-1">
                <p className="font-light">Hospital Nacional Guillermo Almenara Irigoyen, por la UNFV.</p>
                <p className="font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
              </div>
            </div>
            <div>
              <Titulo>DIPLOMADOS EN:</Titulo>
              <Lista
                items={[
                  'Tricología y patología del pelo por el Colegio Iberoamericano de dermatología - CILAD.',
                  'Dermatología Oncológica / cáncer de piel por el Colegio Iberoamericano de dermatología - CILAD.',
                  'Láser y energías lumínicas por el Colegio Iberoamericano de dermatología - CILAD.',
                  'Patología Ungueal por el Colegio Iberoamericano de dermatología - CILAD.',
                ]}
              />
            </div>
            <div>
              <Titulo>PASANTÍAS Y CAPACITACIONES INTERNACIONALES EN:</Titulo>
              <Lista
                items={[
                  'Hospital Italiano Buenos Aires Argentina : Servicios de Unidad de Tricología, Unidad de Láser y estética , Unidad de manejo de heridas.',
                  'Cursos y Certificaciones en Dermatología en Argentina, México, Brasil, Colombia y Perú.',
                ]}
              />
            </div>
            <div>
              <Titulo>MIEMBRO</Titulo>
              <Lista
                items={[
                  'Miembro de Círculo dermatológico del Perú (CIDERM).',
                  'Miembro del Colegio Iberoamericano de dermatología (CILAD).'
                ]}
              />
            </div>
            <div>
              <Titulo>OTROS CURSOS:</Titulo>
              <Lista
                items={[
                  'Asistente de congresos y cursos de forma anual de: Tricología, terapia láser, dermatoscopia, dermatitis atópica, enfermedades ampollares, dermatología pediátrica, dermatología estética, fillers (ácido hialurónico, toxina botulínica, bioestimuladores).',
                  'Anualmente se capacita del CIDERM - PERUDERM - CILAD - RADLA.',
                ]}
              />
            </div>
          </Info>
        </div>

        <FotoVertical
          lado="derecha"
          src="https://res.cloudinary.com/da47iihxz/image/upload/v1792811934/iv6skes6ezmy3abgxlbr.jpg"
          alt="Dra. Karen Yohanna Angeles Chumbiriza"
        />
      </BloqueDoctor>

      <Separador />

      <BloqueDoctor id="dra-edith">
        <FotoVertical
          lado="izquierda"
          src="https://res.cloudinary.com/da47iihxz/image/upload/v1792811927/hc4ug0j0wheyfq8z7nf9.jpg"
          alt="Dra. Edith Sandra Llancay Medina"
        />

        <div className={`flex flex-col order-2 px-6 ${PAD_TEXTO_DER}`}>
          <Cabecera
            cargo="DERMATÓLOGA CLÍNICA ESPECIALISTA EN LÁSER - TRICOLOGÍA - ESTÉTICA"
            nombre={['DRA. EDITH SANDRA', 'LLANCAY MEDINA']}
            cmp="CMP: 8623 - RNE: 52416"
          />

          <Info>
            <div>
              <Titulo>PREGRADO DE MEDICINA HUMANA:</Titulo>
              <p className="font-light">Universidad Andina del Cusco.</p>
            </div>
            <div>
              <Titulo>POSTGRADO DE DERMATOLOGÍA:</Titulo>
              <div className="flex flex-col gap-1">
                <p className="font-light">Hospital Nacional Guillermo Almenara Irigoyen, por la UNFV.</p>
                <p className="font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
              </div>
            </div>
            <div>
              <Titulo>DIPLOMADOS EN:</Titulo>
              <Lista
                items={[
                  'Tricología y patología del pelo por el Colegio Iberoamericano de dermatología - CILAD.',
                  'Dermatología estética por el Colegio Iberoamericano de dermatología - CILAD',
                  'Dermatología Oncológica / cáncer de piel por el Colegio Iberoamericano de dermatología - CILAD.',
                  'Dermatología en dermatoscopia por el Colegio Iberoamericano de dermatología - CILAD.',
                ]}
              />
            </div>
            <div>
              <Titulo>PASANTÍAS Y CAPACITACIONES INTERNACIONALES EN:</Titulo>
              <Lista
                items={[
                  'Capacitación cirugía dermatología Instituto "Dr. José Barba Rubio" - México',
                  'Capacitación cirugía dermatología Hospital Universitario Mackenzye - Brasil',
                ]}
              />
            </div>
            <div>
              <Titulo>MIEMBRO</Titulo>
              <Lista
                items={[
                  'Miembro de Círculo dermatológico del Perú (CIDERM).',
                  'Miembro del Colegio Iberoamericano de dermatología (CILAD).'
                ]}
              />
            </div>
            <div>
              <Titulo>OTROS CURSOS:</Titulo>
              <Lista
                items={[
                  'Asistente de congresos y cursos anualmente de: Tricología, terapia láser, dermatoscopia, dermatología estética (ácido hialurónico, toxina botulínica, bioestimuladores).',
                  'Anualmente se capacita del CIDERM - PERUDERM - CILAD - RADLA.',
                ]}
              />
            </div>
          </Info>
        </div>
      </BloqueDoctor>

    </section>
  );
};

export default PerfilesDoctores;