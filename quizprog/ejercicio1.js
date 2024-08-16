// aqui estoy creando la lista de tareas:)
const tareas = [

    {
        id: 1,
        texto: 'Recolectar la piedra',
        completada: false
    },
    {
        id: 2,
        texto: 'tomar juguito',
        completada: false
    },
    {
        id: 3,
        texto: 'ver anime',
        completada: false }
    
]

function markTaskAsCompleted(tareas) {
   tareas.forEach((tarea) => {
       if (tarea.id === 2) {
           tarea.completada = true
       }
   })
   return tareas
}

console.log(markTaskAsCompleted(tareas))