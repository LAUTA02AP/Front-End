// Seleccionar elementos del DOM 
const newTaskInput = document.getElementById('newTaskInput'); //tarea
const addTaskBtn = document.getElementById('addTaskBtn'); //boton
const taskList = document.getElementById('taskList'); //lista

// Función para agregar una nueva tarea 
function addTask() {
    console.log(newTaskInput.value)
    if (newTaskInput.value != '') {
        let li = document.createElement("li");
        let p = document.createElement("p");
        let tarea = newTaskInput.value;
        p.textContent = tarea;
        li.appendChild(p);
        taskList.appendChild(li);
        newTaskInput.value = '';
        mensaje.textContent = "ITEM AGREGADO";
        mensaje.style.color = "green";
        agregarCheckboxEstado(li)
    }
    else {
        mensaje.textContent = "INGRESE UN ITEM!!";
        mensaje.style.color = "red";
    }
}

// Esta función agrega los checkboxes al <li> recibido
function agregarCheckboxEstado(li) {
    const estados = ['Hecho', 'En-proceso', 'Sin-hacer'];
    const checkboxes = [];

    estados.forEach(estado => {
        const label = document.createElement('label');
        label.style.marginRight = '10px';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = estado;

    // Evento: cuando se marca un checkbox
    checkbox.addEventListener('change', () => {
        // Desmarcar los otros
        checkboxes.forEach(c => {
            if (c !== checkbox) c.checked = false;
        });

        // Cambiar color según cuál está marcado
        if (checkbox.checked) {
            if (checkbox.value === 'Hecho') {
                li.style.backgroundColor = 'palegreen ';
            } else if (checkbox.value === 'En-proceso') {
                li.style.backgroundColor = 'lightblue';
            } else if (checkbox.value === 'Sin-hacer') {
                li.style.backgroundColor = 'lightcoral';
            }
        } else {
        // Si se desmarcan todos, quitar color
            li.style.backgroundColor = '';
        }
    });

    checkboxes.push(checkbox);

    label.appendChild(checkbox);
    label.append(' ' + estado);
    li.appendChild(label);
    });
}

// Agregar evento al botón de agregar tarea 
addTaskBtn.addEventListener('click', addTask);
// Agregar evento para detectar Enter en el input
newTaskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});



/*Completa el código JavaScript para agregar tareas a la lista cuando se hace 
clic en el botón «Agregar tarea». 
Cada vez que se agrega una nueva tarea, el campo de texto debe 
limpiarse. 
,Luego de hacer clic en el botón en el elemento span del Mensaje de 
estado debe aparecer "ITEM AGREGADO" en color verde cuando este se 
agrega a la lista; o "INGRESE UN ITEM!!" en color rojo si al hacer clic no 
hay ningún texto. */