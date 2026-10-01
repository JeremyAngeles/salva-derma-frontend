import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MejorVersion = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 4;

  return (
    // font-principal aplica Montserrat a toda la sección por defecto
    <section className="relative w-full py-20 md:py-28 bg-[#f9f9f9] overflow-hidden font-principal flex justify-center">
      
      {/* Contenedor principal alineado */}
      <div className="relative z-10 w-full max-w-[1200px] pl-6 lg:pl-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos y Botón
            ========================================= */}
        <div className="flex flex-col justify-center h-full max-w-[440px] pr-6 lg:pr-0">
          
          {/* Se redujo el margin-bottom (mb-4) para acercarlo al título */}
          <p className="text-[#88807a] text-[15px] md:text-[16px] font-light leading-relaxed mb-4">
            Clínica con especialistas CERTIFICADOS<br />
            en dermatología, cirugía plástica, láser,<br />
            estética y expertos en faciales.
          </p>

          {/* Se redujo el interlineado (leading-[0.95]) y el margin-bottom (mb-4) */}
          <h2 
            className="text-4xl md:text-5xl lg:text-[3.2rem] text-[#053d57] leading-[0.95] tracking-wide mb-4"
            style={{ fontFamily: 'Alta, serif' }}
          >
            {/* Agregamos whitespace-nowrap para mantener la primera línea junta */}
            <span className="font-light whitespace-nowrap">TU MEJOR VERSIÓN,</span><br />
            <span className="font-light">ESTÁ AÚN POR</span><br />
            <span className="font-normal">LLEGAR</span>
          </h2>
          
          {/* Se ajustó el margin-bottom antes del botón */}
          <p className="text-[#88807a] text-[15px] md:text-[16px] font-light leading-relaxed mb-8">
            Nuestros servicios son realizados por<br />
            especialistas altamente capacitados fuera<br />
            y dentro del país, y priorizamos el manejo<br />
            conjunto de ambas especialidades según<br />
            la necesidad del caso.
          </p>

          <div>
            <Link 
              to="/reservar-cita" 
              className="inline-block bg-gradient-to-r from-[#cdb3ae] to-[#e4d1cd] text-white px-10 py-3.5 rounded-full font-medium text-lg shadow-sm hover:shadow-md transition-all"
            >
              Reserva tu consulta
            </Link>
          </div>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Imagen superpuesta al fondo celeste
            ========================================= */}
        <div className="relative w-full h-[450px] md:h-[650px]">
          
          {/* 1. FIGURA CELESTE DE FONDO */}
          <div className="absolute right-0 top-0 w-[70%] md:w-[65%] h-full bg-[#7caebc] rounded-l-[2.5rem] md:rounded-l-[3.5rem] z-0"></div>

          {/* 2. IMAGEN PRINCIPAL */}
          <div className="absolute left-0 top-[10%] w-[90%] md:w-[92%] h-[80%] rounded-l-[2.5rem] md:rounded-l-[3.5rem] overflow-hidden shadow-2xl z-10">
            <img 
              src="/clinica-recepcion.png" 
              alt="Recepción Clínica Salvar" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* 3. PUNTOS DEL CARRUSEL */}
          <div className="absolute bottom-0 right-0 w-[70%] md:w-[65%] h-[10%] flex justify-center items-center gap-3 md:gap-4 z-20">
            {Array.from({ length: totalImages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`rounded-full transition-all ${
                  index === currentImage 
                    ? 'w-3 h-3 md:w-3.5 md:h-3.5 bg-white' // Punto activo sólido
                    : 'w-3 h-3 md:w-3.5 md:h-3.5 bg-transparent border-[1.5px] border-white hover:bg-white/30' // Puntos inactivos con borde
                }`}
                aria-label={`Ver imagen ${index + 1} de la clínica`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default MejorVersion;