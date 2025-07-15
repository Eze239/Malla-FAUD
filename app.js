
const materias = {
  '1º Año': [
    { nombre: "Introducción a la Problemática del Diseño", estado: "Aprobada" },
    { nombre: "Estrategias de Aprendizaje", estado: "Aprobada" },
    { nombre: "Introducción a la Tecnología", estado: "Aprobada" },
    { nombre: "Sistemas Gráficos de Expresión", estado: "Aprobada" },
    { nombre: "Arquitectura I", estado: "Aprobada" },
    { nombre: "Matemática I", estado: "Aprobada" },
    { nombre: "Física", estado: "Aprobada" }
  ],
  '2º Año': [
    { nombre: "Construcciones I", estado: "Pendiente" },
    { nombre: "Instalaciones I", estado: "Pendiente" },
    { nombre: "Estructuras I", estado: "Pendiente" },
    { nombre: "Historia de la Arquitectura I", estado: "Pendiente" },
    { nombre: "Teorías y Métodos", estado: "Pendiente" },
    { nombre: "Morfología II", estado: "Pendiente" },
    { nombre: "Arquitectura II", estado: "Pendiente" }
  ],
  '3º Año': [
    { nombre: "Construcciones II", estado: "Pendiente" },
    { nombre: "Instalaciones II", estado: "Pendiente" },
    { nombre: "Estructuras II", estado: "Pendiente" },
    { nombre: "Historia de la Arquitectura II", estado: "Pendiente" },
    { nombre: "Morfología III", estado: "Pendiente" },
    { nombre: "Arquitectura III", estado: "Pendiente" },
    { nombre: "Matemática II", estado: "Pendiente" },
    { nombre: "Informática", estado: "Pendiente" }
  ]
};

function crearMalla(materias, filtro = 'Todas') {
  const malla = document.getElementById('malla');
  malla.innerHTML = "";
  for (const [año, lista] of Object.entries(materias)) {
    const columna = document.createElement('div');
    columna.className = 'year-column';
    const titulo = document.createElement('h2');
    titulo.textContent = año;
    columna.appendChild(titulo);
    lista.forEach(materia => {
      if (filtro === 'Todas' || filtro === materia.estado) {
        const card = document.createElement('div');
        card.className = `card ${claseEstado(materia.estado)}`;
        const nombre = document.createElement('div');
        nombre.textContent = materia.nombre;
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
          crearMalla(materias, filtro);
        });
        card.appendChild(nombre);
        card.appendChild(select);
        columna.appendChild(card);
      }
    });
    malla.appendChild(columna);
  }
}

function filtrar(filtro) {
  crearMalla(materias, filtro);
}

function claseEstado(estado) {
  if (estado === 'Aprobada') return 'aprobada';
  if (estado === 'En Curso') return 'en-curso';
  return 'pendiente';
}

crearMalla(materias);
