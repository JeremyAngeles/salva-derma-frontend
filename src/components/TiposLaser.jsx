import React from 'react';

const TiposLaser = () => {
  const tipos = [
    {
      id: 1,
      title: "LÁSER FRACCIONADO",
      subtitle: "• Picosegundos\n• Erbio",
      img: "/tipo-laser-1.png" // Reemplaza con la imagen del circulito
    },
    {
      id: 2,
      title: "LÁSER NO ABLATIVO",
      subtitle: "",
      img: "/tipo-laser-2.png"
    },
    {
      id: 3,
      title: "LÁSER ABLATIVO",
      subtitle: "",
      img: "/tipo-laser-3.png"
    },
    {
      id: 4,
      title: "LÁSER PIGMENTARIO\nQ-SWITCH PICOSEGUNDOS",
      subtitle: "",
      img: "/tipo-laser-4.png"
    },
    {
      id: 5,
      title: "LÁSER VASCULAR",
      subtitle: "",
      img: "/tipo-laser-5.png"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white font-principal flex flex-col items-center overflow-hidden">
      
      {/* Texto Introductorio Superior */}
      {/* Se aumentó el ancho máximo a 900px para acomodar el texto más grande */}
      <div className="max-w-[1000px] text-center px-12 mb-16 md:mb-24 mx-auto">
        {/* Se cambió text-[15px] md:text-base por text-lg md:text-xl */}
        <p className="text-[#88807a] text-lg md:text-xl font-light leading-relaxed">
          Nuestra unidad Dermoláser utiliza la mejor tecnología en dermatología láser.<br className="hidden md:block" />
          Está a cargo de nuestro staff de dermatólogas y especialistas en láser, brindamos<br className="hidden md:block" />
          protocolos personalizados según cada necesidad.
        </p>
      </div>

      {/* Contenedor Principal (Máquina a la izquierda, Tipos a la derecha) */}
      <div className="w-full max-w-[1000px] px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA: Máquina Láser */}
        <div className="flex justify-center relative">
          {/* Fondo sutil curvo (opcional para replicar las ondas grises de la imagen) */}
          <div className="absolute inset-0 bg-gray-50 rounded-full w-[120%] h-[120%] -left-[10%] -top-[10%] -z-10 blur-3xl opacity-50"></div>
          
          <img 
            src="/maquina-laser.png" // Reemplaza con tu imagen del manípulo láser
            alt="Máquina Dermoláser" 
            className="w-full max-w-[220px] md:max-w-[280px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* COLUMNA DERECHA: Título y Lista */}
        <div className="flex flex-col">
          
          {/* Título */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-[#053d57] leading-[1.1] mb-10"
            style={{ fontFamily: 'Alta, serif' }}
          >
            TIPOS DE<br />
            LÁSER
          </h2>

          {/* Lista de Tipos de Láser */}
          <div className="flex flex-col gap-6 md:gap-8">
            {tipos.map((tipo) => (
              <div key={tipo.id} className="flex items-center gap-5">
                
                {/* Imagen Circular */}
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img 
                    src={tipo.img} 
                    alt={tipo.title} 
                    className="w-full h-full object-cover"
                    // Si no tienes la imagen, esto mostrará un fondo plomo temporal:
                    onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
                  />
                </div>
                
                {/* Textos del Item */}
                <div className="flex flex-col">
                  <h4 className="text-[#c59e93] text-sm md:text-base font-medium tracking-wide uppercase whitespace-pre-line leading-tight">
                    {tipo.title}
                  </h4>
                  {tipo.subtitle && (
                    <p className="text-[#88807a] text-xs md:text-sm font-light whitespace-pre-line mt-1 leading-snug">
                      {tipo.subtitle}
                    </p>
                  )}
                </div>
                
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TiposLaser;