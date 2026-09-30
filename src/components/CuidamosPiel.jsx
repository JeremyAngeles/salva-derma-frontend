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
      image: "/card-derma.jpg",
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
      image: "/card-estetica.jpg",
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
      image: "/card-cirugia.jpg",
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
    <section className="relative w-full py-20 bg-white overflow-hidden font-principal">
      
      {/* Fondo superior mejorado con desvanecimiento suave */}
      <div className="absolute top-0 left-0 w-full h-[650px]">
        {/* Capa base con la foto (tiene un color de respaldo para que no se vea blanco si falta la foto) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[#eedbd1]"
          style={{ backgroundImage: "url('/bg-piel.jpg')" }}
        ></div>
        
        {/* Capa de color multiplicada */}
        <div className="absolute inset-0 bg-[#dcbca9] bg-opacity-40 mix-blend-multiply"></div>
        
        {/* DEGRADADO NUEVO: Hace que el fondo se funda suavemente con el blanco de abajo, borrando la línea recta */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        
        {/* Título Principal */}
        <h2 className="text-3xl md:text-5xl text-white text-center font-serif font-light tracking-widest mb-16 drop-shadow-md">
          CUIDAMOS TU PIEL, TE CUIDAMOS A TI
        </h2>

        {/* Grid de las 3 Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          
          {cards.map((card, index) => {
            const isOpen = openCard === index;
            
            return (
              <div key={card.id} className="flex flex-col w-full relative z-20">
                
                {/* 1. Parte Superior: Imagen Principal */}
                <div 
                  className="relative w-full h-[380px] md:h-[450px] rounded-[2rem] overflow-hidden border-4 border-[#e8d1c6] shadow-xl transition-all duration-300 bg-[#c9b7ae]"
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Gradiente oscuro inferior para que el texto sea legible */}
                  <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Contenido de texto sobre la foto */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div className="text-white">
                      <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2">
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <p className="text-xs md:text-sm font-light leading-relaxed text-gray-200">
                          {card.subtitle}
                        </p>
                      )}
                    </div>
                    
                    {/* Botón Flecha */}
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

                {/* 2. Parte Inferior: Lista Desplegable Blanca */}
                <div 
                  className={`bg-white rounded-b-[2rem] w-[95%] mx-auto transition-all duration-500 ease-in-out overflow-hidden shadow-lg border border-gray-100 ${
                    isOpen ? 'max-h-[800px] opacity-100 py-6 px-6 mt-[-1rem] relative z-0' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="flex flex-col gap-0 pt-4">
                    {card.treatments.map((treatment, idx) => (
                      <li 
                        key={idx} 
                        className="text-[#7d7570] text-[13px] md:text-[14px] font-light py-2 border-b border-gray-200 whitespace-pre-line last:border-0"
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