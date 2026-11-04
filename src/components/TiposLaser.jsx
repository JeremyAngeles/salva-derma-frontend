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
      title: (
        <span className="flex flex-col">
          <span>LÁSER PIGMENTARIO</span>
          <span className="mt-0.5 sm:mt-1 lg:mt-0.5">Q-SWITCH PICOSEGUNDOS</span>
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
          ========================================= */}
      <div
        className="relative w-full max-w-[1900px] mx-auto h-[600px] sm:h-[780px] md:h-[900px] lg:h-[950px] flex items-center justify-center bg-cover bg-no-repeat bg-[position:50%_center] lg:bg-center lg:bg-[length:100%_100%]"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793068274/tnxe3bv305tph4ekftuh.jpg')" }}
      >

        {/* Móvil: flex-col y centrado. PC: grid-cols-2 para respetar el espacio de la izquierda */}
        <div className="relative z-10 w-full max-w-[1200px] px-4 sm:px-8 lg:px-10 flex flex-col lg:grid lg:grid-cols-2 items-center justify-center">

          {/* COLUMNA IZQUIERDA: Oculta en celular, visible en PC para dejar ver la máquina */}
          <div className="hidden lg:block"></div>

          {/* COLUMNA DERECHA: Centrada en celular, alineada a la izquierda en PC */}
          <div className="flex flex-col items-center lg:items-start lg:pl-16 w-full">

            <h2
              /* TÍTULO MÁS GRANDE EN MÓVIL Y TABLET */
              className="text-[2.4rem] min-[400px]:text-[2.8rem] sm:text-[4rem] md:text-[4.2rem] lg:text-[4.5rem] text-[#053d57] leading-none mb-6 sm:mb-10 lg:mb-12 text-center lg:text-left"
              style={{ fontFamily: 'Alta, serif' }}
            >
              {/* Celular/Tablet: 1 sola fila */}
              <span className="lg:hidden whitespace-nowrap">TIPOS DE LÁSER</span>
              {/* PC: 2 filas como estaba originalmente */}
              <span className="hidden lg:block">TIPOS DE<br />LÁSER</span>
            </h2>

            {/* Lista: se aumentó el gap en móvil/tablet para compensar el tamaño */}
            <div className="flex flex-col gap-5 sm:gap-8 lg:gap-8 w-fit">
              {tipos.map((tipo) => (
                <div key={tipo.id} className="flex items-center gap-5 sm:gap-8 lg:gap-6 group py-1 lg:py-2">

                  {/* IMAGEN CIRCULAR MÁS GRANDE EN MÓVIL Y TABLET */}
                  <div className="w-16 h-16 min-[400px]:w-[4.5rem] min-[400px]:h-[4.5rem] sm:w-[5.5rem] sm:h-[5.5rem] lg:w-20 lg:h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={tipo.img}
                      alt={typeof tipo.title === 'string' ? tipo.title : 'Láser Pigmentario'}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
                    />
                  </div>

                  {/* Textos: Alineados a la izquierda para que se lean bien junto al ícono */}
                  <div className="flex flex-col justify-center text-left">
                    {/* TÍTULOS MÁS GRANDES EN MÓVIL Y TABLET */}
                    <h4 className="text-[#c59e93] text-[15px] min-[400px]:text-[17px] sm:text-[22px] md:text-2xl lg:text-2xl font-medium tracking-wide uppercase leading-[1.2] lg:leading-[1.1] transition-colors duration-300 group-hover:text-[#a88277]">
                      {tipo.title}
                    </h4>

                    {tipo.subtitle && (
                      <div className="flex flex-col mt-0.5 sm:mt-1 lg:mt-1">
                        {tipo.subtitle.split('\n').map((line, index) => (
                          <span
                            key={index}
                            /* SUBTÍTULOS TAMBIÉN AJUSTADOS LIGERAMENTE EN MÓVIL/TABLET */
                            className={`text-[#88807a] text-[13px] min-[400px]:text-[14px] sm:text-[17px] md:text-lg lg:text-lg font-light leading-[1.3] lg:leading-tight ${index > 0 ? 'mt-0.5 lg:mt-0.5' : ''}`}
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