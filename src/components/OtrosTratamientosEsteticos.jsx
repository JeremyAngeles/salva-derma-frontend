import React from 'react';

const OtrosTratamientosEsteticos = () => {
  const otrosTratamientos = [
    {
      id: 1,
      titulo: "PEELING",
      desc: "Solos o combinados con láser:\nManchas, acné, calidad de piel y otros.",
      img: "/otro-peeling.jpg"
    },
    {
      id: 2,
      titulo: "BOTOX",
      desc: "",
      img: "/otro-botox.jpg"
    },
    {
      id: 3,
      titulo: "HIALURÓNICO",
      desc: "",
      img: "/otro-hialuronico.jpg"
    },
    {
      id: 4,
      titulo: "BIOESTIMULADORES\nDE COLÁGENO",
      desc: "",
      img: "/otro-bioestimuladores.jpg"
    },
    {
      id: 5,
      titulo: "MESOTERAPIA",
      desc: "Despigmentantes, hidratantes y antiedad.",
      img: "/otro-mesoterapia.jpg"
    },
    {
      id: 6,
      titulo: "EXOSOMAS, PLASMA RICO EN\nPLAQUETAS Y PDRN DE SALMÓN",
      desc: "",
      img: "/otro-exosomas.jpg"
    }
  ];

  return (
    <section className="relative w-full bg-[#f8f8f8] pt-16 md:pt-24 pb-12 font-principal overflow-hidden">
      
      {/* Círculos de fondo (Marca de agua) */}
      <div className="absolute top-0 right-0 transform translate-x-[30%] -translate-y-[10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full border-[40px] md:border-[60px] border-black/5 pointer-events-none"></div>
      <div className="absolute top-[20%] right-0 transform translate-x-[20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-[30px] md:border-[50px] border-black/5 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1250px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* =========================================
              IZQUIERDA: Imagen Modelo
              ========================================= */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img 
              src="/otros-tratamientos-mujer.png" // Reemplaza con la foto sin fondo de la modelo
              alt="Mujer con piel radiante" 
              className="w-full max-w-[450px] lg:max-w-[550px] object-contain drop-shadow-lg"
              onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full max-w-[450px] h-[500px] bg-[#e8e4e1] rounded-3xl' }}
            />
          </div>

          {/* =========================================
              DERECHA: Títulos y Lista
              ========================================= */}
          <div className="w-full md:w-1/2 flex flex-col items-end text-right">
            
            <h2 
              className="text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] text-[#053d57] leading-none mb-10 md:mb-12"
              style={{ fontFamily: 'Alta, serif' }}
            >
              OTROS<br />
              TRATAMIENTOS<br />
              ESTÉTICOS
            </h2>

            <div className="flex flex-col gap-6 md:gap-7 w-full">
              {otrosTratamientos.map((trat) => (
                <div key={trat.id} className="flex items-center justify-end gap-4 md:gap-5">
                  
                  {/* Textos alineados a la derecha */}
                  <div className="flex flex-col items-end">
                    <h4 className="text-[#88807a] font-semibold text-[13px] md:text-[14px] lg:text-[15px] tracking-widest whitespace-pre-line uppercase text-right">
                      {trat.titulo}
                    </h4>
                    {trat.desc && (
                      <p className="text-[#88807a] font-light text-[12px] md:text-[13px] mt-1 whitespace-pre-line text-right max-w-[300px]">
                        {trat.desc}
                      </p>
                    )}
                  </div>

                  {/* Imagen circular */}
                  <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex-shrink-0 rounded-full overflow-hidden shadow-sm border border-[#e8e4e1]">
                    <img 
                      src={trat.img} 
                      alt={trat.titulo.replace('\n', ' ')} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#d1b3ab]' }}
                    />
                  </div>
                  
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* =========================================
            BARRA INFERIOR AZUL (Beneficios)
            ========================================= */}
        <div className="w-full bg-[#7ca1b4] rounded-2xl md:rounded-full mt-12 md:mt-16 py-5 md:py-6 px-6 shadow-md flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0">
          
          {/* Beneficio 1 */}
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> {/* Icono provisional de planta/naturaleza */}
            </svg>
            <span className="text-white font-light tracking-wide text-[14px] md:text-[16px]">Naturalidad</span>
          </div>

          <div className="hidden md:block w-[1px] h-10 bg-white/40"></div> {/* Divisor vertical */}

          {/* Beneficio 2 */}
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white font-light tracking-wide text-[14px] md:text-[16px]">Rejuvenecimiento</span>
          </div>

          <div className="hidden md:block w-[1px] h-10 bg-white/40"></div> {/* Divisor vertical */}

          {/* Beneficio 3 */}
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex flex-col">
              <span className="text-white font-light tracking-wide text-[14px] md:text-[16px] leading-tight">Resultados</span>
              <span className="text-white font-light tracking-wide text-[14px] md:text-[16px] leading-tight">rápidos!</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OtrosTratamientosEsteticos;