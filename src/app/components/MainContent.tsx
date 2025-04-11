import React from 'react';

/**
 * Componente principal que muestra el contenido central de la aplicación,
 * incluyendo las tarjetas de notas, tareas y funcionalidades principales.
 */
const MainContent = () => {
  // Datos de ejemplo para las tarjetas
  const notes = [
    { id: 1, title: 'Planificación semanal', content: 'Organizar tareas y objetivos para la semana del 15 al 21 de abril', date: '12/04/2023', tags: ['trabajo', 'planificación'] },
    { id: 2, title: 'Ideas para proyecto', content: 'Lluvia de ideas para el nuevo proyecto de inteligencia artificial', date: '10/04/2023', tags: ['proyecto', 'ideas'] },
    { id: 3, title: 'Recetas saludables', content: 'Recopilación de recetas saludables para la cena', date: '08/04/2023', tags: ['salud', 'comida'] },
  ];
  
  // Datos de ejemplo para las tareas
  const tasks = [
    { id: 1, title: 'Completar informe trimestral', completed: false, dueDate: '15/04/2023' },
    { id: 2, title: 'Llamar al proveedor', completed: true, dueDate: '10/04/2023' },
    { id: 3, title: 'Preparar presentación', completed: false, dueDate: '18/04/2023' },
  ];

  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Bienvenido a tu Second Brain</h1>
        <p className="text-gray-600 dark:text-gray-300">Organiza tus ideas, tareas y conocimientos con la ayuda de IA</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sección de notas recientes */}
        <section className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Notas recientes</h2>
            <button className="btn-primary text-sm">Nueva nota</button>
          </div>
          
          <div className="space-y-4">
            {notes.map(note => (
              <div key={note.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                <h3 className="font-medium">{note.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-2">{note.content}</p>
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    {note.tags.map(tag => (
                      <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{note.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de tareas pendientes */}
        <section className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Tareas pendientes</h2>
            <button className="btn-secondary text-sm">Nueva tarea</button>
          </div>
          
          <div className="space-y-2">
            {tasks.map(task => (
              <div key={task.id} className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  className="mr-3 h-5 w-5 text-primary"
                  readOnly
                />
                <div className="flex-1">
                  <p className={`${task.completed ? 'line-through text-gray-500' : ''}`}>{task.title}</p>
                  <p className="text-xs text-gray-500">Vence: {task.dueDate}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sección de sugerencias de IA */}
      <section className="mt-8 card bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">✨</span>
          <h2 className="text-xl font-semibold">Sugerencias de IA</h2>
        </div>
        <p className="mb-4">Basado en tus notas y tareas, te sugerimos:</p>
        <ul className="space-y-2 ml-6 list-disc">
          <li>Organizar una reunión para discutir el nuevo proyecto de IA</li>
          <li>Planificar tus comidas de la semana usando tus recetas guardadas</li>
          <li>Reservar tiempo para completar el informe trimestral</li>
        </ul>
      </section>
    </div>
  );
};

export default MainContent; 