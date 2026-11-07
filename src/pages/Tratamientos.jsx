import React from 'react';
import Footer from '../components/Footer';
import PrincipalesTecnologias from '../components/PrincipalesTecnologias';
import OtrosTratamientosEsteticos from '../components/OtrosTratamientosEsteticos';
import EsteticaEspecialistas from '../components/EsteticaEspecialistas';

const Tratamientos = () => {
  const tratamientosGrid = [
    { 
      id: 1, 
      titulo: "BIOESTIMULADOR\nDE COLÁGENO", 
      img: "https://res.cloudinary.com/da47iihxz/image/upload/v1793137827/asqlvhrsnzauoctxgkbk.png" 
    },
    { 
      id: 2, 
      titulo: "TOXINA\nBOTULÍNICA", 
      img: "https://res.cloudinary.com/da47iihxz/image/upload/v1793137827/zssxtamidapqopm1tu5n.png" 
    },
    { 
      id: 3, 
      titulo: "ÁCIDO\nHIALURÓNICO", 
      img: "https://res.cloudinary.com/da47iihxz/image/upload/v1793137827/fwa2aryebzj3edvwbj97.png" 
    },
    { 
      id: 4, 
      titulo: "PLASMA RICO\nEN PLAQUETAS", 
      img: "https://res.cloudinary.com/da47iihxz/image/upload/v1793137827/zb4suanrpktk5h6mqhul.png" 
    },
  ];

  const getRoundedClass = (index) => {
    switch(index) {
      case 0: return "rounded-tl-[2.5rem] md:rounded-tl-[4.5rem] rounded-tr-sm rounded-bl-sm rounded-br-sm";
      case 1: return "rounded-tr-[2.5rem] md:rounded-tr-[4.5rem] rounded-tl-sm rounded-br-sm rounded-bl-sm";
      case 2: return "rounded-bl-[2.5rem] md:rounded-bl-[4.5rem] rounded-tl-sm rounded-br-sm rounded-tr-sm";
      case 3: return "rounded-br-[2.5rem] md:rounded-br-[4.5rem] rounded-bl-sm rounded-tr-sm rounded-tl-sm";
      default: return "rounded-2xl";
    }
  };

  return (
    <main className="w-full font-principal bg-[#faf9f8] flex flex-col min-h-screen pt-28 md:pt-36">
      
      {/* 1. CABECERA (Títulos y Textos) */}
      <section className="max-w-[1250px] mx-auto px-5 lg:px-12 w-full mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left gap-6 md:gap-10">
          
          {/* Contenedor del Título centrado y con ancho controlado para móvil */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start">
            <h1 
              className="text-[2.8rem] min-[380px]:text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7rem] text-[#053d57] leading-[0.95] tracking-wide drop-shadow-sm text-center md:text-left max-w-[450px] md:max-w-none mx-auto" 
              style={{ fontFamily: 'Alta, serif' }}
            >
              TRATAMIENTOS<br />ESTÉTICOS
            </h1>
          </div>
          
          {/* Contenedor del Párrafo y Botón centrados en móvil */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start mt-1 md:mt-0 md:pb-3">
            
            {/* MODIFICADO: Párrafo con la tipografía Montserrat */}
            <p 
              className="text-[#88807a] text-[15px] sm:text-[16px] md:text-[15px] lg:text-[18px] font-normal leading-snug tracking-tight mb-5 md:mb-6 max-w-[340px] sm:max-w-[400px] md:max-w-[420px] text-center md:text-left"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Nuestros tratamientos estéticos son realizados por especialistas en dermatología y cirugía plástica, buscando mejorar la calidad de piel mediante procedimientos seguros y efectivos.
            </p>
            
            <span className="bg-[#d1b3ab] text-white px-7 md:px-8 py-2.5 rounded-full text-[14px] md:text-[15px] tracking-wide shadow-sm font-medium whitespace-nowrap w-max mx-auto md:mx-0">
              Realza la belleza y equilibrio de tu piel
            </span>
          </div>

        </div>
      </section>

      {/* 2. CUADRÍCULA DE FOTOS (GRID) */}
      <section className="max-w-[1250px] mx-auto px-6 lg:px-12 w-full mb-16 md:mb-24">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
          {tratamientosGrid.map((trat, index) => (
            <div 
              key={trat.id} 
              className={`relative w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[400px] group cursor-pointer overflow-hidden bg-[#e8e4e1] shadow-md transition-all duration-300 ${getRoundedClass(index)}`}
            >
              <img 
                src={trat.img} 
                alt={trat.titulo.replace('\n', ' ')} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              <h3 className="absolute bottom-4 left-4 md:bottom-7 md:left-7 lg:bottom-9 lg:left-9 text-white font-bold text-[12px] sm:text-[15px] md:text-[18px] lg:text-[22px] leading-[1.2] tracking-wide whitespace-pre-line drop-shadow-md">
                {trat.titulo}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRINCIPALES TECNOLOGÍAS */}
      <PrincipalesTecnologias />

      {/* 4. OTROS TRATAMIENTOS ESTÉTICOS */}
      <OtrosTratamientosEsteticos />

      {/* 5. ESTÉTICA DE LA MANO DE ESPECIALISTAS (Cierre) */}
      <EsteticaEspecialistas />

      {/* FOOTER */}
      <div className="mt-auto">
        <Footer />
      </div>

    </main>
  );
};

export default Tratamientos;