const defaultMaterias = {
  'Nivelación': [
    { nombre: "Introducción a la Problemática del Diseño y su Expresión", estado: "Aprobada", nota: 7, periodo: "NIVELACION", correlativas: [] },
    { nombre: "Estrategias de Aprendizaje", estado: "Aprobada", nota: 7, periodo: "NIVELACION", correlativas: [] }
  ],
  '1° Año': [
    { nombre: "Introducción a la Tecnología", estado: "Aprobada", nota: 7, periodo: "ANUAL", correlativas: [] },
    { nombre: "Introducción a la Historia de la Arquitectura y el Urbanismo", estado: "Aprobada", nota: 10, periodo: "ANUAL", correlativas: [] },
    { nombre: "Sistemas Gráficos de Expresión", estado: "Aprobada", nota: 10, periodo: "ANUAL", correlativas: [] },
    { nombre: "Morfología I", estado: "Aprobada", nota: 9, periodo: "ANUAL", correlativas: [] },
    { nombre: "Arquitectura I", estado: "Aprobada", nota: 10, periodo: "ANUAL", correlativas: [] },
    { nombre: "Matemática I", estado: "Aprobada", nota: 8, periodo: "PRIMER CUATRIMESTRE", correlativas: [] },
    { nombre: "Física", estado: "Aprobada", nota: 7, periodo: "PRIMER CUATRIMESTRE", correlativas: [] }
  ],
  '2° Año': [
    { nombre: "Construcciones I", estado: "Aprobada", nota: 7, periodo: "ANUAL", correlativas: ["Sistemas Gráficos de Expresión", "Introducción a la Tecnología"] },
    { nombre: "Instalaciones I", estado: "Aprobada", nota: 8, periodo: "ANUAL", correlativas: ["Física", "Introducción a la Tecnología"] },
    { nombre: "Estructuras I", estado: "Aprobada", nota: 8, periodo: "ANUAL", correlativas: ["Matemática I", "Física"] },
    { nombre: "Historia de la Arquitectura I", estado: "Aprobada", nota: 5, periodo: "ANUAL", correlativas: ["Introducción a la Historia de la Arquitectura y el Urbanismo"] },
    { nombre: "Teorías y Métodos", estado: "Aprobada", nota: 7, periodo: "ANUAL", correlativas: ["Arquitectura I", "Introducción a la Historia de la Arquitectura y el Urbanismo"] },
    { nombre: "Morfología II", estado: "Aprobada", nota: 7, periodo: "ANUAL", correlativas: ["Morfología I", "Sistemas Gráficos de Expresión"] },
    { nombre: "Arquitectura II", estado: "Aprobada", nota: 10, periodo: "ANUAL", correlativas: ["Arquitectura I"] }
  ],
  '3° Año': [
    { nombre: "Construcciones II", estado: "Aprobada", nota: 9, periodo: "ANUAL", correlativas: ["Arquitectura II", "Construcciones I"] },
    { nombre: "Instalaciones II", estado: "Aprobada", nota: 4, periodo: "ANUAL", correlativas: ["Instalaciones I"] },
    { nombre: "Estructuras II", estado: "Aprobada", nota: 6, periodo: "ANUAL", correlativas: ["Estructuras I"] },
    { nombre: "Historia de la Arquitectura II", estado: "Aprobada", nota: 6, periodo: "ANUAL", correlativas: ["Historia de la Arquitectura I", "Teorías y Métodos"] },
    { nombre: "Morfología III", estado: "Aprobada", nota: 8, periodo: "ANUAL", correlativas: ["Arquitectura II", "Morfología II"] },
    { nombre: "Arquitectura III", estado: "Aprobada", nota: 8, periodo: "ANUAL", correlativas: ["Arquitectura II"] },
    { nombre: "Matemática II", estado: "Aprobada", nota: 7, periodo: "PRIMER CUATRIMESTRE", correlativas: ["Matemática I"] },
    { nombre: "Informática", estado: "Aprobada", nota: 8, periodo: "ANUAL", correlativas: [] }
  ],
  '4° Año': [
    { nombre: "Construcciones III", estado: "Pendiente", nota: null, periodo: "ANUAL", correlativas: ["Construcciones II"] },
    { nombre: "Estructuras III", estado: "Pendiente", nota: null, periodo: "ANUAL", correlativas: ["Estructuras II"] },
    { nombre: "Historia de la Arquitectura III", estado: "Aprobada", nota: null, periodo: "ANUAL", correlativas: ["Historia de la Arquitectura II"] },
    { nombre: "Urbanismo I", estado: "Aprobada", nota: 9, periodo: "ANUAL", correlativas: ["Arquitectura III", "Morfología II"] },
    { nombre: "Arquitectura Paisajista", estado: "Aprobada", nota: 10, periodo: "ANUAL", correlativas: ["Morfología III"] },
    { nombre: "Arquitectura IV", estado: "Aprobada", nota: 10, periodo: "ANUAL", correlativas: ["Arquitectura III", "Construcciones II"] },
    { nombre: "Instalaciones III", estado: "Aprobada", nota: 5, periodo: "ANUAL", correlativas: ["Instalaciones II"] }
  ],
  '5° Año': [
    { nombre: "Producción y Gestión", estado: "Regularizada", nota: null, periodo: "ANUAL", correlativas: ["Construcciones III"] }, // Cambiado a Regularizada para ejemplo
    { nombre: "Estructuras IV", estado: "Pendiente", nota: null, periodo: "ANUAL", correlativas: ["Estructuras III"] },
    { nombre: "Topografía", estado: "En Curso", nota: null, periodo: "ANUAL", correlativas: [] },
    { nombre: "Urbanismo II", estado: "Aprobada", nota: 6, periodo: "ANUAL", correlativas: ["Urbanismo I"] },
    { nombre: "Equipamiento", estado: "Aprobada", nota: 9, periodo: "ANUAL", correlativas: ["Arquitectura IV"] },
    { nombre: "Arquitectura V", estado: "Regularizada", nota: null, periodo: "ANUAL", correlativas: ["Arquitectura IV", "Construcciones III"] } // Cambiado a Regularizada para ejemplo
  ],
  '6° Año': [
    { nombre: "Arquitectura VI", estado: "Pendiente", nota: null, periodo: "ANUAL", correlativas: ["Arquitectura V"] }
  ],
  'Nivel VI - Optativas/Genérica P.P.A.': [
    { nombre: "Práctica Profesional Asistida", estado: "Pendiente", nota: null, periodo: "ANUAL", correlativas: ["Arquitectura V"] }
  ],
  'Nivel XX - Idioma': [
    { nombre: "Portugués", estado: "Pendiente", nota: null, periodo: "ANUAL", correlativas: [] },
    { nombre: "Inglés", estado: "Aprobada", nota: 7, periodo: "ANUAL", correlativas: [] }
  ]
};

let materias = JSON.parse(localStorage.getItem('mallaFAUD')) || defaultMaterias;
let collapsedYears = JSON.parse(localStorage.getItem('collapsedYears')) || [];

function guardarProgreso() {
  localStorage.setItem('mallaFAUD', JSON.stringify(materias));
  actualizarBarraProgreso();
}

function guardarEstadoColapsado() {
  localStorage.setItem('collapsedYears', JSON.stringify(collapsedYears));
}

function crearMalla(filtro = 'Todas') {
  const malla = document.getElementById('malla');
  malla.innerHTML = "";
  let todasMaterias = [];

  for (const [anio, lista] of Object.entries(materias)) {
    const columna = document.createElement('div');
    columna.className = 'year-column';
    columna.dataset.year = anio; // Store year for collapsing

    const titulo = document.createElement('h2');
    titulo.textContent = anio;
    titulo.addEventListener('click', () => toggleCollapse(anio)); // Add click listener to title
    columna.appendChild(titulo);

    // Apply collapsed state from localStorage
    if (collapsedYears.includes(anio)) {
        columna.classList.add('collapsed');
    }

    lista.forEach(materia => {
      todasMaterias.push(materia);
      if (filtro === 'Todas' || filtro === materia.estado) {
        const card = document.createElement('div');
        const isDisabled = !habilitada(materia);
        card.className = `card ${claseEstado(materia.estado)} ${isDisabled ? 'disabled' : ''}`;

        const nombre = document.createElement('div');
        nombre.textContent = materia.nombre;
        card.appendChild(nombre);

        const periodo = document.createElement('div');
        periodo.className = 'period';
        periodo.textContent = `Período: ${materia.periodo}`;
        card.appendChild(periodo);

        const select = document.createElement('select');
        ["Aprobada", "En Curso", "Regularizada", "Pendiente"].forEach(estado => { // Added Regularizada
          const option = document.createElement('option');
          option.value = estado;
          option.textContent = estado;
          if (materia.estado === estado) option.selected = true;
          select.appendChild(option);
        });
        select.addEventListener('change', e => {
          materia.estado = e.target.value;
          if (materia.estado === 'Aprobada') {
            if (materia.nota === null) materia.nota = 7; // Default note if approved and no note exists
          } else {
            materia.nota = null; // Clear note if not approved
          }
          guardarProgreso();
          crearMalla(filtro); // Re-render to update disabled states
        });
        card.appendChild(select);

        const notaInput = document.createElement('input');
        notaInput.type = 'number';
        notaInput.min = 4;
        notaInput.max = 10;
        notaInput.placeholder = 'Nota';
        notaInput.value = materia.nota || '';
        notaInput.disabled = materia.estado !== 'Aprobada';
        notaInput.addEventListener('change', e => {
          let nota = parseInt(e.target.value);
          if (nota < 4) nota = 4;
          if (nota > 10) nota = 10;
          materia.nota = nota;
          guardarProgreso();
        });
        card.appendChild(notaInput);

        if (isDisabled && materia.correlativas && materia.correlativas.length > 0) {
            const correlativasPendientes = materia.correlativas.filter(correl => !estaAprobada(correl) && !estaRegularizada(correl));
            if (correlativasPendientes.length > 0) {
                const info = document.createElement('div');
                info.className = 'correlatives-info';
                info.textContent = `Correlativas pendientes: ${correlativasPendientes.join(', ')}`;
                card.appendChild(info);
            }
        }

        columna.appendChild(card);
      }
    });
    malla.appendChild(columna);
  }
  actualizarBarraProgreso();
}

function filtrar(filtro) {
  crearMalla(filtro);
}

function claseEstado(estado) {
  if (estado === 'Aprobada') return 'aprobada';
  if (estado === 'En Curso') return 'en-curso';
  if (estado === 'Regularizada') return 'regularizada'; // New class
  return 'pendiente';
}

function getMateriaPorNombre(nombreMateria) {
  for (const lista of Object.values(materias)) {
    for (const mat of lista) {
      if (mat.nombre === nombreMateria) {
        return mat;
      }
    }
  }
  return null;
}

function estaAprobada(nombreMateria) {
  const materia = getMateriaPorNombre(nombreMateria);
  return materia && materia.estado === 'Aprobada';
}

function estaRegularizada(nombreMateria) {
    const materia = getMateriaPorNombre(nombreMateria);
    return materia && (materia.estado === 'Aprobada' || materia.estado === 'Regularizada');
}

function habilitada(materia) {
    if (!materia.correlativas || materia.correlativas.length === 0) {
        return true;
    }
    // A materia is habilitada if all its correlativas are Aprobada or Regularizada
    return materia.correlativas.every(correl => estaRegularizada(correl));
}

// Función para obtener el color de la barra en relación al porcentaje
function getColorForPercentage(percent) {
  let r, g, b;

  // Colores de referencia más suaves
  const red = [229, 115, 115];    // Un rojo suave (Material Design - Red 300)
  const yellow = [255, 202, 40];  // Un amarillo suave (Material Design - Amber 500)
  const green = [129, 199, 132];  // Un verde suave (Material Design - Green 300)

  if (percent <= 50) {
    // Transición de Rojo a Amarillo
    const ratio = percent / 50;
    r = Math.round(red[0] + ratio * (yellow[0] - red[0]));
    g = Math.round(red[1] + ratio * (yellow[1] - red[1]));
    b = Math.round(red[2] + ratio * (yellow[2] - red[2]));
  } else {
    // Transición de Amarillo a Verde
    const ratio = (percent - 50) / 50;
    r = Math.round(yellow[0] + ratio * (green[0] - yellow[0]));
    g = Math.round(yellow[1] + ratio * (green[1] - yellow[1]));
    b = Math.round(yellow[2] + ratio * (green[2] - yellow[2]));
  }
  return `rgb(${r},${g},${b})`;
}

function actualizarBarraProgreso() {
  let totalMaterias = 0;
  let materiasAprobadas = 0;

  for (const lista of Object.values(materias)) {
    totalMaterias += lista.length;
    materiasAprobadas += lista.filter(m => m.estado === 'Aprobada').length;
  }

  const porcentaje = totalMaterias === 0 ? 0 : (materiasAprobadas / totalMaterias) * 100;
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const progressBarContainer = document.getElementById('progress-bar-container');

  // Set the width of the inner bar (the filled part)
  progressBar.style.width = `${porcentaje}%`;

  // Set the background color based on the percentage using the new, softer palette
  progressBar.style.background = getColorForPercentage(porcentaje);


  // Update the percentage text
  progressText.textContent = `${Math.round(porcentaje)}%`;

  // Posicionar el texto y la estrella con los nuevos retiros
  const containerWidth = progressBarContainer.offsetWidth;

  // Medir el ancho del texto para un posicionamiento preciso
  const tempText = document.createElement('span');
  tempText.style.visibility = 'hidden';
  tempText.style.position = 'absolute';
  tempText.textContent = progressText.textContent;
  document.body.appendChild(tempText);
  const textWidth = tempText.offsetWidth;
  document.body.removeChild(tempText);


  // Definir offsets mejorados
  const textLeftOffset = 15; // Offset del texto desde el inicio de la barra
  const starTotalWidth = 30; // Ancho aproximado de la estrella + su espacio, para cálculo de colisión
  const spaceBetweenTextAndStar = 10; // Espacio mínimo deseado entre el texto y la estrella

  let actualTextPosition;

  // Calculamos la posición deseada si el texto estuviera "fijo" al inicio de la barra
  const fixedStartPos = textLeftOffset;

  // Calculamos la posición deseada si el texto estuviera cerca de la estrella
  // Consideramos el final de la barra, restamos el ancho de la estrella + espacio, y el ancho del texto
  const endOfBarPos = (porcentaje / 100) * containerWidth;
  const posNearStar = endOfBarPos - starTotalWidth - spaceBetweenTextAndStar - textWidth;


  // Lógica para decidir la posición del texto:
  // Si la barra es lo suficientemente ancha para contener el texto y la estrella cómodamente,
  // podemos intentar centrar el texto o ponerlo en una posición más avanzada dentro de la barra.
  // Si no, lo mantenemos en el inicio de la barra.

  // Si el porcentaje es muy bajo, mantener el texto cerca del inicio del contenedor.
  if (porcentaje < 10) { // Umbral para mantener el texto al inicio
      actualTextPosition = fixedStartPos;
  } else if (endOfBarPos > (textWidth + textLeftOffset + starTotalWidth + spaceBetweenTextAndStar)) {
      // Si hay espacio suficiente, centrar el texto en la parte llena de la barra
      actualTextPosition = endOfBarPos - (textWidth / 2) - (starTotalWidth / 2); // Intenta centrar en el espacio disponible antes de la estrella
      // Asegurarse de que no se superponga con el inicio
      actualTextPosition = Math.max(actualTextPosition, fixedStartPos);
  } else {
      // Si el espacio es limitado, el texto se moverá hacia la estrella
      actualTextPosition = Math.max(fixedStartPos, posNearStar);
  }

  // Asegurarse de que el texto no se salga del borde derecho del contenedor
  actualTextPosition = Math.min(actualTextPosition, containerWidth - textWidth - 5);


  progressText.style.left = `${actualTextPosition}px`;
}

// Collapse functionality
function toggleCollapse(year) {
    const yearColumn = document.querySelector(`.year-column[data-year="${year}"]`);
    if (yearColumn) {
        yearColumn.classList.toggle('collapsed');
        if (collapsedYears.includes(year)) {
            collapsedYears = collapsedYears.filter(y => y !== year);
        } else {
            collapsedYears.push(year);
        }
        guardarEstadoColapsado();
    }
}

function toggleCollapseAll() {
    const allYearColumns = document.querySelectorAll('.year-column');
    const allCompletedYears = [];

    // Identify years where ALL materias are Aprobada
    for (const [anio, lista] of Object.entries(materias)) {
        if (lista.every(materia => materia.estado === 'Aprobada')) {
            allCompletedYears.push(anio);
        }
    }

    const toggleBtn = document.getElementById('toggle-collapse-btn');

    if (collapsedYears.length === allCompletedYears.length && collapsedYears.every(y => allCompletedYears.includes(y))) {
        // All completed years are currently collapsed, so expand all
        collapsedYears = []; // Clear collapsed state
        toggleBtn.textContent = 'Comprimir Años Completados';
    } else {
        // Not all completed years are collapsed, so collapse them
        collapsedYears = allCompletedYears; // Set collapsed to all completed
        toggleBtn.textContent = 'Expandir Todos los Años';
    }

    guardarEstadoColapsado();
    crearMalla(); // Re-render the malla to apply new collapse states
}


// Initial load
document.addEventListener('DOMContentLoaded', () => {
    crearMalla();
});
