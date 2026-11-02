import React from 'react';

const TratamientosSkinLounge = () => {
  const tratamientos = [
    {
      id: 1,
      titulo: "HYDROFACIAL GLOW UP",
      descripcion: "Da vida brillo, nutrición y mayor hidratación a todo tipo de pieles pero sobre todo aquellas sensibles, apagadas, con tendencia a rojeces y quieren un glow up adicional, además tiene un efecto antiedad y antioxidante. Con Aparatología Hydrofacial y mascarilla EGYPTIAN aprobada por FDA. Brinda un booster de hidratación y detox, cuenta con 13 pasos.",
      descMovil: [
        "Da vida brillo, nutrición y mayor hidratación a todo tipo de",
        "pieles pero sobre todo aquellas sensibles, apagadas, con",
        "tendencia a rojeces y quieren un glow up adicional, además",
        "tiene un efecto antiedad y antioxidante. Con Aparatología",
        "Hydrofacial y mascarilla EGYPTIAN aprobada por FDA. Brinda",
        "un booster de hidratación y detox, cuenta con 13 pasos."
      ],
      imagen: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792692751/11.jpg"
    },
    {
      id: 2,
      titulo: "HYDROFACIAL PURE BALANCE",
      descripcion: "Para piel mixta a grasa, control de poros dilatados, tendencia a acné, espinillas. Con Aparatología Hydrafacial variada, prioriza el control de grasa sin olvidar la hidratación y efecto antiedad de tu piel. Cuenta con dos tipos de mascarilla seborreguladoras y de Carbón Activado, lleva 13 pasos.",
      descMovil: [
        "Para piel mixta a grasa, control de poros dilatados, tendencia a",
        "acné, espinillas. Con Aparatología Hydrafacial variada, prioriza el",
        "control de grasa sin olvidar  la hidratación y  efecto antiedad de",
        "tu piel. Cuenta con dos tipos de mascarilla seborreguladoras y",
        "de Carbón Activado,  lleva 13 pasos."
      ],
      imagen: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792692750/22.jpg"
    },
    {
      id: 3,
      titulo: "HYDRAFACIAL ELITE",
      descripcion: "La experiencia más completa incluye cara, cuello y escote. Enfocada en el máximo efecto antiedad, se puede adaptar a todo tipo de piel grasa mixta, sensible, seca. Con moderna aparatología Hydrafacial y mascarilla de PDRN de Salmón (o la del mes) aprobado por FDA. Objetivos: nutrición intensa, control de grasa, hidratación profunda, renovación y antiedad. Cuenta con 15 pasos.",
      descMovil: [
        "La experiencia más completa incluye cara, cuello y escote.",
        "Enfocada en el máximo efecto antiedad, se puede adaptar a todo",
        "tipo de piel grasa mixta, sensible, seca. Con moderna",
        "aparatología Hydrafacial y  mascarilla de PDRN de Salmón (o la",
        "del mes) aprobado por FDA. Objetivos: nutrición intensa, control",
        "de grasa, hidratación profunda, renovación y antiedad. Cuenta",
        "con 15 pasos."
      ],
      imagen: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792692751/33.png"
    }
  ];

  return (
    <>
      {/* =====================================================
          CELULAR Y TABLET (todo en vw, igualito al diseño)
          ===================================================== */}
      <section className="lg:hidden w-full bg-[#faf9f8] pt-[2vw] pb-[10vw] font-principal relative z-20">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-[11.6vw] text-[#053d57] leading-none tracking-wide"
            style={{ fontFamily: 'Alta, serif' }}
          >
            SKIN LOUNGE
          </h2>
          <h3 className="text-[#c9aea5] text-[5.6vw] italic font-light tracking-wide leading-none mt-[1vw]">
            By SALVAR
          </h3>

          <p className="text-[#88807a] text-[2.9vw] font-medium leading-[1.35] mt-[3.5vw]">
            <span className="block whitespace-nowrap">Un espacio para engreírte y cuidar de ti que va</span>
            <span className="block whitespace-nowrap">más allá de un facial.</span>
          </p>

          <svg xmlns="http://www.w3.org/2000/svg" className="w-[5.4vw] h-[5.4vw] text-[#c59e93] mt-[4vw]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Lista */}
        <div className="mt-[7vw]">
          {tratamientos.map((trat, index) => (
            <div key={trat.id} className="flex flex-col items-center text-center">

              {/* Línea divisoria (entre tratamientos) */}
              {index !== 0 && (
                <div className="w-[88.5%] border-t border-[#cfcac6] mt-[6.5vw] mb-[6vw]"></div>
              )}

              <h4
                className="text-[6.0vw] text-[#053d57] leading-none tracking-wide mb-[2.4vw] whitespace-nowrap"
                style={{ fontFamily: 'Alta, serif' }}
              >
                {trat.titulo}
              </h4>

              <p className="text-[#88807a] text-[2.75vw] font-medium leading-[1.4]">
                {trat.descMovil.map((linea, i) => (
                  <span key={i} className="block whitespace-nowrap">{linea}</span>
                ))}
              </p>

              <div className="w-[90%] h-[36vw] rounded-[4.5vw] overflow-hidden mt-[4.4vw]">
                <img
                  src={trat.imagen}
                  alt={trat.titulo}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#e8e4e1]' }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PC (sin cambios)
          ===================================================== */}
      <section className="hidden lg:block w-full bg-[#faf9f8] -mt-16 md:-mt-24 pt-4 pb-16 md:pb-24 font-principal relative z-20">
        <div className="max-w-[1250px] mx-auto px-6 lg:px-12">

          <div className="mb-10 md:mb-14">
            <h2 
              className="text-[3rem] md:text-[4rem] text-[#053d57] leading-none tracking-wide"
              style={{ fontFamily: 'Alta, serif' }}
            >
              SKIN LOUNGE
            </h2>
            <h3 className="text-[#c59e93] text-[1.1rem] md:text-2xl italic font-light tracking-wide mb-3">
              By SALVAR
            </h3>
            
            <div className="flex items-center gap-2 text-[#88807a]">
              <p className="text-[15px] md:text-[16px] lg:text-[17px] font-medium">
                Un espacio para engreírte y cuidar de ti que va más allá de un facial.
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-[#c59e93] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {tratamientos.map((trat, index) => (
              <div 
                key={trat.id} 
                className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 lg:gap-16"
              >
                <div 
                  className={`w-full md:w-1/2 flex flex-col justify-center py-4 md:py-6 ${
                    index !== tratamientos.length - 1 ? 'border-b border-[#c59e93]/40' : ''
                  }`}
                >
                  <h4 
                    className="text-[20px] md:text-[24px] lg:text-[36px] text-[#053d57] mb-3 md:mb-4 tracking-wide"
                    style={{ fontFamily: 'Alta, serif' }}
                  >
                    {trat.titulo}
                  </h4>
                  <p className="text-[#88807a] text-[13px] md:text-[14px] lg:text-[15px] font-medium leading-snug pr-2 md:pr-6">
                    {trat.descripcion}
                  </p>
                </div>

                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] lg:h-[320px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden">
                    <img 
                      src={trat.imagen} 
                      alt={trat.titulo} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#e8e4e1]' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default TratamientosSkinLounge;