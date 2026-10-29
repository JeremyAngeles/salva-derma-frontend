import React, { useState, useEffect } from 'react';

const EsteticaEspecialistas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const casos = [
    {
      id: 1,
      antes: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139681/rjg5egyek8fk4eamqecq.png",
      despues: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139691/w4tpg2iitlmu7wloey6q.png"
    },
    {
      id: 2,
      antes: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139691/g3wguky1cilh2jw7aiwv.png",
      despues: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139690/nodbk5p5ymdxwezzoerw.png"
    },
    {
      id: 3,
      antes: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139690/lanvpqo7ccrh2fsowxwl.png",
      despues: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139689/ry1l2gmnsf6gls56kuew.png"
    },
    {
      id: 4,
      antes: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139689/i5cqfyzbwfbpcd3uqlxc.png",
      despues: "https://res.cloudinary.com/da47iihxz/image/upload/v1793139681/uwst36igldkhuxvqtmaf.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % casos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [casos.length]);

  return (
    <section className="relative w-full bg-white pt-16 md:pt-24 pb-20 font-principal">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 
          className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.6rem] xl:text-[4.2rem] text-[#053d57] leading-none mb-4 whitespace-nowrap"
          style={{ fontFamily: 'Alta, serif' }}
        >
          ESTÉTICA DE LA MANO DE ESPECIALISTAS
        </h2>
        <p className="text-[#88807a] text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-snug max-w-[700px] mx-auto mb-12 md:mb-16">
          Resaltamos la belleza respetando la naturalidad de cada rostro, siempre bajo<br className="hidden md:block"/>
          tratamientos seguros y con nuestros especialistas altamente capacitados
        </p>
      </div>

      <div className="relative w-full mb-10">
        <div className="absolute inset-x-0 top-[20%] md:top-[25%] bottom-[20%] md:bottom-[25%] bg-[#d3d3d3] z-0"></div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg flex flex-col sm:flex-row bg-[#e8e4e1] relative">
            
            {casos.map((caso, index) => (
              <div 
                key={caso.id}
                className={`absolute inset-0 w-full h-full flex flex-col sm:flex-row transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="relative w-full sm:w-1/2 h-[300px] md:h-[400px] lg:h-[450px]">
                  <img 
                    src={caso.antes} 
                    alt={`Antes del tratamiento ${index + 1}`} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#d8d4d0] object-cover' }}
                  />
                  <div className="absolute bottom-4 md:bottom-6 left-0 w-full flex justify-center pointer-events-none">
                    <span 
                      className="text-white text-xl md:text-3xl tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase"
                      style={{ fontFamily: 'Alta, serif' }}
                    >
                      ANTES
                    </span>
                  </div>
                </div>
                
                <div className="hidden sm:block w-1 h-full bg-white absolute left-1/2 transform -translate-x-1/2 z-20"></div>

                <div className="relative w-full sm:w-1/2 h-[300px] md:h-[400px] lg:h-[450px]">
                  <img 
                    src={caso.despues} 
                    alt={`Después del tratamiento ${index + 1}`} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full bg-[#d8d4d0] object-cover' }}
                  />
                  <div className="absolute bottom-4 md:bottom-6 left-0 w-full flex justify-center pointer-events-none">
                    <span 
                      className="text-white text-xl md:text-3xl tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase"
                      style={{ fontFamily: 'Alta, serif' }}
                    >
                      DESPUÉS
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="w-full h-[600px] sm:h-[400px] lg:h-[450px] pointer-events-none"></div>

          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 mb-16 md:mb-20">
        {casos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ver caso ${index + 1}`}
            className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-[#d1b3ab]' : 'border border-[#88807a] hover:bg-[#d1b3ab]/50'
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col items-center">
        <a 
          href="https://wa.me/51994060977" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-3 bg-[#d1b3ab] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full hover:bg-[#c59e93] transition-colors mb-8 shadow-md"
        >
          <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center">
            <img 
              src="/iconotelefonoblanco.svg" 
              alt="Teléfono" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <span className="text-[22px] md:text-[26px] tracking-widest font-light mt-0.5">+51 994 060 977</span>
        </a>

        <div className="flex items-center gap-4">
          <span className="text-[#88807a] font-light text-[14px] md:text-[15px]">Síguenos en:</span>
          
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img src="/fcolor.svg" alt="Facebook" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </a>
            
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img src="/igcolor.svg" alt="Instagram" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </a>
            
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img src="/tiktokcolor.svg" alt="TikTok" className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default EsteticaEspecialistas;