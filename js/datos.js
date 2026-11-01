/* =====================================================================
   ARCHIVO DE DATOS: aquí editas TODO el contenido del juego.
   Reglas para no romperlo:
   - Respeta las comillas "así" y las comas al final de cada línea.
   - Para LIBERAR un archivo de Umbra, cambia  liberado:false  por  liberado:true
   - Cada cambio se guarda en GitHub (Commit changes) y en 1-2 minutos
     los jugadores lo ven al recargar la página.
   ===================================================================== */
const UMBRA = {

  // ---------- Parte pública (se ve sin iniciar sesión) ----------
  publico: {
    sobreNosotros: "Umbra Dynamics opera en la frontera de la bio-tecnología avanzada y el despliegue de soluciones tácticas globales.",
    objetivo: "// OBJETIVO: Preservar la supremacía de los líderes de facción ante escenarios de colapso planetario.",
    altoMando: [
      { nombre: "DIRECTOR V.",       estatus: "Activo",         rol: "Fundador de la Iniciativa Umbra." },
      { nombre: "COMANDANTE THORNE", estatus: "En Operaciones", rol: "Dirección de Seguridad de Facción." }
    ]
  },

  // ---------- Los 3 jugadores (cada uno solo ve SU expediente) ----------
  // id y clave: lo que escribe el jugador para entrar.
  agentes: [
    {
      id: "AGENTE-01", clave: "cambia-esta-clave-1",
      expediente: {
        nombre: "NOMBRE DEL LÍDER 1",
        alias: "Alias conocido por Umbra",
        nivelAmenaza: "ALTO",
        estado: "Paradero desconocido",
        resumen: "Escribe aquí lo que Umbra sabe de este líder.",
        notas: ["Nota de Umbra 1.", "Nota de Umbra 2."]
      }
    },
    {
      id: "AGENTE-02", clave: "cambia-esta-clave-2",
      expediente: {
        nombre: "NOMBRE DEL LÍDER 2", alias: "", nivelAmenaza: "ALTO",
        estado: "Bajo vigilancia", resumen: "Escribe aquí lo que Umbra sabe de este líder.",
        notas: ["Nota de Umbra 1."]
      }
    },
    {
      id: "AGENTE-03", clave: "cambia-esta-clave-3",
      expediente: {
        nombre: "NOMBRE DEL LÍDER 3", alias: "", nivelAmenaza: "CRÍTICO",
        estado: "Objetivo prioritario", resumen: "Escribe aquí lo que Umbra sabe de este líder.",
        notas: ["Nota de Umbra 1."]
      }
    }
  ],

  // ---------- Archivos secretos de Umbra (liberado:false = bloqueado) ----------
  archivos: [
    {
      codigo: "PROYECTO: ÉBANO", titulo: "Manifiesto del Virus Molecular",
      clasificacion: "Nivel 5 / Alto Secreto",
      detalle: "Muestras aisladas obtenidas del Sector Norte. Reportes indican mutación celular acelerada y comportamiento hostil en los especímenes.",
      estado: "BLOQUEADO // BAJO ESTUDIO", critico: true, liberado: false
    },
    {
      codigo: "REGISTRO: #UD-992", titulo: "Bitácora de Incidente - Sector 4",
      clasificacion: "Nivel 4",
      detalle: "Falla en los reactores cuánticos principales provocó una brecha temporal de 42 segundos. Protocolo de limpieza ejecutado con éxito.",
      estado: "REGISTRO ARCHIVADO", critico: false, liberado: false
    }
  ]
};
