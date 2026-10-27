import React from 'react';

/*
  Medidas tomadas de la imagen de referencia (1269 x 686) y escaladas
  con S = 930 / 686 para que encajen en la sección de 1900 x 930.
  La sección NO cambia de tamaño (1900 x 930).
  Si quieres agrandar o achicar TODO el bloque de la derecha de forma
  proporcional, solo cambia S.
*/
const S = 1.2;
const px = (n) => `${Math.round(n * S * 10) / 10}px`;
// Para posiciones verticales (incluye el centrado)
// Al achicar, el bloque sube; este valor lo mantiene centrado igual que antes
const TOP = Math.round(496 - 365.5 * S);
// Cuántos px subir SOLO el título (súbelo o bájalo a tu gusto)
const TITULO_SUBIR = 40;
const py = (n) => `${Math.round((n * S + TOP) * 10) / 10}px`;

const ContactoDoctora = () => {
  return (
    <div className="w-full overflow-x-auto">
      <section
        className="font-principal relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/da47iihxz/image/upload/v1792810329/jwlbnofvb3ot0smmutuc.jpg')",
          width: '1900px',
          height: '930px',
          minWidth: '1900px',
          minHeight: '930px',
        }}
      >
        {/* Bloque de la derecha: todo alineado al borde derecho del texto (x = 1171 en la referencia) */}
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
  );
};

export default ContactoDoctora;