import React from 'react';
import Footer from '../components/Footer';
import PrincipalesTecnologias from '../components/PrincipalesTecnologias';
import OtrosTratamientosEsteticos from '../components/OtrosTratamientosEsteticos'; // Nuevo
import EsteticaEspecialistas from '../components/EsteticaEspecialistas'; // Nuevo

const Tratamientos = () => {
  const tratamientosGrid = [
    { 
      id: 1, 
      titulo: "BIOESTIMULADOR\nDE COLÁGENO", 
      img: "/tratamiento-bioestimulador.jpg" 
    },
    { 
      id: 2, 
      titulo: "TOXINA\nBOTULINICA", 
      img: "/tratamiento-toxina.jpg" 
    },
    { 
      id: 3, 
      titulo: "ÁCIDO\nHIALURONICO", 
      img: "/tratamiento-acido.jpg" 
    },
    { 
      id: 4, 
      titulo: "PLASMA RICO\nEN PLAQUETAS", 
      img: "/tratamiento-plasma.jpg" 
    },
  ];

  return (
    <main className="w-full font-principal bg-[#faf9f8] flex flex-col min-h-screen pt-28 md:pt-36">
      
      {/* 1. CABECERA (Títulos y Textos) */}
      <section className="max-w-[1300px] mx-auto px-6 lg:px-12 w-full mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
          <div className="w-full md:w-auto">
            <h1 
              className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] text-[#053d57] leading-[1.05] tracking-wide" 
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
            <span className="bg-[#d1b3ab] text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[13px] md:text-[15px] tracking-wide shadow-sm font-medium">
              Realza la belleza y equilibrio de tu piel
            </span>
          </div>
        </div>
      </section>

      {/* 2. CUADRÍCULA DE FOTOS (GRID) */}
      <section className="max-w-[1300px] mx-auto px-6 lg:px-12 w-full mb-16 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2.5 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-white shadow-sm border-[6px] border-white">
          {tratamientosGrid.map((trat) => (
            <div 
              key={trat.id} 
              className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] group cursor-pointer overflow-hidden bg-[#e8e4e1]"
            >
              <img 
                src={trat.img} 
                alt={trat.titulo.replace('\n', ' ')} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
              <h3 className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white font-semibold text-[18px] md:text-[22px] lg:text-[26px] leading-[1.2] tracking-wide whitespace-pre-line drop-shadow-md">
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