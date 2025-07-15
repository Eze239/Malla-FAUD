
const materias = [
  { nombre: "Introducción a la Problemática del Diseño", nivel: 1, estado: "Aprobada" },
  { nombre: "Estrategias de Aprendizaje", nivel: 1, estado: "Aprobada" },
  { nombre: "Introducción a la Tecnología", nivel: 1, estado: "Aprobada" },
  { nombre: "Sistemas Gráficos de Expresión", nivel: 1, estado: "Aprobada" },
  { nombre: "Arquitectura I", nivel: 1, estado: "Aprobada" },
  { nombre: "Matemática I", nivel: 1, estado: "Aprobada" },

  { nombre: "Construcciones I", nivel: 2, estado: "Aprobada" },
  { nombre: "Instalaciones I", nivel: 2, estado: "Aprobada" },
  { nombre: "Estructuras I", nivel: 2, estado: "Aprobada" },
  { nombre: "Historia de la Arquitectura I", nivel: 2, estado: "Aprobada" },
  { nombre: "Arquitectura II", nivel: 2, estado: "Aprobada" },

  { nombre: "Construcciones II", nivel: 3, estado: "Aprobada" },
  { nombre: "Instalaciones II", nivel: 3, estado: "Aprobada" },
  { nombre: "Estructuras II", nivel: 3, estado: "Aprobada" },
  { nombre: "Historia de la Arquitectura II", nivel: 3, estado: "Aprobada" },
  { nombre: "Arquitectura III", nivel: 3, estado: "Aprobada" },

  { nombre: "Construcciones III", nivel: 4, estado: "En Curso" },
  { nombre: "Instalaciones III", nivel: 4, estado: "Pendiente" },
  { nombre: "Estructuras III", nivel: 4, estado: "Pendiente" },
  { nombre: "Arquitectura IV", nivel: 4, estado: "Pendiente" },

  { nombre: "Producción y Gestión", nivel: 5, estado: "Pendiente" },
  { nombre: "Arquitectura V", nivel: 5, estado: "Pendiente" },
  { nombre: "Arquitectura VI", nivel: 6, estado: "Pendiente" },
];

const malla = document.getElementById('malla');

function crearMalla(lista) {
  malla.innerHTML = "";
  lista.forEach(materia => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(claseEstado(materia.estado));

    const nombre = document.createElement('h3');
    nombre.textContent = materia.nombre;

    const select = document.createElement('select');
    ["Aprobada", "En Curso", "Pendiente"].forEach(estado => {
      const option = document.createElement('option');
      option.value = estado;
      option.textContent = estado;
      if (estado === materia.estado) option.selected = true;
      select.appendChild(option);
    });

    select.addEventListener('change', e => {
      materia.estado = e.target.value;
      crearMalla(materias);
    });

    card.appendChild(nombre);
    card.appendChild(select);
    malla.appendChild(card);
  });
}

function claseEstado(estado) {
  if (estado === "Aprobada") return 'aprobada';
  if (estado === "En Curso") return 'en-curso';
  return 'pendiente';
}

function filtrar(filtro) {
  if (filtro === 'Todas') crearMalla(materias);
  else crearMalla(materias.filter(m => m.estado === filtro));
}

crearMalla(materias);
