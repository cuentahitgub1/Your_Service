// Simulación de datos de trabajadores
const trabajadores = [
    { id: 1, nombre: 'Juan Pérez', rol: 'Electricista', calificacion: 4.5 },
    { id: 2, nombre: 'Ana Gómez', rol: 'Plomera', calificacion: 4.0 },
    { id: 3, nombre: 'Carlos Ruiz', rol: 'Albañil', calificacion: 4.8 }
];

// Cargar trabajadores en el DOM
function cargarTrabajadores() {
    const listaTrabajadores = document.getElementById('lista-trabajadores');
    const selectTrabajador = document.getElementById('trabajador');

    trabajadores.forEach(trabajador => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${trabajador.nombre} - ${trabajador.rol} - Calificación: ${trabajador.calificacion}⭐</h3>`;
        listaTrabajadores.appendChild(div);

        const option = document.createElement('option');
        option.value = trabajador.id;
        option.textContent = trabajador.nombre;
        selectTrabajador.appendChild(option);
    });
}

// Manejar la solicitud de servicio
document.getElementById('form-solicitud').addEventListener('submit', function(event) {
    event.preventDefault();
    const trabajadorId = document.getElementById('trabajador').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    alert(`Solicitud enviada para el trabajador ID: ${trabajadorId} el ${fecha} a las ${hora}`);
});

// Cargar los trabajadores al inicio
document.addEventListener('DOMContentLoaded', cargarTrabajadores);