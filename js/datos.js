/* =====================================================================
   ARCHIVO DE DATOS: aquí editas TODO el contenido del juego.
   Reglas para no romperlo:
   - Respeta las comillas "así" y las comas al final de cada línea.
   - Para LIBERAR un archivo de Umbra, cambia  liberado:false  por  liberado:true
   - IMÁGENES: sube el archivo a la carpeta img/ y escribe su ruta en foto: o imagen:
     (ej: foto: "img/lider1.jpg"). Si lo dejas "" no se muestra nada.
   - CRÉDITOS: escribe el nombre del artista en fotoCredito: o imagenCredito:
     (ej: fotoCredito: "@nombre_artista"). Si quieres que sea un enlace, pon también
     fotoCreditoUrl: "https://..." (o imagenCreditoUrl:). Solo se muestra si hay imagen.
   - Cada cambio se guarda en GitHub (Commit changes) y en 1-2 minutos
     los jugadores lo ven al recargar la página.
   ===================================================================== */
const UMBRA = {

  // ---------- Parte pública (se ve sin iniciar sesión) ----------
  publico: {
    sobreNosotros: "Umbra Dynamics opera en la frontera de la bio-tecnología avanzada y el despliegue de soluciones tácticas globales.",
    objetivo: "// OBJETIVO: Preservar la supremacía de los líderes de facción ante escenarios de colapso planetario.",
    // Registro de personal que se ve en "Alto Mando".
    // Cada sección es una tabla: columnas = títulos, filas = una lista por línea.
    altoMando: {
      titulo: "REGISTRO INTERNO // ESTADO DEL PERSONAL",
      secciones: [
        { nombre: "DIRECCIÓN Y ADMINISTRACIÓN", columnas: ["PERSONAL", "CARGO", "ESTATUS"], filas: [
          ["DR. ELIAS VOSS", "DIRECTOR CIENTÍFICO", "ACTIVO"],
          ["VICTORIA HALE", "DIRECTORA EJECUTIVA", "ACTIVO"],
          ["ADRIAN KELLER", "JEFE DE INVESTIGACIÓN", "EN OPERACIÓN"]
        ]},
        { nombre: "DIVISIÓN MÉDICA Y CIENTÍFICA", columnas: ["PERSONAL", "CARGO", "ESTATUS"], filas: [
          ["DRA. HELENA WEISS", "DIRECTORA MÉDICA", "ACTIVO"],
          ["DR. NATHANIEL CROSS", "INVESTIGADOR PRINCIPAL", "EN OPERACIÓN"],
          ["MIRIAM FOSTER", "TÉCNICA DE LABORATORIO", "ACTIVO"]
        ]},
        { nombre: "DIVISIÓN DE SEGURIDAD", columnas: ["PERSONAL", "CARGO", "ESTATUS"], filas: [
          ["MARCUS REINHARDT", "JEFE DE SEGURIDAD", "ACTIVO"],
          ["ELENA GRAVES", "OFICIAL DE SEGURIDAD", "EN SERVICIO"],
          ["UNIDAD G-07", "GUARDIA DE INSTALACIONES", "EN SERVICIO"]
        ]},
        { nombre: "OTRAS DIVISIONES", columnas: ["DEPARTAMENTO", "ESTATUS"], filas: [
          ["RECURSOS HUMANOS", "ACTIVO"],
          ["RELACIONES PÚBLICAS", "ACTIVO"],
          ["ARCHIVO CENTRAL", "OPERATIVO"],
          ["DIVISIÓN TÁCTICA", "EN OPERACIÓN"],
          ["OBSERVACIÓN", "ACTIVO"],
          ["SISTEMAS Y COMUNICACIONES", "OPERATIVO"]
        ]}
      ]
    }
  },

  // ---------- Los 3 jugadores (cada uno solo ve SU expediente) ----------
  // id y clave: lo que escribe el jugador para entrar.
  agentes: [
    {
      id: "Cross.Nathaniel_3", clave: "NOCTIS.AETERNA",
      expediente: {
        nombre: "Diego Aquino Thorne",
        foto: "", fotoCredito: "", fotoCreditoUrl: "",
        alias: "Noctis",
        nivelAmenaza: "POR DEFINIR",
        estado: "Bajo observación... ¿Futura amenaza?",
        resumen: `El sujeto Aquino ha demostrado ser un individuo bastante interesante durante los últimos años. A diferencia de otros sujetos, no hemos conseguido determinar si posee alguna característica que lo haga especialmente resistente al virus. Sin embargo, su capacidad para sobrevivir y mantener a otros bajo su liderazgo ha despertado nuestra curiosidad.

Desde antes del colapso, Aquino mantenía una estrecha amistad con Rubén Doblas y Avery. Tres amigos que terminaron separándose y formando sus propias facciones. Qué lamentable... Aunque debemos admitir que fue bastante entretenido observar cómo aquella amistad terminó deteriorándose, especialmente después del pequeño incidente sentimental entre nuestro querido oso y Aquino.

Pobre muchacho, entregar sus sentimientos y recibir semejante rechazo. Lo más divertido es que todavía desconoce la verdadera razón por la que Rubén decidió alejarse. ¿Qué sucederá cuando descubra la verdad? Nos encantaría observar su reacción.

Con el paso de los años, Aquino consiguió formar una organización conocida como Los Oscuros, actualmente denominada La Élite. El sujeto parece tomarse demasiado en serio su responsabilidad como líder, llegando incluso a anteponer la seguridad de sus integrantes a sus propios intereses. Qué admirable... y qué estúpido. ¿Acaso cree que podrá protegerlos a todos?

Hemos notado que Aquino procura mantener una actitud reservada, ocultando sus sentimientos detrás de aquella máscara. Sin embargo, no resulta demasiado complicado identificar sus debilidades. Su mayor problema siempre ha sido el mismo: encariñarse con las personas equivocadas.

Actualmente, su segundo al mando es Ranboo, un individuo que parece haberse ganado completamente su confianza. También hemos identificado un acercamiento bastante particular hacia Duxo. Qué curioso... Después de lo ocurrido con Rubén, nuestro querido Aquino parece dispuesto a enamorarse nuevamente. Nos preguntamos si esta vez tendrá un final diferente.

La pérdida de memoria de Rubén también ha resultado bastante conveniente para nuestras investigaciones. Aquino continúa preocupándose por él, a pesar de que el oso apenas recuerda parte de su pasado. Quizá podamos aprovechar esa situación más adelante. Después de todo, ¿qué mejor manera de debilitar a alguien que utilizando aquello que más le importa?

Por ahora, no consideramos necesario intervenir directamente. Aquino no es un experimento confirmado, pero su influencia sobre La Élite podría convertirse en un problema para nuestros planes. Seguiremos observándolo mientras continúa creyendo que tiene el control de su propia vida.

Qué ingenuo.

Sería verdaderamente lamentable que, después de tantos esfuerzos por mantener unida a su organización, terminara perdiéndolo todo.`,
        notas: [
          "«El sujeto presenta una fuerte tendencia a proteger a sus allegados, incluso cuando esto podría ponerlo en peligro.»",
          "«Notamos un acercamiento sentimental hacia Duxo. Seguiremos investigando hasta qué punto esta relación podría influir en sus decisiones.»",
          "«Su vínculo con Rubén Doblas continúa siendo relevante. La amnesia del oso podría favorecer futuras operaciones.»",
          "«La confianza depositada en Ranboo, su segundo al mando, representa un factor importante para la estabilidad de La Élite.»",
          "«No hemos confirmado una infección en el sujeto. Se recomienda continuar vigilando su estado de salud y cualquier posible alteración.»",
          "Recuerden: Mantengan vigilado a Aquino y a los integrantes de su facción. No necesitamos actuar todavía, pero tampoco podemos permitir que su influencia continúe creciendo sin supervisión.",
          "Nos resulta divertido observar cómo intenta proteger a todos los que ama. Quizá algún día tengamos la oportunidad de demostrarle que ni siquiera él puede salvarlos de nosotros."
        ]
      }
    },
    {
      id: "ELENA.GRAVES", clave: "MEMENTO.MORI_731",
      expediente: {
        nombre: "Rubén Doblas Gürdensen",
        foto: "", fotoCredito: "", fotoCreditoUrl: "",
        alias: "land uten minner",
        nivelAmenaza: "POR DEFINIR",
        estado: "Experimento...¿Fallido?",
        resumen: `El sujeto de pruebas con el paso de los años, demostró ser un buen experimento hasta el momento. Pero todo cambio desde que comenzó a estar rodeado de supuestos "amigos".

Rubén conforme avanzo la infección demostró una resistencia a portarlo, pero, igualmente se puede infectar, hemos intentado en más de una ocasión hacer que el virus entre en su sistema, pero hemos fallado...Es un maldito afortunado.

Estuvimos bastante cerca cuando el trio de amigos decidió formar cada uno una faccion, pobres, terminaron muy heridos unos con otros. En especial con ese chico Aquino, rechazar su amor correspondido, dan lástima...Es tan divertido, Umbra se divierte viendo como el oso lamenta cada día su rechazo, ¿Que opinará ese chico al saber la verdad del porque fue rechazado?

El oso es el sujeto perfecto para corromper en este momento, la perdida de la memoria nos favorece en mayoría para futuros experimentos, probablemente gracias a el, aumentemos la efectividad del virus. Seguiremos investigando el avance de su amnesia, las cosas van a nuestro favor.

Rubén en su misma estupida ignorancia será el caballo de troya, las perdidas que ha tenido y seguirá teniendo, nos hará tener un mejor rendimiento en cuanto a la evolución del experimento.

La faccion que maneja le da cierta "ventaja" los infectados no logran llegar hasta el y su gente, es un maldito semi animal que busca solo esconderse de sus penas y su dolor, que lamentable debe ser. Seguiremos divirtiéndonos de su miseria por un tiempo más, mientras aún nos parezca divertido, nuestra paciencia es poca y limitada, si falla, como lo han hecho experimentos anteriores, nos encargaremos de desecharlo o eliminarlo.`,
        notas: [
          "Datos: La lamentable vida del sujeto de pruebas nos favorece, seguiremos vigilando y siendo pacientes, pero no por mucho tiempo.",
          "Encontramos divertida su vida, ponerle algo que lo haga sufrir y guarde todo, nos parece gracioso.",
          "Notamos cierro acercamiento a Aquino y a una semi criatura enderman, sigue bajo investigación la cercania que tiene hacia ellos.",
          "Tuvo una perdida reciente de unonde sus hijos, aprovecharemos la vulnerabilidad que se presente en dias futuros y los momentos solitarios del sujeto de pruebas.",
          "Recuerden: Vigilen el estado de salud del oso, necesitamos confirmar su infección."
        ]
      }
    },
    {
      id: "Alistair-Voss", clave: "lasciate_ogni_speranza",
      expediente: {
        nombre: "Avery Green Brook",
        foto: "", fotoCredito: "", fotoCreditoUrl: "",
        alias: "The Failed Vessel",
        nivelAmenaza: "POR DEFINIR",
        estado: "Experimento en curso",
        resumen: `Avery es, sin duda, una de las mayores decepciones que hemos tenido que documentar.

Se le presentó una oportunidad que cualquier otro sujeto habría aprovechado. Una posibilidad de trascender su insignificante existencia y convertirse en algo verdaderamente extraordinario. ¿Y qué hizo con ella?

Resistirse.

Aferrarse a su miserable humanidad como si todavía tuviera algún valor. Continúa jugando a ser un líder, dando órdenes, protegiendo a otros y creyendo que sus decisiones tienen alguna importancia.

Qué espectáculo tan repulsivo.

Su arrogancia resulta particularmente irritante. Camina entre los demás como si tuviera el control, como si su posición entre los Corruptos lo convirtiera en alguien importante. No comprende que ni siquiera es dueño de sí mismo.

Y lo más vergonzoso es su incapacidad para aceptar aquello que lleva dentro.

El Rey Amarillo le ha concedido una presencia que jamás habría podido alcanzar por sus propios medios, y aun así sigue oponiendo resistencia. Un recipiente imperfecto, una voluntad obstinada y una mente demasiado limitada para comprender la magnitud de lo que se le ha ofrecido.

Nos resulta desagradable tener que seguir registrando sus constantes fracasos.

Avery no es una víctima. Tampoco es un héroe.

Es un individuo patético que insiste en creerse protagonista de una historia que nunca le perteneció.

Que quede registrado: nuestra paciencia se está agotando.

Si no es capaz de cumplir con aquello para lo que resulta útil, encontraremos a alguien que sí lo sea.

Y cuando eso ocurra, no habrá absolutamente nada que pueda hacer al respecto.`,
        notas: [
          "Dato: Continúa decepcionándonos. Su resistencia resulta irritante y su incapacidad para comprender su propia condición es patética.",
          "No sentimos interés por su bienestar. Solo esperamos que deje de desperdiciar el potencial que se le ha concedido.",
          "Recuerden: Avery es un experimento, no una prioridad."
        ]
      }
    }
  ],

  // ---------- Archivos secretos de Umbra (liberado:false = bloqueado) ----------
  archivos: [
    {
      codigo: "PROYECTO: ÉBANO", titulo: "Manifiesto del Virus Molecular",
      clasificacion: "Nivel 5 / Alto Secreto",
      detalle: "Muestras aisladas obtenidas del Sector Norte. Reportes indican mutación celular acelerada y comportamiento hostil en los especímenes.",
      imagen: "", imagenCredito: "", imagenCreditoUrl: "", estado: "BLOQUEADO // BAJO ESTUDIO", critico: true, liberado: false
    },
    {
      codigo: "REGISTRO: #UD-992", titulo: "Bitácora de Incidente - Sector 4",
      clasificacion: "Nivel 4",
      detalle: "Falla en los reactores cuánticos principales provocó una brecha temporal de 42 segundos. Protocolo de limpieza ejecutado con éxito.",
      imagen: "", imagenCredito: "", imagenCreditoUrl: "", estado: "REGISTRO ARCHIVADO", critico: false, liberado: false
    }
  ]
};
