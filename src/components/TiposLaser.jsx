import React from 'react';

const TiposLaser = () => {
  const tipos = [
    {
      id: 1,
      title: "LÁSER FRACCIONADO",
      subtitle: "• Picosegundos\nErbio",
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
      title: "LÁSER PIGMENTARIO\nQ-SWITCH PICOSEGUNDOS",
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
          TEXTO INTRODUCTORIO (ARRIBA Y FUERA DE LA FOTO)
          ========================================= */}
      <div className="w-full max-w-[1000px] text-center px-6 md:px-12 pt-16 pb-8 md:pt-24 md:pb-12 mx-auto">
        <p className="text-[#88807a] text-base md:text-lg font-light leading-relaxed">
          Nuestra unidad Dermoláser utiliza la mejor tecnología en dermatología láser.<br className="hidden md:block" />
          Está a cargo de nuestro staff de dermatólogas y especialistas en láser, brindamos<br className="hidden md:block" />
          protocolos personalizados según cada necesidad.
        </p>
      </div>

      {/* =========================================
          CONTENEDOR DE LA FOTO DE FONDO Y LA LISTA
          ========================================= */}
      <div 
        // Agregamos min-h-[600px] md:min-h-[750px] lg:min-h-[850px] para que la foto no se recorte y se vea COMPLETA
        className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[850px] py-12 md:py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792531261/02_-_l%C3%A1ser_tipos.png')" }}
      >
        
        {/* Capa de protección opcional para celular por si el texto se cruza con partes oscuras */}
        <div className="absolute inset-0 bg-white/50 md:bg-transparent pointer-events-none z-0"></div>

        {/* Contenedor Principal (Grid) */}
        <div className="relative z-10 w-full max-w-[1100px] px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: Vacía para dejar ver a la modelo/máquina de la foto de fondo */}
          <div className="hidden md:block"></div>

          {/* COLUMNA DERECHA: Título y Lista */}
          <div className="flex flex-col bg-white/70 md:bg-transparent p-6 md:p-0 rounded-[1.5rem] backdrop-blur-sm md:backdrop-blur-none">
            
            {/* Título */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl text-[#053d57] leading-[1.1] mb-8 md:mb-10 drop-shadow-sm md:drop-shadow-none"
              style={{ fontFamily: 'Alta, serif' }}
            >
              TIPOS DE<br />
              LÁSER
            </h2>

            {/* Lista de Tipos de Láser */}
            <div className="flex flex-col gap-4 md:gap-6">
              {tipos.map((tipo) => (
                <div key={tipo.id} className="flex items-center gap-4 group">
                  
                  {/* Imagen Circular */}
                  <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={tipo.img} 
                      alt={tipo.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
                    />
                  </div>
                  
                  {/* Textos del Item */}
                  <div className="flex flex-col">
                    <h4 className="text-[#c59e93] text-sm md:text-base font-medium tracking-wide uppercase whitespace-pre-line leading-tight transition-colors duration-300 group-hover:text-[#a88277]">
                      {tipo.title}
                    </h4>
                    {tipo.subtitle && (
                      <p className="text-[#88807a] text-xs md:text-sm font-semibold md:font-light whitespace-pre-line mt-0.5 leading-snug">
                        {tipo.subtitle}
                      </p>
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