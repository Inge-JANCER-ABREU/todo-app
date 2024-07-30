# Aplicación de Tareas

Esta es una aplicación simple de tareas construida con React. Permite a los usuarios agregar, completar y eliminar tareas, así como filtrar tareas según su estado de finalización.

## Características

- Agregar nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas
- Filtrar tareas por todas, activas o completadas
- Borrar todas las tareas completadas

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/todo-app.git
   cd todo-app

Componentes
App.js
Este es el componente principal de la aplicación. Gestiona el estado de la lista de tareas y el filtro activo. También contiene las siguientes funciones:

addTodo(title): Agrega un nuevo elemento a la lista de tareas.
handleSetComplete(id): Alterna el estado de completado de una tarea.
handleDelete(id): Elimina una tarea de la lista.
handleClearComplete(): Borra todas las tareas completadas.
showAllTodos(): Establece el filtro activo para mostrar todas las tareas.
showActiveTodos(): Establece el filtro activo para mostrar solo las tareas activas (incompletas).
showCompletedTodos(): Establece el filtro activo para mostrar solo las tareas completadas.
TodoInput.jsx
Este componente renderiza un campo de entrada donde los usuarios pueden escribir y agregar nuevas tareas. Tiene la siguiente función:

handleTodo(e): Agrega una nueva tarea cuando se presiona la tecla Enter.
TodoList.jsx
Este componente renderiza la lista de tareas y los filtros. Recibe props de App.js y utiliza las siguientes funciones:

handleSetComplete(id): Pasada desde App.js, alterna el estado de completado de una tarea.
handleDelete(id): Pasada desde App.js, elimina una tarea.
handleClearComplete(): Pasada desde App.js, borra todas las tareas completadas.
showAllTodos(): Pasada desde App.js, establece el filtro activo para mostrar todas las tareas.
showActiveTodos(): Pasada desde App.js, establece el filtro activo para mostrar solo las tareas activas (incompletas).
showCompletedTodos(): Pasada desde App.js, establece el filtro activo para mostrar solo las tareas completadas.
Todo.jsx
Este componente renderiza una sola tarea. Recibe props de TodoList.jsx y utiliza las siguientes funciones:

handleSetComplete(id): Pasada desde TodoList.jsx, alterna el estado de completado de una tarea.
handleDelete(id): Pasada desde TodoList.jsx, elimina una tarea.
TodoFilters.jsx
Este componente renderiza los botones de filtro y el botón de borrar completadas. Recibe props de TodoList.jsx y utiliza las siguientes funciones:

showAllTodos(): Pasada desde TodoList.jsx, establece el filtro activo para mostrar todas las tareas.
showActiveTodos(): Pasada desde TodoList.jsx, establece el filtro activo para mostrar solo las tareas activas (incompletas).
showCompletedTodos(): Pasada desde TodoList.jsx, establece el filtro activo para mostrar solo las tareas completadas.
handleClearComplete(): Pasada desde TodoList.jsx, borra todas las tareas completadas.
Uso
Abre la aplicación en tu navegador.
Escribe una nueva tarea en el campo de entrada y presiona Enter para agregarla a la lista.
Haz clic en el círculo junto a una tarea para marcarla como completa o incompleta.
Haz clic en la "X" junto a una tarea para eliminarla.
Usa los botones de filtro para mostrar todas las tareas, solo las tareas activas o solo las tareas completadas.
Haz clic en "Borrar Completadas" para eliminar todas las tareas completadas de la lista.
Contribuciones
Siéntete libre de bifurcar el repositorio y enviar pull requests. ¡Cualquier contribución es bienvenida!

Licencia
Este proyecto está licenciado bajo la Licencia MIT.
