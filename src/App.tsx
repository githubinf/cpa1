/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, BookOpen, Target, Zap, TrendingUp, HelpCircle, Mail, Lock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      {/* Barra de progreso de lectura superior */}
      <div className="fixed top-0 left-0 w-full h-1 bg-blue-100 z-50">
        <div className="h-full bg-blue-600 w-1/3"></div>
      </div>

      {/* Encabezado / Hero Section */}
      <header className="bg-gradient-to-b from-blue-50 to-white pt-12 pb-12 px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-2/3 text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-4 tracking-wide uppercase">
              Guía Exclusiva para Principiantes
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight mb-4">
              De Cero a tu Primera Campaña: La Guía Para Principiantes Que Te Enseña a Ganar Dinero con el Marketing de Afiliados <span className="text-blue-600">(Sin Necesidad de Invertir una Fortuna)</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8 max-w-3xl mx-auto lg:mx-0">
              Descubre el Método Paso a Paso Para Crear tu Primera Campaña Rentable con Menos de $20 Usando una Técnica Sencilla que la Mayoría de los Principiantes Desconoce.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
              >
                SÍ, QUIERO MI COPIA POR $9,99 <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-green-500" /> Garantía de 30 días incluida
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <img 
              src="https://i.ibb.co/Df0qCYtW/cpa-marketing-smartlink.png" 
              alt="CPA Marketing Fórmula Smartlink Ebook" 
              className="w-full max-w-[280px] lg:max-w-sm drop-shadow-2xl rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        
        {/* Sección de Empatía / El Problema */}
        <section className="prose prose-blue prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">¿Te suena familiar esta situación?</h2>
          <p>
            Llevas días, semanas, quizás meses, intentando encontrar una forma fiable de ganar dinero por internet. Has oído hablar del marketing de afiliación, de las famosas redes de coste por acción, de gente que gana cientos o miles de dólares al mes. Te sientes atraído por la idea de tener un negocio propio, de trabajar desde casa y de generar ingresos que te den la libertad que siempre has deseado.
          </p>
          <p>
            Sueñas con el momento en que puedas despertar sin el sonido estridente de un despertador, revisar tu teléfono y ver que has generado ingresos mientras dormías. Es una visión poderosa, una que motiva a miles de personas a dar el salto al mundo digital cada día.
          </p>
          <p className="font-bold text-blue-800 italic">Pero la realidad suele ser muy distinta a la teoría.</p>
          <p>
            En cuanto empiezas a investigar, te encuentras con un muro infranqueable. Un muro construido con ladrillos de confusión, miedo y promesas vacías. Es frustrante ver cómo otros parecen descifrar el código mientras tú sigues atrapado en el mismo punto de partida.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 my-10 rounded-r-xl">
            <h3 className="text-xl font-bold text-blue-900 mt-0 mb-4">Ese muro está hecho de:</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-3">
                <div className="mt-1 text-blue-600"><Zap className="w-5 h-5" /></div>
                <div>
                  <strong>Demasiada información:</strong> "Tienes que elegir un nicho", "no, mejor una subred de coste por acción", "tienes que crear una página de destino", "necesitas un embudo de ventas", "el tráfico es lo más importante", "olvídate del tráfico, lo importante es la oferta"... Un laberinto de conceptos que te deja más confundido que al principio.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 text-blue-600"><Zap className="w-5 h-5" /></div>
                <div>
                  <strong>Miedo a perder dinero:</strong> Lees que necesitas invertir en publicidad, pero los supuestos expertos te hablan de gastar $500, $1.000 o incluso $5.000 para ver resultados. No tienes ese dinero, y desde luego no estás dispuesto a arriesgarlo en algo que no entiendes del todo.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 text-blue-600"><Zap className="w-5 h-5" /></div>
                <div>
                  <strong>Frustración constante:</strong> Decides probar por tu cuenta. Te registras en una red, eliges una oferta al azar, creas un anuncio en una red social y... nada. Ni un solo clic. O peor aún, consigues unos pocos clics, pero cero conversiones. El dinero que has invertido se ha esfumado sin dejarte nada a cambio. Y no sabes qué hiciste mal.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 text-blue-600"><Zap className="w-5 h-5" /></div>
                <div>
                  <strong>El miedo a lo desconocido:</strong> Términos técnicos que parecen palabras en otro idioma. Un idioma que solo hablan los "expertos" y que te hace sentir que esto no es para ti, que quizás llegaste tarde o que no tienes las habilidades necesarias.
                </div>
              </li>
            </ul>
          </div>

          <p>
            Si todo esto te resulta familiar, si has sentido esa mezcla de atracción y frustración, quiero decirte algo importante: <strong>no estás solo</strong>. La inmensa mayoría de las personas que hoy viven del internet pasaron exactamente por lo mismo. La diferencia no está en su inteligencia o en su suerte, sino en la información que decidieron seguir.
          </p>
          <p>
            Has dado con la persona adecuada porque yo no voy a hablarte desde un pedestal de cristal.
          </p>
        </section>

        {/* Sección de Autor Expandida */}
        <section className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Permíteme que me presente: Mi Historia en las Trincheras</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Me llamo <strong>Francisco González</strong>. No soy un gurú del marketing con un título de una universidad de élite ni presumo de coches de lujo en redes sociales. Soy alguien como tú, que un día se sentó frente a un ordenador sin saber absolutamente nada de este mundo, con más ganas que conocimientos y con un presupuesto extremadamente ajustado.
            </p>
            <p>
              Recuerdo perfectamente mi primera semana. Estaba obsesionado con la idea de la libertad financiera. Leía blogs, veía vídeos interminables y me registraba en cada foro que encontraba. Todo parecía tan fácil en los vídeos de otros... pero cuando me tocaba a mí, nada encajaba.
            </p>
            <p>
              He pasado por todas y cada una de las frustraciones que te acabo de describir. He perdido dinero en campañas que no funcionaban. Recuerdo una noche en particular, después de haber gastado mis últimos $50 en una campaña de anuncios que no generó ni una sola conversión. Me sentí derrotado. Sentí que este mundo no era para gente como yo, que quizás se necesitaba una mente matemática superior o contactos secretos en las grandes redes.
            </p>
            <p>
              Pero mi terquedad fue mayor que mi frustración. Empecé a analizar por qué fallaba. No era que el sistema no funcionara, sino que yo estaba intentando correr antes de saber caminar. Estaba usando estrategias de "expertos" que tenían presupuestos de miles de dólares, cuando yo apenas tenía para pagar la conexión a internet.
            </p>
            <p>
              Descubrí que el marketing de afiliados de coste por acción no tiene por qué ser un casino donde apuestas a ciegas esperando que la suerte te sonría. Descubrí que existe una forma de entrar en este negocio sin necesidad de arriesgar grandes cantidades de dinero, de una manera metódica, controlada y, sobre todo, comprensible para cualquier principiante que esté dispuesto a seguir instrucciones.
            </p>
            <p>
              Ese descubrimiento es lo que quiero compartir contigo hoy. Lo he condensado en una guía práctica, directa y sin rodeos que he titulado: "CPA Marketing Fórmula Smartlink".
            </p>
          </div>
        </section>

        {/* Sección Expandida: El Porqué del CPA */}
        <section className="prose prose-blue prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900">¿Por qué el Marketing de Coste por Acción es la Mejor Puerta de Entrada?</h2>
          <p>
            Si intentas vender un curso de $500 como afiliado, necesitas ser un maestro de la persuasión. Necesitas entender la psicología de ventas a un nivel profundo, crear embudos complejos y tener una autoridad que un principiante simplemente no tiene.
          </p>
          <p>
            En cambio, en el <strong>Marketing de Coste por Acción</strong>, el umbral de resistencia es mínimo. Piensa en esto: ¿qué es más fácil? ¿Convencer a alguien de que gaste $100 en un producto desconocido o convencerlo de que introduzca su código postal para ver si ha ganado una tarjeta de regalo de un supermercado local?
          </p>
          <p>
            La respuesta es obvia. El modelo de coste por acción elimina la fricción de la venta. Tú no vendes; tú conectas una necesidad o un deseo simple con una solución gratuita para el usuario. El anunciante gana un cliente potencial, el usuario gana una oportunidad o un servicio gratuito, y tú ganas una comisión. Es el modelo de negocio más equilibrado que existe en la red.
          </p>
          
          <h3 className="text-2xl font-bold text-blue-800 mt-12">La Realidad de los Datos vs. La Intuición</h3>
          <p>
            Uno de los mayores errores que cometí al principio fue confiar en mi "instinto". Pensaba: "Esta oferta de juegos seguro que funciona porque a mí me gustan los juegos". Error fatal. En este negocio, tu opinión no importa. Lo único que importa son los datos.
          </p>
          <p>
            En mi guía, te enseño a dejar de lado tus gustos personales y a convertirte en un analista de datos básico. Aprenderás a leer lo que el mercado te está diciendo. Si una campaña en Tailandia está convirtiendo al 5% y una en España al 0,5%, no importa cuánto te guste el mercado español; los datos te dicen que debes poner tu dinero en Tailandia.
          </p>
        </section>

        {/* Sección de Casos de Estudio (Ejemplos Reales) */}
        <section className="bg-blue-50 p-10 rounded-3xl border border-blue-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Casos de Estudio: De la Teoría a la Práctica</h2>
          <div className="space-y-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold text-blue-800 mb-4">Caso 1: El Sorteo de la Tarjeta de Regalo</h4>
              <p className="text-slate-600 mb-4">
                Imagina una campaña dirigida a usuarios de dispositivos móviles en México. La oferta es sencilla: "Participa por una tarjeta de regalo de $500 para una tienda departamental". 
              </p>
              <p className="text-slate-600 mb-4">
                Usando el método que explico en el libro, lanzamos esta campaña con un presupuesto de prueba de solo $10. Gracias al enlace inteligente, el sistema detecta que el usuario está en un iPhone y le muestra la versión optimizada para ese dispositivo.
              </p>
              <p className="text-slate-600 font-bold">
                Resultado: De cada 100 personas que hicieron clic, 8 introdujeron su correo. Con una comisión de $0,80 por registro, generamos $6,40 por cada 100 clics. Si el coste por cada 100 clics fue de $3,00, ¡hemos duplicado nuestra inversión!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold text-blue-800 mb-4">Caso 2: La Aplicación de Optimización de Batería</h4>
              <p className="text-slate-600 mb-4">
                Esta es una oferta de descarga. El usuario no tiene que pagar nada, solo instalar una aplicación gratuita que ayuda a que su batería dure más. Es una necesidad universal.
              </p>
              <p className="text-slate-600 mb-4">
                En el Capítulo 5, te muestro cómo configurar este tipo de campañas en plataformas de tráfico económico. Aquí no buscamos calidad extrema, buscamos volumen. 
              </p>
              <p className="text-slate-600 font-bold">
                La clave aquí no es el anuncio, sino el "enlace inteligente". Este enlace detecta si el usuario tiene poco espacio en el teléfono o si su conexión es lenta, y le ofrece la versión de la aplicación que mejor se adapta. Esto dispara las conversiones sin que tú tengas que mover un dedo.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Errores Comunes */}
        <section className="prose prose-blue prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900">Los 7 Pecados Capitales del Afiliado Principiante</h2>
          <p>
            Antes de que compres mi libro, quiero ahorrarte dinero dándote una lista de lo que NO debes hacer. Muchos de estos errores me costaron meses de progreso.
          </p>
          <ol className="space-y-4">
            <li>
              <strong>Enamorarse de una oferta:</strong> No importa lo bonita que sea la página de ventas de la oferta. Si no convierte, deséchala. En el libro te enseño la "Regla del 3x" para saber exactamente cuándo decir adiós.
            </li>
            <li>
              <strong>No usar herramientas de seguimiento:</strong> Intentar hacer marketing de afiliados sin seguimiento es como intentar conducir un coche con los ojos vendados. Sabes que te mueves, pero no tienes ni idea de hacia dónde vas.
            </li>
            <li>
              <strong>Ignorar los términos y condiciones:</strong> Cada red tiene sus reglas. Si usas tráfico prohibido, no te pagarán. Te enseño a leer entre líneas para proteger tus comisiones.
            </li>
            <li>
              <strong>Invertir demasiado pronto:</strong> El error del "apostador". Creen que si ponen $100 más, la campaña empezará a funcionar mágicamente. Mi método se basa en pruebas de $5 a $10. Si no funciona ahí, no funcionará con $1.000.
            </li>
            <li>
              <strong>No segmentar por dispositivo:</strong> Un usuario de ordenador se comporta de forma distinta a uno de móvil. Si mezclas ambos, tus datos serán una basura.
            </li>
            <li>
              <strong>Saltar de una estrategia a otra:</strong> El "síndrome del objeto brillante". Un día haces Facebook, otro día Google, otro día tráfico de ventanas emergentes. Elige un método (el mío) y domínalo antes de pasar al siguiente.
            </li>
            <li>
              <strong>Rendirse tras el primer fallo:</strong> Tu primera campaña probablemente no te hará rico. Pero te dará datos. Y los datos son el mapa hacia la segunda campaña, que será la que te dé beneficios.
            </li>
          </ol>
        </section>

        {/* Sección de Preguntas Frecuentes (FAQ) */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Preguntas Frecuentes</h2>
          <div className="grid gap-6">
            {[
              {
                q: "¿Realmente puedo empezar con solo $20?",
                a: "Sí. Mi método está diseñado precisamente para eso. Te enseño a usar fuentes de tráfico donde puedes comprar miles de visitas por unos pocos dólares. El objetivo de esos primeros $20 no es hacerte millonario, sino validar una oferta y aprender el proceso sin riesgo."
              },
              {
                q: "¿Necesito conocimientos técnicos avanzados o saber programar?",
                a: "Absolutamente no. Si sabes enviar un correo electrónico y navegar por internet, puedes seguir esta guía. Explico todo con capturas de pantalla y un lenguaje sencillo, evitando tecnicismos innecesarios."
              },
              {
                q: "¿Cuánto tiempo tardaré en ver resultados?",
                a: "Esto depende de tu dedicación. Algunos alumnos lanzan su primera campaña en 48 horas. Otros prefieren estudiar el libro a fondo durante una semana antes de actuar. Lo importante no es la velocidad, sino seguir el método paso a paso."
              },
              {
                q: "¿Es este negocio legal y ético?",
                a: "Totalmente. El marketing de afiliados es una industria multimillonaria utilizada por empresas como Amazon, Apple y Nike. Nosotros simplemente trabajamos con ofertas de coste por acción, que es una rama específica y muy rentable de esta industria."
              },
              {
                q: "¿Qué pasa si no me gusta el libro o no entiendo algo?",
                a: "Tienes mi garantía de 30 días. Si sientes que no es para ti, me escribes y te devuelvo el dinero. Mi objetivo es tu éxito, no quedarme con tus $9,99 si el material no te ayuda."
              },
              {
                q: "¿Necesito una página web propia?",
                a: "En los primeros capítulos te enseño cómo empezar sin ella usando enlaces directos inteligentes. Más adelante, en el Capítulo 4, te explico cómo crear una estructura sencilla si decides escalar tu negocio, pero no es un requisito para empezar hoy mismo."
              },
              {
                q: "¿En qué países funciona este método?",
                a: "En todo el mundo. De hecho, una de las ventajas de la Fórmula Smartlink es que te permite aprovechar mercados en países donde la competencia es baja y el tráfico es extremadamente barato, como América Latina, el Sudeste Asiático o Europa del Este."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-500" /> {faq.q}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Valor / Qué es CPA */}
        <section className="prose prose-blue prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900">¿Qué es el Marketing de Coste por Acción y por qué esta Guía es Diferente?</h2>
          <p>
            Para el anunciante, el marketing de coste por acción es el sueño hecho realidad: solo pagan cuando consiguen un resultado concreto, como un registro, una descarga o una venta. Para ti, como afiliado, es la oportunidad de ganar una comisión por cada una de esas acciones sencillas.
          </p>
          <p>
            A diferencia del marketing de afiliados tradicional, donde a menudo necesitas que alguien saque su tarjeta de crédito y realice una compra costosa, en el modelo de coste por acción puedes ganar dinero simplemente porque alguien introduzca su correo electrónico para participar en un sorteo o descargue una aplicación gratuita.
          </p>
          <p>
            Suena bien, ¿verdad? El problema es que la mayoría de la gente se lanza a la piscina sin ton ni son. Se registran en varias redes, eligen una oferta porque tiene una imagen bonita, invierten en publicidad sin un plan y se frustran cuando no ven resultados inmediatos.
          </p>
          
          <h3 className="text-2xl font-bold text-blue-800 mt-12">La Psicología Detrás del Clic: ¿Por qué Funciona el CPA?</h3>
          <p>
            ¿Alguna vez te has preguntado por qué la gente se registra en sorteos de tarjetas de regalo o descarga aplicaciones de linterna? La respuesta está en la psicología humana básica. Todos buscamos gratificación instantánea y todos queremos algo a cambio de nada (o de muy poco).
          </p>
          <p>
            El marketing de coste por acción aprovecha estos impulsos naturales. No estamos vendiendo un producto complejo que requiere una decisión racional de compra. Estamos ofreciendo una oportunidad, una utilidad o un entretenimiento rápido. Cuando un usuario ve un anuncio que le ofrece la posibilidad de ganar un iPhone simplemente por dar su opinión, su cerebro activa el sistema de recompensa. El "coste" para él es solo 30 segundos de su tiempo. El beneficio potencial es enorme.
          </p>
          <p>
            En mi libro, te enseño a identificar estas "ofertas de alta demanda" y a presentarlas de una manera que no parezca publicidad intrusiva, sino una recomendación útil o una oportunidad emocionante.
          </p>

          <p className="bg-[#1C398e] !text-white p-8 rounded-2xl font-bold text-center shadow-xl">
            Esta guía es diferente porque no se basa en la suerte. Se basa en un sistema.
          </p>
          <p>
            Un sistema que yo mismo he probado, ajustado y perfeccionado para que funcione incluso con el presupuesto más limitado. No te voy a hablar de teorías complejas ni de estrategias avanzadas que requieren miles de dólares de inversión. Te voy a hablar de un método que puedes poner en práctica hoy mismo con menos de $20 en el bolsillo.
          </p>
          <h3 className="text-2xl font-bold text-blue-800 mt-12">La clave está en lo que yo llamo la "Fórmula Smartlink"</h3>
          <p>
            Imagina que pudieras lanzar una campaña publicitaria y, sin hacer nada más, que tu oferta se adaptara automáticamente a cada visitante, mostrándole siempre la opción más probable de convertir según su ubicación y dispositivo. Eso, exactamente eso, es lo que hace un enlace inteligente.
          </p>
          <p>
            Un enlace inteligente es dinámico. Cuando lo utilizas, la red identifica el país de origen de la persona que hace clic y, en tiempo real, la redirige a la oferta que mejor está funcionando en ese país en ese momento preciso.
          </p>
        </section>

        {/* Sección: Fuentes de Tráfico en Detalle */}
        <section className="prose prose-blue prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900">Fuentes de Tráfico: Donde Comprar Visitas por Céntimos</h2>
          <p>
            Uno de los mayores obstáculos para los principiantes es el miedo a las plataformas gigantes como Google o Facebook. Sus reglas son estrictas, sus precios son altos y pueden cerrar tu cuenta sin previo aviso.
          </p>
          <p>
            En "CPA Marketing Fórmula Smartlink", te presento un mundo diferente: el tráfico de "ventanas emergentes" y "notificaciones push". Estas fuentes son el patio de recreo perfecto para el afiliado principiante por tres razones:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Precio ridículamente bajo:</strong> Puedes comprar 1.000 visitas por tan solo $1 o $2 en muchos países. Esto te permite hacer pruebas reales sin arriesgar el alquiler del mes.
            </li>
            <li>
              <strong>Reglas más flexibles:</strong> Aunque siempre debemos ser éticos, estas plataformas permiten promocionar una variedad mucho más amplia de ofertas que las redes sociales tradicionales.
            </li>
            <li>
              <strong>Aprobación instantánea:</strong> No tienes que esperar días a que un revisor humano apruebe tu anuncio. En muchas de estas redes, tu campaña puede estar activa en cuestión de minutos.
            </li>
          </ul>
          <p>
            Te guiaré a través de plataformas como PopAds y Mobidea, enseñándote a configurar cada parámetro para que no desperdicies ni un solo centavo en tráfico de baja calidad o en visitas de robots.
          </p>
        </section>

        {/* Sección: Escalamiento */}
        <section className="bg-blue-900 text-white p-12 rounded-[2rem] shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">De $10 al Día a un Negocio Sostenible</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Muchos me preguntan: "Francisco, ¿puedo vivir de esto?". La respuesta corta es sí, pero no sucede de la noche a la mañana. El proceso de escalamiento es lo que separa a los aficionados de los profesionales.
            </p>
            <p>
              En el libro, te explico el concepto de "Escalamiento Horizontal". En lugar de intentar ganar $100 con una sola campaña (lo cual es arriesgado), te enseño a crear 10 campañas pequeñas que ganen $10 cada una. Es mucho más estable, más fácil de gestionar y mucho menos estresante.
            </p>
            <p>
              Una vez que dominas el arte de encontrar una campaña pequeña que genere beneficios, el proceso se convierte en una simple cuestión de repetición. Es como encontrar una máquina que te devuelve $1,50 por cada $1,00 que introduces. ¿Cuántas veces querrías usar esa máquina?
            </p>
          </div>
        </section>

        {/* Sección: Glosario de Términos en Español */}
        <section className="prose prose-blue prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900">Habla el Idioma de los Expertos (Sin Anglicismos)</h2>
          <p>
            Para tener éxito, necesitas entender las métricas. Aquí tienes un adelanto del glosario detallado que encontrarás en el libro, adaptado totalmente al español:
          </p>
          <dl className="space-y-6">
            <dt className="font-bold text-blue-800 text-xl">Porcentaje de Clics (CTR)</dt>
            <dd className="text-slate-600">Indica cuántas personas de cada 100 que vieron tu anuncio decidieron hacer clic. Es la medida de qué tan atractivo es tu anuncio.</dd>
            
            <dt className="font-bold text-blue-800 text-xl">Ganancia por Clic (EPC)</dt>
            <dd className="text-slate-600">Es la métrica más importante. Te dice cuánto dinero ganas, en promedio, por cada clic que envías. Si tu Ganancia por Clic es mayor que lo que pagas por el clic, tienes un negocio rentable.</dd>
            
            <dt className="font-bold text-blue-800 text-xl">Retorno de la Inversión (ROI)</dt>
            <dd className="text-slate-600">El porcentaje de beneficio puro. Si inviertes $10 y ganas $15, tu retorno es del 50%.</dd>
            
            <dt className="font-bold text-blue-800 text-xl">Tasa de Conversión (CR)</dt>
            <dd className="text-slate-600">El porcentaje de personas que, tras hacer clic, completaron la acción requerida (como registrarse o descargar).</dd>
          </dl>
        </section>

        {/* Beneficios del Smartlink */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Adiós a la Parálisis</h4>
            <p className="text-sm text-slate-600">No tendrás que pasar horas investigando qué oferta promocionar. El sistema hace el trabajo pesado por ti.</p>
          </div>
          <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Maximiza tu Inversión</h4>
            <p className="text-sm text-slate-600">Cada clic cuenta. Si recibes tráfico de un país no previsto, el enlace lo redirige a la mejor oferta disponible allí.</p>
          </div>
          <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Aprende Ganando</h4>
            <p className="text-sm text-slate-600">Recibirás información valiosísima sobre qué países convierten mejor. Esa información es oro puro para el futuro.</p>
          </div>
        </section>

        {/* Contenido del Libro - Detalle por Capítulos */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Lo Que Realmente Aprenderás en esta Guía</h2>
          <p className="text-center text-lg text-slate-600 max-w-2xl mx-auto">
            No se trata de un libro para leer y guardar en una estantería. Es un manual de acción, una guía de campo que te acompañará en tus primeros pasos reales.
          </p>

          <div className="space-y-6">
            {[
              {
                cap: "Capítulo 1",
                title: "Los Cimientos del Éxito",
                desc: "Olvídate de la jerga técnica. Aquí te explico, con palabras sencillas, qué es el marketing de coste por acción, cómo funcionan las redes y cómo elegir las adecuadas para un principiante sin que te pongan trabas en el registro."
              },
              {
                cap: "Capítulo 2",
                title: "El Plan Antes de la Acción",
                desc: "El error más común es lanzarse a la piscina sin saber si hay agua. Aprenderás a crear un plan de 5 pasos antes de gastar un solo céntimo, aplicando la regla de los 3 filtros para no fracasar."
              },
              {
                cap: "Capítulo 3",
                title: "Marketing Sin Arruinarte",
                desc: "Te revelo mi método para probar ofertas con un presupuesto mínimo. Aprenderás a lanzar tu primera campaña de prueba con menos de $20 utilizando plataformas de publicidad económicas."
              },
              {
                cap: "Capítulo 4",
                title: "De Principiante a Profesional",
                desc: "Te enseño a construir un sistema de conversión sólido con herramientas sencillas. Aprenderás la diferencia entre una página de destino y un publirreportaje, y cuándo usar cada uno."
              },
              {
                cap: "Capítulo 5",
                title: "Tu Primera Campaña Real",
                desc: "Guía paso a paso con capturas de pantalla. Desde el registro en una red profesional hasta la configuración detallada de tu campaña para tener un control total sobre tu presupuesto."
              },
              {
                cap: "Capítulo 6",
                title: "Consejos de la Trinchera",
                desc: "Los pequeños detalles marcan la diferencia. Comparto mis trucos para negociar con plataformas de publicidad, pagar menos por las visitas y elegir países estratégicos."
              },
              {
                cap: "Capítulo 7",
                title: "El Seguimiento y los Datos",
                desc: "Sin datos, estás navegando a ciegas. Aprenderás a entender métricas clave como el porcentaje de clics, la tasa de conversión y el retorno de la inversión para saber cuándo detener una campaña."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xl">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">{item.cap}</h4>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Honestidad */}
        <section className="prose prose-blue prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900">Un Manual de Supervivencia Real</h2>
          <p>
            Lo que hace único a este libro es su enfoque brutalmente honesto y práctico. En un mundo lleno de falsas promesas, prefiero decirte la verdad desde el primer momento.
          </p>
          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h4 className="text-red-800 font-bold mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5" /> Lo que NO vas a encontrar:
              </h4>
              <ul className="text-sm space-y-2 list-none pl-0 text-red-700">
                <li>• Promesas de hacerte millonario en una semana.</li>
                <li>• Teorías complejas y difíciles de aplicar.</li>
                <li>• Lenguaje técnico incomprensible.</li>
                <li>• Estrategias que requieren miles de dólares.</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h4 className="text-green-800 font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Lo que SÍ vas a encontrar:
              </h4>
              <ul className="text-sm space-y-2 list-none pl-0 text-green-700">
                <li>• Un método probado y refinado con el tiempo.</li>
                <li>• Instrucciones paso a paso detalladas.</li>
                <li>• Gestión real del riesgo y del presupuesto.</li>
                <li>• La mentalidad de un afiliado profesional.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Preguntas de Cierre */}
        <section className="bg-blue-900 text-white p-12 rounded-[2rem] shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Responde Honestamente a Estas Preguntas</h2>
          <div className="space-y-6 max-w-xl mx-auto">
            {[
              "¿Quieres dejar de sentirte abrumado por tanta información contradictoria?",
              "¿Quieres aprender un método que te permita probar ofertas sin arriesgar más de $20?",
              "¿Quieres dejar de perder dinero en campañas que no funcionan y saber exactamente cuándo parar?",
              "¿Quieres entender, de una vez por todas, cómo funcionan las métricas para tomar decisiones inteligentes?",
              "¿Quieres construir un negocio digital desde cero, con tus propias manos, sin depender de la suerte?"
            ].map((q, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="mt-1 bg-blue-500 rounded-full p-1"><CheckCircle2 className="w-4 h-4" /></div>
                <p className="text-lg font-medium">{q}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-blue-200 italic">
            Si has respondido "sí" a alguna de estas preguntas, entonces este libro ha sido escrito específicamente para ti.
          </p>
        </section>

        {/* Sección de Precio / Inversión */}
        <section className="text-center space-y-8 py-12">
          <h2 className="text-4xl font-bold text-blue-950">Inversión: ¿Cuánto Cuesta Dejar de Aprender?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Imagina por un momento que pudieras ahorrarte los cientos o incluso miles de dólares que yo perdí al principio por no tener una guía clara. Imagina poder evitar meses de frustración y pruebas sin sentido.
          </p>
          
          <div id="comprar" className="inline-block p-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-2xl">
            <div className="bg-white px-6 md:px-10 py-12 rounded-[1.4rem] space-y-6">
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Precio de Lanzamiento Único</p>
              <div className="text-6xl font-black text-blue-900">$9,99</div>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">
                Menos de lo que cuesta una cena fuera de casa. Una inversión mínima para un conocimiento que puede cambiar tu futuro.
              </p>
              <a 
                href="https://fcofrancis.pay.clickbank.net/?cbitems=8" 
                className="block w-full py-7 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl font-black rounded-2xl shadow-2xl shadow-blue-300 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-4 text-center"
              >
                SÍ, QUIERO MI COPIA AHORA <ArrowRight className="w-6 h-6 flex-shrink-0" />
              </a>
              <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-100">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  <span className="text-xs font-bold text-slate-400 uppercase mt-1">Compra Segura</span>
                </div>
                <div className="flex flex-col items-center">
                  <Lock className="w-6 h-6 text-blue-600" />
                  <span className="text-xs font-bold text-slate-400 uppercase mt-1">Datos Protegidos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-left bg-slate-50 p-8 rounded-2xl border border-slate-200 mt-12">
            <h3 className="text-xl font-bold text-blue-900 mb-4">¿Qué pasará después de tu compra?</h3>
            <ol className="space-y-3 text-slate-600 text-sm">
              <li>1. Serás redirigido a nuestra pasarela de pago segura (encriptación de 256 bits).</li>
              <li>2. Una vez completado el pago, recibirás un correo electrónico inmediato con el enlace de descarga.</li>
              <li>3. Tendrás acceso de por vida al libro en formato digital (PDF), optimizado para leer en móvil, tableta u ordenador.</li>
              <li>4. Podrás empezar a aplicar el Capítulo 1 en menos de 5 minutos desde ahora.</li>
            </ol>
          </div>
        </section>

        {/* Garantía */}
        <section className="bg-blue-50 p-8 md:p-12 rounded-3xl border-2 border-dashed border-blue-200 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <div className="w-36 h-36 bg-white rounded-full border-4 border-blue-600 flex flex-col items-center justify-center text-blue-600 font-black shadow-lg p-4">
              <span className="text-2xl leading-none">30 DÍAS</span>
              <span className="text-sm uppercase tracking-tighter">Garantía</span>
            </div>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-blue-900">Mi Compromiso Contigo: 30 Días de Garantía Total</h3>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                Quiero que te sientas completamente seguro con tu decisión. Por eso, te ofrezco una garantía de devolución de 30 días. Tienes un mes completo para leer el libro, estudiar sus capítulos y poner en práctica sus enseñanzas.
              </p>
              <p>
                Si en ese tiempo consideras que no es lo que esperabas, que no te aporta valor o simplemente no estás satisfecho por cualquier motivo, me lo dices y te devolveré el importe íntegro de tu compra, sin hacer preguntas. El riesgo es cero para ti.
              </p>
            </div>
          </div>
        </section>

        {/* Sección: Mentalidad del Afiliado */}
        <section className="prose prose-blue prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900">La Mentalidad del Afiliado de Éxito: Más Allá de los Botones</h2>
          <p>
            Si crees que el marketing de afiliados es simplemente pulsar tres botones y ver cómo cae el dinero, este libro no es para ti. El éxito en este mundo requiere una mentalidad específica que la mayoría de los principiantes ignora.
          </p>
          <p>
            La primera cualidad es la <strong>paciencia estratégica</strong>. Verás que muchas de tus primeras pruebas no serán rentables de inmediato. Un principiante común se frustra y lo deja. Un afiliado con mentalidad de éxito ve esos $5 perdidos como el precio de una lección. Esos $5 le han dicho qué país no funciona, qué hora del día es mala y qué tipo de anuncio no atrae clics. Esa información vale mucho más que los $5 invertidos.
          </p>
          <p>
            La segunda cualidad es la <strong>disciplina en el seguimiento</strong>. Es tentador saltarse el paso de configurar el rastreador porque parece "complicado". Pero sin rastreador, no tienes negocio. En el Capítulo 7 te quito el miedo a estas herramientas y te muestro que son tus mejores aliadas.
          </p>
          <p>
            Finalmente, la <strong>curiosidad incansable</strong>. El mundo digital cambia. Las ofertas que funcionan hoy pueden no funcionar mañana. Mi libro no solo te da una fórmula estática, sino que te enseña a pensar y a adaptarte. Te enseño a pescar, no solo te doy el pez.
          </p>
        </section>

        {/* Sección: El Plan de las Primeras 24 Horas */}
        <section className="bg-slate-950 text-white p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h2 className="text-3xl font-bold mb-8 relative z-10">Tu Plan de Acción: Las Primeras 24 Horas</h2>
          <div className="space-y-8 relative z-10">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">1h</div>
              <div>
                <h4 className="font-bold text-xl mb-2">Lectura y Comprensión</h4>
                <p className="text-slate-400 text-sm">Lee los primeros tres capítulos. No intentes hacer nada todavía. Solo entiende el concepto de la Fórmula Smartlink y cómo se conecta todo.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">4h</div>
              <div>
                <h4 className="font-bold text-xl mb-2">Registro en Redes</h4>
                <p className="text-slate-400 text-sm">Sigue mis instrucciones para registrarte en las redes CPA que recomiendo. Te doy los trucos para que tu cuenta sea aprobada rápidamente.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">12h</div>
              <div>
                <h4 className="font-bold text-xl mb-2">Configuración del Rastreador</h4>
                <p className="text-slate-400 text-sm">Configura tu herramienta de seguimiento gratuita. Es el paso que separa a los niños de los hombres en este negocio.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">24h</div>
              <div>
                <h4 className="font-bold text-xl mb-2">Lanzamiento de la Primera Prueba</h4>
                <p className="text-slate-400 text-sm">Con tus primeros $5 o $10, lanza tu primera campaña siguiendo la guía paso a paso del Capítulo 5. ¡Ya estás en el juego!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: El Futuro del CPA */}
        <section className="prose prose-blue prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900">¿Es el Marketing CPA un Negocio de Futuro?</h2>
          <p>
            Muchos temen que el internet esté saturado. Nada más lejos de la realidad. Mientras existan empresas que necesiten clientes y personas que busquen soluciones, el marketing de afiliados seguirá existiendo.
          </p>
          <p>
            Lo que cambia es la tecnología. Por eso mi enfoque en el "enlace inteligente" es tan vital. No dependemos de una sola oferta que puede caducar mañana. Dependemos de un sistema inteligente que se adapta a las tendencias del mercado en tiempo real. Si mañana todo el mundo deja de usar Facebook y se pasa a una nueva red social, nuestro sistema seguirá funcionando porque el enlace inteligente encontrará la oferta adecuada para ese nuevo flujo de personas.
          </p>
          <p>
            Estás invirtiendo en una habilidad que será valiosa durante décadas. Aprender a comprar tráfico barato y convertirlo en acciones rentables es, posiblemente, la habilidad más lucrativa que puedes desarrollar en la era digital.
          </p>
        </section>

        {/* Sección de Compromiso Final */}
        <section className="text-center py-16 px-8 bg-blue-50 rounded-[3rem] border border-blue-100">
          <h2 className="text-4xl font-black text-blue-950 mb-6 leading-tight">Esta es tu Oportunidad de Dejar de Ser un Espectador</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Puedes cerrar esta página ahora mismo y seguir haciendo lo que has hecho hasta hoy. Pero ya sabes a dónde te lleva eso: a la misma frustración, a la misma confusión y a la misma falta de resultados.
          </p>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            O puedes decidir que hoy es el día en que tomas el control. Por menos de lo que cuesta un café y un bocadillo, tienes acceso a un mapa que me costó años y miles de dólares construir. No tienes nada que perder gracias a mi garantía de 30 días.
          </p>
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white text-3xl font-black rounded-2xl shadow-2xl shadow-blue-300 transition-all transform hover:-translate-y-2 cursor-pointer"
            >
              SÍ, QUIERO EMPEZAR HOY MISMO
            </button>
            <p className="text-slate-400 font-medium flex items-center gap-2">
              <Lock className="w-4 h-4" /> Acceso inmediato tras el pago seguro
            </p>
          </div>
        </section>

        {/* Cierre / Despedida */}
        <section className="prose prose-blue prose-lg max-w-none text-center">
          <h2 className="text-3xl font-bold text-blue-900">No Dejes que la Frustración Gane la Partida</h2>
          <p>
            El camino del emprendimiento digital está lleno de desafíos, pero el primer y más difícil obstáculo es el que está en tu cabeza: la confusión, el miedo y la falta de dirección.
          </p>
          <p>
            Este libro es tu brújula. Es el faro que te guiará en la oscuridad y te mostrará el puerto seguro de la primera campaña rentable. No se trata de ser perfecto, sino de ser constante. No se trata de tener un golpe de suerte, sino de tener un método.
          </p>
          <p className="font-bold text-blue-800">
            Tu viaje hacia el marketing de afiliados sin riesgos empieza aquí.
          </p>
          <div className="mt-12">
            <button 
              onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-extrabold rounded-2xl shadow-xl transition-all cursor-pointer"
            >
              CONSEGUIR MI COPIA AHORA <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-16 pt-10 border-t border-slate-100 space-y-4">
            <p className="text-slate-500 italic">
              Gracias por confiar en mí y por darme la oportunidad de ser tu guía en este fascinante mundo. Estoy seguro de que juntos conseguiremos que des el salto de la frustración a la acción.
            </p>
            <div className="font-bold text-blue-900 text-xl">Francisco González</div>
            <p className="text-sm text-slate-400">
              P.D. Recuerda que cuentas con una garantía de 30 días. No tienes nada que perder y un mundo de conocimiento que ganar. ¡Haz clic ahora y empieza a construir tu futuro!
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center text-slate-400 text-sm">
          <p>© 2026 CPA Marketing Fórmula Smartlink. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Botón flotante de compra (móvil) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button 
          onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-2xl shadow-blue-400 cursor-pointer"
        >
          COMPRAR POR $9,99
        </button>
      </div>
    </div>
  );
}
