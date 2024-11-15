import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 
export const AddTask = () =>{
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
 
  const handleAddTask = () => {
    if (title.trim() && description.trim()) {
      const newTask = {
        id: Date.now(),
        title,
        description,
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      navigate('/'); // Redirigir a la lista de tareas
    }
  };
 
  return (
<div>
<h2>Agregar Tarea</h2>
<div className="mb-3">
<label htmlFor="title" className="form-label">Título</label>
<input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
</div>
<div className="mb-3">
<label htmlFor="description" className="form-label">Descripción</label>
<textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
</div>
<button className="btn btn-success" onClick={handleAddTask}>Guardar Tarea</button>
</div>
  );
}
 
