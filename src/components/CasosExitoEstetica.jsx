import React, { useState, useEffect } from 'react';

const CasosExitoEstetica = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const casos = [
    { id: 1, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696123/antes_y_despu%C3%A9s_estetica_1.jpg' },
    { id: 2, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696120/antes_y_despu%C3%A9s_estetica_2.jpg' },
    { id: 3, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696121/antes_y_despu%C3%A9s_estetica_3.jpg' },
    { id: 4, img: 'https://res.cloudinary.com/cgfzvuli/image/upload/v1792696123/antes_y_despu%C3%A9s_estetica_4.jpg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % casos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [casos.length]);

  return (
    <section className="w-full bg-white font-principal pt-6 pb-10 md:pt-[140px] md:pb-[95px]">
      
      {/* FRANJA DE FONDO */}
      <div
        className="w-full bg-cover bg-center md:min-h-[580px] flex items-center"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1792811388/ltdu5utjhfkbul0cfkjz.png')"
        }}
      >
        {/* Contenedor interno centrado */}
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center md:items-center justify-between gap-10 py-12 md:py-0">

          {/* FOTO VERTICAL */}
          <div className="relative z-20 w-full max-w-[340px] h-[560px] md:h-[680px] md:-my-[50px] shrink-0 rounded-2xl overflow-hidden bg-white shadow-lg">
            <img
              src={casos[currentCase].img}
              alt={`Caso Estética ${currentCase + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
                e.target.className = 'w-full h-full object-cover bg-[#dcc4bc]';
              }}
            />
          </div>

          {/* TEXTOS */}
          <div className="relative z-10 flex flex-col items-center md:items-end text-center md:text-right text-white md:ml-auto">
            
            {/* Título con líneas más juntas (leading-[1.05]) */}
            <h2
              className="text-[28px] md:text-[42px] lg:text-[46px] leading-[1.05] tracking-[0.05em] font-light mb-5 drop-shadow-md"
              style={{ fontFamily: 'Alta, serif' }}
            >
              QUERERTE ES ACEPTARTE<br />
              COMO ERES, PERO<br />
              TAMBIÉN ES CONSTRUIRTE<br />
              OMO QUIERES.
            </h2>

            {/* Línea divisoria */}
            <div className="w-[150px] md:w-[220px] h-[3px] bg-[#cfaaa6] mb-6"></div>

            {/* Párrafo con líneas más juntas (leading-[1.35]) */}
            <p className="text-white text-[16px] md:text-[19px] lg:text-[21px] font-light leading-[1.35] max-w-[620px] drop-shadow-md">
              Nuestros tratamientos en dermatología estética<br className="hidden md:block" />
              buscan calidad y belleza, sin olvidar que la piel<br className="hidden md:block" />
              es un órgano complejo que tiene distintas capas<br className="hidden md:block" />
              y también posibles enfermedades. Nuestro<br className="hidden md:block" />
              objetivo es mejorar la piel con conocimiento y<br className="hidden md:block" />
              ciencia que nos brinda nuestra especialidad.
            </p>

          </div>

        </div>
      </div>

      {/* PUNTOS: debajo de la franja, a la derecha de la foto */}
      <div className="w-full max-w-[1060px] mx-auto px-6 md:px-0 pt-7 flex justify-center md:justify-start md:pl-[385px]">
        <div className="flex gap-[13px]">
          {casos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCase(index)}
              aria-label={`Ver caso ${index + 1}`}
              className={`w-[18px] h-[18px] rounded-full border-[1.5px] transition-colors shadow-sm ${
                currentCase === index
                  ? 'bg-[#cfaaa6] border-[#cfaaa6]'
                  : 'bg-transparent border-[#1b4a72] hover:bg-[#1b4a72]/10'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasosExitoEstetica;