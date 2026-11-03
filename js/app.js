/* Lógica del juego. No necesitas tocar este archivo para cambiar el contenido. */
const $ = s => document.querySelector(s);
const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let sonido = sessionStorage.getItem('sonido') === '1';
let audio = null;

function pitido(f = 880, d = .05, tipo = 'square', v = .03) {
  if (!sonido) return;
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const o = audio.createOscillator(), g = audio.createGain();
    o.type = tipo; o.frequency.value = f; g.gain.value = v;
    o.connect(g); g.connect(audio.destination); o.start(); o.stop(audio.currentTime + d);
  } catch (e) {}
}
function textoBotonSonido() { return sonido ? 'SONIDO: ON' : 'SONIDO: OFF'; }
function alternarSonido(btn) {
  sonido = !sonido; sessionStorage.setItem('sonido', sonido ? '1' : '0');
  btn.textContent = textoBotonSonido(); pitido(1200, .08);
}
function escribir(el, texto, vel = 16) {
  return new Promise(ok => {
    if (reducir) { el.textContent = texto; return ok(); }
    el.textContent = ''; let i = 0;
    (function paso() {
      if (i < texto.length) { el.textContent += texto[i++]; if (i % 4 === 0) pitido(1500, .012, 'square', .008); setTimeout(paso, vel); }
      else ok();
    })();
  });
}
function glitch(el) { el.classList.remove('titulo-glitch'); void el.offsetWidth; el.classList.add('titulo-glitch'); pitido(180, .15, 'sawtooth', .04); }
function esc(t) { const d = document.createElement('div'); d.textContent = t == null ? '' : t; return d.innerHTML; }
const norm = t => (t || '').trim().toLowerCase();

/* ------------------------- PÁGINA DE ENTRADA ------------------------- */
async function vista(etiqueta, titulo, texto, extraHTML, botones) {
  $('.caja').classList.remove('ancha');
  $('#etiqueta').textContent = etiqueta;
  const h = $('#titulo'); h.textContent = titulo; glitch(h);
  $('#acciones').innerHTML = '';
  const t = $('#texto'); t.classList.remove('nota');
  $('#extra').innerHTML = extraHTML || '';
  await escribir(t, texto);
  const a = $('#acciones');
  botones.forEach(b => {
    const e = document.createElement('button');
    e.className = 'btn' + (b.suave ? ' suave' : ''); e.textContent = b.t;
    e.onclick = () => { pitido(900, .05); b.fn(); }; a.appendChild(e);
  });
}
function menu() {
  vista('[ MENÚ PRINCIPAL ]', 'DIRECTORIO CENTRAL', 'Seleccione el módulo de información corporativa que desea consultar.', '', [
    { t: 'Sobre Nosotros', fn: sobreNosotros },
    { t: 'Quiénes Somos', fn: altoMando },
    { t: 'Archivos Protegidos_', fn: pedirClave }
  ]);
}
function sobreNosotros() {
  vista('[ EXPEDIENTE // MANIFIESTO ]', 'SOBRE NOSOTROS', UMBRA.publico.sobreNosotros + '\n\n' + UMBRA.publico.objetivo, '',
    [{ t: '◀ VOLVER AL MENÚ', fn: menu, suave: true }]);
}
function tablaPersonal(sec) {
  const th = sec.columnas.map(c => '<th>' + esc(c) + '</th>').join('');
  const tr = sec.filas.map(f => '<tr>' + f.map(c => '<td>' + esc(c) + '</td>').join('') + '</tr>').join('');
  return '<h3>' + esc(sec.nombre) + '</h3><table><thead><tr>' + th + '</tr></thead><tbody>' + tr + '</tbody></table>';
}
function altoMando() {
  const r = UMBRA.publico.altoMando;
  vista('[ REGISTRO INTERNO ]', 'ALTO MANDO', r.titulo,
    '<div class="tabla-scroll">' + r.secciones.map(tablaPersonal).join('') + '</div>',
    [{ t: '◀ VOLVER AL MENÚ', fn: menu, suave: true }]);
  $('.caja').classList.add('ancha');
}
function pedirClave() {
  vista('[ AUTENTICACIÓN REQUERIDA ]', 'SISTEMA ENCRIPTADO', 'El directorio de nivel 4/5 exige identificador de agente y código de desencriptación.',
    '<input id="in-id" class="campo" placeholder="ID DE AGENTE_" autocomplete="off" autocapitalize="characters">' +
    '<input id="in-clave" type="password" class="campo" placeholder="CONTRASEÑA_" autocomplete="off">' +
    '<div id="error"></div>', [
      { t: 'DESENCRIPTAR_', fn: validar },
      { t: '◀ ABORTAR PROTOCOLO', fn: menu, suave: true }
    ]);
  setTimeout(() => { const i = $('#in-clave'); if (i) i.addEventListener('keydown', e => { if (e.key === 'Enter') validar(); }); }, 50);
}
function validar() {
  const id = norm($('#in-id').value), clave = $('#in-clave').value.trim();
  const ag = UMBRA.agentes.find(a => norm(a.id) === id && a.clave === clave);
  if (ag) {
    sessionStorage.setItem('agente', ag.id);
    pitido(1400, .12, 'sine', .05);
    $('#error').innerHTML = '';
    $('#texto').textContent = '[SISTEMA]: Código verificado. Abriendo bóveda...';
    setTimeout(() => { window.location.href = 'directorio.html'; }, 900);
  } else {
    $('#error').innerHTML = '<div class="error">🚨 [ACCESO DENEGADO]<br>Vuestro destino se encamina al eterno dolor. Intento registrado.</div>';
    glitch($('#titulo')); $('.caja').classList.add('glitch');
    setTimeout(() => $('.caja').classList.remove('glitch'), 800);
  }
}
async function arranque() {
  const btnS = $('#btn-sonido'); btnS.textContent = textoBotonSonido(); btnS.onclick = () => alternarSonido(btnS);
  const lineas = ['> Conectando a nodo anónimo...', '> Cifrado de capa 3 activo.', '> Terminal U.M.B.R.A. detectada.'];
  const t = $('#texto'); t.classList.add('nota');
  for (const l of lineas) { await escribir(t, l, 14); await new Promise(r => setTimeout(r, reducir ? 0 : 350)); }
  $('#acciones').innerHTML = '<button class="btn" id="btn-entrar">PRESIONA PARA CONTINUAR</button>';
  $('#btn-entrar').onclick = () => { pitido(900, .06); menu(); };
}

/* --------------------------- DIRECTORIO ------------------------------ */
function imgHTML(im) {
  if (!im || !im.src) return '';
  const q = t => String(t).replace(/"/g, '&quot;');
  let pie = '';
  if (im.credito) {
    const nombre = esc(im.credito);
    const enlace = /^https?:\/\//i.test(im.url || '') ? '<a href="' + q(im.url) + '" target="_blank" rel="noopener noreferrer">' + nombre + '</a>' : nombre;
    pie = '<figcaption>Arte: ' + enlace + '</figcaption>';
  }
  return '<figure class="fig"><img class="foto" src="' + q(im.src) + '" alt="" loading="lazy" onerror="this.parentNode.remove()">' + pie + '</figure>';
}
function ficha(clase, cab, nombre, cuerpo, sello, rojo, img) {
  return '<div class="ficha ' + clase + '"><div class="cab">' + esc(cab) + '</div>' + imgHTML(img) + '<div class="nombre">' + nombre + '</div>' +
    '<div class="datos">' + cuerpo + '</div>' + (sello ? '<div class="sello' + (rojo ? ' rojo' : '') + '">' + esc(sello) + '</div>' : '') + '</div>';
}
function directorio() {
  const id = sessionStorage.getItem('agente');
  const ag = UMBRA.agentes.find(a => a.id === id);
  if (!ag) { window.location.replace('index.html'); return; }
  $('#agente').textContent = 'AGENTE ACTIVO: ' + ag.id;
  const btnS = $('#btn-sonido'); btnS.textContent = textoBotonSonido(); btnS.onclick = () => alternarSonido(btnS);
  $('#btn-salir').onclick = () => { sessionStorage.removeItem('agente'); window.location.href = 'index.html'; };

  const e = ag.expediente;
  const notas = e.notas && e.notas.length ? '<ul>' + e.notas.map(n => '<li>' + esc(n) + '</li>').join('') + '</ul>' : '';
  $('#mi-expediente').innerHTML = ficha('amenaza', 'EXPEDIENTE PERSONAL // AMENAZA: ' + e.nivelAmenaza, esc(e.nombre),
    (e.alias ? '<strong>Alias:</strong> ' + esc(e.alias) + '<br>' : '') + '<strong>Estado:</strong> ' + esc(e.estado) + '<br><br>' + '<span class="resumen">' + esc(e.resumen) + '</span>' + notas,
    'OBJETIVO DE UMBRA', true, { src: e.foto, credito: e.fotoCredito, url: e.fotoCreditoUrl });

  $('#archivos').innerHTML = UMBRA.archivos.map(a => a.liberado
    ? ficha(a.critico ? 'amenaza' : '', a.codigo, esc(a.titulo), '<strong>Clasificación:</strong> ' + esc(a.clasificacion) + '<br>' + esc(a.detalle), a.estado, a.critico, { src: a.imagen, credito: a.imagenCredito, url: a.imagenCreditoUrl })
    : ficha('bloq', a.codigo, '<span class="tachado">████████████</span>', '<span class="tachado">██████ ████ ██████</span> ██████ ███', 'ACCESO RESTRINGIDO', true)
  ).join('');
  glitch($('header h1'));
}
