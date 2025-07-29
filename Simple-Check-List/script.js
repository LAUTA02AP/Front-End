const newTaskInput = document.getElementById('newTaskInput'); 
const addTaskBtn = document.getElementById('addTaskBtn'); 
const taskList = document.getElementById('taskList'); 
const mensaje = document.getElementById('mensaje');

function addTask() {
    if (newTaskInput.value.trim() !== '') {
        let li = document.createElement("li");
        li.classList.add("task-item"); // 👈 Clase para el <li>

        let p = document.createElement("p");
        p.textContent = newTaskInput.value.trim();
        p.classList.add("task-text"); // 👈 Clase para el texto
        li.appendChild(p);

        // Grupo de opciones
        const grupoOpciones = document.createElement("div");
        grupoOpciones.classList.add("checklist-group"); // 👈 Agrupa las 3 opciones

        const opciones = [
            { texto: "Hecho", color: "green", clase: "hecho" },
            { texto: "Por hacer", color: "yellow", clase: "por-hacer" },
            { texto: "Sin hacer", color: "red", clase: "sin-hacer" }
        ];

        const grupoNombre = "grupo_" + Date.now();

        opciones.forEach(opcion => {
            const div = document.createElement("div");
            div.classList.add("check-option"); // 👈 Cada checkbox + label

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = grupoNombre;
            checkbox.dataset.color = opcion.color;
            checkbox.classList.add("task-checkbox"); // 👈 Checkbox clase

            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    const todos = li.querySelectorAll(`input[name="${grupoNombre}"]`);
                    todos.forEach(cb => {
                        if (cb !== checkbox) cb.checked = false;
                    });

                    // Limpiar clases previas de estado
                    li.classList.remove("hecho", "por-hacer", "sin-hacer");
                    li.classList.add(opcion.clase); // 👈 Agrega clase según estado
                } else {
                    li.classList.remove(opcion.clase);
                }
            });

            checkbox.addEventListener("click", (e) => {
                if (e.offsetX > 20) {
                    e.preventDefault();
                }
            });

            const label = document.createElement("label");
            label.textContent = opcion.texto;
            label.classList.add("task-label"); // 👈 Label clase

            div.appendChild(label); // Primero el texto
            div.appendChild(checkbox); // Después el cuadrado
            grupoOpciones.appendChild(div);
        });

        li.appendChild(grupoOpciones);
        taskList.appendChild(li);

        newTaskInput.value = '';
        mensaje.textContent = "ITEM AGREGADO";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "INGRESE UN ITEM!!";
        mensaje.style.color = "red";
    }
}

addTaskBtn.addEventListener('click', addTask);
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