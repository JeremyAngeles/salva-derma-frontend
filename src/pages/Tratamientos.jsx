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
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690139/BIOESTIMULADOR.png" 
    },
    { 
      id: 2, 
      titulo: "TOXINA\nBOTULINICA", 
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690139/TOXINA.png" 
    },
    { 
      id: 3, 
      titulo: "ÁCIDO\nHIALURONICO", 
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690139/%C3%81CIDO_H.png" 
    },
    { 
      id: 4, 
      titulo: "PLASMA RICO\nEN PLAQUETAS", 
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792690139/PLASMA.png" 
    },
  ];

  // Redondeo exacto según el diseño: Esquinas exteriores muy redondas, interiores casi rectas
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
      <section className="max-w-[1250px] mx-auto px-6 lg:px-12 w-full mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
          
          <div className="w-full md:w-auto">
            <h1 
              className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7rem] text-[#053d57] leading-[1.05] tracking-wide drop-shadow-sm" 
              style={{ fontFamily: 'Alta, serif' }}
            >
              TRATAMIENTOS<br />ESTÉTICOS
            </h1>
          </div>
          
          <div className="w-full md:w-auto flex flex-col items-start md:pb-4">
            <p className="text-[#88807a] text-[14px] md:text-[15px] lg:text-[16px] font-light leading-relaxed mb-5 max-w-[480px]">
              Nuestros tratamientos estéticos son<br className="hidden sm:block"/>
              realizados por especialistas en dermatología<br className="hidden sm:block"/>
              y cirugía plástica, buscando mejorar la<br className="hidden sm:block"/>
              calidad de piel mediante procedimientos<br className="hidden sm:block"/>
              seguros y efectivos.
            </p>
            
            {/* ETIQUETA CORREGIDA: Se agregó whitespace-nowrap y w-max para que NUNCA baje a otra línea */}
            <span className="bg-[#d1b3ab] text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[13px] md:text-[15px] tracking-wide shadow-sm font-medium whitespace-nowrap w-max">
              Realza la belleza y equilibrio de tu piel
            </span>
          </div>

        </div>
      </section>

      {/* 2. CUADRÍCULA DE FOTOS (GRID) - SIN BORDE BLANCO, MÁS GRANDE Y HORIZONTAL */}
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