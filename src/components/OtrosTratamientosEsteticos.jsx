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
    <section className="relative w-full font-principal bg-white flex flex-col items-center overflow-hidden pb-8 md:pb-12">
      <div 
        className="relative bg-cover bg-[position:center_10%] md:bg-top bg-no-repeat shrink-0 flex flex-col justify-center"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793138020/h5d05zkcxzzdoivgzoau.jpg')",
          width: '1900px',
          height: '1100px',
          minWidth: '1900px',
          minHeight: '1100px'
        }}
      >
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-end text-right w-full md:w-[55%] lg:w-[50%] ml-auto">
            <h2 
              className="text-[2.8rem] sm:text-[3.3rem] md:text-[3.8rem] lg:text-[4.3rem] text-[#053d57] leading-[1.05] mb-8 md:mb-12"
              style={{ fontFamily: 'Alta, serif' }}
            >
              OTROS<br />
              TRATAMIENTOS<br />
              ESTÉTICOS
            </h2>

            <div className="flex flex-col gap-6 md:gap-7 w-full">
              {otrosTratamientos.map((trat) => (
                <div key={trat.id} className="flex items-center justify-end gap-5 md:gap-6 group">
                  <div className="flex flex-col items-end justify-center">
                    <h4 className="text-[#053d57] font-bold text-[16px] md:text-[18px] lg:text-[20px] tracking-wider whitespace-pre-line uppercase text-right leading-none transition-colors group-hover:text-[#78716c]">
                      {trat.titulo}
                    </h4>
                    {trat.desc && (
                      <p className="text-[#88807a] font-medium text-[13px] md:text-[14px] mt-0.5 whitespace-pre-line text-right leading-snug max-w-[420px]">
                        {trat.desc}
                      </p>
                    )}
                  </div>

                  <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] flex-shrink-0 rounded-full overflow-hidden shadow-sm border border-[#e8e4e1] transition-transform duration-300 group-hover:scale-105 bg-white">
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

      <div className="relative z-20 w-full max-w-[1050px] mx-auto px-6 -mt-14 md:-mt-16">
        <div className="w-full bg-[#7ca1b4] rounded-[2rem] md:rounded-[2.5rem] py-6 md:py-8 px-6 lg:px-16 shadow-lg flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0">
          <div className="flex items-center gap-5">
            <div className="w-11 h-11 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
              <img 
                src="/natarulidad.svg" 
                alt="Naturalidad" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-white font-light tracking-wide text-[17px] md:text-[20px]">Naturalidad</span>
          </div>

          <div className="hidden md:block w-[1.5px] h-16 bg-white/60"></div>

          <div className="flex items-center gap-5">
            <div className="w-11 h-11 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
              <img 
                src="/rejuvenecimiento.svg" 
                alt="Rejuvenecimiento" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="text-white font-light tracking-wide text-[17px] md:text-[20px]">Rejuvenecimiento</span>
          </div>

          <div className="hidden md:block w-[1.5px] h-16 bg-white/60"></div>

          <div className="flex items-center gap-5">
            <div className="w-11 h-11 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
              <img 
                src="/rapidez.svg" 
                alt="Resultados rápidos" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white font-light tracking-wide text-[16px] md:text-[18px] leading-tight">Resultados</span>
              <span className="text-white font-light tracking-wide text-[16px] md:text-[18px] leading-tight">rápidos!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtrosTratamientosEsteticos;