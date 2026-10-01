import React, { useState, useEffect, useRef } from 'react';

const CuidamosPiel = () => {
  const [openCard, setOpenCard] = useState(null);
  
  // Referencia al contenedor del carrusel para móvil
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Efecto para el auto-desplazamiento en móvil cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      // Solo hacer auto-scroll si estamos en una pantalla pequeña (móvil)
      if (window.innerWidth < 768 && carouselRef.current) {
        const nextIndex = (currentIndex + 1) % cards.length;
        setCurrentIndex(nextIndex);
        
        const cardWidth = carouselRef.current.offsetWidth;
        carouselRef.current.scrollTo({
          left: nextIndex * cardWidth,
          behavior: 'smooth'
        });
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, cards.length]);

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden font-principal">
      
      {/* Fondo superior mejorado con desvanecimiento suave */}
      <div className="absolute top-0 left-0 w-full h-[650px] md:h-[750px]">
        {/* Capa base con la foto */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[#eedbd1]"
          style={{ backgroundImage: "url('/bg-piel.jpg')" }}
        ></div>
        
        {/* Capa de color multiplicada */}
        <div className="absolute inset-0 bg-[#dcbca9] bg-opacity-40 mix-blend-multiply"></div>
        
        {/* DEGRADADO NUEVO */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-0 md:px-10">
        
        {/* AQUÍ EL CAMBIO PARA EL CENTRADO PERFECTO */}
        {/* Contenedor flex para asegurar el centrado sin importar el ancho */}
        <div className="w-full flex justify-center mt-12 md:mt-24 mb-16 px-4">
          <h2 
            className="text-3xl sm:text-4xl md:text-[2.4rem] lg:text-[3rem] xl:text-[3.5rem] leading-[1.2] text-white text-center tracking-widest drop-shadow-md whitespace-normal md:whitespace-nowrap pl-[0.1em]"
            style={{ fontFamily: 'Alta, serif' }}
          >
            CUIDAMOS TU PIEL, <br className="block md:hidden" /> TE CUIDAMOS A TI
          </h2>
        </div>

        {/* CONTENEDOR GRID (Desktop) Y CARRUSEL (Móvil) */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 items-start scrollbar-hide px-6 md:px-0 pb-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Ocultar scrollbar
        >
          
          {cards.map((card, index) => {
            const isOpen = openCard === index;
            
            return (
              <div 
                key={card.id} 
                className="flex flex-col w-full flex-shrink-0 snap-center relative z-20 md:flex-shrink"
              >
                
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

        {/* Indicadores de carrusel (Puntitos) solo para móvil */}
        <div className="flex justify-center gap-2 mt-2 md:hidden">
          {cards.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === idx ? 'bg-[#053d57] w-4' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CuidamosPiel;