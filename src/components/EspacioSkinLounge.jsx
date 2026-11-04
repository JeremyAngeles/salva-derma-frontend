import React, { useState } from 'react';

const EspacioSkinLounge = () => {
  // Estado para controlar el orden de los elementos (índices: 0 = izquierda, 1 = centro, 2 = derecha)
  const [orden, setOrden] = useState([0, 1, 2]);

  const listaCaracteristicas = [
    {
      id: 1,
      texto: "EXPERIENCIA DE LIMPIEZAS\nDERMATOLOGICAS PREMIUM",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792692168/FACIAL.png"
    },
    {
      id: 2,
      texto: "AROMATERAPIA / MASAJES",
      img: "https://res.cloudinary.com/da47iihxz/image/upload/v1793140851/pqkltndyvcdajnhaiaxv.png"
    },
    {
      id: 3,
      texto: "CATERING ESPECIAL",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792693585/CATERING.png"
    }
  ];

  // Función para rotar o mover al centro el card presionado
  const manejarClickCard = (clickedIndexInOrden) => {
    const nuevoOrden = [...orden];
    // Si hacen clic en el de la izquierda (posición 0 en el orden actual)
    if (clickedIndexInOrden === 0) {
      const temp = nuevoOrden[0];
      nuevoOrden[0] = nuevoOrden[1];
      nuevoOrden[1] = temp;
    } 
    // Si hacen clic en el de la derecha (posición 2 en el orden actual)
    else if (clickedIndexInOrden === 2) {
      const temp = nuevoOrden[2];
      nuevoOrden[2] = nuevoOrden[1];
      nuevoOrden[1] = temp;
    }
    setOrden(nuevoOrden);
  };

  return (
    <>
      {/* =====================================================
          CELULAR Y TABLET (con animación interactiva por click)
          ===================================================== */}
      <section className="lg:hidden w-full bg-[#faf9f8] pt-[3vw] pb-[10vw] font-principal relative z-20 overflow-hidden">

        {/* Título con animación de entrada */}
        <h2
          className="text-center text-[6.3vw] text-[#053d57] tracking-wide leading-none whitespace-nowrap opacity-0 animate-fade-up"
          style={{ fontFamily: 'Alta, serif', animationDelay: '0.1s' }}
        >
          EL ESPACIO PARA TI Y TU PIEL
        </h2>

        {/* Cards interactivos en fila */}
        <div className="flex items-center justify-center gap-[2.4vw] px-[1.6vw] mt-[6vw]">
          {orden.map((itemIndex, positionIndex) => {
            const item = listaCaracteristicas[itemIndex];
            const esCentro = positionIndex === 1;

            return (
              <div
                key={item.id}
                onClick={() => manejarClickCard(positionIndex)}
                className={`relative flex-shrink-0 overflow-hidden shadow-md cursor-pointer transition-all duration-700 ease-in-out ${
                  esCentro
                    ? 'w-[41.5vw] h-[59vw] rounded-[5vw] z-10 scale-100 shadow-xl'
                    : 'w-[25.6vw] h-[28vw] rounded-[4vw] scale-95 opacity-85 hover:opacity-100'
                }`}
              >
                <img
                  src={item.img}
                  alt={item.texto.replace('\n', ' ')}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#dcc4bc]' }}
                />

                {/* Degradado inferior */}
                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

                {/* Texto */}
                <div className={`absolute left-0 w-full text-center px-1 ${esCentro ? 'bottom-[3.4vw]' : 'bottom-[2vw]'}`}>
                  <p
                    className={`text-white font-medium tracking-wide leading-[1.2] drop-shadow-md ${
                      esCentro ? 'text-[1.8vw]' : 'text-[1.2vw]'
                    }`}
                  >
                    {item.texto.split('\n').map((linea, i) => (
                      <span key={i} className="block whitespace-nowrap">{linea}</span>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Texto inferior con "+" */}
        <div className="flex items-start gap-[1.6vw] mt-[11vw] pl-[4vw] pr-[4vw] opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex-shrink-0 mt-[0.6vw]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[3.6vw] h-[3.6vw] text-[#c9aea5]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 11h-6V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
            </svg>
          </div>

          <p className="text-[#88807a] text-[3vw] font-medium leading-[1.3]">
            <span className="block whitespace-nowrap">Nuestra experiencia de faciales incluyen un ambiente</span>
            <span className="block whitespace-nowrap">especial acompañado de  aromaterapia,  catering</span>
            <span className="block whitespace-nowrap">(bebidas, dulces y salados)  masaje de hombros  y los</span>
            <span className="block whitespace-nowrap">mejores productos premium dermatológicos.</span>
          </p>
        </div>
      </section>

      {/* =====================================================
          PC (sin cambios, estático)
          ===================================================== */}
      <section className="hidden lg:block w-full bg-[#faf9f8] -mt-24 md:-mt-32 pt-8 md:pt-12 pb-16 md:pb-20 font-principal px-6 lg:px-12 relative z-20">
        <div className="max-w-[1250px] mx-auto">
          
          <h2 
            className="text-center text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-[#053d57] mb-12 md:mb-16 tracking-wide"
            style={{ fontFamily: 'Alta, serif' }}
          >
            EL ESPACIO PARA TI Y TU PIEL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {listaCaracteristicas.map((item) => (
              <div 
                key={item.id} 
                className="relative w-full h-[350px] md:h-[400px] lg:h-[420px] rounded-[2rem] overflow-hidden shadow-sm group"
              >
                <img 
                  src={item.img} 
                  alt={item.texto.replace('\n', ' ')} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#dcc4bc]' }}
                />
                
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-6 md:bottom-8 left-0 w-full px-4 text-center">
                  <p className="text-white font-medium text-[13px] md:text-[14px] lg:text-[15px] tracking-widest whitespace-pre-line drop-shadow-md">
                    {item.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-4 md:gap-6 mt-12 md:mt-16 max-w-[1050px] mx-auto">
            <div className="flex-shrink-0 mt-1 md:mt-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-[#c59e93]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 11h-6V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
              </svg>
            </div>
            
            <p className="flex-1 text-[#88807a] text-[16px] md:text-[17px] lg:text-[18px] font-medium leading-snug text-center">
              Nuestra experiencia de faciales incluyen un ambiente especial acompañado de aromaterapia, catering<br className="hidden md:block"/>
              (bebidas, dulces y salados) masaje de hombros y los mejores productos premium dermatológicos.
            </p>
          </div>

        </div>
      </section>

      {/* Estilos para la animación fade-up */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default EspacioSkinLounge;