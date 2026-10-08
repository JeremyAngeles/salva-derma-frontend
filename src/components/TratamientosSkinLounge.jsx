import React from 'react';

const TratamientosSkinLounge = () => {
  const tratamientos = [
    {
      id: 1,
      titulo: "HYDROFACIAL GLOW UP",
      descripcion: "Da vida brillo, nutrición y mayor hidratación a todo tipo de pieles pero sobre todo aquellas sensibles, apagadas, con tendencia a rojeces y quieren un glow up adicional, además tiene un efecto antiedad y antioxidante. Con Aparatología Hydrofacial y mascarilla EGYPTIAN aprobada por FDA. Brinda un booster de hidratación y detox, cuenta con 13 pasos.",
      imagen: "/skin-glowup.jpg" // Reemplaza con tu foto
    },
    {
      id: 2,
      titulo: "HYDROFACIAL PURE BALANCE",
      descripcion: "Para piel mixta a grasa, control de poros dilatados, tendencia a acné, espinillas. Con Aparatología Hydrafacial variada, prioriza el control de grasa sin olvidar la hidratación y efecto antiedad de tu piel. Cuenta con dos tipos de mascarilla seborreguladoras y de Carbón Activado, lleva 13 pasos.",
      imagen: "/skin-purebalance.jpg" // Reemplaza con tu foto
    },
    {
      id: 3,
      titulo: "HYDRAFACIAL ELITE",
      descripcion: "La experiencia más completa incluye cara, cuello y escote. Enfocada en el máximo efecto antiedad, se puede adaptar a todo tipo de piel grasa mixta, sensible, seca. Con moderna aparatología Hydrafacial y mascarilla de PDRN de Salmón (o la del mes) aprobado por FDA. Objetivos: nutrición intensa, control de grasa, hidratación profunda, renovación y antiedad. Cuenta con 15 pasos.",
      imagen: "/skin-elite.jpg" // Reemplaza con tu foto
    }
  ];

  return (
    <section className="w-full bg-[#faf9f8] py-16 md:py-24 font-principal">
      <div className="max-w-[1250px] mx-auto px-6 lg:px-12">

        {/* =========================================
            HEADER: Título y Subtítulo
            ========================================= */}
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
          
          {/* Subtítulo más grande y extenso con la flechita "v" */}
          <div className="flex items-center gap-2 text-[#88807a]">
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-light">
              Un espacio para engreírte y cuidar de ti que va más allá de un facial.
            </p>
            {/* Icono de flechita (Chevron down) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 text-[#c59e93] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* =========================================
            LISTA DE TRATAMIENTOS
            ========================================= */}
        {/* Aquí controlamos la separación entre cada bloque (gap-6 o gap-8) para que las fotos estén pegadas pero no tanto */}
        <div className="flex flex-col gap-6 md:gap-8">
          {tratamientos.map((trat, index) => (
            <div 
              key={trat.id} 
              className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 lg:gap-16"
            >
              
              {/* =========================================
                  COLUMNA IZQUIERDA (Textos y Raya Marrón)
                  ========================================= */}
              <div 
                className={`w-full md:w-1/2 flex flex-col justify-center py-4 md:py-6 ${
                  index !== tratamientos.length - 1 ? 'border-b border-[#c59e93]/40' : ''
                }`}
              >
                <h4 
                  className="text-[20px] md:text-[24px] lg:text-[26px] text-[#053d57] mb-3 md:mb-4 tracking-wide"
                  style={{ fontFamily: 'Alta, serif' }}
                >
                  {trat.titulo}
                </h4>
                <p className="text-[#88807a] text-[13px] md:text-[14px] lg:text-[15px] font-light leading-relaxed pr-2 md:pr-6">
                  {trat.descripcion}
                </p>
              </div>

              {/* =========================================
                  COLUMNA DERECHA (Imágenes)
                  ========================================= */}
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
  );
};

export default TratamientosSkinLounge;