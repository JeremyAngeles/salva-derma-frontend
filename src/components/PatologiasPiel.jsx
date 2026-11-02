import React from 'react';

const BG_MOVIL =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793303347/oomyvtmp3llxpwtckodg.png';

const BG_PC =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1793083400/cyqfycnv6uyynrgx7o41.jpg';

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
    <section
      className="relative w-full -mt-10 md:-mt-1 min-h-[640px] sm:min-h-[820px] md:min-h-[950px] lg:min-h-[850px] pt-14 pb-10 sm:pt-20 sm:pb-14 lg:pt-36 lg:pb-28 font-principal flex flex-col justify-start lg:justify-center overflow-hidden"
    >

      {/* FONDO CELULAR Y TABLET (solo < lg) */}
      <div
        className="lg:hidden absolute inset-0 z-0 bg-cover bg-no-repeat bg-[position:75%_center]"
        style={{ backgroundImage: `url('${BG_MOVIL}')` }}
      ></div>

      {/* FONDO PC (solo lg en adelante, igual que el original) */}
      <div
        className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BG_PC}')` }}
      ></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-10 flex flex-col">

        {/* TÍTULO: centrado arriba (solo celular y tablet) */}
        <h2
          className="lg:hidden text-center text-[2.2rem] min-[400px]:text-[2.6rem] sm:text-[3.8rem] md:text-[4.8rem] text-[#053d57] leading-[1.05] mb-10 sm:mb-16 md:mb-24"
          style={{ fontFamily: 'Alta, serif' }}
        >
          PATOLOGÍAS<br />
          QUE TRATAMOS
        </h2>

        {/* Grilla: la columna derecha empieza más a la derecha (~58%) */}
        <div className="grid grid-cols-[1.9fr_1fr] lg:grid-cols-2 gap-2 sm:gap-6 lg:gap-8 items-center">
          {/* Mitad izquierda: vacía para dejar ver la foto */}
          <div></div>

          {/* Mitad derecha: el texto baja de línea si no cabe */}
          <div className="flex flex-col py-2 lg:py-6 min-w-0">

            {/* Título (solo PC) */}
            <h2
              className="hidden lg:block lg:text-[4.5rem] text-[#053d57] leading-[1.05] mb-10"
              style={{ fontFamily: 'Alta, serif' }}
            >
              PATOLOGÍAS<br />
              QUE TRATAMOS
            </h2>

            {/* Ícono + subtítulo */}
            <div className="flex flex-col items-start gap-2 sm:gap-4 mb-4 sm:mb-8">

              <div className="w-11 h-11 min-[400px]:w-12 min-[400px]:h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                <img
                  src="/enfermedades-de-la-piel.svg"
                  alt="Icono Enfermedades de la piel"
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              <h3
                className="text-[#c59e93] text-[1.05rem] min-[400px]:text-[1.2rem] sm:text-3xl lg:text-4xl font-normal tracking-wide uppercase leading-tight"
                style={{ fontFamily: 'Alta, serif' }}
              >
                ENFERMEDADES<br className="lg:hidden" /> DE LA PIEL
              </h3>
            </div>

            {/* Lista de patologías */}
            <ul className="flex flex-col gap-1 sm:gap-2 lg:gap-2.5">
              {patologias.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 lg:gap-4 text-[#504a46] font-light text-[12.5px] min-[400px]:text-[13.5px] sm:text-xl leading-tight"
                >
                  <span className="mt-[7px] sm:mt-2.5 w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-[#504a46] flex-shrink-0"></span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PatologiasPiel;