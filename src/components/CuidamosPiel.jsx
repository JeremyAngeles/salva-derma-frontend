import React, { useState } from 'react';

const CuidamosPiel = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const cards = [
    {
      id: 0,
      title: "DERMATOLOGÍA",
      subtitle: (
        <>
          • D. Láser (Unidad dermoláser)<br/>
          • D. Clínica y tricología<br/>
          • D. Estética
        </>
      ),
      image: "https://res.cloudinary.com/da47iihxz/image/upload/v1793054310/ikmz1a4llpwmufjaghqn.jpg",
      treatments: [
        "Acné",
        "Rosácea/Telangiectasias",
        "Melasma/Manchas",
        "Dermatitis/Cáncer de piel",
        "Alopecia/Mesoterapia capilar",
        "Cicatrices/Queloides/C. Acné",
        "Tratamientos Láser",
        "Entre otros procedimientos."
      ]
    },
    {
      id: 1,
      title: (<>TRATAMIENTOS<br/>ESTÉTICOS POR<br/>ESPECIALISTAS</>),
      subtitle: null,
      image: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792529031/ttratamiento.jpg",
      treatments: [
        "Bioestimuladores de Colágeno",
        "Toxina Botulínica",
        "Ácido Hialurónico",
        "Plasma rico en plaquetas",
        "Láseres Fraccionados/\nPicosegundos/Vascular",
        "Micropunciones/\nNanopore/Peelings",
        "Mesoterapias/\nExosomas/PDRN Salmón",
        "Entre otros procedimientos."
      ]
    },
    {
      id: 2,
      title: "CIRUGÍA PLÁSTICA",
      subtitle: (
        <>
          • Cirugía plástica estética<br/>
          • Cirugía plástica y<br/>
          &nbsp;&nbsp;reconstructiva
        </>
      ),
      image: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792530710/plasticaa.png",
      treatments: [
        "Otoplastia",
        "Rinoseptoplastia",
        "Armonización facial\n(liposucción de Papada + bichectomía)",
        "Lifting facial y de cola de ceja",
        "Aumento y reducción de mamas",
        "Lipoabdominoplastia",
        "Ginecomastia",
        "Braquioplastia",
        "Lipotransferencia",
        "Entre otros procedimientos."
      ]
    }
  ];

  return (
    <section className="relative w-full py-14 lg:py-20 bg-white overflow-hidden font-principal">
      
      {/* Fondo superior: en móvil/tablet cubre casi toda la sección como en la referencia, en PC mantiene 750px */}
      <div className="absolute top-0 left-0 w-full h-[93%] lg:h-[750px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[#eedbd1]"
          style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792529033/servis.png')" }}
        ></div>
        
        <div className="absolute inset-0 bg-[#dcbca9] bg-opacity-40 mix-blend-multiply"></div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 lg:h-48 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-0 lg:px-10">
        
        {/* Título Principal */}
        <div className="w-full flex justify-center mt-8 lg:mt-24 mb-10 lg:mb-16 px-4">
          <h2 
            className="text-[1.9rem] min-[390px]:text-[2.2rem] sm:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-[1.08] lg:leading-[1.2] text-white text-center tracking-tight drop-shadow-md"
            style={{ fontFamily: 'Alta, serif' }}
          >
            <span className="lg:hidden">
              CUIDAMOS TU PIEL, TE<br />
              CUIDAMOS A TI
            </span>
            <span className="hidden lg:inline whitespace-nowrap">
              CUIDAMOS TU PIEL, TE CUIDAMOS A TI
            </span>
          </h2>
        </div>

        {/* =========================================
            VISTA CELULAR Y TABLET (< lg): Tarjetas horizontales fijas
            ========================================= */}
        <div className="flex flex-col gap-5 sm:gap-7 px-4 sm:px-8 max-w-[720px] mx-auto lg:hidden pb-4">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="flex flex-row w-full bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-xl overflow-hidden min-h-[250px] sm:min-h-[300px]"
            >
              {/* Mitad Izquierda: Imagen con bordes redondeados */}
              <div className="relative w-[46%] sm:w-[45%] shrink-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-[#c9b7ae]">
                <img 
                  src={card.image} 
                  alt="Especialidad" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-3.5 sm:bottom-5 left-3 sm:left-5 right-2 text-white">
                  <h3 className="text-[13px] min-[390px]:text-[14.5px] sm:text-lg font-bold leading-[1.15] mb-1">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="text-[9.5px] min-[390px]:text-[10.5px] sm:text-xs font-light leading-[1.3] text-gray-200">
                      {card.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Mitad Derecha: Lista de tratamientos siempre visible */}
              <div className="flex-1 py-3 px-3 min-[390px]:px-4 sm:py-5 sm:px-6 flex flex-col justify-center bg-white">
                <ul className="flex flex-col">
                  {card.treatments.map((treatment, idx) => (
                    <li 
                      key={idx} 
                      className="text-[#7d7570] text-[9.5px] min-[390px]:text-[10.5px] sm:text-[13px] font-light py-1 sm:py-1.5 border-b border-[#053d57]/60 whitespace-pre-line last:border-0 leading-[1.2]"
                    >
                      {treatment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            VISTA PC (lg:): Grid de 3 columnas con desplegable intacto
            ========================================= */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-start pb-10">
          {cards.map((card, index) => {
            const isOpen = openCard === index;
            
            return (
              <div 
                key={card.id} 
                className="flex flex-col w-full relative z-20"
              >
                <div 
                  className="relative w-full h-[450px] rounded-[2rem] overflow-hidden border-4 border-[#e8d1c6] shadow-xl transition-all duration-300 bg-[#c9b7ae]"
                >
                  <img 
                    src={card.image} 
                    alt="Especialidad" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold leading-tight mb-2">
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <p className="text-sm font-light leading-relaxed text-gray-200">
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => toggleCard(index)}
                      className={`flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-50 flex items-center justify-center transition-transform duration-300 hover:bg-opacity-40 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div 
                  className={`bg-white rounded-b-[2rem] w-[95%] mx-auto transition-all duration-500 ease-in-out overflow-hidden shadow-lg border border-gray-100 ${
                    isOpen ? 'max-h-[800px] opacity-100 py-6 px-6 mt-[-1rem] relative z-0' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="flex flex-col gap-0 pt-4">
                    {card.treatments.map((treatment, idx) => (
                      <li 
                        key={idx} 
                        className="text-[#7d7570] text-[14px] font-light py-2 border-b border-gray-200 whitespace-pre-line last:border-0"
                      >
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CuidamosPiel;