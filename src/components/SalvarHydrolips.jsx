import React from 'react';

const SalvarHydrolips = () => {
  return (
    <>
      {/* =====================================================
    CELULAR Y TABLET (todo en vw, igualito al diseño)
    ===================================================== */}
<section
  className="lg:hidden relative w-full aspect-[628/640] bg-cover bg-center flex items-center font-principal mb-[10vw] overflow-hidden"
  style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793343565/vp5cw7x72emqjqx9yfel.png')" }}
>
  <div className="relative z-10 w-full px-[6.4vw] pt-[4vw]">

    {/* Texto superior (Letra más redondita y con cuerpo) */}
    <p 
      className="text-white/95 text-[3.3vw] font-normal leading-[1.3] tracking-wide drop-shadow-md mb-[5.5vw]"
      style={{ fontFamily: "'Nunito', 'Quicksand', 'Varela Round', sans-serif" }}
    >
      <span className="block whitespace-nowrap">Pregunta también por</span>
      <span className="block whitespace-nowrap">nuestro</span>
    </p>

    {/* Título */}
    <h2
      className="text-white text-[11.6vw] leading-[1.05] drop-shadow-lg"
      style={{ fontFamily: 'Alta, serif' }}
    >
      <span className="block">SALVAR</span>
      <span className="block whitespace-nowrap">HYDROLIPS</span>
    </h2>

    {/* Línea con puntito al final */}
    <div className="relative w-[57vw] h-[0.3vw] bg-white mt-[1.2vw] mb-[6.5vw] shadow-sm">
      <div className="absolute -right-[0.8vw] top-1/2 -translate-y-1/2 w-[1.6vw] h-[1.6vw] bg-white rounded-full"></div>
    </div>

    {/* Párrafo inferior (Letra más redondita y con cuerpo) */}
    <p 
      className="text-white/95 text-[3.3vw] font-normal leading-[1.25] drop-shadow-md"
      style={{ fontFamily: "'Nunito', 'Quicksand', 'Varela Round', sans-serif" }}
    >
      <span className="block whitespace-nowrap">Hidratación profunda no invasiva de</span>
      <span className="block whitespace-nowrap">labios, enfocado en dar</span>
      <span className="block whitespace-nowrap">luminosidad a esos labios</span>
      <span className="block whitespace-nowrap">deshidratados o con esas</span>
    </p>

  </div>
</section>

      {/* =====================================================
          PC (tu código original, sin cambios)
          ===================================================== */}
      <section 
        className="hidden lg:flex relative w-full h-[550px] md:h-[650px] lg:h-[750px] bg-cover bg-center items-center font-principal mb-16 md:mb-24"
        style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792692165/03_-_sexy_lips.jpg')" }}
      >
        
        {/* Overlay: Degradado oscuro sutil a la izquierda */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 md:from-black/50 via-black/20 to-transparent pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
          
          <div className="w-full md:w-[60%] lg:w-1/2">
            
            <p className="text-white/95 text-[14px] md:text-[15px] lg:text-[16px] font-light mb-2 tracking-wide drop-shadow-md">
              Pregunta también por nuestro
            </p>
            
            <h2 
              className="text-white text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1] mb-6 drop-shadow-lg"
              style={{ fontFamily: 'Alta, serif' }}
            >
              SALVAR<br />
              <div className="flex items-center gap-3 md:gap-4 mt-1">
                <span>HYDROLIPS</span>
                
                <div className="relative w-[100px] md:w-[150px] lg:w-[200px] h-[1.5px] bg-white mt-1 md:mt-3 shadow-sm">
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </h2>

            <p className="text-white/95 text-[13px] md:text-[14px] lg:text-[15.5px] font-light leading-snug max-w-[450px] drop-shadow-md">
              Hidratación profunda no invasiva de labios, enfocado en dar luminosidad a esos labios deshidratados o con esas descamación incómoda.
            </p>

          </div>
        </div>

      </section>
    </>
  );
};

export default SalvarHydrolips;