import React from 'react';

/* Padding exterior del texto para alinearlo con el contenedor de 1250px del resto de la web */
const PAD_TEXTO_IZQ = 'md:pl-[max(1.5rem,calc((100vw-1250px)/2+1.5rem))] md:pr-12 lg:pr-16';
const PAD_TEXTO_DER = 'md:pl-12 lg:pl-16 md:pr-[max(1.5rem,calc((100vw-1250px)/2+1.5rem))]';

/* Aumenté el gap a gap-6 md:gap-7 para separar notoriamente cada bloque de información */
const INFO = 'flex flex-col gap-6 md:gap-7 text-[#88807a] text-sm md:text-base leading-tight';

/* mb-1.5 para separar el título del contenido que le sigue */
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

/* Foto vertical (3/4) */
const FotoVertical = ({ src, alt, lado }) => {
  const esDerecha = lado === 'derecha';
  return (
    <div
      className={`w-full flex justify-center px-6 md:px-0 ${
        esDerecha ? 'order-1 md:order-2 md:justify-end' : 'order-1 md:justify-start'
      }`}
    >
      <div
        className={`w-full max-w-[480px] md:max-w-[720px] aspect-[3/4] overflow-hidden shadow-lg bg-[#dcc4bc]/20 rounded-[2rem] ${
          esDerecha ? 'md:rounded-l-[2.5rem] md:rounded-r-none' : 'md:rounded-r-[2.5rem] md:rounded-l-none'
        }`}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
      </div>
    </div>
  );
};

const Cabecera = ({ cargo, nombre, cmp }) => (
  <>
    <div className="border-l-4 border-[#053d57] pl-3 mb-3">
      <h4 className="text-[#88807a] text-xs md:text-sm font-medium tracking-widest uppercase">{cargo}</h4>
    </div>
    <h2
      className="text-[#053d57] text-2xl md:text-3xl lg:text-4xl leading-[1.1] mb-1"
      style={{ fontFamily: 'Alta, serif' }}
    >
      {nombre[0]}
      <br />
      {nombre[1]}
    </h2>
    <p className="text-[#053d57] font-medium text-sm md:text-base tracking-wide mb-2">{cmp}</p>
    <div className="w-full max-w-[280px] h-px bg-[#dcc4bc] mb-6"></div>
  </>
);

const Separador = () => <div className="w-full max-w-[1000px] mx-auto h-px bg-[#e6e2de]"></div>;

const PerfilesDoctores = () => {
  return (
    <section className="w-full bg-[#fcfbf9] py-16 md:py-24 font-principal overflow-hidden flex flex-col gap-20 md:gap-28">

      {/* =========================================
          PERFIL 1: DR. HÉCTOR (Foto Derecha)
          ========================================= */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center">
        <div className={`flex flex-col order-2 md:order-1 px-6 ${PAD_TEXTO_IZQ}`}>
          <Cabecera
            cargo="CIRUJANO PLÁSTICO Y RECONSTRUCTIVO"
            nombre={['DR. HÉCTOR FRANCISCO', 'VARGAS CASTILLO']}
            cmp="CMP: 68988 - RNE: 42156"
          />

          <div className={INFO}>
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
          </div>
        </div>

        <FotoVertical
          lado="derecha"
          src="https://res.cloudinary.com/da47iihxz/image/upload/v1792811935/iwtejivndkcldgwzhjgd.jpg"
          alt="Dr. Héctor Francisco Vargas Castillo"
        />
      </div>

      <Separador />

      {/* =========================================
          PERFIL 2: DRA. YUVIDTZA (Foto Izquierda)
          ========================================= */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center">
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

          <div className={INFO}>
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
          </div>
        </div>
      </div>

      <Separador />

      {/* =========================================
          PERFIL 3: DRA. KAREN (Foto Derecha)
          ========================================= */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center">
        <div className={`flex flex-col order-2 md:order-1 px-6 ${PAD_TEXTO_IZQ}`}>
          <Cabecera
            cargo="DERMATÓLOGA CLÍNICA ESPECIALISTA EN LÁSER - TRICOLOGÍA - ESTÉTICA"
            nombre={['DRA. KAREN YOHANNA', 'ANGELES CHUMBIRIZA']}
            cmp="CMP: 81188 - RNE: 48318"
          />

          <div className={INFO}>
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
          </div>
        </div>

        <FotoVertical
          lado="derecha"
          src="https://res.cloudinary.com/da47iihxz/image/upload/v1792811934/iv6skes6ezmy3abgxlbr.jpg"
          alt="Dra. Karen Yohanna Angeles Chumbiriza"
        />
      </div>

      <Separador />

      {/* =========================================
          PERFIL 4: DRA. EDITH (Foto Izquierda)
          ========================================= */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center">
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

          <div className={INFO}>
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
          </div>
        </div>
      </div>

    </section>
  );
};

export default PerfilesDoctores;