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
          <span className="mt-0.5 sm:mt-1 lg:-mt-2">Q-SWITCH PICOSEGUNDOS</span>
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

      {/* TEXTO INTRODUCTORIO (solo PC) */}
      <div className="hidden lg:block w-full max-w-[1200px] text-center px-6 md:px-12 pt-8 pb-6 md:pt-12 md:pb-8 mx-auto">
        <p className="text-[#88807a] text-lg md:text-xl lg:text-2xl font-light leading-snug">
          Nuestra unidad Dermoláser utiliza la mejor tecnología en dermatología láser.<br className="hidden md:block" />
          Está a cargo de nuestro staff de dermatólogas y especialistas en láser, brindamos<br className="hidden md:block" />
          protocolos personalizados según cada necesidad.
        </p>
      </div>

      {/* =========================================
          FOTO DE FONDO Y LISTA
          Celular/tablet: altura fija + foto anclada a la izquierda
          PC (lg): igual que antes
          ========================================= */}
      <div
        className="relative w-full max-w-[1900px] mx-auto h-[600px] sm:h-[780px] md:h-[900px] lg:h-[950px] flex items-center justify-center bg-cover bg-no-repeat bg-[position:27%_center] lg:bg-center lg:bg-[length:100%_100%]"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793068274/tnxe3bv305tph4ekftuh.jpg')" }}
      >

        {/* Grilla: 2 columnas siempre (izquierda libre para la máquina) */}
        <div className="relative z-10 w-full max-w-[1200px] px-3 sm:px-8 lg:px-10 grid grid-cols-[0.8fr_1.2fr] lg:grid-cols-2 gap-2 sm:gap-6 lg:gap-12 items-center py-0">

          {/* COLUMNA IZQUIERDA: vacía para dejar ver la máquina */}
          <div></div>

          {/* COLUMNA DERECHA: Título y Lista */}
          <div className="flex flex-col lg:pl-16">

            <h2
              className="text-[2.1rem] min-[400px]:text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[4.5rem] text-[#053d57] leading-none mb-4 sm:mb-6 lg:mb-8"
              style={{ fontFamily: 'Alta, serif' }}
            >
              TIPOS DE<br />
              LÁSER
            </h2>

            <div className="flex flex-col gap-3 sm:gap-5 lg:gap-2">
              {tipos.map((tipo) => (
                <div key={tipo.id} className="flex items-center gap-3 sm:gap-5 lg:gap-5 group py-1 sm:py-1.5 lg:py-1">

                  {/* Imagen Circular */}
                  <div className="w-11 h-11 min-[400px]:w-12 min-[400px]:h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={tipo.img}
                      alt={typeof tipo.title === 'string' ? tipo.title : 'Láser Pigmentario'}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
                    />
                  </div>

                  {/* Textos */}
                  <div className="flex flex-col justify-center">
                    <h4 className="text-[#c59e93] text-[11px] min-[400px]:text-[12px] sm:text-[17px] md:text-xl lg:text-2xl font-medium tracking-wide uppercase leading-[1.2] lg:leading-[1.05] transition-colors duration-300 group-hover:text-[#a88277]">
                      {tipo.title}
                    </h4>

                    {tipo.subtitle && (
                      <div className="flex flex-col mt-0.5 sm:mt-1 lg:-mt-1.5">
                        {tipo.subtitle.split('\n').map((line, index) => (
                          <span
                            key={index}
                            className={`text-[#88807a] text-[10px] min-[400px]:text-[11px] sm:text-sm md:text-base lg:text-lg font-light leading-[1.3] lg:leading-none ${index > 0 ? 'mt-0.5 lg:-mt-2' : ''}`}
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