import React from 'react';

const PerfilesDoctores = () => {
  return (
    <section className="w-full bg-[#fcfbf9] py-16 md:py-24 font-principal overflow-hidden flex flex-col gap-16 md:gap-20">
      
      {/* =========================================
          PERFIL 1: DR. HÉCTOR (Foto Derecha)
          ========================================= */}
      <div className="flex flex-col lg:flex-row items-stretch w-full">
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:pr-12 lg:pl-[max(1.5rem,calc(50vw-600px))] py-8 md:py-12">
          
          <div className="border-l-4 border-[#053d57] pl-4 mb-6">
            <h4 className="text-[#88807a] text-[14px] md:text-[15px] font-medium tracking-widest uppercase">
              CIRUJANO PLÁSTICO Y RECONSTRUCTIVO
            </h4>
          </div>

          <h2 className="text-[#053d57] text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.1] mb-2" style={{ fontFamily: 'Alta, serif' }}>
            DR. HÉCTOR FRANCISCO<br />VARGAS CASTILLO
          </h2>
          <p className="text-[#053d57] font-medium text-[15px] md:text-[16px] tracking-wide mb-4">
            CMP: 68988 - RNE: 42156
          </p>
          
          {/* Línea divisoria debajo del CMP */}
          <div className="w-full max-w-[350px] h-px bg-[#dcc4bc] mb-8"></div>

          <div className="flex flex-col gap-6 text-[#88807a]">
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">PREGRADO DE MEDICINA HUMANA:</h5>
              <p className="text-[14px] md:text-[15px] font-light">Universidad San Martín de Porres.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">POSTGRADO DE CIRUGÍA PLÁSTICA Y RECONSTRUCTIVA:</h5>
              <p className="text-[14px] md:text-[15px] font-light">Hospital Nacional Guillermo Almenara Irigoyen, por la USMP.</p>
              <p className="text-[14px] md:text-[15px] font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">DIPLOMADOS EN:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a]">
                <li>Gestión de la calidad en establecimientos de servicios de salud.</li>
                <li>Auditoría médica, control en gestión y evaluación de los servicios de salud.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">PASANTÍAS Y CAPACITACIONES EN:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a]">
                <li>CLÍNICA MORILLAS DE CIRUGÍA PLÁSTICA | Lima - Perú.</li>
                <li>INSTITUTO KIRSCHBAUM DE CIRUGÍA PLÁSTICA | Lima - Perú.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">MIEMBRO</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a]">
                <li>Miembro adscrito de la Sociedad Peruana de Cirugía Plástica (SPCP).</li>
                <li>Miembro de la International Society of Aesthetic Plastic Surgery (ISAPS).</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">OTROS CURSOS:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a] space-y-2 max-w-[650px]">
                <li>Ponente expositor nacional e internacional en Lima, Trujillo, Quito y Guayaquil en módulo facial.</li>
                <li>Asistente de congresos y cursos de forma anual, como: Congreso Ibero-Latinoamericano de Cirugía Plástica, Preservation rhinoplasty latinoamérica, LIMA Master Academy, talleres Hands-On de estética, fillers (ácido hialurónico, toxina botulínica, bioestimuladores).</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-[700px] order-first lg:order-last mb-10 lg:mb-0">
          <img src="/dr-hector.jpg" alt="Dr. Héctor Francisco Vargas Castillo" className="absolute inset-0 w-full h-full object-cover object-top lg:rounded-l-[3rem] shadow-xl" onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full bg-[#dcc4bc] lg:rounded-l-[3rem]' }} />
          <div className="absolute bottom-6 right-6 lg:right-12 flex flex-col items-end gap-2 z-10">
            <span className="text-white text-sm tracking-wide drop-shadow-md font-medium">@doctorhectorplastico</span>
            <div className="flex gap-2.5">
              <a href="#" className="w-8 h-8 rounded-full border-[1.5px] border-white flex items-center justify-center text-white hover:bg-white hover:text-[#053d57] transition-colors shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
              <a href="#" className="w-8 h-8 rounded-full border-[1.5px] border-white flex items-center justify-center text-white hover:bg-white hover:text-[#053d57] transition-colors shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
              <a href="#" className="w-8 h-8 rounded-full border-[1.5px] border-white flex items-center justify-center text-white hover:bg-white hover:text-[#053d57] transition-colors shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.37-1.92 1.62-4.5 2.28-6.9 1.83-2.56-.47-4.79-2.18-5.83-4.56-1.02-2.31-.96-5.04.14-7.3 1.09-2.25 3.32-3.9 5.81-4.26.17-.03.35-.04.53-.06v4.18c-1.6.21-3.08 1.43-3.5 3-.4 1.48.06 3.1 1.19 4.12 1.13 1.02 2.81 1.25 4.23.63 1.45-.63 2.37-2.13 2.39-3.7.04-5.63.02-11.26.03-16.89h1.18z"/></svg></a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea Divisoria */}
      <div className="w-full max-w-[1200px] mx-auto h-px bg-gray-200 hidden lg:block my-2"></div>

      {/* =========================================
          PERFIL 2: DRA. YUVIDTZA (Foto Izquierda)
          ========================================= */}
      <div className="flex flex-col lg:flex-row items-stretch w-full">
        <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-[700px] mb-10 lg:mb-0">
          <img src="/dra-yuvidtza.jpg" alt="Dra. Yuvidtza Andrea Isabel Salazar Carrillo" className="absolute inset-0 w-full h-full object-cover object-top lg:rounded-r-[3rem] shadow-xl" onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full bg-[#dcc4bc] lg:rounded-r-[3rem]' }} />
        </div>

        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:pl-12 lg:pr-[max(1.5rem,calc(50vw-600px))] py-8 md:py-12">
          
          <div className="border-l-4 border-[#053d57] pl-4 mb-6">
            <h4 className="text-[#88807a] text-[14px] md:text-[15px] font-medium tracking-widest uppercase">
              DERMATÓLOGA CLÍNICA ESPECIALISTA<br />EN LÁSER - TRICOLOGÍA - ESTÉTICA
            </h4>
          </div>

          <h2 className="text-[#053d57] text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.1] mb-2" style={{ fontFamily: 'Alta, serif' }}>
            DRA. YUVIDTZA ANDREA<br />ISABEL SALAZAR CARRILLO
          </h2>
          <p className="text-[#053d57] font-medium text-[15px] md:text-[16px] tracking-wide mb-4">
            CMP: 66762 - RNE: 39444
          </p>
          
          <div className="w-full max-w-[350px] h-px bg-[#dcc4bc] mb-8"></div>

          <div className="flex flex-col gap-6 text-[#88807a]">
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">PREGRADO DE MEDICINA HUMANA:</h5>
              <p className="text-[14px] md:text-[15px] font-light">Universidad San Martín de Porres.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">POSTGRADO DE DERMATOLOGÍA:</h5>
              <p className="text-[14px] md:text-[15px] font-light">Universidad Nacional Mayor de San Marcos.</p>
              <p className="text-[14px] md:text-[15px] font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">MÁSTER EN LÁSER DERMATOLÓGICO Y ENERGÍAS LUMÍNICAS:</h5>
              <p className="text-[14px] md:text-[15px] font-light">Universidad de Alcalá (España)</p>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">DIPLOMADO EN:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a] space-y-1">
                <li>Tricología y enfermedades del pelo por el Colegio Iberolatinoamericano de dermatología - CILAD.</li>
                <li>Láser y energías lumínicas por Colegio Iberolatinoamericano de dermatología - CILAD.</li>
                <li>Gestión de la calidad en establecimientos de servicios de salud.</li>
                <li>Auditoría médica, control en gestión y evaluación de los servicios de salud.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">PASANTÍAS Y CAPACITACIONES INTERNACIONALES EN:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a] space-y-1">
                <li>Capacitación Láser Hospital Ramón y Cajal - España.</li>
                <li>Capacitación en tricología Hospital Ramón y Cajal - España.</li>
                <li>Capacitación en cirugía dermatológica Instituto "Dr. José Barba Rubio" - México.</li>
                <li>Capacitación en Cadaver Lab ICLO Verona Italia.</li>
                <li>Capacitación en Láser DEKA ACADEMY - Argentina.</li>
                <li>Cursos y congresos en Dermatología en Colombia, Francia, España, Portugal, México y Argentina.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">MIEMBRO</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a]">
                <li>Miembro del Círculo dermatológico del Perú (CIDERM).</li>
                <li>Miembro del Colegio Iberolatinoamericano de Dermatología (CILAD).</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">OTROS CURSOS:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a] space-y-2 max-w-[650px]">
                <li>Asistente de congresos y conferencista.</li>
                <li>Capacitaciones anuales de: Dermatoscopia tricología, tratamientos láser, dermatología estética, fillers (ácido hialurónico, bioestimuladores y otros) enfermedades de la piel (dermatitis psoriasis y otros).</li>
                <li>Anualmente se capacita en congreso del CIDERM - PERUDERM - PERÚ<br/>LÁSER - CILAD - RADLA - MEETING DE LA ACADEMIA AMERICANA.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Línea Divisoria */}
      <div className="w-full max-w-[1200px] mx-auto h-px bg-gray-200 hidden lg:block my-2"></div>

      {/* =========================================
          PERFIL 3: DRA. KAREN (Foto Derecha)
          ========================================= */}
      <div className="flex flex-col lg:flex-row items-stretch w-full">
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:pr-12 lg:pl-[max(1.5rem,calc(50vw-600px))] py-8 md:py-12">
          
          <div className="border-l-4 border-[#053d57] pl-4 mb-6">
            <h4 className="text-[#88807a] text-[14px] md:text-[15px] font-medium tracking-widest uppercase">
              DERMATÓLOGA CLÍNICA ESPECIALISTA<br />EN LÁSER - TRICOLOGÍA - ESTÉTICA
            </h4>
          </div>

          <h2 className="text-[#053d57] text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.1] mb-2" style={{ fontFamily: 'Alta, serif' }}>
            DRA. KAREN YOHANNA<br />ANGELES CHUMBIRIZA
          </h2>
          <p className="text-[#053d57] font-medium text-[15px] md:text-[16px] tracking-wide mb-4">
            CMP: 81188 - RNE: 48318
          </p>

          <div className="w-full max-w-[350px] h-px bg-[#dcc4bc] mb-8"></div>

          <div className="flex flex-col gap-6 text-[#88807a]">
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">PREGRADO DE MEDICINA HUMANA:</h5>
              <p className="text-[14px] md:text-[15px] font-light">Universidad Nacional Mayor de San Marcos.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">POSTGRADO DE DERMATOLOGÍA:</h5>
              <p className="text-[14px] md:text-[15px] font-light">Hospital Nacional Guillermo Almenara Irigoyen, por la UNFV.</p>
              <p className="text-[14px] md:text-[15px] font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">DIPLOMADOS EN:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a] space-y-1">
                <li>Tricología y patología del pelo por el Colegio Iberolatinoamericano de dermatología - CILAD.</li>
                <li>Dermatología Oncológica / cáncer de piel por el Colegio Iberolatinoamericano de dermatología - CILAD.</li>
                <li>Láser y energías lumínicas por el Colegio Iberolatinoamericano de dermatología - CILAD.</li>
                <li>Patología Ungueal por el Colegio Iberolatinoamericano de dermatología - CILAD.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">PASANTÍAS Y CAPACITACIONES INTERNACIONALES EN:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a] space-y-1">
                <li>Hospital Italiano Buenos Aires Argentina : Servicios de Unidad de Tricología, Unidad de Láser y estética, Unidad de manejo de heridas.</li>
                <li>Cursos y Certificaciones en Dermatología en Argentina, México, Brasil, Colombia y Perú.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">MIEMBRO</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a]">
                <li>Miembro de Círculo dermatológico del Perú (CIDERM).</li>
                <li>Miembro del Colegio Iberolatinoamericano de dermatología (CILAD).</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">OTROS CURSOS:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a] space-y-2 max-w-[650px]">
                <li>Asistente de congresos y cursos de forma anual de: Tricología, terapia láser, dermatoscopia, dermatitis atópica, enfermedades ampollares, dermatología pediatrica, dermatología estética, fillers (ácido hialurónico, toxina botulínica, bioestimuladores).</li>
                <li>Anualmente se capacita del CIDERM - PERUDERM - CILAD - RADLA.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-[700px] order-first lg:order-last mb-10 lg:mb-0">
          <img src="/dra-karen.jpg" alt="Dra. Karen Yohanna Angeles Chumbiriza" className="absolute inset-0 w-full h-full object-cover object-top lg:rounded-l-[3rem] shadow-xl" onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full bg-[#dcc4bc] lg:rounded-l-[3rem]' }} />
        </div>
      </div>

      {/* Línea Divisoria */}
      <div className="w-full max-w-[1200px] mx-auto h-px bg-gray-200 hidden lg:block my-2"></div>

      {/* =========================================
          PERFIL 4: DRA. EDITH (Foto Izquierda)
          ========================================= */}
      <div className="flex flex-col lg:flex-row items-stretch w-full">
        <div className="w-full lg:w-[45%] relative min-h-[500px] lg:min-h-[700px] mb-10 lg:mb-0">
          <img src="/dra-edith.jpg" alt="Dra. Edith Sandra Llancay Medina" className="absolute inset-0 w-full h-full object-cover object-top lg:rounded-r-[3rem] shadow-xl" onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full bg-[#dcc4bc] lg:rounded-r-[3rem]' }} />
        </div>

        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:pl-12 lg:pr-[max(1.5rem,calc(50vw-600px))] py-8 md:py-12">
          
          <div className="border-l-4 border-[#053d57] pl-4 mb-6">
            <h4 className="text-[#88807a] text-[14px] md:text-[15px] font-medium tracking-widest uppercase">
              DERMATÓLOGA CLÍNICA ESPECIALISTA<br />EN LÁSER - TRICOLOGÍA - ESTÉTICA
            </h4>
          </div>

          <h2 className="text-[#053d57] text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.1] mb-2" style={{ fontFamily: 'Alta, serif' }}>
            DRA. EDITH SANDRA<br />LLANCAY MEDINA
          </h2>
          <p className="text-[#053d57] font-medium text-[15px] md:text-[16px] tracking-wide mb-4">
            CMP: 8623 - RNE: 52416
          </p>
          
          <div className="w-full max-w-[350px] h-px bg-[#dcc4bc] mb-8"></div>

          <div className="flex flex-col gap-6 text-[#88807a]">
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">PREGRADO DE MEDICINA HUMANA:</h5>
              <p className="text-[14px] md:text-[15px] font-light">Universidad Andina del Cusco.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">POSTGRADO DE DERMATOLOGÍA:</h5>
              <p className="text-[14px] md:text-[15px] font-light">Hospital Nacional Guillermo Almenara Irigoyen, por la UNFV.</p>
              <p className="text-[14px] md:text-[15px] font-light">Residencia médica en el Hospital Guillermo Almenara Essalud.</p>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">DIPLOMADOS EN:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a] space-y-1">
                <li>Tricología y patología del pelo por el Colegio Iberolatinoamericano de dermatología - CILAD.</li>
                <li>Dermatología estética por el Colegio Iberolatinoamericano de dermatología - CILAD.</li>
                <li>Dermatología Oncológica / cáncer de piel por el Colegio Iberolatinoamericano de dermatología - CILAD.</li>
                <li>Dermatología en dermatoscopia por el Colegio Iberolatinoamericano de dermatología - CILAD.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">PASANTÍAS Y CAPACITACIONES INTERNACIONALES EN:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a] space-y-1">
                <li>Capacitación cirugía dermatología Instituto "Dr. José Barba Rubio" - México.</li>
                <li>Capacitación cirugía dermatología Hospital Universitario Mackenzye - Brasil.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">MIEMBRO</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a]">
                <li>Miembro de Círculo dermatológico del Perú (CIDERM).</li>
                <li>Miembro del Colegio Iberolatinoamericano de dermatología (CILAD).</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[15px] md:text-[16px] mb-1">OTROS CURSOS:</h5>
              <ul className="list-disc pl-5 text-[14px] md:text-[15px] font-light marker:text-[#88807a] space-y-2 max-w-[650px]">
                <li>Asistente de congresos y cursos anualmente de: Tricología, terapia láser, dermatoscopia, dermatología estética (ácido hialurónico, toxina botulínica, bioestimuladores).</li>
                <li>Anualmente se capacita del CIDERM - PERUDERM - CILAD - RADLA.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PerfilesDoctores;