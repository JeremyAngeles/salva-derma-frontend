import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Extraemos la ruta actual (pathname)
  const { pathname } = useLocation();

  // Este efecto se ejecuta cada vez que 'pathname' cambia
  useEffect(() => {
    // Sube el scroll a la posición (0, 0) de la pantalla
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente no renderiza nada visualmente
  return null;
};

export default ScrollToTop;