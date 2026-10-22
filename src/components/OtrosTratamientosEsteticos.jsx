import React from 'react';

const OtrosTratamientosEsteticos = () => {
  const otrosTratamientos = [
    {
      id: 1,
      titulo: "PEELING",
      desc: "Solos o combinados con láser:\nManchas, acné, calidad de piel y otros.",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690895/pleeling.jpg"
    },
    {
      id: 2,
      titulo: "BOTOX",
      desc: "",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690891/botox.jpg"
    },
    {
      id: 3,
      titulo: "HIALURÓNICO",
      desc: "",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792691122/Hialur%C3%B3nico.jpg"
    },
    {
      id: 4,
      titulo: "BIOESTIMULADORES\nDE COLÁGENO",
      desc: "",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690896/Bioestimuladores.jpg"
    },
    {
      id: 5,
      titulo: "MESOTERAPIA",
      desc: "Despigmentantes, hidratantes y antiedad.",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690897/mesoterap%C3%ADa.png"
    },
    {
      id: 6,
      titulo: "EXOSOMAS, PLASMA RICO EN\nPLAQUETAS Y PDRN DE SALMÓN",
      desc: "",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690897/EXOSOMAS.png"
    }
  ];

  return (
    <section className="relative w-full font-principal bg-white pb-8 md:pb-12">
      
      {/* =========================================
          BLOQUE SUPERIOR AMPLIADO EN ALTURA VERTICAL
          ========================================= */}
      <div 
        className="relative w-full pt-24 md:pt-36 pb-44 md:pb-60 bg-cover bg-[position:center_10%] md:bg-top bg-no-repeat min-h-[750px] md:min-h-[950px]"
        style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792691274/Otros_tratamientos_est%C3%A9ticos.jpg')" }}
      >
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
          
          {/* Contenedor de textos y lista alineado a la derecha */}
          <div className="flex flex-col items-end text-right w-full md:w-[55%] lg:w-[50%] ml-auto">
            
            <h2 
              className="text-[2.8rem] sm:text-[3.3rem] md:text-[3.8rem] lg:text-[4.3rem] text-[#053d57] leading-[1.05] mb-8 md:mb-12"
              style={{ fontFamily: 'Alta, serif' }}
            >
              OTROS<br />
              TRATAMIENTOS<br />
              ESTÉTICOS
            </h2>

            <div className="flex flex-col gap-4 md:gap-5 w-full">
              {otrosTratamientos.map((trat) => (
                <div key={trat.id} className="flex items-center justify-end gap-3 md:gap-4 group">
                  
                  {/* Textos alineados a la derecha */}
                  <div className="flex flex-col items-end">
                    <h4 className="text-[#78716c] font-bold text-[13px] md:text-[14px] lg:text-[15px] tracking-wider whitespace-pre-line uppercase text-right transition-colors group-hover:text-[#053d57]">
                      {trat.titulo}
                    </h4>
                    {trat.desc && (
                      <p className="text-[#88807a] font-light text-[11px] md:text-[12.5px] mt-0.5 whitespace-pre-line text-right leading-snug max-w-[280px]">
                        {trat.desc}
                      </p>
                    )}
                  </div>

                  {/* Imagen circular */}
                  <div className="w-[48px] h-[48px] md:w-[58px] md:h-[58px] flex-shrink-0 rounded-full overflow-hidden shadow-sm border border-[#e8e4e1] transition-transform duration-300 group-hover:scale-105 bg-white">
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
      </div>

      {/* =========================================
          BARRA INFERIOR CELESTE (En el límite exacto entre secciones)
          ========================================= */}
      <div className="relative z-20 max-w-[920px] mx-auto px-6 -mt-11 md:-mt-12">
        <div className="w-full bg-[#7ca1b4] rounded-[1.8rem] md:rounded-[2.2rem] py-5 md:py-6 px-6 lg:px-12 shadow-md flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0">
          
          {/* Beneficio 1: Naturalidad */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 md:w-11 md:h-11 flex-shrink-0 flex items-center justify-center">
              <img 
                src="/natarulidad.svg" 
                alt="Naturalidad" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-white font-light tracking-wide text-[15px] md:text-[17px]">Naturalidad</span>
          </div>

          {/* Divisor vertical */}
          <div className="hidden md:block w-[1.5px] h-12 bg-white/60"></div>

          {/* Beneficio 2: Rejuvenecimiento */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 md:w-11 md:h-11 flex-shrink-0 flex items-center justify-center">
              <img 
                src="/rejuvenecimiento.svg" 
                alt="Rejuvenecimiento" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-white font-light tracking-wide text-[15px] md:text-[17px]">Rejuvenecimiento</span>
          </div>

          {/* Divisor vertical */}
          <div className="hidden md:block w-[1.5px] h-12 bg-white/60"></div>

          {/* Beneficio 3: Resultados rápidos! */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 md:w-11 md:h-11 flex-shrink-0 flex items-center justify-center">
              <img 
                src="/rapidez.svg" 
                alt="Resultados rápidos" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="flex flex-col justify-center">
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