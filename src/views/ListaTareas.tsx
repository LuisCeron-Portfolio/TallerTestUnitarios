import { useState, useEffect } from "react";

export default function ListaTareas() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const savedTasks = window.localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Lista de Tareas</h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex mb-4">
          <input 
            value={task} 
            onChange={e => setTask(e.target.value)} 
            placeholder="Nueva tarea"
            className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition duration-200 font-medium"
          >
            Agregar
          </button>
        </div>
        <ul>
          {tasks.map((t, i) => (
            <li key={i} className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
              <span className="text-gray-700">{t}</span>
              <button 
                onClick={() => removeTask(i)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200 text-sm"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
