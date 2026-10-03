import React from 'react';

const ProcedimientosEstetica = () => {
  const procedimientos = [
    {
      id: 1,
      title: "LÁSER",
      desc: "De rejuvenecimiento fraccionado, láser 4D con efecto lifting/tensado, láser despigmentante y láser para zona de ojeras.",
      img: "/proc-laser.jpg" // Reemplaza con la foto del láser
    },
    {
      id: 2,
      title: "MICROPUNCIONES / NANOPORE",
      desc: "",
      img: "/proc-nanopore.jpg" // Reemplaza con la foto
    },
    {
      id: 3,
      title: "PEELINGS",
      desc: "",
      img: "/proc-peelings.jpg" // Reemplaza con la foto
    },
    {
      id: 4,
      title: "MESOTERAPIA",
      desc: "Despigmentantes, hidratantes, exosomas y PDRN de salmón.",
      img: "/proc-mesoterapia.jpg" // Reemplaza con la foto
    },
    {
      id: 5,
      title: "INYECTABLES",
      desc: "Botox, Ácido hialurónico, Bioestimuladores de colágeno, etc.",
      img: "/proc-inyectables.jpg" // Reemplaza con la foto
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#f8f9fa] font-principal overflow-hidden">
      
      {/* Fondo tenue (Opcional: replica la máquina de fondo sutil que se ve en la imagen) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('/fondo-clinica-claro.jpg')" }}
      ></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10">
        
        {/* Título Principal */}
        <h2 
          className="text-4xl md:text-5xl lg:text-[4rem] text-[#053d57] text-center mb-16 md:mb-20 tracking-wide"
          style={{ fontFamily: 'Alta, serif' }}
        >
          PROCEDIMIENTOS
        </h2>

        {/* Contenedor a 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Lista de Procedimientos */}
          <div className="flex flex-col gap-6 md:gap-8">
            {procedimientos.map((proc) => (
              <div key={proc.id} className="flex items-center gap-5 md:gap-6">
                
                {/* Imagen Circular */}
                <div className="w-16 h-16 md:w-[85px] md:h-[85px] flex-shrink-0 rounded-full overflow-hidden shadow-md border-[3px] border-white bg-white">
                  <img 
                    src={proc.img} 
                    alt={proc.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#dcc4bc]' }}
                  />
                </div>

                {/* Textos del Item */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-[#c59e93] font-medium text-sm md:text-base tracking-widest uppercase mb-1 drop-shadow-sm">
                    {proc.title}
                  </h3>
                  {proc.desc && (
                    <p className="text-[#88807a] text-[13px] md:text-[15px] font-light leading-relaxed max-w-[450px]">
                      {proc.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* COLUMNA DERECHA: Imagen/Video con Borde Blanco */}
          <div className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[450px] lg:max-w-[500px] h-[450px] md:h-[550px] lg:h-[650px] rounded-[2.5rem] border-[8px] md:border-[12px] border-white shadow-2xl overflow-hidden bg-white">
              
              {/* Imagen Principal de Inyectable */}
              <img 
                src="/procedimiento-inyectable.jpg" // Reemplaza con tu imagen de la doctora inyectando
                alt="Procedimiento Estético" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-gray-200' }}
              />

              {/* Botón de Play (Esquina superior derecha) */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full border-[1.5px] border-white bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcedimientosEstetica;