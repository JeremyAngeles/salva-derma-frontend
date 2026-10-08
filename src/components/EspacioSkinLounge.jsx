import React from 'react';

const EspacioSkinLounge = () => {
  const caracteristicas = [
    {
      id: 1,
      texto: "EXPERIENCIA DE LIMPIEZAS\nDERMATOLOGICAS PREMIUM",
      img: "/espacio-limpieza.jpg" // Reemplaza con la foto de la chica con vapor
    },
    {
      id: 2,
      texto: "AROMATERAPIA / MASAJES",
      img: "/espacio-aromaterapia.jpg" // Reemplaza con la foto de las velas y toalla
    },
    {
      id: 3,
      texto: "CATERING ESPECIAL",
      img: "/espacio-catering.jpg" // Reemplaza con la foto de las bebidas y bocaditos
    }
  ];

  return (
    // Reducimos el padding superior (pt-8 md:pt-12) para que el componente "suba" y se pegue a la sección anterior
    <section className="w-full bg-[#faf9f8] pt-8 md:pt-12 pb-16 md:pb-20 font-principal px-6 lg:px-12">
      <div className="max-w-[1250px] mx-auto">
        
        {/* =========================================
            TÍTULO CENTRAL
            ========================================= */}
        <h2 
          className="text-center text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-[#053d57] mb-12 md:mb-16 tracking-wide"
          style={{ fontFamily: 'Alta, serif' }}
        >
          EL ESPACIO PARA TI Y TU PIEL
        </h2>

        {/* =========================================
            GRID DE 3 IMÁGENES
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caracteristicas.map((item) => (
            <div 
              key={item.id} 
              className="relative w-full h-[350px] md:h-[400px] lg:h-[420px] rounded-[2rem] overflow-hidden shadow-sm group"
            >
              {/* Imagen de fondo */}
              <img 
                src={item.img} 
                alt={item.texto.replace('\n', ' ')} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#dcc4bc]' }}
              />
              
              {/* Degradado inferior para resaltar el texto */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              
              {/* Texto sobre la imagen */}
              <div className="absolute bottom-6 md:bottom-8 left-0 w-full px-4 text-center">
                <p className="text-white font-medium text-[13px] md:text-[14px] lg:text-[15px] tracking-widest whitespace-pre-line drop-shadow-md">
                  {item.texto}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            TEXTO INFERIOR (Con el ícono "+")
            ========================================= */}
        <div className="flex items-start gap-4 md:gap-6 mt-12 md:mt-16 max-w-[1050px] mx-auto">
          
          {/* Ícono de "+" en color palo rosa */}
          <div className="flex-shrink-0 mt-1 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-[#c59e93]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 11h-6V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
            </svg>
          </div>
          
          {/* Párrafo */}
          <p className="text-[#88807a] text-[14px] md:text-[15px] lg:text-[16px] font-light leading-relaxed">
            Nuestra experiencia de faciales incluyen un ambiente especial acompañado de aromaterapia, catering<br className="hidden md:block"/>
            (bebidas, dulces y salados) masaje de hombros y los mejores productos premium dermatológicos.
          </p>
          
        </div>

      </div>
    </section>
  );
};

export default EspacioSkinLounge;