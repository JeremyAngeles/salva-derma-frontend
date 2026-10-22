import React from 'react';

const TratamientosLaserList = () => {
  const tratamientos = [
    {
      titulo: "DISTINTOS TIPOS DE CICATRICES:",
      descripcion: "De acné, queloides, por accidentes, cortes y postquirúrgicas."
    },
    {
      titulo: "ENFERMEDADES INFLAMATORIAS Y ROJECES :",
      descripcion: "Acné, rosácea y telangiectasias."
    },
    {
      titulo: "MANCHAS FACIALES:",
      descripcion: "Pecas, melasma, manchas postinflamatorias, lentigo y nevus de Ota."
    },
    {
      titulo: "MANCHAS CORPORALES:",
      descripcion: "En axilas, espalda e ingle."
    },
    {
      titulo: "ALTERACIONES DE LA PIEL:",
      descripcion: "Verrugas, lunares, acrocordones, estrías y queratosis."
    },
    {
      titulo: "ONICOMICOSIS",
      descripcion: "" // No tiene descripción en la imagen
    },
    {
      titulo: "REJUVENECIMIENTO FACIAL:",
      descripcion: "Líneas de expresión, flacidez, poros dilatados, textura de piel, etc."
    }
  ];

  return (
    // Aquí pusimos la imagen como FONDO de toda la sección
    <section 
      className="relative w-full py-20 md:py-28 font-principal overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792613169/copy_of_03_-tratamientos_que_realizamos.png')" }}
    >
      
      {/* Capa de protección opcional por si el texto choca con algo del fondo */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos y Lista
            ========================================= */}
        <div className="flex flex-col">
          
          {/* Título (Fuente Alta) */}
          <h2 
            className="text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-tight mb-6 drop-shadow-md"
            style={{ fontFamily: 'Alta, serif' }}
          >
            TRATAMIENTOS LÁSER
          </h2>

          {/* Párrafo introductorio */}
          <p className="text-white text-base md:text-lg font-light leading-relaxed mb-10 max-w-[95%] drop-shadow-sm">
            Nuestra unidad nos permite tratar distintas enfermedades y mejorar la piel de manera precisa:
          </p>

          {/* Lista de tratamientos */}
          <div className="flex flex-col gap-5 md:gap-6">
            {tratamientos.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Viñeta (Puntito blanco) */}
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white mt-1.5 md:mt-2 flex-shrink-0 shadow-sm"></div>
                
                {/* Contenido del ítem */}
                <div className="flex flex-col drop-shadow-sm">
                  <h3 className="text-white font-bold text-sm md:text-[15px] tracking-wide uppercase leading-snug">
                    {item.titulo}
                  </h3>
                  {item.descripcion && (
                    <p className="text-white/90 font-light text-sm md:text-[15px] mt-1 leading-snug">
                      {item.descripcion}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* =========================================
            COLUMNA DERECHA: Imagen con marco
            ========================================= */}
        <div className="relative w-full max-w-[500px] mx-auto lg:ml-auto mt-8 lg:mt-0">
          
          {/* Marco decorativo de fondo (offset) */}
          <div className="absolute inset-0 border-[3px] border-[#d2beba] rounded-[2rem] transform translate-x-4 -translate-y-4 md:translate-x-6 md:-translate-y-6"></div>
          
          {/* Imagen Principal (Aquí va la OTRA imagen que me vas a pasar) */}
          <img 
            src="/foto-pendiente.png" // <--- Mándame el link de Cloudinary para reemplazar esto
            alt="Paciente recibiendo tratamiento láser" 
            className="relative z-10 w-full h-auto min-h-[400px] rounded-[2rem] object-cover shadow-2xl bg-white/20"
            onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
          />
        </div>

      </div>
    </section>
  );
};

export default TratamientosLaserList;