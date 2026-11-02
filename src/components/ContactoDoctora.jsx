import React from 'react';

const BG_IMG =
  'https://res.cloudinary.com/da47iihxz/image/upload/v1792810329/jwlbnofvb3ot0smmutuc.jpg';

/*
  Medidas de PC (sin cambios)
*/
const S = 1.2;
const px = (n) => `${Math.round(n * S * 10) / 10}px`;
const TOP = Math.round(496 - 365.5 * S);
const TITULO_SUBIR = 40;
const py = (n) => `${Math.round((n * S + TOP) * 10) / 10}px`;

// Altura compartida (celular/tablet): botón y redes miden lo mismo
const ALTO_MOVIL = 'clamp(32px,7.6vw,60px)';

const ContactoDoctora = () => {
  return (
    <>
      {/* =========================================
          VERSIÓN CELULAR + TABLET (< lg)
          Arriba: título + párrafo centrados
          Abajo: botón y redes uno al lado del otro, misma altura
          ========================================= */}
      <section
        className="lg:hidden font-principal relative w-full overflow-hidden bg-cover bg-no-repeat bg-[position:26%_center] min-h-[150vw] sm:min-h-[115vw] flex flex-col justify-between items-center pt-[9vw] pb-[9vw] sm:pb-[6vw]"
        style={{ backgroundImage: `url('${BG_IMG}')` }}
      >
        {/* Degradado suave arriba para que se lea el texto */}
        <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-black/25 to-transparent pointer-events-none z-0"></div>

        {/* ARRIBA: título + párrafo centrados */}
        <div className="relative z-10 w-full px-[5vw] flex flex-col items-center text-center text-white">

          {/* TÍTULO */}
          <h2
            className="text-[clamp(18px,5.4vw,52px)] leading-[1.1] tracking-[0.03em] font-normal drop-shadow-md m-0 mb-[3.5vw] sm:mb-[2.5vw] whitespace-nowrap"
            style={{ fontFamily: 'Alta, serif' }}
          >
            CADA PIEL TIENE SU<br />
            PROPIA HISTORIA, TE<br />
            AYUDAMOS A CONTARLA<br />
            DE LA MEJOR MANERA
          </h2>

          {/* PÁRRAFO */}
          <p className="text-[clamp(12px,3vw,24px)] leading-[1.3] font-light drop-shadow-sm m-0 max-w-[78vw] sm:max-w-[62vw]">
            Nuestra área de dermatología te brinda atención personalizada,
            experiencia y tratamientos seguros,&nbsp; siempre con&nbsp; empatía y
            acompañamiento en tu proceso.
          </p>
        </div>

        {/* ABAJO: botón + redes, uno al lado del otro */}
        <div className="relative z-10 w-full px-[3vw] flex flex-row items-center justify-center gap-[2vw] text-white">

          {/* BOTÓN TELÉFONO (ancho ajustado al contenido) */}
          <a
            href="https://wa.me/51994060977"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white shadow-md transition-all hover:brightness-95 flex-shrink-0"
            style={{
              height: ALTO_MOVIL,
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, #d8beb7 0%, #e6d3d0 55%, #f0e4e3 100%)',
              paddingLeft: 'clamp(8px,2.2vw,18px)',
              paddingRight: 'clamp(10px,2.6vw,22px)',
              gap: 'clamp(4px,1.2vw,10px)',
            }}
          >
            <img
              src="/iconotelefonoblanco.svg"
              alt="Teléfono WhatsApp"
              style={{
                width: 'clamp(18px,4.6vw,38px)',
                height: 'clamp(18px,4.6vw,38px)',
                objectFit: 'contain',
                flexShrink: 0,
              }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span
              className="font-light whitespace-nowrap"
              style={{ fontSize: 'clamp(10px,2.9vw,24px)', lineHeight: 1, letterSpacing: '0.03em' }}
            >
              +51 994 060 977
            </span>
          </a>

          {/* REDES SOCIALES (misma altura que el botón) */}
          <div
            className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-md rounded-full text-[#6b5a55] flex-shrink-0"
            style={{
              height: ALTO_MOVIL,
              gap: 'clamp(4px,1.3vw,12px)',
              paddingLeft: 'clamp(8px,2.2vw,18px)',
              paddingRight: 'clamp(8px,2.2vw,18px)',
            }}
          >
            <span
              className="font-medium whitespace-nowrap"
              style={{ fontSize: 'clamp(8px,2.2vw,18px)', letterSpacing: '0.01em', lineHeight: 1 }}
            >
              Síguenos en:
            </span>

            <div className="flex items-center" style={{ gap: 'clamp(3px,1vw,10px)' }}>
              {[
                { src: '/fcolor.svg', alt: 'Facebook' },
                { src: '/igcolor.svg', alt: 'Instagram' },
                { src: '/tiktokcolor.svg', alt: 'TikTok' },
              ].map((red) => (
                <a
                  key={red.alt}
                  href="#"
                  className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  style={{ width: 'clamp(16px,4vw,34px)', height: 'clamp(16px,4vw,34px)' }}
                >
                  <img
                    src={red.src}
                    alt={red.alt}
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          VERSIÓN PC (lg en adelante) - SIN CAMBIOS
          ========================================= */}
      <div className="hidden lg:block w-full overflow-x-auto">
        <section
          className="font-principal relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${BG_IMG}')`,
            width: '1900px',
            height: '930px',
            minWidth: '1900px',
            minHeight: '930px',
          }}
        >
          <div
            className="absolute text-right"
            style={{ right: '160px', top: 0, width: '800px', height: '930px', overflow: 'hidden' }}
          >
            {/* TÍTULO */}
            <h2
              className="absolute text-white drop-shadow-md m-0"
              style={{
                right: 0,
                top: `${parseFloat(py(75)) - TITULO_SUBIR}px`,
                fontFamily: 'Alta, serif',
                fontSize: px(45),
                lineHeight: px(48),
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                fontWeight: 400,
              }}
            >
              CADA PIEL TIENE SU<br />
              PROPIA HISTORIA, TE<br />
              AYUDAMOS A CONTARLA<br />
              DE LA MEJOR MANERA
            </h2>

            {/* PÁRRAFO */}
            <p
              className="absolute text-white font-light drop-shadow-sm m-0"
              style={{
                right: 0,
                top: py(286),
                fontSize: px(18),
                lineHeight: px(23.2),
                whiteSpace: 'nowrap',
              }}
            >
              Nuestra área de dermatología<br />
              te brinda atención<br />
              personalizada, experiencia y<br />
              tratamientos seguros,&nbsp; siempre<br />
              con&nbsp; empatía y<br />
              acompañamiento en tu<br />
              proceso.
            </p>

            {/* BOTÓN TELÉFONO */}
            <a
              href="https://wa.me/51994060977"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute flex items-center text-white shadow-md transition-all hover:brightness-95"
              style={{
                right: 0,
                top: py(520),
                width: px(371),
                height: px(68),
                borderRadius: '9999px',
                background: 'linear-gradient(90deg, #d8beb7 0%, #e6d3d0 55%, #f0e4e3 100%)',
                paddingLeft: px(16),
                paddingRight: px(16),
                gap: px(17),
              }}
            >
              <img
                src="/iconotelefonoblanco.svg"
                alt="Teléfono WhatsApp"
                style={{ width: px(48), height: px(48), objectFit: 'contain', flexShrink: 0 }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span
                className="font-light"
                style={{
                  fontSize: px(30),
                  lineHeight: 1,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}
              >
                +51 994 060 977
              </span>
            </a>

            {/* REDES SOCIALES */}
            <div
              className="absolute flex items-center text-white drop-shadow-sm"
              style={{
                right: 0,
                top: py(637 - 19),
                height: px(38),
                gap: px(27),
              }}
            >
              <span
                className="font-light"
                style={{ fontSize: px(18), letterSpacing: '0.02em', whiteSpace: 'nowrap' }}
              >
                Síguenos en:
              </span>

              <div className="flex items-center" style={{ gap: px(17) }}>
                <a
                  href="#"
                  className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  style={{ width: px(38), height: px(38) }}
                >
                  <img
                    src="/fcolor.svg"
                    alt="Facebook"
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  style={{ width: px(38), height: px(38) }}
                >
                  <img
                    src="/igcolor.svg"
                    alt="Instagram"
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  style={{ width: px(38), height: px(38) }}
                >
                  <img
                    src="/tiktokcolor.svg"
                    alt="TikTok"
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactoDoctora;