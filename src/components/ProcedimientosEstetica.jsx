import React, { useState, useEffect } from 'react';

const ProcedimientosEstetica = () => {
  const procedimientos = [
    {
      id: 1,
      title: "LÁSER",
      desc: "De rejuvenecimiento fraccionado, láser 4D con efecto lifting/tensado, láser despigmentante y láser para zona de ojeras.",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531324/1xd.png" 
    },
    {
      id: 2,
      title: "MICROPUNCIONES / NANOPORE",
      desc: "",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531325/2xd.png" 
    },
    {
      id: 3,
      title: "PEELINGS",
      desc: "",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531326/3xd.png" 
    },
    {
      id: 4,
      title: "MESOTERAPIA",
      desc: "Despigmentantes, hidratantes, exosomas y PDRN de salmón.",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531327/4xd.png" 
    },
    {
      id: 5,
      title: "INYECTABLES",
      desc: "Botox, Ácido hialurónico, Bioestimuladores de colágeno, etc.",
      img: "https://res.cloudinary.com/cgfzvuli/image/upload/v1792531328/5xd.png" 
    }
  ];

  // Imágenes del carrusel dinámico para la parte derecha
  const imagenesDerecha = [
    "https://res.cloudinary.com/da47iihxz/image/upload/v1792811183/k1awdsojbvhkyvnoclnl.jpg",
    "https://res.cloudinary.com/da47iihxz/image/upload/v1792811183/mwkhqvkehpbrhk8ssgdk.jpg",
    "https://res.cloudinary.com/da47iihxz/image/upload/v1792811184/w7gbjzpniifjqcclyfe0.jpg",
    "https://res.cloudinary.com/da47iihxz/image/upload/v1792811182/r5rux6vuzjejuacwei0o.jpg"
  ];

  const [currentImg, setCurrentImg] = useState(0);

  // Efecto para que pasen cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % imagenesDerecha.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [imagenesDerecha.length]);

  return (
    <section 
      className="relative w-full py-20 md:py-28 font-principal overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792531302/03_fondo_blanco.png')" }}
    >
      
      {/* Capa de protección opcional para legibilidad */}
      <div className="absolute inset-0 bg-white/40 md:bg-white/20 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-10">
        
        {/* Título Principal más grande */}
        <h2 
          className="text-[2.8rem] md:text-5xl lg:text-[4.5rem] text-[#053d57] text-center mb-16 md:mb-20 tracking-wide drop-shadow-sm"
          style={{ fontFamily: 'Alta, serif' }}
        >
          PROCEDIMIENTOS
        </h2>

        {/* Contenedor a 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Lista de Procedimientos */}
          <div className="flex flex-col gap-6 md:gap-8 bg-white/50 md:bg-transparent p-6 md:p-0 rounded-[2rem] backdrop-blur-sm md:backdrop-blur-none shadow-sm md:shadow-none">
            {procedimientos.map((proc) => (
              <div key={proc.id} className="flex items-center gap-5 md:gap-6 group">
                
                {/* Imagen Circular */}
                <div className="w-16 h-16 md:w-[95px] md:h-[95px] flex-shrink-0 rounded-full overflow-hidden shadow-md border-[3px] border-white bg-white transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={proc.img} 
                    alt={proc.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#dcc4bc]' }}
                  />
                </div>

                {/* Textos del Item (Título y Descripción mucho más juntos) */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-[#c59e93] font-medium text-base md:text-lg tracking-widest uppercase mb-0 drop-shadow-sm transition-colors duration-300 group-hover:text-[#a88277]">
                    {proc.title}
                  </h3>
                  {proc.desc && (
                    <p className="text-[#88807a] text-[14px] md:text-[16px] font-semibold md:font-light leading-snug max-w-[450px]">
                      {proc.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* COLUMNA DERECHA: Carrusel de Imagen/Video con Borde Blanco */}
          <div className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
            <div className="relative w-full max-w-[450px] lg:max-w-[500px] h-[450px] md:h-[550px] lg:h-[650px] rounded-[2.5rem] border-[8px] md:border-[12px] border-white shadow-2xl overflow-hidden bg-white">
              
              {/* Imágenes del carrusel */}
              {imagenesDerecha.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Procedimiento Estético ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='absolute inset-0 w-full h-full object-cover bg-gray-200' }}
                />
              ))}

              {/* Botoncitos para controlar el carrusel */}
              <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2.5 z-20">
                {imagenesDerecha.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImg(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      currentImg === idx ? 'bg-white w-2.5 h-2.5 scale-125' : 'bg-white/50 w-2.5 h-2.5 hover:bg-white/80'
                    }`}
                    aria-label={`Ver imagen ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcedimientosEstetica;