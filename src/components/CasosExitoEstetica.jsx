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
    <section className="w-full bg-[#f8f8f6] font-principal pt-6 pb-10 md:pt-[140px] md:pb-[95px]">
      {/* FRANJA GRIS (ancho completo) */}
      <div
        className="w-full bg-[#8c8c8c] bg-cover bg-center md:min-h-[477px] flex items-center"
        style={{ backgroundImage: "url('/fondo-clinica-gris.jpg')", backgroundBlendMode: 'multiply' }}
      >
        {/* Contenedor interno centrado */}
        <div className="w-full max-w-[1000px] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center md:items-center justify-between gap-10 py-12 md:py-0">

          {/* FOTO VERTICAL: sobresale ~58px arriba y abajo de la franja */}
          <div className="relative z-20 w-full max-w-[340px] h-[560px] md:h-[680px] md:-my-[101px] shrink-0 rounded-2xl overflow-hidden bg-white shadow-sm">
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

          {/* TEXTOS alineados a la derecha */}
          <div className="relative z-10 flex flex-col items-center md:items-end text-center md:text-right text-white md:ml-auto">
            <h2
              className="text-[28px] md:text-[40px] leading-[1.12] tracking-[0.07em] font-light mb-7"
              style={{ fontFamily: 'Alta, serif' }}
            >
              QUERERTE ES ACEPTARTE<br />
              COMO ERES, PERO<br />
              TAMBIÉN ES CONSTRUIRTE<br />
              COMO QUIERES
            </h2>

            <div className="w-[180px] h-[3px] bg-[#cfaaa6] mb-7"></div>

            <p className="text-white text-[19px] md:text-[20px] font-light leading-[20px] max-w-[420px]">
              Nuestros tratamientos en dermatología estética
              buscan calidad y belleza, sin olvidar que la piel
              es un órgano complejo que tiene distintas capas
              y también posibles enfermedades. Nuestro
              objetivo es mejorar la piel con conocimiento y
              ciencia que nos brinda nuestra especialidad.
            </p>
          </div>

        </div>
      </div>

      {/* PUNTOS: debajo de la franja, a la derecha de la foto */}
      <div className="w-full max-w-[960px] mx-auto px-6 md:px-0 pt-7 flex justify-center md:justify-start md:pl-[385px]">
        <div className="flex gap-[13px]">
          {casos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCase(index)}
              aria-label={`Ver caso ${index + 1}`}
              className={`w-[18px] h-[18px] rounded-full border-[1.5px] transition-colors ${
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