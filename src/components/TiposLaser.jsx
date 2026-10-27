import React from 'react';

const TiposLaser = () => {
  const tipos = [
    {
      id: 1,
      title: "LÁSER FRACCIONADO",
      subtitle: "• Picosegundos\n• Erbio",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531271/l%C3%A1ser_fracionado.png"
    },
    {
      id: 2,
      title: "LÁSER NO ABLATIVO",
      subtitle: "",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531267/L%C3%A1ser_no_ablativo.jpg"
    },
    {
      id: 3,
      title: "LÁSER ABLATIVO",
      subtitle: "",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531272/L%C3%A1ser_ablativo.png"
    },
    {
      id: 4,
      title: (
        <span className="flex flex-col">
          <span>LÁSER PIGMENTARIO</span>
          <span className="-mt-1.5 md:-mt-2">Q-SWITCH PICOSEGUNDOS</span>
        </span>
      ),
      subtitle: "",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531268/L%C3%A1ser_pigmentario_Q-Switch.jpg"
    },
    {
      id: 5,
      title: "LÁSER VASCULAR",
      subtitle: "",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531270/L%C3%A1ser_vascular.png"
    }
  ];

  return (
    <section className="w-full font-principal flex flex-col items-center overflow-hidden bg-white">
      
      {/* =========================================
          TEXTO INTRODUCTORIO
          ========================================= */}
      <div className="w-full max-w-[1200px] text-center px-6 md:px-12 pt-8 pb-6 md:pt-12 md:pb-8 mx-auto">
        <p className="text-[#88807a] text-lg md:text-xl lg:text-2xl font-light leading-snug">
          Nuestra unidad Dermoláser utiliza la mejor tecnología en dermatología láser.<br className="hidden md:block" />
          Está a cargo de nuestro staff de dermatólogas y especialistas en láser, brindamos<br className="hidden md:block" />
          protocolos personalizados según cada necesidad.
        </p>
      </div>

      {/* =========================================
          CONTENEDOR DE LA FOTO DE FONDO Y LA LISTA
          ========================================= */}
      <div 
        className="relative w-full max-w-[1900px] mx-auto min-h-[700px] lg:min-h-0 lg:h-[950px] flex items-center justify-center bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793068274/tnxe3bv305tph4ekftuh.jpg')" }}
      >
        
        <div className="absolute inset-0 bg-white/50 md:bg-transparent pointer-events-none z-0"></div>

        {/* Contenedor Principal (Grid) */}
        <div className="relative z-10 w-full max-w-[1200px] px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-12 lg:py-0">
          
          {/* COLUMNA IZQUIERDA: Vacía para dejar ver a la modelo/máquina */}
          <div className="hidden md:block"></div>

          {/* COLUMNA DERECHA: Título y Lista */}
          <div className="flex flex-col bg-white/70 md:bg-transparent p-6 md:p-0 rounded-[1.5rem] backdrop-blur-sm md:backdrop-blur-none lg:pl-16">
            
            {/* Título Principal */}
            <h2 
              className="text-4xl md:text-5xl lg:text-[4.5rem] text-[#053d57] leading-none mb-6 md:mb-8 drop-shadow-sm md:drop-shadow-none"
              style={{ fontFamily: 'Alta, serif' }}
            >
              TIPOS DE<br />
              LÁSER
            </h2>

            {/* Lista de Tipos de Láser */}
            <div className="flex flex-col gap-1 md:gap-2">
              {tipos.map((tipo) => (
                <div key={tipo.id} className="flex items-center gap-4 md:gap-5 group py-1">
                  
                  {/* Imagen Circular */}
                  <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={tipo.img} 
                      alt={typeof tipo.title === 'string' ? tipo.title : 'Láser Pigmentario'} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
                    />
                  </div>
                  
                  {/* Textos del Item */}
                  <div className="flex flex-col justify-center">
                    
                    {/* TÍTULO */}
                    <h4 className="text-[#c59e93] text-lg md:text-xl lg:text-2xl font-medium tracking-wide uppercase leading-none transition-colors duration-300 group-hover:text-[#a88277]">
                      {tipo.title}
                    </h4>
                    
                    {/* SUBTÍTULOS PEGADOS AL TÍTULO A LA FUERZA (-mt-1 md:-mt-1.5) */}
                    {tipo.subtitle && (
                      <div className="flex flex-col -mt-1 md:-mt-1.5">
                        {tipo.subtitle.split('\n').map((line, index) => (
                          <span 
                            key={index} 
                            className={`text-[#88807a] text-base md:text-lg font-semibold md:font-light leading-none ${index > 0 ? '-mt-1.5 md:-mt-2' : ''}`}
                          >
                            {line}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                  
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TiposLaser;