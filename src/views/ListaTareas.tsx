import { useState } from "react";

export default function ListaTareas() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

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
    <div>
      <h2>Lista de Tareas</h2>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTask}>Agregar</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => removeTask(i)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
