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
    { nombre: "Producción y Gestión", estado: "En Curso", nota: null, periodo: "ANUAL", correlativas: ["Construcciones III"] },
    { nombre: "Estructuras IV", estado: "Pendiente", nota: null, periodo: "ANUAL", correlativas: ["Estructuras III"] },
    { nombre: "Topografía", estado: "En Curso", nota: null, periodo: "ANUAL", correlativas: [] },
    { nombre: "Urbanismo II", estado: "Aprobada", nota: 6, periodo: "ANUAL", correlativas: ["Urbanismo I"] },
    { nombre: "Equipamiento", estado: "Aprobada", nota: 9, periodo: "ANUAL", correlativas: ["Arquitectura IV"] },
    { nombre: "Arquitectura V", estado: "En Curso", nota: null, periodo: "ANUAL", correlativas: ["Arquitectura IV", "Construcciones III"] }
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

function guardarProgreso() {
  localStorage.setItem('mallaFAUD', JSON.stringify(materias));
  actualizarBarraProgreso();
}

function crearMalla(filtro = 'Todas') {
  const malla = document.getElementById('malla');
  malla.innerHTML = "";
  let todasMaterias = [];
  for (const [anio, lista] of Object.entries(materias)) {
    const columna = document.createElement('div');
    columna.className = 'year-column';
    const titulo = document.createElement('h2');
    titulo.textContent = anio;
    columna.appendChild(titulo);

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
        ["Aprobada", "En Curso", "Pendiente"].forEach(estado => {
          const option = document.createElement('option');
          option.value = estado;
          option.textContent = estado;
          if (materia.estado === estado) option.selected = true;
          select.appendChild(option);
        });
        select.addEventListener('change', e => {
          materia.estado = e.target.value;
          if (materia.estado !== 'Aprobada') {
            materia.nota = null; // Clear note if not approved
          } else if (materia.nota === null) {
             materia.nota = 7; // Default note if approved and no note exists
          }
          guardarProgreso();
          crearMalla(filtro);
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
            const correlativasPendientes = materia.correlativas.filter(correl => !estaAprobada(correl));
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

function habilitada(materia) {
    if (!materia.correlativas || materia.correlativas.length === 0) {
        return true;
    }
    return materia.correlativas.every(correl => estaAprobada(correl));
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
  progressBar.style.height = `${porcentaje}%`;
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    crearMalla();
});
