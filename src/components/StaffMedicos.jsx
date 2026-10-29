import React from 'react';
import { Link } from 'react-router-dom';

const StaffMedicos = () => {
  const doctors = [
    {
      id: 1,
      slug: "dr-hector",
      name: (<>DR. HÉCTOR FRANCISCO<br/>VARGAS CASTILLO</>),
      specialty: "CIRUJANO PLÁSTICO RECONSTRUCTIVO",
      cmp: "68988",
      rne: "42156",
      image: "https://res.cloudinary.com/da47iihxz/image/upload/v1792799320/pllvqijatj6w1nnre8l8.jpg"
    },
    {
      id: 2,
      slug: "dra-yuvidtza",
      name: (<>DRA. YUVIDTZA ANDREA<br/>ISABEL SALAZAR CARRILLO</>),
      specialty: "DERMATÓLOGA",
      cmp: "66762",
      rne: "39444",
      image: "https://res.cloudinary.com/da47iihxz/image/upload/v1792799319/zz1wxr8esflzppw2xjvr.jpg"
    },
    {
      id: 3,
      slug: "dra-karen",
      name: (<>DRA. KAREN YOHANNA<br/>ANGELES CHUMBIRIZA</>),
      specialty: "DERMATÓLOGA",
      cmp: "81188",
      rne: "48318",
      image: "https://res.cloudinary.com/da47iihxz/image/upload/v1792799320/qzzwduu1qfhez2dghstl.jpg"
    },
    {
      id: 4,
      slug: "dra-edith",
      name: (<>DRA. EDITH SANDRA<br/>LLANCAY MEDINA</>),
      specialty: "DERMATÓLOGA",
      cmp: "86231",
      rne: "052416",
      image: "https://res.cloudinary.com/da47iihxz/image/upload/v1792799320/pzzcgqjmajr0lfuwmef5.jpg"
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-0 md:h-auto md:aspect-[1900/720] overflow-hidden font-principal flex items-center justify-center">
      
      <div 
        className="absolute inset-0 w-full h-full bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/da47iihxz/image/upload/v1793051009/rnfblmcyrwf4yvhfd4in.jpg')" }}
      ></div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
        
        <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left items-center lg:items-start pl-0 -mt-8 lg:-mt-16">
          
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] text-[#053d57] font-alta leading-[1.1] tracking-normal">
            <span className="font-light">CONOCE A NUESTRO</span><br />
            <span className="font-normal">STAFF DE MÉDICOS</span><br />
            <span className="font-normal">ESPECIALISTAS</span>
          </h2>
          
          <div className="w-24 md:w-32 h-[3px] bg-[#cda99c] my-4 md:my-5"></div>
          
          <p className="text-[#6b6662] text-[13px] md:text-[18.5px] font-light leading-[1.25] max-w-[390px] hidden lg:block">
            Cada especialista aporta su experiencia y<br/>
            conocimientos para ofrecer un abordaje<br/>
            integral, y <strong className="font-medium text-[#5c5652]">BAJO ESTÁNDARES DE</strong><br/>
            <strong className="font-medium text-[#5c5652]">CALIDAD</strong> que ofrece nuestra clínica.<br/>
            Priorizando las necesidades de cada<br/>
            paciente y acompañándolo en cada<br/>
            etapa de su atención.
          </p>
          
          <p className="text-[#6b6662] text-[14px] font-light leading-relaxed max-w-md lg:hidden">
            Cada especialista aporta su experiencia y conocimientos para ofrecer un abordaje integral, y <strong className="font-medium text-[#5c5652]">BAJO ESTÁNDARES DE CALIDAD</strong> que ofrece nuestra clínica. Priorizando las necesidades de cada paciente y acompañándolo en cada etapa de su atención.
          </p>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-2 sm:gap-2.5 w-full max-w-2xl ml-auto mr-0 pr-0 lg:pr-4 translate-x-0 lg:translate-x-6">
          {doctors.map((doc) => (
            <Link 
              key={doc.id} 
              to={`/nosotros#${doc.slug}`}
              className="flex items-center justify-between bg-white/[0.22] hover:bg-white/[0.35] backdrop-blur-md rounded-2xl sm:rounded-3xl py-3 pl-8 pr-3 sm:py-3.5 sm:pl-9 sm:pr-3.5 shadow-sm border border-white/50 cursor-pointer transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex flex-col flex-1 pr-4 overflow-hidden">
                <h3 className="text-[#5c5652] font-semibold text-[15px] sm:text-[18px] leading-[1.2] break-words drop-shadow-sm">
                  {doc.name}
                </h3>
                <p className="text-[#88807a] text-[12px] sm:text-[14px] font-light mt-1 tracking-normal uppercase truncate">
                  {doc.specialty}
                </p>
                <p className="text-[#6c6662] text-[14px] sm:text-[16px] mt-1 font-medium">
                  CMP {doc.cmp} <span className="mx-1.5 text-[#a8a19c]">|</span> RNE {doc.rne}
                </p>
              </div>

              <div className="flex-shrink-0 w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md border border-white/60">
                <img 
                  src={doc.image} 
                  alt="Doctor" 
                  className="w-full h-full object-cover" 
                  onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='; e.target.className='w-full h-full object-cover bg-[#593433]' }}
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StaffMedicos;