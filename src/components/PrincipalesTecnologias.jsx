import React from 'react';

const PrincipalesTecnologias = () => {
  // Lista de tecnologías basadas en la imagen
  const tecnologias = [
    { 
      id: 1, 
      titulo: "LÁSER VASCULAR", 
      desc: "Acné, rosácea, estrías y arañas vasculares.", 
      img: "/tech-vascular.jpg" 
    },
    { 
      id: 2, 
      titulo: "LÁSER ERBIO", 
      desc: "Lunares, verrugas, acrocordones y queratosis.", 
      img: "/tech-erbio.jpg" 
    },
    { 
      id: 3, 
      titulo: "LÁSER PIGMENTO Q-SWITCH", 
      desc: "Melasma, manchas, lentigos, queratosis, manchas en axilas, espalda, pecas, nevo de Ota Y ojeras.", 
      img: "/tech-qswitch.jpg" 
    },
    { 
      id: 4, 
      titulo: "LÁSER FRACCIONADO ERBIO\nPICOSEGUNDOS Y NO ABLATIVOS", 
      desc: "Cicatrices, rejuvenecimiento, textura y líneas de expresión.", 
      img: "/tech-fraccionado.jpg" 
    },
    { 
      id: 5, 
      titulo: "LÁSER ONICOMICOSIS", 
      desc: "", // Este ítem no tiene descripción en la foto
      img: "/tech-onicomicosis.jpg" 
    },
    { 
      id: 6, 
      titulo: "MICROPUNCION NANOPORE", 
      desc: "Poros dilatados, textura de piel, aumento de colágeno y calidad de piel.", 
      img: "/tech-nanopore.jpg" 
    },
  ];

  return (
    <section className="relative w-full font-principal overflow-hidden bg-[#7a736c]">
      
      {/* =========================================
          IMAGEN DE FONDO Y DEGRADADO
          ========================================= */}
      {/* Imagen de la chica de fondo (Alineada a la derecha en escritorio) */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-[position:80%_center] lg:bg-right"
        style={{ backgroundImage: "url('/tecnologias-bg.jpg')" }} // Reemplaza con la foto de la chica
      ></div>
      
      {/* Degradado negro/oscuro solo en la parte izquierda para que el texto resalte */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent w-full md:w-[80%] lg:w-[60%] pointer-events-none"></div>

      {/* =========================================
          CONTENEDOR DE CONTENIDO
          ========================================= */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        
        <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col">
          
          {/* Título Principal */}
          <h2 
            className="text-white text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-[1] tracking-wide drop-shadow-md mb-2"
            style={{ fontFamily: 'Alta, serif' }}
          >
            PRINCIPALES<br />TECNOLOGÍAS
          </h2>
          
          {/* Subtítulo */}
          <p className="text-white/80 text-[14px] md:text-[15px] font-light tracking-widest uppercase mb-10 md:mb-12">
            (EQUIPOS)
          </p>

          {/* =========================================
              LISTA DE EQUIPOS
              ========================================= */}
          <div className="flex flex-col gap-6 md:gap-7">
            {tecnologias.map((tech) => (
              <div key={tech.id} className="flex items-center gap-5 md:gap-6">
                
                {/* Imagen Circular (Miniatura) */}
                <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] flex-shrink-0 rounded-full overflow-hidden border-[1.5px] border-white/20 shadow-lg bg-[#e8e4e1]">
                  <img 
                    src={tech.img} 
                    alt={tech.titulo.replace('\n', ' ')} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
                  />
                </div>
                
                {/* Textos del Equipo */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-white font-semibold text-[14px] md:text-[15px] lg:text-[16px] tracking-wide whitespace-pre-line leading-tight drop-shadow-md uppercase">
                    {tech.titulo}
                  </h4>
                  {tech.desc && (
                    <p className="text-white/90 font-light text-[13px] md:text-[14px] mt-1 leading-relaxed drop-shadow-sm max-w-[420px]">
                      {tech.desc}
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