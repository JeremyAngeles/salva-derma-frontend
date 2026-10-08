import React from 'react';

const SalvarHydrolips = () => {
  return (
    // La sección ahora es el contenedor de la imagen directamente y ocupa w-full (todo el ancho)
    // Le ponemos margin-bottom (mb-16 md:mb-24) para separarlo del Footer
    <section 
      className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] bg-cover bg-center flex items-center font-principal mb-16 md:mb-24"
      style={{ backgroundImage: "url('/hydrolips-bg.jpg')" }} // Reemplaza con la foto de los labios
    >
      
      {/* Overlay: Degradado oscuro sutil a la izquierda (ocupa toda la pantalla) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 md:from-black/50 via-black/20 to-transparent pointer-events-none"></div>

      {/* =========================================
          CONTENEDOR DE TEXTOS 
          (Centrado con max-w para que el texto no se pegue a los bordes en pantallas gigantes)
          ========================================= */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
        
        {/* Lado Izquierdo (Textos) */}
        <div className="w-full md:w-[60%] lg:w-1/2">
          
          {/* Texto Pequeño Superior */}
          <p className="text-white/95 text-[14px] md:text-[15px] lg:text-[16px] font-light mb-2 tracking-wide drop-shadow-md">
            Pregunta también por nuestro
          </p>
          
          {/* Título Principal y Línea */}
          <h2 
            className="text-white text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1] mb-6 drop-shadow-lg"
            style={{ fontFamily: 'Alta, serif' }}
          >
            SALVAR<br />
            <div className="flex items-center gap-3 md:gap-4 mt-1">
              <span>HYDROLIPS</span>
              
              {/* Línea decorativa con el puntito al final */}
              <div className="relative w-[100px] md:w-[150px] lg:w-[200px] h-[1.5px] bg-white mt-1 md:mt-3 shadow-sm">
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </h2>

          {/* Párrafo Descriptivo */}
          <p className="text-white/95 text-[13px] md:text-[14px] lg:text-[15.5px] font-light leading-relaxed max-w-[450px] drop-shadow-md">
            Hidratación profunda no invasiva de labios, enfocado<br className="hidden sm:block"/>
            en dar luminosidad a esos labios deshidratados o con<br className="hidden sm:block"/>
            esas descamación incómoda.
          </p>

        </div>
      </div>

    </section>
  );
};

export default SalvarHydrolips;