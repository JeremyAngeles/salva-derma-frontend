import React from 'react';

const PrincipalesTecnologias = () => {
  // Cada fila de texto es un ítem del arreglo (así queda igualito al diseño)
  const tecnologias = [
    { 
      id: 1, 
      titulo: ["LÁSER VASCULAR"], 
      desc: ["Acné, rosácea, estrías y arañas", "vasculares."], 
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690611/l%C3%A1ser_vacular.png" 
    },
    { 
      id: 2, 
      titulo: ["LÁSER ERBIO"], 
      desc: ["Lunares, verrugas, acrocordones y", "queratosis."], 
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690611/l%C3%A1ser_erbio.png" 
    },
    { 
      id: 3, 
      titulo: ["LÁSER PIGMENTO Q-SWITCH"], 
      desc: ["Melasma, manchas, lentigos, queratosis,", "manchas en axilas, espalda, pecas, nevo", "de Ota Y ojeras."], 
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690613/L%C3%A1ser_pigmento_Q-switch.png" 
    },
    { 
      id: 4, 
      titulo: ["LÁSER FRACCIONADO ERBIO", "PICOSEGUNDOS Y NO ABLATIVOS"], 
      desc: ["Cicatrices, rejuvenecimiento, textura y", "líneas de expresión."], 
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690610/picosegundos.jpg" 
    },
    { 
      id: 5, 
      titulo: ["LÁSER ONICOMICOSIS"], 
      desc: [], 
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690609/L%C3%A1ser_Onicomicosis.png" 
    },
    { 
      id: 6, 
      titulo: ["MICROPUNCION NANOPORE"], 
      desc: ["Poros dilatados, textura de piel,", "aumento de colágeno y calidad de piel."], 
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690609/Micropuncion_nanopore.jpg" 
    },
  ];

  return (
    <section className="relative w-full font-principal overflow-hidden bg-[#7a736c] aspect-[464/756] md:aspect-auto">
      
      {/* FONDO CELULAR Y TABLET */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-right lg:hidden"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793338793/ehtxzorr8r4izj9xc9yy.png')" }} 
      ></div>

      {/* FONDO PC (sin cambios) */}
      <div 
        className="hidden lg:block absolute inset-0 bg-cover lg:bg-right"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793138012/agkrsfcoc26mouptya3z.jpg')" }} 
      ></div>
      
      {/* Degradado oscuro solo en PC */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent w-full md:w-[85%] lg:w-[65%] pointer-events-none"></div>

      {/* CONTENEDOR DE CONTENIDO */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-[6vw] md:px-6 lg:px-12 pt-[16vw] pb-[15vw] md:py-24">
        
        <div className="w-full md:w-[65%] lg:w-[55%] flex flex-col">
          
          {/* Título Principal */}
          <h2 
            className="text-white text-[8.8vw] md:text-[4rem] lg:text-[4.5rem] leading-[1] tracking-wide drop-shadow-md mb-2"
            style={{ fontFamily: 'Alta, serif' }}
          >
            PRINCIPALES<br />TECNOLOGÍAS
          </h2>
          
          {/* Subtítulo */}
          <p className="text-white/80 text-[2.4vw] md:text-[15px] font-light tracking-widest uppercase mb-[8vw] md:mb-12">
            (EQUIPOS)
          </p>

          {/* LISTA DE EQUIPOS */}
          <div className="flex flex-col gap-[4vw] md:gap-7 pl-[2.2vw] md:pl-0">
            {tecnologias.map((tech) => (
              <div key={tech.id} className="flex items-center gap-[2.4vw] md:gap-6 group">
                
                {/* Imagen Circular (Miniatura) */}
                <div className="w-[12.3vw] h-[12.3vw] md:w-[70px] md:h-[70px] flex-shrink-0 rounded-full overflow-hidden border-[1.5px] border-white/20 shadow-lg bg-[#e8e4e1] transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={tech.img} 
                    alt={tech.titulo.join(' ')} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
                  />
                </div>
                
                {/* Textos del Equipo */}
                <div className="flex flex-col justify-center min-w-0">
                  
                  {/* Título: cada fila fija */}
                  <h4 className="text-white font-semibold text-[2.7vw] md:text-[18px] lg:text-[20px] tracking-wide leading-[1.2] lg:leading-none drop-shadow-md uppercase">
                    {tech.titulo.map((linea, i) => (
                      <span key={i} className="block whitespace-nowrap lg:whitespace-normal">
                        {linea}
                      </span>
                    ))}
                  </h4>

                  {/* Descripción: cada fila fija en celular/tablet, fluida en PC */}
                  {tech.desc.length > 0 && (
                    <p className="text-white/90 font-medium lg:font-light text-[2.2vw] md:text-[14px] mt-[0.6vw] md:mt-0.5 leading-snug drop-shadow-sm md:max-w-[420px] lg:max-w-[420px]">
                      {tech.desc.map((linea, i) => (
                        <span key={i} className="block lg:inline whitespace-nowrap lg:whitespace-normal">
                          {linea}{' '}
                        </span>
                      ))}
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

export default PrincipalesTecnologias;