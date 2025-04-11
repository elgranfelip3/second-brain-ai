import React from 'react';

/**
 * Componente de barra lateral que muestra las categorías y opciones principales
 * de la aplicación Second Brain AI.
 */
const Sidebar = () => {
  // Categorías principales de la aplicación
  const categories = [
    { name: 'Inicio', icon: '🏠' },
    { name: 'Notas', icon: '📝' },
    { name: 'Tareas', icon: '✅' },
    { name: 'Documentos', icon: '📄' },
    { name: 'Etiquetas', icon: '🏷️' },
    { name: 'Favoritos', icon: '⭐' },
    { name: 'Papelera', icon: '🗑️' },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col h-screen">
      <div className="flex items-center mb-8">
        <span className="text-3xl mr-2">🧠</span>
        <h1 className="text-xl font-bold">Second Brain AI</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <a 
                href="#" 
                className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors"
              >
                <span className="mr-3 text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto pt-4 border-t border-gray-700">
        <div className="flex items-center p-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
            <span>U</span>
          </div>
          <div>
            <p className="text-sm font-medium">Usuario</p>
            <p className="text-xs text-gray-400">usuario@ejemplo.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 