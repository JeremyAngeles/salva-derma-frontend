import React from 'react';

const StaffMedicos = () => {
  const doctors = [
    {
      id: 1,
      name: (<>DR. HÉCTOR FRANCISCO<br/>VARGAS CASTILLO</>),
      specialty: "CIRUJANO PLÁSTICO RECONSTRUCTIVO",
      cmp: "68988",
      rne: "42156",
      image: "/doc-hector.jpg"
    },
    {
      id: 2,
      name: (<>DRA. YUVIDTZA ANDREA<br/>ISABEL SALAZAR CARRILLO</>),
      specialty: "DERMATÓLOGA",
      cmp: "66762",
      rne: "39444",
      image: "/doc-yuvidtza.jpg"
    },
    {
      id: 3,
      name: (<>DRA. KAREN YOHANNA<br/>ANGELES CHUMBIRIZA</>),
      specialty: "DERMATÓLOGA",
      cmp: "81188",
      rne: "48318",
      image: "/doc-karen.jpg"
    },
    {
      id: 4,
      name: (<>DRA. EDITH SANDRA<br/>LLANCAY MEDINA</>),
      specialty: "DERMATÓLOGA",
      cmp: "86231",
      rne: "052416",
      image: null, 
      bgColor: "bg-[#593433]"
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-24 bg-[#eef0f2] overflow-hidden font-principal flex justify-center">
      
      {/* Imagen de fondo a pantalla completa pero muy tenue */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20 bg-cover bg-center bg-no-repeat mix-blend-multiply"
        style={{ backgroundImage: "url('/bg-staff.jpg')" }}
      ></div>

      {/* Contenedor principal estructurado en 12 columnas para un control exacto */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos (Ocupa 5 de 12 columnas)
            ========================================= */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-4xl lg:text-[2.8rem] text-[#053d57] font-serif leading-[1.1] tracking-wide">
            <span className="font-light">CONOCE A NUESTRO</span><br />
            <span className="font-normal">STAFF DE MÉDICOS</span><br />
            <span className="font-normal">ESPECIALISTAS</span>
          </h2>
          
          {/* Línea divisoria */}
          <div className="w-32 h-[3px] bg-[#cda99c] my-6"></div>
          
          {/* Párrafo con max-w-[360px] para forzar los saltos de línea exactos del diseño */}
          <p className="text-[#6b6662] text-[15px] font-light leading-[1.6] max-w-[360px]">
            Cada especialista aporta su experiencia<br/>
            y conocimientos para ofrecer un<br/>
            abordaje integral, y <strong className="font-medium text-[#5c5652]">BAJO</strong><br/>
            <strong className="font-medium text-[#5c5652]">ESTÁNDARES DE CALIDAD</strong> que ofrece<br/>
            nuestra clínica. Priorizando las<br/>
            necesidades de cada paciente y<br/>
            acompañándolo en cada etapa de su<br/>
            atención.
          </p>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Tarjetas de Doctores (Ocupa 7 de 12 columnas)
            ========================================= */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {doctors.map((doc) => (
            <div 
              key={doc.id} 
              className="flex items-center justify-between bg-white bg-opacity-40 backdrop-blur-md rounded-full py-2.5 px-6 md:px-8 shadow-sm border border-white border-opacity-60"
            >
              {/* Información del doctor */}
              <div className="flex flex-col flex-1 pr-2">
                <h3 className="text-[#5c5652] font-semibold text-[13px] md:text-[14px] leading-[1.15]">
                  {doc.name}
                </h3>
                <p className="text-[#88807a] text-[10px] md:text-[11px] font-light mt-1 tracking-widest uppercase">
                  {doc.specialty}
                </p>
                <p className="text-[#6c6662] text-[13px] md:text-[14px] mt-3">
                  CMP {doc.cmp} <span className="mx-1.5 text-[#a8a19c]">|</span> RNE {doc.rne}
                </p>
              </div>

              {/* Imagen del doctor (Círculo perfecto a la derecha) */}
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-inner ml-2">
                {doc.image ? (
                  <img 
                    src={doc.image} 
                    alt="Doctor" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full ${doc.bgColor}`}></div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StaffMedicos;