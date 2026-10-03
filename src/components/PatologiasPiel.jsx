import React from 'react';

const PatologiasPiel = () => {
  const patologias = [
    "Psoriasis",
    "Dermatitis atópica o de otro tipo",
    "Dermatitis seborreica",
    "Cáncer de piel",
    "Tiñas",
    "Biopsia de piel para diagnóstico de cáncer de piel",
    "Otras condiciones dermatológicas"
  ];

  return (
    <section className="w-full bg-[#fbfbfb] font-principal flex flex-col md:flex-row items-stretch">
      
      {/* Mitad Izquierda: Imagen */}
      <div 
        className="w-full md:w-1/2 h-[400px] md:h-auto bg-cover bg-center" 
        style={{ backgroundImage: "url('/patologias-piel.jpg')" }} // Reemplaza con tu imagen
      ></div>

      {/* Mitad Derecha: Contenido */}
      <div className="w-full md:w-1/2 px-8 py-16 md:px-16 lg:px-24 flex flex-col justify-center">
        
        {/* Título Principal */}
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl text-[#053d57] leading-[1.1] mb-10"
          style={{ fontFamily: 'Alta, serif' }}
        >
          PATOLOGÍAS<br/>
          QUE TRATAMOS
        </h2>

        {/* Subtítulo con Ícono */}
        <div className="flex flex-col items-start gap-4 mb-8">
          <div className="w-12 h-12 rounded-full border border-[#c59e93] flex items-center justify-center text-[#c59e93]">
            {/* Ícono representativo de piel */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-8c.83 0 1.5-.67 1.5-1.5S8.83 9 8 9s-1.5.67-1.5 1.5S7.17 12 8 12zm8 0c.83 0 1.5-.67 1.5-1.5S16.83 9 16 9s-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-4 4c1.66 0 3-1.34 3-3H9c0 1.66 1.34 3 3 3z" />
            </svg>
          </div>
          <h3 className="text-[#c59e93] text-lg md:text-xl font-light tracking-[0.15em] uppercase">
            Enfermedades de la piel
          </h3>
        </div>

        {/* Lista de Patologías */}
        <ul className="flex flex-col gap-3.5">
          {patologias.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-[#6b625c] font-light text-[15px] md:text-base leading-snug">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#6b625c] flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
        
      </div>
    </section>
  );
};

export default PatologiasPiel;