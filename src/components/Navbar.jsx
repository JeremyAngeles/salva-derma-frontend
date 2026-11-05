import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isDermaOpen, setIsDermaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false);             
  const dropdownRef = useRef(null);

  const isTratamientosPage = location.pathname.toLowerCase().includes('tratamiento');

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.toLowerCase().startsWith(path.toLowerCase());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDermaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDermaOpen(false);
  }, [location.pathname]);

  // BLOQUEA EL SCROLL DEL FONDO CUANDO EL MENÚ ESTÁ ABIERTO
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  /* =========================================================================
     CONFIGURACIÓN DE CLASES Y REDONDEO (MÓVIL Y PC)
     ========================================================================= */
  
  // NAV a z-[999] para que esté por encima de TODO
  let navClasses = 'fixed top-0 left-0 w-full z-[999] px-4 md:px-10 pt-3 md:pt-4 flex justify-between items-center gap-2 md:gap-4 font-principal transition-all duration-300 ';
  let navStyle = {};

  if (isTratamientosPage) {
    navClasses += 'shadow-lg text-white bg-cover bg-center bg-no-repeat rounded-b-[1.5rem] md:rounded-b-[3rem] pb-3 md:pb-8';
    navStyle.backgroundImage = "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792689387/01_-_franja_1.png')";
  } else {
    if (isScrolled || isMobileMenuOpen) {
      navClasses += ' lg:bg-white lg:bg-none lg:text-[#053d57] lg:shadow-md lg:pb-4 ';
      navClasses += " max-lg:text-white max-lg:shadow-lg max-lg:bg-cover max-lg:bg-center max-lg:bg-no-repeat max-lg:pb-3 max-lg:bg-[url('https://res.cloudinary.com/da47iihxz/image/upload/v1793296508/jl3mbg00eblxtrzudlit.png')]";
    } else {
      navClasses += 'bg-transparent text-white pb-3 md:pb-4';
    }
  }

  const menuClasses = isTratamientosPage
    ? 'bg-white/20 shadow-sm border border-white/30 text-white' 
    : (isScrolled 
        ? 'bg-[#f4f2ef] shadow-sm text-[#053d57]' 
        : 'bg-white/20 shadow-md text-white');

  const underlineClass = (!isTratamientosPage && isScrolled) ? 'bg-[#053d57]' : 'bg-white';

  return (
    <>
      <nav 
        className={navClasses}
        style={navStyle}
      >
        <Link to="/" className="flex-shrink-0 z-50">
          <img
            src="/logo-salva.png"
            alt="Salvar Dermatoplástica"
            className="h-7 sm:h-8 md:h-12 w-auto object-contain transition-all duration-300"
          />
        </Link>

        <div className={`hidden lg:flex flex-1 items-center justify-between backdrop-blur-md rounded-full px-12 py-2.5 text-sm md:text-base mx-4 xl:mx-8 transition-colors duration-300 ${menuClasses}`}>
          
          <Link to="/" className="relative pb-1 transition-colors hover:opacity-80">
            <span className={isActive('/') ? 'font-semibold' : ''}>Inicio</span>
            {isActive('/') && <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${underlineClass}`}></span>}
          </Link>
          
          <Link to="/nosotros" className="relative pb-1 transition-colors hover:opacity-80">
            <span className={isActive('/nosotros') ? 'font-semibold' : ''}>Nosotros</span>
            {isActive('/nosotros') && <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${underlineClass}`}></span>}
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDermaOpen(!isDermaOpen)}
              className="relative pb-1 flex items-center gap-1.5 transition-colors hover:opacity-80"
            >
              <span className={isActive('/dermatologia') ? 'font-semibold' : ''}>Dermatología</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 h-3.5 transition-transform duration-300 ${isDermaOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              {isActive('/dermatologia') && <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${underlineClass}`}></span>}
            </button>

            {isDermaOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-5 w-56 bg-white text-[#053d57] rounded-2xl shadow-xl flex flex-col overflow-hidden border border-gray-100 font-normal">
                <Link to="/dermatologia/laser" className="px-5 py-4 hover:bg-[#f4f2ef] transition-colors text-sm border-b border-gray-100">
                  Dermatología Láser
                </Link>
                <Link to="/dermatologia/clinica" className="px-5 py-4 hover:bg-[#f4f2ef] transition-colors text-sm border-b border-gray-100">
                  Dermatología Clínica
                </Link>
                <Link to="/dermatologia/estetica" className="px-5 py-4 hover:bg-[#f4f2ef] transition-colors text-sm">
                  Dermatología Estética
                </Link>
              </div>
            )}
          </div>

          <Link to="/cirugia" className="relative pb-1 transition-colors hover:opacity-80">
            <span className={isActive('/cirugia') ? 'font-semibold' : ''}>Cirugía Plástica</span>
            {isActive('/cirugia') && <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${underlineClass}`}></span>}
          </Link>
          
          <Link to="/tratamientos" className="relative pb-1 transition-colors hover:opacity-80">
            <span className={isActive('/tratamientos') ? 'font-semibold' : ''}>T. Estéticos</span>
            {isActive('/tratamientos') && <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${underlineClass}`}></span>}
          </Link>
          
          <Link to="/skinlounge" className="relative pb-1 transition-colors hover:opacity-80">
            <span className={isActive('/skinlounge') ? 'font-semibold' : ''}>SkinLounge</span>
            {isActive('/skinlounge') && <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${underlineClass}`}></span>}
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 z-[1000]">
          
          <Link
            to="/reservar-cita"
            className={`flex-shrink-0 px-4 py-1.5 md:px-8 md:py-3 rounded-full font-medium shadow-md transition-all text-[13.5px] md:text-base ${
              isTratamientosPage 
                ? 'bg-[#7ba9b7] text-white hover:bg-[#6a95a3]' 
                : 'bg-[#7ba9b7] lg:bg-[#c59e93] text-white hover:bg-[#6a95a3] lg:hover:bg-[#b38b80]'
            }`}
          >
            Reservas
          </Link>

          <button 
            className="lg:hidden p-1.5 transition-colors bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-sm flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
        </div>
      </nav>

      {/* =========================================
          MENÚ DESPLEGABLE CELULAR (z-[998] para estar debajo del Navbar pero encima del resto)
          ========================================= */}
      {isMobileMenuOpen && (
        <div 
          className={`fixed inset-0 z-[998] flex flex-col pt-24 px-6 overflow-y-auto font-principal lg:hidden ${
            isTratamientosPage ? 'bg-cover bg-center text-white' : 'bg-white text-[#053d57]'
          }`}
          style={isTratamientosPage ? { backgroundImage: "url('https://res.cloudinary.com/cgfzvuli/image/upload/v1792689387/01_-_franja_1.png')" } : {}}
        >
          <Link to="/" className={`py-4 border-b text-lg ${isTratamientosPage ? 'border-white/30' : 'border-gray-200'}`}>Inicio</Link>
          <Link to="/nosotros" className={`py-4 border-b text-lg ${isTratamientosPage ? 'border-white/30' : 'border-gray-200'}`}>Nosotros</Link>
          
          <div className={`py-4 border-b flex flex-col gap-3 ${isTratamientosPage ? 'border-white/30' : 'border-gray-200'}`}>
            <span className={`text-lg font-semibold ${isTratamientosPage ? 'text-white' : 'text-[#c59e93]'}`}>Dermatología</span>
            <div className="flex flex-col gap-2 pl-4">
              <Link to="/dermatologia/laser" className={`py-2 text-base ${isTratamientosPage ? 'text-white/90' : 'text-gray-700'}`}>Dermatología Láser</Link>
              <Link to="/dermatologia/clinica" className={`py-2 text-base ${isTratamientosPage ? 'text-white/90' : 'text-gray-700'}`}>Dermatología Clínica</Link>
              <Link to="/dermatologia/estetica" className={`py-2 text-base ${isTratamientosPage ? 'text-white/90' : 'text-gray-700'}`}>Dermatología Estética</Link>
            </div>
          </div>

          <Link to="/cirugia" className={`py-4 border-b text-lg ${isTratamientosPage ? 'border-white/30' : 'border-gray-200'}`}>Cirugía Plástica</Link>
          {/* Quitada la clase font-semibold de aquí para que sea normal igual que los demás */}
          <Link to="/tratamientos" className={`py-4 border-b text-lg ${isTratamientosPage ? 'border-white/30' : 'border-gray-200'}`}>T. Estéticos</Link>
          <Link to="/skinlounge" className={`py-4 border-b text-lg ${isTratamientosPage ? 'border-white/30' : 'border-gray-200'}`}>SkinLounge</Link>

          <Link
            to="/reservar-cita"
            className={`mt-8 mb-10 px-8 py-3.5 rounded-full font-medium text-center shadow-md text-lg ${
              isTratamientosPage ? 'bg-white text-[#b58c85] hover:bg-gray-100' : 'bg-[#c59e93] text-white hover:bg-[#b38b80]'
            }`}
          >
            Reservar Cita
          </Link>
        </div>
      )}

      {/* =========================================
          BOTÓN WHATSAPP FLOTANTE (z-[90] para que NO tape el menú)
          ========================================= */}
      <a
        href="https://wa.me/51994060977"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </>
  );
};

export default Navbar;