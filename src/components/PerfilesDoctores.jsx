import React from 'react';

const PerfilesDoctores = () => {
  return (
    <section className="w-full bg-[#fcfbf9] py-16 md:py-24 font-principal overflow-hidden flex flex-col gap-20 md:gap-28">
      
      {/* =========================================
          PERFIL 1: DR. HÉCTOR (Texto Izquierda, Foto Derecha)
          ========================================= */}
      <div className="w-full max-w-[1250px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Columna de Texto */}
        <div className="flex flex-col">
          <div className="border-l-4 border-[#053d57] pl-3 mb-4">
            <h4 className="text-[#88807a] text-xs md:text-sm font-medium tracking-widest uppercase">
              CIRUJANO PLÁSTICO Y RECONSTRUCTIVO
            </h4>
          </div>

          <h2 className="text-[#053d57] text-2xl md:text-3xl lg:text-4xl leading-[1.15] mb-2" style={{ fontFamily: 'Alta, serif' }}>
            DR. HÉCTOR FRANCISCO<br />VARGAS CASTILLO
          </h2>
          <p className="text-[#053d57] font-medium text-sm md:text-base tracking-wide mb-3">
            CMP: 68988 - RNE: 42156
          </p>
          
          <div className="w-full max-w-[280px] h-px bg-[#dcc4bc] mb-6"></div>

          <div className="flex flex-col gap-4 text-[#88807a] text-xs md:text-sm leading-relaxed">
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">PREGRADO DE MEDICINA HUMANA:</h5>
              <p className="font-light">Universidad San Martín de Porres.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">POSTGRADO DE CIRUGÍA PLÁSTICA Y RECONSTRUCTIVA:</h5>
              <p className="font-light">Hospital Nacional Guillermo Almenara Irigoyen, por la USMP.</p>
              <p className="font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">DIPLOMADOS EN:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>Gestión de la calidad en establecimientos de servicios de salud.</li>
                <li>Auditoría médica, control en gestión y evaluación de los servicios de salud.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">PASANTÍAS Y CAPACITACIONES EN:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>CLÍNICA MORILLAS DE CIRUGÍA PLÁSTICA | Lima - Perú.</li>
                <li>INSTITUTO KIRSCHBAUM DE CIRUGÍA PLÁSTICA | Lima - Perú.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">MIEMBRO:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>Miembro adscrito de la Sociedad Peruana de Cirugía Plástica (SPCP).</li>
                <li>Miembro de la International Society of Aesthetic Plastic Surgery (ISAPS).</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">OTROS CURSOS:</h5>
              <ul className="list-disc pl-4 font-light space-y-1">
                <li>Ponente expositor nacional e internacional en Lima, Trujillo, Quito y Guayaquil en módulo facial.</li>
                <li>Asistente de congresos y cursos de forma anual: Congreso Ibero-Latinoamericano de Cirugía Plástica, Preservation rhinoplasty latinoamérica, LIMA Master Academy, talleres Hands-On de estética, fillers (ácido hialurónico, toxina botulínica, bioestimuladores).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Columna de Imagen */}
        <div className="relative w-full h-[450px] md:h-[520px] rounded-[2rem] overflow-hidden shadow-lg bg-[#dcc4bc]/20">
          <img 
            src="https://res.cloudinary.com/da47iihxz/image/upload/v1792811935/iwtejivndkcldgwzhjgd.jpg" 
            alt="Dr. Héctor Francisco Vargas Castillo" 
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>

      <div className="w-full max-w-[1000px] mx-auto h-px bg-[#e6e2de]"></div>

      {/* =========================================
          PERFIL 2: DRA. YUVIDTZA (Foto Izquierda, Texto Derecha)
          ========================================= */}
      <div className="w-full max-w-[1250px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Columna de Imagen (Orden invertido en PC) */}
        <div className="relative w-full h-[450px] md:h-[520px] rounded-[2rem] overflow-hidden shadow-lg bg-[#dcc4bc]/20 order-first lg:order-none">
          <img 
            src="https://res.cloudinary.com/da47iihxz/image/upload/v1792811936/iwyzlo6jlf6ztgjfz5gc.jpg" 
            alt="Dra. Yuvidtza Andrea Isabel Salazar Carrillo" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Columna de Texto */}
        <div className="flex flex-col">
          <div className="border-l-4 border-[#053d57] pl-3 mb-4">
            <h4 className="text-[#88807a] text-xs md:text-sm font-medium tracking-widest uppercase">
              DERMATÓLOGA CLÍNICA ESPECIALISTA EN LÁSER - TRICOLOGÍA - ESTÉTICA
            </h4>
          </div>

          <h2 className="text-[#053d57] text-2xl md:text-3xl lg:text-4xl leading-[1.15] mb-2" style={{ fontFamily: 'Alta, serif' }}>
            DRA. YUVIDTZA ANDREA<br />ISABEL SALAZAR CARRILLO
          </h2>
          <p className="text-[#053d57] font-medium text-sm md:text-base tracking-wide mb-3">
            CMP: 66762 - RNE: 39444
          </p>
          
          <div className="w-full max-w-[280px] h-px bg-[#dcc4bc] mb-6"></div>

          <div className="flex flex-col gap-4 text-[#88807a] text-xs md:text-sm leading-relaxed">
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">PREGRADO DE MEDICINA HUMANA:</h5>
              <p className="font-light">Universidad San Martín de Porres.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">POSTGRADO DE DERMATOLOGÍA:</h5>
              <p className="font-light">Universidad Nacional Mayor de San Marcos.</p>
              <p className="font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">MÁSTER EN LÁSER DERMATOLÓGICO Y ENERGÍAS LUMÍNICAS:</h5>
              <p className="font-light">Universidad de Alcalá (España)</p>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">DIPLOMADOS EN:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>Tricología y enfermedades del pelo por CILAD.</li>
                <li>Láser y energías lumínicas por CILAD.</li>
                <li>Gestión de la calidad y auditoría médica en salud.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">PASANTÍAS Y CAPACITACIONES INTERNACIONALES:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>Hospital Ramón y Cajal (Láser y Tricología) - España.</li>
                <li>Instituto "Dr. José Barba Rubio" - México.</li>
                <li>Cadaver Lab ICLO Verona - Italia / DEKA ACADEMY - Argentina.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">MIEMBRO:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>Miembro del Círculo Dermatológico del Perú (CIDERM) y CILAD.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full max-w-[1000px] mx-auto h-px bg-[#e6e2de]"></div>

      {/* =========================================
          PERFIL 3: DRA. KAREN (Texto Izquierda, Foto Derecha)
          ========================================= */}
      <div className="w-full max-w-[1250px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div className="flex flex-col">
          <div className="border-l-4 border-[#053d57] pl-3 mb-4">
            <h4 className="text-[#88807a] text-xs md:text-sm font-medium tracking-widest uppercase">
              DERMATÓLOGA CLÍNICA ESPECIALISTA EN LÁSER - TRICOLOGÍA - ESTÉTICA
            </h4>
          </div>

          <h2 className="text-[#053d57] text-2xl md:text-3xl lg:text-4xl leading-[1.15] mb-2" style={{ fontFamily: 'Alta, serif' }}>
            DRA. KAREN YOHANNA<br />ANGELES CHUMBIRIZA
          </h2>
          <p className="text-[#053d57] font-medium text-sm md:text-base tracking-wide mb-3">
            CMP: 81188 - RNE: 48318
          </p>

          <div className="w-full max-w-[280px] h-px bg-[#dcc4bc] mb-6"></div>

          <div className="flex flex-col gap-4 text-[#88807a] text-xs md:text-sm leading-relaxed">
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">PREGRADO DE MEDICINA HUMANA:</h5>
              <p className="font-light">Universidad Nacional Mayor de San Marcos.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">POSTGRADO DE DERMATOLOGÍA:</h5>
              <p className="font-light">Hospital Nacional Guillermo Almenara Irigoyen, por la UNFV.</p>
              <p className="font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">DIPLOMADOS EN:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>Tricología y patología del pelo por CILAD.</li>
                <li>Dermatología Oncológica / cáncer de piel por CILAD.</li>
                <li>Láser y energías lumínicas por CILAD.</li>
                <li>Patología Ungueal por CILAD.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">PASANTÍAS Y CAPACITACIONES INTERNACIONALES:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>Hospital Italiano Buenos Aires (Tricología, Láser, Heridas) - Argentina.</li>
                <li>Certificaciones en Dermatología en Argentina, México, Brasil, Colombia y Perú.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">MIEMBRO:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>Miembro de CIDERM y CILAD.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[450px] md:h-[520px] rounded-[2rem] overflow-hidden shadow-lg bg-[#dcc4bc]/20">
          <img 
            src="https://res.cloudinary.com/da47iihxz/image/upload/v1792811934/iv6skes6ezmy3abgxlbr.jpg" 
            alt="Dra. Karen Yohanna Angeles Chumbiriza" 
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>

      <div className="w-full max-w-[1000px] mx-auto h-px bg-[#e6e2de]"></div>

      {/* =========================================
          PERFIL 4: DRA. EDITH (Foto Izquierda, Texto Derecha)
          ========================================= */}
      <div className="w-full max-w-[1250px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div className="relative w-full h-[450px] md:h-[520px] rounded-[2rem] overflow-hidden shadow-lg bg-[#dcc4bc]/20 order-first lg:order-none">
          <img 
            src="https://res.cloudinary.com/da47iihxz/image/upload/v1792811927/hc4ug0j0wheyfq8z7nf9.jpg" 
            alt="Dra. Edith Sandra Llancay Medina" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="flex flex-col">
          <div className="border-l-4 border-[#053d57] pl-3 mb-4">
            <h4 className="text-[#88807a] text-xs md:text-sm font-medium tracking-widest uppercase">
              DERMATÓLOGA CLÍNICA ESPECIALISTA EN LÁSER - TRICOLOGÍA - ESTÉTICA
            </h4>
          </div>

          <h2 className="text-[#053d57] text-2xl md:text-3xl lg:text-4xl leading-[1.15] mb-2" style={{ fontFamily: 'Alta, serif' }}>
            DRA. EDITH SANDRA<br />LLANCAY MEDINA
          </h2>
          <p className="text-[#053d57] font-medium text-sm md:text-base tracking-wide mb-3">
            CMP: 8623 - RNE: 52416
          </p>
          
          <div className="w-full max-w-[280px] h-px bg-[#dcc4bc] mb-6"></div>

          <div className="flex flex-col gap-4 text-[#88807a] text-xs md:text-sm leading-relaxed">
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">PREGRADO DE MEDICINA HUMANA:</h5>
              <p className="font-light">Universidad Andina del Cusco.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">POSTGRADO DE DERMATOLOGÍA:</h5>
              <p className="font-light">Hospital Nacional Guillermo Almenara Irigoyen, por la UNFV.</p>
              <p className="font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">DIPLOMADOS EN:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>Tricología, Dermatología Estética, Oncológica y Dermatoscopia por CILAD.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">PASANTÍAS Y CAPACITACIONES INTERNACIONALES:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>Instituto "Dr. José Barba Rubio" - México.</li>
                <li>Hospital Universitario Mackenzye - Brasil.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#053d57] mb-0.5">MIEMBRO:</h5>
              <ul className="list-disc pl-4 font-light space-y-0.5">
                <li>Miembro de CIDERM y CILAD.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default PerfilesDoctores;